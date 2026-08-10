export type ChatIntent = "faq" | "qualification" | "support" | "guardrail";

export type ChatRole = "user" | "assistant";

export type ChatAttachmentKind = "image" | "document";

/** Pièce jointe encodée en base64, transmise directement dans le message (pas de stockage serveur). */
export type ChatAttachment = {
  kind: ChatAttachmentKind;
  mediaType: string;
  data: string;
  name: string;
};

export type ChatMessage = {
  role: ChatRole;
  content: string;
  attachments?: ChatAttachment[];
};

export type ChatRequestBody = {
  locale: string;
  conversation_id: string;
  messages: ChatMessage[];
};

export type OrchestratorResult = {
  intent: ChatIntent;
  language: "fr" | "en";
};
