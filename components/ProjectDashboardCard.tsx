import { dashboardProject } from '@/data/dashboardProject';
import type { LedgerPill } from '@/data/dashboardProject';
import { COLORS, FONTS } from '@/lib/constants';

export default function ProjectDashboardCard() {
  const { address, updatedLabel, stages, ledger } = dashboardProject;

  return (
    <div
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 20,
        padding: 32,
        boxShadow: '0 30px 70px rgba(13,43,82,0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h3 style={{ fontFamily: FONTS.serif, fontSize: 24, color: COLORS.navy, margin: 0, fontWeight: 400 }}>
          {address}
        </h3>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: FONTS.sans,
            fontSize: 13,
            color: COLORS.grayText,
          }}
        >
          {/* Green dot = live/active indicator, matching reference */}
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#4CAF50',
              display: 'inline-block',
            }}
          />
          {updatedLabel}
        </span>
      </div>

      {/* Progress rail */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 32 }}>
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
                  fontSize: 12,
                  color: COLORS.grayText,
                  whiteSpace: 'nowrap',
                  margin: '8px 0 0',
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
                    : `2px dashed ${COLORS.grayLine}`,
                  margin: '0 6px',
                  marginBottom: 22,
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Ledger */}
      <div style={{ marginTop: 36 }}>
        {ledger.map((row, i) => (
          <div
            key={row.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderTop: i === 0 ? `1px solid ${COLORS.grayLine}` : 'none',
              borderBottom: `1px solid ${COLORS.grayLine}`,
            }}
          >
            <span style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.navy }}>{row.label}</span>
            <PillValue pill={row.pill} value={row.value} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        style={{
          width: '100%',
          marginTop: 24,
          padding: '14px 0',
          backgroundColor: 'transparent',
          border: `1.5px solid ${COLORS.gold}`,
          borderRadius: 999,
          color: COLORS.gold,
          fontFamily: FONTS.sans,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
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
      color: COLORS.pillGreenText,
      backgroundColor: COLORS.pillGreen,
      padding: '4px 12px',
      borderRadius: 999,
    },
    gray: {
      color: COLORS.grayText,
      backgroundColor: 'rgba(123,135,148,0.12)',
      padding: '4px 12px',
      borderRadius: 999,
    },
    none: {
      color: COLORS.navy,
    },
  };

  return (
    <span style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 600, ...styles[pill] }}>
      {value}
    </span>
  );
}

function StageNode({ status }: { status: 'complete' | 'active' | 'upcoming' }) {
  if (status === 'complete') {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          backgroundColor: COLORS.gold,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8">
          <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          border: `2px solid ${COLORS.gold}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
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
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: `2px solid ${COLORS.grayLine}`,
        margin: '0 auto',
      }}
    />
  );
}
