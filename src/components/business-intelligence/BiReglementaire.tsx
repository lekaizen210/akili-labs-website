"use client";

import { ShieldCheck, BookOpenCheck, FileSpreadsheet } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { biReglementaire } from "@/lib/business-intelligence-data";

const icons = [ShieldCheck, BookOpenCheck, FileSpreadsheet];

export default function BiReglementaire() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Conformité
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
              Les états qu&apos;on ne discute pas : produits à l&apos;heure, justes, archivés
            </h2>
            <p className="text-ink max-w-2xl mx-auto">
              Pour les banques, SFD et institutions régulées, la BI n&apos;est pas que du pilotage :
              c&apos;est la capacité à produire les états périodiques exigés par le régulateur sans
              mobiliser une équipe pendant une semaine.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-10" stagger={0.08}>
          {biReglementaire.map((r, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={r.title}>
                <div className="h-full bg-white border border-line rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy mb-2 text-sm sm:text-base">{r.title}</h3>
                  <p className="text-sm text-ink leading-relaxed">{r.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.1}>
          <div className="bg-orange-pale border-l-4 border-orange rounded-r-xl p-5 max-w-3xl mx-auto">
            <p className="text-sm font-semibold leading-relaxed text-orange-ink">
              La traçabilité chiffre par chiffre, jusqu&apos;à l&apos;écriture d&apos;origine, est
              le cœur de notre architecture, pas une option. C&apos;est elle qui rend un état
              réglementaire défendable face au régulateur comme au commissaire aux comptes.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
