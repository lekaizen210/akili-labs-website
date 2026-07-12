"use client";

import { PlugZap, Scale, Unlock, Users } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biWhyUs } from "@/lib/business-intelligence-data";

const icons = [PlugZap, Scale, Unlock, Users];

export default function BiWhyUs() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 85% 20%, rgba(255,85,0,0.08) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full mb-6 border border-white/10">
              ■ Pourquoi AKILI Labs
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Un intégrateur qui connaît le point de départ
            </h2>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
          {biWhyUs.map((w, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={w.title}>
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-orange flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{w.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{w.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
