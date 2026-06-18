import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';
import { notFound } from 'next/navigation';

const projects: Record<string, {
  name: string; location: string; description: string; specs: string; stage: string;
}> = {
  'cape-velero': {
    name: '1511 Cape Velero', location: 'Corpus Christi, TX',
    description: 'Two-story coastal estate with arched entries, wrap-around porch, and panoramic bay views. Currently in framing with completion expected Q4 2026.',
    specs: '4 Beds · 3.5 Baths · 3,126 sqft', stage: 'Framing',
  },
  'laguna-vista': {
    name: '1802 Laguna Vista', location: 'Laguna Vista, TX',
    description: 'Modern Mediterranean villa with courtyard pool, outdoor kitchen, and private dock access. Permitting stage — ground breaking expected summer 2026.',
    specs: '4 Beds · 4.5 Baths · 3,840 sqft', stage: 'Permitting',
  },
  'harbor-key': {
    name: '2324 Harbor Key', location: 'Port Aransas, TX',
    description: 'Beachside retreat with open-concept living, rooftop deck, and hurricane-rated construction. Foundation complete, framing starting next month.',
    specs: '3 Beds · 3.5 Baths · 2,654 sqft', stage: 'Foundation',
  },
  'ocean-drive': {
    name: 'Ocean Drive Residence', location: 'Corpus Christi, TX',
    description: 'Classic colonial revival with modern interior, grand foyer with spiral staircase, and detached carriage house. Delivered on schedule, on budget.',
    specs: '5 Beds · 5 Baths · 4,200 sqft', stage: 'Completed',
  },
  'mustang-island': {
    name: 'Mustang Island Retreat', location: 'Port Aransas, TX',
    description: 'Contemporary beach house with floor-to-ceiling glass, infinity-edge pool, and dune-preserving foundation engineering. Completed 2023.',
    specs: '4 Beds · 3 Baths · 2,900 sqft', stage: 'Completed',
  },
  'padre-island': {
    name: 'Padre Island Estate', location: 'Padre Island, TX',
    description: 'Spanish revival waterfront home with terracotta roofing, courtyard fountain, private boat slip, and guest casita. Completed 2022.',
    specs: '6 Beds · 5.5 Baths · 5,100 sqft', stage: 'Completed',
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }));
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite }}>
        {/* Header */}
        <section style={{ backgroundColor: COLORS.navy, padding: '80px 24px 64px' }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <span style={{
              fontFamily: FONTS.sans, fontSize: 11, color: COLORS.gold,
              border: `1px solid ${COLORS.gold}`, borderRadius: 999,
              padding: '4px 14px', display: 'inline-block', marginBottom: 16,
            }}>
              {project.stage}
            </span>
            <h1 style={{ fontFamily: FONTS.serif, fontSize: 'clamp(32px, 4vw, 56px)', color: COLORS.white, margin: '0 0 8px', fontWeight: 400 }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.grayText, margin: 0 }}>
              {project.location}
            </p>
          </div>
        </section>

        {/* Detail */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px' }}>
          <div style={{ backgroundColor: COLORS.white, borderRadius: 16, padding: 40, boxShadow: '0 4px 20px rgba(13,43,82,0.08)', marginBottom: 32 }}>
            <h2 style={{ fontFamily: FONTS.serif, fontSize: 24, color: COLORS.navy, margin: '0 0 16px', fontWeight: 400 }}>
              Project Overview
            </h2>
            <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, lineHeight: 1.8, margin: '0 0 24px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', paddingTop: 24, borderTop: `1px solid ${COLORS.goldSoft}` }}>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.grayText, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>Specifications</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, margin: 0 }}>{project.specs}</p>
              </div>
              <div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, color: COLORS.grayText, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px' }}>Status</p>
                <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: COLORS.navy, margin: 0 }}>{project.stage}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/portfolio" style={{
              fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600, color: COLORS.navy,
              textDecoration: 'none', padding: '12px 24px',
              border: `1.5px solid ${COLORS.goldSoft}`, borderRadius: 999,
            }}>
              ← Back to Portfolio
            </a>
            <a href={CONTACT.phoneHref} style={{
              fontFamily: FONTS.sans, fontSize: 14, fontWeight: 600,
              backgroundColor: COLORS.gold, color: COLORS.navy,
              textDecoration: 'none', padding: '12px 24px', borderRadius: 999,
            }}>
              Start Your Project — {CONTACT.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
