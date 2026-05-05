"use client";

import { useEffect, useRef } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import TrustRibbon from "@/components/TrustRibbon";
import PathChooser from "@/components/PathChooser";
import FeaturedProjects from "@/components/FeaturedProjects";
import ValuePillars from "@/components/ValuePillars";
import ProcessTimeline from "@/components/ProcessTimeline";
import InventoryCard from "@/components/InventoryCard";
import LotCard from "@/components/LotCard";
import ReviewSpotlight from "@/components/ReviewSpotlight";
import ArticleCard from "@/components/ArticleCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

import {
  availableHomes,
  lotsLand,
  journalArticles,
  site,
} from "@/data/content";

function FadeUpSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* 3. Hero */}
      <HeroSection
        eyebrow="Custom Homes • Available Homes • Lots & Land"
        headline="Built for the coast. Designed for the life you want."
        body={`Ocean Glory Homes builds custom coastal homes in Corpus Christi and the surrounding Coastal Bend. From lot selection to move-in, we guide you home with expertise, transparency, and craftsmanship that lasts.`}
        primaryCta={{ label: "Start Your Build", href: "/contact" }}
        secondaryCta={{ label: "View Our Portfolio", href: "/portfolio" }}
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
        height="88vh"
        trustStats={[
          { value: "10+", label: "Years Experience" },
          { value: "50+", label: "Homes Built" },
          { value: "100%", label: "5-Star Reviews" },
        ]}
      />

      {/* 4. Trust Ribbon */}
      <TrustRibbon />

      {/* 5. Three-Path Chooser */}
      <section className="section-standard bg-shell-white">
        <FadeUpSection>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">How can we help you?</p>
            <h2 className="text-h1 text-ocean-ink">Start Your Coastal Home Journey</h2>
          </div>
        </FadeUpSection>
        <PathChooser />
      </section>

      {/* 6. Featured Portfolio */}
      <section className="section-standard bg-sea-glass/30">
        <FadeUpSection>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">Our Work</p>
            <h2 className="text-h1 text-ocean-ink">Homes That Feel Rooted in the Coast</h2>
          </div>
        </FadeUpSection>
        <FeaturedProjects />
      </section>

      {/* 7. Why Ocean Glory */}
      <section className="section-standard">
        <FadeUpSection>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">Why Choose Us</p>
            <h2 className="text-h1 text-ocean-ink">Built Different by Design</h2>
          </div>
        </FadeUpSection>
        <ValuePillars />
      </section>

      {/* 8. Process Timeline */}
      <section className="section-standard bg-sea-glass/30">
        <FadeUpSection>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">Our Process</p>
            <h2 className="text-h1 text-ocean-ink">From Vision to Keys</h2>
          </div>
        </FadeUpSection>
        <ProcessTimeline />
      </section>

      {/* 9. Available Homes Preview */}
      <section className="section-standard">
        <FadeUpSection>
          <div className="container-content mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-label text-driftwood mb-3">Available Homes</p>
              <h2 className="text-h1 text-ocean-ink">Move-In Ready Coastal Homes</h2>
            </div>
            <Link href="/available-homes" className="btn-ghost shrink-0">
              View All Available Homes
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </FadeUpSection>
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableHomes.slice(0, 3).map((home) => (
              <InventoryCard
                key={home.slug}
                image={home.image}
                status={home.status}
                statusType={home.statusType}
                title={home.title}
                location={home.location}
                price={home.price}
                beds={home.beds}
                baths={home.baths}
                sqft={home.sqft}
                href={`/available-homes/${home.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. Lots & Land Preview */}
      <section className="section-standard bg-sea-glass/30">
        <FadeUpSection>
          <div className="container-content mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-label text-driftwood mb-3">Lots & Land</p>
              <h2 className="text-h1 text-ocean-ink">Find Your Perfect Lot</h2>
            </div>
            <Link href="/lots-land" className="btn-ghost shrink-0">
              View All Lots
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </FadeUpSection>
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lotsLand.slice(0, 3).map((lot) => (
              <LotCard
                key={lot.slug}
                image={lot.image}
                status={lot.status}
                title={lot.title}
                location={lot.location}
                acreage={lot.acreage}
                waterfront={lot.waterfront}
                href={`/lots-land/${lot.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Reviews Spotlight */}
      <section className="section-standard">
        <FadeUpSection>
          <div className="container-content mb-10 text-center">
            <p className="text-label text-driftwood mb-3">What Our Clients Say</p>
            <h2 className="text-h1 text-ocean-ink">Trusted by Homeowners Across the Coast</h2>
          </div>
        </FadeUpSection>
        <ReviewSpotlight />
      </section>

      {/* 12. Local Knowledge */}
      <section className="section-standard bg-sea-glass/30">
        <FadeUpSection>
          <div className="container-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-label text-driftwood mb-3">Local Expertise</p>
                <h2 className="text-h1 text-ocean-ink mb-6">
                  We Know the Coastal Bend Inside and Out
                </h2>
                <p className="text-body text-slate mb-6">
                  From North Padre Island to Rockport, our team has deep roots in every
                  coastal community. We know the neighborhoods, the schools, the best
                  lots, and the builders who share our commitment to quality.
                </p>
                <p className="text-body text-slate mb-8">
                  When you build with Ocean Glory Homes, you get more than a house.
                  You get a partner who knows the coast — the weather patterns, the
                  building codes, and what makes coastal living special.
                </p>
                <Link href="/about" className="btn-primary">
                  Learn About Our Story
                </Link>
              </div>
              <div className="rounded-[18px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                  alt="Coastal community"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </FadeUpSection>
      </section>

      {/* 13. Journal Preview */}
      <section className="section-standard">
        <FadeUpSection>
          <div className="container-content mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-label text-driftwood mb-3">Journal</p>
              <h2 className="text-h1 text-ocean-ink">Coastal Living Insights</h2>
            </div>
            <Link href="/journal" className="btn-ghost shrink-0">
              View All Articles
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </FadeUpSection>
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalArticles.slice(0, 3).map((article) => (
              <ArticleCard
                key={article.slug}
                image={article.image}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                slug={article.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <CtaBand
        headline="Ready to Build Your Coastal Dream?"
        body="Schedule a free consultation with our team and take the first step toward your new home on the Texas Coast."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Call (361) 123-4567", href: "tel:+13611234567" }}
      />

      {/* 15. Footer */}
      <SiteFooter />
    </>
  );
}
