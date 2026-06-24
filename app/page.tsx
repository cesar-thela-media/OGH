import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import DesignBuildSection from '@/components/DesignBuildSection';
import TransparencySection from '@/components/TransparencySection';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ocean Glory Homes — Luxury Coastal Custom Home Builder',
  description:
    'Design + Build, one company. Ocean Glory Homes builds luxury custom homes in Rockport, Corpus Christi, and Portland, Texas. No architect handoffs. No surprises.',
  openGraph: {
    title: 'Ocean Glory Homes — Luxury Coastal Custom Home Builder',
    description: 'Design + Build, one company. Luxury custom homes in coastal Texas.',
    url: 'https://oceangloryhomes.com',
  },
};

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
