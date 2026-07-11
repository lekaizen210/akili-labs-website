import { Rocket, Users, GraduationCap, MapPin } from "lucide-react";
import type { Metadata } from "next";
import CandidatureForm from "@/components/carrieres/CandidatureForm";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Carrières — AKILI Labs",
  description: "Rejoignez AKILI Labs et participez à la transformation digitale de l'Afrique. Découvrez nos offres d'emploi.",
};

const offres = [
  { titre: "Consultant ERP Odoo Senior", type: "CDI", lieu: "Abidjan, CI", domain: "ERP" },
  { titre: "Développeur Python / Odoo", type: "CDI", lieu: "Abidjan, CI", domain: "ERP" },
  { titre: "Ingénieur DevSecOps", type: "CDI", lieu: "Abidjan, CI", domain: "DevSecOps" },
  { titre: "Data Scientist / IA", type: "CDI", lieu: "Abidjan, CI", domain: "IA" },
  { titre: "Chef de projet ERP", type: "CDI", lieu: "Abidjan, CI", domain: "Projet" },
];

const avantages = [
  { icon: Rocket, title: "Projets innovants", desc: "Travaillez sur des projets ERP, IA et DevSecOps à fort impact en Afrique." },
  { icon: GraduationCap, title: "Formation continue", desc: "Budget formation annuel + accès aux certifications Odoo, AWS, GitLab." },
  { icon: Users, title: "Culture collaborative", desc: "Une équipe soudée, management horizontal et communication transparente." },
  { icon: MapPin, title: "Flexibilité", desc: "Télétravail partiel, horaires flexibles et mobilité sur la zone UEMOA." },
];

const domainColors: Record<string, string> = {
  ERP: "bg-blue-50 text-blue-700",
  DevSecOps: "bg-green-50 text-green-700",
  IA: "bg-purple-50 text-purple-700",
  Projet: "bg-orange-50 text-orange-700",
};

export default function CarrieresPage() {
  return (
    <>
      <PageHero
        badge="Rejoignez l'aventure"
        align="left"
        maxWidth="max-w-4xl"
        title={
          <>
            <HeroHighlight>Construisez</HeroHighlight>
            <span className="text-white"> l&apos;avenir digital<br />de l&apos;Afrique avec nous</span>
          </>
        }
        subtitle="AKILI Labs recrute des talents passionnés par la technologie et convaincus de l'impact qu'elle peut avoir sur le continent africain."
      />

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
              ■ Pourquoi nous rejoindre
            </div>
            <h2 className="text-3xl font-black text-navy">Ce que nous offrons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {avantages.map((a) => (
              <div key={a.title} className="bg-blue-light rounded-2xl p-6 border border-line">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4">
                  <a.icon size={20} className="text-orange" />
                </div>
                <h3 className="font-bold text-navy mb-2">{a.title}</h3>
                <p className="text-sm text-ink leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres + Formulaire */}
      <section className="py-20 bg-blue-light" id="offres">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Liste des offres */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ Postes ouverts
            </div>
            <h2 className="text-2xl font-black text-navy mb-6">Nos offres d&apos;emploi</h2>
            <div className="space-y-3">
              {offres.map((o) => (
                <a
                  key={o.titre}
                  href="#formulaire"
                  className="group flex items-center justify-between gap-4 bg-white rounded-xl p-5 border border-line hover:border-orange hover:shadow-md transition-[box-shadow,border-color]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-light flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-navy text-xs font-black">AL</span>
                    </div>
                    <div>
                      <div className="font-bold text-navy group-hover:text-orange transition-colors text-sm">
                        {o.titre}
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-md ${domainColors[o.domain] ?? "bg-gray-100 text-gray-600"}`}>
                          {o.domain}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">{o.type}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={10} />{o.lieu}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-orange-dark group-hover:underline whitespace-nowrap">
                    Postuler →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 p-5 bg-navy rounded-2xl text-white">
              <p className="text-sm font-semibold mb-1">Votre profil ne correspond à aucun poste ?</p>
              <p className="text-xs text-white/60 mb-3">
                Envoyez une candidature spontanée. Nous constituons en permanence un vivier de talents.
              </p>
              <a href="#formulaire" className="text-xs font-semibold text-orange hover:underline">
                Candidature spontanée →
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div id="formulaire" className="bg-white rounded-2xl p-8 border border-line shadow-sm">
            <CandidatureForm />
          </div>
        </div>
      </section>
    </>
  );
}
