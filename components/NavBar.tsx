'use client';
import Link from 'next/link';
import { useState } from 'react';
import { COLORS, FONTS, LOGO_URL } from '@/lib/constants';
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
          padding: isMobile ? '18px 24px' : '22px 60px',
          backgroundColor: transparent ? 'rgba(13,43,82,0.22)' : COLORS.navy,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: transparent ? '1px solid rgba(255,255,255,0.10)' : 'none',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={LOGO_URL} alt="Ocean Glory Homes" style={{ height: 40, width: 'auto' }} />
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 44 }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.90)',
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  fontWeight: 400,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                }}
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
              color: '#fff',
              fontFamily: FONTS.body,
              fontSize: 13,
              fontWeight: 600,
              padding: '11px 26px',
              borderRadius: 999,
              textDecoration: 'none',
              letterSpacing: '0.02em',
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
              style={{
                color: COLORS.white,
                fontFamily: FONTS.heading,
                fontSize: 28,
                textDecoration: 'none',
                fontWeight: 400,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/for-sale"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: COLORS.gold,
              color: '#fff',
              fontFamily: FONTS.body,
              fontSize: 15,
              fontWeight: 600,
              padding: '14px 36px',
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
    <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
      <path d="M2 7c3.5-3.5 7 3.5 10.5 0S20 10.5 23.5 7 27 10.5 28 7" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M2 13c3.5-3.5 7 3.5 10.5 0S20 16.5 23.5 13 27 16.5 28 13" stroke={color} strokeWidth="1.7" strokeLinecap="round" opacity="0.65" />
      <path d="M2 19c3.5-3.5 7 3.5 10.5 0S20 22.5 23.5 19 27 22.5 28 19" stroke={color} strokeWidth="1.7" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
