import NavBar from './NavBar';
import ListingDock from './ListingDock';
import { COLORS, FONTS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '92vh', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* REPLACE: swap Unsplash placeholder with licensed photography of the actual home */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2160&q=85"
          alt="Ocean Glory custom coastal home at the waterfront"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(13,43,82,0) 35%, rgba(13,43,82,0.55) 75%, rgba(13,43,82,0.85) 100%)',
          }}
        />
      </div>

      <NavBar transparent />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: 'clamp(100px, 24vh, 260px)' }}>
        <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.08, color: COLORS.white, margin: 0 }}>
          Homes Worthy
          <br />
          of Your{' '}
          <span style={{ fontStyle: 'italic', color: COLORS.gold }}>Dreams.</span>
        </h1>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, zIndex: 2, padding: '0 64px' }}>
        <ListingDock />
      </div>
    </section>
  );
}