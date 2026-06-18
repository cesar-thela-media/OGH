import { COLORS, FONTS } from '@/lib/constants';

export default function BlueprintArtifact() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1020,
        margin: '0 auto',
        borderRadius: 12,
        overflow: 'hidden',
        border: `2px solid ${COLORS.gold}`,
        boxShadow: '0 24px 60px rgba(13,43,82,0.16)',
      }}
    >
      {/* REPLACE: swap with licensed blueprint-to-house composite photography */}
      <img
        src="/images/blueprint-to-house.jpg"
        alt="Architectural floor plan transforming into the finished home — Ocean Glory Homes designs and builds under one roof"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          border: `1px solid ${COLORS.gold}`,
          borderRadius: 4,
          padding: '6px 14px',
          backgroundColor: 'rgba(13,43,82,0.65)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <span
          style={{
            color: COLORS.gold,
            fontFamily: FONTS.serif,
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          One Firm · Floor Plan to Finish
        </span>
      </div>
    </div>
  );
}
