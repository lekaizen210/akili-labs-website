import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";

const BASE_URL = "https://akililabs.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${BASE_URL}/contact` },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/contact`,
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
