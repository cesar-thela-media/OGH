import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Lots for Sale',
  description:
    'Available residential lots in Rockport, Portland, and Corpus Christi, TX. Ocean Glory Homes builds on our lots or yours. Call for current availability.',
};
import Link from 'next/link';

const lots = [
  {
    id: 'rcc-lot-12',
    address: 'Lot 12, Rockport Country Club',
    location: 'Rockport, TX 78382',
    community: 'Rockport Country Club',
    acres: '0.35',
    dimensions: '95 × 160 ft',
    tags: ['Golf Views', 'All Utilities', 'HOA Community'],
    description: 'Premium golf course lot in Rockport Country Club. All utilities to the lot line — water, sewer, and electric. HOA amenities include pool, tennis, and security gate.',
  },
  {
    id: 'sh-lot-7',
    address: 'Lot 7, Southwind Harbor',
    location: 'Rockport, TX 78382',
    community: 'Southwind Harbor',
    acres: '0.28',
    dimensions: '80 × 155 ft',
    tags: ['Boat Slip Included', 'Waterfront', 'All Utilities'],
    description: 'Waterfront lot with a deeded private boat slip. Build your dream coastal home steps from the water. One of the last available lots in Southwind Harbor.',
  },
  {
    id: 'de-lot-4',
    address: "Lot 4, Darya's Estates",
    location: 'Rockport, TX 78382',
    community: "Darya's Estates",
    acres: '0.42',
    dimensions: '110 × 167 ft',
    tags: ['Cul-de-sac', 'Large Lot', 'All Utilities'],
    description: "Estate-sized cul-de-sac lot in the peaceful Darya's Estates community. Generous dimensions allow for a full home and outdoor living space with room to spare.",
  },
  {
    id: 'df-lot-3',
    address: 'Lot 3, Daniels Forest',
    location: 'Rockport, TX 78382',
    community: 'Daniels Forest',
    acres: '0.50',
    dimensions: '120 × 181 ft',
    tags: ['Wooded', 'Mature Trees', 'Bay Proximity'],
    description: 'Half-acre wooded lot with mature oak coverage for natural shade and privacy. A rare opportunity to build a home surrounded by established trees near Aransas Bay.',
  },
  {
    id: 'ho-lot-9',
    address: 'Lot 9, Harbor Oaks',
    location: 'Rockport, TX 78382',
    community: 'Harbor Oaks',
    acres: '0.38',
    dimensions: '100 × 166 ft',
    tags: ['Waterfront Access', 'Corner Lot', 'All Utilities'],
    description: 'Corner lot in Harbor Oaks with community waterfront access. Build a custom coastal home in this established and desirable neighborhood.',
  },
  {
    id: 'swe-lot-2',
    address: 'Lot 2, Spanish Woods Estates',
    location: 'Rockport, TX 78382',
    community: 'Spanish Woods Estates',
    acres: '0.60',
    dimensions: '130 × 201 ft',
    tags: ['Wooded', 'Oversized', 'Gated Community'],
    description: 'One of the largest lots available in Spanish Woods Estates. Gated community with wooded privacy and room for a custom home, pool, and workshop.',
  },
  {
    id: 'cc-lot-1',
    address: 'Lot 1, Portland Estates',
    location: 'Portland, TX 78374',
    community: 'Custom Build',
    acres: '0.25',
    dimensions: '75 × 145 ft',
    tags: ['Portland', 'All Utilities', 'Custom Build'],
    description: 'Prime infill lot in Portland, TX. All utilities at the lot line. Ocean Glory can design and build a fully custom home to fit this lot perfectly.',
  },
];

export default function LotsForSalePage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* COMPACT HEADER */}
        <section style={{ backgroundColor: COLORS.navy, padding: '44px 48px 52px' }}>
          <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 10px' }}>
                Land Available
              </p>
              <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(30px, 4vw, 50px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Lots for Sale
              </h1>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.50)', margin: '10px 0 0' }}>
                {lots.length} available lots &mdash; Rockport, Portland &amp; Corpus Christi, Texas
              </p>
            </div>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, padding: '13px 28px', borderRadius: 999, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Ask About a Lot
            </a>
          </div>
        </section>

        {/* SPLIT LAYOUT */}
        <section className="g-sidebar sp32" style={{ maxWidth: 1160, margin: '0 auto', paddingTop: 48, paddingBottom: 80, gap: 40, alignItems: 'start' }}>

          {/* LEFT: Lot listings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {lots.map(lot => (
              <div key={lot.id} style={{ backgroundColor: COLORS.white, borderRadius: 16, padding: '28px 32px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)', border: '1px solid rgba(13,43,82,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 10 }}>
                  <div>
                    <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px' }}>
                      {lot.community}
                    </p>
                    <h2 style={{ fontFamily: FONTS.body, fontSize: 16, fontWeight: 700, color: COLORS.navy, margin: 0, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      {lot.address}
                    </h2>
                    <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: '3px 0 0' }}>{lot.location}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <p style={{ fontFamily: FONTS.heading, fontSize: 26, fontWeight: 400, color: COLORS.navy, margin: 0 }}>{lot.acres} ac</p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.grayText, margin: '2px 0 0' }}>{lot.dimensions}</p>
                  </div>
                </div>

                {/* Spec tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '14px 0' }}>
                  {lot.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: FONTS.body, fontSize: 10, fontWeight: 600, color: COLORS.navy, border: `1px solid rgba(201,168,78,0.50)`, backgroundColor: 'rgba(201,168,78,0.08)', borderRadius: 999, padding: '4px 10px', letterSpacing: '0.04em' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, lineHeight: 1.7, margin: '0 0 20px' }}>
                  {lot.description}
                </p>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <a href={CONTACT.phoneHref} style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 700, backgroundColor: COLORS.navy, color: COLORS.white, padding: '10px 22px', borderRadius: 8, textDecoration: 'none' }}>
                    Call for Pricing
                  </a>
                  <Link href="/contact" style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 500, color: COLORS.navy, padding: '10px 22px', borderRadius: 8, textDecoration: 'none', border: '1.5px solid rgba(13,43,82,0.15)' }}>
                    Send Message
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky sidebar */}
          <div style={{ position: 'sticky', top: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Build-on-your-lot callout */}
            <div style={{ backgroundColor: COLORS.navy, borderRadius: 18, padding: '32px 28px' }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 10px' }}>
                Already Have Land?
              </p>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', lineHeight: 1.2 }}>
                We Build on Your Lot Too.
              </h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.60)', lineHeight: 1.7, margin: '0 0 22px' }}>
                Own land anywhere in the Coastal Bend? Ocean Glory can design and build a fully custom home to fit your lot, your view, and your vision.
              </p>
              <a href={CONTACT.phoneHref} style={{ display: 'block', textAlign: 'center', fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '13px', borderRadius: 10, textDecoration: 'none' }}>
                {CONTACT.phone}
              </a>
            </div>

            {/* Quick contact card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 18, padding: '28px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)', border: '1px solid rgba(13,43,82,0.05)' }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 8px' }}>
                Lot Questions?
              </p>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>Talk to Us First</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, lineHeight: 1.65, margin: '0 0 20px' }}>
                Not sure which lot is right for your floor plan? We can help you match a lot to your home design before you commit to anything.
              </p>
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.white, backgroundColor: COLORS.navy, padding: '12px', borderRadius: 10, textDecoration: 'none' }}>
                Send a Message
              </Link>
            </div>

            {/* Communities link */}
            <div style={{ backgroundColor: 'rgba(201,168,78,0.08)', borderRadius: 18, padding: '22px 24px', border: '1px solid rgba(201,168,78,0.25)' }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.navy, fontWeight: 500, lineHeight: 1.6, margin: '0 0 12px' }}>
                Explore our communities to see neighborhood details before choosing a lot.
              </p>
              <Link href="/community" style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, textDecoration: 'none' }}>
                View All Communities →
              </Link>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
