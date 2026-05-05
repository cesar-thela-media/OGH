"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Build With Us", href: "/build-with-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Available Homes", href: "/available-homes" },
  { label: "Lots & Land", href: "/lots-land" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Journal", href: "/journal" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[88px] ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container-content h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`text-h3 font-semibold transition-colors duration-300 ${
              transparent ? "text-white" : "text-ocean-ink"
            }`}
          >
            Ocean Glory
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && link.href !== "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[14px] font-medium rounded-lg transition-colors duration-200 ${
                  transparent
                    ? "text-white/85 hover:text-white hover:bg-white/10"
                    : isActive
                    ? "text-gulf-blue"
                    : "text-slate hover:text-ocean-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className={`btn-primary hidden xl:inline-flex text-[14px] h-[44px] px-6 ${
            transparent
              ? "bg-white text-ocean-ink hover:bg-white/90 hover:shadow-lg"
              : ""
          }`}
        >
          Start Your Build
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                transparent ? "bg-white" : "bg-ocean-ink"
              } ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
              style={{ width: "24px" }}
            />
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                transparent ? "bg-white" : "bg-ocean-ink"
              } ${mobileOpen ? "opacity-0" : ""}`}
              style={{ width: "20px" }}
            />
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                transparent ? "bg-white" : "bg-ocean-ink"
              } ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
              style={{ width: "24px" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[88px] bg-ocean-ink z-40 xl:hidden overflow-y-auto">
          <div className="container-content py-8 flex flex-col gap-2">
            <div className="mb-6">
              <h3 className="text-white/50 text-label mb-4">Menu</h3>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white text-h3 py-3 hover:text-brass-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-primary bg-white text-ocean-ink hover:bg-white/90 mt-4 w-full"
            >
              Start Your Build
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
