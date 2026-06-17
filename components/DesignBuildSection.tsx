'use client';
import BlueprintArtifact from './BlueprintArtifact';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

const stats = ['11+ Years', 'Family Owned', 'Design/Build'];

export default function DesignBuildSection() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        backgroundColor: COLORS.offWhite,
        padding: isMobile ? '64px 24px' : '96px 24px',
        textAlign: 'center',
      }}
    >
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
        Design + Build — One Company
      </p>

      <h2
        style={{
          fontFamily: FONTS.serif,
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          color: COLORS.navy,
          lineHeight: 1.1,
          margin: '20px 0 0',
          fontWeight: 400,
        }}
      >
        We Design It.
        <br />
        We <span style={{ fontStyle: 'italic', color: COLORS.gold }}>Build It.</span>
      </h2>

      <p style={{ fontFamily: FONTS.sans, fontSize: 17, color: COLORS.grayText, marginTop: 16 }}>
        No architect. No handoff. No surprises.
      </p>

      <div style={{ marginTop: 48 }}>
        <BlueprintArtifact />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, marginTop: 40 }}>
        {stats.map((stat, i) => (
          <span key={stat} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {i > 0 && (
              <span
                style={{ width: 1, height: 16, backgroundColor: COLORS.grayLine, display: 'inline-block' }}
              />
            )}
            <span style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.grayText }}>{stat}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
