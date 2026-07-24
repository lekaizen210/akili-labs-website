"use client";

import { ShieldCheck, BookOpenCheck, FileSpreadsheet } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biReglementaire } from "@/lib/business-intelligence-data";
import { l } from "@/lib/i18n-content";

const icons = [ShieldCheck, BookOpenCheck, FileSpreadsheet];

export default function BiReglementaire() {
  const t = useTranslations("Bi.reglementaire");
  const locale = useLocale();

  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              {t("title")}
            </h2>
            <p className="text-ink max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-10" stagger={0.08}>
          {biReglementaire.map((r, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={l(r.title, "fr")}>
                <div className="h-full bg-white border border-line rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy mb-2 text-sm sm:text-base">{l(r.title, locale)}</h3>
                  <p className="text-sm text-ink leading-relaxed">{l(r.desc, locale)}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.1}>
          <div className="bg-orange-pale border-l-4 border-orange rounded-r-xl p-5 max-w-3xl mx-auto">
            <p className="text-sm font-semibold leading-relaxed text-orange-ink">
              {t("calloutText")}
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
