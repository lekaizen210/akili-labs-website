"use client";

import Link from "next/link";
import {
  Search, ClipboardList, PenTool, Code2, CheckCircle, Rocket, GraduationCap, Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import { approach } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";

const iconMap: Record<string, React.ElementType> = {
  Search, ClipboardList, PenTool, Code2, CheckCircle, Rocket, GraduationCap, Headphones,
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ApproachSection() {
  return (
    <section className="py-24 bg-blue-light" id="approche">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeUp className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-4">
            ■ Méthodologie éprouvée
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
            Notre approche
          </h2>
          <p className="text-lg text-ink max-w-2xl mx-auto">
            Une démarche structurée en 8 étapes pour garantir la réussite de chaque projet,
            de l&apos;analyse initiale au support continu.
          </p>
        </FadeUp>

        {/* Steps — cascade numérotée */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          stagger={0.08}
          delay={0.1}
        >
          {approach.map((step) => {
            const Icon = iconMap[step.icon] ?? Code2;
            return (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(26,43,60,0.12)", transition: { duration: 0.2, ease } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  className="relative bg-white rounded-2xl p-6 text-center shadow-sm border border-white cursor-default"
                >
                  {/* Step badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange rounded-full flex items-center justify-center text-white text-xs font-black">
                    {step.step}
                  </div>
                  <div className="mt-3 mb-3 flex justify-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center">
                      <Icon size={20} className="text-navy" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-navy">{step.title}</h3>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp className="text-center" delay={0.2}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-[#243548] transition-colors duration-200 shadow-lg"
            >
              Parlez-nous de votre projet →
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
