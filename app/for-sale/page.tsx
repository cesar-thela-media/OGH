import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function ForSalePage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Page header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 24px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Current Opportunities
          </p>
          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 4.5vw, 64px)', color: COLORS.white, marginTop: 12, fontWeight: 400 }}>
            Available Homes
          </h1>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.grayText, maxWidth: 540, margin: '16px auto 0' }}>
            Custom coastal homes designed and built by one company — explore our current projects.
          </p>
        </section>

        {/* Listing grid */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
            {listings.map(listing => (
              <Link
                key={listing.id}
                href={`/for-sale/${listing.id}`}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(13,43,82,0.08)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div style={{ width: '100%', height: 260, overflow: 'hidden' }}>
                  <img
                    src={listing.image}
                    alt={listing.address}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <h3 style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.navy, margin: 0, fontWeight: 400 }}>
                      {listing.address}
                    </h3>
                    <span style={{
                      fontFamily: FONTS.sans, fontSize: 11, color: COLORS.gold,
                      border: `1px solid ${COLORS.gold}`, borderRadius: 999,
                      padding: '4px 12px', whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {listing.stage}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.grayText }}>
                      {listing.beds} Beds
                    </span>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.grayText }}>
                      {listing.baths} Baths
                    </span>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.grayText }}>
                      {listing.sqft.toLocaleString()} sqft
                    </span>
                  </div>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 20, fontWeight: 700, color: COLORS.gold, margin: 0 }}>
                    {listing.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 80px' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.grayText, marginBottom: 24 }}>
            Interested in a property? Call us to schedule a private showing.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.sans,
              fontSize: 16,
              fontWeight: 600,
              padding: '16px 40px',
              borderRadius: 999,
              textDecoration: 'none',
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
