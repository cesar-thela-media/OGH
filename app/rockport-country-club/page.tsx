import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const amenities = [
  { label: '18-Hole Golf Course', icon: '⛳' },
  { label: 'Clubhouse & Dining', icon: '🏛' },
  { label: 'Pool & Tennis Courts', icon: '🎾' },
  { label: 'Security Gate', icon: '🔒' },
  { label: 'Waterfront Access', icon: '⚓' },
  { label: 'HOA Maintained', icon: '✦' },
];

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const homes = [
  { img: `${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`, label: '14 Country Club Drive' },
  { img: `${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`, label: '22 Fairway Court' },
  { img: `${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`, label: '8 Club Ridge' },
];

export default function RockportCountryClubPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* FULL PHOTO HERO */}
        <section style={{ position: 'relative', height: '65vh', minHeight: 500, overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1600&q=85"
            alt="Rockport Country Club aerial"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,43,82,0.18) 0%, rgba(13,43,82,0.30) 40%, rgba(13,43,82,0.88) 100%)' }} />
          <div style={{ position: 'absolute', bottom: 56, left: 0, right: 0, padding: '0 64px' }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 16 }}>
              ← Our Communities
            </Link>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 400, color: COLORS.white, margin: '0 0 12px', lineHeight: 1.06, letterSpacing: '-0.02em' }}>
              Rockport<br />Country Club
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.68)', margin: 0 }}>
              Golf course community &middot; Rockport, TX 78382
            </p>
          </div>
        </section>

        {/* AMENITY STRIP */}
        <section style={{ backgroundColor: COLORS.gold }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 0, overflowX: 'auto' }}>
            {amenities.map((a, i) => (
              <div key={a.label} style={{ flex: '0 0 auto', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: 10, borderRight: i < amenities.length - 1 ? '1px solid rgba(13,43,82,0.14)' : 'none' }}>
                <span style={{ fontSize: 18 }}>{a.icon}</span>
                <span style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>{a.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* COMMUNITY STORY */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
                Premium Golf Community
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 24px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                Where Luxury Living Meets the Fairway.
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 18px' }}>
                Rockport Country Club is one of the Texas coast&apos;s most coveted addresses — an established, gated golf community with full clubhouse amenities, pool, and tennis in the heart of Rockport.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 32px' }}>
                Ocean Glory Homes has built more than a dozen custom homes within Rockport Country Club. We know the setback requirements, the HOA standards, and the architectural character of the community — so your home fits in from day one.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>
                  {CONTACT.phone}
                </a>
                <Link href="/lots-for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.navy, padding: '13px 28px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.18)' }}>
                  View Available Lots
                </Link>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', gridRow: '1 / 3', aspectRatio: '2/3' }}>
                <img src={`${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`} alt="OGH home in Rockport CC" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '3/2' }}>
                <img src={`${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`} alt="Custom home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '3/2' }}>
                <img src={`${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`} alt="Custom home exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* HOMES WE'VE BUILT HERE */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '72px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 36px', letterSpacing: '-0.02em' }}>
              Homes We&apos;ve Built in Rockport Country Club
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 32 }}>
              {homes.map(h => (
                <div key={h.label} style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
                  <img src={h.img} alt={h.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px', background: 'linear-gradient(to top, rgba(13,43,82,0.80), transparent)' }}>
                    <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.white, margin: 0, fontWeight: 500 }}>{h.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/portfolio" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, textDecoration: 'none' }}>
              View Full Portfolio →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 32px 80px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Build Your Rockport Country Club Home.
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 32px' }}>
            Lots available. Call to discuss your plans and pricing.
          </p>
          <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 40px', borderRadius: 999, textDecoration: 'none' }}>
            {CONTACT.phone}
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
