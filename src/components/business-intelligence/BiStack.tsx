"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biStack } from "@/lib/business-intelligence-data";

export default function BiStack() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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

        <StaggerContainer className="space-y-5" stagger={0.06}>
          {biStack.map((cat) => (
            <StaggerItem key={cat.category}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b border-line pb-5">
                <div className="sm:w-56 shrink-0 font-bold text-navy text-sm">{cat.category}</div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-blue-pale border border-line rounded-lg text-xs font-medium text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
