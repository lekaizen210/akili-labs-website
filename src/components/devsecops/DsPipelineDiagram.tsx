"use client";

import { motion } from "framer-motion";
import { Code2, Package, FlaskConical, Rocket, Activity, ShieldCheck } from "lucide-react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const steps = [
  { label: "Code", icon: Code2 },
  { label: "Build", icon: Package },
  { label: "Tests", icon: FlaskConical },
  { label: "Déploiement", icon: Rocket },
  { label: "Supervision", icon: Activity },
];

// Signature du hero : un bouclier orange sous chaque étape — la sécurité est
// intégrée partout, pas une barrière en fin de chaîne.
export default function DsPipelineDiagram() {
  return (
    <div
      className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8"
      role="img"
      aria-label="Chaîne de livraison continue en 5 étapes — Code, Build, Tests, Déploiement, Supervision — avec un contrôle de sécurité intégré à chaque étape"
    >
      <div className="relative flex items-start justify-between gap-2">
        <motion.div
          className="absolute left-7 right-7 top-7 h-0.5 bg-white/15 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.55, ease }}
          aria-hidden="true"
        />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="relative z-10 flex flex-col items-center gap-3 flex-1 min-w-0">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 17, delay: 0.6 + i * 0.13 }}
                className="w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white/85 flex items-center justify-center"
              >
                <Icon size={22} aria-hidden="true" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.72 + i * 0.13, ease }}
                className="text-xs sm:text-sm font-medium text-white/70 text-center"
              >
                {s.label}
              </motion.span>
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.6 + i * 0.11 }}
                className="w-7 h-7 rounded-full bg-orange flex items-center justify-center shadow-md shadow-orange-900/40"
              >
                <ShieldCheck size={14} className="text-white" aria-hidden="true" />
              </motion.span>
            </div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4, ease }}
        className="text-center text-xs text-white/50 mt-6"
      >
        La sécurité à chaque étape — pas une barrière à la fin.
      </motion.p>
    </div>
  );
}
