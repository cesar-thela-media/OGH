"use client";

import { useEffect, useRef } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import InventoryCard from "@/components/InventoryCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { portfolioProjects, availableHomes, lotsLand } from "@/data/content";

function FadeUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); o.unobserve(el); } }, { threshold: 0.1 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function BuildWithUsPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Hero */}
      <HeroSection
        headline="Build With Us"
        body="Your vision, our expertise, and the Texas Coast as your backdrop. We design and build custom homes that reflect how you want to live."
        primaryCta={{ label: "Start Your Build", href: "/contact" }}
        backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
        height="70vh"
      />

      {/* Intro */}
      <section className="section-standard">
        <FadeUp>
          <div className="container-content max-w-[720px] text-center">
            <p className="text-label text-driftwood mb-4">Why Build Custom</p>
            <h2 className="text-h1 text-ocean-ink mb-6">
              A Home That's Uniquely Yours
            </h2>
            <div className="text-body text-slate space-y-4">
              <p>
                When you build custom with Ocean Glory Homes, every detail is a reflection
                of your taste, your lifestyle, and how you want to live on the coast.
                We don't build from a catalog — we design from your vision.
              </p>
              <p>
                Our team guides you from lot selection through final walkthrough, ensuring
                your home is built with the quality, resilience, and beauty that coastal
                living demands.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Process */}
      <section id="process" className="section-standard bg-sea-glass/30">
        <FadeUp>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">Our Process</p>
            <h2 className="text-h1 text-ocean-ink">How We Build Your Coastal Home</h2>
            <p className="text-body text-slate mt-4 max-w-[600px] mx-auto">
              From your first conversation to your first morning in your new home, our
              streamlined process keeps everything on track.
            </p>
          </div>
        </FadeUp>
        <ProcessTimeline />
      </section>

      {/* Lot Guidance */}
      <section id="lots" className="section-standard">
        <FadeUp>
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-label text-driftwood mb-3">Lot Guidance</p>
                <h2 className="text-h1 text-ocean-ink mb-6">
                  Find the Perfect Lot for Your Home
                </h2>
                <p className="text-body text-slate mb-6">
                  Not sure where to start? We help you evaluate lots based on elevation,
                  orientation, utilities, neighborhood character, and build feasibility.
                </p>
                <p className="text-body text-slate mb-8">
                  With years of experience across the Coastal Bend, we know which lots
                  offer the best value and the best building conditions.
                </p>
                <Link href="/lots-land" className="btn-primary">
                  Explore Available Lots
                </Link>
              </div>
              <div className="rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                  alt="Lot with coastal view"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Craftsmanship */}
      <section className="section-standard bg-sea-glass/30">
        <FadeUp>
          <div className="container-content text-center max-w-[720px]">
            <p className="text-label text-driftwood mb-3">Craftsmanship</p>
            <h2 className="text-h1 text-ocean-ink mb-6">
              Built to Coastal Standards
            </h2>
            <p className="text-body text-slate mb-8">
              Every Ocean Glory home is built with coastal conditions in mind. From
              impact-resistant windows to elevated foundations, we don't cut corners
              on the things that matter most. Our trade partners are vetted for quality
              and reliability, and we inspect every phase of construction.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {[
                { title: "Wind Mitigation", body: "Engineered for 150+ mph winds with continuous load paths." },
                { title: "Coastal Materials", body: "Standing seam roofs, fiber cement siding, impact glass." },
                { title: "Energy Efficient", body: "Spray foam insulation, efficient HVAC, LED lighting." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-[18px] p-6 text-left">
                  <h3 className="text-h3 text-ocean-ink mb-2">{item.title}</h3>
                  <p className="text-body-sm text-slate">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Signature Projects Preview */}
      <section className="section-standard">
        <FadeUp>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">Signature Projects</p>
            <h2 className="text-h1 text-ocean-ink">Coastal Homes We've Built</h2>
          </div>
        </FadeUp>
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block bg-white rounded-[18px] overflow-hidden card-hover">
                <div className="image-zoom aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-h3 text-ocean-ink mb-1 group-hover:text-gulf-blue transition-colors">{p.title}</h3>
                  <p className="text-body-sm text-driftwood">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        headline="Let's Start Designing Your Home"
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call (361) 123-4567", href: "tel:+13611234567" }}
      />

      <SiteFooter />
    </>
  );
}
