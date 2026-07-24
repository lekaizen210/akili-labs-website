"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cable, Database } from "lucide-react";
import { useTranslations } from "next-intl";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const blockIcons = [Monitor, Smartphone, Cable, Database] as const;
const blockLabelKeys = ["labelWeb", "labelMobile", "labelApi", "labelData"] as const;
const blockOffsets = [
  { x: -90, y: -40 },
  { x: 90, y: -40 },
  { x: -90, y: 40 },
  { x: 90, y: 40 },
] as const;

const sprints = 6;

// Signature du hero : les briques convergent en une plateforme unique, puis
// les jalons de sprint s'allument un à un — assemblé pour le métier, livré
// par étapes visibles.
export default function DmAssemblyDiagram() {
  const t = useTranslations("DevMetiers.assemblyDiagram");
  const blocks = blockLabelKeys.map((key, i) => ({
    label: t(key),
    icon: blockIcons[i],
    from: blockOffsets[i],
  }));

  return (
    <div
      className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8"
      role="img"
      aria-label={t("ariaLabel")}
    >
      {/* Plateforme assemblée */}
      <div className="relative mx-auto max-w-md">
        <motion.div
          className="absolute -inset-3 rounded-2xl border-2 border-orange"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 1.35, ease }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-2 gap-3">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: b.from.x, y: b.from.y, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.55 + i * 0.16 }}
                className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/20 px-4 py-3"
              >
                <Icon size={18} className="text-orange shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/85">{b.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Jalons de sprint */}
      <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.9 }}
          className="text-[10px] font-bold uppercase tracking-wider text-white/50 mr-2"
        >
          {t("sprintsLabel")}
        </motion.span>
        {Array.from({ length: sprints }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 16, delay: 2.0 + i * 0.14 }}
            className={i < sprints - 1 ? "w-2.5 h-2.5 rounded-full bg-orange" : "w-2.5 h-2.5 rounded-full border-2 border-orange bg-transparent"}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.9, ease }}
        className="text-center text-xs text-white/50 mt-4"
      >
        {t("caption")}
      </motion.p>
    </div>
  );
}
