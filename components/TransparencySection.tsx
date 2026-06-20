'use client';
import CredentialList from './CredentialList';
import TeamBadges from './TeamBadges';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function TransparencySection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{
            fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0,
          }}>
            Trust Is Earned, Not Assumed.
          </p>
          <h2 style={{
            fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4.5vw, 60px)',
            color: COLORS.white, marginTop: 16, fontWeight: 400, lineHeight: 1.12,
          }}>
            Building with Integrity
          </h2>
          <p style={{
            fontFamily: FONTS.body, fontSize: 17, color: 'rgba(255,255,255,0.60)',
            maxWidth: 620, margin: '20px auto 0', lineHeight: 1.7,
          }}>
            We operate with complete transparency on costs, timelines, and construction quality.
            Our clients always know where their project stands — frequent communication
            isn&apos;t an afterthought, it&apos;s how we build.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 40 : 64,
          alignItems: 'start',
        }}>
          {/* Left: Credentials */}
          <div style={{
            backgroundColor: COLORS.white,
            borderRadius: 20,
            padding: 40,
            boxShadow: '0 4px 24px rgba(13,43,82,0.06)',
          }}>
            <h3 style={{
              fontFamily: FONTS.heading, fontSize: 22, color: COLORS.navy,
              margin: '0 0 24px', fontWeight: 400,
            }}>
              Industry Credentials
            </h3>
            <CredentialList />
          </div>

          {/* Right: Process */}
          <div style={{
            backgroundColor: COLORS.white,
            borderRadius: 20,
            padding: 40,
            boxShadow: '0 4px 24px rgba(13,43,82,0.06)',
          }}>
            <h3 style={{
              fontFamily: FONTS.heading, fontSize: 22, color: COLORS.navy,
              margin: '0 0 24px', fontWeight: 400,
            }}>
              Our Process
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { step: '01', title: 'Initial Consultation', desc: 'We meet to understand your vision, budget, and timeline. No pressure — just a conversation.' },
                { step: '02', title: 'Custom Floor Plan', desc: 'One team designs a plan tailored to your family and lot. No handoff to an outside architect.' },
                { step: '03', title: 'Transparent Build', desc: 'Real-time budget tracking and frequent updates. You always know where your project stands.' },
                { step: '04', title: 'Walkthrough & Keys', desc: 'We walk the finished home together, address every detail, and hand you the keys on schedule.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: 16 }}>
                  <span style={{
                    fontFamily: FONTS.heading, fontSize: 20, color: COLORS.gold,
                    fontWeight: 400, flexShrink: 0, marginTop: 2,
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <p style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>
                      {item.title}
                    </p>
                    <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: 0, lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <TeamBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
