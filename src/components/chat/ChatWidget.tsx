"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { getOrCreateConversationId } from "@/lib/chat/conversation-id";
import { parseSseStream } from "@/lib/chat/sse-client";
import type { ChatMessage } from "@/lib/chat/types";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Widget chat flottant (Lot 1 — infrastructure minimale).
 * Affiche la trace brute de la classification d'intention de l'Orchestrateur ;
 * le contenu produit par un agent spécialisé arrive au Lot 2.
 */
export default function ChatWidget() {
  const t = useTranslations("Chat");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const conversationIdRef = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    conversationIdRef.current = getOrCreateConversationId();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage(ev: React.FormEvent) {
    ev.preventDefault();
    const text = input.trim();
    if (!text || pending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          conversation_id: conversationIdRef.current,
          messages: nextMessages,
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Réponse API invalide (${response.status})`);
      }

      let assistantText = "";
      for await (const { event, data } of parseSseStream(response.body)) {
        if (event === "delta" && data && typeof data === "object" && "text" in data) {
          assistantText += (data as { text: string }).text;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: assistantText };
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("[ChatWidget] erreur d'envoi", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: t("error") };
        return updated;
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t("closeButtonLabel") : t("openButtonLabel")}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-navy text-white shadow-lg flex items-center justify-center hover:bg-orange-cta transition-colors duration-150"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={t("title")}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2rem))] h-[min(560px,calc(100vh-8rem))] bg-white rounded-2xl shadow-2xl border border-line flex flex-col overflow-hidden"
          >
            <div className="bg-navy text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold text-sm">{t("title")}</span>
              <button type="button" onClick={() => setOpen(false)} aria-label={t("closeButtonLabel")}>
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-blue-light/40">
              {messages.length === 0 && <p className="text-sm text-ink">{t("welcome")}</p>}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] px-3 py-2 rounded-xl text-sm whitespace-pre-wrap",
                    m.role === "user"
                      ? "ml-auto bg-orange-cta text-white rounded-br-sm"
                      : "mr-auto bg-white text-ink border border-line rounded-bl-sm"
                  )}
                >
                  {m.content || (pending && i === messages.length - 1 ? t("thinking") : "")}
                </div>
              ))}
            </div>

            <form onSubmit={sendMessage} className="border-t border-line p-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                disabled={pending}
                maxLength={1000}
                className="flex-1 px-3 py-2 border border-line rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-cta disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                aria-label={t("send")}
                className="w-10 h-10 flex items-center justify-center bg-orange-cta text-white rounded-xl hover:bg-orange-cta-hover disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
