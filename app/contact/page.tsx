'use client';
import { useState, type FormEvent, type CSSProperties } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

// ── Webhook endpoint (replace with your n8n webhook URL) ──
const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';

const inputStyle: CSSProperties = {
  width: '100%', padding: '14px 16px', borderRadius: 10,
  border: `1px solid rgba(13,43,82,0.14)`, fontFamily: FONTS.body,
  fontSize: 14, color: COLORS.navy, outline: 'none',
  boxSizing: 'border-box', backgroundColor: '#FAFBFC',
};

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (WEBHOOK_URL) {
      setStatus('sending');
      try {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        setStatus('sent');
        form.reset();
      } catch { setStatus('idle'); }
    } else {
      setStatus('sent');
      form.reset();
    }
  };

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        <section style={{ backgroundColor: COLORS.navy, padding: '88px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Get In Touch
          </p>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: COLORS.white, marginTop: 14, marginBottom: 0, lineHeight: 1.08 }}>
            Contact Us
          </h1>
        </section>

        {/* Two-column layout */}
        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 32px 88px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }}>

            {/* LEFT: Contact details */}
            <div>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 32px' }}>
                Let&apos;s Talk
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { label: 'Call Us', value: CONTACT.phone, href: CONTACT.phoneHref, icon: '📞' },
                  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: '✉️' },
                  { label: 'Office', value: 'Corpus Christi, Texas', href: '#', icon: '📍' },
                ].map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 16,
                      padding: '20px 24px', backgroundColor: COLORS.white,
                      borderRadius: 14, textDecoration: 'none',
                      boxShadow: '0 2px 12px rgba(13,43,82,0.05)',
                      border: '1px solid rgba(13,43,82,0.05)',
                    }}
                  >
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px' }}>
                        {item.label}
                      </p>
                      <p style={{ fontFamily: FONTS.heading, fontSize: 18, color: COLORS.navy, margin: 0 }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Service area */}
              <div style={{ marginTop: 32, backgroundColor: COLORS.white, borderRadius: 14, padding: '24px', boxShadow: '0 2px 12px rgba(13,43,82,0.05)' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 8px' }}>
                  Service Area
                </p>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: 0, lineHeight: 1.6 }}>
                  Rockport · Portland · Corpus Christi · Port Aransas · Laguna Vista · Padre Island, Texas
                </p>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 40, boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 6px' }}>
                Send a Message
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 28px' }}>
                We reply within one business day.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input type="text" name="firstName" placeholder="First Name" required style={inputStyle} />
                <input type="text" name="lastName" placeholder="Last Name" required style={inputStyle} />
                <input type="email" name="email" placeholder="Email address" required style={inputStyle} />
                <input type="tel" name="phone" placeholder="Phone number" style={inputStyle} />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    backgroundColor: COLORS.gold, color: '#fff',
                    fontFamily: FONTS.body, fontSize: 15, fontWeight: 600,
                    padding: '15px 32px', borderRadius: 999, border: 'none',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                >
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
