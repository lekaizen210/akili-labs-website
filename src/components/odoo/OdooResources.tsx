"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooResources } from "@/lib/odoo-data";

export default function OdooResources() {
  return (
    <section id="ressources" className="py-20 bg-[#E8F0FE] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Ressources & Contenus
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Approfondissez votre connaissance d&apos;Odoo
        </h2>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {odooResources.map((r) => (
            <StaggerItem
              key={r.title}
              className="relative bg-white rounded-2xl p-6 border border-[#D9E2EC] opacity-75 cursor-default"
            >
              <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full bg-[#FFF4E5] text-[#FF5500]">
                Bientôt disponible
              </span>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-[#E8F0FE] text-[#1A2B3C] mb-3">
                {r.type}
              </span>
              <h3 className="font-bold text-[#1A2B3C] mb-2 pr-24">{r.title}</h3>
              <p className="text-sm text-[#374151]">{r.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
