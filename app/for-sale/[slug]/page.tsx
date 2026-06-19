import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { listings } from '@/data/listings';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return listings.map(listing => ({ slug: listing.id }));
}

const stageOrder = ['Permitting', 'Foundation', 'Framing', 'Finishes', 'Walkthrough'];

export default function ListingDetailPage({ params }: { params: { slug: string } }) {
  const listing = listings.find(l => l.id === params.slug);
  if (!listing) notFound();

  const stageIdx = stageOrder.indexOf(listing.stage);

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>
        {/* Hero image */}
        <section style={{ width: '100%', height: '52vh', minHeight: 420, overflow: 'hidden', position: 'relative' }}>
          <img
            src={listing.image}
            alt={listing.address}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,43,82,0.90) 0%, rgba(13,43,82,0.1) 55%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 0,
              right: 0,
              padding: '0 52px',
              maxWidth: 1200,
              margin: '0 auto',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.sans,
                fontSize: 10,
                fontWeight: 600,
                color: COLORS.gold,
                border: `1px solid rgba(201,168,78,0.6)`,
                borderRadius: 999,
                padding: '4px 14px',
                display: 'inline-block',
                marginBottom: 12,
                letterSpacing: '0.06em',
              }}
            >
              {listing.stage}
            </span>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 300,
                color: COLORS.white,
                margin: 0,
                letterSpacing: '-0.01em',
              }}
            >
              {listing.address}
            </h1>
          </div>
        </section>

        {/* Details + progress */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '56px 32px' }}>
          {/* Price + specs */}
          <div
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 16,
              padding: '32px 36px',
              boxShadow: '0 4px 24px rgba(13,43,82,0.07)',
              marginBottom: 24,
              border: '1px solid rgba(13,43,82,0.05)',
            }}
          >
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 28,
                fontWeight: 700,
                color: COLORS.gold,
                margin: '0 0 20px',
              }}
            >
              {listing.price}
            </p>
            <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
              {[
                { label: 'Bedrooms', value: listing.beds },
                { label: 'Bathrooms', value: listing.baths },
                { label: 'Square Feet', value: listing.sqft.toLocaleString() },
              ].map(spec => (
                <div key={spec.label}>
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 11,
                      color: COLORS.grayText,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      margin: '0 0 6px',
                    }}
                  >
                    {spec.label}
                  </p>
                  <p
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 24,
                      fontWeight: 400,
                      color: COLORS.navy,
                      margin: 0,
                    }}
                  >
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress rail */}
          <div
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 16,
              padding: '32px 36px',
              boxShadow: '0 4px 24px rgba(13,43,82,0.07)',
              marginBottom: 32,
              border: '1px solid rgba(13,43,82,0.05)',
            }}
          >
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 22,
                fontWeight: 400,
                color: COLORS.navy,
                margin: '0 0 28px',
                letterSpacing: '-0.01em',
              }}
            >
              Construction Progress
            </h2>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              {stageOrder.map((stage, i) => {
                const isComplete = i < stageIdx;
                const isActive = i === stageIdx;
                return (
                  <div
                    key={stage}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flex: i < stageOrder.length - 1 ? 1 : 'none',
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      {isComplete ? (
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            backgroundColor: COLORS.gold,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                          }}
                        >
                          <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : isActive ? (
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            border: `2px solid ${COLORS.gold}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                          }}
                        >
                          <span
                            style={{
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              backgroundColor: COLORS.gold,
                              display: 'block',
                              animation: 'pulseDot 1.8s ease-in-out infinite',
                            }}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            border: `2px dashed rgba(123,135,148,0.30)`,
                            margin: '0 auto',
                          }}
                        />
                      )}
                      <p
                        style={{
                          fontFamily: FONTS.sans,
                          fontSize: 11,
                          color: isActive ? COLORS.gold : COLORS.grayText,
                          whiteSpace: 'nowrap',
                          margin: '8px 0 0',
                        }}
                      >
                        {stage}
                      </p>
                    </div>
                    {i < stageOrder.length - 1 && (
                      <div
                        style={{
                          flex: 1,
                          height: 0,
                          borderTop: isComplete
                            ? `2px solid ${COLORS.gold}`
                            : `2px dashed rgba(123,135,148,0.28)`,
                          margin: '0 6px',
                          marginBottom: 22,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="/for-sale"
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.navy,
                textDecoration: 'none',
                padding: '12px 26px',
                border: `1.5px solid rgba(201,168,78,0.4)`,
                borderRadius: 999,
              }}
            >
              ← Back to Listings
            </a>
            <a
              href={CONTACT.phoneHref}
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 600,
                backgroundColor: COLORS.gold,
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 26px',
                borderRadius: 999,
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
