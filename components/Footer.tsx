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
          borderTop: '1px solid rgba(201,168,78,0.28)',
          padding: '30px 52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <WaveLogomark color={COLORS.white} />
          <span
            style={{
              color: COLORS.white,
              fontFamily: FONTS.sans,
              fontSize: 12,
              letterSpacing: '0.20em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Ocean Glory Homes
          </span>
        </Link>

        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: FONTS.sans,
                fontSize: 13,
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <SocialIcon kind="instagram" />
          <SocialIcon kind="facebook" />
          <SocialIcon kind="linkedin" />
        </div>
      </div>

      {/* Giant faint monogram */}
      <span
        style={{
          position: 'absolute',
          bottom: -80,
          right: -16,
          fontFamily: FONTS.serif,
          fontSize: 300,
          color: 'rgba(107,174,212,0.04)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          fontStyle: 'italic',
        }}
      >
        O
      </span>
    </footer>
  );
}

function SocialIcon({ kind }: { kind: 'instagram' | 'facebook' | 'linkedin' }) {
  return (
    <a
      href="#"
      aria-label={kind}
      style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5">
        {kind === 'instagram' && (
          <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.75)" stroke="none" />
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
    </a>
  );
}
