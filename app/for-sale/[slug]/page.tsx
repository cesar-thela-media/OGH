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
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Hero */}
        <section style={{ width: '100%', height: '55vh', minHeight: 440, overflow: 'hidden', position: 'relative' }}>
          <img src={listing.image} alt={listing.address} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,43,82,0.92) 0%, rgba(13,43,82,0.08) 55%)' }} />
          <div style={{ position: 'absolute', bottom: 44, left: 0, right: 0, padding: '0 40px', maxWidth: 1000, margin: '0 auto' }}>
            <span style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, border: `1px solid ${COLORS.gold}`, borderRadius: 999, padding: '5px 16px', display: 'inline-block', marginBottom: 14 }}>
              {listing.stage}
            </span>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.1 }}>
              {listing.address}
            </h1>
          </div>
        </section>

        {/* Bento grid */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '56px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

            {/* Price card — spans full width */}
            <div style={{ gridColumn: '1 / -1', backgroundColor: COLORS.white, borderRadius: 18, padding: '32px 36px', boxShadow: '0 2px 16px rgba(13,43,82,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 32, fontWeight: 700, color: COLORS.gold, margin: 0 }}>{listing.price}</p>
              <div style={{ display: 'flex', gap: 32 }}>
                {[ { label: 'Beds', value: listing.beds }, { label: 'Baths', value: listing.baths }, { label: 'Sqft', value: listing.sqft.toLocaleString() } ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 400, color: COLORS.navy, margin: 0 }}>{s.value}</p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '4px 0 0' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress rail card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '28px 32px', boxShadow: '0 2px 16px rgba(13,43,82,0.05)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 400, color: COLORS.navy, margin: '0 0 24px' }}>Construction Progress</h2>
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {stageOrder.map((stage, i) => {
                  const isComplete = i < stageIdx;
                  const isActive = i === stageIdx;
                  return (
                    <div key={stage} style={{ display: 'flex', alignItems: 'center', flex: i < stageOrder.length - 1 ? 1 : 'none' }}>
                      <div style={{ textAlign: 'center' }}>
                        {isComplete ? (
                          <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2"><path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        ) : isActive ? (
                          <div style={{ width: 26, height: 26, borderRadius: '50%', border: `2px solid ${COLORS.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                            <span style={{ width: 9, height: 9, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'block', animation: 'pulseDot 1.8s ease-in-out infinite' }} />
                          </div>
                        ) : (
                          <div style={{ width: 26, height: 26, borderRadius: '50%', border: `2px solid ${COLORS.grayLine}`, margin: '0 auto' }} />
                        )}
                        <p style={{ fontFamily: FONTS.body, fontSize: 10, color: isActive ? COLORS.gold : COLORS.grayText, whiteSpace: 'nowrap', margin: '6px 0 0' }}>{stage}</p>
                      </div>
                      {i < stageOrder.length - 1 && (
                        <div style={{ flex: 1, height: 0, borderTop: isComplete ? `2px solid ${COLORS.gold}` : `2px dashed ${COLORS.grayLine}`, margin: '0 4px', marginBottom: 20 }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About this home card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '28px 32px', boxShadow: '0 2px 16px rgba(13,43,82,0.05)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 400, color: COLORS.navy, margin: '0 0 16px' }}>About This Home</h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>
                This custom {listing.beds}-bedroom, {listing.baths}-bath home offers {listing.sqft.toLocaleString()} square feet of coastal living space. Designed and built entirely by Ocean Glory Homes — from initial floor plan to final finishes — with the quality and attention to detail that defines every project we undertake.
              </p>
            </div>

            {/* Additional images — spans full width */}
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              {[listing.image, listing.image, listing.image].map((src, i) => (
                <div key={i} style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={src} alt={`${listing.address} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>

            {/* Location card */}
            <div style={{ backgroundColor: COLORS.navy, borderRadius: 18, padding: '28px 32px', color: COLORS.white }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 400, margin: '0 0 16px' }}>Location</h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
                Nestled in a premier coastal community with convenient access to waterfront recreation, dining, and shopping. Contact us for exact location details and to schedule a private tour.
              </p>
            </div>

            {/* CTA card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '28px 32px', boxShadow: '0 2px 16px rgba(13,43,82,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 400, color: COLORS.navy, margin: 0 }}>Interested?</h2>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, backgroundColor: COLORS.gold, color: '#fff', textDecoration: 'none', padding: '12px 24px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                  {CONTACT.phone}
                </a>
                <a href="/contact" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, textDecoration: 'none', padding: '12px 24px', borderRadius: 999, border: `1.5px solid ${COLORS.goldSoft}`, whiteSpace: 'nowrap' }}>
                  Send Message
                </a>
              </div>
            </div>

          </div>

          {/* Back link */}
          <div style={{ marginTop: 32 }}>
            <a href="/for-sale" style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.grayText, textDecoration: 'none' }}>
              ← Back to Available Homes
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
