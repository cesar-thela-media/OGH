import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const projects = [
  {
    slug: 'cape-velero',
    name: '1511 Cape Velero',
    location: 'Corpus Christi, TX',
    specs: '4 Beds · 3.5 Baths · 3,126 sqft',
    stage: 'Framing',
    image: '/images/listing-1511-cape-velero.jpg',
  },
  {
    slug: 'laguna-vista',
    name: '1802 Laguna Vista',
    location: 'Laguna Vista, TX',
    specs: '4 Beds · 4.5 Baths · 3,840 sqft',
    stage: 'Permitting',
    image: '/images/listing-1802-laguna-vista.jpg',
  },
  {
    slug: 'harbor-key',
    name: '2324 Harbor Key',
    location: 'Port Aransas, TX',
    specs: '3 Beds · 3.5 Baths · 2,654 sqft',
    stage: 'Foundation',
    image: '/images/listing-2324-harbor-key.jpg',
  },
  {
    slug: 'ocean-drive',
    name: 'Ocean Drive Residence',
    location: 'Corpus Christi, TX',
    specs: '5 Beds · 5 Baths · 4,200 sqft',
    stage: 'Completed',
    image: '/images/hero-mansion.jpg',
  },
  {
    slug: 'mustang-island',
    name: 'Mustang Island Retreat',
    location: 'Port Aransas, TX',
    specs: '4 Beds · 3 Baths · 2,900 sqft',
    stage: 'Completed',
    image: '/images/listing-1802-laguna-vista.jpg',
  },
  {
    slug: 'padre-island',
    name: 'Padre Island Estate',
    location: 'Padre Island, TX',
    specs: '6 Beds · 5.5 Baths · 5,100 sqft',
    stage: 'Completed',
    image: '/images/listing-2324-harbor-key.jpg',
  },
];

export default function PortfolioPage() {
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
            Our Work
          </p>
          <h1
            style={{
              fontFamily: FONTS.serif,
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: 400,
              color: COLORS.white,
              marginTop: 14,
              marginBottom: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
            }}
          >
            Portfolio
          </h1>
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: 15,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 480,
              margin: '18px auto 0',
            }}
          >
            Every home designed and built under one roof — floor plan to finish.
          </p>
        </section>

        {/* Project grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 32,
            }}
          >
            {projects.map(project => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(13,43,82,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  border: '1px solid rgba(13,43,82,0.06)',
                }}
              >
                <div style={{ width: '100%', height: 220, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      right: 14,
                      fontFamily: FONTS.sans,
                      fontSize: 10,
                      fontWeight: 600,
                      color: project.stage === 'Completed' ? '#1F6B3A' : COLORS.gold,
                      border: `1px solid ${project.stage === 'Completed' ? 'rgba(31,107,58,0.5)' : 'rgba(201,168,78,0.6)'}`,
                      borderRadius: 999,
                      padding: '4px 12px',
                      backgroundColor: project.stage === 'Completed' ? 'rgba(230,244,236,0.92)' : 'rgba(13,43,82,0.72)',
                      backdropFilter: 'blur(8px)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {project.stage}
                  </div>
                </div>
                <div style={{ padding: '22px 26px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 22,
                      fontWeight: 400,
                      color: COLORS.navy,
                      margin: '0 0 4px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 13,
                      color: COLORS.grayText,
                      margin: '0 0 16px',
                    }}
                  >
                    {project.location}
                  </p>
                  <p
                    style={{
                      fontFamily: FONTS.sans,
                      fontSize: 13,
                      color: COLORS.grayText,
                      margin: 0,
                      marginTop: 'auto',
                      paddingTop: 16,
                      borderTop: `1px solid rgba(201,168,78,0.22)`,
                    }}
                  >
                    {project.specs}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 88px' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.grayText, marginBottom: 24 }}>
            Ready to start your own project? Let&apos;s talk.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: '#fff',
              fontFamily: FONTS.sans,
              fontSize: 15,
              fontWeight: 600,
              padding: '15px 40px',
              borderRadius: 999,
              textDecoration: 'none',
            }}
          >
            {CONTACT.phone}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
