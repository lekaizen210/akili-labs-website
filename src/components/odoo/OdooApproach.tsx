"use client";

import { Compass, Layers, Globe, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";

const principleIcons = [Compass, Layers, Globe, GraduationCap] as const;

export default function OdooApproach() {
  const t = useTranslations("Odoo.approach");
  const principles = [1, 2, 3, 4].map((n, i) => ({
    icon: principleIcons[i],
    title: t(`principle${n}Title`),
    desc: t(`principle${n}Desc`),
  }));

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-orange">■</span> {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" stagger={0.1}>
          {principles.map((p) => (
            <StaggerItem
              key={p.title}
              className="bg-white/5 border border-white/15 rounded-2xl p-7 transition-colors hover:border-orange/60"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange mb-5">
                <p.icon size={22} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
