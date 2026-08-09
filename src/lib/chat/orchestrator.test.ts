import { describe, expect, it } from "vitest";
import type Anthropic from "@anthropic-ai/sdk";
import { classifyIntent, type AnthropicMessagesClient } from "./orchestrator";
import type { ChatMessage } from "./types";

function mockClient(toolInput: unknown): AnthropicMessagesClient {
  return {
    messages: {
      create: async () =>
        ({
          content: [{ type: "tool_use", id: "toolu_1", name: "classify_intent", input: toolInput }],
        }) as unknown as Anthropic.Message,
    },
  };
}

const userMessage: ChatMessage[] = [{ role: "user", content: "Vous gérez la compta OHADA ?" }];

describe("classifyIntent", () => {
  it("retourne l'intention et la langue quand la classification est valide", async () => {
    const client = mockClient({ intent: "faq", language: "fr" });
    const result = await classifyIntent(client, userMessage);
    expect(result).toEqual({ intent: "faq", language: "fr" });
  });

  it("rejette un intent hors énumération", async () => {
    const client = mockClient({ intent: "vente-agressive", language: "fr" });
    await expect(classifyIntent(client, userMessage)).rejects.toThrow(/intent invalide/);
  });

  it("rejette une langue hors énumération", async () => {
    const client = mockClient({ intent: "faq", language: "de" });
    await expect(classifyIntent(client, userMessage)).rejects.toThrow(/language invalide/);
  });

  it("échoue si aucun bloc tool_use n'est retourné", async () => {
    const client: AnthropicMessagesClient = {
      messages: {
        create: async () =>
          ({ content: [{ type: "text", text: "désolé" }] }) as unknown as Anthropic.Message,
      },
    };
    await expect(classifyIntent(client, userMessage)).rejects.toThrow(/aucune réponse tool_use/);
  });

  it("échoue si la liste de messages est vide", async () => {
    const client = mockClient({ intent: "faq", language: "fr" });
    await expect(classifyIntent(client, [])).rejects.toThrow(/aucun message à classifier/);
  });
});
