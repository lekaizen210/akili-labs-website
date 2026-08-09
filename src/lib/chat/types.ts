export type ChatIntent = "faq" | "qualification" | "support" | "guardrail";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
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
