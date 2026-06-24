'use client';
import { useState, type FormEvent } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';

const inputS: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 10,
  border: '1px solid rgba(13,43,82,0.14)',
  fontFamily: FONTS.body,
  fontSize: 14,
  color: COLORS.navy,
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#FAFBFC',
};

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

async function postToWebhook(payload: Record<string, string>) {
  if (!WEBHOOK_URL) return true;
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export default function ContactPage() {
  // --- Contact form state ---
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setContactStatus('sending');
    try {
      await postToWebhook({ form_type: 'contact', source: 'Contact Page', ...raw });
      setContactStatus('sent');
      form.reset();
    } catch {
      setContactStatus('error');
    }
  };

  // --- Consultation form state ---
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultName, setConsultName] = useState('');
  const [consultEmail, setConsultEmail] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultStatus, setConsultStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleConsultation = async () => {
    if (!consultName || !consultEmail || !selectedDay || !selectedTime) return;
    setConsultStatus('sending');
    try {
      await postToWebhook({
        form_type: 'consultation',
        source: 'Consultation Scheduler',
        name: consultName,
        email: consultEmail,
        phone: consultPhone,
        preferred_day: `Day ${selectedDay}`,
        preferred_time: selectedTime,
      });
      setConsultStatus('sent');
      setConsultName('');
      setConsultEmail('');
      setConsultPhone('');
      setSelectedDay(null);
      setSelectedTime(null);
    } catch {
      setConsultStatus('error');
    }
  };

  const consultReady = consultName && consultEmail && selectedDay && selectedTime;

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>

        {/* CONTACT FORM */}
        <section style={{ maxWidth: 1080, margin: '0 auto', padding: '64px 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }}>

            {/* Left: contact info */}
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>
                Get in Touch
              </p>
              <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 32px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Let&apos;s Talk About Your Home.
              </h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Call Us', value: CONTACT.phone, href: CONTACT.phoneHref },
                  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { label: 'Service Area', value: 'Rockport · Portland · Corpus Christi', href: '#' },
                ].map(item => (
                  <a key={item.label} href={item.href} style={{ display: 'flex', flexDirection: 'column', gap: 3, padding: '18px 22px', backgroundColor: COLORS.white, borderRadius: 14, textDecoration: 'none', border: '1px solid rgba(13,43,82,0.05)', boxShadow: '0 2px 12px rgba(13,43,82,0.05)' }}>
                    <span style={{ fontFamily: FONTS.body, fontSize: 10, fontWeight: 700, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{item.label}</span>
                    <span style={{ fontFamily: FONTS.heading, fontSize: 18, color: COLORS.navy }}>{item.value}</span>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: '20px 22px', backgroundColor: 'rgba(201,168,78,0.08)', borderRadius: 14, border: '1px solid rgba(201,168,78,0.22)' }}>
                <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.navy, margin: 0, lineHeight: 1.7 }}>
                  We typically respond within one business day. For the fastest response, call us directly.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: 40, boxShadow: '0 2px 20px rgba(13,43,82,0.07)', border: '1px solid rgba(13,43,82,0.05)' }}>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 6px' }}>
                Send a Message
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, margin: '0 0 28px' }}>
                Tell us about your project and we&apos;ll be in touch.
              </p>

              {contactStatus === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(201,168,78,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: FONTS.heading, fontSize: 24, color: COLORS.navy, margin: '0 0 8px' }}>Message Received</p>
                  <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 24px' }}>We&apos;ll follow up within one business day.</p>
                  <button onClick={() => setContactStatus('idle')} style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.navy, background: 'none', border: '1.5px solid rgba(13,43,82,0.18)', padding: '10px 24px', borderRadius: 999, cursor: 'pointer' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <input type="text" name="firstName" placeholder="First Name" required style={inputS} />
                    <input type="text" name="lastName" placeholder="Last Name" required style={inputS} />
                  </div>
                  <input type="email" name="email" placeholder="Email address" required style={inputS} />
                  <input type="tel" name="phone" placeholder="Phone number" style={inputS} />
                  <select name="interest" style={{ ...inputS, appearance: 'none', backgroundImage: 'none' }}>
                    <option value="">What are you interested in?</option>
                    <option value="custom-build">Custom home build</option>
                    <option value="lot-purchase">Lot purchase + build</option>
                    <option value="for-sale-home">For sale home</option>
                    <option value="new-construction">New construction</option>
                    <option value="general">General inquiry</option>
                  </select>
                  <textarea name="message" rows={4} placeholder="Tell us about your project..." style={{ ...inputS, resize: 'vertical' }} />
                  {contactStatus === 'error' && (
                    <p style={{ fontFamily: FONTS.body, fontSize: 13, color: '#C0392B', margin: 0 }}>
                      Something went wrong. Please call us directly at {CONTACT.phone}.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={contactStatus === 'sending'}
                    style={{ backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 32px', borderRadius: 999, border: 'none', cursor: contactStatus === 'sending' ? 'wait' : 'pointer', opacity: contactStatus === 'sending' ? 0.7 : 1, marginTop: 4 }}
                  >
                    {contactStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* CONSULTATION SCHEDULER */}
        <section style={{ backgroundColor: COLORS.white, padding: '80px 32px', borderTop: '1px solid rgba(13,43,82,0.06)' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 700, color: COLORS.gold, textTransform: 'uppercase', letterSpacing: '0.16em', margin: '0 0 10px' }}>
                Schedule a Visit
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                Book a Consultation
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: 0 }}>
                Choose a preferred day and time — we&apos;ll confirm within 24 hours.
              </p>
            </div>

            {consultStatus === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '56px 24px', backgroundColor: COLORS.offWhite, borderRadius: 20 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'rgba(201,168,78,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontFamily: FONTS.heading, fontSize: 28, color: COLORS.navy, margin: '0 0 10px' }}>Request Received</p>
                <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 28px', lineHeight: 1.7 }}>
                  We&apos;ll call you within 24 hours to confirm your consultation.
                </p>
                <button onClick={() => setConsultStatus('idle')} style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.navy, background: 'none', border: '1.5px solid rgba(13,43,82,0.18)', padding: '10px 24px', borderRadius: 999, cursor: 'pointer' }}>
                  Schedule Another
                </button>
              </div>
            ) : (
              <div style={{ backgroundColor: COLORS.offWhite, borderRadius: 20, padding: '36px 40px', border: '1px solid rgba(13,43,82,0.05)' }}>

                {/* Day picker */}
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 14px' }}>
                    Preferred Day
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
                    {DAYS.map(d => (
                      <p key={d} style={{ fontFamily: FONTS.body, fontSize: 10, color: COLORS.grayText, margin: 0, textAlign: 'center', paddingBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{d}</p>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                    {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        style={{
                          fontFamily: FONTS.body, fontSize: 13, fontWeight: 500,
                          padding: '10px 0', borderRadius: 8, textAlign: 'center',
                          border: selectedDay === day ? `2px solid ${COLORS.gold}` : '2px solid transparent',
                          backgroundColor: selectedDay === day ? 'rgba(201,168,78,0.12)' : COLORS.white,
                          color: selectedDay === day ? COLORS.navy : COLORS.grayText,
                          cursor: 'pointer',
                          transition: 'all 0.12s',
                        }}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time picker */}
                <div style={{ marginBottom: 28 }}>
                  <p style={{ fontFamily: FONTS.body, fontSize: 11, fontWeight: 700, color: COLORS.navy, textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 14px' }}>
                    Preferred Time
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                    {TIMES.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        style={{
                          fontFamily: FONTS.body, fontSize: 13, fontWeight: 500,
                          padding: '11px 8px', borderRadius: 8,
                          border: selectedTime === time ? `2px solid ${COLORS.gold}` : '2px solid rgba(13,43,82,0.10)',
                          backgroundColor: selectedTime === time ? 'rgba(201,168,78,0.12)' : COLORS.white,
                          color: selectedTime === time ? COLORS.navy : COLORS.grayText,
                          cursor: 'pointer',
                          transition: 'all 0.12s',
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={consultName}
                    onChange={e => setConsultName(e.target.value)}
                    style={{ ...inputS, backgroundColor: COLORS.white }}
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    value={consultEmail}
                    onChange={e => setConsultEmail(e.target.value)}
                    style={{ ...inputS, backgroundColor: COLORS.white }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={consultPhone}
                    onChange={e => setConsultPhone(e.target.value)}
                    style={{ ...inputS, backgroundColor: COLORS.white }}
                  />
                </div>

                {consultStatus === 'error' && (
                  <p style={{ fontFamily: FONTS.body, fontSize: 13, color: '#C0392B', margin: '0 0 14px' }}>
                    Something went wrong. Please call us at {CONTACT.phone}.
                  </p>
                )}

                <button
                  onClick={handleConsultation}
                  disabled={!consultReady || consultStatus === 'sending'}
                  style={{
                    width: '100%', padding: '16px', borderRadius: 12,
                    backgroundColor: consultReady ? COLORS.gold : 'rgba(201,168,78,0.35)',
                    color: COLORS.navy,
                    fontFamily: FONTS.body, fontSize: 15, fontWeight: 700,
                    border: 'none',
                    cursor: consultReady && consultStatus !== 'sending' ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.15s',
                  }}
                >
                  {consultStatus === 'sending' ? 'Sending...' : 'Request Consultation'}
                </button>

                <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.grayText, textAlign: 'center', margin: '14px 0 0' }}>
                  Free · No commitment · We confirm within 24 hours
                </p>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
