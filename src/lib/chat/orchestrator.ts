import type Anthropic from "@anthropic-ai/sdk";
import { ORCHESTRATOR_SYSTEM_PROMPT, CLASSIFY_INTENT_TOOL } from "./orchestrator-prompt";
import { toAnthropicMessagesForClassification } from "./anthropic-messages";
import type { ChatIntent, ChatMessage, OrchestratorResult } from "./types";

const VALID_INTENTS: readonly ChatIntent[] = ["faq", "qualification", "support", "guardrail"];

const ORCHESTRATOR_MODEL = process.env.ORCHESTRATOR_MODEL ?? "claude-haiku-4-5-20251001";

/** Sous-ensemble du SDK Anthropic requis par classifyIntent — permet d'injecter un mock en test. */
export type AnthropicMessagesClient = {
  messages: {
    create: (params: Anthropic.MessageCreateParamsNonStreaming) => Promise<Anthropic.Message>;
  };
};

/** Résultat de repli utilisé par la route API si l'appel à l'Orchestrateur échoue (voir Architecture §3.2). */
export const DEFAULT_FALLBACK_RESULT: OrchestratorResult = { intent: "faq", language: "fr" };

export async function classifyIntent(
  client: AnthropicMessagesClient,
  messages: ChatMessage[]
): Promise<OrchestratorResult> {
  if (messages.length === 0) {
    throw new Error("classifyIntent: aucun message à classifier");
  }

  const response = await client.messages.create({
    model: ORCHESTRATOR_MODEL,
    max_tokens: 200,
    system: ORCHESTRATOR_SYSTEM_PROMPT,
    messages: toAnthropicMessagesForClassification(messages),
    tools: [CLASSIFY_INTENT_TOOL],
    tool_choice: { type: "tool", name: "classify_intent" },
  });

  const toolUse = response.content.find((block) => block.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error("classifyIntent: aucune réponse tool_use reçue de l'Orchestrateur");
  }

  const input = toolUse.input as Record<string, unknown>;
  const { intent, language } = input;

  if (typeof intent !== "string" || !VALID_INTENTS.includes(intent as ChatIntent)) {
    throw new Error(`classifyIntent: intent invalide reçu (${String(intent)})`);
  }
  if (language !== "fr" && language !== "en") {
    throw new Error(`classifyIntent: language invalide reçue (${String(language)})`);
  }

  return { intent: intent as ChatIntent, language };
}
