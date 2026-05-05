"use client";

import { useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import FilterBar from "@/components/FilterBar";
import LotCard from "@/components/LotCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { lotsLand } from "@/data/content";

export default function LotsLandPage() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filtered = lotsLand.filter((lot) => {
    if (filters["Status"] && lot.status !== filters["Status"]) return false;
    if (filters["Waterfront"] === "Waterfront" && !lot.waterfront) return false;
    if (filters["Waterfront"] === "Inland" && lot.waterfront) return false;
    return true;
  });

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Lots & Land</p>
          <h1 className="text-h1 text-white">Find Your Perfect Lot</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Browse available lots across the Coastal Bend and find the ideal setting for your custom home.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-mist-border">
        <div className="container-content">
          <FilterBar
            groups={[
              { label: "Status", options: [{ label: "All Statuses", value: "" }, { label: "Available", value: "Available" }, { label: "Featured", value: "Featured" }] },
              { label: "Waterfront", options: [{ label: "All", value: "" }, { label: "Waterfront", value: "Waterfront" }, { label: "Inland", value: "Inland" }] },
            ]}
            onFilterChange={setFilters}
          />
        </div>
      </section>

      <section className="section-standard">
        <div className="container-content">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-body text-slate">No lots match your current filters.</p>
              <button onClick={() => setFilters({})} className="btn-ghost mt-4">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((lot) => (
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
          )}
        </div>
      </section>

      {/* Land Guidance */}
      <section className="section-standard bg-sea-glass/30">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-label text-driftwood mb-3">Land Guidance</p>
              <h2 className="text-h1 text-ocean-ink mb-6">Not Sure Where to Start?</h2>
              <p className="text-body text-slate mb-6">
                Choosing the right lot is the most important decision you'll make. Our team can help
                you evaluate options based on elevation, orientation, utilities, and build feasibility.
              </p>
              <ul className="space-y-3 mb-8">
                {["Free lot evaluation and feasibility check", "Elevation certificate review", "Utility and access verification", "Neighborhood and community insights"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-body-sm text-slate">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Get Lot Guidance</Link>
            </div>
            <div className="rounded-[18px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" alt="Coastal lot" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Build on Your Lot?"
        body="Whether you own land or need help finding the perfect lot, we're here to help."
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
