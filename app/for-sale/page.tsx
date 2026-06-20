import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function ForSalePage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>
        <section style={{ backgroundColor: COLORS.navy, padding: '88px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Current Opportunities
          </p>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, color: COLORS.white, marginTop: 14, marginBottom: 0, lineHeight: 1.08 }}>
            Available Homes
          </h1>
        </section>

        {/* 2-column listing grid */}
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))', gap: 36 }}>
            {listings.map(listing => (
              <Link
                key={listing.id}
                href={`/for-sale/${listing.id}`}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(13,43,82,0.06)',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(13,43,82,0.05)',
                }}
              >
                <div style={{ width: '100%', height: 340, overflow: 'hidden', position: 'relative' }}>
                  <img src={listing.image} alt={listing.address} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <span style={{
                    position: 'absolute', top: 16, right: 16,
                    fontFamily: FONTS.body, fontSize: 11, fontWeight: 600,
                    color: COLORS.gold, border: `1px solid ${COLORS.gold}`,
                    borderRadius: 999, padding: '5px 14px',
                    backgroundColor: 'rgba(13,43,82,0.70)', backdropFilter: 'blur(8px)',
                  }}>
                    {listing.stage}
                  </span>
                </div>
                <div style={{ padding: '28px 32px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 26, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>
                    {listing.address}
                  </h3>
                  <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
                    <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText }}>{listing.beds} Beds</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText }}>{listing.baths} Baths</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText }}>{listing.sqft.toLocaleString()} sqft</span>
                  </div>
                  <p style={{ fontFamily: FONTS.body, fontSize: 24, fontWeight: 600, color: COLORS.gold, margin: 'auto 0 0' }}>
                    {listing.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '0 24px 88px' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 16, color: COLORS.grayText, marginBottom: 24 }}>
            Interested in a property? Call to schedule a private showing.
          </p>
          <a href={CONTACT.phoneHref} style={{
            display: 'inline-block', backgroundColor: COLORS.gold, color: '#fff',
            fontFamily: FONTS.body, fontSize: 15, fontWeight: 600,
            padding: '16px 40px', borderRadius: 999, textDecoration: 'none',
          }}>
            {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
