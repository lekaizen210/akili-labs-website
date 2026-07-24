import { Rocket, Users, GraduationCap, MapPin } from "lucide-react";
import type { Metadata } from "next";
import CandidatureForm from "@/components/carrieres/CandidatureForm";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";

const icons = [Rocket, GraduationCap, Users, MapPin];

const domainColors: Record<string, string> = {
  erp: "bg-blue-50 text-blue-700",
  devsecops: "bg-green-50 text-green-700",
  ia: "bg-purple-50 text-purple-700",
  projet: "bg-orange-50 text-orange-700",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Careers.meta" });
  return { title: t("title"), description: t("description") };
}

type Offre = { titre: string; type: string; lieu: string; domainId: string };
type Avantage = { title: string; desc: string };

export default async function CarrieresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Careers" });

  const offres = t.raw("offres.items") as Offre[];
  const avantages = t.raw("avantages.items") as Avantage[];
  const domainLabels = t.raw("offres.domainLabels") as Record<string, string>;

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        align="left"
        maxWidth="max-w-4xl"
        title={
          <>
            <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
            <span className="text-white">{t("hero.titleLine1")}<br />{t("hero.titleLine2")}</span>
          </>
        }
        subtitle={t("hero.subtitle")}
      />

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-light text-navy text-sm font-medium rounded-full mb-4">
              ■ {t("avantages.badge")}
            </div>
            <h2 className="text-3xl font-black text-navy">{t("avantages.title")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {avantages.map((a, i) => {
              const Icon = icons[i];
              return (
                <div key={a.title} className="bg-blue-light rounded-2xl p-6 border border-line">
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4">
                    <Icon size={20} className="text-orange" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{a.title}</h3>
                  <p className="text-sm text-ink leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offres + Formulaire */}
      <section className="py-20 bg-blue-light" id="offres">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Liste des offres */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-navy text-sm font-medium rounded-full mb-6">
              ■ {t("offres.badge")}
            </div>
            <h2 className="text-2xl font-black text-navy mb-6">{t("offres.title")}</h2>
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
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-md ${domainColors[o.domainId] ?? "bg-gray-100 text-gray-600"}`}>
                          {domainLabels[o.domainId] ?? o.domainId}
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">{o.type}</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={10} />{o.lieu}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold text-orange-dark group-hover:underline whitespace-nowrap">
                    {t("offres.applyLink")}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 p-5 bg-navy rounded-2xl text-white">
              <p className="text-sm font-semibold mb-1">{t("offres.spontaneousTitle")}</p>
              <p className="text-xs text-white/60 mb-3">
                {t("offres.spontaneousText")}
              </p>
              <a href="#formulaire" className="text-xs font-semibold text-orange hover:underline">
                {t("offres.spontaneousLink")}
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
