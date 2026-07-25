"use client";

import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import AkiliNetworkDiagram from "@/components/ui/AkiliNetworkDiagram";
import { useLocale } from "next-intl";
import { iaValueProps } from "@/lib/ia-data";
import { l } from "@/lib/i18n-content";

export default function IaWhyNow() {
  const t = useTranslations("Ia.whyNow");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              {t("title")}
            </h2>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-8 items-center mb-6">
          <FadeUp delay={0.14}>
            <p className="text-ink leading-relaxed">
              {t.rich("paragraphRich", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div>
              <AkiliNetworkDiagram ariaLabel={t("networkAriaLabel")} />
              <p className="text-center text-xs text-gray-500 mt-1">{t("networkCaption")}</p>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <div className="bg-blue-light border-l-4 border-navy rounded-r-xl p-6 mb-12">
            <p className="text-navy font-bold text-lg mb-1">
              {t("calloutQuote")}
            </p>
            <p className="text-ink leading-relaxed">
              {t("calloutText")}
            </p>
          </div>
        </FadeUp>

        <div className="text-center mb-8">
          <h3 className="text-xl font-black text-navy">
            {t("changesTitle")}
          </h3>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" stagger={0.08}>
          {iaValueProps.map((v) => (
            <StaggerItem key={l(v.title, "fr")} className="bg-white rounded-xl p-5 border border-line text-center">
              <h4 className="font-bold text-navy mb-2">{l(v.title, locale)}</h4>
              <p className="text-xs text-ink leading-relaxed">{l(v.desc, locale)}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.1}>
          <p className="text-center text-ink leading-relaxed max-w-2xl mx-auto">
            {t("closingParagraph")}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
