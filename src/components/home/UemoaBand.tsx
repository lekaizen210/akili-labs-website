"use client";

import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/ui/motion-primitives";

export default function UemoaBand() {
  const t = useTranslations("Home.uemoa");
  return (
    <section className="py-14 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <p className="shrink-0 text-xs font-semibold text-orange-dark uppercase tracking-widest">
            {t("eyebrow")}
          </p>
          <div className="hidden md:block w-px self-stretch bg-line" aria-hidden="true" />
          <p className="text-sm font-bold text-navy">
            {t("countries")}
          </p>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="text-sm text-ink leading-relaxed mt-4 max-w-3xl">
            {t("text")}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
