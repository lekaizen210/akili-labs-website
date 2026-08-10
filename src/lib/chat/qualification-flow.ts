import type Anthropic from "@anthropic-ai/sdk";
import { QUALIFICATION_SYSTEM_PROMPT } from "./qualification-prompt";
import { CAPTURE_LEAD_TOOL, validateLeadInput } from "./capture-lead-tool";
import { submitLeadToOdoo } from "./odoo-webhook";
import { sendFallbackLeadEmail } from "./email-fallback";
import { toAnthropicMessagesWithAttachments } from "./anthropic-messages";
import type { ChatMessage } from "./types";

const SPECIALIST_MODEL_QUALIFICATION = process.env.SPECIALIST_MODEL_QUALIFICATION ?? "claude-sonnet-5";
const LANGUAGE_LABEL: Record<"fr" | "en", string> = { fr: "français", en: "anglais" };

/** Sous-ensemble du SDK Anthropic requis — permet d'injecter un mock en test. */
export type AnthropicStreamingClient = {
  messages: {
    create: (
      params: Anthropic.MessageCreateParamsStreaming
    ) => Promise<AsyncIterable<Anthropic.RawMessageStreamEvent>>;
  };
};

type ToolUseCapture = { id: string; name: string; inputJson: string };
type BlockAccumulator = { type: "text" | "tool_use"; text?: string; toolUse?: ToolUseCapture };

type ConsumeResult = {
  toolUse: ToolUseCapture | null;
  assistantContent: Anthropic.ContentBlockParam[];
};

/** Consomme un tour streamé : relaie le texte via onText, capture un éventuel tool_use. */
async function consumeStream(
  client: AnthropicStreamingClient,
  params: Anthropic.MessageCreateParamsStreaming,
  onText: (chunk: string) => void
): Promise<ConsumeResult> {
  const stream = await client.messages.create(params);
  const blocks = new Map<number, BlockAccumulator>();

  for await (const event of stream) {
    if (event.type === "content_block_start") {
      if (event.content_block.type === "text") {
        blocks.set(event.index, { type: "text", text: "" });
      } else if (event.content_block.type === "tool_use") {
        blocks.set(event.index, {
          type: "tool_use",
          toolUse: { id: event.content_block.id, name: event.content_block.name, inputJson: "" },
        });
      }
    } else if (event.type === "content_block_delta") {
      const block = blocks.get(event.index);
      if (!block) continue;
      if (event.delta.type === "text_delta") {
        block.text = (block.text ?? "") + event.delta.text;
        onText(event.delta.text);
      } else if (event.delta.type === "input_json_delta" && block.toolUse) {
        block.toolUse.inputJson += event.delta.partial_json;
      }
    }
  }

  const assistantContent: Anthropic.ContentBlockParam[] = [];
  let toolUse: ToolUseCapture | null = null;

  for (const block of blocks.values()) {
    if (block.type === "text" && block.text) {
      assistantContent.push({ type: "text", text: block.text });
    } else if (block.type === "tool_use" && block.toolUse) {
      let input: unknown = {};
      try {
        input = JSON.parse(block.toolUse.inputJson || "{}");
      } catch {
        input = {};
      }
      assistantContent.push({ type: "tool_use", id: block.toolUse.id, name: block.toolUse.name, input });
      toolUse = block.toolUse;
    }
  }

  return { toolUse, assistantContent };
}

/**
 * Exécute un tour complet de l'agent Qualification (SFD §7.4) :
 * 1. premier appel streamé avec le tool capture_lead disponible
 * 2. si le modèle l'appelle : validation des champs, remontée Odoo (ou
 *    fallback email en cas d'échec), puis second appel streamé avec le
 *    tool_result pour que le modèle formule la confirmation (SFD §5.13).
 */
export async function runQualificationTurn(
  client: AnthropicStreamingClient,
  messages: ChatMessage[],
  language: "fr" | "en",
  conversationId: string,
  onText: (chunk: string) => void
): Promise<void> {
  const system = `${QUALIFICATION_SYSTEM_PROMPT}\n\n## Langue de réponse\nRéponds impérativement en ${LANGUAGE_LABEL[language]}.`;
  const baseMessages: Anthropic.MessageParam[] = toAnthropicMessagesWithAttachments(messages);

  const first = await consumeStream(
    client,
    {
      model: SPECIALIST_MODEL_QUALIFICATION,
      max_tokens: 1024,
      system,
      messages: baseMessages,
      tools: [CAPTURE_LEAD_TOOL],
      stream: true,
    },
    onText
  );

  if (!first.toolUse) return; // Aucun signal de collecte déclenché sur ce tour.

  let parsedInput: unknown = {};
  try {
    parsedInput = JSON.parse(first.toolUse.inputJson || "{}");
  } catch {
    parsedInput = {};
  }
  const validation = validateLeadInput(parsedInput);

  let toolResultContent: string;
  let isError = false;

  if (!validation.valid) {
    isError = true;
    toolResultContent = `Validation échouée sur le champ "${validation.field}" : ${validation.message}. Demande à l'utilisateur de corriger ce champ.`;
  } else {
    const odooResult = await submitLeadToOdoo(validation.lead, conversationId);
    if (odooResult.ok) {
      toolResultContent = "Lead créé avec succès dans Odoo CRM.";
    } else {
      const emailSent = await sendFallbackLeadEmail(validation.lead, conversationId, odooResult.reason);
      if (emailSent) {
        toolResultContent = "Webhook Odoo indisponible ; le lead a été transmis par email de secours à l'équipe commerciale, rien n'est perdu.";
      } else {
        isError = true;
        toolResultContent =
          "Échec technique de la remontée du lead (webhook et email de secours indisponibles). " +
          "Rassure l'utilisateur que sa demande a bien été notée et qu'un commercial le recontactera, sans détailler ce problème technique.";
      }
    }
  }

  const followUpMessages: Anthropic.MessageParam[] = [
    ...baseMessages,
    { role: "assistant", content: first.assistantContent },
    {
      role: "user",
      content: [
        {
          type: "tool_result",
          tool_use_id: first.toolUse.id,
          content: toolResultContent,
          is_error: isError,
        },
      ],
    },
  ];

  await consumeStream(
    client,
    {
      model: SPECIALIST_MODEL_QUALIFICATION,
      max_tokens: 1024,
      system,
      messages: followUpMessages,
      stream: true,
    },
    onText
  );
}
