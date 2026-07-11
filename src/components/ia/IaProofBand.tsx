"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaProofStats } from "@/lib/ia-data";

export default function IaProofBand() {
  return (
    <section className="py-10 bg-white border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:divide-x lg:divide-line"
          stagger={0.08}
        >
          {iaProofStats.map((s) => (
            <StaggerItem key={s.label} className="text-center lg:px-4">
              <div className={`text-3xl font-black mb-1 ${s.highlight ? "text-orange" : "text-navy"}`}>
                {s.value}
              </div>
              <div className="text-xs text-ink leading-snug">{s.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
