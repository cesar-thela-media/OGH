import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CredentialList from '@/components/CredentialList';
import TeamBadges from '@/components/TeamBadges';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Page header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 24px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Family Owned · 11+ Years
          </p>
          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 4.5vw, 64px)', color: COLORS.white, marginTop: 12, fontWeight: 400 }}>
            About Ocean Glory Homes
          </h1>
        </section>

        {/* Story section */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 24px 48px' }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3.5vw, 42px)', color: COLORS.navy, margin: '0 0 24px', fontWeight: 400 }}>
            Design + Build, One Company
          </h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, lineHeight: 1.8, margin: '0 0 20px' }}>
            Ocean Glory Homes is a family-owned design/build firm serving the Texas Coastal Bend. For over a decade,
            we&apos;ve delivered custom luxury homes without the friction of traditional architect-to-builder handoffs.
            Every project — from initial floor plan to final walkthrough — stays under one roof.
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, lineHeight: 1.8, margin: '0 0 20px' }}>
            Our process eliminates the blame game. When the same team that draws the plans also swings the hammers,
            there&apos;s nowhere to hide. The result: homes that arrive on schedule, on budget, and exactly as promised.
          </p>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, lineHeight: 1.8, margin: 0 }}>
            We build in Corpus Christi, Port Aransas, Laguna Vista, and throughout the Coastal Bend — wherever the
            water meets the land, we&apos;re at home.
          </p>
        </section>

        {/* Credentials + Team */}
        <section style={{ backgroundColor: COLORS.navy, padding: '64px 24px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(24px, 3vw, 36px)', color: COLORS.white, margin: '0 0 40px', fontWeight: 400 }}>
              Credentials &amp; Team
            </h2>
            <CredentialList />
            <TeamBadges />
          </div>
        </section>

        {/* Values */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(28px, 3.5vw, 42px)', color: COLORS.navy, margin: '0 0 32px', fontWeight: 400 }}>
            How We Work
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { title: 'Single Point of Contact', body: 'You deal with one team from day one. No chasing architects for plan changes or arguing with subcontractors about who misunderstood the drawings.' },
              { title: 'Transparent Pricing', body: 'We provide detailed line-item budgets updated in real time. You always know where every dollar is going — no buried markups, no surprise change orders.' },
              { title: 'Timeline You Can Trust', body: 'Our design/build model eliminates the bidding and redesign loops that add months to traditional projects. We commit to dates and we hit them.' },
              { title: 'Coastal Expertise', body: 'Building on the Texas coast means dealing with wind ratings, flood zones, and salt corrosion. We know the codes, the materials, and the techniques that last.' },
            ].map(item => (
              <div key={item.title} style={{ paddingBottom: 28, borderBottom: `1px solid ${COLORS.goldSoft}` }}>
                <h3 style={{ fontFamily: FONTS.sans, fontSize: 18, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 80px' }}>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.navy,
              color: COLORS.white,
              fontFamily: FONTS.sans,
              fontSize: 16,
              fontWeight: 600,
              padding: '16px 40px',
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
