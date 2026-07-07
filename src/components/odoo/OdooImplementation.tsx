"use client";

import { CheckCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-primitives";
import { odooPhases } from "@/lib/odoo-data";

const cadrageItems = [
  "Audit de l'existant et cartographie des processus (as-is / to-be)",
  "Analyse des besoins fonctionnels et techniques",
  "Définition du périmètre et priorisation des modules",
  "Rédaction du cahier des charges et des spécifications fonctionnelles",
  "Estimation de charge et planification du projet (plan de charge détaillé)",
  "Accompagnement à la décision : Odoo Community vs Enterprise",
];

export default function OdooImplementation() {
  return (
    <section className="py-20 bg-[#E8F0FE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#1A2B3C] text-sm font-medium rounded-full mb-6">
          ■ Conseil & Implémentation
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#1A2B3C] mb-4">Conseil & Cadrage</h2>
        <p className="text-[#374151] mb-8 max-w-2xl">
          Avant d&apos;écrire la moindre ligne de configuration, nous comprenons votre métier.
        </p>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16" stagger={0.06}>
          {cadrageItems.map((item) => (
            <StaggerItem key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#D9E2EC]">
              <CheckCircle size={18} className="text-[#FF5500] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-sm text-[#374151]">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <h3 className="text-xl sm:text-2xl font-black text-[#1A2B3C] mb-2">
          Notre approche en 5 phases
        </h3>
        <p className="text-[#374151] mb-8 max-w-2xl">
          Nous déployons Odoo selon une méthodologie structurée et éprouvée, inspirée des meilleures
          pratiques internationales.
        </p>

        <div className="hidden sm:block overflow-x-auto rounded-2xl border border-[#D9E2EC]">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="bg-[#1A2B3C] text-white">
                <th className="px-5 py-4 text-sm font-semibold">Phase</th>
                <th className="px-5 py-4 text-sm font-semibold">Contenu</th>
                <th className="px-5 py-4 text-sm font-semibold">Livrable</th>
              </tr>
            </thead>
            <tbody>
              {odooPhases.map((p, i) => (
                <tr key={p.phase} className={i % 2 === 0 ? "bg-white" : "bg-[#E8F0FE]"}>
                  <td className="px-5 py-4 text-sm font-bold text-[#1A2B3C] align-top">{p.phase}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{p.content}</td>
                  <td className="px-5 py-4 text-sm text-[#374151] align-top">{p.livrable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <StaggerContainer className="sm:hidden space-y-4" stagger={0.08}>
          {odooPhases.map((p) => (
            <StaggerItem key={p.phase} className="bg-white rounded-xl border border-[#D9E2EC] p-5">
              <div className="font-bold text-[#1A2B3C] mb-2">{p.phase}</div>
              <div className="text-sm text-[#374151] mb-2">{p.content}</div>
              <div className="text-xs text-[#FF5500] font-semibold">→ {p.livrable}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
