"use client";

import { Link } from "@/i18n/navigation";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/ui/motion-primitives";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CTABanner() {
  const t = useTranslations("Home.ctaBanner");
  const trustItems = [t("trustItem1"), t("trustItem2"), t("trustItem3"), t("trustItem4")];
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(255,85,0,0.12) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            {t("titlePart1")}{" "}
            <span className="text-orange">{t("titleAccent")}</span>
          </h2>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.12}>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </FadeUp>

        {/* Buttons — stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.22 } },
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
              className="group flex items-center gap-2 px-8 py-4 bg-orange text-white font-semibold rounded-xl hover:bg-orange-hover transition-colors duration-200 shadow-lg shadow-orange-900/30"
            >
              {t("ctaPrimary")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
              <Download size={16} />
              {t("ctaSecondary")}
            </a>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <FadeUp delay={0.35}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-white/60">
            {trustItems.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
