'use client';
import CredentialList from './CredentialList';
import TeamBadges from './TeamBadges';
import ProjectDashboardCard from './ProjectDashboardCard';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function TransparencySection() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        backgroundColor: COLORS.navy,
        padding: isMobile ? '72px 24px 0' : '100px 72px 0',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 72 }}>
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
          Trust Is Earned, Not Assumed.
        </p>
        <h2
          style={{
            fontFamily: FONTS.serif,
            fontSize: 'clamp(42px, 5vw, 68px)',
            fontWeight: 300,
            color: COLORS.white,
            marginTop: 14,
            marginBottom: 0,
            letterSpacing: '-0.01em',
            lineHeight: 1.08,
          }}
        >
          Built on Complete Transparency.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '42fr 58fr',
          gap: isMobile ? 56 : 72,
          maxWidth: 1180,
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        <div>
          <CredentialList />
          <TeamBadges />
        </div>
        <ProjectDashboardCard />
      </div>

      <div style={{ height: 96 }} />
    </section>
  );
}
