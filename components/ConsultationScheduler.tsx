'use client';
import { useState } from 'react';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { ChevronLeft, ChevronRight, Clock, Calendar, User, Mail, Phone } from 'lucide-react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const TIME_SLOTS = ['9:00 AM','10:00 AM','11:00 AM','1:00 PM','2:00 PM','3:00 PM','4:00 PM'];

interface Props { onBooked?: () => void }

export default function ConsultationScheduler({ onBooked }: Props) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<'datetime' | 'info'>('datetime');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const isPast = (d: number) => {
    const date = new Date(currentYear, currentMonth, d);
    date.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return date < t;
  };
  const isWeekend = (d: number) => [0,6].includes(new Date(currentYear, currentMonth, d).getDay());

  const formatDate = (d: Date) => `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

  const handleSubmit = () => {
    if (name && email && selectedDate && selectedTime) {
      const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK || '';
      if (WEBHOOK_URL) {
        fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'consultation', name, email, phone, date: formatDate(selectedDate), time: selectedTime }) }).catch(() => {});
      }
      setSubmitted(true);
      onBooked?.();
    }
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: '48px 40px', textAlign: 'center', boxShadow: '0 2px 16px rgba(13,43,82,0.06)', maxWidth: 560, margin: '0 auto' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: COLORS.gold, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={COLORS.navy} strokeWidth="2.5"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 style={{ fontFamily: FONTS.heading, fontSize: 24, fontWeight: 600, color: COLORS.navy, margin: '0 0 8px' }}>Consultation Requested</h3>
        <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, margin: 0, lineHeight: 1.6 }}>We&apos;ll confirm your {formatDate(selectedDate!)} at {selectedTime} appointment within 24 hours.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {step === 'datetime' ? (
        <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: '36px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
          <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>Schedule a Consultation</h3>
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 28px' }}>Pick a date and time — we&apos;ll reach out to confirm.</p>

          {/* Month nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <button onClick={() => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); } else setCurrentMonth(m => m - 1); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 8 }}><ChevronLeft size={20} color={COLORS.navy} /></button>
            <span style={{ fontFamily: FONTS.heading, fontSize: 18, fontWeight: 600, color: COLORS.navy }}>{MONTHS[currentMonth]} {currentYear}</span>
            <button onClick={() => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); } else setCurrentMonth(m => m + 1); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, borderRadius: 8 }}><ChevronRight size={20} color={COLORS.navy} /></button>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 8 }}>
            {DAYS.map(d => <div key={d} style={{ textAlign: 'center', fontFamily: FONTS.body, fontSize: 11, fontWeight: 600, color: COLORS.grayText, padding: '4px 0' }}>{d}</div>)}
          </div>

          {/* Day grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const d = i + 1;
              const past = isPast(d);
              const weekend = isWeekend(d);
              const selected = selectedDate && selectedDate.getDate() === d && selectedDate.getMonth() === currentMonth;
              return (
                <button
                  key={d}
                  disabled={past || weekend}
                  onClick={() => { setSelectedDate(new Date(currentYear, currentMonth, d)); setSelectedTime(null); }}
                  style={{
                    padding: '10px 0', borderRadius: 10, border: 'none', cursor: past || weekend ? 'default' : 'pointer',
                    backgroundColor: selected ? COLORS.gold : 'transparent',
                    color: past || weekend ? 'rgba(123,135,148,0.3)' : selected ? COLORS.navy : COLORS.navy,
                    fontFamily: FONTS.body, fontSize: 14, fontWeight: selected ? 700 : 400,
                    opacity: past || weekend ? 0.4 : 1,
                  }}
                >{d}</button>
              );
            })}
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid rgba(13,43,82,0.08)` }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 13, fontWeight: 600, color: COLORS.navy, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} color={COLORS.gold} /> {formatDate(selectedDate)}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {TIME_SLOTS.map(t => (
                  <button key={t} onClick={() => setSelectedTime(t)} style={{
                    padding: '10px 8px', borderRadius: 10, border: selectedTime === t ? `2px solid ${COLORS.gold}` : '1px solid rgba(13,43,82,0.10)',
                    backgroundColor: selectedTime === t ? COLORS.gold + '15' : 'transparent',
                    color: selectedTime === t ? COLORS.navy : COLORS.grayText,
                    fontFamily: FONTS.body, fontSize: 13, fontWeight: selectedTime === t ? 700 : 500, cursor: 'pointer',
                  }}>{t}</button>
                ))}
              </div>
            </div>
          )}

          {/* Continue */}
          {selectedDate && selectedTime && (
            <button onClick={() => setStep('info')} style={{
              width: '100%', marginTop: 28, padding: '14px 0', borderRadius: 999, border: 'none',
              backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, cursor: 'pointer',
            }}>Continue →</button>
          )}
        </div>
      ) : (
        <div style={{ backgroundColor: COLORS.white, borderRadius: 20, padding: '36px', boxShadow: '0 2px 16px rgba(13,43,82,0.06)' }}>
          <button onClick={() => setStep('datetime')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: 20, fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, display: 'flex', alignItems: 'center', gap: 6 }}><ChevronLeft size={16} /> Back</button>
          <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '0 0 4px' }}>Your Details</h3>
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, margin: '0 0 8px' }}>{formatDate(selectedDate!)} at {selectedTime}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(13,43,82,0.10)', backgroundColor: '#FAFBFC' }}>
              <User size={18} color={COLORS.gold} /><input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={{ border: 'none', outline: 'none', flex: 1, fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, backgroundColor: 'transparent' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(13,43,82,0.10)', backgroundColor: '#FAFBFC' }}>
              <Mail size={18} color={COLORS.gold} /><input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} style={{ border: 'none', outline: 'none', flex: 1, fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, backgroundColor: 'transparent' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(13,43,82,0.10)', backgroundColor: '#FAFBFC' }}>
              <Phone size={18} color={COLORS.gold} /><input type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} style={{ border: 'none', outline: 'none', flex: 1, fontFamily: FONTS.body, fontSize: 14, color: COLORS.navy, backgroundColor: 'transparent' }} />
            </div>
          </div>
          <button onClick={handleSubmit} disabled={!name || !email} style={{
            width: '100%', marginTop: 24, padding: '14px 0', borderRadius: 999, border: 'none',
            backgroundColor: name && email ? COLORS.gold : 'rgba(201,168,78,0.3)',
            color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700,
            cursor: name && email ? 'pointer' : 'default',
          }}>Confirm Consultation</button>
        </div>
      )}
    </div>
  );
}
