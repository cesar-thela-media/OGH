import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { COLORS, FONTS, CONTACT } from '@/lib/constants';

export default function EspanolPage() {
  return (
    <>
      <NavBar />
      <main style={{ backgroundColor: COLORS.offWhite, padding: '64px 32px 88px', maxWidth: 820, margin: '0 auto' }}>
        <h1 style={{ fontFamily: FONTS.heading, fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, color: COLORS.navy, margin: '0 0 32px' }}>Ocean Glory Homes</h1>
        <p style={{ fontFamily: FONTS.body, fontSize: 18, color: COLORS.gold, fontWeight: 600, margin: '0 0 32px' }}>Constructor de Casas Personalizadas en la Costa de Texas</p>
        <div style={{ fontFamily: FONTS.body, fontSize: 15, color: COLORS.grayText, lineHeight: 1.8 }}>
          <p style={{ marginBottom: 20 }}>Ocean Glory Homes es una empresa familiar de diseño y construcción que presta servicios en Corpus Christi, Rockport, Portland y sus alrededores. Durante más de 11 años, hemos construido hogares costeros de lujo sin la fricción de los traspasos tradicionales entre arquitecto y constructor.</p>
          <p style={{ marginBottom: 20 }}>Cada proyecto — desde el plano inicial hasta la entrega final — permanece bajo un mismo techo. Diseñamos. Construimos. Sin sorpresas.</p>
          <div style={{ backgroundColor: COLORS.navy, borderRadius: 20, padding: '32px', marginTop: 32, color: COLORS.white }}>
            <p style={{ fontFamily: FONTS.body, fontSize: 16, fontWeight: 600, color: COLORS.gold, margin: '0 0 16px' }}>Contáctenos</p>
            <p style={{ margin: '0 0 8px' }}>📞 <a href={CONTACT.phoneHref} style={{ color: COLORS.gold, fontWeight: 600, textDecoration: 'none' }}>{CONTACT.phone}</a></p>
            <p style={{ margin: 0 }}>✉️ <a href={`mailto:${CONTACT.email}`} style={{ color: COLORS.gold, fontWeight: 600, textDecoration: 'none' }}>{CONTACT.email}</a></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
