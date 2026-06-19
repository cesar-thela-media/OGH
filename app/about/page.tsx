import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CredentialList from '@/components/CredentialList';
import TeamBadges from '@/components/TeamBadges';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const values = [
  {
    title: 'Single Point of Contact',
    body: 'You deal with one team from day one. No chasing architects for plan changes or arguing with subcontractors about who misunderstood the drawings.',
  },
  {
    title: 'Transparent Pricing',
    body: 'We provide detailed line-item budgets updated in real time. You always know where every dollar is going — no buried markups, no surprise change orders.',
  },
  {
    title: 'Timeline You Can Trust',
    body: 'Our design/build model eliminates the bidding and redesign loops that add months to traditional projects. We commit to dates and we hit them.',
  },
  {
    title: 'Coastal Expertise',
    body: 'Building on the Texas coast means wind ratings, flood zones, and salt corrosion. We know the codes, the materials, and the techniques that last.',
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>
        {/* Page header */}
        <section
          style={{
            backgroundColor: COLORS.navy,
            padding: '88px 24px 72px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: COLORS.gold,
              fontWeight: 600,
              margin: 0,
            }}
          >
            Family Owned · 11+ Years
          </p>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              color: COLORS.white,
              marginTop: 14,
              marginBottom: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
            }}
          >
            About Ocean Glory Homes
          </h1>
        </section>

        {/* Story */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px 56px' }}>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(30px, 3.5vw, 46px)',
              fontWeight: 400,
              color: COLORS.navy,
              margin: '0 0 28px',
              letterSpacing: '-0.02em',
            }}
          >
            Design + Build, One Company
          </h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: '#3A4554', lineHeight: 1.85, margin: '0 0 20px' }}>
            Ocean Glory Homes is a family-owned design/build firm serving the Texas Coastal Bend. For over a decade,
            we&apos;ve delivered custom luxury homes without the friction of traditional architect-to-builder handoffs.
            Every project — from initial floor plan to final walkthrough — stays under one roof.
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: '#3A4554', lineHeight: 1.85, margin: '0 0 20px' }}>
            Our process eliminates the blame game. When the same team that draws the plans also swings the hammers,
            there&apos;s nowhere to hide. The result: homes that arrive on schedule, on budget, and exactly as promised.
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: '#3A4554', lineHeight: 1.85, margin: 0 }}>
            We build in Corpus Christi, Port Aransas, Laguna Vista, and throughout the Coastal Bend — wherever the
            water meets the land, we&apos;re at home.
          </p>
        </section>

        {/* Credentials + Team on navy */}
        <section style={{ backgroundColor: COLORS.navy, padding: '72px 32px 80px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 11,
                letterSpacing: '0.20em',
                textTransform: 'uppercase',
                color: COLORS.gold,
                fontWeight: 600,
                margin: '0 0 12px',
              }}
            >
              Trust Is Earned
            </p>
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400,
                color: COLORS.white,
                margin: '0 0 40px',
                letterSpacing: '-0.02em',
              }}
            >
              Credentials &amp; Team
            </h2>
            <CredentialList />
            <TeamBadges />
          </div>
        </section>

        {/* Values */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 32px' }}>
          <h2
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(30px, 3.5vw, 46px)',
              fontWeight: 400,
              color: COLORS.navy,
              margin: '0 0 40px',
              letterSpacing: '-0.02em',
            }}
          >
            How We Work
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {values.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: '28px 0',
                  borderBottom: `1px solid rgba(201,168,78,0.20)`,
                  borderTop: i === 0 ? `1px solid rgba(201,168,78,0.20)` : 'none',
                }}
              >
                <h3
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 17,
                    fontWeight: 600,
                    color: COLORS.navy,
                    margin: '0 0 10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.grayText, lineHeight: 1.75, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 88px' }}>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.navy,
              color: COLORS.white,
              fontFamily: FONTS.sans,
              fontSize: 15,
              fontWeight: 600,
              padding: '15px 40px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            Start a Conversation — {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
