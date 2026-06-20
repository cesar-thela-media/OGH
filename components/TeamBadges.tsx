import { team } from '@/data/team';
import { COLORS, FONTS } from '@/lib/constants';

export default function TeamBadges() {
  return (
    <div style={{ display: 'flex', gap: 28, marginTop: 40 }}>
      {team.map(member => (
        <div key={member.initial} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              border: `1.5px solid rgba(201,168,78,0.55)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              backgroundColor: 'rgba(201,168,78,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.heading,
                fontSize: 18,
                fontWeight: 400,
                color: COLORS.gold,
              }}
            >
              {member.initial}
            </span>
          </div>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 11,
              color: 'rgba(255,255,255,0.55)',
              marginTop: 8,
              letterSpacing: '0.02em',
              lineHeight: 1.4,
            }}
          >
            {member.role}
          </p>
        </div>
      ))}
    </div>
  );
}
