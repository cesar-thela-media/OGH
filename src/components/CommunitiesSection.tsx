import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const communities = [
  {
    name: "Rockport Country Club",
    tagline: "Premier Golf Course Living",
    description:
      "Premier gated community with golf course views, resort-style amenities, and beautiful custom homes.",
    icon: "⛳",
  },
  {
    name: "Daniel's Forest",
    tagline: "Cul-de-Sac Serenity",
    description:
      "Cul-de-sac living with stunning golf course views. A peaceful enclave of 20 custom homes.",
    icon: "🌲",
  },
  {
    name: "Southwind Harbor",
    tagline: "Waterfront Living",
    description:
      "Canal lots with waterfront views on Cape Velero Street. Perfect for boating enthusiasts.",
    icon: "⛵",
  },
  {
    name: "Darya's Estates",
    tagline: "Sunset Views",
    description:
      "Water and pond views with spectacular sunset vistas. Luxury living in a serene setting.",
    icon: "🌅",
  },
];

export default function CommunitiesSection() {
  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Our Communities
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {communities.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl p-8 border border-brand-grey card-hover text-center"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-heading font-[700] text-brand-dark mb-2">
                {c.name}
              </h3>
              <p className="text-brand-gold text-xs font-[600] tracking-wider uppercase mb-3">
                {c.tagline}
              </p>
              <p className="text-body text-sm leading-relaxed">
                {c.description}
              </p>
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
