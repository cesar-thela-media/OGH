import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IntegritySection from "@/components/IntegritySection";
import CustomHomesSection from "@/components/CustomHomesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CommunitiesSection from "@/components/CommunitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustRibbon from "@/components/TrustRibbon";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <IntegritySection />
      <CustomHomesSection />
      <PortfolioSection />
      <CommunitiesSection />
      <TestimonialsSection />
      <TrustRibbon />
      <CtaBand />
    </>
  );
}
