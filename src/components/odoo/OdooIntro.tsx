"use client";

import { FadeUp } from "@/components/ui/motion-primitives";
import OdooNetworkDiagram from "@/components/odoo/OdooNetworkDiagram";

export default function OdooIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8F0FE] text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
              ■ Pourquoi Odoo
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C]">
              Pourquoi les entreprises africaines choisissent Odoo
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.14}>
          <p className="text-[#374151] leading-relaxed mb-6">
            Gérer une entreprise en croissance avec des outils dispersés — tableaux Excel, logiciels de
            comptabilité isolés, CRM sans connexion à la supply chain — coûte du temps, de l&apos;argent et
            des opportunités manquées.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="bg-[#E8F0FE] border-l-4 border-[#1A2B3C] rounded-r-xl p-6 mb-6">
            <p className="text-[#1A2B3C] font-bold text-lg mb-1">Odoo change la donne.</p>
            <p className="text-[#374151] leading-relaxed">
              Avec plus de <strong>12 millions d&apos;utilisateurs dans 180 pays</strong>, Odoo est
              aujourd&apos;hui la suite ERP open source la plus adoptée au monde. Elle réunit dans une
              seule plateforme tous les processus de votre entreprise : ventes, achats, stocks,
              comptabilité, RH, production et bien plus encore.
            </p>
          </div>
        </FadeUp>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-8 items-center">
        <FadeUp delay={0.26}>
          <p className="text-[#374151] leading-relaxed">
            Chez AKILI Labs, nous ne nous contentons pas d&apos;installer Odoo. Nous le configurons,
            l&apos;adaptons et le faisons vivre selon <strong>votre réalité métier africaine</strong> :
            contextes OHADA/SYSCOHADA, spécificités fiscales locales, multilinguisme, et contraintes de
            connectivité.
          </p>
        </FadeUp>
        <FadeUp delay={0.32}>
          <div>
            <OdooNetworkDiagram />
            <p className="text-center text-xs text-gray-400 mt-1">8 pays UEMOA/CEDEAO</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
