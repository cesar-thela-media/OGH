'use client';
import { useState, type FormEvent } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { MeetingScheduler } from '@/components/meeting-scheduler';
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
        <section style={{ backgroundColor: COLORS.navy, padding: '88px 24px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>Get In Touch</p>
          <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: COLORS.white, marginTop: 14, marginBottom: 0, lineHeight: 1.08 }}>Contact Us</h1>
        </section>

        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 32px 88px' }}>
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

        {/* Schedule a Consultation */}
        <section className="bg-navy py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center mb-10">
            <p className="text-gold text-xs tracking-[0.18em] uppercase font-semibold font-body">Schedule a Visit</p>
            <h2 className="text-white text-3xl md:text-4xl font-heading font-semibold mt-4">Book a Consultation</h2>
            <p className="text-white/50 font-body mt-3">Pick a date and time — we&apos;ll confirm within 24 hours.</p>
          </div>
          <div className="flex justify-center px-4">
            <MeetingScheduler
              title="Schedule a Consultation"
              description="Choose your preferred dates and we'll reach out to confirm."
              scheduleButtonText="Request Consultation"
              cancelButtonText="Cancel"
              onSchedule={(d) => { if (d.startDate) alert(`Consultation requested for ${d.startDate.toDateString()}. We'll confirm shortly.`); }}
              onCancel={() => {}}
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
