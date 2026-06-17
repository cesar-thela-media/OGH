import NavBar from './NavBar';
import ListingDock from './ListingDock';
import { COLORS, FONTS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden' }}>

      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-mansion.jpg"
          alt="Ocean Glory custom coastal home at the waterfront"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* Uniform tint to suppress baked-in reference image text */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13,43,82,0.38)' }} />
        {/* Bottom gradient for listing dock legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, rgba(13,43,82,0.55) 70%, rgba(13,43,82,0.88) 100%)',
          }}
        />
      </div>

      <NavBar transparent />

      {/* Headline */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '18vh' }}>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: 'clamp(48px, 6vw, 88px)',
            lineHeight: 1.08,
            color: COLORS.white,
            margin: 0,
            fontWeight: 400,
          }}
        >
          Homes Worthy
          <br />
          of Your{' '}
          <span style={{ fontStyle: 'italic', color: COLORS.gold }}>Dreams.</span>
        </h1>
      </div>

      {/* Listing dock pinned near bottom */}
      <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 2, padding: '0 64px' }}>
        <ListingDock />
      </div>
    </section>
  );
}
