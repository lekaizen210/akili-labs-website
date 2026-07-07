"use client";

import { Code2, RefreshCw, GraduationCap, CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooServiceBlocks } from "@/lib/odoo-data";

const icons = { Code2, RefreshCw, GraduationCap } as const;

export default function OdooServices() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Au-delà du standard
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-10">
          Développements spécifiques, migration & formation
        </h2>
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" stagger={0.1}>
          {odooServiceBlocks.map((block) => {
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
        </StaggerContainer>
      </div>
    </section>
  );
}
