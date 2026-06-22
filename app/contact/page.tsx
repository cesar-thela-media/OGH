'use client';
import { useState, type FormEvent } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';

const inputS = {
  width: '100%', padding: '14px 16px', borderRadius: 10,
  border: '1px solid rgba(13,43,82,0.14)', fontFamily: FONTS.body,
  fontSize: 14, color: COLORS.navy, outline: 'none',
  boxSizing: 'border-box' as const, backgroundColor: '#FAFBFC',
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
        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 32px 88px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }}>

            {/* LEFT COLUMN */}
            <div>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 32px' }}>Let&apos;s Talk</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { label: 'Call Us', value: CONTACT.phone, href: CONTACT.phoneHref, icon: '\uD83D\uDCDE' },
                  { label: 'Email', value: CONTACT.email, href: 'mailto:' + CONTACT.email, icon: '\u2709\uFE0F' },
                  { label: 'Office', value: 'Corpus Christi, Texas', href: '#', icon: '\uD83D\uDCCD' },
                ].map(function (item) {
                  return (
                    <a key={item.label} href={item.href} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 16,
                      padding: '20px 24px', backgroundColor: COLORS.white,
                      borderRadius: 14, textDecoration: 'none',
                      boxShadow: '0 2px 12px rgba(13,43,82,0.05)',
                      border: '1px solid rgba(13,43,82,0.05)',
                    }}>
                      <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px' }}>{item.label}</p>
                        <p style={{ fontFamily: FONTS.heading, fontSize: 18, color: COLORS.navy, margin: 0 }}>{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div style={{ marginTop: 32, backgroundColor: COLORS.white, borderRadius: 14, padding: '24px', boxShadow: '0 2px 12px rgba(13,43,82,0.05)' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 8px' }}>Service Area</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: 0, lineHeight: 1.6 }}>Rockport &middot; Portland &middot; Corpus Christi &middot; Port Aransas &middot; Laguna Vista &middot; Padre Island, Texas</p>
              </div>

              <a href="https://maps.google.com/?q=Corpus+Christi+Texas" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                marginTop: 20, padding: '18px 24px',
                backgroundColor: COLORS.white, borderRadius: 14,
                textDecoration: 'none',
                boxShadow: '0 2px 12px rgba(13,43,82,0.05)',
                border: '1px solid rgba(13,43,82,0.05)',
              }}>
                <span style={{ fontSize: 20 }}>{'\uD83D\uDDFA\uFE0F'}</span>
                <div>
                  <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 4px' }}>View on Map</p>
                  <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, margin: 0 }}>Open in Google Maps &rarr;</p>
                </div>
              </a>
            </div>

            {/* RIGHT COLUMN — FORM */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 40, boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 6px' }}>Send a Message</h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 28px' }}>We reply within one business day.</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input type="text" name="firstName" placeholder="First Name" required style={inputS} />
                <input type="text" name="lastName" placeholder="Last Name" required style={inputS} />
                <input type="email" name="email" placeholder="Email address" required style={inputS} />
                <input type="tel" name="phone" placeholder="Phone number" style={inputS} />
                <textarea name="message" rows={4} placeholder="Tell us about your project..." style={{ ...inputS, resize: 'vertical' }} />
                <button type="submit" disabled={status === 'sending'} style={{
                  backgroundColor: COLORS.gold, color: '#fff',
                  fontFamily: FONTS.body, fontSize: 15, fontWeight: 600,
                  padding: '15px 32px', borderRadius: 999, border: 'none',
                  cursor: status === 'sending' ? 'wait' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}>
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent \u2713' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Schedule a Consultation — custom cal.com-style */}
        <section style={{ backgroundColor: COLORS.offWhite, padding: '80px 24px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto', backgroundColor: COLORS.white, borderRadius: 24, padding: '40px 44px', boxShadow: '0 4px 32px rgba(13,43,82,0.08)', border: '1px solid rgba(13,43,82,0.05)' }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 8px' }}>Schedule a Visit</p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 600, color: COLORS.navy, margin: 0 }}>Book a Consultation</h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '8px 0 0' }}>Choose a date — we&apos;ll confirm within 24 hours.</p>
            </div>

            {/* Date Picker */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 600, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Select a Date</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8, textAlign: 'center' }}>
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                  <p key={d} style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.grayText, margin: 0, paddingBottom: 4 }}>{d}</p>
                ))}
                {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
                  <button
                    key={day}
                    style={{
                      fontFamily: FONTS.body, fontSize: 13, fontWeight: 500,
                      padding: '10px 0', borderRadius: 10,
                      border: day === 15 ? `2px solid ${COLORS.gold}` : '1px solid transparent',
                      backgroundColor: day === 15 ? 'rgba(201,168,78,0.10)' : 'transparent',
                      color: day === 15 ? COLORS.navy : COLORS.grayText,
                      cursor: 'pointer',
                    }}
                  >{day}</button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div style={{ marginBottom: 28 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, fontWeight: 600, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Preferred Time</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'].map(time => (
                  <button key={time} style={{
                    fontFamily: FONTS.body, fontSize: 13, fontWeight: 500,
                    padding: '10px 12px', borderRadius: 10,
                    border: time === '11:00 AM' ? `2px solid ${COLORS.gold}` : '1px solid rgba(13,43,82,0.10)',
                    backgroundColor: time === '11:00 AM' ? 'rgba(201,168,78,0.10)' : 'transparent',
                    color: time === '11:00 AM' ? COLORS.navy : COLORS.grayText,
                    cursor: 'pointer',
                  }}>{time}</button>
                ))}
              </div>
            </div>

            {/* Quick Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              <input type="text" placeholder="Your name" style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1px solid rgba(13,43,82,0.14)', fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, outline: 'none', boxSizing: 'border-box' }} />
              <input type="email" placeholder="Email address" style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1px solid rgba(13,43,82,0.14)', fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, outline: 'none', boxSizing: 'border-box' }} />
              <input type="tel" placeholder="Phone number" style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1px solid rgba(13,43,82,0.14)', fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, outline: 'none', boxSizing: 'border-box' }} />
            </div>

            <button style={{
              width: '100%', padding: '16px', borderRadius: 14,
              backgroundColor: COLORS.gold, color: COLORS.navy,
              fontFamily: FONTS.body, fontSize: 15, fontWeight: 700,
              border: 'none', cursor: 'pointer',
            }}>
              Request Consultation
            </button>

            <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText, textAlign: 'center', margin: '16px 0 0' }}>
              Free consultation · No commitment required
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
