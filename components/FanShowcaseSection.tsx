'use client';
import CardFanCarousel, { type CardItem } from '@/components/card-fan-carousel';
import { COLORS } from '@/lib/constants';

const galleryImages: CardItem[] = [
  { imgUrl: '/images/hero-mansion.jpg', alt: 'Ocean Glory custom coastal home' },
  { imgUrl: '/images/listing-1511-cape-velero.jpg', alt: '1511 Cape Velero' },
  { imgUrl: '/images/listing-1802-laguna-vista.jpg', alt: '1802 Laguna Vista' },
  { imgUrl: '/images/listing-2324-harbor-key.jpg', alt: '2324 Harbor Key' },
  { imgUrl: '/images/blueprint-to-house.jpg', alt: 'Blueprint to finished home' },
];

export default function FanShowcaseSection() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16 px-6">
        <p className="text-gold text-xs tracking-[0.18em] uppercase font-semibold font-body">Our Craft</p>
        <h2 className="text-white text-3xl md:text-5xl font-heading font-semibold mt-4">See the Difference</h2>
        <p className="text-white/50 font-body text-base md:text-lg max-w-xl mx-auto mt-4">
          Every Ocean Glory home is designed and built under one roof — scroll through our gallery.
        </p>
      </div>
      <div className="flex justify-center items-center min-h-[420px] md:min-h-[540px]">
        <CardFanCarousel cards={galleryImages} />
      </div>
    </section>
  );
}
