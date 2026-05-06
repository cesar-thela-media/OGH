import { ScrollReveal } from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-3">
                About Ocean Glory Homes
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-6">
                Your Dream Home Awaits
              </h2>
              <p className="text-body leading-relaxed mb-8 max-w-md">
                Ocean Glory Homes is a family owned, custom home builder located in Rockport
                and Corpus Christi known for quality, craftsmanship, and the highest level
                of customer service. We believe our custom homes should be as unique as the
                families who live in them.
              </p>
              <a href="/for-sale" className="btn-primary">Browse Our Homes</a>
            </div>
            {/* Right: image */}
            <div className="rounded-[20px] overflow-hidden shadow-lg gradient-warm">
              <img src="https://oceangloryhomes.com/wp-content/uploads/2022/11/kitchen.jpg"
                   alt="Custom kitchen"
                   className="w-full h-[380px] object-cover"
                   loading="lazy" />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats row — 3 columns */}
        <ScrollReveal animation="slide-up" delay={150}>
          <div className="grid grid-cols-3 gap-8 mt-16 border-t border-card-border pt-10">
            {[
              { number: "15+", label: "Years Experience", desc: "Building custom homes along the Coastal Bend" },
              { number: "50+", label: "Homes Built", desc: "Custom homes crafted for families like yours" },
              { number: "100%", label: "Satisfaction", desc: "Committed to your complete satisfaction" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-heading font-[700] text-brand-blue leading-none mb-2">{s.number}</p>
                <p className="text-sm font-[600] text-brand-dark mb-1">{s.label}</p>
                <p className="text-xs text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
