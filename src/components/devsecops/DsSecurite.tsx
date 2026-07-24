"use client";

import Image from "next/image";
import { Layers, KeyRound, Server } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dsSecuritePillars } from "@/lib/devsecops-data";
import { l } from "@/lib/i18n-content";

const pillarIcons = [Layers, KeyRound, Server] as const;

export default function DsSecurite() {
  const t = useTranslations("DevSecOps.securite");
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
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              {t("title")}
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          <div className="space-y-5">
            <FadeUp delay={0.12}>
              <p className="text-ink leading-relaxed">
                {t("paragraph1")}
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-ink leading-relaxed">
                {t("paragraph2")}
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <Image
              src="/devsecops-images/ds-observabilite.png"
              alt={t("imageAlt")}
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5" stagger={0.09}>
          {dsSecuritePillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <StaggerItem key={l(p.title, "fr")} className="bg-white rounded-xl p-6 border border-line">
                <Icon size={22} className="text-navy mb-4" aria-hidden="true" />
                <h3 className="font-bold text-navy mb-2">{l(p.title, locale)}</h3>
                <p className="text-sm text-ink leading-relaxed">{l(p.desc, locale)}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
