"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

const CATEGORIES = ["Tous", "ERP & OHADA", "Transformation Digitale", "Intelligence Artificielle", "DevSecOps", "AKILI Labs"] as const;

export const categoryColors: Record<string, string> = {
  "ERP & OHADA":              "bg-blue-50 text-blue-700 border-blue-200",
  "Transformation Digitale":  "bg-purple-50 text-purple-700 border-purple-200",
  "Intelligence Artificielle":"bg-emerald-50 text-emerald-700 border-emerald-200",
  "DevSecOps":                "bg-orange-50 text-orange-700 border-orange-200",
  "AKILI Labs":               "bg-blue-light text-navy border-line",
};

function AccordionItem({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.045, ease }}
      className="border border-line rounded-2xl overflow-hidden bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={cn(
          "w-full flex items-start gap-4 px-6 py-5 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-inset",
          open ? "bg-navy" : "bg-white hover:bg-blue-pale"
        )}
      >
        {/* Catégorie pill */}
        <span
          className={cn(
            "shrink-0 mt-0.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border hidden sm:inline-flex",
            open
              ? "bg-white/10 text-white/70 border-white/20"
              : categoryColors[item.category] ?? "bg-gray-100 text-gray-600 border-gray-200"
          )}
        >
          {item.category}
        </span>

        {/* Question */}
        <span className={cn("flex-1 text-sm sm:text-base font-semibold leading-snug pr-2", open ? "text-white" : "text-navy")}>
          {item.question}
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease }}
          className={cn("shrink-0 mt-0.5", open ? "text-white/70" : "text-ink")}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: open ? 0.25 : 0.15, ease },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 border-t border-line">
              <p className="text-ink text-sm leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchCategory = activeCategory === "Tous" || f.category === activeCategory;
      const matchQuery = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [faqs, activeCategory, query]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une question…"
          aria-label="Rechercher dans la FAQ"
          className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-line bg-white text-sm text-ink placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition-shadow"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              type="button"
              onClick={() => setQuery("")}
              aria-label="Effacer la recherche"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-navy transition-colors rounded-lg"
            >
              <X size={15} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtrer par catégorie">
        {CATEGORIES.map((cat) => (
          <motion.button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-[color,background-color,border-color] duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange",
              activeCategory === cat
                ? "bg-navy text-white border-navy shadow-md"
                : "bg-white text-ink border-line hover:border-navy hover:text-navy"
            )}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Results count */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`${activeCategory}-${query}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-gray-500 mb-6"
          aria-live="polite"
          aria-atomic="true"
        >
          {filtered.length === 0
            ? "Aucune question trouvée."
            : `${filtered.length} question${filtered.length > 1 ? "s" : ""}`}
        </motion.p>
      </AnimatePresence>

      {/* FAQ list */}
      <div className="space-y-3" role="list">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-ink"
            >
              <p className="text-4xl mb-4" aria-hidden="true">🔍</p>
              <p className="font-semibold text-navy mb-1">Aucune question ne correspond</p>
              <p className="text-sm text-gray-500">Essayez un autre terme ou consultez nos{" "}
                <Link href="/contact" className="text-orange-dark hover:underline">experts directement</Link>.
              </p>
            </motion.div>
          ) : (
            filtered.map((item, i) => (
              <div key={`${item.category}-${item.question}`} role="listitem">
                <AccordionItem item={item} index={i} />
              </div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
