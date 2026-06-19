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
        padding: isMobile ? '72px 24px 64px' : '100px 24px 80px',
        textAlign: 'center',
      }}
    >
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
        Design + Build — One Company
      </p>

      <h2
        style={{
          fontFamily: FONTS.serif,
          fontSize: 'clamp(40px, 5vw, 72px)',
          fontWeight: 400,
          color: COLORS.navy,
          lineHeight: 1.08,
          margin: '16px 0 0',
          letterSpacing: '-0.01em',
        }}
      >
        We Design It.
        <br />
        We <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Build It.</em>
      </h2>

      <p
        style={{
          fontFamily: FONTS.sans,
          fontSize: 16,
          color: COLORS.grayText,
          marginTop: 16,
          marginBottom: 0,
          letterSpacing: '0.01em',
        }}
      >
        No architect. No handoff. No surprises.
      </p>

      <div style={{ marginTop: 52 }}>
        <BlueprintArtifact />
      </div>

      {/* Stat chips */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          marginTop: 36,
        }}
      >
        {stats.map((stat, i) => (
          <span key={stat} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && (
              <span
                style={{
                  width: 1,
                  height: 14,
                  backgroundColor: 'rgba(123,135,148,0.30)',
                  display: 'inline-block',
                  margin: '0 28px',
                }}
              />
            )}
            <span
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                color: COLORS.grayText,
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
            >
              {stat}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
