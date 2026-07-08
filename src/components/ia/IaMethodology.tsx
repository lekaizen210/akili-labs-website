"use client";

import { motion } from "framer-motion";
import { FadeUp, viewportOnce } from "@/components/ui/motion-primitives";
import { iaPhases } from "@/lib/ia-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function IaMethodology() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Notre Méthodologie IA
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-4">
            Une méthodologie éprouvée, du cadrage au monitoring
          </h2>
        </div>

        <FadeUp delay={0.06}>
          <div className="mb-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ia-images/ia-automation.png"
              alt="Pipeline d'automatisation IA AKILI Labs"
              width={1536}
              height={864}
              loading="lazy"
              className="w-full h-auto rounded-2xl border border-[#D9E2EC] shadow-md"
            />
          </div>
        </FadeUp>

        <div className="relative">
          <motion.div
            className="absolute left-5 sm:left-1/2 top-6 bottom-6 w-0.5 bg-[#FF5500]/30 origin-top sm:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease }}
            aria-hidden="true"
          />
          <div className="space-y-6 sm:space-y-4">
            {iaPhases.map((p, i) => {
              const separatorIndex = p.phase.indexOf(". ");
              const number = p.phase.slice(0, separatorIndex);
              const label = p.phase.slice(separatorIndex + 2);
              const isLeft = i % 2 === 0;

              const circle = (
                <motion.div
                  className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A2B3C] text-white flex items-center justify-center font-black text-sm sm:text-base transition-colors group-hover:bg-[#FF5500]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring", stiffness: 300, damping: 14, delay: i * 0.12 }}
                >
                  {number}
                </motion.div>
              );

              const card = (
                <motion.div
                  className="bg-white rounded-xl border border-[#D9E2EC] p-5 transition-all group-hover:-translate-y-0.5 group-hover:border-[#FF5500] group-hover:shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.05, ease }}
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="font-bold text-[#1A2B3C]">{label}</div>
                    <div className="text-xs font-semibold text-[#374151]/70 shrink-0">{p.duration}</div>
                  </div>
                  <div className="text-sm text-[#374151] mb-3">{p.content}</div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E8F0FE] text-xs font-semibold text-[#1A2B3C]">
                    <span className="text-[#FF5500]">▸</span> Livrable : {p.livrable}
                  </div>
                </motion.div>
              );

              return (
                <div key={p.phase} className="group relative">
                  <div className="flex gap-5 sm:hidden">
                    {circle}
                    <div className="flex-1">{card}</div>
                  </div>
                  <div className="hidden sm:grid sm:grid-cols-[1fr_3rem_1fr] sm:items-center sm:gap-6">
                    <div>{isLeft && card}</div>
                    <div className="flex justify-center">{circle}</div>
                    <div>{!isLeft && card}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
