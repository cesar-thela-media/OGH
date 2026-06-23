import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import Link from 'next/link';

const reviews = [
  {
    name: 'Rachel Neff',
    role: 'Homeowner · Corpus Christi',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Ocean Glory built my custom home. Reza is very attentive and detail oriented. Even after closing, Reza ensures everything is of the highest quality. I highly recommend Ocean Glory Homes.',
  },
  {
    name: 'Rosalinda S.',
    role: 'Homeowner · Rockport',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "We walked into our new home and were wowed beyond belief. Beautiful. He comes to check on the homes he builds. Good quality control. We couldn't be more pleased.",
  },
  {
    name: 'Mansour Hijazi',
    role: 'Homeowner · Corpus Christi',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Reza and the whole crew were there anytime I called — weekends, nights. The quality and customer service were top of the line. No regrets whatsoever. This is the builder to call.',
  },
  {
    name: 'Carrie Fleming',
    role: 'Homeowner · Portland',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
    text: "We bought our home last year and are so grateful to this amazing builder. He literally built our dream home. I was nervous about the process but he made it seamless start to finish.",
  },
  {
    name: 'Angel C.',
    role: 'Homeowner · Rockport',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/55.jpg',
    text: 'Quick and responsive. Completely satisfied with my home. Ocean Glory Homes is fully committed to customer support both during and after construction. You can feel it in every interaction.',
  },
  {
    name: 'David & Maria R.',
    role: 'Homeowners · Corpus Christi',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/47.jpg',
    text: "We had tried another builder before and were so disappointed. Ocean Glory was completely different. Honest pricing, real updates, and a finished home we love. Wish we had found them first.",
  },
  {
    name: 'Tommy W.',
    role: 'Homeowner · Portland',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    text: "I've built several homes over the years. This was the most organized process I've been through. They know the Texas coast — the materials, the codes, the contractors. It shows.",
  },
  {
    name: 'Susan K.',
    role: 'Homeowner · Rockport',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/women/36.jpg',
    text: "Reza was transparent about every cost from day one. No hidden charges, no surprise change orders. That level of honesty is rare in construction. Our home came in right on budget.",
  },
  {
    name: 'Jorge M.',
    role: 'Homeowner · Corpus Christi',
    rating: 5,
    img: 'https://randomuser.me/api/portraits/men/62.jpg',
    text: 'The finishes are impeccable. Custom cabinetry, tile work, everything. My neighbors constantly ask who built our home. I send everyone to Ocean Glory without hesitation.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={COLORS.gold}>
          <path d="M7 1l1.65 3.35L12.5 5l-2.75 2.68.65 3.82L7 9.75l-3.4 1.75.65-3.82L1.5 5l3.85-.65L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>

        {/* Header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '52px 32px 60px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>
              Homeowner Reviews
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, color: COLORS.white, margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              What Our Homeowners Say
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              Every review below is from a real Ocean Glory homeowner.
            </p>
          </div>
        </section>

        {/* Review grid */}
        <section style={{ maxWidth: 1160, margin: '0 auto', padding: '56px 24px 80px' }}>
          <div style={{ columns: '3 320px', columnGap: 22 }}>
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  breakInside: 'avoid',
                  marginBottom: 22,
                  backgroundColor: COLORS.white,
                  borderRadius: 18,
                  padding: '28px 28px 24px',
                  boxShadow: '0 2px 16px rgba(13,43,82,0.06)',
                  border: '1px solid rgba(13,43,82,0.05)',
                }}
              >
                <Stars count={r.rating} />
                <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.75, margin: '0 0 22px', fontStyle: 'italic' }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(13,43,82,0.06)', paddingTop: 18 }}>
                  <img
                    src={r.img}
                    alt={r.name}
                    style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: 0 }}>{r.name}</p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.grayText, margin: '2px 0 0' }}>{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 32px 80px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Ready to Join Our Homeowners?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.55)', margin: '0 0 32px' }}>
            Call to start the conversation. We build on your lot or ours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}
            >
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-block', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}
            >
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
