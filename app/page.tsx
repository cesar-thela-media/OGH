import HeroSection from '@/components/HeroSection';
import DesignBuildSection from '@/components/DesignBuildSection';
import TransparencySection from '@/components/TransparencySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <HeroSection />
      <DesignBuildSection />
      <TransparencySection />
      <Footer />
    </main>
  );
}
