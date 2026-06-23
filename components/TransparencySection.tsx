'use client';
import CredentialList from './CredentialList';
import TeamBadges from './TeamBadges';
import ProjectDashboardCard from './ProjectDashboardCard';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function TransparencySection() {
  const isMobile = useIsMobile();

  return (
    <section style={{ backgroundColor: COLORS.navy, padding: isMobile ? '64px 24px' : '96px 64px 104px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{
            fontFamily: FONTS.body,
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: COLORS.gold,
            fontWeight: 600,
            margin: '0 0 18px',
          }}>
            Trust Is Earned, Not Assumed.
          </p>
          <h2 style={{
            fontFamily: FONTS.heading,
            fontSize: 'clamp(34px, 4.2vw, 54px)',
            color: COLORS.white,
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
          }}>
            Built on Complete{' '}
            <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Transparency.</em>
          </h2>
        </div>

        {/* Two-column body */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: 48,
          alignItems: 'start',
        }}>

          {/* Left: credentials + team badges */}
          <div>
            <CredentialList />
            <div style={{ marginTop: 36 }}>
              <TeamBadges />
            </div>
          </div>

          {/* Right: live project dashboard */}
          <ProjectDashboardCard />
        </div>

      </div>
    </section>
  );
}
