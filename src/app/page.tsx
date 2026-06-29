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

export default function HomePage() {
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
