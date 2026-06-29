"use client";

import {
  Building2, Landmark, Wheat, Radio, HeartPulse, GraduationCap,
  Factory, ShoppingBag, Zap, Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { sectors } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const iconMap: Record<string, React.ElementType> = {
  Building2, Landmark, Wheat, Radio, HeartPulse, GraduationCap,
  Factory, ShoppingBag, Zap, Truck,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function SectorsSection() {
  return (
    <section className="py-24 bg-[#1A2B3C]" id="secteurs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-4">
            ■ Secteurs d&apos;intervention
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Nos domaines d&apos;intervention
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Nos solutions s&apos;adaptent aux réalités de chaque secteur d&apos;activité
            en Afrique de l&apos;Ouest.
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
            return (
              <StaggerItem key={sector.name}>
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
                    whileHover={{ backgroundColor: "#FF5500", transition: { duration: 0.2 } }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <span className="text-sm font-medium text-white/80 text-center leading-tight">
                    {sector.name}
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
