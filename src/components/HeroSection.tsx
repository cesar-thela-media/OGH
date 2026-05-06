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
      parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background layer — image + overlays */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.05)" }}
      >
        <img
          src="https://oceangloryhomes.com/wp-content/uploads/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg"
          alt="Stunning custom home exterior built by Ocean Glory Homes in Corpus Christi, Texas"
          className="w-full h-full object-cover"
          sizes="100vw"
          fetchPriority="high"
        />
        {/* Dark overlay with gold rise at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 via-transparent to-transparent" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-white font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.08] font-[600] tracking-tight drop-shadow-2xl">
          Homes Worthy of<br />
          <span className="italic font-[400]" style={{ color: "#f8a500" }}>
            Your Dreams
          </span>
        </h1>
        <div className="mx-auto mt-6 md:mt-8 w-14 md:w-16 h-[2px] bg-brand-gold/60 rounded-full" />
        <p className="mt-4 md:mt-6 text-white/50 text-sm md:text-base lg:text-xl font-[300] max-w-2xl mx-auto leading-relaxed tracking-wide">
          Custom homes in Corpus Christi &amp; Rockport, Texas
        </p>
      </div>

      {/* Scroll indicator */}
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
