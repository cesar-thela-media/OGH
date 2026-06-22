import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const locations: Record<string, string> = {
  '1511-cape-velero': 'Corpus Christi, TX',
  '116-forest-hills': 'Rockport, TX',
  '117-forest-hills': 'Rockport, TX',
  '118-forest-hills': 'Rockport, TX',
  '427-augusta': 'Rockport, TX',
  '10-westpointe': 'Rockport, TX',
  '15-tradewinds': 'Rockport, TX',
  '24-tradewinds': 'Rockport, TX',
};

export default function ForSalePage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        <section style={{ backgroundColor: COLORS.navy, padding: '48px 24px 56px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 600, color: COLORS.white, margin: 0, lineHeight: 1.1 }}>Available Homes</h1>
        </section>

        <section style={{ maxWidth: '96vw', margin: '0 auto', padding: '48px 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 24 }}>
            {listings.map(listing => (
              <div key={listing.id} style={{ backgroundColor: COLORS.white, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 16px rgba(13,43,82,0.05)', border: '1px solid rgba(13,43,82,0.05)' }}>
                <Link href={`/for-sale/${listing.id}`} style={{ display: 'block', width: '100%', height: 300, overflow: 'hidden' }}>
                  <img src={listing.image} alt={listing.address} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Link>
                <div style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <h3 style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 600, color: COLORS.navy, margin: 0 }}>{listing.address}</h3>
                    <span style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: listing.stage === 'For Sale' ? '#1F6B3A' : COLORS.gold, border: `1px solid ${listing.stage === 'For Sale' ? 'rgba(31,107,58,0.4)' : 'rgba(201,168,78,0.5)'}`, borderRadius: 999, padding: '4px 12px', whiteSpace: 'nowrap', flexShrink: 0 }}>{listing.stage}</span>
                  </div>
                  <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: '0 0 14px' }}>{locations[listing.id] || 'Corpus Christi Area'}</p>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.beds} Beds</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.baths} Baths</span>
                    <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText }}>{listing.sqft.toLocaleString()} sqft</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontFamily: FONTS.body, fontSize: 22, fontWeight: 700, color: COLORS.gold, margin: 0 }}>{listing.price}</p>
                    <Link href={`/for-sale/${listing.id}`} style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, textDecoration: 'none', padding: '8px 20px', border: `1.5px solid ${COLORS.goldSoft}`, borderRadius: 999 }}>View Details →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '24px 24px 80px' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 16, color: COLORS.grayText, marginBottom: 24 }}>Interested in a property? Call to schedule a private showing.</p>
          <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 999, textDecoration: 'none' }}>{CONTACT.phone}</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
