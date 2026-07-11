"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { tdServices } from "@/lib/transformation-digitale-data";

export default function TdServices() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ Au-delà du diagnostic
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            Une transformation ne réussit que si vos équipes se l&apos;approprient
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeUp>
            <Image
              src="/transformation-digitale-images/td-dematerialisation.png"
              alt="Transition de l'archive papier vers la gestion électronique des documents : classement, indexation et recherche"
              width={1400}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full h-auto rounded-2xl border border-line shadow-md"
            />
          </FadeUp>

          <StaggerContainer className="space-y-5" stagger={0.09}>
            {tdServices.map((s) => (
              <StaggerItem key={s.title} className="bg-white rounded-xl p-5 border border-line">
                <h3 className="font-bold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-ink leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
