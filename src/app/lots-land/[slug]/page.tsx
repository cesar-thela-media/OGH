"use client";

import { useParams } from "next/navigation";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import InquiryPanel from "@/components/InquiryPanel";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { lotsLand } from "@/data/content";

const lotsMap: Record<string, (typeof lotsLand)[0]> = {};
lotsLand.forEach((l) => { lotsMap[l.slug] = l; });

export default function LotDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const lot = lotsMap[slug];

  if (!lot) {
    return (
      <>
        <UtilityBar />
        <SiteHeader />
        <div className="pt-[160px] container-content text-center pb-20">
          <h1 className="text-h1 text-ocean-ink mb-4">Lot Not Found</h1>
          <Link href="/lots-land" className="btn-primary">Back to Lots & Land</Link>
        </div>
        <SiteFooter />
      </>
    );
  }

  const related = lotsLand.filter((l) => l.slug !== slug).slice(0, 2);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-[88px]">
        <div className="aspect-[21/9] min-h-[400px]">
          <img src={lot.images[0]} alt={lot.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Details */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="chip chip-active">{lot.status}</span>
                {lot.waterfront && <span className="chip chip-active">Waterfront</span>}
              </div>
              <h1 className="text-h1 text-ocean-ink mb-2">{lot.title}</h1>
              <p className="text-body text-driftwood mb-6">{lot.location}</p>

              <div className="flex flex-wrap gap-6 py-6 border-y border-mist-border mb-8">
                <div><span className="text-label text-driftwood block">Acreage</span><span className="text-h3 text-ocean-ink">{lot.acreage}</span></div>
                <div><span className="text-label text-driftwood block">Community</span><span className="text-h3 text-ocean-ink">{lot.community}</span></div>
                <div><span className="text-label text-driftwood block">Waterfront</span><span className="text-h3 text-ocean-ink">{lot.waterfront ? "Yes" : "No"}</span></div>
              </div>

              <h2 className="text-h2 text-ocean-ink mb-4">About This Lot</h2>
              <p className="text-body text-slate mb-6">{lot.description}</p>

              <h3 className="text-h3 text-ocean-ink mb-3">Why This Lot Matters</h3>
              <p className="text-body text-slate mb-6">{lot.whyThisMatters}</p>

              <h3 className="text-h3 text-ocean-ink mb-3">Build Opportunity Notes</h3>
              <p className="text-body text-slate">{lot.buildNotes}</p>
            </div>

            <div>
              <InquiryPanel
                title={lot.title}
                details={[
                  { label: "Status", value: lot.status },
                  { label: "Acreage", value: lot.acreage },
                  { label: "Waterfront", value: lot.waterfront ? "Yes" : "No" },
                ]}
                ctaLabel="Inquire About This Lot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-standard bg-sea-glass/30">
          <div className="container-content">
            <h2 className="text-h2 text-ocean-ink mb-8 text-center">Other Available Lots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((l) => (
                <Link key={l.slug} href={`/lots-land/${l.slug}`} className="group flex bg-white rounded-[18px] overflow-hidden card-hover">
                  <div className="w-[180px] shrink-0 image-zoom">
                    <img src={l.image} alt={l.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col justify-center">
                    <span className="chip chip-active text-[10px] mb-2 inline-block">{l.status}</span>
                    <h3 className="text-h3 text-ocean-ink group-hover:text-gulf-blue transition-colors">{l.title}</h3>
                    <p className="text-body-sm text-driftwood">{l.location} &middot; {l.acreage}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        headline="Interested in This Lot?"
        body="Let's talk about building your dream home right here on the Texas Coast."
        primaryCta={{ label: "Inquire About This Lot", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
