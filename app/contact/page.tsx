'use client';
import type { CSSProperties } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const contactCards = [
  {
    label: 'Call Us',
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    detail: 'Mon – Sat, 8am – 6pm',
  },
  {
    label: 'Email Us',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    detail: 'Response within 24 hours',
  },
  {
    label: 'Office',
    value: 'Corpus Christi, TX',
    href: '#',
    detail: 'By appointment only',
  },
];

const inputStyle: CSSProperties = {
  width: '100%',
  padding: '13px 16px',
  borderRadius: 10,
  border: `1px solid rgba(13,43,82,0.14)`,
  fontFamily: FONTS.sans,
  fontSize: 14,
  color: COLORS.navy,
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#FAFBFC',
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>
        {/* Page header */}
        <section
          style={{
            backgroundColor: COLORS.navy,
            padding: '88px 24px 72px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 11,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: COLORS.gold,
              fontWeight: 600,
              margin: 0,
            }}
          >
            Get In Touch
          </p>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              color: COLORS.white,
              marginTop: 14,
              marginBottom: 0,
              letterSpacing: '-0.01em',
              lineHeight: 1.08,
            }}
          >
            Contact Us
          </h1>
        </section>

        <section style={{ maxWidth: 860, margin: '0 auto', padding: '72px 32px 88px' }}>
          {/* Contact cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
              marginBottom: 56,
            }}
          >
            {contactCards.map(card => (
              <div
                key={card.label}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 14,
                  padding: '28px 24px',
                  boxShadow: '0 4px 20px rgba(13,43,82,0.07)',
                  textAlign: 'center',
                  border: '1px solid rgba(13,43,82,0.05)',
                }}
              >
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: COLORS.gold,
                    fontWeight: 700,
                    margin: '0 0 14px',
                  }}
                >
                  {card.label}
                </p>
                <a
                  href={card.href}
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 19,
                    fontWeight: 400,
                    color: COLORS.navy,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {card.value}
                </a>
                <p style={{ fontFamily: FONTS.sans, fontSize: 12, color: COLORS.grayText, margin: 0 }}>
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Inquiry form */}
          <div
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: '44px 48px',
              boxShadow: '0 4px 24px rgba(13,43,82,0.07)',
              border: '1px solid rgba(13,43,82,0.05)',
            }}
          >
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 400,
                color: COLORS.navy,
                margin: '0 0 6px',
                letterSpacing: '-0.01em',
              }}
            >
              Send a Message
            </h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.grayText, margin: '0 0 32px' }}>
              Tell us about your project — we reply within one business day.
            </p>

            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                    First Name
                  </label>
                  <input type="text" placeholder="John" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                    Last Name
                  </label>
                  <input type="text" placeholder="Smith" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Email
                </label>
                <input type="email" placeholder="john@example.com" style={inputStyle} />
              </div>

              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Phone
                </label>
                <input type="tel" placeholder="(361) 555-0123" style={inputStyle} />
              </div>

              <div>
                <label style={{ fontFamily: FONTS.sans, fontSize: 13, fontWeight: 500, color: COLORS.navy, display: 'block', marginBottom: 6 }}>
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  placeholder="I'm interested in building a custom home in the Corpus Christi area..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: COLORS.gold,
                  color: '#fff',
                  fontFamily: FONTS.sans,
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '14px 40px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  letterSpacing: '0.02em',
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
