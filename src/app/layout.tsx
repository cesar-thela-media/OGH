import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Ocean Glory Homes | Luxury Custom Home Builder — Corpus Christi, TX",
  description:
    "Ocean Glory Homes crafts luxury custom residences along the Texas Coastal Bend. Timeless design, uncompromising quality, and refined coastal living.",
  keywords: [
    "luxury custom home builder",
    "Corpus Christi",
    "Texas coastal bend",
    "oceanfront homes",
    "custom residence",
  ],
  openGraph: {
    title: "Ocean Glory Homes | Luxury Custom Home Builder",
    description:
      "Crafting luxury custom residences along the Texas Coastal Bend.",
    url: "https://ocean-glory-homes.vercel.app",
    siteName: "Ocean Glory Homes",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Ocean Glory Homes",
  description:
    "Luxury custom home builder serving the Texas Coastal Bend.",
  telephone: "+13617658888",
  email: "info@oceangloryhomes.com",
  url: "https://ocean-glory-homes.vercel.app",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Corpus Christi",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Corpus Christi" },
    { "@type": "City", name: "Rockport" },
  ],
  foundingDate: "2004",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
