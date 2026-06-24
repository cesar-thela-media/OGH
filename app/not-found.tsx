import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 32px' }}>
        <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
          404
        </p>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 18px', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
          Page Not Found
        </h1>
        <p style={{ fontFamily: FONTS.body, fontSize: 16, color: COLORS.grayText, margin: '0 0 40px', lineHeight: 1.7, maxWidth: 440 }}>
          This page doesn&apos;t exist or may have moved. Try the links below or call us directly.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <Link href="/" style={{ display: 'inline-block', backgroundColor: COLORS.navy, color: COLORS.white, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}>
            Go Home
          </Link>
          <Link href="/for-sale" style={{ display: 'inline-block', color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, padding: '14px 32px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.18)' }}>
            View Homes
          </Link>
          <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}>
            {CONTACT.phone}
          </a>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Portfolio', href: '/portfolio' },
            { label: 'About Us', href: '/about' },
            { label: 'Communities', href: '/community' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, textDecoration: 'none', opacity: 0.55 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
