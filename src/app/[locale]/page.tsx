import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import StatsSection from "@/components/home/StatsSection";
import ExpertisesSection from "@/components/home/ExpertisesSection";
import ApproachSection from "@/components/home/ApproachSection";
import ReferencesSection from "@/components/home/ReferencesSection";
import SectorsSection from "@/components/home/SectorsSection";
import BlogSection from "@/components/home/BlogSection";
import CTABanner from "@/components/home/CTABanner";
import { setRequestLocale } from "next-intl/server";

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
      <ExpertisesSection />
      <ApproachSection />
      <ReferencesSection />
      <SectorsSection />
      <BlogSection />
      <CTABanner />
    </>
  );
}
