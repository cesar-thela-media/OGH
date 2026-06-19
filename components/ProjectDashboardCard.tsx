import { dashboardProject } from '@/data/dashboardProject';
import type { LedgerPill } from '@/data/dashboardProject';
import { COLORS, FONTS } from '@/lib/constants';

export default function ProjectDashboardCard() {
  const { address, updatedLabel, stages, ledger } = dashboardProject;

  return (
    <div
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 24,
        padding: '32px 36px 36px',
        boxShadow: '0 32px 80px rgba(13,43,82,0.30)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h3
          style={{
            fontFamily: FONTS.serif,
            fontSize: 26,
            fontWeight: 400,
            color: COLORS.navy,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {address}
        </h3>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            fontFamily: FONTS.sans,
            fontSize: 12,
            color: COLORS.grayText,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: '#22C55E',
              display: 'inline-block',
              animation: 'pulseDot 2s ease-in-out infinite',
            }}
          />
          {updatedLabel}
        </span>
      </div>

      {/* Progress rail */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: i < stages.length - 1 ? 1 : 'none',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <StageNode status={stage.status} />
              <p
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 11,
                  fontWeight: 400,
                  color: stage.status === 'active' ? COLORS.gold : COLORS.grayText,
                  whiteSpace: 'nowrap',
                  margin: '8px 0 0',
                  letterSpacing: '0.01em',
                }}
              >
                {stage.label}
              </p>
            </div>
            {i < stages.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 0,
                  borderTop: stage.status === 'complete'
                    ? `2px solid ${COLORS.gold}`
                    : `2px dashed rgba(123,135,148,0.28)`,
                  margin: '0 6px',
                  marginBottom: 22,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Ledger */}
      <div style={{ marginTop: 32 }}>
        {ledger.map((row, i) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderTop: `1px solid rgba(123,135,148,0.15)`,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 400,
                color: COLORS.navy,
              }}
            >
              {row.label}
            </span>
            <PillValue pill={row.pill} value={row.value} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          width: '100%',
          marginTop: 28,
          padding: '14px 0',
          backgroundColor: 'transparent',
          border: `1.5px solid ${COLORS.gold}`,
          borderRadius: 999,
          color: COLORS.gold,
          fontFamily: FONTS.sans,
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '0.03em',
        }}
      >
        View Timeline →
      </button>
    </div>
  );
}

function PillValue({ pill, value }: { pill: LedgerPill; value: string }) {
  const styles: Record<LedgerPill, React.CSSProperties> = {
    green: {
      color: '#1F6B3A',
      backgroundColor: '#E6F4EC',
      padding: '4px 14px',
      borderRadius: 999,
      fontSize: 12,
    },
    gray: {
      color: COLORS.grayText,
      backgroundColor: 'rgba(123,135,148,0.10)',
      padding: '4px 14px',
      borderRadius: 999,
      fontSize: 12,
    },
    none: {
      color: COLORS.navy,
      fontSize: 13,
    },
  };

  return (
    <span style={{ fontFamily: FONTS.sans, fontWeight: 600, ...styles[pill] }}>
      {value}
    </span>
  );
}

function StageNode({ status }: { status: 'complete' | 'active' | 'upcoming' }) {
  if (status === 'complete') {
    return (
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          backgroundColor: COLORS.gold,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
          <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: `2px solid ${COLORS.gold}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          backgroundColor: 'rgba(201,168,78,0.06)',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: COLORS.gold,
            animation: 'pulseDot 1.8s ease-in-out infinite',
            display: 'block',
          }}
        />
      </div>
    );
  }
  return (
    <div
      style={{
        width: 30,
        height: 30,
        borderRadius: '50%',
        border: `2px dashed rgba(123,135,148,0.30)`,
        margin: '0 auto',
      }}
    />
  );
}
