"use client";

import Image from "next/image";
import { BookOpenCheck, Users, Smartphone, ServerCog } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooConformitePiliers } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";

const pilierIcons = [BookOpenCheck, Users, Smartphone, ServerCog] as const;

export default function OdooConformite() {
  const t = useTranslations("Odoo.conformite");
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
            <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-3xl mx-auto">
              {t("title")}
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 items-start mb-12">
          <FadeUp delay={0.12}>
            <p className="text-ink leading-relaxed">{t("paragraph1")}</p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="text-navy font-bold text-lg lg:pl-6 lg:border-l lg:border-line">
              {t("paragraph2")}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.14} className="mb-12 max-w-4xl mx-auto">
          <Image
            src="/odoo-images/odoo-conformite.png"
            alt={t("imageAlt")}
            width={1400}
            height={900}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-auto rounded-2xl border border-line shadow-md bg-white"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {odooConformitePiliers.map((p, i) => {
            const Icon = pilierIcons[i];
            return (
              <StaggerItem
                key={l(p.title, "fr")}
                className="bg-white rounded-2xl p-6 border border-line transition-[transform,border-color] hover:-translate-y-0.5 hover:border-orange"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy shrink-0">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy">{l(p.title, locale)}</h3>
                </div>
                <p className="text-sm text-ink leading-relaxed">{l(p.desc, locale)}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
