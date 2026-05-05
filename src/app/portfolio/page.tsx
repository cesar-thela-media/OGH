"use client";

import { useEffect, useRef, useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import FilterBar from "@/components/FilterBar";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { portfolioProjects } from "@/data/content";

export default function PortfolioPage() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filtered = portfolioProjects.filter((p) => {
    if (filters["Style"] && p.style !== filters["Style"]) return false;
    if (filters["Location"] && !p.location.includes(filters["Location"])) return false;
    if (filters["Waterfront"] === "Waterfront" && !p.waterfront) return false;
    if (filters["Waterfront"] === "Inland" && p.waterfront) return false;
    return true;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Mini Hero */}
      <section className="bg-ocean-ink pt-[120px] pb-16" style={{ paddingTop: "120px" }}>
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Our Work</p>
          <h1 className="text-h1 text-white">Portfolio</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Homes that feel rooted in the coast. Browse our completed projects across the Coastal Bend.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-mist-border">
        <div className="container-content">
          <FilterBar
            groups={[
              { label: "Style", options: [{ label: "All Styles", value: "" }, { label: "Modern Coastal", value: "Modern Coastal" }, { label: "Traditional Coastal", value: "Traditional Coastal" }, { label: "Craftsman Coastal", value: "Craftsman Coastal" }] },
              { label: "Location", options: [{ label: "All Locations", value: "" }, { label: "North Padre Island", value: "North Padre Island" }, { label: "Port Aransas", value: "Port Aransas" }, { label: "Corpus Christi", value: "Corpus Christi" }, { label: "Rockport", value: "Rockport" }] },
              { label: "Waterfront", options: [{ label: "All", value: "" }, { label: "Waterfront", value: "Waterfront" }, { label: "Inland", value: "Inland" }] },
            ]}
            onFilterChange={setFilters}
          />
        </div>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="section-standard pb-0">
          <div className="container-content">
            <Link href={`/portfolio/${featured.slug}`} className="group block bg-white rounded-[18px] overflow-hidden card-hover">
              <div className="image-zoom aspect-[21/9]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="chip">{featured.style}</span>
                  {featured.waterfront && <span className="chip chip-active">Waterfront</span>}
                </div>
                <h2 className="text-h2 text-ocean-ink mb-2 group-hover:text-gulf-blue transition-colors">{featured.title}</h2>
                <p className="text-body-sm text-driftwood mb-4">{featured.location} &middot; {featured.specs.sqft.toLocaleString()} Sq Ft</p>
                <span className="btn-ghost">View Project</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Project Grid */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block bg-white rounded-[18px] overflow-hidden card-hover">
                <div className="image-zoom aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="chip text-[11px]">{p.style}</span>
                    {p.waterfront && <span className="chip text-[11px] chip-active">Waterfront</span>}
                  </div>
                  <h3 className="text-h3 text-ocean-ink mb-1 group-hover:text-gulf-blue transition-colors">{p.title}</h3>
                  <p className="text-body-sm text-driftwood">{p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Want to See More?"
        body="Visit one of our completed homes or tour a current build site. We'd love to show you our work."
        primaryCta={{ label: "Schedule a Tour", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
