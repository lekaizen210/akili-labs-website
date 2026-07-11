"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { references } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { getTechColor } from "@/lib/tech-colors";

const tagColors: Record<string, string> = {
  ERP: "bg-blue-50 text-blue-700",
  "Intelligence Artificielle": "bg-purple-50 text-purple-700",
  DevSecOps: "bg-green-50 text-green-700",
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ReferencesSection() {
  return (
    <section className="py-24 bg-white" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-4">
              ■ Nos réalisations
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A2B3C]">
              Ils nous ont fait confiance
            </h2>
          </div>
          <Link
            href="/references"
            className="flex items-center gap-2 text-sm font-semibold text-[#c94200] hover:underline whitespace-nowrap"
          >
            Voir toutes nos références <ArrowRight size={14} />
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
                  className="group flex flex-col h-full bg-white border border-[#D9E2EC] rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#FF5500] transition-[box-shadow,border-color] duration-300"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#1A2B3C] to-[#FF5500]" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${tagColors[ref.expertise] ?? "bg-gray-100 text-gray-600"}`}>
                        {ref.expertise}
                      </span>
                      <span className="text-xs text-gray-400">{ref.year}</span>
                    </div>
                    <div className="text-xs font-semibold text-[#c94200] uppercase tracking-wider mb-2">
                      {ref.sector}
                    </div>
                    <h3 className="text-base font-bold text-[#1A2B3C] mb-3 leading-snug">
                      {ref.title}
                    </h3>
                    <p className="text-sm text-[#374151] leading-relaxed mb-5 flex-1">{ref.summary}</p>
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#E8F0FE] rounded-xl">
                      <TrendingUp size={14} className="text-[#FF5500]" />
                      <span className="text-sm font-bold text-[#1A2B3C]">{ref.result}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {ref.technologies.map((t) => {
                        const { bg, text } = getTechColor(t);
                        return (
                          <span key={t} className="px-2 py-0.5 text-xs font-semibold rounded-md" style={{ backgroundColor: bg, color: text }}>
                            {t}
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
          <p className="text-[#374151] mb-4">Votre projet sera notre prochaine référence.</p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-colors shadow-md hover:shadow-lg"
            >
              Démarrer un projet avec nous →
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
