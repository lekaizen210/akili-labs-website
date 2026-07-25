import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import StatsSection from "@/components/home/StatsSection";
import UemoaBand from "@/components/home/UemoaBand";
import ExpertisesSection from "@/components/home/ExpertisesSection";
import ApproachSection from "@/components/home/ApproachSection";
import ReferencesSection from "@/components/home/ReferencesSection";
import SectorsSection from "@/components/home/SectorsSection";
import BlogSection from "@/components/home/BlogSection";
import CTABanner from "@/components/home/CTABanner";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home.meta" });
  return {
    // `absolute` bypasses the root layout's "%s | AKILI Labs" template so the
    // homepage title isn't suffixed twice (it already contains "AKILI Labs").
    title: { absolute: t("title") },
    description: t("description"),
    alternates: buildAlternates("/", locale as "fr" | "en"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SocialProofSection />
      <StatsSection />
      <UemoaBand />
      <ExpertisesSection />
      <ApproachSection />
      <ReferencesSection />
      <SectorsSection />
      <BlogSection />
      <CTABanner />
    </>
  );
}
