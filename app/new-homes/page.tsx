import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'New Homes',
  description:
    'New custom homes for sale and under construction in Corpus Christi and Rockport, TX. Move-in ready inventory and build-to-order from Ocean Glory Homes.',
};
import BlueprintArtifact from '@/components/BlueprintArtifact';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const whyNewConstruction = [
  {
    icon: '⊹',
    title: 'Customize Everything',
    body: 'Every finish, floor plan, and fixture is your choice — nothing is pre-selected from a package. Your home is designed around you.',
  },
  {
    icon: '◈',
    title: 'Coastal-Grade Build',
    body: 'We engineer every home to meet Texas Windstorm Association specifications — impact windows, elevated slabs, wind-resistant framing.',
  },
  {
    icon: '◎',
    title: 'One Team, Start to Finish',
    body: "No architect handoffs. The same team that draws your plans builds your home. No gaps in accountability, no finger-pointing.",
  },
  {
    icon: '◉',
    title: 'Transparent Pricing',
    body: 'You get a real number upfront. No inflated allowances, no surprise change orders halfway through your build.',
  },
];

const timeline = [
  { phase: 'Design', weeks: 'Weeks 1–4', detail: 'Floor plan, elevations, interior selections' },
  { phase: 'Permitting', weeks: 'Weeks 5–8', detail: 'City/county permits, engineering, windstorm cert' },
  { phase: 'Foundation', weeks: 'Weeks 9–12', detail: 'Elevated slab, piers, grade beam' },
  { phase: 'Framing', weeks: 'Weeks 13–20', detail: 'Structural framing, roof, sheathing' },
  { phase: 'Finishes', weeks: 'Weeks 21–44', detail: 'MEP rough-in, insulation, drywall, all finishes' },
  { phase: 'Closing', weeks: 'Week 48±', detail: 'Final inspection, walkthrough, keys' },
];

const available = listings.filter(l => l.stage === 'For Sale' || l.stage === 'Under Construction').slice(0, 4);

export default function NewHomesPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* FULL PHOTO HERO */}
        <section style={{ position: 'relative', height: '68vh', minHeight: 520, overflow: 'hidden' }}>
          <img
            src={`${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`}
            alt="New custom home construction"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,43,82,0.90) 0%, rgba(13,43,82,0.50) 55%, rgba(13,43,82,0.15) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 18px' }}>
              Now Building
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5.5vw, 78px)', fontWeight: 400, color: COLORS.white, margin: '0 0 16px', lineHeight: 1.05, letterSpacing: '-0.025em', maxWidth: 680 }}>
              New Custom Homes<br />in <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Corpus Christi &amp; Rockport.</em>
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.65)', margin: '0 0 36px', maxWidth: 480, lineHeight: 1.65 }}>
              Move-in ready and under construction homes — plus the option to build completely custom on your schedule.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/for-sale" style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}>
                View Available Homes
              </Link>
              <a href={CONTACT.phoneHref} style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, padding: '14px 32px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.30)' }}>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </section>

        {/* WHY NEW CONSTRUCTION — 4 col */}
        <section className="sp" style={{ backgroundColor: COLORS.white, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>The Ocean Glory Difference</p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>
                Why Build New?
              </h2>
            </div>
            <div className="g4" style={{ gap: 24 }}>
              {whyNewConstruction.map(w => (
                <div key={w.title} style={{ padding: '32px 24px', borderTop: `3px solid ${COLORS.gold}`, backgroundColor: COLORS.offWhite }}>
                  <span style={{ fontFamily: FONTS.heading, fontSize: 32, color: COLORS.gold, display: 'block', marginBottom: 16, lineHeight: 1 }}>{w.icon}</span>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>{w.title}</h3>
                  <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLUEPRINT DESIGN SECTION */}
        <section className="sp32" style={{ backgroundColor: COLORS.offWhite, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="g2" style={{ gap: 56, alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
                  Start with a Plan
                </p>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 20px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                  Your Floor Plan Is the Foundation of Everything.
                </h2>
                <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 16px' }}>
                  We&apos;ll sit down with you and develop a floor plan that fits your lifestyle, your lot, and your vision — before we price a single nail. No off-the-shelf plans, no packages.
                </p>
                <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 28px' }}>
                  Every Ocean Glory home starts with a blank page and ends with something genuinely custom.
                </p>
                <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.navy, color: COLORS.white, fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}>
                  Start Designing
                </a>
              </div>
              <BlueprintArtifact />
            </div>
          </div>
        </section>

        {/* AVAILABLE NEW HOMES */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 40px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 10px' }}>Ready Now</p>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>
                  Available Homes
                </h2>
              </div>
              <Link href="/for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.18)', padding: '10px 22px', borderRadius: 999 }}>
                See All Listings →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
              {available.map(listing => (
                <Link key={listing.id} href={`/for-sale/${listing.id}`} style={{ textDecoration: 'none', display: 'block', borderRadius: 16, overflow: 'hidden', backgroundColor: COLORS.offWhite, border: '1px solid rgba(13,43,82,0.06)' }}>
                  <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={listing.image} alt={listing.address} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.04em', margin: '0 0 3px' }}>
                      {listing.address}, TX {listing.zip}
                    </p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText, margin: '0 0 10px' }}>{listing.location}</p>
                    <div style={{ display: 'flex', gap: 14 }}>
                      <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText }}>{listing.beds} Beds</span>
                      <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText }}>{listing.baths} Baths</span>
                      <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText }}>{listing.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BUILD TIMELINE */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 40px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>What to Expect</p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.white, margin: 0, letterSpacing: '-0.02em' }}>
                Your Build Timeline
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {timeline.map((t, i) => (
                <div key={t.phase} style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: i < timeline.length - 1 ? 36 : 0, borderBottom: i < timeline.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingTop: i > 0 ? 36 : 0 }}>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, color: COLORS.navy }}>{i + 1}</span>
                    </div>
                    {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, backgroundColor: 'rgba(201,168,78,0.25)', minHeight: 24 }} />}
                  </div>
                  <div style={{ flex: 1, paddingTop: 8 }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 6 }}>
                      <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.white, margin: 0 }}>{t.phase}</h3>
                      <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.gold, fontWeight: 600 }}>{t.weeks}</span>
                    </div>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '80px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Ready to Start Your New Home?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, margin: '0 0 32px', lineHeight: 1.6 }}>
            Call to discuss floor plans, available lots, and pricing. We respond within one business day.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}>
              {CONTACT.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: 'transparent', color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: `2px solid rgba(13,43,82,0.15)` }}>
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
