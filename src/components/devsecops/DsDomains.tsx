"use client";

import { GitBranch, Boxes, FileCode2, ShieldCheck, Activity } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dsDomains } from "@/lib/devsecops-data";
import { l } from "@/lib/i18n-content";

const icons = { GitBranch, Boxes, FileCode2, ShieldCheck, Activity } as const;

export default function DsDomains() {
  const t = useTranslations("DevSecOps.domains");
  const locale = useLocale();

  return (
    <section id="domaines" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy mb-3">
            {t("title")}
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {dsDomains.map((d) => {
            const Icon = icons[d.icon as keyof typeof icons];
            const tools = l(d.tools, locale);
            return (
              <StaggerItem
                key={l(d.title, "fr")}
                className="group bg-white rounded-xl p-6 border border-line transition-[border-color,box-shadow] hover:border-orange hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-light flex items-center justify-center mb-4 transition-colors group-hover:bg-orange/10">
                  <Icon size={21} className="text-navy transition-colors group-hover:text-orange" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-navy mb-2 leading-snug">{l(d.title, locale)}</h3>
                <p className="text-sm text-ink leading-relaxed">{l(d.desc, locale)}</p>
                {tools && (
                  <p className="text-xs text-gray-500 mt-3">{t("toolsLabel")}{tools}</p>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
