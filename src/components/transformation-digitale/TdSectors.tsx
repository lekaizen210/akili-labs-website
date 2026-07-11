"use client";

import { ShoppingBag, HardHat, Landmark, HeartPulse, Building2, Factory } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { tdSectorUseCases } from "@/lib/transformation-digitale-data";

const icons = { ShoppingBag, HardHat, Landmark, HeartPulse, Building2, Factory } as const;

export default function TdSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
            ■ Secteurs d&apos;intervention
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy mb-3">
            Chaque secteur a ses processus critiques — nous partons des vôtres
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {tdSectorUseCases.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <StaggerItem
                key={s.sector}
                className="group bg-blue-light rounded-xl p-5 border border-line transition-colors hover:border-orange"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon
                    size={18}
                    className="text-navy transition-colors group-hover:text-orange shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold text-navy">{s.sector}</h3>
                </div>
                <p className="text-xs text-ink leading-relaxed">{s.useCases}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
