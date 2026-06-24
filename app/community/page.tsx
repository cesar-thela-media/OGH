import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const communities = [
  {
    name: 'Rockport Country Club',
    href: '/rockport-country-club',
    location: 'Rockport, TX',
    tagline: 'Golf course living on the Texas coast',
    img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80',
    tags: ['Golf Course', 'Pool & Tennis', 'HOA Security'],
    homes: '12+ homes built',
  },
  {
    name: 'Southwind Harbor',
    href: '/southwind-harbor',
    location: 'Rockport, TX',
    tagline: 'Waterfront lots with private marina access',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    tags: ['Marina Access', 'Boat Slips', 'Waterfront Views'],
    homes: '8+ homes built',
  },
  {
    name: "Darya's Estates",
    href: '/daryas-estates',
    location: 'Rockport, TX',
    tagline: 'Private estate-sized lots in a quiet community',
    img: `${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`,
    tags: ['Estate Lots', 'Cul-de-sac', 'Family-Friendly'],
    homes: '6+ homes built',
  },
  {
    name: "Daniels Forest",
    href: '/daniels-forest',
    location: 'Rockport, TX',
    tagline: 'Wooded homesites near the bay',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    tags: ['Mature Trees', 'Bay Access', 'Established Neighborhood'],
    homes: '5+ homes built',
  },
  {
    name: 'Harbor Oaks',
    href: '/harbor-oaks',
    location: 'Rockport, TX',
    tagline: 'Waterfront access in a serene coastal setting',
    img: `${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`,
    tags: ['Waterfront Access', 'Quiet Streets', 'Coastal Living'],
    homes: '7+ homes built',
  },
  {
    name: 'Spanish Woods Estates',
    href: '/spanish-woods-estates',
    location: 'Rockport, TX',
    tagline: 'Wooded community with custom architectural character',
    img: `${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`,
    tags: ['Wooded Lots', 'Custom Homes', 'Gated Entry'],
    homes: '10+ homes built',
  },
];

export default function CommunityPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>

        {/* HERO */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 60px 72px' }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 18px' }}>
              Where We Build
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5.5vw, 76px)', fontWeight: 400, color: COLORS.white, margin: '0 0 20px', lineHeight: 1.06, letterSpacing: '-0.025em' }}>
              Our <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Communities.</em>
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.58)', margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Ocean Glory Homes builds in the most sought-after neighborhoods along the Texas Coastal Bend — from waterfront marina communities to wooded estate homesites.
            </p>
          </div>
        </section>

        {/* COMMUNITY GRID */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 28 }}>
            {communities.map(c => (
              <Link
                key={c.href}
                href={c.href}
                style={{ textDecoration: 'none', display: 'block', borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '4/3', boxShadow: '0 4px 32px rgba(13,43,82,0.12)' }}
              >
                <img src={c.img} alt={c.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,43,82,0.95) 0%, rgba(13,43,82,0.55) 48%, rgba(13,43,82,0.08) 80%)' }} />
                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px 26px' }}>
                  <p style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 600, margin: '0 0 6px' }}>
                    {c.location} &middot; {c.homes}
                  </p>
                  <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: COLORS.white, margin: '0 0 10px', lineHeight: 1.15, letterSpacing: '-0.01em' }}>
                    {c.name}
                  </h2>
                  <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: '0 0 14px', lineHeight: 1.5 }}>
                    {c.tagline}
                  </p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {c.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: FONTS.body, fontSize: 10, fontWeight: 600, color: COLORS.navy, backgroundColor: COLORS.gold, borderRadius: 999, padding: '3px 10px', letterSpacing: '0.04em' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Arrow indicator */}
                <div style={{ position: 'absolute', top: 20, right: 20, width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                  <span style={{ color: COLORS.white, fontSize: 16, lineHeight: 1 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BUILD ANYWHERE CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 40px 80px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
              We Go Where You Are
            </p>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400, color: COLORS.white, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Don&apos;t See Your Community?
            </h2>
            <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.60)', margin: '0 0 32px', lineHeight: 1.7 }}>
              We build throughout the Coastal Bend — Corpus Christi, Portland, Port Aransas, Padre Island, and beyond. If you have a lot, we can build on it.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
              <Link href="/lots-for-sale" style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}>
                View Available Lots
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
