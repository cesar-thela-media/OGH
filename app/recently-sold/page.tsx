import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import Link from 'next/link';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const soldListings = [
  {
    address: '6814 METS COURT, TX 78414',
    location: 'Corpus Christi, TX',
    beds: 4, baths: 3, sqft: 2950,
    image: `${BASE}/2021/07/JPAGE-RealEstate-6814Mets-7424-495x400.jpg`,
    soldYear: 2022,
  },
  {
    address: '4600 COUNTY ROAD 56, TX 78374',
    location: 'Portland, TX',
    beds: 3, baths: 2.5, sqft: 2400,
    image: `${BASE}/2022/08/4600-cr-56-exterior-495x385.jpg`,
    soldYear: 2023,
  },
  {
    address: '1509 CAPE VELERO, TX 78382',
    location: 'Rockport, TX',
    beds: 4, baths: 3.5, sqft: 3200,
    image: `${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`,
    soldYear: 2024,
  },
  {
    address: '1504 CAPE VELERO, TX 78382',
    location: 'Rockport, TX',
    beds: 4, baths: 3, sqft: 2980,
    image: `${BASE}/2024/07/1504-Cape-Valero-Exterior-495x400.jpg`,
    soldYear: 2024,
  },
  {
    address: '125 SUNRISE DR, TX 78382',
    location: 'Rockport, TX',
    beds: 4, baths: 3.5, sqft: 3100,
    image: `${BASE}/2024/11/125-Sunrise-edit-4-Front-495x400.jpg`,
    soldYear: 2025,
  },
  {
    address: '615 N FULTON BEACH, TX 78382',
    location: 'Rockport, TX',
    beds: 3, baths: 2.5, sqft: 2600,
    image: `${BASE}/2024/07/615-N-Fulton-Beach-Exterior-495x400.jpg`,
    soldYear: 2024,
  },
  {
    address: '905 DUNES DR, TX 78382',
    location: 'Rockport, TX',
    beds: 4, baths: 3.5, sqft: 3400,
    image: `${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`,
    soldYear: 2025,
  },
  {
    address: '101 CYPRESS DR, TX 78382',
    location: 'Rockport, TX',
    beds: 4, baths: 3, sqft: 2850,
    image: `${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`,
    soldYear: 2026,
  },
];

export default function RecentlySoldPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '52px 32px 60px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 10px' }}>
              Ocean Glory Homes
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: COLORS.white, margin: '0 0 12px', lineHeight: 1.1 }}>
              Recently Sold Homes
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.50)', margin: 0 }}>
              {soldListings.length} completed homes &mdash; Corpus Christi, Rockport &amp; Portland, Texas
            </p>
          </div>
        </section>

        {/* Grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 22 }}>
            {soldListings.map((listing, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(13,43,82,0.06)',
                  border: '1px solid rgba(13,43,82,0.05)',
                }}
              >
                <div style={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                  <img
                    src={listing.image}
                    alt={listing.address}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.92)' }}
                  />
                  <span style={{
                    position: 'absolute', top: 12, right: 12,
                    fontFamily: FONTS.body, fontSize: 10, fontWeight: 700,
                    color: COLORS.white, backgroundColor: 'rgba(13,43,82,0.75)',
                    borderRadius: 999, padding: '5px 12px', letterSpacing: '0.06em',
                    backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                  }}>
                    SOLD {listing.soldYear}
                  </span>
                </div>
                <div style={{ padding: '20px 22px 24px' }}>
                  <h2 style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 700, color: COLORS.navy, margin: '0 0 4px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {listing.address}
                  </h2>
                  <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText, margin: '0 0 14px' }}>{listing.location}</p>
                  <div style={{ display: 'flex', gap: 20 }}>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.beds} Beds</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.baths} Baths</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '48px 24px 88px' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Ready to Build Your Next Home?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, margin: '0 0 28px' }}>
            View what&apos;s currently available or talk to us about building on your lot.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/for-sale"
              style={{ display: 'inline-block', backgroundColor: COLORS.navy, color: COLORS.white, fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}
            >
              View Available Homes
            </Link>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}
            >
              {CONTACT.phone}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
