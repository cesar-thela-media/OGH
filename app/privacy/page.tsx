import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const sections = [
  {
    heading: 'Information We Collect',
    body: `We collect information you voluntarily provide when contacting us through our website — including your name, email address, phone number, and details about your project. We also collect non-personal technical information through standard analytics tools (such as page views and general location data) to improve our website experience. We do not use third-party advertising cookies or tracking pixels.`,
  },
  {
    heading: 'How We Use Your Information',
    body: `We use the information you provide solely to respond to your inquiries, schedule consultations, and communicate with you about our services. We do not sell, rent, or share your personal information with third parties for marketing or advertising purposes. Project details shared with us are treated as confidential.`,
  },
  {
    heading: 'Data Security',
    body: `We take reasonable measures to protect the information you provide against unauthorized access or disclosure. Our website uses HTTPS encryption for all data transmitted between your browser and our servers. However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: 'Third-Party Services',
    body: `Our website may link to third-party services (such as Google Maps or social media platforms). These services have their own privacy policies that govern the information they collect. We are not responsible for the privacy practices of third-party sites.`,
  },
  {
    heading: 'Cookies',
    body: `Our website uses essential cookies to ensure basic functionality. We do not use tracking cookies for advertising. You can disable cookies in your browser settings, though some site features may not function properly as a result.`,
  },
  {
    heading: 'Your Rights',
    body: `You may contact us at any time to request that we delete your personal information from our records, or to ask how your information has been used. We will respond to your request within a reasonable timeframe.`,
  },
  {
    heading: 'Contact Us',
    body: `If you have questions or concerns about this Privacy Policy, please contact us at ${CONTACT.phone} or ${CONTACT.email}. Our office is located in Corpus Christi, Texas.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* Header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '48px 32px 56px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 400, color: COLORS.white, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
              Privacy Policy
            </h1>
            <p style={{ fontFamily: FONTS.body, fontSize: 13, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
              Last updated: June 2026 &mdash; Ocean Glory Homes, Corpus Christi, Texas
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 760, margin: '0 auto', padding: '52px 32px 88px' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: '0 0 40px' }}>
            Ocean Glory Homes respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and your rights with respect to that information.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ fontFamily: FONTS.heading, fontSize: 22, fontWeight: 400, color: COLORS.navy, margin: '0 0 12px' }}>
                  {s.heading}
                </h2>
                <p style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
