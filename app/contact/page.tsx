import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Page header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 24px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Get In Touch
          </p>
          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 4.5vw, 64px)', color: COLORS.white, marginTop: 12, fontWeight: 400 }}>
            Contact Us
          </h1>
        </section>

        {/* Contact info cards */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 64 }}>
            {[
              {
                label: 'Call Us',
                value: CONTACT.phone,
                href: CONTACT.phoneHref,
                detail: 'Available 8am–6pm, Monday–Saturday',
              },
              {
                label: 'Email Us',
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
                detail: 'We respond within 24 hours',
              },
              {
                label: 'Visit Our Office',
                value: 'Corpus Christi, TX',
                href: '#',
                detail: 'By appointment only — call to schedule',
              },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: '0 4px 20px rgba(13,43,82,0.08)',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>
                  {item.label}
                </p>
                <a
                  href={item.href}
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 20,
                    color: COLORS.navy,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  {item.value}
                </a>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.grayText, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Inquiry form (display only — no backend per PRD) */}
          <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 48, boxShadow: '0 4px 20px rgba(13,43,82,0.08)' }}>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(24px, 3vw, 36px)', color: COLORS.navy, margin: '0 0 8px', fontWeight: 400 }}>
              Send a Message
            </h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.grayText, margin: '0 0 32px' }}>
              Tell us about your project and we&apos;ll get back to you within one business day.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: 10,
                      border: `1px solid rgba(13,43,82,0.15)`, fontFamily: FONTS.sans,
                      fontSize: 15, color: COLORS.navy, outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    style={{
                      width: '100%', padding: '14px 16px', borderRadius: 10,
                      border: `1px solid rgba(13,43,82,0.15)`, fontFamily: FONTS.sans,
                      fontSize: 15, color: COLORS.navy, outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>
              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    border: `1px solid rgba(13,43,82,0.15)`, fontFamily: FONTS.sans,
                    fontSize: 15, color: COLORS.navy, outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(361) 555-0123"
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    border: `1px solid rgba(13,43,82,0.15)`, fontFamily: FONTS.sans,
                    fontSize: 15, color: COLORS.navy, outline: 'none', boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 14, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="I&apos;m interested in building a custom home in the Corpus Christi area..."
                  style={{
                    width: '100%', padding: '14px 16px', borderRadius: 10,
                    border: `1px solid rgba(13,43,82,0.15)`, fontFamily: FONTS.sans,
                    fontSize: 15, color: COLORS.navy, outline: 'none', resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: COLORS.gold,
                  color: COLORS.navy,
                  fontFamily: FONTS.sans,
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '16px 40px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
