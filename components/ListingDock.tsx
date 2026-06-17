'use client';
import { listings } from '@/data/listings';
import { COLORS, FONTS } from '@/lib/constants';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ListingDock() {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: 16,
        maxWidth: 1180,
        margin: '0 auto',
      }}
    >
      {listings.map(listing => (
        <div
          key={listing.id}
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            gap: 14,
            backgroundColor: COLORS.navyOverlay,
            backdropFilter: 'blur(6px)',
            borderRadius: 16,
            padding: 14,
            minWidth: 0,
          }}
        >
          <img
            src={listing.image}
            alt={listing.address}
            style={{ width: 92, height: 92, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
            <div>
              <p style={{ fontFamily: FONTS.serif, fontSize: 16, color: COLORS.white, margin: 0 }}>{listing.address}</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <Spec icon="bed"  value={listing.beds} />
                <Spec icon="bath" value={listing.baths} />
                <Spec icon="sqft" value={listing.sqft.toLocaleString()} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
              <span style={{ fontFamily: FONTS.sans, fontSize: 15, fontWeight: 700, color: COLORS.gold }}>
                {listing.price}
              </span>
              <span
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 11,
                  color: COLORS.gold,
                  border: `1px solid ${COLORS.gold}`,
                  borderRadius: 999,
                  padding: '3px 10px',
                }}
              >
                {listing.stage}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Spec({ icon, value }: { icon: 'bed' | 'bath' | 'sqft'; value: string | number }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(255,255,255,0.7)', fontFamily: FONTS.sans }}>
      <SpecIcon type={icon} /> {value}
    </span>
  );
}

function SpecIcon({ type }: { type: 'bed' | 'bath' | 'sqft' }) {
  const paths: Record<string, string> = {
    bed:  'M2 10v3M2 10h12v3M3 10V7a1 1 0 011-1h8a1 1 0 011 1v3',
    bath: 'M3 8h10v2a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM4 8V4a1 1 0 011-1',
    sqft: 'M2 2h10v10H2V2z',
  };
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d={paths[type]} />
    </svg>
  );
}
