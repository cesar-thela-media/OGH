"use client";

import { useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import ArticleCard from "@/components/ArticleCard";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import { journalArticles } from "@/data/content";

const categories = ["All", "Design", "Building Guide", "Advice", "Land"];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = journalArticles[0];
  const rest = journalArticles.slice(1);

  const filtered = rest.filter((a) =>
    activeCategory === "All" ? true : a.category === activeCategory
  );

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Journal</p>
          <h1 className="text-h1 text-white">Coastal Living Insights</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Tips, guides, and stories from the Ocean Glory Homes team about coastal living and custom home building.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-standard pb-0">
        <div className="container-content">
          <ArticleCard
            image={featured.image}
            category={featured.category}
            title={featured.title}
            excerpt={featured.excerpt}
            date={featured.date}
            slug={featured.slug}
            featured
          />
        </div>
      </section>

      {/* Category Filters */}
      <section className="pt-10 pb-6">
        <div className="container-content">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-gulf-blue text-white border-gulf-blue"
                    : "bg-white text-slate border-mist-border hover:border-gulf-blue hover:text-gulf-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
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

      <CtaBand
        headline="Have Questions About Building on the Coast?"
        body="Our team is here to help. Reach out anytime."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
