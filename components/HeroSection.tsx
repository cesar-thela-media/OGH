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
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
        />
        {/* Gradient: barely visible at top for nav, photo clear through center, darkens bottom third */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: [
              'linear-gradient(to bottom,',
              '  rgba(13,43,82,0.10) 0%,',
              '  rgba(13,43,82,0.00) 18%,',
              '  rgba(13,43,82,0.00) 48%,',
              '  rgba(13,43,82,0.22) 60%,',
              '  rgba(13,43,82,0.78) 76%,',
              '  rgba(13,43,82,0.97) 88%,',
              '  rgba(13,43,82,1.00) 100%',
              ')',
            ].join(' '),
          }}
        />
      </div>

      <NavBar transparent />

      {/* Headline + dock — anchored to bottom */}
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
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 44 }}>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(54px, 6vw, 92px)',
              fontWeight: 400,
              lineHeight: 1.08,
              color: COLORS.white,
              margin: 0,
              letterSpacing: '-0.015em',
              textShadow: '0 2px 40px rgba(13,43,82,0.55)',
            }}
          >
            Homes Worthy
            <br />
            of Your{' '}
            <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Dreams.</em>
          </h1>
        </div>

        <div style={{ width: '100%', padding: '0 40px 44px' }}>
          <ListingDock />
        </div>
      </div>
    </section>
  );
}
