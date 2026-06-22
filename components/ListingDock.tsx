import Link from 'next/link';
import { listings } from '@/data/listings';
import { COLORS, FONTS } from '@/lib/constants';

export default function ListingDock() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        maxWidth: 1360,
        margin: '0 auto',
      }}
    >
      {listings.slice(0, 3).map(listing => (
        <Link
          key={listing.id}
          href={`/for-sale/${listing.id}`}
          style={{
            display: 'flex',
            gap: 20,
            backgroundColor: 'rgba(5,18,40,0.78)',
            backdropFilter: 'blur(32px) saturate(140%)',
            WebkitBackdropFilter: 'blur(32px) saturate(140%)',
            borderRadius: 18,
            padding: '18px 22px',
            border: '1px solid rgba(255,255,255,0.06)',
            textDecoration: 'none',
            minWidth: 0,
            boxShadow: '0 8px 32px rgba(0,0,0,0.30)',
          }}
        >
          <img
            src={listing.image}
            alt={listing.address}
            style={{
              width: 108,
              height: 108,
              objectFit: 'cover',
              borderRadius: 12,
              flexShrink: 0,
              boxShadow: '0 4px 20px rgba(0,0,0,0.30)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0, flex: 1 }}>
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 19,
                  fontWeight: 400,
                  color: COLORS.white,
                  margin: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: 1.2,
                }}
              >
                {listing.address}
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 7 }}>
                <Spec icon="bed" value={listing.beds} />
                <Spec icon="bath" value={listing.baths} />
                <Spec icon="sqft" value={listing.sqft.toLocaleString()} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 17,
                  fontWeight: 600,
                  color: COLORS.gold,
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.01em',
                }}
              >
                {listing.price}
              </span>
              <Link
                href={`/for-sale/${listing.id}`}
                style={{
                  fontFamily: FONTS.body, fontSize: 10, fontWeight: 600,
                  color: COLORS.navy, backgroundColor: COLORS.gold,
                  borderRadius: 999, padding: '5px 14px',
                  whiteSpace: 'nowrap', flexShrink: 0,
                  textDecoration: 'none',
                }}
              >
                View →
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Spec({ icon, value }: { icon: 'bed' | 'bath' | 'sqft'; value: string | number }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'rgba(255,255,255,0.60)', fontFamily: FONTS.body, whiteSpace: 'nowrap' }}>
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
