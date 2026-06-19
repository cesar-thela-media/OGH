import { credentials } from '@/data/credentials';
import { COLORS, FONTS } from '@/lib/constants';

export default function CredentialList() {
  return (
    <div>
      {credentials.map((cred) => (
        <div
          key={cred}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '18px 0',
            borderBottom: `1px solid rgba(201,168,78,0.22)`,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: `1.5px solid ${COLORS.gold}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={COLORS.gold} strokeWidth="1.8">
              <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span
            style={{
              fontFamily: FONTS.sans,
              fontSize: 15,
              fontWeight: 400,
              color: COLORS.white,
              letterSpacing: '0.01em',
            }}
          >
            {cred}
          </span>
        </div>
      ))}
    </div>
  );
}
