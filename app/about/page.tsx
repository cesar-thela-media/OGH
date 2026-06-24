'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CredentialList from '@/components/CredentialList';
import TeamBadges from '@/components/TeamBadges';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const faqs = [
  {
    q: 'Can you build on my lot?',
    a: 'Absolutely. We build on customer-owned lots throughout the Corpus Christi area, Rockport, Portland, and the entire Texas Coastal Bend. If you don\'t have a lot yet, we also have land available in select communities — and we can help you find the right one.',
  },
  {
    q: 'How long does the build process take?',
    a: 'Most custom homes take between 8 and 14 months from groundbreaking to closing, depending on size, complexity, and finishes. We\'ll give you a realistic timeline before we break ground — and we stick to it.',
  },
  {
    q: 'What areas do you build in?',
    a: 'We build primarily in Rockport, Corpus Christi, Portland, Port Aransas, Laguna Vista, and Padre Island. If you have land in the surrounding Coastal Bend area, reach out and we\'ll let you know if we can work there.',
  },
  {
    q: 'Do I get to choose my own finishes and floor plan?',
    a: 'Yes — that\'s what makes us truly custom. You choose your floor plan (or we design one together), and every finish decision is yours: flooring, cabinetry, countertops, fixtures, exterior materials, and more. Nothing is pre-packaged.',
  },
  {
    q: 'Is my home insured during construction?',
    a: 'Yes. We carry full builder\'s risk insurance for the duration of construction. All subcontractors are licensed and insured as well, so you\'re covered at every stage.',
  },
  {
    q: 'Do you handle permits and city inspections?',
    a: 'We handle everything — pulling permits, coordinating with the city or county, and scheduling every required inspection. You don\'t have to chase down a single form.',
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>

        {/* HERO */}
        <section style={{ position: 'relative', height: '62vh', minHeight: 480, overflow: 'hidden' }}>
          <img
            src="/images/hero-mansion.jpg"
            alt="Ocean Glory custom coastal home"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,43,82,0.55) 0%, rgba(13,43,82,0.65) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 60px 72px' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 14px' }}>
              About Ocean Glory Homes
            </p>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(38px, 5vw, 72px)', fontWeight: 400, color: COLORS.white, margin: 0, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 700 }}>
              A Truly Custom<br />
              <em style={{ fontStyle: 'italic', color: COLORS.gold }}>Home Builder.</em>
            </h1>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="sp" style={{ backgroundColor: COLORS.white, paddingTop: 80, paddingBottom: 80 }}>
          <div className="g2" style={{ maxWidth: 1080, margin: '0 auto', gap: 72, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
                Family Owned &amp; Operated
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 24px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                One Team. One Vision.<br />
                <em style={{ fontStyle: 'italic', color: COLORS.gold }}>One Standard.</em>
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 20px' }}>
                For over a decade, Ocean Glory Homes has delivered custom luxury homes in the Texas Coastal Bend without the friction of traditional architect-to-builder handoffs. We are a family-owned operation that has built hundreds of homes in Corpus Christi, Rockport, Portland, and across the coast.
              </p>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: 0 }}>
                When the same team that draws the plans also swings the hammers, there&apos;s nowhere to hide — and nowhere to cut corners. Every project stays under one roof from first sketch to final walkthrough.
              </p>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1599409637219-d04e9a2db432?auto=format&fit=crop&w=900&q=80"
                alt="Completed Ocean Glory coastal home"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* BUILD ON YOUR LOT */}
        <section className="sp" style={{ backgroundColor: COLORS.navy, paddingTop: 80, paddingBottom: 80 }}>
          <div className="g2" style={{ maxWidth: 1080, margin: '0 auto', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 16px' }}>
                Flexibility Is the Foundation
              </p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.white, margin: '0 0 24px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                Build on Your Lot —<br />
                <em style={{ fontStyle: 'italic', color: COLORS.gold }}>or Ours.</em>
              </h2>
              <p style={{ fontFamily: FONTS.body, fontSize: 15, color: 'rgba(255,255,255,0.70)', lineHeight: 1.8, margin: '0 0 32px' }}>
                Already have land on the Texas coast? We&apos;ll build on it. No lot yet? We have land available in select communities throughout the Coastal Bend — let us help you find the right place before we design the right home.
              </p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link
                  href="/for-sale"
                  style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, backgroundColor: COLORS.gold, color: COLORS.navy, padding: '13px 28px', borderRadius: 999, textDecoration: 'none' }}
                >
                  View Available Homes
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: COLORS.white, padding: '13px 28px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
            <div className="g2" style={{ gap: 14 }}>
              {[
                { label: 'Homes Built', value: '200+' },
                { label: 'Years Experience', value: '10+' },
                { label: 'Texas Communities', value: '6+' },
                { label: 'Customer Rating', value: 'A+' },
              ].map(stat => (
                <div key={stat.label} style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 24px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p style={{ fontFamily: FONTS.heading, fontSize: 42, fontWeight: 400, color: COLORS.gold, margin: 0, lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontFamily: FONTS.body, fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '8px 0 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE PROCESS */}
        <section className="sp" style={{ backgroundColor: COLORS.white, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>How It Works</p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>From Idea to Keys</h2>
            </div>
            <div className="g4" style={{ gap: 24 }}>
              {[
                { step: '01', title: 'Design', body: 'We sit down with you to understand your vision, lifestyle, and budget. Together we develop floor plans and elevations tailored exactly to you.' },
                { step: '02', title: 'Permit & Plan', body: 'We handle every permit, engineering submission, and city approval. You don\'t lift a finger on paperwork.' },
                { step: '03', title: 'Build', body: 'Our crews break ground. You get regular photo and video updates, and site visits whenever you want. No surprises.' },
                { step: '04', title: 'Walkthrough & Close', body: 'A detailed final walkthrough — every punch-list item resolved before you sign. Then you get the keys.' },
              ].map(p => (
                <div key={p.step} style={{ borderRadius: 16, padding: '32px 28px', backgroundColor: COLORS.offWhite, border: '1px solid rgba(13,43,82,0.07)' }}>
                  <p style={{ fontFamily: FONTS.heading, fontSize: 42, fontWeight: 400, color: COLORS.gold, margin: '0 0 16px', lineHeight: 1, fontStyle: 'italic' }}>{p.step}</p>
                  <h3 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>{p.title}</h3>
                  <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sp" style={{ backgroundColor: COLORS.offWhite, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>Common Questions</p>
              <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.navy, margin: 0, letterSpacing: '-0.02em' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{ borderBottom: '1px solid rgba(13,43,82,0.10)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', textAlign: 'left', background: 'none', border: 'none',
                      padding: '22px 0', cursor: 'pointer',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                    }}
                  >
                    <span style={{ fontFamily: FONTS.body, fontSize: 15, fontWeight: 600, color: COLORS.navy, lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{
                      width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                      backgroundColor: openFaq === i ? COLORS.gold : 'rgba(13,43,82,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.2s',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d={openFaq === i ? 'M2 5h6' : 'M5 2v6M2 5h6'} stroke={openFaq === i ? COLORS.navy : COLORS.grayText} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: 22 }}>
                      <p style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.grayText, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="sp" style={{ backgroundColor: COLORS.navy, paddingTop: 72, paddingBottom: 80 }}>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>Verified &amp; Credentialed</p>
            <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: COLORS.white, margin: '0 0 40px', letterSpacing: '-0.02em' }}>
              Trusted by Homeowners Across the Texas Coast.
            </h2>
            <CredentialList />
            <div style={{ marginTop: 36 }}>
              <TeamBadges />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.white, padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(28px, 3.5vw, 46px)', fontWeight: 400, color: COLORS.navy, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Ready to Start Your Custom Home?
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, margin: '0 0 32px', lineHeight: 1.6 }}>
            Call or send a message. We&apos;ll get back to you within one business day.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '15px 36px', borderRadius: 999, textDecoration: 'none' }}
            >
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              style={{ display: 'inline-block', backgroundColor: 'transparent', color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '15px 36px', borderRadius: 999, textDecoration: 'none', border: `2px solid rgba(13,43,82,0.15)` }}
            >
              Send a Message
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
