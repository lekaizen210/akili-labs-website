import { describe, expect, it, vi, beforeEach } from "vitest";
import type Anthropic from "@anthropic-ai/sdk";

const submitLeadToOdoo = vi.fn();
const sendFallbackLeadEmail = vi.fn();

vi.mock("./odoo-webhook", () => ({ submitLeadToOdoo: (...args: unknown[]) => submitLeadToOdoo(...args) }));
vi.mock("./email-fallback", () => ({ sendFallbackLeadEmail: (...args: unknown[]) => sendFallbackLeadEmail(...args) }));

const { runQualificationTurn } = await import("./qualification-flow");
import type { AnthropicStreamingClient } from "./qualification-flow";
import type { ChatMessage } from "./types";

const VALID_LEAD_INPUT = {
  nom: "Awa Koné",
  societe: "Ivoire Textile",
  email: "awa.kone@ivoiretextile.ci",
  telephone: "+225 07 00 00 00 00",
  secteur: "Textile",
  pays: "Côte d'Ivoire",
  besoin: "Comptabilité OHADA + Paie",
};

function textEvent(index: number) {
  return { type: "content_block_start", index, content_block: { type: "text" } } satisfies Record<string, unknown>;
}

/** Construit un client mock : 1er appel = tour avec tool_use, 2e appel = tour de confirmation. */
function mockClient(opts: { firstToolInput?: unknown; firstText?: string; secondText: string }) {
  const calls: Anthropic.MessageCreateParamsStreaming[] = [];

  const client: AnthropicStreamingClient = {
    messages: {
      create: async (params) => {
        calls.push(params);
        const callIndex = calls.length;

        async function* gen() {
          if (callIndex === 1 && opts.firstToolInput !== undefined) {
            if (opts.firstText) {
              yield textEvent(0) as unknown as Anthropic.RawMessageStreamEvent;
              yield {
                type: "content_block_delta",
                index: 0,
                delta: { type: "text_delta", text: opts.firstText },
              } as unknown as Anthropic.RawMessageStreamEvent;
            }
            yield {
              type: "content_block_start",
              index: 1,
              content_block: { type: "tool_use", id: "toolu_1", name: "capture_lead", input: {} },
            } as unknown as Anthropic.RawMessageStreamEvent;
            yield {
              type: "content_block_delta",
              index: 1,
              delta: { type: "input_json_delta", partial_json: JSON.stringify(opts.firstToolInput) },
            } as unknown as Anthropic.RawMessageStreamEvent;
          } else {
            yield {
              type: "content_block_start",
              index: 0,
              content_block: { type: "text" },
            } as unknown as Anthropic.RawMessageStreamEvent;
            yield {
              type: "content_block_delta",
              index: 0,
              delta: { type: "text_delta", text: opts.secondText },
            } as unknown as Anthropic.RawMessageStreamEvent;
          }
        }
        return gen();
      },
    },
  };

  return { client, calls };
}

const messages: ChatMessage[] = [{ role: "user", content: "Je voudrais un devis pour la compta OHADA" }];

beforeEach(() => {
  submitLeadToOdoo.mockReset();
  sendFallbackLeadEmail.mockReset();
});

describe("runQualificationTurn", () => {
  it("ne fait qu'un seul appel si aucun tool_use n'est déclenché", async () => {
    const { client, calls } = mockClient({ secondText: "Bonjour, en quoi puis-je vous aider ?" });
    const received: string[] = [];
    await runQualificationTurn(client, messages, "fr", "conv-1", (c) => received.push(c));
    expect(calls).toHaveLength(1);
    expect(received.join("")).toBe("Bonjour, en quoi puis-je vous aider ?");
  });

  it("capture le lead avec succès via le webhook Odoo", async () => {
    submitLeadToOdoo.mockResolvedValue({ ok: true });
    const { client, calls } = mockClient({
      firstToolInput: VALID_LEAD_INPUT,
      secondText: "Merci Awa, votre demande a bien été transmise !",
    });
    const received: string[] = [];
    await runQualificationTurn(client, messages, "fr", "conv-1", (c) => received.push(c));

    expect(submitLeadToOdoo).toHaveBeenCalledWith(expect.objectContaining({ email: VALID_LEAD_INPUT.email }), "conv-1");
    expect(sendFallbackLeadEmail).not.toHaveBeenCalled();
    expect(calls).toHaveLength(2);
    const toolResultMessage = calls[1].messages.at(-1) as Anthropic.MessageParam;
    const toolResult = (toolResultMessage.content as Anthropic.ContentBlockParam[])[0] as { is_error?: boolean };
    expect(toolResult.is_error).toBeFalsy();
    expect(received.join("")).toBe("Merci Awa, votre demande a bien été transmise !");
  });

  it("bascule sur l'email de secours si le webhook Odoo échoue", async () => {
    submitLeadToOdoo.mockResolvedValue({ ok: false, reason: "timeout" });
    sendFallbackLeadEmail.mockResolvedValue(true);
    const { client, calls } = mockClient({ firstToolInput: VALID_LEAD_INPUT, secondText: "Merci, on vous recontacte." });
    await runQualificationTurn(client, messages, "fr", "conv-2", () => {});

    expect(sendFallbackLeadEmail).toHaveBeenCalledWith(
      expect.objectContaining({ email: VALID_LEAD_INPUT.email }),
      "conv-2",
      "timeout"
    );
    const toolResultMessage = calls[1].messages.at(-1) as Anthropic.MessageParam;
    const toolResult = (toolResultMessage.content as Anthropic.ContentBlockParam[])[0] as { is_error?: boolean };
    expect(toolResult.is_error).toBeFalsy();
  });

  it("marque une erreur si webhook ET email de secours échouent", async () => {
    submitLeadToOdoo.mockResolvedValue({ ok: false, reason: "timeout" });
    sendFallbackLeadEmail.mockResolvedValue(false);
    const { client, calls } = mockClient({ firstToolInput: VALID_LEAD_INPUT, secondText: "On a bien noté votre demande." });
    await runQualificationTurn(client, messages, "fr", "conv-3", () => {});

    const toolResultMessage = calls[1].messages.at(-1) as Anthropic.MessageParam;
    const toolResult = (toolResultMessage.content as Anthropic.ContentBlockParam[])[0] as { is_error?: boolean };
    expect(toolResult.is_error).toBe(true);
  });

  it("renvoie une erreur de validation sans appeler Odoo si l'email est mal formé", async () => {
    submitLeadToOdoo.mockResolvedValue({ ok: true });
    const { client, calls } = mockClient({
      firstToolInput: { ...VALID_LEAD_INPUT, email: "pas-un-email" },
      secondText: "Pouvez-vous confirmer votre email ?",
    });
    await runQualificationTurn(client, messages, "fr", "conv-4", () => {});

    expect(submitLeadToOdoo).not.toHaveBeenCalled();
    const toolResultMessage = calls[1].messages.at(-1) as Anthropic.MessageParam;
    const toolResult = (toolResultMessage.content as Anthropic.ContentBlockParam[])[0] as {
      is_error?: boolean;
      content?: string;
    };
    expect(toolResult.is_error).toBe(true);
    expect(toolResult.content).toMatch(/email/);
  });
});
