import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { setRequestLocale } from "next-intl/server";

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site AKILI Labs — éditeur, hébergement, propriété intellectuelle.",
  alternates: { canonical: `${BASE_URL}/mentions-legales` },
  robots: { index: false, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="flex items-center gap-3 text-lg font-bold text-navy mb-3">
        <span className="w-2.5 h-2.5 bg-orange shrink-0" aria-hidden="true" />
        {title}
      </h2>
      <div className="text-sm text-ink leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default async function MentionsLegalesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        badge="Informations légales"
        title="Mentions légales"
        subtitle="Éditeur du site, hébergement et propriété intellectuelle."
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-pale border-l-4 border-orange rounded-r-xl p-5 mb-12 text-sm text-ink">
            <strong className="text-navy">Document provisoire.</strong> Cette page a été rédigée à
            partir des informations disponibles et doit être relue et complétée (raison sociale exacte,
            numéro RCCM, hébergeur) par un juriste avant d&apos;être considérée comme définitive.
          </div>

          <Section title="Éditeur du site">
            <p>
              Le site <strong>akililabs.com</strong> est édité par <strong>AKILI Labs</strong>, société de
              conseil IT et intégrateur Odoo ERP, dont le siège social est situé à Abidjan, Côte d&apos;Ivoire
              (Zone UEMOA).
            </p>
            <p>
              Numéro RCCM : <em>à compléter</em><br />
              Directeur de la publication : <em>à compléter</em>
            </p>
            <p>
              Contact : <a href="mailto:contact@akililabs.io" className="text-orange-dark hover:underline">contact@akililabs.io</a>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Le site est hébergé par : <em>à compléter (nom, adresse et contact de l&apos;hébergeur)</em>.
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, logos, graphismes, icônes) est la
              propriété exclusive d&apos;AKILI Labs, sauf mention contraire, et ne peut être reproduit,
              distribué ou modifié sans autorisation écrite préalable.
            </p>
          </Section>

          <Section title="Données personnelles">
            <p>
              Le traitement des données collectées via ce site (notamment le formulaire de contact) est
              détaillé dans notre{" "}
              <Link href="/confidentialite" className="text-orange-dark hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Pour toute question relative à ces mentions légales :{" "}
              <a href="mailto:contact@akililabs.io" className="text-orange-dark hover:underline">
                contact@akililabs.io
              </a>
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
