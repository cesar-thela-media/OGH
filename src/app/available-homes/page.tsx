"use client";

import { useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import FilterBar from "@/components/FilterBar";
import InventoryCard from "@/components/InventoryCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { availableHomes } from "@/data/content";

export default function AvailableHomesPage() {
  const [filters, setFilters] = useState<Record<string, string>>({});

  const filtered = availableHomes.filter((h) => {
    if (filters["Status"] && h.status !== filters["Status"]) return false;
    if (filters["Bedrooms"] && h.beds < parseInt(filters["Bedrooms"])) return false;
    if (filters["Waterfront"] === "Waterfront" && !h.community.toLowerCase().includes("waterfront")) return false;
    return true;
  });

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Available Homes</p>
          <h1 className="text-h1 text-white">Move-In Ready Coastal Homes</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Browse our inventory of available homes in Corpus Christi, Port Aransas, and beyond.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-mist-border">
        <div className="container-content">
          <FilterBar
            groups={[
              { label: "Status", options: [{ label: "All Statuses", value: "" }, { label: "Move-In Ready", value: "Move-In Ready" }, { label: "Under Construction", value: "Under Construction" }, { label: "Just Listed", value: "Just Listed" }] },
              { label: "Bedrooms", options: [{ label: "Any", value: "" }, { label: "3+", value: "3" }, { label: "4+", value: "4" }] },
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
              <p className="text-body text-slate">No homes match your current filters.</p>
              <button onClick={() => setFilters({})} className="btn-ghost mt-4">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((home) => (
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
          )}
        </div>
      </section>

      <CtaBand
        headline="Not Finding What You're Looking For?"
        body="Custom building lets you design exactly what you want. Let's talk about your vision."
        primaryCta={{ label: "Build Custom", href: "/build-with-us" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
