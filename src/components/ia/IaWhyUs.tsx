"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaWhyUs } from "@/lib/ia-data";

export default function IaWhyUs() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Ce qui nous distingue
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            Pourquoi AKILI Labs pour votre projet IA
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {iaWhyUs.map((w, i) => (
            <StaggerItem key={w.title} className="bg-white rounded-2xl p-6 border border-[#D9E2EC]">
              <div className="text-3xl font-black text-[#FF5500] mb-3 text-center">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-bold text-[#1A2B3C] mb-2">{w.title}</h3>
              <p className="text-sm text-[#374151] leading-relaxed">{w.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
