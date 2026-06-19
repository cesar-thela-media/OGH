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
        padding: isMobile ? '72px 24px 0' : '104px 80px 0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: 11,
            letterSpacing: '0.22em',
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
            fontSize: isMobile ? 'clamp(36px, 8vw, 52px)' : 'clamp(44px, 4.5vw, 72px)',
            fontWeight: 400,
            color: COLORS.white,
            marginTop: 16,
            marginBottom: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.10,
          }}
        >
          Built on Complete Transparency.
        </h2>
      </div>

      {/* Two-column body */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '42fr 58fr',
          gap: isMobile ? 56 : 80,
          maxWidth: 1200,
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

      <div style={{ height: 104 }} />
    </section>
  );
}
