import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const projects = [
  { slug: 'cape-velero',     name: '1511 Cape Velero',       location: 'Corpus Christi, TX',  description: 'Two-story coastal estate with arched entries, wrap-around porch, and panoramic bay views. Currently in framing.',                                                specs: '4 Beds · 3.5 Baths · 3,126 sqft', stage: 'Framing' },
  { slug: 'laguna-vista',    name: '1802 Laguna Vista',      location: 'Laguna Vista, TX',     description: 'Modern Mediterranean villa with courtyard pool, outdoor kitchen, and private dock access. Permitting stage.',                                                   specs: '4 Beds · 4.5 Baths · 3,840 sqft', stage: 'Permitting' },
  { slug: 'harbor-key',      name: '2324 Harbor Key',        location: 'Port Aransas, TX',     description: 'Beachside retreat with open-concept living, rooftop deck, and hurricane-rated construction. Foundation complete.',                                              specs: '3 Beds · 3.5 Baths · 2,654 sqft', stage: 'Foundation' },
  { slug: 'ocean-drive',     name: 'Ocean Drive Residence',  location: 'Corpus Christi, TX',  description: 'Classic colonial revival with modern interior, grand foyer, and detached carriage house. Completed 2024.',                                                        specs: '5 Beds · 5 Baths · 4,200 sqft', stage: 'Completed' },
  { slug: 'mustang-island',  name: 'Mustang Island Retreat',  location: 'Port Aransas, TX',     description: 'Contemporary beach house with floor-to-ceiling glass, infinity pool, and dune-preserving foundation. Completed 2023.',                                               specs: '4 Beds · 3 Baths · 2,900 sqft', stage: 'Completed' },
  { slug: 'padre-island',    name: 'Padre Island Estate',    location: 'Padre Island, TX',     description: 'Spanish revival waterfront home with terracotta roofing, courtyard fountain, and boat slip. Completed 2022.',                                                     specs: '6 Beds · 5.5 Baths · 5,100 sqft', stage: 'Completed' },
];

export default function PortfolioPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Page header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 24px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: 0 }}>
            Our Work
          </p>
          <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(36px, 4.5vw, 64px)', color: COLORS.white, marginTop: 12, fontWeight: 400 }}>
            Portfolio
          </h1>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.grayText, maxWidth: 540, margin: '16px auto 0' }}>
            Every home we build is designed and constructed under one roof — floor plan to finish.
          </p>
        </section>

        {/* Project grid */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
            {projects.map(project => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: '0 4px 20px rgba(13,43,82,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: FONTS.serif, fontSize: 22, color: COLORS.navy, margin: 0, fontWeight: 400 }}>
                    {project.name}
                  </h3>
                  <span style={{
                    fontFamily: FONTS.sans, fontSize: 11, color: COLORS.gold,
                    border: `1px solid ${COLORS.gold}`, borderRadius: 999,
                    padding: '4px 12px', whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {project.stage}
                  </span>
                </div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, color: COLORS.grayText, margin: '0 0 12px' }}>
                  {project.location}
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: COLORS.navy, lineHeight: 1.6, margin: '0 0 16px', flex: 1 }}>
                  {project.description}
                </p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.grayText, margin: 0, paddingTop: 16, borderTop: `1px solid ${COLORS.goldSoft}` }}>
                  {project.specs}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: 'center', padding: '0 24px 80px' }}>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.grayText, marginBottom: 24 }}>
            Ready to start your own project? Let&apos;s talk.
          </p>
          <a
            href={CONTACT.phoneHref}
            style={{
              display: 'inline-block',
              backgroundColor: COLORS.gold,
              color: COLORS.navy,
              fontFamily: FONTS.sans,
              fontSize: 16,
              fontWeight: 600,
              padding: '16px 40px',
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
