import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return listings.map(listing => ({ slug: listing.id }));
}

export default function ListingDetailPage({ params }: { params: { slug: string } }) {
  const listing = listings.find(l => l.id === params.slug);
  if (!listing) notFound();

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Hero image */}
        <section style={{ width: '100%', height: '50vh', minHeight: 400, overflow: 'hidden', position: 'relative' }}>
          <img
            src={listing.image}
            alt={listing.address}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(13,43,82,0.85) 0%, rgba(13,43,82,0) 50%)',
          }} />
          <div style={{ position: 'absolute', bottom: 40, left: 24, right: 24, maxWidth: 820, margin: '0 auto' }}>
            <span style={{
              fontFamily: FONTS.sans, fontSize: 11, color: COLORS.gold,
              border: `1px solid ${COLORS.gold}`, borderRadius: 999,
              padding: '4px 14px', display: 'inline-block', marginBottom: 12,
            }}>
              {listing.stage}
            </span>
            <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 4vw, 56px)', color: COLORS.white, margin: 0, fontWeight: 400 }}>
              {listing.address}
            </h1>
          </div>
        </section>

        {/* Details + specs */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 24, fontWeight: 700, color: COLORS.gold, margin: '0 0 24px' }}>
            {listing.price}
          </p>
          <div style={{ display: 'flex', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
            {[
              { label: 'Bedrooms', value: listing.beds },
              { label: 'Bathrooms', value: listing.baths },
              { label: 'Square Feet', value: listing.sqft.toLocaleString() },
              { label: 'Stage', value: listing.stage },
            ].map(spec => (
              <div key={spec.label}>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.grayText, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>
                  {spec.label}
                </p>
                <p style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.navy, margin: 0 }}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          {/* Progress rail (if project data exists for this listing) */}
          <div style={{ backgroundColor: COLORS.white, borderRadius: 16, padding: 32, boxShadow: '0 4px 20px rgba(13,43,82,0.08)', marginBottom: 32 }}>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 24, color: COLORS.navy, margin: '0 0 24px', fontWeight: 400 }}>
              Construction Progress
            </h2>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              {['Permitting', 'Foundation', 'Framing', 'Finishes', 'Walkthrough'].map((stage, i, arr) => {
                const stageIdx = arr.indexOf(listing.stage);
                const isComplete = i < stageIdx;
                const isActive = i === stageIdx;
                const isUpcoming = i > stageIdx;
                return (
                  <div key={stage} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 1 : 'none' }}>
                    <div style={{ textAlign: 'center' }}>
                      {isComplete ? (
                        <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8">
                            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : isActive ? (
                        <div style={{ width: 28, height: 28, borderRadius: '50%', border: `2px solid ${COLORS.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'block', animation: 'pulseDot 1.8s ease-in-out infinite' }} />
                        </div>
                      ) : (
                        <div style={{ width: 28, height: 28, borderRadius: '50%', border: `2px solid ${COLORS.grayLine}`, margin: '0 auto' }} />
                      )}
                      <p style={{ fontFamily: FONTS.sans, fontSize: 11, color: isActive ? COLORS.gold : COLORS.grayText, whiteSpace: 'nowrap', margin: '8px 0 0' }}>
                        {stage}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div style={{ flex: 1, height: 0, borderTop: isComplete ? `2px solid ${COLORS.gold}` : `2px dashed ${COLORS.grayLine}`, margin: '0 6px', marginBottom: 22 }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="/for-sale"
              style={{
                fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, color: COLORS.navy,
                textDecoration: 'none', padding: '12px 24px',
                border: `1.5px solid ${COLORS.goldSoft}`, borderRadius: 999,
              }}
            >
              ← Back to Listings
            </a>
            <a
              href={CONTACT.phoneHref}
              style={{
                fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600,
                backgroundColor: COLORS.gold, color: COLORS.navy,
                textDecoration: 'none', padding: '12px 24px', borderRadius: 999,
              }}
            >
              Inquire — {CONTACT.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
