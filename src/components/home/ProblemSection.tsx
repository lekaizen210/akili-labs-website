"use client";

import { AlertTriangle, Puzzle, Globe2, ShieldOff } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const problemIcons = [Puzzle, Globe2, AlertTriangle, ShieldOff];

export default function ProblemSection() {
  const t = useTranslations("Home.problem");
  const problems = [1, 2, 3, 4].map((n, i) => ({
    icon: problemIcons[i],
    title: t(`problem${n}Title`),
    desc: t(`problem${n}Desc`),
  }));

  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-5">
            ■ {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
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
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-l-4 border-orange shadow-md h-full cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 leading-snug">{p.title}</h3>
                    <p className="text-sm text-ink leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp className="mt-14 text-center">
          <p className="text-white/75 text-sm">
            {t("footerNote")}
          </p>
        </FadeUp>

      </div>
    </section>
  );
}
