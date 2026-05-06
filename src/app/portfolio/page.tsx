"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = [
  { id: "all", label: "All" },
  { id: "exteriors", label: "Exteriors" },
  { id: "kitchens", label: "Kitchens" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "living", label: "Living Spaces" },
  { id: "dining", label: "Dining Spaces" },
  { id: "foyers", label: "Foyers" },
];

const images: { src: string; alt: string; category: string }[] = [
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/exterior.jpg",
    alt: "Custom home exterior in Corpus Christi",
    category: "exteriors",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/kitchen.jpg",
    alt: "Luxury custom kitchen with premium finishes",
    category: "kitchens",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bath.jpg",
    alt: "Spa-inspired bathroom with modern fixtures",
    category: "bathrooms",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/dining.jpg",
    alt: "Elegant dining room with custom details",
    category: "dining",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/entryway.jpg",
    alt: "Grand entryway with beautiful finishes",
    category: "foyers",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bedroom.jpg",
    alt: "Spacious bedroom with natural light",
    category: "living",
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2026/04/home-builder-details.jpg",
    alt: "Home builder construction details",
    category: "exteriors",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 gradient-section overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Portfolio of Homes
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Browse our collection of custom homes showcasing our craftsmanship
            and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-sm font-[600] px-5 py-2.5 rounded-full transition-all duration-200 ${
                  active === cat.id
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-warm-bg text-muted hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-warm-bg min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted">No images in this category yet.</p>
              <p className="text-xs text-muted mt-2">
                Check back soon for updates.
              </p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {filtered.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-xl overflow-hidden group card-hover relative gradient-card-fallback"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ minHeight: "250px" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs font-[600] tracking-wider uppercase">
                      {categories.find((c) => c.id === img.category)?.label ||
                        img.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-section text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-white/70 mb-6">
            Schedule a visit to tour our model homes.
          </p>
          <a href="tel:3617658888" className="btn-primary text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
