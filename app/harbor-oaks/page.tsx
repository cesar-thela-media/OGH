import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Harbor Oaks',
  description:
    'Established residential community in Rockport, TX with community dock access. Custom homes on corner and waterfront-access lots by Ocean Glory Homes.',
};
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

export default function HarborOaksPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* MINIMAL NAVY HEADER — no photo, clean type layout */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 64px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.40)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>
              ← Our Communities
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <div style={{ width: 36, height: 2, backgroundColor: COLORS.gold }} />
                  <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
                    Waterfront Access Community
                  </p>
                </div>
                <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5.5vw, 78px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.0, letterSpacing: '-0.035em' }}>
                  Harbor Oaks
                </h1>
              </div>
              <div style={{ maxWidth: 340 }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 24px' }}>
                  A quiet, established residential community in Rockport with community dock access, corner lots, and custom homes built to last the coast.
                </p>
                <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO MOSAIC GRID */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '48px 64px 72px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            {/* Top row: wide + narrow */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 14 }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9', position: 'relative' }}>
                <img src={`${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`} alt="Harbor Oaks home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,43,82,0.75) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: 24, left: 28 }}>
                  <p style={{ fontFamily: FONTS.heading, fontSize: 22, color: COLORS.white, margin: 0, letterSpacing: '-0.01em' }}>Custom Coastal Homes</p>
                  <p style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.65)', margin: '4px 0 0' }}>Harbor Oaks, Rockport TX</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', flex: 1 }}>
                  <img src={`${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`} alt="Custom home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ borderRadius: 20, backgroundColor: COLORS.gold, padding: '24px 22px', flex: '0 0 auto' }}>
                  <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 6px' }}>Community Highlights</p>
                  <p style={{ fontFamily: FONTS.heading, fontSize: 20, color: COLORS.navy, margin: 0, lineHeight: 1.3 }}>Dock Access &middot; Corner Lots &middot; HOA</p>
                </div>
              </div>
            </div>

            {/* Bottom row: 3 equal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
              <div style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`} alt="Home exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: 18, backgroundColor: COLORS.navy, padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 10px' }}>Location</p>
                <p style={{ fontFamily: FONTS.heading, fontSize: 24, color: COLORS.white, margin: '0 0 10px', lineHeight: 1.2 }}>Rockport, TX 78382</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>Minutes from Rockport Beach, local dining, and Aransas Bay.</p>
              </div>
              <div style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src={`${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`} alt="OGH home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* COMMUNITY DETAILS */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
                About Harbor Oaks
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 22px', lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                An Established Community with Room to Build.
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.82, margin: '0 0 18px' }}>
                Harbor Oaks is one of Rockport&apos;s most desirable residential neighborhoods — mature streets, community waterfront access, and a mix of established and new custom construction. Homes here range from traditional coastal designs to contemporary single-story builds.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.82, margin: 0 }}>
                Ocean Glory Homes has been building in Harbor Oaks for over a decade. We know the community deed restrictions, the best lot orientations for bay breezes, and the contractors who understand coastal construction here.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Location', value: 'Rockport, TX 78382' },
                { label: 'Lot Sizes', value: '0.25 – 0.50 acres' },
                { label: 'Waterfront Access', value: 'Community dock & fishing pier' },
                { label: 'HOA', value: 'Low annual dues, well-managed' },
                { label: 'Build Restrictions', value: 'Architectural review required' },
                { label: 'OGH Homes Here', value: '18+ completed' },
              ].map(d => (
                <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(13,43,82,0.07)' }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d.label}</span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '72px 32px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              Build in Harbor Oaks
            </h2>
            <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, margin: '0 0 32px', lineHeight: 1.65 }}>
              Lots available now — or bring your own. Call to check availability and start your custom home design.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.navy, color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 38px', borderRadius: 999, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
              <Link href="/contact" style={{ display: 'inline-block', color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 38px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.18)' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
