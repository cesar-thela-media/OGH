import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return listings.map(listing => ({ slug: listing.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const listing = listings.find(l => l.id === params.slug);
  if (!listing) return { title: 'Listing Not Found' };
  return {
    title: listing.address,
    description: `${listing.beds} bed, ${listing.baths} bath, ${listing.sqft.toLocaleString()} sqft custom home in ${listing.location}. Built by Ocean Glory Homes.`,
  };
}

const stageLabel: Record<string, string> = {
  'For Sale':           'FOR SALE',
  'Under Contract':     'UNDER CONTRACT',
  'Sold':               'SOLD',
  'Under Construction': 'UNDER CONSTRUCTION',
};

const stageBg: Record<string, string> = {
  'For Sale':           '#E8F3EA',
  'Under Contract':     'rgba(201,168,78,0.15)',
  'Sold':               'rgba(13,43,82,0.10)',
  'Under Construction': 'rgba(107,174,212,0.15)',
};

const stageTextColor: Record<string, string> = {
  'For Sale':           '#1F6B3A',
  'Under Contract':     '#8B6A00',
  'Sold':               COLORS.navy,
  'Under Construction': '#2D6E8E',
};

const features = [
  'Impact-rated windows and doors',
  'Elevated slab foundation',
  'Wind-resistant framing per Texas Windstorm Association specs',
  'Custom cabinetry throughout',
  'Quartz or granite countertops (buyer\'s choice)',
  'Covered outdoor living area',
  'Two-car garage minimum',
  'Energy-efficient HVAC system',
];

export default function ListingDetailPage({ params }: { params: { slug: string } }) {
  const listing = listings.find(l => l.id === params.slug);
  if (!listing) notFound();

  const sc = { bg: stageBg[listing.stage] ?? '#E8F3EA', text: stageTextColor[listing.stage] ?? '#1F6B3A' };

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>

        {/* Hero photo */}
        <section style={{ width: '100%', height: '58vh', minHeight: 460, overflow: 'hidden', position: 'relative' }}>
          <img
            src={listing.image}
            alt={listing.address}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,43,82,0.94) 0%, rgba(13,43,82,0.02) 52%)' }} />
          <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0, padding: '0 48px' }}>
            {/* Stage badge */}
            <span style={{
              fontFamily: FONTS.body, fontSize: 10, fontWeight: 700,
              color: sc.text, backgroundColor: sc.bg,
              borderRadius: 999, padding: '5px 14px',
              display: 'inline-block', marginBottom: 14,
              letterSpacing: '0.07em',
            }}>
              {stageLabel[listing.stage]}
            </span>
            {/* OGH address format */}
            <h1 style={{
              fontFamily: FONTS.body,
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              fontWeight: 700,
              color: COLORS.white,
              margin: 0,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {listing.address}, TX {listing.zip}
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.60)', margin: '6px 0 0' }}>
              {listing.location}
            </p>
          </div>
        </section>

        {/* Detail body */}
        <section style={{ maxWidth: 1040, margin: '0 auto', padding: '52px 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>

            {/* Stats bar — full width */}
            <div style={{
              gridColumn: '1 / -1',
              backgroundColor: COLORS.white,
              borderRadius: 18,
              padding: '28px 36px',
              boxShadow: '0 2px 16px rgba(13,43,82,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 24,
            }}>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                {[
                  { label: 'Bedrooms', value: String(listing.beds) },
                  { label: 'Bathrooms', value: String(listing.baths) },
                  { label: 'Floor Area', value: `${listing.sqft.toLocaleString()} sqft` },
                  ...(listing.landSqft ? [{ label: 'Land Area', value: `${listing.landSqft.toLocaleString()} sqft` }] : []),
                ].map(s => (
                  <div key={s.label}>
                    <p style={{ fontFamily: FONTS.heading, fontSize: 26, fontWeight: 400, color: COLORS.navy, margin: 0 }}>{s.value}</p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.grayText, margin: '3px 0 0', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <a
                href={CONTACT.phoneHref}
                style={{
                  fontFamily: FONTS.body, fontSize: 14, fontWeight: 700,
                  backgroundColor: COLORS.gold, color: COLORS.navy,
                  padding: '13px 28px', borderRadius: 999,
                  textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                }}
              >
                Call for Pricing
              </a>
            </div>

            {/* Description */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '32px 36px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 16px' }}>About This Home</h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.75, margin: 0 }}>
                {listing.description || `This custom ${listing.beds}-bedroom, ${listing.baths}-bath home offers ${listing.sqft.toLocaleString()} square feet of coastal living designed and built entirely by Ocean Glory Homes — from initial floor plan to final finishes — with the quality and attention to detail that defines every project we undertake.`}
              </p>
            </div>

            {/* Features */}
            <div style={{ backgroundColor: COLORS.navy, borderRadius: 18, padding: '32px 36px' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.white, margin: '0 0 20px' }}>Standard Features</h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: COLORS.gold, fontSize: 14, flexShrink: 0, marginTop: 1 }}>—</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery — full width */}
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '200px 200px', gap: 14 }}>
              <div style={{ gridRow: '1 / 3', borderRadius: 14, overflow: 'hidden' }}>
                <img src={listing.image} alt={`${listing.address} exterior`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {[listing.image, listing.image, listing.image, listing.image].map((src, i) => (
                <div key={i} style={{ borderRadius: 14, overflow: 'hidden' }}>
                  <img src={src} alt={`${listing.address} view ${i + 2}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>

            {/* CTA cards */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '32px 36px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 8px' }}>Schedule a Showing</p>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 20px' }}>Interested in This Home?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href={CONTACT.phoneHref} style={{ display: 'block', textAlign: 'center', fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '13px 24px', borderRadius: 10, textDecoration: 'none' }}>
                  {CONTACT.phone}
                </a>
                <a href="/contact" style={{ display: 'block', textAlign: 'center', fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.navy, padding: '13px 24px', borderRadius: 10, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.15)' }}>
                  Send a Message
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: COLORS.offWhite, borderRadius: 18, padding: '32px 36px', border: '1px solid rgba(13,43,82,0.07)' }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 8px' }}>Custom Home Builder</p>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>Don&apos;t See Exactly What You Want?</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.65, margin: '0 0 20px' }}>
                We build fully custom homes on your lot or ours. Tell us your vision and we&apos;ll design it from scratch.
              </p>
              <a href="/about" style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, textDecoration: 'none' }}>
                Learn about our process →
              </a>
            </div>

          </div>

          <div style={{ marginTop: 36 }}>
            <a href="/for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, textDecoration: 'none' }}>
              ← Back to Available Homes
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
