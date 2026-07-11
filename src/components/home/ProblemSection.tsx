"use client";

import { AlertTriangle, Puzzle, Globe2, ShieldOff } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const problems = [
  {
    icon: Puzzle,
    title: "Systèmes fragmentés",
    desc: "Données dispersées entre Excel, logiciels isolés et processus manuels. Chaque décision exige une réconciliation fastidieuse.",
    accent: "#FF5500",
  },
  {
    icon: Globe2,
    title: "Normes locales ignorées",
    desc: "Les ERP standards ne couvrent pas OHADA, la fiscalité UEMOA ni le droit du travail ivoirien. Des développements coûteux s'accumulent.",
    accent: "#FF5500",
  },
  {
    icon: AlertTriangle,
    title: "Prestataires étrangers inadaptés",
    desc: "Solutions pensées pour d'autres marchés, support décalé, coûts en devises et temps de réponse qui ralentissent votre activité.",
    accent: "#FF5500",
  },
  {
    icon: ShieldOff,
    title: "Sécurité sous-estimée",
    desc: "La croissance digitale rapide expose à des risques réels. Sans DevSecOps ni monitoring, la surface d'attaque grandit en silence.",
    accent: "#FF5500",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#1A2B3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-5">
            ■ Ce que nous observons sur le terrain
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Les défis qui freinent votre transformation
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            En Afrique de l&apos;Ouest, la transformation digitale se heurte à des obstacles
            spécifiques que les solutions génériques ne résolvent pas.
          </p>
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          stagger={0.1}
          delay={0.1}
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                    transition: { duration: 0.2, ease },
                  }}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-l-4 border-[#FF5500] shadow-md h-full cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FF5500]/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#FF5500]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A2B3C] mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-[#374151] leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="mt-14 text-center">
          <p className="text-white/75 text-sm">
            Chez AKILI Labs, nous transformons ces obstacles en leviers de croissance,
            avec des solutions calibrées pour le contexte africain.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
