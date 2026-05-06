import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const ppMori = localFont({
  src: [
    { path: "../../public/fonts/PPMori-Extralight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/PPMori-ExtralightItalic.otf", weight: "200", style: "italic" },
    { path: "../../public/fonts/PPMori-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/PPMori-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "../../public/fonts/PPMori-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/PPMori-SemiBoldItalic.otf", weight: "600", style: "italic" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ocean Glory Homes | Custom Home Builder in Corpus Christi, Rockport, TX",
  description:
    "Ocean Glory Homes builds custom homes in Corpus Christi and Rockport, Texas. Quality craftsmanship, honest pricing, and transparent communication.",
  keywords: [
    "custom home builder",
    "Corpus Christi",
    "Rockport Texas",
    "home construction",
    "new home builder",
  ],
  openGraph: {
    title: "Ocean Glory Homes | Custom Home Builder",
    description:
      "Building custom dream homes in Corpus Christi and Rockport, Texas since 2004.",
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
  image:
    "https://oceangloryhomes.com/wp-content/uploads/2022/11/exterior.jpg",
  description:
    "Custom home builder serving Corpus Christi and Rockport, Texas since 2004.",
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
  sameAs: [
    "https://www.facebook.com/oceangloryhomes",
    "https://www.instagram.com/oceanglory_homes/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ppMori.variable}`}>
      <body className="font-body antialiased">
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
