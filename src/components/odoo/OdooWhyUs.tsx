"use client";

import { Map, LayoutGrid, Users, Wallet, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { odooWhyUs } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";

const whyUsIcons = [Map, LayoutGrid, Users, Wallet, MapPin] as const;

export default function OdooWhyUs() {
  const t = useTranslations("Odoo.whyUs");
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
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {odooWhyUs.map((w, i) => {
            const Icon = whyUsIcons[i];
            return (
              <StaggerItem key={l(w.title, "fr")} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange mb-4">
                  <Icon size={26} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white mb-3">{l(w.title, locale)}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{l(w.desc, locale)}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
