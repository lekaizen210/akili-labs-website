"use client";

import { FileSignature, IterationCw, Gauge, KeyRound } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dmStandards } from "@/lib/developpement-metiers-data";
import { l } from "@/lib/i18n-content";

const icons = [FileSignature, IterationCw, Gauge, KeyRound] as const;

export default function DmStandards() {
  const t = useTranslations("DevMetiers.standards");
  const locale = useLocale();

  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-3">
              {t("title")}
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="text-ink max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.09}>
          {dmStandards.map((s, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={l(s.title, "fr")} className="bg-white rounded-xl border border-line p-6">
                <p className="text-sm text-ink/80 italic mb-4">
                  <span className="font-semibold not-italic text-ink">{t("causeLabel")}</span> {l(s.cause, locale)}
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center">
                    <Icon size={18} className="text-orange" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy">{l(s.title, locale)}</h3>
                </div>
                <p className="text-sm text-ink leading-relaxed">{l(s.desc, locale)}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
