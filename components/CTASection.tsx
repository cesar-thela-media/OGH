'use client';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

const reviews = [
  {
    quote: 'Ocean Glory built my custom home. Reza is very attentive and detail oriented. He worked with me throughout the process to make sure I was completely satisfied. Even after closing, Reza ensures everything is of the highest quality.',
    author: 'Rachel Neff',
  },
  {
    quote: 'My husband and I are so impressed with Mr Reza, builder, Ocean Glory Homes. He is a good listener to preferences and needs and assuring of an experience stress free and on time. We walked in to our new home and we were wowed beyond belief.',
    author: 'Rosalinda S.',
  },
  {
    quote: 'Reza and the whole crew were there anytime I called, weekend, nights, to address any questions I had. I was so happy with my purchase, the quality, and customer service were all top of the line. I recommend this builder, no regrets.',
    author: 'Mansour Hijazi',
  },
];

export default function CTASection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px' }}>
      {/* Reviews */}
      <div style={{ maxWidth: 1080, margin: '0 auto', marginBottom: 64 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0,
          }}>
            Homeowner Reviews
          </p>
          <h2 style={{
            fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: COLORS.white, marginTop: 12, fontWeight: 400,
          }}>
            What Our Homeowners Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: 16,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{
                fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.80)',
                margin: '0 0 20px', lineHeight: 1.7, flex: 1, fontStyle: 'italic',
              }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <p style={{
                fontFamily: FONTS.body, fontSize: 13, fontWeight: 600,
                color: COLORS.gold, margin: 0,
              }}>
                {review.author}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="#"
            style={{
              fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.60)',
              textDecoration: 'none',
            }}
          >
            More Homeowner Reviews →
          </a>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        maxWidth: 600, margin: '0 auto', textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderRadius: 24, padding: 48,
      }}>
        <h2 style={{
          fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 42px)',
          color: COLORS.white, margin: '0 0 16px', fontWeight: 400,
        }}>
          Ready to Build Your Dream Home?
        </h2>
        <p style={{
          fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.60)',
          margin: '0 0 32px', lineHeight: 1.6,
        }}>
          Whether you have your own lot or are looking for the perfect place, we&apos;d love to
          talk about your project. Call us today to get started.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: COLORS.white,
              fontFamily: FONTS.body,
              fontSize: 15,
              fontWeight: 600,
              padding: '16px 36px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            {CONTACT.phone}
          </a>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: COLORS.white,
              fontFamily: FONTS.body,
              fontSize: 15,
              fontWeight: 600,
              padding: '16px 36px',
              borderRadius: 999,
              textDecoration: 'none',
              border: `1.5px solid rgba(255,255,255,0.25)`,
            }}
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
