"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Paperclip, FileText, Image as ImageIcon } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { getOrCreateConversationId } from "@/lib/chat/conversation-id";
import { parseSseStream } from "@/lib/chat/sse-client";
import { ALLOWED_MEDIA_TYPES, MAX_ATTACHMENT_BYTES } from "@/lib/chat/attachment-limits";
import type { ChatAttachment, ChatMessage } from "@/lib/chat/types";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const ACCEPTED_FILE_TYPES = Object.keys(ALLOWED_MEDIA_TYPES).join(",");

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

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
  const [attachment, setAttachment] = useState<ChatAttachment | null>(null);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);
  const conversationIdRef = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    conversationIdRef.current = getOrCreateConversationId();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function handleFileSelect(ev: React.ChangeEvent<HTMLInputElement>) {
    const file = ev.target.files?.[0];
    ev.target.value = ""; // permet de resélectionner le même fichier après suppression
    if (!file) return;

    setAttachmentError(null);

    const kind = ALLOWED_MEDIA_TYPES[file.type];
    if (!kind) {
      setAttachmentError(t("attachmentInvalidType"));
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setAttachmentError(t("attachmentTooLarge"));
      return;
    }

    try {
      const data = await readFileAsBase64(file);
      setAttachment({ kind, mediaType: file.type, data, name: file.name });
    } catch (error) {
      console.error("[ChatWidget] échec de lecture du fichier", error);
      setAttachmentError(t("attachmentReadError"));
    }
  }

  async function sendMessage(ev: React.FormEvent) {
    ev.preventDefault();
    const text = input.trim();
    if ((!text && !attachment) || pending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text, attachments: attachment ? [attachment] : undefined },
    ];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setAttachment(null);
    setAttachmentError(null);
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
                  {m.attachments?.map((a) => (
                    <div key={a.name} className="flex items-center gap-1.5 mb-1 text-xs opacity-90">
                      {a.kind === "image" ? <ImageIcon size={13} /> : <FileText size={13} />}
                      <span className="truncate">{a.name}</span>
                    </div>
                  ))}
                  {m.content || (pending && i === messages.length - 1 ? t("thinking") : "")}
                </div>
              ))}
            </div>

            <div className="border-t border-line">
              {attachmentError && (
                <p className="px-3 pt-2 text-xs text-red-500">{attachmentError}</p>
              )}
              {attachment && (
                <div className="mx-3 mt-2 flex items-center gap-2 rounded-lg border border-line bg-blue-light/60 px-2.5 py-1.5 text-xs text-ink">
                  {attachment.kind === "image" ? <ImageIcon size={14} /> : <FileText size={14} />}
                  <span className="flex-1 truncate">{attachment.name}</span>
                  <button
                    type="button"
                    onClick={() => setAttachment(null)}
                    aria-label={t("attachmentRemoveLabel")}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <X size={13} />
                  </button>
                </div>
              )}
              <form onSubmit={sendMessage} className="p-3 flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ACCEPTED_FILE_TYPES}
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={pending || !!attachment}
                  aria-label={t("attachmentAddLabel")}
                  className="w-10 h-10 flex items-center justify-center text-ink border border-line rounded-xl hover:border-orange-cta hover:text-orange-cta disabled:opacity-50 transition-colors"
                >
                  <Paperclip size={16} />
                </button>
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
                  disabled={pending || (!input.trim() && !attachment)}
                  aria-label={t("send")}
                  className="w-10 h-10 flex items-center justify-center bg-orange-cta text-white rounded-xl hover:bg-orange-cta-hover disabled:opacity-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
