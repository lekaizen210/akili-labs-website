import type Anthropic from "@anthropic-ai/sdk";
import { FAQ_SYSTEM_PROMPT } from "./faq-prompt";
import { QUALIFICATION_SYSTEM_PROMPT } from "./qualification-prompt";
import { SUPPORT_SYSTEM_PROMPT } from "./support-prompt";
import type { ChatIntent, ChatMessage } from "./types";

const SPECIALIST_MODEL_FAQ = process.env.SPECIALIST_MODEL_FAQ ?? "claude-sonnet-5";
const SPECIALIST_MODEL_QUALIFICATION = process.env.SPECIALIST_MODEL_QUALIFICATION ?? "claude-sonnet-5";
const SPECIALIST_MODEL_SUPPORT = process.env.SPECIALIST_MODEL_SUPPORT ?? "claude-haiku-4-5-20251001";

const LANGUAGE_LABEL: Record<"fr" | "en", string> = { fr: "français", en: "anglais" };

function withLanguageInstruction(prompt: string, language: "fr" | "en"): string {
  return `${prompt}\n\n## Langue de réponse\nRéponds impérativement en ${LANGUAGE_LABEL[language]}.`;
}

export type SpecialistIntent = Exclude<ChatIntent, "guardrail">;

type SpecialistConfig = { prompt: string; model: string };

function getSpecialistConfig(intent: SpecialistIntent, language: "fr" | "en"): SpecialistConfig {
  switch (intent) {
    case "faq":
      return { prompt: withLanguageInstruction(FAQ_SYSTEM_PROMPT, language), model: SPECIALIST_MODEL_FAQ };
    case "qualification":
      return {
        prompt: withLanguageInstruction(QUALIFICATION_SYSTEM_PROMPT, language),
        model: SPECIALIST_MODEL_QUALIFICATION,
      };
    case "support":
      return { prompt: withLanguageInstruction(SUPPORT_SYSTEM_PROMPT, language), model: SPECIALIST_MODEL_SUPPORT };
  }
}

/** Sous-ensemble du SDK Anthropic requis pour le streaming — permet d'injecter un mock en test. */
export type AnthropicStreamingClient = {
  messages: {
    create: (
      params: Anthropic.MessageCreateParamsStreaming
    ) => Promise<AsyncIterable<Anthropic.RawMessageStreamEvent>>;
  };
};

/**
 * Appelle l'agent spécialisé routé par l'Orchestrateur et streame le texte de sa
 * réponse token par token (Architecture §3.1, appel 2b).
 */
export async function* streamSpecialistResponse(
  client: AnthropicStreamingClient,
  intent: SpecialistIntent,
  messages: ChatMessage[],
  language: "fr" | "en"
): AsyncGenerator<string> {
  const { prompt, model } = getSpecialistConfig(intent, language);

  const stream = await client.messages.create({
    model,
    max_tokens: 1024,
    system: prompt,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
    stream: true,
  });

  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      yield event.delta.text;
    }
  }
}
