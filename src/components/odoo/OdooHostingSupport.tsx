"use client";

import Image from "next/image";
import { Cloud, Server, HardDrive, Boxes, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooHostingModes, odooSupportTiers } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";

const hostingIcons = [Cloud, Server, HardDrive, Boxes] as const;

export default function OdooHostingSupport() {
  const t = useTranslations("Odoo.hostingSupport");
  const locale = useLocale();

  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-2xl mx-auto">
            {t("title")}
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className="mb-16 lg:mb-0">
            <h3 className="font-bold text-navy mb-5">{t("hostingTitle")}</h3>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5" stagger={0.08}>
              {odooHostingModes.map((h, i) => {
                const Icon = hostingIcons[i];
                return (
                  <StaggerItem
                    key={l(h.mode, "fr")}
                    className="group bg-white rounded-2xl border border-line p-6 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-orange hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-light shrink-0 transition-colors group-hover:bg-navy">
                        <Icon size={20} className="text-navy transition-colors group-hover:text-white" aria-hidden="true" />
                      </div>
                      <h4 className="font-bold text-navy">{l(h.mode, locale)}</h4>
                    </div>
                    <p className="text-sm text-ink mb-4 leading-relaxed">{l(h.description, locale)}</p>
                    <div className="text-xs font-semibold text-navy">
                      {t("fitLabel")}<span className="font-normal text-ink">{l(h.fit, locale)}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div>
            <h3 className="font-bold text-navy mb-5">{t("supportTitle")}</h3>
            <FadeUp>
              <p className="text-ink leading-relaxed mb-6">
                {t.rich("supportParagraphRich", {
                  strong: (chunks) => <strong className="text-navy">{chunks}</strong>,
                })}
              </p>
            </FadeUp>
            <StaggerContainer className="space-y-3" stagger={0.07}>
              {odooSupportTiers.map((s) => (
                <StaggerItem key={l(s.level, "fr")}>
                  <details className="group bg-white rounded-2xl border border-line open:border-orange transition-colors">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none p-5 select-none">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="font-bold text-navy">{l(s.level, locale)}</span>
                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-bold bg-orange-pale text-orange-dark">
                          {t("blockingLabel")}{s.slaBlocking}
                        </span>
                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-light text-navy">
                          {l(s.slaSecondaryLabel, locale)}{l(s.slaSecondary, locale)}
                        </span>
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-ink shrink-0 transition-transform duration-200 ease-out group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="px-5 pb-5 text-sm text-ink leading-relaxed">{l(s.content, locale)}</p>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-14 max-w-4xl mx-auto">
          <Image
            src="/odoo-images/odoo-continuite.png"
            alt={t("imageAlt")}
            width={1400}
            height={900}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-auto rounded-2xl border border-line shadow-md bg-white"
          />
        </FadeUp>
      </div>
    </section>
  );
}
