"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biStack } from "@/lib/business-intelligence-data";
import { techIcons, techColors } from "@/lib/tech-icons";

export default function BiStack() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-6">
              ■ Stack technologique
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              Des outils éprouvés, choisis pour durer
            </h2>
            <p className="text-ink max-w-2xl mx-auto text-sm">
              Open source en premier choix, Power BI quand votre parc est déjà Microsoft :
              l&apos;outil s&apos;adapte à vos équipes, pas l&apos;inverse.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.06}>
          {biStack.map((s) => (
            <StaggerItem key={s.category} className="bg-white rounded-xl p-5 border border-line">
              <h3 className="text-sm font-bold text-navy mb-4">{s.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {s.items.map((t) => {
                  const Icon = techIcons[t];
                  return (
                    <div key={t} className="group flex flex-col items-center gap-2 text-center">
                      {Icon && (
                        <Icon
                          className="w-7 h-7 transition-transform group-hover:scale-110"
                          style={{ color: techColors[t] }}
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-[10px] font-medium text-ink leading-tight">{t}</span>
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
