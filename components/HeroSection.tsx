import NavBar from './NavBar';
import ListingDock from './ListingDock';
import { COLORS, FONTS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 720, overflow: 'hidden' }}>

      {/* Full-bleed background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-mansion.jpg"
          alt="Ocean Glory custom coastal home at the waterfront"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,43,82,0.35) 0%, rgba(13,43,82,0.05) 25%, rgba(13,43,82,0.00) 45%, rgba(13,43,82,0.35) 65%, rgba(13,43,82,0.82) 80%, rgba(13,43,82,1.00) 95%)',
          }}
        />
      </div>

      <NavBar transparent />

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
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 56 }}>
          <h1
            style={{
              fontFamily: FONTS.heading,
              fontSize: 'clamp(52px, 6.5vw, 96px)',
              fontWeight: 700,
              lineHeight: 1.06,
              color: COLORS.white,
              margin: 0,
              letterSpacing: '-0.03em',
              textShadow: '0 4px 80px rgba(0,0,0,0.50)',
            }}
          >
            Homes Worthy
            <br />
            of Your{' '}
            <em style={{ fontStyle: 'italic', color: COLORS.gold, fontWeight: 700 }}>Dreams.</em>
          </h1>
        </div>

        <div style={{ width: '100%', padding: '0 48px 56px' }}>
          <ListingDock />
        </div>
      </div>
    </section>
  );
}
