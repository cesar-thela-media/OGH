import { COLORS, FONTS } from '@/lib/constants';

export default function BlueprintArtifact() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 960,
        margin: '0 auto',
        borderRadius: 12,
        overflow: 'hidden',
        border: `1px solid rgba(201,168,78,0.50)`,
        boxShadow: '0 24px 64px rgba(13,43,82,0.16), 0 4px 16px rgba(13,43,82,0.08)',
        aspectRatio: '16 / 7',
        backgroundColor: '#EDE8DC',
      }}
    >
      {/* House photo — full bleed base */}
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

      {/* Cream paper overlay — fades left to right, leaving photo clear on right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #EDE8DC 0%, #EDE8DC 28%, rgba(237,232,220,0.94) 38%, rgba(237,232,220,0.75) 48%, rgba(237,232,220,0.38) 60%, rgba(237,232,220,0.10) 72%, transparent 82%)',
          pointerEvents: 'none',
        }}
      />

      {/* Blueprint SVG linework — covers left 68% */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '68%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox="0 0 520 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Structural grid (very faint) */}
        <line x1="110" y1="0" x2="110" y2="300" stroke="#24457A" strokeWidth="0.3" opacity="0.25" strokeDasharray="4 6" />
        <line x1="220" y1="0" x2="220" y2="300" stroke="#24457A" strokeWidth="0.3" opacity="0.25" strokeDasharray="4 6" />
        <line x1="330" y1="0" x2="330" y2="300" stroke="#24457A" strokeWidth="0.3" opacity="0.25" strokeDasharray="4 6" />
        <line x1="0" y1="100" x2="520" y2="100" stroke="#24457A" strokeWidth="0.3" opacity="0.25" strokeDasharray="4 6" />
        <line x1="0" y1="200" x2="520" y2="200" stroke="#24457A" strokeWidth="0.3" opacity="0.25" strokeDasharray="4 6" />

        {/* Outer wall — thick */}
        <rect x="30" y="36" width="400" height="218" stroke="#1A3660" strokeWidth="2.0" />

        {/* Interior walls */}
        {/* Vertical center divider */}
        <line x1="215" y1="36" x2="215" y2="254" stroke="#24457A" strokeWidth="1.0" />
        {/* Right wing vertical */}
        <line x1="328" y1="36" x2="328" y2="178" stroke="#24457A" strokeWidth="1.0" />
        {/* Master bed horizontal */}
        <line x1="30" y1="138" x2="215" y2="138" stroke="#24457A" strokeWidth="1.0" />
        {/* Bed 2/3 divider */}
        <line x1="122" y1="138" x2="122" y2="254" stroke="#24457A" strokeWidth="1.0" />
        {/* Kitchen / dining split */}
        <line x1="215" y1="168" x2="430" y2="168" stroke="#24457A" strokeWidth="1.0" />
        {/* Hall wall */}
        <line x1="215" y1="112" x2="328" y2="112" stroke="#24457A" strokeWidth="1.0" />

        {/* Window cutouts — top wall */}
        <line x1="54" y1="36" x2="86" y2="36" stroke="#EDE8DC" strokeWidth="2.4" />
        <line x1="54" y1="36" x2="86" y2="36" stroke="#1A3660" strokeWidth="2.4" strokeDasharray="0 3 999 0" />
        {/* override: draw as thick segments (window indicator) */}
        <line x1="56" y1="34" x2="84" y2="34" stroke="#1A3660" strokeWidth="3.2" />
        <line x1="152" y1="34" x2="196" y2="34" stroke="#1A3660" strokeWidth="3.2" />
        <line x1="240" y1="34" x2="282" y2="34" stroke="#1A3660" strokeWidth="3.2" />
        <line x1="350" y1="34" x2="400" y2="34" stroke="#1A3660" strokeWidth="3.2" />

        {/* Window cutouts — left wall */}
        <line x1="28" y1="60" x2="28" y2="102" stroke="#1A3660" strokeWidth="3.2" />
        <line x1="28" y1="165" x2="28" y2="218" stroke="#1A3660" strokeWidth="3.2" />

        {/* Window cutouts — bottom wall */}
        <line x1="44" y1="256" x2="92" y2="256" stroke="#1A3660" strokeWidth="3.2" />
        <line x1="230" y1="256" x2="380" y2="256" stroke="#1A3660" strokeWidth="3.2" />

        {/* Door arcs */}
        {/* Master entry door */}
        <path d="M122 138 A32 32 0 0 1 90 106" stroke="#1A3660" strokeWidth="0.75" />
        <line x1="122" y1="138" x2="122" y2="106" stroke="#1A3660" strokeWidth="0.75" />

        {/* Hall door */}
        <path d="M215 112 A28 28 0 0 0 187 84" stroke="#1A3660" strokeWidth="0.75" />
        <line x1="215" y1="112" x2="215" y2="84" stroke="#1A3660" strokeWidth="0.75" />

        {/* Bed 2 door */}
        <path d="M122 254 A26 26 0 0 0 96 228" stroke="#1A3660" strokeWidth="0.75" />
        <line x1="122" y1="254" x2="122" y2="228" stroke="#1A3660" strokeWidth="0.75" />

        {/* Living/kitchen door */}
        <path d="M215 168 A22 22 0 0 1 237 146" stroke="#1A3660" strokeWidth="0.75" />
        <line x1="215" y1="168" x2="237" y2="168" stroke="#1A3660" strokeWidth="0.75" />

        {/* Staircase */}
        <rect x="232" y="174" width="64" height="52" stroke="#1A3660" strokeWidth="0.75" />
        {[0,7,14,21,28,35,42].map(y => (
          <line key={y} x1="232" y1={174+y} x2="296" y2={174+y} stroke="#1A3660" strokeWidth="0.55" />
        ))}
        <line x1="264" y1="174" x2="264" y2="226" stroke="#1A3660" strokeWidth="0.55" />

        {/* Kitchen island */}
        <rect x="238" y="50" width="62" height="34" rx="3" stroke="#1A3660" strokeWidth="0.75" strokeDasharray="4 2" />

        {/* Master bath fixtures */}
        {/* Bathtub (elongated rect) */}
        <rect x="36" y="44" width="46" height="22" rx="4" stroke="#1A3660" strokeWidth="0.65" />
        <ellipse cx="59" cy="55" rx="16" ry="7" stroke="#1A3660" strokeWidth="0.5" />
        {/* Toilet */}
        <rect x="94" y="44" width="16" height="20" rx="3" stroke="#1A3660" strokeWidth="0.65" />
        <ellipse cx="102" cy="58" rx="6" ry="5" stroke="#1A3660" strokeWidth="0.5" />
        {/* Sink */}
        <rect x="118" y="44" width="16" height="14" rx="3" stroke="#1A3660" strokeWidth="0.65" />

        {/* Bed 2 bath (simplified) */}
        <rect x="128" y="240" width="32" height="12" rx="2" stroke="#1A3660" strokeWidth="0.55" />

        {/* Dimension lines */}
        <line x1="30" y1="18" x2="430" y2="18" stroke="#1A3660" strokeWidth="0.5" />
        <line x1="30" y1="13" x2="30" y2="23" stroke="#1A3660" strokeWidth="0.5" />
        <line x1="430" y1="13" x2="430" y2="23" stroke="#1A3660" strokeWidth="0.5" />
        <text x="230" y="14" fontSize="7" fill="#24457A" fontFamily="monospace" textAnchor="middle">66&apos;-8&quot;</text>

        <line x1="445" y1="36" x2="445" y2="254" stroke="#1A3660" strokeWidth="0.5" />
        <line x1="440" y1="36" x2="450" y2="36" stroke="#1A3660" strokeWidth="0.5" />
        <line x1="440" y1="254" x2="450" y2="254" stroke="#1A3660" strokeWidth="0.5" />
        <text x="460" y="148" fontSize="7" fill="#24457A" fontFamily="monospace" textAnchor="middle" transform="rotate(90,460,148)">36&apos;-2&quot;</text>

        {/* Sub-dimension — left wing width */}
        <line x1="30" y1="265" x2="215" y2="265" stroke="#1A3660" strokeWidth="0.4" />
        <line x1="30" y1="261" x2="30" y2="269" stroke="#1A3660" strokeWidth="0.4" />
        <line x1="215" y1="261" x2="215" y2="269" stroke="#1A3660" strokeWidth="0.4" />
        <text x="122" y="275" fontSize="6.5" fill="#24457A" fontFamily="monospace" textAnchor="middle">30&apos;-6&quot;</text>

        {/* Sub-dimension — right wing width */}
        <line x1="215" y1="265" x2="430" y2="265" stroke="#1A3660" strokeWidth="0.4" />
        <line x1="430" y1="261" x2="430" y2="269" stroke="#1A3660" strokeWidth="0.4" />
        <text x="322" y="275" fontSize="6.5" fill="#24457A" fontFamily="monospace" textAnchor="middle">36&apos;-2&quot;</text>

        {/* Room labels */}
        <text x="72" y="96" fontSize="9" fill="#1A3660" fontFamily="serif" fontWeight="400">Master Suite</text>
        <text x="52" y="108" fontSize="7.5" fill="#24457A" fontFamily="serif" opacity="0.7">Bath en suite</text>
        <text x="54" y="200" fontSize="9" fill="#1A3660" fontFamily="serif">Bed 2</text>
        <text x="140" y="200" fontSize="9" fill="#1A3660" fontFamily="serif">Bed 3</text>
        <text x="52" y="220" fontSize="7.5" fill="#24457A" fontFamily="serif" opacity="0.7">w/ bath</text>
        <text x="244" y="94" fontSize="9" fill="#1A3660" fontFamily="serif">Kitchen</text>
        <text x="348" y="82" fontSize="9" fill="#1A3660" fontFamily="serif">Garage</text>
        <text x="348" y="94" fontSize="7.5" fill="#24457A" fontFamily="serif" opacity="0.7">2-car</text>
        <text x="236" y="148" fontSize="8" fill="#1A3660" fontFamily="serif">Hall</text>
        <text x="250" y="195" fontSize="9" fill="#1A3660" fontFamily="serif">Living</text>
        <text x="340" y="210" fontSize="9" fill="#1A3660" fontFamily="serif">Dining</text>

        {/* North arrow */}
        <g transform="translate(478,54)">
          <circle cx="0" cy="0" r="14" stroke="#24457A" strokeWidth="0.6" fill="none" opacity="0.45" />
          <polygon points="0,-10 -4.5,5 0,2 4.5,5" fill="#1A3660" opacity="0.7" />
          <text x="0" y="22" fontSize="7" fill="#24457A" fontFamily="monospace" textAnchor="middle" opacity="0.7">N</text>
        </g>

        {/* Plan title block */}
        <text x="30" y="295" fontSize="6.5" fill="#24457A" fontFamily="monospace" opacity="0.55">FLOOR PLAN — FIRST LEVEL</text>
        <text x="30" y="303" fontSize="5.5" fill="#24457A" fontFamily="monospace" opacity="0.4">SCALE: 1/4&quot; = 1&apos;-0&quot;</text>
      </svg>

      {/* Architect's stamp */}
      <div
        style={{
          position: 'absolute',
          bottom: 14,
          right: 18,
          border: `1px solid rgba(201,168,78,0.70)`,
          borderRadius: 3,
          padding: '5px 14px',
          backgroundColor: 'rgba(13,43,82,0.55)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        <span
          style={{
            color: COLORS.gold,
            fontFamily: FONTS.sans,
            fontSize: 9,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          One Firm · Floor Plan to Finish
        </span>
      </div>
    </div>
  );
}
