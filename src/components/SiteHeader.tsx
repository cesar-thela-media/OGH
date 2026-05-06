"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const dropdownItems = [
  { href: "/about", label: "About Us" },
  { href: "/for-sale", label: "For Sale" },
  { href: "/lots", label: "Available Lots" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/community", label: "Community" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://oceangloryhomes.com/wp-content/uploads/2016/06/ocean-glory-homes-.png"
            alt="Ocean Glory Homes"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="/"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            Home
          </Link>

          {/* Dropdown: Pages */}
          <li ref={dropdownRef} className="relative list-none">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
            >
              Pages
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-brand-grey overflow-hidden">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 text-sm font-[500] text-brand-dark hover:bg-warm-bg hover:text-brand-gold transition-colors border-b border-brand-grey/30 last:border-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <Link
            href="/for-sale"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            For Sale
          </Link>
          <Link
            href="/lots"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            Lots
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-[600] tracking-wide text-white/90 hover:text-brand-gold transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Right — CTA button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/for-sale"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full text-sm font-[600] font-heading transition-all duration-200 bg-brand-gold text-[#1a1a1a] hover:bg-[#e09500] hover:shadow-lg hover:shadow-brand-gold/30"
          >
            View Our Homes
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
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-[600] text-white/90 hover:text-brand-gold transition-colors"
            >
              Home
            </Link>
            {/* Mobile dropdown label */}
            <p className="text-xs text-white/40 tracking-[0.15em] uppercase font-[600] pt-2">
              Pages
            </p>
            {dropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-[500] text-white/80 hover:text-brand-gold transition-colors pl-3 border-l-2 border-brand-gold/30"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/for-sale"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-gold text-[#1a1a1a] text-sm font-[600] font-heading"
              >
                View Our Homes
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
