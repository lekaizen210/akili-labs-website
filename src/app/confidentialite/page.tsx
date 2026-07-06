import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

const BASE_URL = "https://akililabs.com";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site AKILI Labs — données collectées, finalités, droits des personnes.",
  alternates: { canonical: `${BASE_URL}/confidentialite` },
  robots: { index: false, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="flex items-center gap-3 text-lg font-bold text-[#1A2B3C] mb-3">
        <span className="w-2.5 h-2.5 bg-[#FF5500] shrink-0" aria-hidden="true" />
        {title}
      </h2>
      <div className="text-sm text-[#374151] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        badge="Vie privée"
        title="Politique de confidentialité"
        subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles."
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF4E5] border-l-4 border-[#FF5500] rounded-r-xl p-5 mb-12 text-sm text-[#374151]">
            <strong className="text-[#1A2B3C]">Document provisoire.</strong> Cette politique décrit les
            traitements réellement mis en œuvre par le site à ce jour. Elle doit être relue par un juriste
            pour confirmer sa conformité à la loi ivoirienne n° 2013-450 relative à la protection des
            données à caractère personnel et, le cas échéant, au RGPD, avant publication définitive.
          </div>

          <Section title="Responsable du traitement">
            <p>
              AKILI Labs, Abidjan, Côte d&apos;Ivoire (Zone UEMOA), est responsable du traitement des données
              collectées sur ce site. Contact :{" "}
              <a href="mailto:contact@akililabs.io" className="text-[#c94200] hover:underline">
                contact@akililabs.io
              </a>
            </p>
          </Section>

          <Section title="Données collectées">
            <p>
              Le formulaire de la page{" "}
              <a href="/contact" className="text-[#c94200] hover:underline">Contact</a> collecte : nom
              complet, adresse email professionnelle, société (facultatif), téléphone (facultatif), objet et
              message. Aucune autre donnée personnelle n&apos;est collectée activement sur le reste du site.
            </p>
          </Section>

          <Section title="Finalité et base légale">
            <p>
              Ces données sont utilisées exclusivement pour répondre à votre demande de contact ou de devis.
              Le traitement repose sur votre consentement, donné au moment de la soumission du formulaire.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Les données transmises via le formulaire de contact sont conservées le temps nécessaire au
              traitement de votre demande, puis archivées ou supprimées conformément à nos obligations
              commerciales et légales.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;opposition et de suppression de vos données personnelles. Pour exercer
              ces droits, contactez-nous à{" "}
              <a href="mailto:contact@akililabs.io" className="text-[#c94200] hover:underline">
                contact@akililabs.io
              </a>
              .
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site n&apos;utilise pas de cookies de suivi publicitaire ou d&apos;analyse tiers à ce jour.
              Cette section sera mise à jour si un outil de mesure d&apos;audience est ajouté.
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
