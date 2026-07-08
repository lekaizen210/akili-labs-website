"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooModuleCategories } from "@/lib/odoo-data";

export default function OdooModules() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Modules Odoo maîtrisés
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] max-w-2xl mx-auto">
            Nous intervenons sur l&apos;ensemble des modules de la suite Odoo
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" stagger={0.08}>
          {odooModuleCategories.map((cat) => (
            <StaggerItem key={cat.category} className="bg-[#E8F0FE] rounded-2xl p-6 border border-[#D9E2EC]">
              <h3 className="font-bold text-[#1A2B3C] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.modules.map((m) => (
                  <div key={m.label} title={m.label} className="flex flex-col items-center gap-1 w-16 text-center">
                    <div className="w-12 h-12 bg-white rounded-lg border border-[#D9E2EC] flex items-center justify-center shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/odoo-icons/${m.icon}.png`} alt={m.label} width={30} height={30} loading="lazy" />
                    </div>
                    <span className="text-[10px] leading-tight text-[#374151] font-medium">{m.label}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
