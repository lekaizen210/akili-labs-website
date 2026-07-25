"use client";

import { ClipboardCheck, Target, Compass, GraduationCap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { tdApproach } from "@/lib/transformation-digitale-data";
import { l } from "@/lib/i18n-content";

const icons = [ClipboardCheck, Target, Compass, GraduationCap] as const;

export default function TdApproach() {
  const t = useTranslations("Td.approach");
  const locale = useLocale();

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
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {tdApproach.map((a, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={l(a.title, "fr")}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center">
                  <Icon size={22} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{l(a.title, locale)}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{l(a.desc, locale)}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
