import type Anthropic from "@anthropic-ai/sdk";
import type { ChatMessage } from "./types";

/** Convertit les messages internes en messages Anthropic, pièces jointes incluses (agents spécialisés). */
export function toAnthropicMessagesWithAttachments(messages: ChatMessage[]): Anthropic.MessageParam[] {
  return messages.map((m) => {
    if (!m.attachments || m.attachments.length === 0) {
      return { role: m.role, content: m.content };
    }

    const blocks: Anthropic.ContentBlockParam[] = [];
    if (m.content) blocks.push({ type: "text", text: m.content });

    for (const attachment of m.attachments) {
      if (attachment.kind === "image") {
        blocks.push({
          type: "image",
          source: {
            type: "base64",
            media_type: attachment.mediaType as Anthropic.Base64ImageSource["media_type"],
            data: attachment.data,
          },
        });
      } else {
        blocks.push({
          type: "document",
          source: { type: "base64", media_type: "application/pdf", data: attachment.data },
        });
      }
    }

    return { role: m.role, content: blocks };
  });
}

/**
 * Convertit les messages pour l'appel de classification (Orchestrateur) : remplace
 * les pièces jointes par un simple repère textuel plutôt que d'envoyer le contenu
 * réel, pour ne pas payer deux fois le coût token d'une image/d'un document
 * (une fois en classification, une fois pour la vraie réponse de l'agent spécialisé).
 */
export function toAnthropicMessagesForClassification(messages: ChatMessage[]): Anthropic.MessageParam[] {
  return messages.map((m) => {
    if (!m.attachments || m.attachments.length === 0) {
      return { role: m.role, content: m.content };
    }
    const names = m.attachments.map((a) => `[Pièce jointe : ${a.name}]`).join(" ");
    const content = m.content ? `${m.content}\n${names}` : names;
    return { role: m.role, content };
  });
}
