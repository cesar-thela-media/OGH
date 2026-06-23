'use client';
import { ExpandingCards, type CardItem } from '@/components/expanding-cards';
import { Home, Ruler, ShieldCheck, Waves } from 'lucide-react';
import { FONTS, COLORS } from '@/lib/constants';

const featureCards: CardItem[] = [
  {
    id: 'design-build',
    title: 'Design + Build',
    description: 'One company handles everything — no architect handoffs, no subcontractor blame. From initial floor plan to final walkthrough, one team delivers your vision.',
    imgSrc: 'https://images.unsplash.com/photo-1599409637219-d04e9a2db432?auto=format&fit=crop&w=1200&q=80',
    icon: <Ruler size={22} />,
    linkHref: '/about',
  },
  {
    id: 'transparency',
    title: 'Complete Transparency',
    description: 'Real-time budget tracking, frequent progress updates, and honest pricing. No buried markups, no surprise change orders.',
    imgSrc: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    icon: <ShieldCheck size={22} />,
    linkHref: '/about',
  },
  {
    id: 'coastal',
    title: 'Coastal Expertise',
    description: 'Wind ratings, flood zones, salt corrosion — we know the Texas coast. The right materials and techniques that actually last.',
    imgSrc: 'https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?auto=format&fit=crop&w=1200&q=80',
    icon: <Waves size={22} />,
    linkHref: '/about',
  },
  {
    id: 'homes',
    title: 'Available Homes',
    description: 'Explore our current listings — custom coastal homes in Corpus Christi, Rockport, and Portland. Each one designed and built to our standard.',
    imgSrc: 'https://images.unsplash.com/photo-1715944171009-67c19539c2b8?auto=format&fit=crop&w=1200&q=80',
    icon: <Home size={22} />,
    linkHref: '/for-sale',
  },
];

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-offWhite py-16 md:py-24">
      <div className="max-w-[95vw] mx-auto px-4">
        <div className="text-center mb-10">
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>Why Ocean Glory Homes</p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(30px, 3.8vw, 48px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>What Sets Us Apart</h2>
        </div>
        <ExpandingCards items={featureCards} defaultActiveIndex={0} />
      </div>
    </section>
  );
}
