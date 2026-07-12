"use client";

import { ShieldCheck, Map, Target, Layers, Combine } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { iaWhyUs } from "@/lib/ia-data";

const iaWhyUsIcons = [ShieldCheck, Map, Target, Layers, Combine] as const;

export default function IaWhyUs() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <ParticleCanvas count={22} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
            <span className="text-orange">■</span> Ce qui nous distingue
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Pourquoi AKILI Labs pour votre projet IA
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {iaWhyUs.map((w, i) => {
            const Icon = iaWhyUsIcons[i];
            return (
            <StaggerItem key={w.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange mb-4">
                <Icon size={26} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-white mb-3">{w.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{w.desc}</p>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
