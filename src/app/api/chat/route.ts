import type { NextRequest } from "next/server";
import { getAnthropicClient } from "@/lib/chat/anthropic-client";
import { classifyIntent, DEFAULT_FALLBACK_RESULT } from "@/lib/chat/orchestrator";
import { streamSpecialistResponse } from "@/lib/chat/specialist-agent";
import { runQualificationTurn } from "@/lib/chat/qualification-flow";
import { getGuardrailResponse } from "@/lib/chat/guardrail";
import type { ChatRequestBody } from "@/lib/chat/types";
import { BASE_URL } from "@/lib/seo";

// Runtime Node.js (SDK Anthropic + accès réseau), pas Edge — cf. Stack technique §3.
export const runtime = "nodejs";

const ALLOWED_ORIGINS = new Set([BASE_URL, "https://test.akililabs.io", "http://localhost:3000"]);

const encoder = new TextEncoder();

function sseEvent(event: string, data: unknown): Uint8Array {
  return encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

function isValidBody(body: unknown): body is ChatRequestBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.locale === "string" &&
    typeof b.conversation_id === "string" &&
    Array.isArray(b.messages) &&
    b.messages.length > 0 &&
    b.messages.every(
      (m) =>
        m &&
        typeof m === "object" &&
        (m as Record<string, unknown>).role &&
        typeof (m as Record<string, unknown>).content === "string"
    )
  );
}

const GENERIC_ERROR: Record<"fr" | "en", string> = {
  fr: "Une erreur est survenue. Merci de réessayer ou de contacter contact@akililabs.io.",
  en: "Something went wrong. Please try again or contact contact@akililabs.io.",
};

/**
 * Route API du chat. Orchestration multi-agents (Architecture §3.1) :
 * 2a. classification d'intention (Orchestrateur, non streamé)
 * 2b. réponse de l'agent spécialisé routé (FAQ / Qualification / Support), streamée —
 *     ou réponse de garde-fou directe pour les cas hors-périmètre (Lot 2).
 * L'agent Qualification peut déclencher le tool capture_lead → webhook Odoo CRM,
 * avec fallback email si le webhook échoue (Lot 3).
 */
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return Response.json({ error: "Origine non autorisée" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "JSON invalide" }, { status: 400 });
  }

  if (!isValidBody(body)) {
    return Response.json(
      { error: "Requête invalide : locale, conversation_id et messages (non vide) sont requis" },
      { status: 400 }
    );
  }

  const { messages } = body;

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let result = DEFAULT_FALLBACK_RESULT;
      try {
        result = await classifyIntent(getAnthropicClient(), messages);
      } catch (error) {
        console.error("[api/chat] échec de classification, fallback FAQ appliqué", error);
      }

      controller.enqueue(sseEvent("intent", result));

      try {
        if (result.intent === "guardrail") {
          controller.enqueue(sseEvent("delta", { text: getGuardrailResponse(result.language) }));
        } else if (result.intent === "qualification") {
          await runQualificationTurn(getAnthropicClient(), messages, result.language, body.conversation_id, (chunk) =>
            controller.enqueue(sseEvent("delta", { text: chunk }))
          );
        } else {
          for await (const chunk of streamSpecialistResponse(
            getAnthropicClient(),
            result.intent,
            messages,
            result.language
          )) {
            controller.enqueue(sseEvent("delta", { text: chunk }));
          }
        }
      } catch (error) {
        console.error("[api/chat] échec de l'agent spécialisé, message générique renvoyé", error);
        controller.enqueue(sseEvent("delta", { text: GENERIC_ERROR[result.language] }));
      }

      controller.enqueue(sseEvent("done", {}));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
