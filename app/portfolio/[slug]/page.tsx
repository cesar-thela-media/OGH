import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { notFound } from 'next/navigation';

const projects: Record<string, {
  name: string;
  location: string;
  description: string;
  specs: string;
  stage: string;
  image: string;
}> = {
  'cape-velero': {
    name: '1511 Cape Velero',
    location: 'Corpus Christi, TX',
    description: 'Two-story coastal estate with arched entries, wrap-around porch, and panoramic bay views. Currently in framing with completion expected Q4 2026.',
    specs: '4 Beds · 3.5 Baths · 3,126 sqft',
    stage: 'Framing',
    image: '/images/listing-1511-cape-velero.jpg',
  },
  'laguna-vista': {
    name: '1802 Laguna Vista',
    location: 'Laguna Vista, TX',
    description: 'Modern Mediterranean villa with courtyard pool, outdoor kitchen, and private dock access. Permitting stage — ground breaking expected summer 2026.',
    specs: '4 Beds · 4.5 Baths · 3,840 sqft',
    stage: 'Permitting',
    image: '/images/listing-1802-laguna-vista.jpg',
  },
  'harbor-key': {
    name: '2324 Harbor Key',
    location: 'Port Aransas, TX',
    description: 'Beachside retreat with open-concept living, rooftop deck, and hurricane-rated construction. Foundation complete, framing starting next month.',
    specs: '3 Beds · 3.5 Baths · 2,654 sqft',
    stage: 'Foundation',
    image: '/images/listing-2324-harbor-key.jpg',
  },
  'ocean-drive': {
    name: 'Ocean Drive Residence',
    location: 'Corpus Christi, TX',
    description: 'Classic colonial revival with modern interior, grand foyer with spiral staircase, and detached carriage house. Delivered on schedule, on budget.',
    specs: '5 Beds · 5 Baths · 4,200 sqft',
    stage: 'Completed',
    image: '/images/hero-mansion.jpg',
  },
  'mustang-island': {
    name: 'Mustang Island Retreat',
    location: 'Port Aransas, TX',
    description: 'Contemporary beach house with floor-to-ceiling glass, infinity-edge pool, and dune-preserving foundation engineering. Completed 2023.',
    specs: '4 Beds · 3 Baths · 2,900 sqft',
    stage: 'Completed',
    image: '/images/listing-1802-laguna-vista.jpg',
  },
  'padre-island': {
    name: 'Padre Island Estate',
    location: 'Padre Island, TX',
    description: 'Spanish revival waterfront home with terracotta roofing, courtyard fountain, private boat slip, and guest casita. Completed 2022.',
    specs: '6 Beds · 5.5 Baths · 5,100 sqft',
    stage: 'Completed',
    image: '/images/listing-2324-harbor-key.jpg',
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }));
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  const isCompleted = project.stage === 'Completed';

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>
        {/* Hero image */}
        <section style={{ width: '100%', height: '48vh', minHeight: 400, overflow: 'hidden', position: 'relative' }}>
          <img
            src={project.image}
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,43,82,0.90) 0%, rgba(13,43,82,0.1) 55%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 0,
              right: 0,
              padding: '0 52px',
            }}
          >
            <span
              style={{
                fontFamily: FONTS.sans,
                fontSize: 10,
                fontWeight: 600,
                color: isCompleted ? '#22C55E' : COLORS.gold,
                border: `1px solid ${isCompleted ? 'rgba(34,197,94,0.5)' : 'rgba(201,168,78,0.6)'}`,
                borderRadius: 999,
                padding: '4px 14px',
                display: 'inline-block',
                marginBottom: 12,
                letterSpacing: '0.06em',
              }}
            >
              {project.stage}
            </span>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                fontWeight: 400,
                color: COLORS.white,
                margin: '0 0 4px',
                letterSpacing: '-0.02em',
              }}
            >
              {project.name}
            </h1>
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
              {project.location}
            </p>
          </div>
        </section>

        {/* Detail */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '56px 32px' }}>
          <div
            style={{
              backgroundColor: COLORS.white,
              borderRadius: 16,
              padding: '36px 40px',
              boxShadow: '0 4px 24px rgba(13,43,82,0.07)',
              marginBottom: 32,
              border: '1px solid rgba(13,43,82,0.05)',
            }}
          >
            <h2
              style={{
                fontFamily: FONTS.serif,
                fontSize: 26,
                fontWeight: 400,
                color: COLORS.navy,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
              }}
            >
              Project Overview
            </h2>
            <p
              style={{
                fontFamily: FONTS.sans,
                fontSize: 15,
                color: COLORS.navy,
                lineHeight: 1.85,
                margin: '0 0 28px',
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                display: 'flex',
                gap: 48,
                flexWrap: 'wrap',
                paddingTop: 24,
                borderTop: `1px solid rgba(201,168,78,0.22)`,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 11,
                    color: COLORS.grayText,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    margin: '0 0 6px',
                  }}
                >
                  Specifications
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.navy, margin: 0 }}>
                  {project.specs}
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 11,
                    color: COLORS.grayText,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    margin: '0 0 6px',
                  }}
                >
                  Status
                </p>
                <p
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 15,
                    color: isCompleted ? '#1F6B3A' : COLORS.navy,
                    margin: 0,
                    fontWeight: isCompleted ? 600 : 400,
                  }}
                >
                  {project.stage}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="/portfolio"
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 600,
                color: COLORS.navy,
                textDecoration: 'none',
                padding: '12px 26px',
                border: `1.5px solid rgba(201,168,78,0.4)`,
                borderRadius: 999,
              }}
            >
              ← Back to Portfolio
            </a>
            <a
              href={CONTACT.phoneHref}
              style={{
                fontFamily: FONTS.sans,
                fontSize: 14,
                fontWeight: 600,
                backgroundColor: COLORS.gold,
                color: '#fff',
                textDecoration: 'none',
                padding: '12px 26px',
                borderRadius: 999,
              }}
            >
              Start Your Project — {CONTACT.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
