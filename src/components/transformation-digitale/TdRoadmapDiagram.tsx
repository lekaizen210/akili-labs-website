"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SearchCheck, Map, Network, Cog, LineChart } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const steps = [
  { labelKey: "stepAudit", icon: SearchCheck, highlight: true },
  { labelKey: "stepPlan", icon: Map, highlight: false },
  { labelKey: "stepArchitecture", icon: Network, highlight: false },
  { labelKey: "stepDeployment", icon: Cog, highlight: false },
  { labelKey: "stepMonitoring", icon: LineChart, highlight: false },
] as const;

// Feuille de route signature du hero : le premier jalon (Audit) est mis en
// avant — « tout se joue au cadrage », la conviction portée par le H1.
export default function TdRoadmapDiagram() {
  const t = useTranslations("Td.roadmapDiagram");

  return (
    <div
      className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8"
      role="img"
      aria-label={t("ariaLabel")}
    >
      <div className="relative flex items-start justify-between gap-2">
        {/* Ligne de progression */}
        <motion.div
          className="absolute left-7 right-7 top-7 h-0.5 bg-white/15 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.55, ease }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute left-7 top-7 h-0.5 w-[22%] bg-orange origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 1.5, ease }}
          aria-hidden="true"
        />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.labelKey} className="relative z-10 flex flex-col items-center gap-3 flex-1 min-w-0">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 17, delay: 0.6 + i * 0.14 }}
                className={
                  s.highlight
                    ? "relative w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-lg shadow-orange-900/40"
                    : "w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white/80 flex items-center justify-center"
                }
              >
                {s.highlight && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-orange/40"
                    animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
                    aria-hidden="true"
                  />
                )}
                <Icon size={22} aria-hidden="true" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.14, ease }}
                className={
                  s.highlight
                    ? "text-xs sm:text-sm font-bold text-white text-center"
                    : "text-xs sm:text-sm font-medium text-white/60 text-center"
                }
              >
                {t(s.labelKey)}
              </motion.span>
            </div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.9, ease }}
        className="text-center text-xs text-white/50 mt-6"
      >
        {t("footerText")}
      </motion.p>
    </div>
  );
}
