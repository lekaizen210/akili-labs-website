"use client";

import {
  ShoppingBag,
  HardHat,
  Factory,
  Briefcase,
  Landmark,
  HeartPulse,
  GraduationCap,
  Wheat,
  HandHeart,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooSectorUseCases } from "@/lib/odoo-data";

const sectorIcons = [
  ShoppingBag,
  HardHat,
  Factory,
  Briefcase,
  Landmark,
  HeartPulse,
  GraduationCap,
  Wheat,
  HandHeart,
] as const;

export default function OdooSectors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Secteurs d&apos;intervention
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Odoo pour tous les secteurs
        </h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.05}>
          {odooSectorUseCases.map((s, i) => {
            const Icon = sectorIcons[i];
            return (
              <StaggerItem
                key={s.sector}
                className="group bg-[#E8F0FE] rounded-xl p-5 border border-[#D9E2EC] transition-colors hover:border-[#FF5500]"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon size={18} className="text-[#1A2B3C] transition-colors group-hover:text-[#FF5500] shrink-0" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-[#1A2B3C]">{s.sector}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.useCases.split(", ").map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-white text-[11px] font-medium text-[#374151] rounded-md border border-[#D9E2EC]">
                      {tag}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
