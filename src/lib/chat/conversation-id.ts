const STORAGE_KEY = "akili_chat_conversation_id";

/**
 * Identifiant de conversation (UUID v4), généré à l'ouverture du widget et stocké en
 * sessionStorage — perdu à la fermeture de l'onglet, cohérent avec la SFD §5.12/§7.3.
 */
export function getOrCreateConversationId(): string {
  if (typeof window === "undefined") return "";

  const existing = window.sessionStorage.getItem(STORAGE_KEY);
  if (existing) return existing;

  const id = crypto.randomUUID();
  window.sessionStorage.setItem(STORAGE_KEY, id);
  return id;
}
