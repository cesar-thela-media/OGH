import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

export default function CommunitiesSection() {
  const communities = [
    {
      name: "Rockport Country Club",
      description:
        "Premier gated community with golf course views, resort-style amenities, and beautiful custom homes.",
      features: ["Golf course views", "Gated entry", "Resort amenities"],
    },
    {
      name: "Daniel's Forest",
      description:
        "Cul-de-sac living with stunning golf course views. A peaceful enclave of 20 custom homes.",
      features: ["Cul-de-sac lots", "Golf course views", "20 homesites"],
    },
    {
      name: "Southwind Harbor",
      description:
        "Canal lots with waterfront views on Cape Velero Street. Perfect for boating enthusiasts.",
      features: ["Canal lots", "Waterfront views", "Boat access"],
    },
    {
      name: "Darya's Estates",
      description:
        "Water and pond views with spectacular sunset vistas. Luxury living in a serene setting.",
      features: ["Water/pond views", "Sunset views", "Premium lots"],
    },
    {
      name: "Harbor Oaks",
      description:
        "Central Rockport location close to shopping, dining, and all the best the coast has to offer.",
      features: ["Central location", "Close to stores", "Established neighborhood"],
    },
  ];

  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Where We Build
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-dark leading-tight mb-4">
              Communities We Serve
            </h2>
            <p className="text-body leading-relaxed">
              From golf course living to waterfront estates, find your perfect
              location in the Coastal Bend.
            </p>
          </div>
        </ScrollReveal>

        <ScrollRevealStagger
          animation="slide-up"
          staggerDelay={100}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {communities.map((community) => (
            <div
              key={community.name}
              className="bg-white rounded-xl p-8 border border-card-border card-hover"
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0071ce"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-[700] text-dark mb-3">
                {community.name}
              </h3>
              <p className="text-body text-muted text-sm mb-4 leading-relaxed">
                {community.description}
              </p>
              <ul className="space-y-1.5">
                {community.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ScrollRevealStagger>

        <ScrollReveal animation="slide-up" delay={200}>
          <div className="text-center mt-10">
            <Link href="/lots" className="btn-primary inline-flex">
              View Available Lots
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
