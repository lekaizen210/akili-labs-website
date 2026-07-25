import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/ui/PageHero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates("/mentions-legales", locale as "fr" | "en"),
    robots: { index: false, follow: true },
  };
}

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
  const t = await getTranslations({ locale, namespace: "Legal" });

  return (
    <>
      <PageHero
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-pale border-l-4 border-orange rounded-r-xl p-5 mb-12 text-sm text-ink">
            <strong className="text-navy">{t("notice.strong")}</strong> {t("notice.text")}
          </div>

          <Section title={t("publisher.title")}>
            <p>
              {t.rich("publisher.introRich", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>
              {t("publisher.rccmLabel")} <em>{t("publisher.toComplete")}</em>
              <br />
              {t("publisher.directorLabel")} <em>{t("publisher.toComplete")}</em>
            </p>
            <p>
              {t("publisher.contactLabel")}{" "}
              <a href="mailto:contact@akililabs.io" className="text-orange-dark hover:underline">
                contact@akililabs.io
              </a>
            </p>
          </Section>

          <Section title={t("hosting.title")}>
            <p>
              {t.rich("hosting.textRich", {
                em: (chunks) => <em>{chunks}</em>,
              })}
            </p>
          </Section>

          <Section title={t("ip.title")}>
            <p>{t("ip.text")}</p>
          </Section>

          <Section title={t("personalData.title")}>
            <p>
              {t.rich("personalData.textRich", {
                link: (chunks) => (
                  <Link href="/confidentialite" className="text-orange-dark hover:underline">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </Section>

          <Section title={t("contact.title")}>
            <p>
              {t("contact.text")}{" "}
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
