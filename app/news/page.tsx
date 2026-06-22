import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS } from '@/lib/constants';

export default function BuilderNewsPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, padding: '64px 32px 88px', maxWidth: 820, margin: '0 auto' }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, color: COLORS.navy, margin: '0 0 32px' }}>Builder News</h1>
        <div style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 20 }}>Stay updated with the latest from Ocean Glory Homes — new projects, community involvement, and insights from the Texas Coastal Bend home building market.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 40 }}>
            {[
              { title: 'New Listings in Rockport Country Club', date: 'June 2026', body: 'We&apos;re excited to announce several new custom home opportunities in the desirable Rockport Country Club subdivision. Contact us for details.' },
              { title: 'Now Serving Portland, Texas', date: 'May 2026', body: 'Ocean Glory Homes has expanded service to Portland, Texas — bringing our design/build approach to more coastal communities.' },
              { title: '2026 Coastal Bend Builders Conference', date: 'April 2026', body: 'Our team attended the annual Coastal Bend Builders Association conference, staying current on the latest building codes and coastal construction techniques.' },
            ].map(item => (
              <div key={item.title} style={{ backgroundColor: COLORS.white, borderRadius: 16, padding: '28px 32px', boxShadow: '0 2px 12px rgba(13,43,82,0.05)' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>{item.date}</p>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '0 0 12px' }}>{item.title}</h2>
                <p style={{ margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
