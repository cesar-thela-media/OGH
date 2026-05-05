"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface HeroSectionProps {
  eyebrow?: string;
  headline: string;
  body: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage: string;
  height?: string;
  overlay?: boolean;
  maxCopyWidth?: number;
  trustStats?: { value: string; label: string }[];
  children?: React.ReactNode;
}

export default function HeroSection({
  eyebrow,
  headline,
  body,
  primaryCta,
  secondaryCta,
  backgroundImage,
  height = "78vh",
  overlay = true,
  maxCopyWidth = 620,
  trustStats,
  children,
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelector(".hero-content")?.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative flex items-center overflow-hidden`}
      style={{
        minHeight: height,
        maxHeight: "900px",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-ink/80 via-ocean-ink/50 to-ocean-ink/30" />
      )}

      {/* Content */}
      <div className="container-content relative z-10 w-full">
        <div className="hero-content fade-up max-w-[620px]">
          {eyebrow && (
            <p className="text-label text-white/60 mb-4 flex flex-wrap gap-2">
              {eyebrow.split("•").map((part, i) => (
                <span key={i}>
                  {i > 0 && (
                    <span className="mx-1 text-white/30">•</span>
                  )}
                  {part.trim()}
                </span>
              ))}
            </p>
          )}
          <h1 className="text-hero text-white font-semibold mb-6 leading-tight">
            {headline}
          </h1>
          <p
            className="text-body text-white/80 mb-8"
            style={{ maxWidth: maxCopyWidth }}
          >
            {body}
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary bg-white text-ocean-ink hover:bg-white/90">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary border-white/30 text-white hover:border-white hover:bg-white/10">
                {secondaryCta.label}
              </Link>
            )}
          </div>
          {trustStats && (
            <div className="flex flex-wrap gap-8">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-h2 text-white font-semibold">{stat.value}</div>
                  <div className="text-body-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
