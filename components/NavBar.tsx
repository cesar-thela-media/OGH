'use client';
import Link from 'next/link';
import { useState } from 'react';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

const navLinks = [
  { label: 'For Sale',  href: '/for-sale' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
];

export default function NavBar({ transparent = false }: { transparent?: boolean }) {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: transparent ? 'absolute' : 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isMobile ? '16px 24px' : '20px 48px',
          backgroundColor: 'rgba(13,43,82,0.25)',
          backdropFilter: 'blur(10px)',
          isolation: 'isolate',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <WaveLogomark color={COLORS.white} />
          <span style={{ color: COLORS.white, fontFamily: FONTS.sans, fontSize: 14, letterSpacing: '0.16em', fontWeight: 600 }}>
            OCEAN GLORY HOMES
          </span>
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 40 }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: COLORS.white, fontFamily: FONTS.sans, fontSize: 15, textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {!isMobile && (
          <Link
            href="/for-sale"
            style={{
              backgroundColor: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.sans,
              fontSize: 14,
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            See Available Homes
          </Link>
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{ display: 'block', width: 22, height: 2, backgroundColor: COLORS.white, borderRadius: 2 }}
              />
            ))}
          </button>
        )}
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: COLORS.navy,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: 24, right: 24,
              background: 'none', border: 'none', color: COLORS.white,
              fontSize: 28, cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            ×
          </button>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: COLORS.white, fontFamily: FONTS.sans, fontSize: 22, textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/for-sale"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.sans,
              fontSize: 16,
              fontWeight: 600,
              padding: '14px 32px',
              borderRadius: 999,
              textDecoration: 'none',
              marginTop: 8,
            }}
          >
            See Available Homes
          </Link>
        </div>
      )}
    </>
  );
}

export function WaveLogomark({ color }: { color: string }) {
  return (
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
      <path d="M2 6c3-3 6 3 9 0s6 3 9 0 6 3 6 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 12c3-3 6 3 9 0s6 3 9 0 6 3 6 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M2 18c3-3 6 3 9 0s6 3 9 0 6 3 6 0" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
