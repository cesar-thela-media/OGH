import HeroSection from '@/components/HeroSection';
import DesignBuildSection from '@/components/DesignBuildSection';
import TransparencySection from '@/components/TransparencySection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <HeroSection />
      <DesignBuildSection />
      <TransparencySection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
