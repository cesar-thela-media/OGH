import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Southwind Harbor',
  description:
    'Waterfront custom homes in Southwind Harbor, Rockport, TX. Private marina, deep-water boat slips, and bay views. Built by Ocean Glory Homes.',
};
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const features = [
  { label: 'Private Marina', detail: 'Deep-water slips for boats up to 40 ft' },
  { label: 'Waterfront Lots', detail: 'Direct bay and canal access lots available' },
  { label: 'Cul-de-sac Streets', detail: 'Quiet, low-traffic neighborhood layout' },
  { label: 'Coastal Views', detail: 'Unobstructed bay and sunset views' },
  { label: 'Fish Cleaning Station', detail: 'Community fishing amenities on-site' },
  { label: 'Covered Pavilion', detail: 'Waterfront gathering space for residents' },
];

export default function SouthwindHarborPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* SPLIT-SCREEN HERO */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 580 }}>
          {/* Left: text */}
          <div style={{ backgroundColor: COLORS.navy, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px' }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 24 }}>
              ← Our Communities
            </Link>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
              Waterfront Living
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 400, color: COLORS.white, margin: '0 0 20px', lineHeight: 1.07, letterSpacing: '-0.025em' }}>
              Southwind<br />
              <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Harbor.</em>
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 380 }}>
              Live on the water. Southwind Harbor is a private marina community in Rockport with waterfront lots, deep-water boat slips, and custom homes built to the Texas coast standard.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
              <Link href="/lots-for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.white, padding: '13px 28px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.22)' }}>
                View Lots
              </Link>
            </div>
          </div>
          {/* Right: photo */}
          <div style={{ overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85"
              alt="Southwind Harbor marina"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* HORIZONTAL FEATURES ROW */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '60px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 32px', textAlign: 'center' }}>
              Community Amenities
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {features.map(f => (
                <div key={f.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: COLORS.gold, flexShrink: 0, marginTop: 8 }} />
                  <div>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>{f.label}</p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: 0, lineHeight: 1.6 }}>{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALTERNATING SECTIONS */}
        {/* Section A: Harbor lifestyle */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={`${BASE}/2024/07/615-N-Fulton-Beach-Exterior-495x400.jpg`} alt="Coastal home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Life on the Water Is Different Here.
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 18px' }}>
                Morning coffee on a deck overlooking the bay. Fishing off your own pier. Docking your boat 200 feet from your front door. Southwind Harbor is one of those rare communities that actually delivers the coastal lifestyle it promises.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: 0 }}>
                Ocean Glory Homes has built throughout Southwind Harbor and knows the community, the covenants, and the coastal engineering requirements to build a home that lasts here.
              </p>
            </div>
          </div>
        </section>

        {/* Section B: Build here */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '80px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
                Build Your Harbor Home
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Lots Available. We Know This Community.
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 28px' }}>
                We have lots available in Southwind Harbor, including one remaining waterfront lot with a deeded boat slip. Call to discuss what&apos;s available and how we can design your perfect harbor home.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.navy, color: COLORS.white, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>
                  Call for Lot Details
                </a>
                <Link href="/for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.navy, padding: '13px 28px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.18)' }}>
                  See Available Homes
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={`${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`} alt="Harbor home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* CTA bar */}
        <section style={{ backgroundColor: COLORS.navy, padding: '52px 32px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <p style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 400, color: COLORS.white, margin: 0, letterSpacing: '-0.01em' }}>
              Ready to build in Southwind Harbor?
            </p>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '14px 36px', borderRadius: 999, textDecoration: 'none', flexShrink: 0 }}>
              {CONTACT.phone}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
