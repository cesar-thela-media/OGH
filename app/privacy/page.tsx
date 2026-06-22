import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, padding: '64px 32px 88px', maxWidth: 820, margin: '0 auto' }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, color: COLORS.navy, margin: '0 0 32px' }}>Privacy Policy</h1>
        <div style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 20 }}><strong style={{ color: COLORS.navy }}>Last Updated:</strong> {new Date().getFullYear()}</p>
          <p style={{ marginBottom: 20 }}>Ocean Glory Homes respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us.</p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '32px 0 16px' }}>Information We Collect</h2>
          <p style={{ marginBottom: 20 }}>We collect information you voluntarily provide through our contact forms, including your name, email address, phone number, and project details. We also collect basic analytics data about website usage.</p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '32px 0 16px' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: 20 }}>We use your information to respond to inquiries, provide information about our services, and improve our website. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 600, color: COLORS.navy, margin: '32px 0 16px' }}>Contact Us</h2>
          <p>If you have questions about this policy, contact us at (361) 765-8888 or info@oceangloryhomes.com.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
