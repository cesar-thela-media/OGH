"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-sale", label: "For Sale" },
  { href: "/lots", label: "Available Lots" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      } ${scrolled ? "bg-warm-bg py-2" : "bg-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://oceangloryhomes.com/wp-content/uploads/2016/06/ocean-glory-homes-.png"
            alt="Ocean Glory Homes"
            className={`h-10 md:h-12 w-auto transition-all duration-300 ${
              scrolled ? "opacity-100" : "brightness-0 invert opacity-100"
            }`}
          />
        </Link>

        {/* Desktop Nav — horizontal links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-[600] tracking-wide transition-colors ${
                scrolled
                  ? "text-brand-dark/80 hover:text-brand-blue"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right — CTA button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/for-sale"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-[6px] text-sm font-[600] font-heading transition-all duration-200 bg-brand-blue text-white hover:bg-[#0059a6]"
          >
            Browse Our Homes
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-brand-dark" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-brand-dark" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-brand-dark" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-warm-bg border-t border-card-border shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-[600] text-brand-dark/80 hover:text-brand-blue transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-card-border">
              <Link
                href="/for-sale"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[6px] bg-brand-blue text-white text-sm font-[600] font-heading w-full"
              >
                Browse Our Homes
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
