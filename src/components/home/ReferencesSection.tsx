"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { references } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { getTechColor } from "@/lib/tech-colors";

// Keyed on the stable expertiseKey so styling stays consistent across locales.
const tagColors: Record<string, string> = {
  erp: "bg-blue-50 text-blue-700",
  ia: "bg-purple-50 text-purple-700",
  devsecops: "bg-green-50 text-green-700",
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ReferencesSection() {
  const t = useTranslations("Home.references");
  const locale = useLocale();
  return (
    <section className="py-24 bg-white" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/references"
            className="flex items-center gap-2 text-sm font-semibold text-orange-dark hover:underline whitespace-nowrap"
          >
            {t("viewAllLink")} <ArrowRight size={14} />
          </Link>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
          delay={0.1}
        >
          {references.map((ref) => (
            <StaggerItem key={ref.slug}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                className="h-full"
              >
                <Link
                  href={`/references/${ref.slug}`}
                  className="group flex flex-col h-full bg-white border border-line rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange transition-[box-shadow,border-color] duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-navy to-orange" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${tagColors[ref.expertiseKey] ?? "bg-gray-100 text-gray-600"}`}>
                        {l(ref.expertise, locale)}
                      </span>
                      <span className="text-xs text-gray-500">{ref.year}</span>
                    </div>
                    <div className="text-xs font-semibold text-orange-dark uppercase tracking-wider mb-2">
                      {l(ref.sector, locale)}
                    </div>
                    <h3 className="text-base font-bold text-navy mb-3 leading-snug">
                      {l(ref.title, locale)}
                    </h3>
                    <p className="text-sm text-ink leading-relaxed mb-5 flex-1">{l(ref.summary, locale)}</p>
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-blue-light rounded-xl">
                      <TrendingUp size={14} className="text-orange" />
                      <span className="text-sm font-bold text-navy">{l(ref.result, locale)}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {ref.technologies.map((t) => {
                        const label = l(t, locale);
                        const { bg, text } = getTechColor(l(t, "fr"));
                        return (
                          <span key={label} className="px-2 py-0.5 text-xs font-semibold rounded-md" style={{ backgroundColor: bg, color: text }}>
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp className="text-center mt-12" delay={0.1}>
          <p className="text-ink mb-4">{t("bottomText")}</p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors shadow-md hover:shadow-lg"
            >
              {t("bottomCta")}
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
