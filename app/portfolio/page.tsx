'use client';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

const BASE = 'https://oceangloryhomes.com/wp-content/uploads';

const categories = [
  {
    name: 'Exteriors',
    images: [
      { src: `${BASE}/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg`, alt: '103 St Andrews — front exterior', label: '103 St Andrews' },
      { src: `${BASE}/2026/01/905-Dunes-Exterior-Front-EDIT-495x400.jpg`, alt: '905 Dunes — front exterior', label: '905 Dunes Dr' },
      { src: `${BASE}/2022/06/14-Tradewinds-Front-Exterior-495x400.jpeg`, alt: '14 Tradewinds — front exterior', label: '14 Tradewinds' },
      { src: `${BASE}/2024/07/1509-Cape-Valero-Exterior-495x400.jpg`, alt: '1509 Cape Velero — exterior', label: '1509 Cape Velero' },
      { src: `${BASE}/2024/07/1504-Cape-Valero-Exterior-495x400.jpg`, alt: '1504 Cape Velero — exterior', label: '1504 Cape Velero' },
      { src: `${BASE}/2024/07/615-N-Fulton-Beach-Exterior-495x400.jpg`, alt: '615 N Fulton Beach — exterior', label: '615 N Fulton Beach' },
      { src: `${BASE}/2024/11/125-Sunrise-edit-4-Front-495x400.jpg`, alt: '125 Sunrise — front exterior', label: '125 Sunrise Dr' },
      { src: `${BASE}/2025/10/101-Cypress-Exterior-495x400.jpg`, alt: '101 Cypress — exterior', label: '101 Cypress' },
      { src: `${BASE}/2026/01/101-Cypress-Exterior-1-495x400.jpg`, alt: '101 Cypress side view', label: '101 Cypress — Side' },
      { src: `${BASE}/2021/07/JPAGE-RealEstate-6814Mets-7424-495x400.jpg`, alt: '6814 Mets Ct — exterior', label: '6814 Mets Court' },
      { src: `${BASE}/2022/08/4600-cr-56-exterior-495x385.jpg`, alt: '4600 CR 56 — exterior', label: '4600 County Rd 56' },
      { src: `${BASE}/2024/03/49-web-or-mls-DSC04020-e1775614841799-495x400.jpg`, alt: 'Custom coastal home exterior', label: 'Coastal Estate' },
    ],
  },
  {
    name: 'Kitchens',
    images: [
      { src: `${BASE}/2025/06/AFC_14-Tradewinds-21-KITCHEN-495x400.jpg`, alt: '14 Tradewinds — kitchen', label: '14 Tradewinds Kitchen' },
      { src: `${BASE}/2025/07/103-St-Andrews-Kitchen-2-495x400.jpg`, alt: '103 St Andrews — kitchen', label: '103 St Andrews Kitchen' },
      { src: `${BASE}/2024/07/57-Kitchen-1-495x400.jpg`, alt: 'Custom kitchen with island', label: 'Custom Island Kitchen' },
      { src: `${BASE}/2022/08/205-kitchen-495x400.jpg`, alt: '205 kitchen', label: 'Open Concept Kitchen' },
      { src: `${BASE}/2024/07/JPAGE-RealEstate-406CopanoRidge-9093-ZF-0687-05299-1-003-495x400.jpg`, alt: '406 Copano Ridge — kitchen', label: '406 Copano Ridge' },
      { src: `${BASE}/2022/07/JPAGE-RealEstate-6714Stuyvesant-3572-495x400.jpg`, alt: '6714 Stuyvesant — kitchen', label: '6714 Stuyvesant' },
      { src: `${BASE}/2024/11/10-DSC08669-495x400.jpg`, alt: 'Custom kitchen', label: 'Gourmet Kitchen' },
      { src: `${BASE}/2022/11/25-web-or-mls-DSC00219-495x400.jpg`, alt: 'Custom kitchen cabinetry', label: 'Custom Cabinetry' },
    ],
  },
  {
    name: 'Bathrooms',
    images: [
      { src: `${BASE}/2025/07/103-St-Andrews-Master-Bathroom-710x375.jpg`, alt: '103 St Andrews — master bathroom', label: '103 St Andrews Master Bath' },
      { src: `${BASE}/2022/11/5-web-or-mls-DSC00109.jpg`, alt: 'Custom master bath', label: 'Spa Master Bath' },
      { src: `${BASE}/2024/03/13-web-or-mls-DSC05957-495x400.jpg`, alt: 'Luxury bathroom', label: 'Luxury Bath' },
      { src: `${BASE}/2023/12/17-web-or-mls-DSC01907-495x400.jpg`, alt: 'Custom bathroom finishes', label: 'Custom Finishes' },
      { src: `${BASE}/2022/11/21-web-or-mls-DSC00199-495x400.jpg`, alt: 'Guest bathroom', label: 'Guest Bath' },
      { src: `${BASE}/2024/11/38-DSC01741-495x400.jpg`, alt: 'Secondary bathroom', label: 'Secondary Bath' },
    ],
  },
  {
    name: 'Living Spaces',
    images: [
      { src: `${BASE}/2025/06/14-Tradewinds-Primary-Living-Area.jpg`, alt: '14 Tradewinds — primary living area', label: '14 Tradewinds Living' },
      { src: `${BASE}/2022/11/3-web-or-mls-DSC00099.jpg`, alt: 'Open-concept living area', label: 'Open Concept Living' },
      { src: `${BASE}/2023/12/27-web-or-mls-DSC01933-1-495x400.jpg`, alt: 'Custom living room', label: 'Great Room' },
      { src: `${BASE}/2020/07/6850-Mets-CTM-Productions-14-495x400.jpg`, alt: '6850 Mets Ct — living area', label: '6850 Mets Court' },
      { src: `${BASE}/2020/07/6850-Mets-CTM-Productions-11-495x400.jpg`, alt: '6850 Mets Ct — family room', label: '6850 Mets — Family Room' },
      { src: `${BASE}/2024/07/IMG_4862-495x400.jpg`, alt: 'Coastal living space', label: 'Coastal Living' },
    ],
  },
  {
    name: 'Features',
    images: [
      { src: `${BASE}/2025/07/103-St-Andrews-Butlers-Pantry.jpg`, alt: "103 St Andrews — butler's pantry", label: "Butler's Pantry" },
      { src: `${BASE}/2022/10/IMG_1841-1-495x400.jpg`, alt: 'Custom home feature detail', label: 'Staircase Detail' },
      { src: `${BASE}/2022/10/IMG_1840-1-495x400.jpg`, alt: 'Home feature', label: 'Entry Detail' },
      { src: `${BASE}/2022/10/IMG_1830-edit-495x400.jpg`, alt: 'Architectural detail', label: 'Architectural Feature' },
      { src: `${BASE}/2022/10/IMG_9381-495x400.jpg`, alt: 'Custom home feature', label: 'Custom Feature' },
      { src: `${BASE}/2024/11/41-DSC08820-495x400.jpg`, alt: 'Outdoor living feature', label: 'Outdoor Kitchen' },
      { src: `${BASE}/2024/07/IMG_0566-home-edit-w-495x400.jpg`, alt: 'Home feature', label: 'Covered Patio' },
    ],
  },
  {
    name: 'Foyers',
    images: [
      { src: `${BASE}/2023/04/17-web-or-mls-DSC04465-495x400.jpg`, alt: 'Grand foyer', label: 'Grand Entry Foyer' },
      { src: `${BASE}/2023/03/IMG_2818-1-495x400.jpg`, alt: 'Custom foyer', label: 'Custom Foyer' },
      { src: `${BASE}/2023/03/IMG_2814-1-495x400.jpg`, alt: 'Entry hall', label: 'Entry Hall' },
      { src: `${BASE}/2022/11/42-web-or-mls-DSC00286-e1775614664250-495x400.jpg`, alt: 'Entry foyer', label: 'Entry Foyer' },
      { src: `${BASE}/2026/01/11-002_DSC02704-495x400.jpg`, alt: 'Foyer detail', label: 'Foyer Detail' },
    ],
  },
  {
    name: 'Dining',
    images: [
      { src: `${BASE}/2024/03/17-web-or-mls-DSC08192-495x400.jpg`, alt: 'Custom dining area', label: 'Formal Dining' },
      { src: `${BASE}/2023/12/29-web-or-mls-DSC02080-495x400.jpg`, alt: 'Dining space', label: 'Dining Space' },
      { src: `${BASE}/2022/11/40-web-or-mls-DSC00284-495x400.jpg`, alt: 'Dining room', label: 'Dining Room' },
      { src: `${BASE}/2022/07/image_50736641-4-495x400.jpg`, alt: 'Open dining', label: 'Open Dining' },
      { src: `${BASE}/2020/02/12-495x400.jpeg`, alt: 'Dining area', label: 'Casual Dining' },
      { src: `${BASE}/2020/07/19-495x400.jpg`, alt: 'Dining nook', label: 'Breakfast Nook' },
    ],
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('Exteriors');

  const current = categories.find(c => c.name === active)!;

  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, minHeight: '100vh' }}>

        {/* Category tabs — sticky below navbar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 8,
          backgroundColor: COLORS.white,
          borderBottom: '1px solid rgba(13,43,82,0.08)',
          padding: '0 32px',
          display: 'flex',
          gap: 0,
          overflowX: 'auto',
        }}>
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              style={{
                fontFamily: FONTS.body,
                fontSize: 13,
                fontWeight: active === cat.name ? 600 : 400,
                color: active === cat.name ? COLORS.navy : COLORS.grayText,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '16px 20px',
                borderBottom: active === cat.name ? `2px solid ${COLORS.gold}` : '2px solid transparent',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s',
                letterSpacing: '0.02em',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <section style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 24px 80px' }}>
          <div style={{
            columns: '3 320px',
            columnGap: 16,
          }}>
            {current.images.map((img, i) => (
              <div
                key={i}
                style={{
                  breakInside: 'avoid',
                  marginBottom: 16,
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px 16px 14px',
                  background: 'linear-gradient(to top, rgba(13,43,82,0.70) 0%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.opacity = '0'; }}
                >
                  <p style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.white, margin: 0, fontWeight: 500 }}>{img.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.grayText, textAlign: 'center', marginTop: 8 }}>
            {current.images.length} photos &mdash; {active}
          </p>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: COLORS.navy, padding: '64px 32px 72px', textAlign: 'center' }}>
          <p style={{ fontFamily: FONTS.body, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: COLORS.gold, fontWeight: 600, margin: '0 0 12px' }}>Like What You See?</p>
          <h2 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: COLORS.white, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Let&apos;s Build Something Together.
          </h2>
          <p style={{ fontFamily: FONTS.body, fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 32px' }}>
            Every home in this portfolio was designed and built by Ocean Glory Homes from the ground up.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={CONTACT.phoneHref}
              style={{ display: 'inline-block', backgroundColor: COLORS.gold, color: COLORS.navy, fontFamily: FONTS.body, fontSize: 15, fontWeight: 700, padding: '14px 32px', borderRadius: 999, textDecoration: 'none' }}
            >
              {CONTACT.phone}
            </a>
            <a
              href="/contact"
              style={{ display: 'inline-block', backgroundColor: 'transparent', color: COLORS.white, fontFamily: FONTS.body, fontSize: 15, fontWeight: 500, padding: '14px 32px', borderRadius: 999, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.25)' }}
            >
              Send a Message
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
