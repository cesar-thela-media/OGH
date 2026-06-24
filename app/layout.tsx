import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ocean Glory Homes — Luxury Coastal Custom Home Builder',
    template: '%s | Ocean Glory Homes',
  },
  description:
    'Ocean Glory Homes is a design-build custom home builder serving Rockport, Corpus Christi, and Portland, Texas. One team from blueprint to keys.',
  metadataBase: new URL('https://oceangloryhomes.com'),
  openGraph: {
    siteName: 'Ocean Glory Homes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://oceangloryhomes.com/wp-content/uploads/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg',
        width: 1200,
        height: 630,
        alt: 'Ocean Glory Homes — Luxury Coastal Custom Homes',
      },
    ],
  },
  icons: {
    icon: '/images/ogh-logo.png',
    shortcut: '/images/ogh-logo.png',
    apple: '/images/ogh-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
