"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaProofStats } from "@/lib/ia-data";

export default function IaProofBand() {
  return (
    <section className="py-10 bg-white border-b border-[#D9E2EC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x lg:divide-[#D9E2EC]"
          stagger={0.08}
        >
          {iaProofStats.map((s) => (
            <StaggerItem key={s.label} className="text-center lg:px-4">
              <div className={`text-3xl font-black mb-1 ${s.highlight ? "text-[#FF5500]" : "text-[#1A2B3C]"}`}>
                {s.value}
              </div>
              <div className="text-xs text-[#374151] leading-snug">{s.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
