import Link from 'next/link';
import { listings } from '@/data/listings';
import { COLORS, FONTS } from '@/lib/constants';

export default function ListingDock() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14,
      }}
    >
      {listings.map(listing => (
        <Link
          key={listing.id}
          href={`/for-sale/${listing.id}`}
          style={{
            display: 'flex',
            gap: 14,
            backgroundColor: 'rgba(13,43,82,0.72)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: 14,
            padding: '12px 14px',
            border: '1px solid rgba(255,255,255,0.10)',
            textDecoration: 'none',
            minWidth: 0,
          }}
        >
          <img
            src={listing.image}
            alt={listing.address}
            style={{
              width: 86,
              height: 86,
              objectFit: 'cover',
              borderRadius: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0, flex: 1 }}>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 17,
                  fontWeight: 400,
                  color: COLORS.white,
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  letterSpacing: '0.01em',
                }}
              >
                {listing.address}
              </p>
              <div style={{ display: 'flex', gap: 10, marginTop: 5 }}>
                <Spec icon="bed" value={listing.beds} />
                <Spec icon="bath" value={listing.baths} />
                <Spec icon="sqft" value={listing.sqft.toLocaleString()} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
              <span
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 15,
                  fontWeight: 600,
                  color: COLORS.gold,
                  whiteSpace: 'nowrap',
                }}
              >
                {listing.price}
              </span>
              <span
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 10,
                  fontWeight: 500,
                  color: COLORS.gold,
                  border: `1px solid rgba(201,168,78,0.6)`,
                  borderRadius: 999,
                  padding: '3px 10px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  letterSpacing: '0.04em',
                }}
              >
                {listing.stage}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Spec({ icon, value }: { icon: 'bed' | 'bath' | 'sqft'; value: string | number }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(255,255,255,0.65)', fontFamily: FONTS.sans, whiteSpace: 'nowrap' }}>
      <SpecIcon type={icon} /> {value}
    </span>
  );
}

function SpecIcon({ type }: { type: 'bed' | 'bath' | 'sqft' }) {
  const paths: Record<string, string> = {
    bed: 'M2 10v3M2 10h12v3M3 10V7a1 1 0 011-1h8a1 1 0 011 1v3',
    bath: 'M3 8h10v2a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM4 8V4a1 1 0 011-1',
    sqft: 'M2 2h10v10H2V2z',
  };
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d={paths[type]} />
    </svg>
  );
}
