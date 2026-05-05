"use client";

import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import { allReviews } from "@/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < rating ? "#B88945" : "#D8D7D2"}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = (allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length).toFixed(1);
  const featured = allReviews[0];
  const rest = allReviews.slice(1);

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Reviews</p>
          <h1 className="text-h1 text-white">What Our Clients Say</h1>
        </div>
      </section>

      {/* Aggregate */}
      <section className="section-standard pb-0">
        <div className="container-content">
          <div className="bg-white rounded-[18px] p-8 md:p-10 text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-h1 text-ocean-ink">{avgRating}</span>
              <span className="text-h3 text-driftwood">/ 5</span>
            </div>
            <StarRating rating={Math.round(parseFloat(avgRating))} />
            <p className="text-body-sm text-slate mt-3">{allReviews.length} reviews</p>
          </div>

          {/* Featured */}
          <div className="bg-sea-glass/50 rounded-[18px] p-8 md:p-10 mb-10">
            <StarRating rating={featured.rating} />
            <p className="text-h3 text-ocean-ink mt-4 mb-6 leading-relaxed italic">
              &ldquo;{featured.text}&rdquo;
            </p>
            <div>
              <p className="text-body font-semibold text-ocean-ink">{featured.name}</p>
              <p className="text-body-sm text-driftwood">{featured.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Grid */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((review) => (
              <div key={review.name} className="bg-white rounded-[18px] p-6 card-hover">
                <StarRating rating={review.rating} />
                <p className="text-body-sm text-slate mt-4 mb-4 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="text-body-sm font-semibold text-ocean-ink">{review.name}</p>
                  <p className="text-[13px] text-driftwood">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Add Your Review?"
        body="The best compliment is a referral. If you love your Ocean Glory home, tell a friend."
        primaryCta={{ label: "Share Your Experience", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
