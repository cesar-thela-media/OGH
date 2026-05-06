export default function CommunityPage() {
  const awards = [
    {
      title: "Texas Association of Builders",
      description:
        "Proud member of the Texas Association of Builders, demonstrating our commitment to professional standards and excellence in home building.",
    },
    {
      title: "National Association of Home Builders",
      description:
        "As an NAHB member, we adhere to the highest industry standards and stay current with the latest building practices and technologies.",
    },
    {
      title: "Coastal Bend Builders Association",
      description:
        "Active member of the Coastal Bend Builders Association, supporting the local building community and advocating for quality housing.",
    },
    {
      title: "BBB Accredited Business",
      description:
        "Better Business Bureau accredited, reflecting our dedication to ethical business practices and customer satisfaction.",
    },
  ];

  const involvement = [
    "Supporting local community events in Corpus Christi and Rockport",
    "Participating in Coastal Bend home shows and parades of homes",
    "Contributing to local charitable organizations",
    "Building energy-efficient, sustainable homes for the Coastal Bend community",
    "Supporting Rockport recovery and rebuilding efforts after Hurricane Harvey",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark to-brand-blue overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,179,228,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Community &amp; Awards
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Our Community Commitment
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We believe in giving back to the communities we build in.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-[700] text-dark mb-4">
              Professional Affiliations &amp; Awards
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Our memberships and accreditations reflect our dedication to
              quality, professionalism, and ethical building practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((a) => (
              <div
                key={a.title}
                className="bg-warm-bg rounded-xl p-8 border border-card-border card-hover"
              >
                <h3 className="text-xl font-heading font-[700] text-dark mb-3">
                  {a.title}
                </h3>
                <p className="text-body text-muted text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-[700] text-dark mb-4">
              Community Involvement
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              We are proud to be an active part of the Corpus Christi and
              Rockport communities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {involvement.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl p-6 border border-card-border"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f8a500"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-body text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-cta text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Want to Learn More?
          </h2>
          <a href="tel:3617658888" className="btn-gold text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
