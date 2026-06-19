import NavBar from './NavBar';
import ListingDock from './ListingDock';
import { COLORS, FONTS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-mansion.jpg"
          alt="Ocean Glory custom coastal home at the waterfront"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        {/* Gradient: subtle tint at top for nav legibility, heavy navy at bottom for dock */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,43,82,0.18) 0%, rgba(13,43,82,0) 28%, rgba(13,43,82,0.35) 55%, rgba(13,43,82,0.96) 88%, rgba(13,43,82,1) 100%)',
          }}
        />
      </div>

      <NavBar transparent />

      {/* Centered headline + bottom dock */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 36 }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(52px, 6.5vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: COLORS.white,
              margin: 0,
              letterSpacing: '-0.01em',
              textShadow: '0 2px 32px rgba(13,43,82,0.4)',
            }}
          >
            Homes Worthy
            <br />
            of Your{' '}
            <em style={{ fontStyle: 'italic', color: COLORS.gold, fontWeight: 300 }}>Dreams.</em>
          </h1>
        </div>

        <div style={{ width: '100%', padding: '0 32px 40px', maxWidth: 1440, margin: '0 auto' }}>
          <ListingDock />
        </div>
      </div>
    </section>
  );
}
