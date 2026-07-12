"use client";

import { Landmark, ShoppingBag, Factory, HardHat, Building2, Radio } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biSectors } from "@/lib/business-intelligence-data";

const icons = { Landmark, ShoppingBag, Factory, HardHat, Building2, Radio } as const;

export default function BiSectors() {
  return (
    <section className="py-20 bg-blue-pale">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Secteurs
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy">
              Ce que la BI change, secteur par secteur
            </h2>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {biSectors.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <StaggerItem key={s.sector}>
                <div className="h-full bg-white border border-line rounded-2xl p-5 transition-[transform,border-color] hover:-translate-y-0.5 hover:border-orange">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-navy" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-navy text-sm">{s.sector}</h3>
                  </div>
                  <p className="text-sm text-ink leading-relaxed mb-2">{s.useCases}</p>
                  <p className="text-xs font-semibold text-navy flex items-start gap-1.5">
                    <span className="text-orange" aria-hidden="true">▸</span> {s.benefit}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
