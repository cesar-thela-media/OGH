import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Homes for Sale',
  description:
    'Browse custom homes for sale and under construction by Ocean Glory Homes in Rockport and Corpus Christi, TX. Call for current pricing.',
};

const stageLabel: Record<string, string> = {
  'For Sale': 'FOR SALE',
  'Under Contract': 'UNDER CONTRACT',
  'Sold': 'SOLD',
  'Under Construction': 'UNDER CONSTRUCTION',
};

const stageColor: Record<string, { bg: string; text: string; border: string }> = {
  'For Sale':           { bg: 'rgba(31,107,58,0.08)',   text: '#1F6B3A', border: 'rgba(31,107,58,0.25)' },
  'Under Contract':     { bg: 'rgba(201,168,78,0.10)',  text: '#8B6A00', border: 'rgba(201,168,78,0.40)' },
  'Sold':               { bg: 'rgba(13,43,82,0.06)',    text: COLORS.navy, border: 'rgba(13,43,82,0.18)' },
  'Under Construction': { bg: 'rgba(107,174,212,0.12)', text: '#2D6E8E', border: 'rgba(107,174,212,0.40)' },
};

export default function ForSalePage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* Page header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '40px 32px 48px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 10px' }}>
              Ocean Glory Homes
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.1 }}>
              Available Homes
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '12px 0 0' }}>
              {listings.filter(l => l.stage === 'For Sale' || l.stage === 'Under Construction').length} available &middot; Corpus Christi, Rockport &amp; Portland, Texas
            </p>
          </div>
        </section>

        {/* Listings grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 28 }}>
            {listings.map(listing => {
              const sc = stageColor[listing.stage] ?? stageColor['For Sale'];
              return (
                <div
                  key={listing.id}
                  style={{
                    backgroundColor: COLORS.white,
                    borderRadius: 18,
                    overflow: 'hidden',
                    boxShadow: '0 2px 20px rgba(13,43,82,0.07)',
                    border: '1px solid rgba(13,43,82,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Photo */}
                  <Link href={`/for-sale/${listing.id}`} style={{ display: 'block', flexShrink: 0, height: 260, overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={listing.image}
                      alt={listing.address}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    />
                    {/* Stage badge overlaid on photo */}
                    <span style={{
                      position: 'absolute', top: 14, right: 14,
                      fontFamily: FONTS.body, fontSize: 10, fontWeight: 700,
                      color: sc.text, backgroundColor: sc.bg,
                      border: `1px solid ${sc.border}`,
                      borderRadius: 999, padding: '5px 12px',
                      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                      letterSpacing: '0.06em',
                    }}>
                      {stageLabel[listing.stage]}
                    </span>
                  </Link>

                  {/* Card body */}
                  <div style={{ padding: '24px 26px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Address headline — OGH format */}
                    <h2 style={{
                      fontFamily: FONTS.body,
                      fontSize: 15,
                      fontWeight: 700,
                      color: COLORS.navy,
                      margin: '0 0 4px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                    }}>
                      {listing.address}, TX {listing.zip}
                    </h2>
                    <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: '0 0 16px' }}>
                      {listing.location}
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', gap: 0, marginBottom: 16, borderTop: '1px solid rgba(13,43,82,0.06)', borderBottom: '1px solid rgba(13,43,82,0.06)', padding: '12px 0' }}>
                      {[
                        { label: 'Beds', value: listing.beds },
                        { label: 'Baths', value: listing.baths },
                        { label: 'Floor Area', value: `${listing.sqft.toLocaleString()} sqft` },
                        ...(listing.landSqft ? [{ label: 'Land', value: `${listing.landSqft.toLocaleString()} sqft` }] : []),
                      ].map((stat, i, arr) => (
                        <div key={stat.label} style={{ flex: 1, textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid rgba(13,43,82,0.08)' : 'none', padding: '0 4px' }}>
                          <p style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, color: COLORS.navy, margin: 0 }}>{stat.value}</p>
                          <p style={{ fontFamily: FONTS.body, fontSize: 10, color: COLORS.grayText, margin: '2px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    {listing.description && (
                      <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: '0 0 20px', lineHeight: 1.65, flex: 1 }}>
                        {listing.description.length > 120 ? listing.description.slice(0, 120) + '…' : listing.description}
                      </p>
                    )}

                    {/* CTA */}
                    <Link
                      href={`/for-sale/${listing.id}`}
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: COLORS.navy,
                        color: COLORS.white,
                        fontFamily: FONTS.body,
                        fontSize: 13,
                        fontWeight: 600,
                        padding: '12px 20px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        letterSpacing: '0.03em',
                        marginTop: 'auto',
                      }}
                    >
                      View Property Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '64px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>
            Don&apos;t See What You&apos;re Looking For?
          </p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 38px)', color: COLORS.white, fontWeight: 400, margin: '0 0 16px' }}>
            We Build to Order — On Your Lot or Ours.
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.60)', margin: '0 0 32px' }}>
            Call to discuss floor plans, available land, and pricing.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}
            >
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-block', backgroundColor: 'transparent', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}
            >
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
