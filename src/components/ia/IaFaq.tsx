"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { iaFaqs } from "@/lib/ia-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function IaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            Questions fréquentes sur l&apos;IA
          </h2>
        </div>
        <div className="space-y-3">
          {iaFaqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border border-[#D9E2EC] rounded-2xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`ia-faq-panel-${i}`}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200",
                    open ? "bg-[#1A2B3C]" : "bg-white hover:bg-[#F7F9FF]"
                  )}
                >
                  <span className={cn("text-sm sm:text-base font-semibold leading-snug", open ? "text-white" : "text-[#1A2B3C]")}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.22, ease }}
                    className={cn("shrink-0", open ? "text-white/70" : "text-[#374151]")}
                  >
                    <ChevronDown size={18} aria-hidden="true" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      id={`ia-faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { type: "spring", stiffness: 400, damping: 40 },
                        opacity: { duration: open ? 0.25 : 0.15, ease },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 border-t border-[#D9E2EC]">
                        <p className="text-[#374151] text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
