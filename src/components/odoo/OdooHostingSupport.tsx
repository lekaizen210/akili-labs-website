"use client";

import Image from "next/image";
import { Cloud, Server, HardDrive, Boxes, ChevronDown } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooHostingModes, odooSupportTiers } from "@/lib/odoo-data";

const hostingIcons = [Cloud, Server, HardDrive, Boxes] as const;

export default function OdooHostingSupport() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
            ■ Hébergement & Support
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-2xl mx-auto">
            Votre ERP doit tourner tous les jours : nous nous y engageons contractuellement
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className="mb-16 lg:mb-0">
            <h3 className="font-bold text-navy mb-5">Hébergement & Infrastructure</h3>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5" stagger={0.08}>
              {odooHostingModes.map((h, i) => {
                const Icon = hostingIcons[i];
                return (
                  <StaggerItem
                    key={h.mode}
                    className="group bg-white rounded-2xl border border-line p-6 transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-orange hover:shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-light shrink-0 transition-colors group-hover:bg-navy">
                        <Icon size={20} className="text-navy transition-colors group-hover:text-white" aria-hidden="true" />
                      </div>
                      <h4 className="font-bold text-navy">{h.mode}</h4>
                    </div>
                    <p className="text-sm text-ink mb-4 leading-relaxed">{h.description}</p>
                    <div className="text-xs font-semibold text-navy">
                      Idéal pour : <span className="font-normal text-ink">{h.fit}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div>
            <h3 className="font-bold text-navy mb-5">Support & Maintenance</h3>
            <FadeUp>
              <p className="text-ink leading-relaxed mb-6">
                Après le go-live, votre ERP est couvert par un contrat de maintenance avec des
                engagements de service contractuels :{" "}
                <strong className="text-navy">
                  incidents bloquants pris en charge sous 2 à 24h selon le niveau souscrit
                </strong>
                , mises à jour réglementaires de paie incluses, TMA applicative mensuelle et revues
                de suivi. Trois niveaux s&apos;adaptent à la criticité de votre activité.
              </p>
            </FadeUp>
            <StaggerContainer className="space-y-3" stagger={0.07}>
              {odooSupportTiers.map((s) => (
                <StaggerItem key={s.level}>
                  <details className="group bg-white rounded-2xl border border-line open:border-orange transition-colors">
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none p-5 select-none">
                      <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="font-bold text-navy">{s.level}</span>
                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-bold bg-orange-pale text-orange-dark">
                          Bloquant : {s.slaBlocking}
                        </span>
                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-light text-navy">
                          {s.slaSecondaryLabel} : {s.slaSecondary}
                        </span>
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-ink shrink-0 transition-transform duration-200 ease-out group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="px-5 pb-5 text-sm text-ink leading-relaxed">{s.content}</p>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-14 max-w-4xl mx-auto">
          <Image
            src="/odoo-images/odoo-continuite.png"
            alt="Écran de supervision du contrat de maintenance : disponibilité de 99,95 % sur douze mois contre un engagement de 99,5 %, historique hebdomadaire avec un seul incident résolu en 31 minutes, déroulé de cet incident et tickets P1 à P3 avec le respect des délais contractuels"
            width={1400}
            height={900}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-auto rounded-2xl border border-line shadow-md bg-white"
          />
        </FadeUp>
      </div>
    </section>
  );
}
