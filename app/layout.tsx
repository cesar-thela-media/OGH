import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ocean Glory Homes — Luxury Coastal Custom Homes',
  description: 'Design + Build, one company. Custom coastal luxury homes in Corpus Christi, Rockport, and Portland, Texas.',
  icons: { icon: 'https://oceangloryhomes.com/wp-content/uploads/2016/06/ocean-glory-homes-.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
