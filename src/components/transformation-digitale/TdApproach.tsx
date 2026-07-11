"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { tdApproach } from "@/lib/transformation-digitale-data";

export default function TdApproach() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-orange">■</span> Notre méthodologie
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Une approche centrée sur la valeur métier, pas sur la technologie
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.08}>
          {tdApproach.map((a, i) => (
            <StaggerItem key={a.title} className="text-center">
              <div className="text-5xl font-black text-orange mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-bold text-white mb-3">{a.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{a.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
