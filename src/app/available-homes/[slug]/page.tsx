"use client";

import { useParams } from "next/navigation";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import InquiryPanel from "@/components/InquiryPanel";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { availableHomes } from "@/data/content";

const homesMap: Record<string, (typeof availableHomes)[0]> = {};
availableHomes.forEach((h) => { homesMap[h.slug] = h; });

export default function AvailableHomeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const home = homesMap[slug];

  if (!home) {
    return (
      <>
        <UtilityBar />
        <SiteHeader />
        <div className="pt-[160px] container-content text-center pb-20">
          <h1 className="text-h1 text-ocean-ink mb-4">Home Not Found</h1>
          <Link href="/available-homes" className="btn-primary">Back to Available Homes</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const related = availableHomes.filter((h) => h.slug !== slug).slice(0, 2);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Gallery Hero */}
      <section className="relative pt-[88px]">
        <div className="aspect-[21/9] min-h-[400px]">
          <img src={home.images[0]} alt={home.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Summary + Inquiry Panel */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="chip chip-success mb-3 inline-block">{home.status}</span>
              <h1 className="text-h1 text-ocean-ink mb-2">{home.title}</h1>
              <p className="text-body text-driftwood mb-6">{home.location}</p>

              <div className="text-h2 text-gulf-blue font-semibold mb-6">{home.price}</div>

              <div className="flex flex-wrap gap-6 py-6 border-y border-mist-border mb-8">
                <div><span className="text-label text-driftwood block">Bedrooms</span><span className="text-h3 text-ocean-ink">{home.beds}</span></div>
                <div><span className="text-label text-driftwood block">Bathrooms</span><span className="text-h3 text-ocean-ink">{home.baths}</span></div>
                <div><span className="text-label text-driftwood block">Sq Ft</span><span className="text-h3 text-ocean-ink">{home.sqft.toLocaleString()}</span></div>
              </div>

              <h2 className="text-h2 text-ocean-ink mb-4">About This Home</h2>
              <p className="text-body text-slate mb-6">{home.summary}</p>

              <h3 className="text-h3 text-ocean-ink mb-3">Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {home.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-body-sm text-slate">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#527A5A" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                    {f}
                  </li>
                ))}
              </ul>

              <h3 className="text-h3 text-ocean-ink mb-3">Location & Community</h3>
              <p className="text-body text-slate">{home.community}</p>
            </div>

            <div>
              <InquiryPanel
                title={home.title}
                price={home.price}
                details={[
                  { label: "Status", value: home.status },
                  { label: "Location", value: home.location },
                  { label: "Beds / Baths", value: `${home.beds} / ${home.baths}` },
                  { label: "Sq Ft", value: home.sqft.toLocaleString() },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Images */}
      {home.images.length > 1 && (
        <section className="section-standard bg-sea-glass/30">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">More Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {home.images.slice(1).map((src, i) => (
                <div key={i} className="rounded-[18px] overflow-hidden">
                  <img src={src} alt={home.title} className="w-full h-[300px] object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="section-standard">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">Other Available Homes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((h) => (
                <Link key={h.slug} href={`/available-homes/${h.slug}`} className="group flex bg-white rounded-[18px] overflow-hidden card-hover">
                  <div className="w-[200px] shrink-0 image-zoom">
                    <img src={h.image} alt={h.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <span className="chip chip-success text-[10px] mb-2 inline-block">{h.status}</span>
                    <h3 className="text-h3 text-ocean-ink group-hover:text-gulf-blue transition-colors">{h.title}</h3>
                    <p className="text-body-sm text-driftwood">{h.location} &middot; {h.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        headline="Ready to See This Home?"
        body="Schedule a private showing and experience coastal living at its finest."
        primaryCta={{ label: "Schedule a Showing", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
