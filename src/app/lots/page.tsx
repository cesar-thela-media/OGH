import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";

const communities = [
  {
    name: "Rockport Country Club",
    tagline: "Premier Golf Course Living",
    description:
      "An exclusive gated community offering stunning golf course views, resort-style amenities, and beautifully designed custom homes. Perfect for those seeking an active yet peaceful lifestyle.",
    features: [
      "Golf course views",
      "Gated community",
      "Resort-style amenities",
      "Custom homesites",
    ],
  },
  {
    name: "Rockport Country Club - Daniel's Forest",
    tagline: "Cul-de-Sac Serenity",
    description:
      "A peaceful enclave within the Rockport Country Club featuring cul-de-sac lots with breathtaking golf course views. Limited to just 20 homes, this intimate community offers privacy and exclusivity.",
    features: [
      "Cul-de-sac lots available",
      "Golf course views",
      "20 homesites total",
      "Quiet, private setting",
    ],
  },
  {
    name: "Southwind Harbor",
    tagline: "Waterfront Living",
    description:
      "Canal lots with direct waterfront access on Cape Velero Street. A boater's paradise where you can dock at your own backyard and enjoy the Coastal Bend waterways.",
    features: [
      "Canal lots available",
      "Waterfront views",
      "Boat access",
      "Cape Velero Street location",
    ],
  },
  {
    name: "Southwind Harbor - Darya's Estates",
    tagline: "Sunset Views",
    description:
      "Premium lots within Southwind Harbor offering serene water and pond views. Known for spectacular sunsets, these estate-sized lots provide a tranquil setting for your custom dream home.",
    features: [
      "Water and pond views",
      "Spectacular sunsets",
      "Estate-sized lots",
      "Premium location",
    ],
  },
  {
    name: "Harbor Oaks",
    tagline: "Central Rockport Living",
    description:
      "An established neighborhood in the heart of Rockport, close to shopping, dining, and all the amenities the Coastal Bend has to offer. Convenient location without sacrificing tranquility.",
    features: [
      "Central Rockport location",
      "Close to shopping & dining",
      "Established neighborhood",
      "Convenient access",
    ],
  },
];

export default function LotsPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 gradient-dark-gold overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Find Your Lot
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Available Lots for Sale
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our beautiful communities and find the perfect lot for your
            custom home in Corpus Christi and Rockport, TX.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="space-y-8">
            {communities.map((c, i) => (
              <ScrollReveal key={c.name} animation="slide-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-brand-grey card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-brand-gold font-[600] tracking-wider uppercase">
                          Community {i + 1}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-heading font-[700] text-brand-dark">
                        {c.name}
                      </h2>
                      <p className="text-brand-gold font-[600] text-sm mt-1">
                        {c.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-body leading-relaxed mb-6 max-w-3xl">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-[600] px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-dark-gold text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Interested in a Lot?
          </h2>
          <p className="text-white/70 mb-6">
            Call us to discuss available lots and pricing.
          </p>
          <a href="tel:3617658888" className="btn-primary text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
