import HeroSection from '@/components/HeroSection';
import FanShowcaseSection from '@/components/FanShowcaseSection';
import DesignBuildSection from '@/components/DesignBuildSection';
import TransparencySection from '@/components/TransparencySection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <HeroSection />
      <FanShowcaseSection />
      <DesignBuildSection />
      <TransparencySection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
