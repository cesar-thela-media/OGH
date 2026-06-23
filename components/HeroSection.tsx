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
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }}
        />
        {/* Constant dark base layer */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13,43,82,0.28)' }} />
        {/* Gradient: dark top for nav, dark bottom for dock */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,43,82,0.55) 0%, rgba(13,43,82,0.10) 18%, rgba(13,43,82,0.10) 38%, rgba(13,43,82,0.45) 58%, rgba(13,43,82,0.88) 78%, rgba(13,43,82,1.00) 92%)',
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
              fontSize: 'clamp(44px, 5.2vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.08,
              color: COLORS.white,
              margin: 0,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 40px rgba(13,43,82,0.70), 0 8px 80px rgba(0,0,0,0.40)',
            }}
          >
            Homes Worthy
            <br />
            of Your{' '}
            <em style={{ fontStyle: 'italic', color: COLORS.gold, fontWeight: 400 }}>Dreams.</em>
          </h1>
        </div>

        <div style={{ width: '100%', padding: '0 48px 56px' }}>
          <ListingDock />
        </div>
      </div>
    </section>
  );
}
