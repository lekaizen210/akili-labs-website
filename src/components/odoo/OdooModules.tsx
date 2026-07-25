"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem, viewportOnce } from "@/components/ui/motion-primitives";
import { odooModuleCategories } from "@/lib/odoo-data";
import { l } from "@/lib/i18n-content";

export default function OdooModules() {
  const t = useTranslations("Odoo.modules");
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
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" stagger={0.08}>
          {odooModuleCategories.map((cat) => (
            <StaggerItem key={l(cat.category, "fr")} className="bg-blue-light rounded-2xl p-6 border border-line">
              <h3 className="font-bold text-navy mb-4">{l(cat.category, locale)}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.modules.map((m, i) => {
                  const label = l(m.label, locale);
                  return (
                    <div key={l(m.label, "fr")} title={label} className="flex flex-col items-center gap-1 w-16 text-center">
                      <motion.div
                        className="w-12 h-12 bg-white rounded-lg border border-line flex items-center justify-center shrink-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ type: "spring", stiffness: 350, damping: 12, delay: i * 0.05 }}
                      >
                        <Image src={`/odoo-icons/${m.icon}.png`} alt={label} width={30} height={30} loading="lazy" />
                      </motion.div>
                      <span className="text-[10px] leading-tight text-ink font-medium">{label}</span>
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
