import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function AboutPreviewSection() {
  return (
    <section style={{ backgroundColor: COLORS.offWhite, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{
            fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0,
          }}>
            Design + Build — One Company
          </p>
          <h2 style={{
            fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 52px)',
            color: COLORS.navy, marginTop: 16, fontWeight: 400, lineHeight: 1.14,
          }}>
            What Makes Us Different
          </h2>
          <p style={{
            fontFamily: FONTS.body, fontSize: 17, color: COLORS.grayText,
            maxWidth: 580, margin: '20px auto 0', lineHeight: 1.7,
          }}>
            We serve homebuyers and custom home clients throughout Corpus Christi,
            Rockport, and Portland, Texas — and we&apos;d love to build your next chapter.
          </p>
        </div>

        {/* 3 feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
        }}>
          {[
            {
              title: 'Single Point of Contact',
              body: 'You deal with one team from day one. No chasing architects for plan changes or arguing with subcontractors about who misunderstood the drawings.',
            },
            {
              title: 'Real-Time Budget Tracking',
              body: 'We provide detailed line-item budgets updated throughout construction. No buried markups, no surprise change orders — just honest numbers.',
            },
            {
              title: 'Coastal Expertise',
              body: 'Building on the Texas coast demands knowledge of wind ratings, flood zones, and salt corrosion. We know the codes, the materials, and the techniques that last.',
            },
          ].map(item => (
            <div
              key={item.title}
              style={{
                backgroundColor: COLORS.white,
                borderRadius: 20,
                padding: 36,
                boxShadow: '0 4px 24px rgba(13,43,82,0.06)',
              }}
            >
              <h3 style={{
                fontFamily: FONTS.heading, fontSize: 20, color: COLORS.navy,
                margin: '0 0 12px', fontWeight: 400,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText,
                margin: 0, lineHeight: 1.7,
              }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="/about"
            style={{
              display: 'inline-block',
              fontFamily: FONTS.body, fontSize: 14, fontWeight: 600,
              color: COLORS.navy, textDecoration: 'none',
              padding: '12px 28px',
              border: `1.5px solid ${COLORS.goldSoft}`,
              borderRadius: 999,
            }}
          >
            Learn More About Us →
          </a>
        </div>
      </div>
    </section>
  );
}
