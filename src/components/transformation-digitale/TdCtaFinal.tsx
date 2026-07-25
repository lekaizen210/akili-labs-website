"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function TdCtaFinal() {
  const t = useTranslations("Td.ctaFinal");

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(255,85,0,0.12) 0%, transparent 60%)" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t("titlePart1")}
            <span className="text-orange">{t("titleHighlight")}</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">{t("subtitle")}</p>
        </FadeUp>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.18 } },
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-colors duration-200 shadow-lg shadow-orange-900/30"
            >
              {t("ctaPrimary")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <a
              href="/akili-labs-presentation.pdf"
              className="flex items-center gap-2 px-8 py-4 text-white/80 hover:text-white border border-white/20 rounded-xl font-medium transition-[color,border-color] duration-200 hover:border-white/40"
            >
              <Download size={16} aria-hidden="true" />
              {t("ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
