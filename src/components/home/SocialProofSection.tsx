"use client";

import { UserCheck, FileCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const cardIcons = [UserCheck, FileCheck, Eye];

export default function SocialProofSection() {
  const t = useTranslations("Home.socialProof");
  const commitments = [1, 2, 3].map((n, i) => ({
    icon: cardIcons[i],
    title: t(`card${n}Title`),
    desc: t(`card${n}Desc`),
  }));

  return (
    <section className="py-20 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <FadeUp className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
            ■ {t("eyebrow")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-ink max-w-2xl mx-auto text-lg">
            {t("lead")}
          </p>
        </FadeUp>

        {/* Commitment cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
          delay={0.05}
        >
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(26,43,60,0.09)", transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] } }}
                  className="bg-white border border-line rounded-2xl p-7 flex flex-col gap-4 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-orange" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-ink leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
