'use client';
import { ExpandingCards, type CardItem } from '@/components/expanding-cards';
import { Home, Ruler, ShieldCheck, Waves } from 'lucide-react';

const featureCards: CardItem[] = [
  {
    id: 'design-build',
    title: 'Design + Build',
    description: 'One company handles everything — no architect handoffs, no subcontractor blame. From initial floor plan to final walkthrough, one team delivers your vision.',
    imgSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
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
    imgSrc: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    icon: <Waves size={22} />,
    linkHref: '/about',
  },
  {
    id: 'homes',
    title: 'Available Homes',
    description: 'Explore our current listings — custom coastal homes in Corpus Christi, Rockport, and Portland. Each one designed and built to our standard.',
    imgSrc: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
    icon: <Home size={22} />,
    linkHref: '/for-sale',
  },
];

export default function ShowcaseSection() {
  return (
    <section className="w-full bg-offWhite py-16 md:py-24">
      <div className="max-w-[95vw] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.18em] uppercase font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Why Ocean Glory Homes</p>
          <h2 className="text-navy text-3xl md:text-5xl mt-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>What Sets Us Apart</h2>
        </div>
        <ExpandingCards items={featureCards} defaultActiveIndex={0} />
      </div>
    </section>
  );
}
