import { credentials } from '@/data/credentials';
import { COLORS, FONTS } from '@/lib/constants';

export default function CredentialList() {
  return (
    <div>
      {credentials.map((cred, i) => (
        <div
          key={cred}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '18px 0',
            borderBottom: i < credentials.length - 1 ? `1px solid ${COLORS.goldSoft}` : 'none',
          }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              border: `1.5px solid ${COLORS.gold}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={COLORS.gold} strokeWidth="1.6">
              <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.white }}>{cred}</span>
        </div>
      ))}
    </div>
  );
}
