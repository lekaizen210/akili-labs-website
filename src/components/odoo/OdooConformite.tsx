"use client";

import Image from "next/image";
import { BookOpenCheck, Users, Smartphone, ServerCog } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooConformitePiliers } from "@/lib/odoo-data";

const pilierIcons = [BookOpenCheck, Users, Smartphone, ServerCog] as const;

export default function OdooConformite() {
  return (
    <section className="py-20 bg-blue-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Conformité & Réalités locales
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-navy max-w-3xl mx-auto">
              Un ERP conforme se prouve dans les états financiers, pas dans la plaquette
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 items-start mb-12">
          <FadeUp delay={0.12}>
            <p className="text-ink leading-relaxed">
              Tout intégrateur peut installer Odoo. La différence se joue dans les milliers de
              détails que le contexte impose : un Bilan et un Compte de résultat au format
              SYSCOHADA révisé, un TAFIRE que votre commissaire aux comptes accepte, des bulletins
              de paie qui calculent juste les cotisations CNPS et CGRAE, une TVA paramétrée selon
              la fiscalité de chaque pays d&apos;implantation, des encaissements Wave, Orange
              Money ou MTN MoMo réconciliés automatiquement en comptabilité.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="text-navy font-bold text-lg lg:pl-6 lg:border-l lg:border-line">
              AKILI Labs a développé une expertise spécifique sur la configuration d&apos;Odoo
              pour le référentiel OHADA : c&apos;est le cœur de notre practice, pas une option du
              devis.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.14} className="mb-12 max-w-4xl mx-auto">
          <Image
            src="/odoo-images/odoo-conformite.png"
            alt="Facture client dans la comptabilité Odoo : écritures aux comptes SYSCOHADA 411, 701 et 4431 avec TVA à 18 %, balance équilibrée, lettrage du règlement rapproché du relevé bancaire, états financiers OHADA générés et liasse DSF prête pour la DGI"
            width={1400}
            height={900}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 896px"
            className="w-full h-auto rounded-2xl border border-line shadow-md bg-white"
          />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" stagger={0.08}>
          {odooConformitePiliers.map((p, i) => {
            const Icon = pilierIcons[i];
            return (
              <StaggerItem
                key={p.title}
                className="bg-white rounded-2xl p-6 border border-line transition-[transform,border-color] hover:-translate-y-0.5 hover:border-orange"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy shrink-0">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy">{p.title}</h3>
                </div>
                <p className="text-sm text-ink leading-relaxed">{p.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
