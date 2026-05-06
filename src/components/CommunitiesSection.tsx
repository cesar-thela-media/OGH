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

const iconComponents: Record<string, React.ReactNode> = {
  "⛳": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
      <circle cx="12" cy="12" r="3" fill="#0071ce" stroke="none" />
    </svg>
  ),
  "🌲": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 12h16L12 2z" />
      <path d="M12 12v10" />
      <path d="M8 16l4-4 4 4" />
    </svg>
  ),
  "⛵": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M12 21V3" />
      <path d="M8 12l4-6 4 6" />
      <path d="M6 17l6-3 6 3" />
    </svg>
  ),
  "🌅": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      <path d="M5 16h14" />
    </svg>
  ),
};

export default function CommunitiesSection() {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
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
              className="bg-white rounded-xl p-8 border border-card-border card-hover text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                {iconComponents[c.icon]}
              </div>
              <h3 className="text-lg font-heading font-[700] text-brand-dark mb-2">
                {c.name}
              </h3>
              <p className="text-brand-blue text-xs font-[600] tracking-wider uppercase mb-3">
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
