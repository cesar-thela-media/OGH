import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Spanish Woods Estates',
  description:
    'Gated community with oversized wooded lots in Rockport, TX. Half-acre and larger lots under mature oak canopy. Custom homes by Ocean Glory Homes.',
};
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const sections = [
  {
    eyebrow: 'Privacy & Space',
    heading: 'Oversized Wooded Lots in a Gated Community.',
    body: [
      'Spanish Woods Estates is defined by its lot sizes — the most generous in the Rockport market. Most parcels start at half an acre and go up from there, set beneath mature Spanish oak and live oak coverage that creates true shade and seclusion.',
      "The community is gated, with a managed HOA that maintains common areas and enforces architectural standards. Every home here was built custom — no two are alike.",
    ],
    img: `${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`,
    imgLeft: false,
  },
  {
    eyebrow: 'Build Your Way',
    heading: 'Your Floor Plan. Your Finishes. Your Home.',
    body: [
      'Spanish Woods Estates has no preferred builder requirement. That said, Ocean Glory Homes has built more homes here than any other contractor. We know the covenant restrictions, the soil conditions, and what designs the architectural review board approves without friction.',
      'Bring your own plans or start fresh with us — we can design a home from scratch or adapt an existing plan to your lot.',
    ],
    img: `${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`,
    imgLeft: true,
  },
];

export default function SpanishWoodsEstatesPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* PHOTO OVERLAY HERO — full-bleed with centered centered text overlay */}
        <section style={{ position: 'relative', height: '75vh', minHeight: 560, overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=85"
            alt="Spanish Woods Estates custom home"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,43,82,0.68)' }} />

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.08em' }}>
              ← Our Communities
            </Link>
            <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.white, backgroundColor: 'rgba(255,255,255,0.10)', padding: '10px 22px', borderRadius: 999, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.20)' }}>
              {CONTACT.phone}
            </a>
          </div>

          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 32px' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 700, margin: '0 0 20px' }}>
              Gated Residential Community &middot; Rockport, TX
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 6vw, 86px)', fontWeight: 400, color: COLORS.white, margin: '0 0 22px', lineHeight: 1.0, letterSpacing: '-0.03em', maxWidth: 800 }}>
              Spanish Woods<br /><em style={{ fontStyle: 'italic', color: COLORS.gold }}>Estates.</em>
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.62)', margin: '0 0 38px', lineHeight: 1.65, maxWidth: 500 }}>
              Half-acre and larger gated lots under a mature oak canopy. The most private community OGH builds in.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/lots-for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}>
                View Available Lots
              </Link>
              <Link href="/contact" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.white, padding: '14px 32px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.28)' }}>
                Discuss Your Build
              </Link>
            </div>
          </div>
        </section>

        {/* SPEC BAR */}
        <section style={{ backgroundColor: COLORS.navy, borderTop: '1px solid rgba(201,168,78,0.18)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { value: '0.6+ ac', label: 'Min Lot Size' },
              { value: 'Gated', label: 'Community Type' },
              { value: '78382', label: 'Rockport, TX' },
              { value: '22+', label: 'OGH Homes' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '28px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <p style={{ fontFamily: FONTS.heading, fontSize: 30, fontWeight: 400, color: COLORS.gold, margin: 0 }}>{s.value}</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.40)', textTransform: 'uppercase', letterSpacing: '0.10em', margin: '6px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ALTERNATING BROCHURE SECTIONS */}
        {sections.map((s, idx) => (
          <section key={s.heading} style={{ backgroundColor: idx % 2 === 0 ? COLORS.white : COLORS.offWhite, padding: '88px 64px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', direction: s.imgLeft ? 'rtl' : 'ltr' }}>
              <div style={{ borderRadius: 22, overflow: 'hidden', aspectRatio: '4/3', direction: 'ltr' }}>
                <img src={s.img} alt={s.heading} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
                  {s.eyebrow}
                </p>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 24px', lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.82, margin: i < s.body.length - 1 ? '0 0 18px' : 0 }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* GALLERY ROW */}
        <section style={{ backgroundColor: COLORS.white, padding: '0 64px 80px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 24px' }}>
              Homes We&apos;ve Built Here
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`} alt="Spanish Woods home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`} alt="Custom home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`${BASE}/2024/07/615-N-Fulton-Beach-Exterior-495x400.jpg`} alt="OGH custom build" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ textAlign: 'right', marginTop: 16 }}>
              <Link href="/portfolio" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, textDecoration: 'none' }}>
                Full Portfolio →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 48px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.025em' }}>
            Ready to Build in Spanish Woods Estates?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.50)', margin: '0 0 36px', lineHeight: 1.65 }}>
            Limited lots. Call today to check availability and begin your custom home design.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '16px 44px', borderRadius: 999, textDecoration: 'none' }}>
              {CONTACT.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '16px 44px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.22)' }}>
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
