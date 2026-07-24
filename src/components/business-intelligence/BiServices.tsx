"use client";

import { Compass, Database, LayoutDashboard, GraduationCap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biServices } from "@/lib/business-intelligence-data";
import { l } from "@/lib/i18n-content";

const icons = { Compass, Database, LayoutDashboard, GraduationCap } as const;

export default function BiServices() {
  const t = useTranslations("Bi.services");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              {t("title")}
            </h2>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
          {biServices.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <StaggerItem key={l(s.title, "fr")}>
                <div className="h-full bg-white border border-line rounded-2xl p-6 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-orange hover:shadow-md">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{l(s.title, locale)}</h3>
                  <p className="text-sm text-ink leading-relaxed mb-4">{l(s.desc, locale)}</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-light text-xs font-semibold text-navy">
                    <span className="text-orange" aria-hidden="true">▸</span> {t("deliverableLabel")}{l(s.livrable, locale)}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
