import Link from 'next/link';
import { COLORS, FONTS } from '@/lib/constants';
import { WaveLogomark } from './NavBar';

const links = [
  { label: 'For Sale',  href: '/for-sale' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.navy, position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          borderTop: `1px solid ${COLORS.goldSoft}`,
          padding: '32px 64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <WaveLogomark color={COLORS.white} />
          <span
            style={{
              color: COLORS.white,
              fontFamily: FONTS.sans,
              fontSize: 13,
              letterSpacing: '0.14em',
              fontWeight: 600,
            }}
          >
            OCEAN GLORY HOMES
          </span>
        </div>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontFamily: FONTS.sans,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 14 }}>
          <SocialIcon kind="instagram" />
          <SocialIcon kind="facebook" />
          <SocialIcon kind="linkedin" />
        </div>
      </div>

      {/* Giant faint monogram */}
      <span
        style={{
          position: 'absolute',
          bottom: -60,
          right: -20,
          fontFamily: FONTS.serif,
          fontSize: 260,
          color: 'rgba(107,174,212,0.06)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        O
      </span>
    </footer>
  );
}

function SocialIcon({ kind }: { kind: 'instagram' | 'facebook' | 'linkedin' }) {
  return (
    <span
      style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        {kind === 'instagram' && (
          <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
          </>
        )}
        {kind === 'facebook' && (
          <path d="M15 8h-2a2 2 0 00-2 2v2H9v2h2v6h2v-6h2l1-2h-3v-2a1 1 0 011-1h2V8z" />
        )}
        {kind === 'linkedin' && (
          <>
            <rect x="3" y="9" width="4" height="11" />
            <circle cx="5" cy="4" r="2" />
            <path d="M11 9h4v2c1-1.5 3-2.5 5-2.5 3 0 4 2 4 5v6h-4v-5c0-1.2-.5-2-1.5-2s-2 .8-2 2v5h-4V9z" />
          </>
        )}
      </svg>
    </span>
  );
}
