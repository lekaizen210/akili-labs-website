"use client";

import { ShieldCheck, Scale, UserCheck, Activity } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const pilierIcons = [ShieldCheck, Scale, UserCheck, Activity] as const;

export default function IaResponsable() {
  const t = useTranslations("Ia.responsable");
  const piliers = [1, 2, 3, 4].map((n) => ({
    icon: pilierIcons[n - 1],
    title: t(`pillar${n}Title`),
    desc: t(`pillar${n}Desc`),
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-3xl mx-auto">
              {t("title")}
            </h2>
          </FadeUp>
        </div>

        <FadeUp delay={0.12}>
          <p className="text-ink leading-relaxed text-center max-w-3xl mx-auto mb-12">
            {t("intro")}
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {piliers.map((p) => (
            <StaggerItem
              key={p.title}
              className="bg-white rounded-2xl p-6 border border-line transition-[transform,border-color] hover:-translate-y-0.5 hover:border-orange"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy shrink-0">
                  <p.icon size={20} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-navy">{p.title}</h3>
              </div>
              <p className="text-sm text-ink leading-relaxed">{p.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
