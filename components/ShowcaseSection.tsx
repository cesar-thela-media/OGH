'use client';
import { ExpandingCards, type CardItem } from '@/components/expanding-cards';
import { Home, Ruler, ShieldCheck, Waves } from 'lucide-react';
import { COLORS } from '@/lib/constants';

const featureCards: CardItem[] = [
  {
    id: 'design-build',
    title: 'Design + Build',
    description: 'One company handles everything — no architect handoffs, no subcontractor blame. From initial floor plan to final walkthrough, one team delivers your vision.',
    imgSrc: '/images/blueprint-to-house.jpg',
    icon: <Ruler size={22} />,
    linkHref: '/about',
  },
  {
    id: 'transparency',
    title: 'Complete Transparency',
    description: 'Real-time budget tracking, frequent progress updates, and honest pricing. No buried markups, no surprise change orders — just the truth at every stage.',
    imgSrc: '/images/hero-mansion.jpg',
    icon: <ShieldCheck size={22} />,
    linkHref: '/about',
  },
  {
    id: 'coastal',
    title: 'Coastal Expertise',
    description: 'Building on the Texas coast demands knowledge of wind ratings, flood zones, and salt corrosion. We know the codes, materials, and techniques that last.',
    imgSrc: '/images/listing-1511-cape-velero.jpg',
    icon: <Waves size={22} />,
    linkHref: '/about',
  },
  {
    id: 'homes',
    title: 'Available Homes',
    description: 'Explore our current listings — custom coastal homes in Corpus Christi, Rockport, and Portland. Each one designed and built to the highest standard.',
    imgSrc: '/images/listing-1802-laguna-vista.jpg',
    icon: <Home size={22} />,
    linkHref: '/for-sale',
  },
];

export default function ShowcaseSection() {
  return (
    <section className="bg-offWhite py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.18em] uppercase font-semibold font-body">Why Ocean Glory Homes</p>
          <h2 className="text-navy text-3xl md:text-5xl font-heading font-semibold mt-4">What Sets Us Apart</h2>
        </div>
        <ExpandingCards items={featureCards} defaultActiveIndex={0} />
      </div>
    </section>
  );
}
