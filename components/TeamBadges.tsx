import { team } from '@/data/team';
import { COLORS, FONTS } from '@/lib/constants';

export default function TeamBadges() {
  return (
    <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
      {team.map(member => (
        <div key={member.initial} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: `1.5px solid ${COLORS.gold}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <span style={{ fontFamily: FONTS.serif, fontSize: 16, color: COLORS.gold }}>{member.initial}</span>
          </div>
          <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>
            {member.role}
          </p>
        </div>
      ))}
    </div>
  );
}
