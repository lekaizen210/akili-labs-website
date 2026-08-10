import { describe, expect, it } from "vitest";
import type Anthropic from "@anthropic-ai/sdk";
import { streamSpecialistResponse, type AnthropicStreamingClient } from "./specialist-agent";
import type { ChatMessage } from "./types";

function mockStreamingClient(chunks: string[]) {
  let capturedParams: Anthropic.MessageCreateParamsStreaming | undefined;

  const client: AnthropicStreamingClient = {
    messages: {
      create: async (params) => {
        capturedParams = params;
        async function* gen() {
          for (const text of chunks) {
            yield {
              type: "content_block_delta",
              index: 0,
              delta: { type: "text_delta", text },
            } as unknown as Anthropic.RawMessageStreamEvent;
          }
        }
        return gen();
      },
    },
  };

  return { client, getParams: () => capturedParams };
}

const messages: ChatMessage[] = [{ role: "user", content: "Vous gérez la compta OHADA ?" }];

describe("streamSpecialistResponse", () => {
  it("concatène les chunks de texte streamés", async () => {
    const { client } = mockStreamingClient(["Bonjour", " ", "!"]);
    const received: string[] = [];
    for await (const chunk of streamSpecialistResponse(client, "faq", messages, "fr")) {
      received.push(chunk);
    }
    expect(received.join("")).toBe("Bonjour !");
  });

  it.each([
    ["faq", "claude-sonnet-5"],
    ["qualification", "claude-sonnet-5"],
    ["support", "claude-haiku-4-5-20251001"],
  ] as const)("route l'intention %s vers le modèle %s", async (intent, expectedModel) => {
    const { client, getParams } = mockStreamingClient(["ok"]);
    for await (const _ of streamSpecialistResponse(client, intent, messages, "fr")) void _;
    expect(getParams()?.model).toBe(expectedModel);
  });

  it("injecte l'instruction de langue dans le system prompt", async () => {
    const { client, getParams } = mockStreamingClient(["ok"]);
    for await (const _ of streamSpecialistResponse(client, "faq", messages, "en")) void _;
    expect(getParams()?.system).toMatch(/Réponds impérativement en anglais/);
  });

  it("ignore les deltas non textuels", async () => {
    const client: AnthropicStreamingClient = {
      messages: {
        create: async () => {
          async function* gen() {
            yield {
              type: "content_block_delta",
              index: 0,
              delta: { type: "input_json_delta", partial_json: "{}" },
            } as unknown as Anthropic.RawMessageStreamEvent;
            yield {
              type: "content_block_delta",
              index: 0,
              delta: { type: "text_delta", text: "visible" },
            } as unknown as Anthropic.RawMessageStreamEvent;
          }
          return gen();
        },
      },
    };
    const received: string[] = [];
    for await (const chunk of streamSpecialistResponse(client, "support", messages, "fr")) {
      received.push(chunk);
    }
    expect(received).toEqual(["visible"]);
  });
});
