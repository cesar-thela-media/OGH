import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const features = [
  {
    title: "Flexibility",
    description:
      "Build on property you already own or choose from our portfolio of premium lots in Rockport and Corpus Christi.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0071ce"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Quality & Affordability",
    description:
      "Quality craftsmanship and affordability CAN go together. We deliver exceptional homes at honest prices.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0071ce"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Committed to Satisfaction",
    description:
      "We care about your ongoing satisfaction long after move-in day. Your home should serve you for years to come.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0071ce"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function CustomHomesSection() {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Your Land, Your Home
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
              Custom Homes — Build on Your Lot
            </h2>
            <p className="text-body leading-relaxed">
              Already own land? Let us build your dream home on your property.
              Locally owned and operated in Corpus Christi and Rockport, TX.
            </p>
          </div>
        </ScrollReveal>

        {/* Three feature cards */}
        <ScrollRevealStagger
          animation="slide-up"
          staggerDelay={120}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-card-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="text-xl font-heading font-[700] text-brand-dark mb-3">
                {f.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
