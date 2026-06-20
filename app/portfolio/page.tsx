import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const categories = [
  {
    name: 'Exteriors',
    images: [
      { src: '/images/hero-mansion.jpg', alt: 'Custom coastal home exterior', label: 'Ocean Drive Residence' },
      { src: '/images/listing-1511-cape-velero.jpg', alt: 'Stone facade with arched entry', label: '1511 Cape Velero' },
    ],
  },
  {
    name: 'Kitchens',
    images: [
      { src: '/images/listing-1802-laguna-vista.jpg', alt: 'Custom kitchen with island', label: 'Laguna Vista Kitchen' },
      { src: '/images/listing-2324-harbor-key.jpg', alt: 'Open-concept kitchen', label: 'Harbor Key Kitchen' },
    ],
  },
  {
    name: 'Living Spaces',
    images: [
      { src: '/images/blueprint-to-house.jpg', alt: 'Open living area with views', label: 'Cape Velero Living' },
      { src: '/images/hero-mansion.jpg', alt: 'Grand living room', label: 'Mustang Island Retreat' },
    ],
  },
  {
    name: 'Bathrooms',
    images: [
      { src: '/images/listing-1511-cape-velero.jpg', alt: 'Master bathroom', label: 'Padre Island Master Bath' },
      { src: '/images/listing-1802-laguna-vista.jpg', alt: 'Spa-style bathroom', label: 'Laguna Vista Bath' },
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        <section style={{ backgroundColor: COLORS.navy, padding: '88px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Our Work
          </p>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, color: COLORS.white, marginTop: 14, marginBottom: 0, lineHeight: 1.08 }}>
            Customized Quality &amp; Creativity
          </h1>
          <p style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 500, margin: '18px auto 0' }}>
            A part of every home we build — browse our gallery of finished spaces.
          </p>
        </section>

        {/* Category galleries */}
        {categories.map((cat, ci) => (
          <section key={cat.name} style={{ padding: ci === 0 ? '72px 32px 48px' : '48px 32px', maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 32px' }}>
              {cat.name}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
              {cat.images.map((img, ii) => (
                <div key={ii} style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(13,43,82,0.07)', position: 'relative' }}>
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(13,43,82,0.75), transparent)' }}>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.white, margin: 0 }}>{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 88px' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, marginBottom: 24 }}>
            Ready to start your own project? Let&apos;s talk.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: '#fff',
              fontFamily: FONTS.body,
              fontSize: 15,
              fontWeight: 600,
              padding: '15px 40px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
