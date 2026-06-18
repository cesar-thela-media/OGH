import NavBar from './NavBar';
import ListingDock from './ListingDock';
import { COLORS, FONTS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* REPLACE: swap Unsplash placeholder with licensed photography of the actual home */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2160&q=85"
          alt="Ocean Glory custom coastal home at the waterfront"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        {/* Gradient: transparent at top, deep navy at bottom so the dock sits on near-black */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,43,82,0) 30%, rgba(13,43,82,0.42) 62%, rgba(13,43,82,0.97) 100%)',
          }}
        />
      </div>

      <NavBar transparent />

      {/* Heading + listing dock pinned to bottom — matches reference where both live in the lower third */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: '0 24px 36px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(44px, 5.5vw, 82px)',
              lineHeight: 1.08,
              color: COLORS.white,
              margin: 0,
              textShadow: '0 2px 24px rgba(13,43,82,0.35)',
            }}
          >
            Homes Worthy
            <br />
            of Your{' '}
            <span style={{ fontStyle: 'italic', color: COLORS.gold }}>Dreams.</span>
          </h1>
        </div>
        <ListingDock />
      </div>
    </section>
  );
}
