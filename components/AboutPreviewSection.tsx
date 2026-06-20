import { COLORS, FONTS } from '@/lib/constants';

const highlights = [
  { icon: '🏗️', stat: '11+', label: 'Years Building', sub: 'Family owned since day one' },
  { icon: '📋', stat: '1', label: 'Point of Contact', sub: 'No architect handoffs' },
  { icon: '💰', stat: '$0', label: 'Hidden Markups', sub: 'Real-time budget tracking' },
  { icon: '🌊', stat: '100%', label: 'Coastal Focus', sub: 'Wind, flood, salt expertise' },
];

export default function AboutPreviewSection() {
  return (
    <section style={{ backgroundColor: COLORS.offWhite, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Design + Build — One Company
          </p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 52px)', color: COLORS.navy, marginTop: 16, fontWeight: 600, lineHeight: 1.14 }}>
            What Makes Us Different
          </h2>
        </div>

        {/* Stat grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}>
          {highlights.map(item => (
            <div key={item.label} style={{
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 2px 16px rgba(13,43,82,0.05)',
              border: '1px solid rgba(13,43,82,0.04)',
            }}>
              <span style={{ fontSize: 36, display: 'block', marginBottom: 12 }}>{item.icon}</span>
              <p style={{ fontFamily: FONTS.heading, fontSize: 36, fontWeight: 600, color: COLORS.gold, margin: '0 0 4px', lineHeight: 1 }}>
                {item.stat}
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, color: COLORS.navy, margin: '0 0 6px' }}>
                {item.label}
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: 0 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href="/about" style={{
            display: 'inline-block',
            fontFamily: FONTS.body, fontSize: 14, fontWeight: 600,
            color: COLORS.navy, textDecoration: 'none',
            padding: '12px 32px',
            border: `2px solid ${COLORS.goldSoft}`,
            borderRadius: 999,
          }}>
            Learn More About Us →
          </a>
        </div>

      </div>
    </section>
  );
}
