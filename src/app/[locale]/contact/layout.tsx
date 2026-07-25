import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });
  const alternates = buildAlternates("/contact", locale as "fr" | "en");

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical,
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/logo-akili.png", width: 1600, height: 893, alt: t("ogImageAlt") }],
    },
  };
}

export default async function ContactLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return children;
}
