import Link from 'next/link';
import { COLORS, FONTS, CONTACT, SOCIALS, LOGO_URL } from '@/lib/constants';

const footerLinks = [
  { label: 'For Sale',       href: '/for-sale' },
  { label: 'Portfolio',      href: '/portfolio' },
  { label: 'Recently Sold',  href: '/recently-sold' },
  { label: 'Reviews',        href: '/reviews' },
  { label: 'About',          href: '/about' },
  { label: 'Contact',        href: '/contact' },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Builder News',   href: '/news' },
  { label: 'Español',        href: '/espanol' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.white, borderTop: '1px solid rgba(13,43,82,0.08)', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          padding: '56px 60px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Brand column */}
        <div style={{ flex: '1 1 280px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: 16 }}>
            <img src={LOGO_URL} alt="Ocean Glory Homes" style={{ height: 36, width: 'auto' }} />
          </Link>
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, lineHeight: 1.7, margin: '0 0 16px', maxWidth: 300, opacity: 0.7 }}>
            A locally owned custom home builder serving Rockport, Portland, and Corpus Christi, Texas.
          </p>
          <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.navy, margin: 0, opacity: 0.6 }}>
            <a href={CONTACT.phoneHref} style={{ color: COLORS.navy, textDecoration: 'none', fontWeight: 700 }}>{CONTACT.phone}</a>
          </p>
        </div>

        {/* Nav column */}
        <div style={{ flex: '0 1 auto' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 20px', opacity: 0.8 }}>
            Navigate
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {footerLinks.map(link => (
              <Link key={link.href} href={link.href} style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, textDecoration: 'none', opacity: 0.65 }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social column */}
        <div style={{ flex: '0 1 auto' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 20px', opacity: 0.8 }}>
            Follow Us
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map(s => (
              <SocialIcon key={s.kind} kind={s.kind} href={s.href} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(13,43,82,0.08)',
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.navy, opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} Ocean Glory Homes. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {bottomLinks.map(link => (
            <Link key={link.label} href={link.href} style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.navy, textDecoration: 'none', opacity: 0.5 }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Giant faint monogram */}
      <span style={{
        position: 'absolute', bottom: -80, right: -16,
        fontFamily: FONTS.heading, fontSize: 300,
        color: 'rgba(13,43,82,0.03)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', fontStyle: 'italic',
      }}>
        O
      </span>
    </footer>
  );
}

function SocialIcon({ kind, href }: { kind: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={kind}
      style={{
        width: 34, height: 34, borderRadius: '50%',
        border: '1px solid rgba(13,43,82,0.22)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textDecoration: 'none',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.navy} strokeWidth="1.5" opacity={0.6}>
        {kind === 'instagram' && (
          <>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill={COLORS.navy} stroke="none" opacity={0.6} />
          </>
        )}
        {kind === 'facebook' && (
          <path d="M15 8h-2a2 2 0 00-2 2v2H9v2h2v6h2v-6h2l1-2h-3v-2a1 1 0 011-1h2V8z" />
        )}
        {kind === 'tiktok' && (
          <path d="M18.5 6.5a5 5 0 01-4.5-4.5h-3v11a2 2 0 01-4 1.5A2 2 0 0110 13V10H7v3a5 5 0 0010 2V7a5.5 5.5 0 003 1.5V5.5a3.5 3.5 0 01-1.5-1z" />
        )}
      </svg>
    </a>
  );
}
