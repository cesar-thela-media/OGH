export default function ReviewsPage() {
  const reviews = [
    {
      title: "Built Our Dream Home!",
      text: "We bought our home last year and are so grateful to this amazing builder! He literally built our dream home. Please call to have your home built by this builder. He is conscientious, professional and has gone above and beyond.",
    },
    {
      title: "Committed to Customer Support",
      text: "Ocean Glory Homes is fully committed to customer support. They are quick and responsive and go out of their way to provide quick resolution to any issues you may encounter on your home. Completely satisfied with my home.",
    },
    {
      title: "Precise and Beautifully Finished",
      text: "Ocean Glory Homes assured that all my plans were done to my specifications, and that the details were precise and beautifully finished.",
    },
    {
      title: "Attentive and Detail Oriented",
      text: "After moving back to CC, Ocean Glory built my custom home. Reza is very attentive and detail oriented.",
    },
    {
      title: "Wowed Beyond Belief",
      text: "We walked in to our new home and we were wowed beyond belief. Beautiful. Good quality control. There was no damage after Harvey.",
    },
    {
      title: "Very Personable",
      text: "Reza is very personable and easy to get along with. He did all that we asked of him and the house was very tastefully and well built.",
    },
    {
      title: "No Regrets",
      text: "I purchased my first house from Ocean Glory Homes… I loved it from the first showing.",
    },
    {
      title: "Completely Satisfied",
      text: "I have been completely satisfied with my purchase. The quality, design and amenities was second to none.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark to-brand-blue overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,179,228,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Testimonials
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            What Our Homeowners Say
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it. Hear from the families who call an
            Ocean Glory home their own.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-card-border card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f8a500"
                      stroke="#f8a500"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-body leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <p className="text-dark font-heading font-[700] text-sm">
                  — {r.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-cta text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Ready to Join Our Happy Homeowners?
          </h2>
          <a href="tel:3617658888" className="btn-gold text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
