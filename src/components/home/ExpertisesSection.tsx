"use client";

import { Link } from "@/i18n/navigation";
import { Layers, Database, Brain, Shield, Code2, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { expertises } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const iconMap: Record<string, React.ElementType> = {
  Layers, Database, Brain, Shield, Code2, BarChart3,
};

export default function ExpertisesSection() {
  const t = useTranslations("Home.expertises");
  const locale = useLocale();
  return (
    <section className="py-24 bg-white" id="expertises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
            ■ {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-ink max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
          delay={0.1}
        >
          {expertises.map((exp) => {
            const Icon = iconMap[exp.icon] ?? Code2;
            return (
              <StaggerItem key={exp.slug}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  className="h-full"
                >
                  <Link
                    href={exp.href}
                    className="group relative flex flex-col h-full bg-white border border-line rounded-2xl p-8 hover:border-orange hover:shadow-xl transition-[box-shadow,border-color] duration-300"
                  >
                    {exp.featured && (
                      <span className="absolute top-4 right-4 px-2 py-0.5 bg-orange text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {t("featuredBadge")}
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-5 group-hover:bg-navy transition-colors duration-300">
                      <Icon size={22} className="text-navy group-hover:text-orange transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-1">{l(exp.title, locale)}</h3>
                    <p className="text-xs font-semibold text-orange-dark uppercase tracking-wider mb-3">
                      {l(exp.subtitle, locale)}
                    </p>
                    <p className="text-sm text-ink leading-relaxed mb-5 flex-1">{l(exp.description, locale)}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-orange-dark transition-colors">
                      {t("learnMore")}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
