import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ShieldCheck, Gift, BadgeCheck, Lock, MonitorSmartphone, BrainCircuit, Download, Mail } from "lucide-react";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { BASE_URL, buildAlternates } from "@/lib/seo";
import { ETHICS_PDF, ETHICS_EMAIL } from "@/lib/ethics";


const pillarIcons = [ShieldCheck, Gift, BadgeCheck, Lock, MonitorSmartphone, BrainCircuit];

type Pillar = { title: string; text: string; ref: string };
type Guarantee = { label: string; text: string };
type Step = { title: string; text: string };
type Role = { label: string; text: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Ethics.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/ethique-conformite", locale as "fr" | "en"),
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl font-black text-navy mb-5">
      <span className="w-3 h-3 bg-orange shrink-0" aria-hidden="true" />
      {children}
    </h2>
  );
}

export default async function EthiqueConformitePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Ethics" });
  const url = buildAlternates("/ethique-conformite", locale as "fr" | "en").canonical;

  const pillars = t.raw("pillars.items") as Pillar[];
  const guarantees = t.raw("reporting.guarantees") as Guarantee[];
  const steps = t.raw("reporting.steps") as Step[];
  const roles = t.raw("governance.roles") as Role[];
  const docRows = ["ref", "version", "approval", "review", "format"] as const;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: t("meta.title"),
    description: t("meta.description"),
    inLanguage: locale === "en" ? "en-US" : "fr-FR",
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: BASE_URL },
        { "@type": "ListItem", position: 2, name: t("hero.badge") + " : " + t("document.title"), item: url },
      ],
    },
    mainEntity: {
      "@type": "DigitalDocument",
      name: t("document.title"),
      identifier: t("document.refValue"),
      version: "3.0",
      encodingFormat: "application/pdf",
      inLanguage: "fr-FR",
      url: `${BASE_URL}${ETHICS_PDF}`,
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  };

  const downloadClasses =
    "inline-flex items-center justify-center gap-2 px-5 py-3 bg-orange-cta text-white font-semibold rounded-xl hover:bg-orange-cta-hover transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHero
        badge={t("hero.badge")}
        title={
          <span className="text-white">
            {t("hero.titleStart")} <HeroHighlight>{t("hero.titleHighlight")}</HeroHighlight>
          </span>
        }
        subtitle={t("hero.subtitle")}
      />

      {/* Engagement + document */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <div>
            <SectionTitle>{t("engagement.title")}</SectionTitle>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink">
              <p>{t("engagement.p1")}</p>
              <p>{t("engagement.p2")}</p>
            </div>
            <blockquote className="mt-6 bg-blue-light border-l-4 border-navy rounded-r-xl p-5 text-navy font-semibold">
              {t("engagement.quote")}
            </blockquote>
            <p className="mt-4 text-sm text-ink">{t("engagement.scope")}</p>
          </div>

          <aside className="rounded-2xl border border-line shadow-sm overflow-hidden">
            <div className="bg-navy px-6 py-5">
              <p className="text-white/65 text-xs font-semibold uppercase tracking-wider mb-1">{t("document.eyebrow")}</p>
              <p className="text-white font-bold text-lg leading-snug">{t("document.title")}</p>
            </div>
            <dl className="px-6 py-5 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm text-ink">
              {docRows.map((key) => (
                <div key={key} className="contents">
                  <dt className="font-semibold text-navy">{t(`document.${key}Label`)}</dt>
                  <dd>{t(`document.${key}Value`)}</dd>
                </div>
              ))}
            </dl>
            <div className="px-6 pb-6">
              <a href={ETHICS_PDF} download className={`${downloadClasses} w-full`}>
                <Download size={18} aria-hidden="true" />
                {t("document.download")}
              </a>
              <p className="text-xs text-ink mt-3 text-center">
                {t("document.signedCopy")}{" "}
                <a href={`mailto:${ETHICS_EMAIL}`} className="text-orange-dark underline">{ETHICS_EMAIL}</a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Piliers */}
      <section className="py-16 bg-blue-pale">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{t("pillars.title")}</SectionTitle>
          <p className="text-[15px] text-ink -mt-3 mb-10 max-w-3xl">{t("pillars.subtitle")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <article key={p.title} className="bg-white rounded-2xl border border-line p-6">
                  <div className="w-11 h-11 rounded-xl bg-orange-pale text-orange-dark flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink">{p.text}</p>
                  <p className="text-xs text-gray-500 mt-3">{p.ref}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signalement */}
      <section className="py-16 bg-white" id="signalement">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle>{t("reporting.title")}</SectionTitle>
            <p className="text-[15px] leading-relaxed text-ink mb-5">{t("reporting.intro")}</p>
            <a href={`mailto:${ETHICS_EMAIL}`} className="inline-flex items-center gap-3 px-5 py-4 rounded-xl bg-navy text-white mb-6 hover:bg-navy/90 transition-colors">
              <Mail size={20} aria-hidden="true" />
              <span>
                <span className="block text-xs text-white/65">{t("reporting.channelLabel")}</span>
                <span className="font-semibold">{ETHICS_EMAIL}</span>
              </span>
            </a>
            <ul className="space-y-3 text-sm text-ink">
              {guarantees.map((g) => (
                <li key={g.label} className="flex gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-orange shrink-0" aria-hidden="true" />
                  <span><strong className="text-navy">{g.label}</strong> {g.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-pale rounded-2xl border border-line p-6 sm:p-8">
            <h3 className="font-bold text-navy text-lg mb-6">{t("reporting.processTitle")}</h3>
            <ol className="border-l-2 border-line ml-3 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="pl-6 relative">
                  <span
                    className={`absolute -left-[13px] top-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${i === steps.length - 1 ? "bg-navy" : "bg-orange-cta"}`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="font-semibold text-navy">{s.title}</p>
                  <p className="text-sm text-ink">{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="text-xs text-gray-600 mt-6">{t("reporting.disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Gouvernance */}
      <section className="py-16 bg-blue-pale">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{t("governance.title")}</SectionTitle>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {roles.map((r) => (
              <div key={r.label} className="bg-white rounded-2xl border border-line p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-dark mb-2">{r.label}</p>
                <p className="text-sm leading-relaxed text-ink">{r.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink mt-6">{t("governance.review")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">{t("cta.title")}</h2>
          <p className="text-white/70 mb-7">{t("cta.text")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className={downloadClasses}>
              {t("cta.contact")}
            </Link>
            <a href={ETHICS_PDF} download className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/30 text-white font-semibold rounded-xl hover:border-white/60 transition-colors">
              <Download size={18} aria-hidden="true" />
              {t("cta.download")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
