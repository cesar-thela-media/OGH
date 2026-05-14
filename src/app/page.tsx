import HeroSection from "@/components/HeroSection";
import IconBanner from "@/components/IconBanner";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PreFooterCta from "@/components/PreFooterCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IconBanner />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PreFooterCta />
    </>
  );
}
