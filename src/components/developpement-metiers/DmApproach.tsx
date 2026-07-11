"use client";

import { Scale, Ear, Feather, KeyRound } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { dmApproach } from "@/lib/developpement-metiers-data";

const icons = [Scale, Ear, Feather, KeyRound] as const;

export default function DmApproach() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-orange">■</span> Notre méthodologie
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Le métier d&apos;abord, la technologie ensuite
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {dmApproach.map((a, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem
                key={a.title}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-orange/15 border border-orange/30 flex items-center justify-center">
                  <Icon size={22} className="text-orange" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{a.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
