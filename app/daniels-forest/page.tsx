import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Daniels Forest',
  description:
    'Wooded residential community near Aransas Bay in Rockport, TX. Half-acre lots under mature oak canopy. Custom homes by Ocean Glory Homes.',
};
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const features = [
  {
    icon: '🌳',
    title: 'Mature Oak Canopy',
    body: 'Daniels Forest is named for its tree coverage — most lots have decades-old live oaks that provide natural shade and a true sense of privacy from day one.',
  },
  {
    icon: '🦅',
    title: 'Bay Proximity',
    body: 'The community sits within a mile of Aransas Bay, close enough for fishing and kayaking without the storm surge exposure of true waterfront land.',
  },
  {
    icon: '🏡',
    title: 'Generous Lot Sizes',
    body: 'Half-acre and larger lots give you the room to design a home with a real back yard, outdoor kitchen, and pool without squeezing the property line.',
  },
  {
    icon: '🔒',
    title: 'Quiet Cul-de-Sac Streets',
    body: 'Low-traffic roads, no through streets. Kids ride bikes here. Neighbors wave. It feels like the country, ten minutes from downtown Rockport.',
  },
  {
    icon: '⚡',
    title: 'All Utilities to Lot',
    body: 'Water, sewer, electric, and cable all run to the lot line. No hidden infrastructure costs — just your custom home.',
  },
  {
    icon: '🏗️',
    title: 'No Cookie-Cutter Homes',
    body: 'Every home in Daniels Forest is custom-built. No production builders, no package plans. Your home should look like yours.',
  },
];

export default function DanielsForestPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* WOODED PHOTO HERO */}
        <section style={{ position: 'relative', height: '72vh', minHeight: 540, overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85"
            alt="Wooded coastal Texas landscape"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,43,82,0.92) 0%, rgba(13,43,82,0.65) 50%, rgba(13,43,82,0.20) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px', maxWidth: 740 }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.50)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 22 }}>
              ← Our Communities
            </Link>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
              Wooded Residential Community
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(42px, 6vw, 80px)', fontWeight: 400, color: COLORS.white, margin: '0 0 20px', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
              Daniels<br />
              <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Forest.</em>
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 440 }}>
              Rockport&apos;s most tree-covered residential community. Custom homes on half-acre wooded lots, close to the bay.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '14px 30px', borderRadius: 999, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
              <Link href="/lots-for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.white, padding: '14px 30px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}>
                View Lots
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO STAT ROW */}
        <section style={{ backgroundColor: COLORS.gold }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { value: '0.5+', label: 'Acres Per Lot' },
              { value: '< 1mi', label: 'to Aransas Bay' },
              { value: '100%', label: 'Custom Built' },
              { value: '30+', label: 'Homes Completed' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '24px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(13,43,82,0.12)' : 'none' }}>
                <p style={{ fontFamily: FONTS.heading, fontSize: 34, fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>{s.value}</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 600, color: 'rgba(13,43,82,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '4px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-COL FEATURE CARDS */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '80px 48px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>
                What Makes It Special
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>
                Life in Daniels Forest
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
              {features.map(f => (
                <div key={f.title} style={{ backgroundColor: COLORS.white, borderRadius: 16, padding: '32px 28px', border: '1px solid rgba(13,43,82,0.05)' }}>
                  <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{f.icon}</span>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px', lineHeight: 1.2 }}>{f.title}</h3>
                  <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.75, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTO + TEXT */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 64px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
                Build On Your Lot
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 22px', lineHeight: 1.14, letterSpacing: '-0.02em' }}>
                OGH Has Built Dozens of Homes in Daniels Forest.
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 18px' }}>
                We know this community. We know the soil, the setbacks, the county permit office, and what design choices work best under the tree canopy. When you build here with OGH, you&apos;re not starting from scratch.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 30px' }}>
                Lots are available. Call to discuss lot selection, floor plans, and pricing — we make the process simple.
              </p>
              <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.navy, color: COLORS.white, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '14px 30px', borderRadius: 999, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '16/9' }}>
                <img src={`${BASE}/2022/06/14-Tradewinds-Front-Exterior-495x400.jpeg`} alt="Home in Daniels Forest" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={`${BASE}/2024/07/1504-Cape-Valero-Exterior-495x400.jpg`} alt="Custom home exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={`${BASE}/2024/11/125-Sunrise-edit-4-Front-495x400.jpg`} alt="Home exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Own a Lot in Daniels Forest?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 32px', lineHeight: 1.6 }}>
            We build on existing lots. No need to buy from us — just call to start the design process.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 999, textDecoration: 'none' }}>
              {CONTACT.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '16px 40px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.22)' }}>
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
