"use client";

import { useLocale, useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biStack } from "@/lib/business-intelligence-data";
import { l } from "@/lib/i18n-content";
import { techIcons, techColors } from "@/lib/tech-icons";

export default function BiStack() {
  const t = useTranslations("Bi.stack");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("badge")}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              {t("title")}
            </h2>
            <p className="text-ink max-w-2xl mx-auto text-sm">
              {t("subtitle")}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.06}>
          {biStack.map((s) => (
            <StaggerItem key={l(s.category, "fr")} className="bg-white rounded-xl p-5 border border-line">
              <h3 className="text-sm font-bold text-navy mb-4">{l(s.category, locale)}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {s.items.map((item) => {
                  const key = typeof item === "string" ? item : item.fr;
                  const label = l(item, locale);
                  const Icon = techIcons[key];
                  return (
                    <div key={key} className="group flex flex-col items-center gap-2 text-center">
                      {Icon && (
                        <Icon
                          className="w-7 h-7 transition-transform group-hover:scale-110"
                          style={{ color: techColors[key] }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-[10px] font-medium text-ink leading-tight">{label}</span>
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
