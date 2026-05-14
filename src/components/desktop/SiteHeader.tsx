'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/portfolio", label: "OUR PROJECTS" },
  { href: "/community", label: "VILLAS" },
  { href: "/apartments", label: "APARTMENTS" },
  { href: "/why-ogh", label: "WHY OGH" },
  { href: "/contact", label: "CONTACT" },
];

export default function DesktopHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111111]/90 backdrop-blur-lg shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Blue accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#013773]" />
      <div className="container-luxury flex items-center">
        {/* Logo — real OGH logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <img
            src="https://oceangloryhomes.com/wp-content/uploads/2016/06/ocean-glory-homes-.png"
            alt="Ocean Glory Homes"
            className="h-[36px] md:h-[42px] w-auto brightness-0 invert"
          />
        </Link>

        {/* Nav — center */}
        <nav className="flex items-center justify-center flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-white transition-colors duration-300 text-[12px] font-[400] uppercase tracking-[1.2px] mx-5 xl:mx-6"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Inquire Now — right */}
        <div className="flex items-center shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-2.5 text-[12px] font-[500] uppercase tracking-[1.2px] bg-[#013773] text-white border-none hover:bg-[#014B9A] transition-all duration-300"
          >
            INQUIRE NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
