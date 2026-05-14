'use client'

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "ABOUT US" },
  { href: "/portfolio", label: "OUR PROJECTS" },
  { href: "/community", label: "VILLAS" },
  { href: "/apartments", label: "APARTMENTS" },
  { href: "/why-ogh", label: "WHY OGH" },
  { href: "/contact", label: "CONTACT" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] py-3">
      {/* Blue accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#013773]" />
      <div className="flex items-center justify-between px-6">
        {/* Logo — real OGH logo */}
        <Link href="/" className="flex items-center">
          <img
            src="https://oceangloryhomes.com/wp-content/uploads/2016/06/ocean-glory-homes-.png"
            alt="Ocean Glory Homes"
            className="h-[28px] w-auto brightness-0 invert"
          />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Fullscreen overlay menu */}
      {open && (
        <div className="fixed inset-0 top-0 bg-[#111111]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:text-[#C5A368] transition-colors uppercase tracking-[4px] font-[400]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-[600] uppercase tracking-[2px] bg-[#013773] text-white border-none hover:bg-[#014B9A] transition-all duration-300"
              >
                INQUIRE NOW
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
