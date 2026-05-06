import type { Metadata } from "next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
