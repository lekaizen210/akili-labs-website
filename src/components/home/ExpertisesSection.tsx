"use client";

import Link from "next/link";
import { Layers, Database, Brain, Shield, Code2, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { expertises } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const iconMap: Record<string, React.ElementType> = {
  Layers, Database, Brain, Shield, Code2, BarChart3,
};

export default function ExpertisesSection() {
  return (
    <section className="py-24 bg-white" id="expertises">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-4">
            ■ Nos expertises
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A2B3C] mb-4">
            Ce que nous faisons
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            Six domaines d&apos;excellence pour accompagner votre transformation digitale
            de bout en bout.
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
                    href={`/expertises/${exp.slug}`}
                    className="group relative flex flex-col h-full bg-white border border-[#D9E2EC] rounded-2xl p-8 hover:border-[#FF5500] hover:shadow-xl transition-all duration-300"
                  >
                    {exp.featured && (
                      <span className="absolute top-4 right-4 px-2 py-0.5 bg-[#FF5500] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Vedette
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] flex items-center justify-center mb-5 group-hover:bg-[#1A2B3C] transition-colors duration-300">
                      <Icon size={22} className="text-[#1A2B3C] group-hover:text-[#FF5500] transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A2B3C] mb-1">{exp.title}</h3>
                    <p className="text-xs font-semibold text-[#c94200] uppercase tracking-wider mb-3">
                      {exp.subtitle}
                    </p>
                    <p className="text-sm text-[#374151] leading-relaxed mb-5 flex-1">{exp.description}</p>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#1A2B3C] group-hover:text-[#c94200] transition-colors">
                      En savoir plus
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
