import { COLORS, FONTS } from '@/lib/constants';

export default function BlueprintArtifact() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 960,
        margin: '0 auto',
        borderRadius: 14,
        overflow: 'hidden',
        border: `1px solid rgba(201,168,78,0.55)`,
        boxShadow: '0 28px 72px rgba(13,43,82,0.18)',
        aspectRatio: '16 / 7',
        backgroundColor: '#EEE9DC',
      }}
    >
      {/* Right side: real house photo */}
      <img
        src="/images/hero-mansion.jpg"
        alt="Finished coastal home"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 15%',
        }}
      />

      {/* Blueprint overlay: covers left ~60%, fades to transparent going right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #EEE9DC 0%, #EEE9DC 36%, rgba(238,233,220,0.82) 50%, rgba(238,233,220,0.3) 63%, transparent 76%)',
          pointerEvents: 'none',
        }}
      />

      {/* Blueprint linework SVG */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '60%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 480 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer wall */}
        <rect x="28" y="34" width="380" height="210" stroke="#24457A" strokeWidth="1.4" />

        {/* Interior room divisions */}
        <line x1="28" y1="130" x2="200" y2="130" stroke="#24457A" strokeWidth="0.9" />
        <line x1="200" y1="34" x2="200" y2="244" stroke="#24457A" strokeWidth="0.9" />
        <line x1="200" y1="160" x2="408" y2="160" stroke="#24457A" strokeWidth="0.9" />
        <line x1="308" y1="34" x2="308" y2="160" stroke="#24457A" strokeWidth="0.9" />
        <line x1="120" y1="130" x2="120" y2="244" stroke="#24457A" strokeWidth="0.9" />

        {/* Window indicators (thick dashes on exterior walls) */}
        <line x1="60" y1="34" x2="90" y2="34" stroke="#24457A" strokeWidth="2.2" />
        <line x1="150" y1="34" x2="180" y2="34" stroke="#24457A" strokeWidth="2.2" />
        <line x1="230" y1="34" x2="270" y2="34" stroke="#24457A" strokeWidth="2.2" />
        <line x1="330" y1="34" x2="370" y2="34" stroke="#24457A" strokeWidth="2.2" />
        <line x1="28" y1="60" x2="28" y2="100" stroke="#24457A" strokeWidth="2.2" />
        <line x1="28" y1="165" x2="28" y2="210" stroke="#24457A" strokeWidth="2.2" />
        <line x1="408" y1="55" x2="408" y2="100" stroke="#24457A" strokeWidth="2.2" />
        <line x1="40" y1="244" x2="80" y2="244" stroke="#24457A" strokeWidth="2.2" />
        <line x1="230" y1="244" x2="380" y2="244" stroke="#24457A" strokeWidth="2.2" />

        {/* Door arc — master bedroom */}
        <path d="M120 130 A28 28 0 0 1 148 102" stroke="#24457A" strokeWidth="0.7" strokeDasharray="none" />
        <line x1="120" y1="130" x2="120" y2="102" stroke="#24457A" strokeWidth="0.7" />

        {/* Door arc — garage */}
        <path d="M308 130 A28 28 0 0 0 280 102" stroke="#24457A" strokeWidth="0.7" />
        <line x1="308" y1="130" x2="308" y2="102" stroke="#24457A" strokeWidth="0.7" />

        {/* Stair case */}
        {[0,7,14,21,28,35,42].map(y => (
          <line key={y} x1="230" y1={168 + y} x2="290" y2={168 + y} stroke="#24457A" strokeWidth="0.55" />
        ))}
        <rect x="230" y="168" width="60" height="49" stroke="#24457A" strokeWidth="0.7" />

        {/* Kitchen island */}
        <rect x="220" y="48" width="56" height="30" rx="4" stroke="#24457A" strokeWidth="0.7" strokeDasharray="3 1.5" />

        {/* Dimension lines */}
        <line x1="28" y1="18" x2="408" y2="18" stroke="#24457A" strokeWidth="0.5" />
        <line x1="28" y1="13" x2="28" y2="23" stroke="#24457A" strokeWidth="0.5" />
        <line x1="408" y1="13" x2="408" y2="23" stroke="#24457A" strokeWidth="0.5" />
        <line x1="414" y1="34" x2="414" y2="244" stroke="#24457A" strokeWidth="0.5" />
        <line x1="409" y1="34" x2="419" y2="34" stroke="#24457A" strokeWidth="0.5" />
        <line x1="409" y1="244" x2="419" y2="244" stroke="#24457A" strokeWidth="0.5" />

        {/* Room labels */}
        <text x="70" y="86" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif" fontWeight="400">Master Suite</text>
        <text x="225" y="76" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif">Kitchen</text>
        <text x="325" y="94" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif">Garage</text>
        <text x="60" y="192" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif">Living</text>
        <text x="138" y="192" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif">Dining</text>
        <text x="320" y="208" fontSize="9" fill="#1A3660" fontFamily="Georgia, serif">Study</text>
        <text x="38" y="164" fontSize="8" fill="#1A3660" fontFamily="Georgia, serif">Bed 2</text>
        <text x="142" y="164" fontSize="8" fill="#1A3660" fontFamily="Georgia, serif">Bed 3</text>

        {/* Dimension text */}
        <text x="218" y="14" fontSize="7.5" fill="#24457A" fontFamily="monospace" textAnchor="middle">63&apos;-4&quot;</text>
        <text x="428" y="142" fontSize="7.5" fill="#24457A" fontFamily="monospace" textAnchor="middle" transform="rotate(90,428,142)">35&apos;-0&quot;</text>

        {/* North arrow */}
        <g transform="translate(440,52)">
          <circle cx="0" cy="0" r="12" stroke="#24457A" strokeWidth="0.6" fill="none" opacity="0.4" />
          <polygon points="0,-9 -4,4 0,1 4,4" fill="#24457A" opacity="0.6" />
          <text x="0" y="20" fontSize="7" fill="#24457A" fontFamily="monospace" textAnchor="middle" opacity="0.6">N</text>
        </g>

        {/* Front elevation sketch (faint, top area) */}
        <g opacity="0.18">
          <rect x="50" y="258" width="130" height="18" stroke="#24457A" strokeWidth="0.5" />
          <polygon points="115,249 50,258 180,258" stroke="#24457A" strokeWidth="0.5" fill="none" />
          <rect x="76" y="262" width="18" height="14" stroke="#24457A" strokeWidth="0.4" />
          <rect x="106" y="262" width="18" height="14" stroke="#24457A" strokeWidth="0.4" />
          <rect x="138" y="262" width="18" height="14" stroke="#24457A" strokeWidth="0.4" />
        </g>
      </svg>

      {/* Architect's stamp */}
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          right: 18,
          border: `1px solid rgba(201,168,78,0.65)`,
          borderRadius: 4,
          padding: '5px 14px',
          backgroundColor: 'rgba(13,43,82,0.60)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <span
          style={{
            color: COLORS.gold,
            fontFamily: FONTS.serif,
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          One Firm · Floor Plan to Finish
        </span>
      </div>
    </div>
  );
}
