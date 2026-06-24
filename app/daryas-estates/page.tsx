import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Darya's Estates",
  description:
    "Private gated community in Rockport, TX with estate-sized cul-de-sac lots. Custom homes by Ocean Glory Homes in Darya's Estates.",
};
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const lotDetails = [
  { label: 'Lot Sizes', value: '0.35 – 0.55 acres' },
  { label: 'Community Type', value: 'Private, HOA gated' },
  { label: 'Location', value: 'Rockport, TX 78382' },
  { label: 'Utilities', value: 'All utilities to lot line' },
  { label: 'Street Type', value: 'Cul-de-sac layout' },
  { label: 'Zoning', value: 'Residential custom build' },
];

export default function DaryasEstatesPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* EDITORIAL COLOR BLOCK HEADER — no photo */}
        <section style={{ backgroundColor: COLORS.navy }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 64px 72px' }}>
            <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 28 }}>
              ← Our Communities
            </Link>
            <div className="g2" style={{ gap: 64, alignItems: 'end' }}>
              <div>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
                  Private Estate Community
                </p>
                <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(44px, 6vw, 82px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.0, letterSpacing: '-0.03em' }}>
                  Darya&apos;s<br />
                  <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Estates.</em>
                </h1>
              </div>
              <div>
                <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.60)', lineHeight: 1.8, margin: '0 0 24px' }}>
                  Rockport, TX &middot; Gated Community
                </p>
                <div className="g2" style={{ gap: 18 }}>
                  {lotDetails.map(d => (
                    <div key={d.label} style={{ borderTop: `1px solid rgba(201,168,78,0.35)`, paddingTop: 12 }}>
                      <p style={{ fontFamily: FONTS.body, fontSize: 10, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px' }}>{d.label}</p>
                      <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.80)', margin: 0 }}>{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GOLD PULL QUOTE */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '72px 64px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <svg width="40" height="30" viewBox="0 0 40 30" fill={COLORS.gold} style={{ marginBottom: 24, opacity: 0.5 }}>
              <path d="M0 30V18C0 8.4 5.6 2.4 16.8 0l2.4 4.2C13.2 5.8 10 9 9.6 14H16V30H0zm24 0V18C24 8.4 29.6 2.4 40.8 0l2.4 4.2C37.2 5.8 34 9 33.6 14H40V30H24z" />
            </svg>
            <p style={{ fontFamily: FONTS.heading, fontSize: 'clamp(22px, 3vw, 34px)', fontStyle: 'italic', color: COLORS.navy, lineHeight: 1.5, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
              A private residential community designed for families who want space, privacy, and the quiet beauty of coastal Texas — without the noise of a resort town.
            </p>
            <div style={{ width: 48, height: 2, backgroundColor: COLORS.gold, margin: '0 auto' }} />
          </div>
        </section>

        {/* FULL-WIDTH PHOTO STRIP */}
        <section style={{ height: 420, overflow: 'hidden', position: 'relative' }}>
          <img
            src={`${BASE}/2024/11/125-Sunrise-edit-4-Front-495x400.jpg`}
            alt="Darya's Estates home"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13,43,82,0.15)' }} />
        </section>

        {/* EDITORIAL BODY */}
        <section className="sp" style={{ backgroundColor: COLORS.white, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
              About the Community
            </p>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 28px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Space, Privacy, and the Texas Coastal Lifestyle.
            </h2>
            <div className="g2" style={{ gap: 32 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.85, margin: 0 }}>
                Darya&apos;s Estates is a small, gated residential community in Rockport featuring estate-sized lots on quiet cul-de-sac streets. With generous lot dimensions ranging from one-third to half an acre, homes here have room to breathe — large covered porches, outdoor kitchens, and pools without crowding the property line.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.85, margin: 0 }}>
                Ocean Glory Homes has built homes in Darya&apos;s Estates for families looking for a peaceful retreat close to Rockport Bay, local dining, and the area&apos;s beaches — without being in the middle of the action. All utilities are at the lot line. HOA is low-maintenance and well-managed.
              </p>
            </div>
          </div>
        </section>

        {/* TWO-PHOTO GALLERY */}
        <section className="sp" style={{ backgroundColor: COLORS.offWhite, paddingTop: 0, paddingBottom: 80 }}>
          <div className="g2" style={{ maxWidth: 1100, margin: '0 auto', gap: 16 }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={`${BASE}/2022/06/14-Tradewinds-Front-Exterior-495x400.jpeg`} alt="Darya's Estates home 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={`${BASE}/2024/07/1504-Cape-Valero-Exterior-495x400.jpg`} alt="Darya's Estates home 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Interested in Darya&apos;s Estates?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 32px' }}>
            Lots are limited. Call to check availability and discuss your custom home design.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}>
              {CONTACT.phone}
            </a>
            <Link href="/contact" style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}>
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
