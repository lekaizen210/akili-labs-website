"use client";

import { motion } from "framer-motion";
import { FadeUp, viewportOnce } from "@/components/ui/motion-primitives";
import { dsPhases } from "@/lib/devsecops-data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function DsRoadmap() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Cadrage &amp; Industrialisation
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-3">
              En 5 phases, passez du déploiement manuel à la livraison continue sécurisée
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="text-ink max-w-2xl mx-auto">
              Chaque phase produit un livrable tangible que vous validez avant de passer à la suivante.
            </p>
          </FadeUp>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-5 sm:left-1/2 top-6 bottom-6 w-0.5 bg-orange/30 origin-top sm:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease }}
            aria-hidden="true"
          />
          <div className="space-y-6 sm:space-y-4">
            {dsPhases.map((p, i) => {
              const separatorIndex = p.phase.indexOf(". ");
              const number = p.phase.slice(0, separatorIndex);
              const label = p.phase.slice(separatorIndex + 2);
              const isLeft = i % 2 === 0;

              const circle = (
                <motion.div
                  className="relative z-10 shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-sm sm:text-base transition-colors group-hover:bg-orange"
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
                  className="bg-white rounded-xl border border-line p-5 transition-[transform,box-shadow,border-color] group-hover:-translate-y-0.5 group-hover:border-orange group-hover:shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.05, ease }}
                >
                  <div className="font-bold text-navy mb-1">{label}</div>
                  <div className="text-sm text-ink mb-3">{p.content}</div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-light text-xs font-semibold text-navy">
                    <span className="text-orange">▸</span> Livrable : {p.livrable}
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
