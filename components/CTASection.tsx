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
        maxWidth: 640, margin: '0 auto', textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 28, padding: 56,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        <h2 style={{
          fontFamily: FONTS.heading, fontSize: 'clamp(30px, 4vw, 48px)',
          color: COLORS.white, margin: '0 0 16px', fontWeight: 600,
        }}>
          Ready to Build?
        </h2>
        <p style={{
          fontFamily: FONTS.body, fontSize: 17, color: 'rgba(255,255,255,0.55)',
          margin: '0 0 36px', lineHeight: 1.6,
        }}>
          Whether you have your own lot or are looking for the perfect place, we&apos;d love to talk about your project.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.body,
              fontSize: 16,
              fontWeight: 700,
              padding: '18px 40px',
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
              fontSize: 16,
              fontWeight: 600,
              padding: '18px 40px',
              borderRadius: 999,
              textDecoration: 'none',
              border: `2px solid rgba(255,255,255,0.20)`,
            }}
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
