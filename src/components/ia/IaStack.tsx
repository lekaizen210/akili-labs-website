"use client";

import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaStack } from "@/lib/ia-data";
import { l } from "@/lib/i18n-content";
import { techIcons, techColors } from "@/lib/tech-icons";

export default function IaStack() {
  const t = useTranslations("Ia.stack");
  const locale = useLocale();

  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ {t("badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            {t("title")}
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.06}>
          {iaStack.map((s) => (
            <StaggerItem key={l(s.category, "fr")} className="bg-white rounded-xl p-5 border border-line">
              <h3 className="text-sm font-bold text-navy mb-4">{l(s.category, locale)}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {s.items.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <div key={tech} className="group flex flex-col items-center gap-2 text-center">
                      {Icon && (
                        <Icon
                          className="w-7 h-7 transition-transform group-hover:scale-110"
                          style={{ color: techColors[tech] }}
                        />
                      )}
                      <span className="text-[10px] font-medium text-ink leading-tight">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
