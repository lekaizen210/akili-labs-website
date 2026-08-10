import { describe, expect, it } from "vitest";
import { toAnthropicMessagesForClassification, toAnthropicMessagesWithAttachments } from "./anthropic-messages";
import type { ChatMessage } from "./types";

const textOnly: ChatMessage[] = [{ role: "user", content: "Bonjour" }];

const withImage: ChatMessage[] = [
  {
    role: "user",
    content: "Voici une capture",
    attachments: [{ kind: "image", mediaType: "image/png", data: "AAAA", name: "capture.png" }],
  },
];

describe("toAnthropicMessagesWithAttachments", () => {
  it("laisse un message sans pièce jointe en contenu texte simple", () => {
    expect(toAnthropicMessagesWithAttachments(textOnly)).toEqual([{ role: "user", content: "Bonjour" }]);
  });

  it("construit des blocs de contenu texte + image pour un message avec pièce jointe", () => {
    const result = toAnthropicMessagesWithAttachments(withImage);
    expect(result[0].content).toEqual([
      { type: "text", text: "Voici une capture" },
      { type: "image", source: { type: "base64", media_type: "image/png", data: "AAAA" } },
    ]);
  });
});

describe("toAnthropicMessagesForClassification", () => {
  it("remplace la pièce jointe par un repère textuel (pas de contenu réel envoyé)", () => {
    const result = toAnthropicMessagesForClassification(withImage);
    expect(result[0].content).toBe("Voici une capture\n[Pièce jointe : capture.png]");
  });

  it("laisse un message sans pièce jointe inchangé", () => {
    expect(toAnthropicMessagesForClassification(textOnly)).toEqual([{ role: "user", content: "Bonjour" }]);
  });
});
