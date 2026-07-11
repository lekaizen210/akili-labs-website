"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { dmResources } from "@/lib/developpement-metiers-data";

export default function DmResources() {
  return (
    <section id="ressources" className="py-20 bg-blue-light scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ Ressources &amp; Contenus
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            Approfondissez votre projet d&apos;application métier
          </h2>
        </div>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {dmResources.map((r) => (
            <StaggerItem
              key={r.title}
              className="relative bg-white rounded-2xl p-6 border border-line opacity-75 cursor-default"
            >
              <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full bg-orange-pale text-orange-dark">
                Bientôt disponible
              </span>
              <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full bg-blue-light text-navy mb-3">
                {r.type}
              </span>
              <h3 className="font-bold text-navy mb-2 pr-24">{r.title}</h3>
              <p className="text-sm text-ink">{r.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
