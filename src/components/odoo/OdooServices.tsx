"use client";

import { Code2, RefreshCw, GraduationCap, CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooServiceBlocks } from "@/lib/odoo-data";

const icons = { Code2, RefreshCw, GraduationCap } as const;

export default function OdooServices() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Au-delà du standard
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] max-w-2xl mx-auto">
            Développements spécifiques, migration & formation
          </h2>
        </div>
        <StaggerContainer className="space-y-6" stagger={0.1}>
          {(() => {
            const [featured, ...rest] = odooServiceBlocks;
            const FeaturedIcon = icons[featured.icon as keyof typeof icons];
            const mid = Math.ceil(featured.items.length / 2);
            const featuredCols = [featured.items.slice(0, mid), featured.items.slice(mid)];
            return (
              <>
                <StaggerItem className="bg-white rounded-2xl p-7 sm:p-8 border border-[#D9E2EC]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1A2B3C] shrink-0">
                      <FeaturedIcon size={22} className="text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-[#1A2B3C] text-lg">{featured.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {featuredCols.map((col, i) => (
                      <ul key={i} className="space-y-2.5">
                        {col.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                            <CheckCircle size={14} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </StaggerItem>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {rest.map((block) => {
                    const Icon = icons[block.icon as keyof typeof icons];
                    return (
                      <StaggerItem key={block.title} className="bg-white rounded-2xl p-6 border border-[#D9E2EC]">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#1A2B3C] mb-5">
                          <Icon size={20} className="text-white" aria-hidden="true" />
                        </div>
                        <h3 className="font-bold text-[#1A2B3C] mb-4">{block.title}</h3>
                        <ul className="space-y-2.5">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[#374151]">
                              <CheckCircle size={14} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </StaggerItem>
                    );
                  })}
                </div>
              </>
            );
          })()}
        </StaggerContainer>
      </div>
    </section>
  );
}
