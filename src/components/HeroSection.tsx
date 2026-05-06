"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const offset = window.scrollY * 0.35;
      parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Full-bleed hero image — highest quality exterior */}
      <div ref={parallaxRef} className="absolute inset-0 transition-transform will-change-transform">
        <img
          src="https://oceangloryhomes.com/wp-content/uploads/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg"
          alt="Custom home exterior — Ocean Glory Homes"
          className="w-full h-full object-cover"
        />
        {/* AR Homes style gradient overlay — transparent top, dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        {/* Subtle left/right vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] opacity-40" />
      </div>

      {/* Warm glow from below */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 bg-gradient-to-t from-brand-gold/10 to-transparent" />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.08] font-[600] tracking-tight drop-shadow-2xl">
          Homes Worthy of<br />
          <span className="italic font-[400] text-[#f8a500]">Your Dreams</span>
        </h1>
        {/* Thin gold accent line */}
        <div className="mx-auto mt-8 w-16 h-[2px] bg-brand-gold/60 rounded-full" />
        <p className="mt-6 text-white/70 text-lg md:text-xl font-[300] max-w-2xl mx-auto leading-relaxed tracking-wide">
          Custom homes in Corpus Christi &amp; Rockport, Texas
        </p>
      </div>

      {/* Scroll indicator — bounce arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
