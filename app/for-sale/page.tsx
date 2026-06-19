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
        {/* Page header */}
        <section
          style={{
            backgroundColor: COLORS.navy,
            padding: '88px 24px 72px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: COLORS.gold,
              fontWeight: 600,
              margin: 0,
            }}
          >
            Current Opportunities
          </p>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              color: COLORS.white,
              marginTop: 14,
              marginBottom: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
            }}
          >
            Available Homes
          </h1>
        </section>

        {/* Listing grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 32,
            }}
          >
            {listings.map(listing => (
              <Link
                key={listing.id}
                href={`/for-sale/${listing.id}`}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(13,43,82,0.08)',
                  textDecoration: 'none',
                  display: 'block',
                  border: '1px solid rgba(13,43,82,0.06)',
                }}
              >
                <div style={{ width: '100%', height: 260, overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={listing.image}
                    alt={listing.address}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontFamily: FONTS.sans,
                      fontSize: 10,
                      fontWeight: 600,
                      color: COLORS.gold,
                      border: `1px solid rgba(201,168,78,0.6)`,
                      borderRadius: 999,
                      padding: '4px 12px',
                      backgroundColor: 'rgba(13,43,82,0.72)',
                      backdropFilter: 'blur(8px)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {listing.stage}
                  </div>
                </div>
                <div style={{ padding: '24px 28px 28px' }}>
                  <h3
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 24,
                      fontWeight: 400,
                      color: COLORS.navy,
                      margin: '0 0 10px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {listing.address}
                  </h3>
                  <div style={{ display: 'flex', gap: 24, marginBottom: 16 }}>
                    {[
                      `${listing.beds} Beds`,
                      `${listing.baths} Baths`,
                      `${listing.sqft.toLocaleString()} sqft`,
                    ].map(spec => (
                      <span
                        key={spec}
                        style={{
                          fontFamily: FONTS.sans,
                          fontSize: 13,
                          color: COLORS.grayText,
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 22,
                      fontWeight: 600,
                      color: COLORS.gold,
                      margin: 0,
                    }}
                  >
                    {listing.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 88px' }}>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 15,
              color: COLORS.grayText,
              marginBottom: 24,
            }}
          >
            Interested in a property? Call to schedule a private showing.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: '#fff',
              fontFamily: FONTS.sans,
              fontSize: 15,
              fontWeight: 600,
              padding: '15px 40px',
              borderRadius: 999,
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
