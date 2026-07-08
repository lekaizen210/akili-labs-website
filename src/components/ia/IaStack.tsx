"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { iaStack } from "@/lib/ia-data";
import { techIcons, techColors } from "@/lib/tech-icons";

export default function IaStack() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
            ■ Stack Technologique
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
            Les technologies que nous maîtrisons
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.06}>
          {iaStack.map((s) => (
            <StaggerItem key={s.category} className="bg-white rounded-xl p-5 border border-[#D9E2EC]">
              <h3 className="text-sm font-bold text-[#1A2B3C] mb-4">{s.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {s.items.map((t) => {
                  const Icon = techIcons[t];
                  return (
                    <div key={t} className="group flex flex-col items-center gap-2 text-center">
                      {Icon && (
                        <Icon
                          className="w-7 h-7 transition-transform group-hover:scale-110"
                          style={{ color: techColors[t] }}
                        />
                      )}
                      <span className="text-[10px] font-medium text-[#374151] leading-tight">{t}</span>
                    </div>
                  );
                })}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
