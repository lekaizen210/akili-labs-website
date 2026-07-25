"use client";

import Image from "next/image";
import { Code2, RefreshCw, GraduationCap, CheckCircle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooServiceBlocks } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";

const icons = { Code2, RefreshCw, GraduationCap } as const;

export default function OdooServices() {
  const t = useTranslations("Odoo.services");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-2xl mx-auto">
            {t("title")}
          </h2>
        </div>
        <StaggerContainer className="space-y-6" stagger={0.1}>
          {(() => {
            const [featured, ...rest] = odooServiceBlocks;
            const FeaturedIcon = icons[featured.icon as keyof typeof icons];
            return (
              <>
                <StaggerItem className="bg-white rounded-2xl p-7 sm:p-8 border border-line">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy shrink-0">
                          <FeaturedIcon size={22} className="text-white" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-navy text-lg">{l(featured.title, locale)}</h3>
                      </div>
                      <ul className="space-y-2.5">
                        {featured.items.map((item) => (
                          <li key={l(item, "fr")} className="flex items-start gap-2 text-sm text-ink">
                            <CheckCircle size={14} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                            {l(item, locale)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      src="/odoo-images/odoo-integrations.png"
                      alt={t("imageAlt")}
                      width={1400}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="w-full h-auto rounded-xl border border-line"
                    />
                  </div>
                </StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {rest.map((block) => {
                    const Icon = icons[block.icon as keyof typeof icons];
                    return (
                      <StaggerItem key={l(block.title, "fr")} className="bg-white rounded-2xl p-6 border border-line">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy mb-5">
                          <Icon size={20} className="text-white" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-navy mb-4">{l(block.title, locale)}</h3>
                        <ul className="space-y-2.5">
                          {block.items.map((item) => (
                            <li key={l(item, "fr")} className="flex items-start gap-2 text-sm text-ink">
                              <CheckCircle size={14} className="text-orange mt-0.5 shrink-0" aria-hidden="true" />
                              {l(item, locale)}
                            </li>
                          ))}
                        </ul>
                      </StaggerItem>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </StaggerContainer>
      </div>
    </section>
  );
}
