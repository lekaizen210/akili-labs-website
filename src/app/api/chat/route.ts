import type { NextRequest } from "next/server";
import { getAnthropicClient } from "@/lib/chat/anthropic-client";
import { classifyIntent, DEFAULT_FALLBACK_RESULT } from "@/lib/chat/orchestrator";
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

/**
 * Route API du chat (Lot 1 — infrastructure). À ce stade, seul l'agent Orchestrateur
 * est branché : la réponse streamée est une trace brute de la classification
 * d'intention, pas encore la réponse d'un agent spécialisé (Lot 2).
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

      const raw =
        `Intention détectée : ${result.intent} (langue : ${result.language}). ` +
        "L'agent spécialisé correspondant sera branché au Lot 2.";

      for (const word of raw.split(" ")) {
        controller.enqueue(sseEvent("delta", { text: `${word} ` }));
        await new Promise((resolve) => setTimeout(resolve, 20));
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
