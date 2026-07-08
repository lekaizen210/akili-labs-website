"use client";

import { ShoppingBag, Landmark, Wheat, HeartPulse, HardHat, Radio, Users, Truck, HandHeart } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaSectorUseCases } from "@/lib/ia-data";

const icons = { ShoppingBag, Landmark, Wheat, HeartPulse, HardHat, Radio, Users, Truck, HandHeart } as const;

export default function IaSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Cas d&apos;usage par secteur
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            L&apos;IA adaptée à votre secteur d&apos;activité
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {iaSectorUseCases.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <StaggerItem
                key={s.sector}
                className="group bg-[#E8F0FE] rounded-xl p-5 border border-[#D9E2EC] transition-colors hover:border-[#FF5500]"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon
                    size={18}
                    className="text-[#1A2B3C] transition-colors group-hover:text-[#FF5500] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold text-[#1A2B3C]">{s.sector}</h3>
                </div>
                <div className="mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-[#374151]/70 mb-1">
                    Cas d&apos;usage prioritaires
                  </div>
                  <p className="text-xs text-[#374151] leading-relaxed">{s.useCases}</p>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wide text-[#374151]/70 mb-1">
                    Bénéfice attendu
                  </div>
                  <p className="text-xs text-[#1A2B3C] font-medium leading-relaxed">{s.benefit}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
