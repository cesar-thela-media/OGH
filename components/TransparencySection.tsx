'use client';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';
import { credentials } from '@/data/credentials';
import { team } from '@/data/team';

const processSteps = [
  { num: '01', title: 'Consultation', desc: 'We meet to understand your vision, budget, and timeline.' },
  { num: '02', title: 'Floor Plan', desc: 'One team designs a plan tailored to your family and lot.' },
  { num: '03', title: 'Build', desc: 'Real-time budget tracking and frequent progress updates.' },
  { num: '04', title: 'Keys', desc: 'Final walkthrough, every detail addressed, keys handed over.' },
];

export default function TransparencySection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Trust Is Earned, Not Assumed.
          </p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4.5vw, 56px)', color: COLORS.white, marginTop: 16, fontWeight: 600, lineHeight: 1.12 }}>
            Building with Integrity
          </h2>
        </div>

        {/* ── PROCESS PIPELINE ── */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'flex-start',
          justifyContent: 'center',
          gap: 0,
          marginBottom: 80,
        }}>
          {processSteps.map((step, i) => (
            <div key={step.num} style={{
              display: 'flex',
              flexDirection: isMobile ? 'row' : 'column',
              alignItems: 'center',
              flex: 1,
              position: 'relative',
              gap: isMobile ? 16 : 0,
              textAlign: 'center',
              padding: isMobile ? '16px 0' : '0 4px',
            }}>
              {/* Node */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                backgroundColor: COLORS.gold,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 40px rgba(201,168,78,0.30)',
                position: 'relative',
                zIndex: 1,
              }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 600, color: COLORS.navy }}>{step.num}</span>
              </div>

              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div style={{
                  [isMobile ? 'width' : 'height']: isMobile ? '2px' : '2px',
                  [isMobile ? 'height' : 'width']: isMobile ? 40 : '100%',
                  [isMobile ? 'width' : 'height']: '2px',
                  backgroundColor: COLORS.goldSoft,
                  [isMobile ? 'marginLeft' : 'marginTop']: isMobile ? 0 : 20,
                  [isMobile ? 'marginTop' : 'marginBottom']: isMobile ? 0 : 20,
                  flexShrink: 0,
                  ...(isMobile ? { marginLeft: 27 } : {}),
                }} />
              )}

              {/* Label */}
              <div style={{ [isMobile ? 'textAlign' : '']: 'left', marginTop: isMobile ? 0 : 20 }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, color: COLORS.white, margin: '0 0 4px' }}>{step.title}</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.50)', margin: 0, lineHeight: 1.5, maxWidth: 180 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CREDENTIALS ROW ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: 56,
        }}>
          {credentials.map(cred => (
            <div key={cred} style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: '24px 20px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                border: `2px solid ${COLORS.gold}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 14px',
              }}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke={COLORS.gold} strokeWidth="2">
                  <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.80)', margin: 0, lineHeight: 1.4 }}>{cred}</p>
            </div>
          ))}
        </div>

        {/* ── TEAM BADGES ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {team.map(member => (
            <div key={member.initial} style={{ textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                border: `2px solid ${COLORS.gold}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 10px',
              }}>
                <span style={{ fontFamily: FONTS.heading, fontSize: 20, fontWeight: 600, color: COLORS.gold }}>{member.initial}</span>
              </div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
