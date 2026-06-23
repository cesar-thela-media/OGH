'use client';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

const testimonials = [
  { text: 'Ocean Glory built my custom home. Reza is very attentive and detail oriented. Even after closing, Reza ensures everything is of the highest quality.', name: 'Rachel Neff', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { text: 'We walked into our new home and were wowed beyond belief. Beautiful. He comes to check on the homes he builds. Good quality control.', name: 'Rosalinda S.', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { text: 'Reza and the whole crew were there anytime I called, weekend, nights. The quality and customer service were top of the line. No regrets.', name: 'Mansour Hijazi', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { text: 'After moving back to CC, Ocean Glory built my custom home. Reza is very attentive. He makes building a new home less stressful.', name: 'Rachel Neff', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { text: 'We bought our home last year and are so grateful to this amazing builder. He literally built our dream home.', name: 'Carrie Fleming', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/women/22.jpg' },
  { text: 'Quick and responsive. Completely satisfied with my home. Ocean Glory Homes is fully committed to customer support.', name: 'Angel C.', role: 'Homeowner', img: 'https://randomuser.me/api/portraits/men/55.jpg' },
];

export default function CTASection() {
  const isMobile = useIsMobile();
  const cols = isMobile ? 1 : 3;
  const perCol = Math.ceil(testimonials.length / cols);

  return (
    <>
      {/* Testimonials — navy bg */}
      <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>Homeowner Reviews</p>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 48px)', color: COLORS.white, marginTop: 12, fontWeight: 400 }}>What Our Homeowners Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 20, maxHeight: isMobile ? 'none' : 620, overflow: 'hidden', maskImage: isMobile ? 'none' : 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: isMobile ? 'none' : 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}>
            {Array.from({ length: cols }).map((_, ci) => (
              <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'scrollCol 25s linear infinite', animationDelay: `${ci * 3}s` }}>
                {testimonials.slice(ci * perCol, (ci + 1) * perCol).map((t, i) => (
                  <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: '28px 24px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.80)', margin: '0 0 20px', lineHeight: 1.7, fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src={t.img} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                      <div>
                        <p style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 600, color: COLORS.gold, margin: 0 }}>{t.name}</p>
                        <p style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.40)', margin: 0 }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — white bg */}
      <section style={{ backgroundColor: COLORS.offWhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', color: COLORS.navy, margin: '0 0 12px', fontWeight: 400 }}>Ready to Build?</h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 16, color: COLORS.grayText, margin: '0 0 32px', lineHeight: 1.6 }}>Have your own lot or looking for the perfect place? Let&apos;s talk.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={CONTACT.phoneHref} style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '16px 36px', borderRadius: 999, textDecoration: 'none' }}>{CONTACT.phone}</a>
            <a href="/contact" style={{ display: 'inline-block', backgroundColor: 'transparent', color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, padding: '16px 36px', borderRadius: 999, textDecoration: 'none', border: `2px solid ${COLORS.goldSoft}` }}>Send a Message</a>
          </div>
        </div>
      </section>
    </>
  );
}
