"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem, viewportOnce } from "@/components/ui/motion-primitives";
import { odooPhases } from "@/lib/odoo-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const cadrageItems = [
  "Audit de l'existant et cartographie des processus (as-is / to-be)",
  "Analyse des besoins fonctionnels et techniques",
  "Définition du périmètre et priorisation des modules",
  "Rédaction du cahier des charges et des spécifications fonctionnelles",
  "Estimation de charge et planification du projet (plan de charge détaillé)",
  "Accompagnement à la décision : Odoo Community vs Enterprise",
];

export default function OdooImplementation() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Conseil & Implémentation
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-4">Conseil & Cadrage</h2>
        <p className="text-[#374151] mb-8 max-w-2xl">
          Avant d&apos;écrire la moindre ligne de configuration, nous comprenons votre métier.
        </p>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16" stagger={0.06}>
          {cadrageItems.map((item) => (
            <StaggerItem key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#D9E2EC]">
              <CheckCircle size={18} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm text-[#374151]">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <h3 className="text-xl sm:text-2xl font-black text-[#1A2B3C] mb-2">
          Notre approche en 5 phases
        </h3>
        <p className="text-[#374151] mb-10 max-w-2xl">
          Nous déployons Odoo selon une méthodologie structurée et éprouvée, inspirée des meilleures
          pratiques internationales.
        </p>

        <div className="relative">
          <motion.div
            className="absolute left-5 sm:left-6 top-6 bottom-6 w-0.5 bg-[#FF5500]/30 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease }}
            aria-hidden="true"
          />
          <div className="space-y-6">
            {odooPhases.map((p, i) => {
              const separatorIndex = p.phase.indexOf(". ");
              const number = p.phase.slice(0, separatorIndex);
              const label = p.phase.slice(separatorIndex + 2);
              return (
                <div key={p.phase} className="group relative flex gap-5">
                  <motion.div
                    className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A2B3C] text-white flex items-center justify-center font-black text-sm sm:text-base transition-colors group-hover:bg-[#FF5500]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ type: "spring", stiffness: 300, damping: 14, delay: i * 0.12 }}
                  >
                    {number}
                  </motion.div>
                  <motion.div
                    className="flex-1 bg-white rounded-xl border border-[#D9E2EC] p-5 transition-all group-hover:-translate-y-0.5 group-hover:border-[#FF5500] group-hover:shadow-md"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.05, ease }}
                  >
                    <div className="font-bold text-[#1A2B3C] mb-1">{label}</div>
                    <div className="text-sm text-[#374151] mb-3">{p.content}</div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8F0FE] text-xs font-semibold text-[#1A2B3C]">
                      <span className="text-[#FF5500]">▸</span> Livrable : {p.livrable}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
