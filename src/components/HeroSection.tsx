"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const offset = window.scrollY * 0.35;
      parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Parallax background — living room image */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 will-change-transform"
          style={{ transform: "scale(1.05)" }}
        >
          <img
            src="https://oceangloryhomes.com/wp-content/uploads/2025/07/103-St-Andrews-Livingroom.jpg"
            alt="Luxurious custom home living room"
            className="w-full h-full object-cover"
            sizes="100vw"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Left-aligned text (Brickly style) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] w-full">
          <div className="max-w-lg">
            <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-3">
              Premium Custom Homes
            </p>
            <h1 className="text-white font-heading text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.08] font-[600] tracking-tight drop-shadow-2xl mb-5">
              Find Your<br />Dream Home
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-6">
              Custom-built homes in Corpus Christi and Rockport, Texas. Quality craftsmanship backed by years of experience.
            </p>
            <a href="/for-sale" className="btn-primary inline-flex">Browse Our Homes</a>
          </div>
        </div>
      </section>

      {/* Search bar strip below hero */}
      <section className="bg-white border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%] py-4">
          <div className="flex flex-wrap items-center gap-3">
            <select className="px-4 py-2.5 border border-card-border rounded-lg text-sm text-body bg-white focus:outline-none focus:border-brand-blue">
              <option>Location</option>
              <option>Corpus Christi</option>
              <option>Rockport</option>
              <option>Portland</option>
            </select>
            <select className="px-4 py-2.5 border border-card-border rounded-lg text-sm text-body bg-white focus:outline-none focus:border-brand-blue">
              <option>Property Type</option>
              <option>All Homes</option>
              <option>For Sale</option>
              <option>Recently Sold</option>
            </select>
            <select className="px-4 py-2.5 border border-card-border rounded-lg text-sm text-body bg-white focus:outline-none focus:border-brand-blue">
              <option>Price Range</option>
              <option>$200k - $400k</option>
              <option>$400k - $600k</option>
              <option>$600k+</option>
            </select>
            <button className="btn-primary h-[42px] text-sm px-6">Smart Search</button>
          </div>
        </div>
      </section>
    </>
  );
}
