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
        padding: isMobile ? '64px 24px 0' : '96px 64px 0',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 13,
            letterSpacing: '0.18em',
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
            fontSize: 'clamp(36px, 4.5vw, 56px)',
            color: COLORS.white,
            marginTop: 16,
            fontWeight: 400,
          }}
        >
          Built on Complete{' '}
          <span style={{ fontStyle: 'italic', color: COLORS.gold }}>Transparency.</span>
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '45fr 55fr',
          gap: isMobile ? 48 : 64,
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

      <div style={{ height: 80 }} />
    </section>
  );
}
