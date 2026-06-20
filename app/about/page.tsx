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
        <section style={{ backgroundColor: COLORS.navy, padding: '88px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Family Owned · 11+ Years
          </p>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: COLORS.white, marginTop: 14, marginBottom: 0, lineHeight: 1.08 }}>
            About Ocean Glory Homes
          </h1>
        </section>

        {/* Visual bento grid */}
        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {/* Hero image card */}
            <div style={{ gridColumn: '1 / -1', borderRadius: 20, overflow: 'hidden', height: 400, position: 'relative' }}>
              <img src="/images/hero-mansion.jpg" alt="Ocean Glory custom home" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 40px 32px', background: 'linear-gradient(to top, rgba(13,43,82,0.85), transparent)' }}>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: COLORS.white, margin: 0 }}>
                  Design + Build, One Company
                </h2>
              </div>
            </div>

            {/* Story card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 36, boxShadow: '0 2px 16px rgba(13,43,82,0.05)' }}>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 400, color: COLORS.navy, margin: '0 0 16px' }}>Our Story</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>
                For over a decade, Ocean Glory Homes has delivered custom luxury homes in the Texas Coastal Bend without the friction of traditional architect-to-builder handoffs. Every project — from initial floor plan to final walkthrough — stays under one roof.
              </p>
            </div>

            {/* Why card */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 36, boxShadow: '0 2px 16px rgba(13,43,82,0.05)' }}>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 400, color: COLORS.navy, margin: '0 0 16px' }}>Why It Matters</h3>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>
                When the same team that draws the plans also swings the hammers, there&apos;s nowhere to hide. The result: homes that arrive on schedule, on budget, and exactly as promised. We build in Corpus Christi, Rockport, Portland, and throughout the Coastal Bend.
              </p>
            </div>

            {/* Service areas card */}
            <div style={{ backgroundColor: COLORS.navy, borderRadius: 20, padding: 36, color: COLORS.white, gridColumn: '1 / -1' }}>
              <h3 style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 400, margin: '0 0 16px' }}>Serving the Texas Coastal Bend</h3>
              <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
                {['Corpus Christi', 'Rockport', 'Portland', 'Port Aransas', 'Laguna Vista', 'Padre Island'].map(city => (
                  <span key={city} style={{ fontFamily: FONTS.body, fontSize: 16, color: 'rgba(255,255,255,0.75)' }}>{city}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Credentials + Team */}
        <section style={{ backgroundColor: COLORS.navy, padding: '64px 32px 72px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 400, color: COLORS.white, margin: '0 0 36px' }}>
              Credentials &amp; Team
            </h2>
            <CredentialList />
            <TeamBadges />
          </div>
        </section>

        <section style={{ textAlign: 'center', padding: '56px 24px 88px' }}>
          <a href={CONTACT.phoneHref} style={{
            display: 'inline-block', backgroundColor: COLORS.gold, color: '#fff',
            fontFamily: FONTS.body, fontSize: 15, fontWeight: 600,
            padding: '16px 40px', borderRadius: 999, textDecoration: 'none',
          }}>
            Start a Conversation — {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
