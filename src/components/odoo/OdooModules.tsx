"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooModuleCategories } from "@/lib/odoo-data";

export default function OdooModules() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Modules Odoo maîtrisés
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-8">
          Nous intervenons sur l&apos;ensemble des modules de la suite Odoo
        </h2>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5" stagger={0.08}>
          {odooModuleCategories.map((cat) => (
            <StaggerItem key={cat.category} className="bg-[#E8F0FE] rounded-2xl p-6 border border-[#D9E2EC]">
              <h3 className="font-bold text-[#1A2B3C] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.modules.map((m) => (
                  <span key={m} className="px-3 py-1.5 bg-white text-xs font-medium text-[#374151] rounded-lg border border-[#D9E2EC]">
                    {m}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
