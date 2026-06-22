'use client';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Shield, Eye, Clock, Award } from 'lucide-react';

const pillars = [
  { icon: Eye, title: 'Full Transparency', desc: 'Real-time budget tracking. No buried markups, no surprise change orders.' },
  { icon: Clock, title: 'On Schedule', desc: 'Design/build eliminates bidding loops. We commit to dates and hit them.' },
  { icon: Shield, title: 'One Team', desc: 'Same team from floor plan to finish. No architect handoffs, no blame game.' },
  { icon: Award, title: 'Credentials', desc: 'Texas Association of Builders, NAHB, Coastal Bend Builders, BBB A+.' },
];

export default function TransparencySection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Trust Is Earned, Not Assumed.
          </p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(36px, 4.5vw, 56px)', color: COLORS.white, marginTop: 16, fontWeight: 600, lineHeight: 1.12 }}>
            Building with Integrity
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: 24 }}>
          {pillars.map(p => (
            <div key={p.title} style={{ textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                border: `2px solid ${COLORS.gold}`, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <p.icon size={24} color={COLORS.gold} strokeWidth={1.5} />
              </div>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, color: COLORS.white, margin: '0 0 8px' }}>{p.title}</p>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.50)', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
