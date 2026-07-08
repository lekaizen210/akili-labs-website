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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Secteurs d&apos;intervention
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            Odoo pour tous les secteurs
          </h2>
        </div>
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
                <div className="flex flex-wrap gap-3">
                  {s.useCases.map((u) => (
                    <div key={u.label} className="flex flex-col items-center gap-1 w-16 text-center">
                      <div className="w-9 h-9 bg-white rounded-lg border border-[#D9E2EC] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#FF5500]/40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/odoo-icons/${u.icon}.png`}
                          alt={u.label}
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] leading-tight text-[#374151] font-medium">{u.label}</span>
                    </div>
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
