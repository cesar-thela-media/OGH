"use client";

import { useParams } from "next/navigation";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import GalleryBlock from "@/components/GalleryBlock";
import InquiryPanel from "@/components/InquiryPanel";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { portfolioProjects } from "@/data/content";

const portfolioData: Record<string, (typeof portfolioProjects)[0]> = {};
portfolioProjects.forEach((p) => { portfolioData[p.slug] = p; });

export default function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioData[slug];

  if (!project) {
    return (
      <>
        <UtilityBar />
        <SiteHeader />
        <div className="pt-[160px] container-content text-center pb-20">
          <h1 className="text-h1 text-ocean-ink mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="btn-primary">Back to Portfolio</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const related = portfolioProjects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-[88px]">
        <div className="aspect-[21/9] min-h-[400px]">
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Details */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="chip">{project.style}</span>
                {project.waterfront && <span className="chip chip-active">Waterfront</span>}
              </div>
              <h1 className="text-h1 text-ocean-ink mb-2">{project.title}</h1>
              <p className="text-body text-driftwood mb-6">{project.location}</p>

              {/* Specs Row */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-mist-border mb-8">
                <div><span className="text-label text-driftwood block">Bedrooms</span><span className="text-h3 text-ocean-ink">{project.specs.beds}</span></div>
                <div><span className="text-label text-driftwood block">Bathrooms</span><span className="text-h3 text-ocean-ink">{project.specs.baths}</span></div>
                <div><span className="text-label text-driftwood block">Sq Ft</span><span className="text-h3 text-ocean-ink">{project.specs.sqft.toLocaleString()}</span></div>
                <div><span className="text-label text-driftwood block">Year Built</span><span className="text-h3 text-ocean-ink">{project.specs.year}</span></div>
              </div>

              <h2 className="text-h2 text-ocean-ink mb-4">Design Story</h2>
              <p className="text-body text-slate">{project.story}</p>
            </div>

            <div>
              <InquiryPanel title="Interested in this style?" details={[{ label: "Project", value: project.title }, { label: "Style", value: project.style }, { label: "Location", value: project.location }]} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 1 && (
        <section className="section-standard bg-sea-glass/30">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">Gallery</h2>
            <GalleryBlock images={project.images.slice(1).map((src) => ({ src, alt: project.title }))} />
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section-standard">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group block bg-white rounded-[18px] overflow-hidden card-hover">
                  <div className="image-zoom aspect-[16/10]">
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
      )}

      <CtaBand
        headline="Inspired by This Home?"
        body="Let's create something beautiful for your coastal property."
        primaryCta={{ label: "Start Your Build", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
