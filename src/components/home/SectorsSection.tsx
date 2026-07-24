"use client";

import {
  Building2, Landmark, Wheat, Radio, HeartPulse, GraduationCap,
  Factory, ShoppingBag, Zap, Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { sectors } from "@/lib/data";
import { l } from "@/lib/i18n-content";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const iconMap: Record<string, React.ElementType> = {
  Building2, Landmark, Wheat, Radio, HeartPulse, GraduationCap,
  Factory, ShoppingBag, Zap, Truck,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function SectorsSection() {
  const t = useTranslations("Home.sectors");
  const locale = useLocale();
  return (
    <section className="py-24 bg-navy" id="secteurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
            ■ {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </FadeUp>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          stagger={0.07}
          delay={0.1}
        >
          {sectors.map((sector) => {
            const Icon = iconMap[sector.icon] ?? Building2;
            const name = l(sector.name, locale);
            return (
              <StaggerItem key={l(sector.name, "fr")}>
                <motion.div
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    borderColor: "rgba(255,85,0,0.5)",
                    transition: { duration: 0.2, ease },
                  }}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 cursor-default"
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center"
                    whileHover={{ backgroundColor: "var(--color-orange)", transition: { duration: 0.2 } }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-white/80 text-center leading-tight">
                    {name}
                  </span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
