import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 gradient-section overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Custom Home Builder in Corpus Christi
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Locally owned, deeply committed, and passionate about building homes
            that families love for generations.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slide-up">
              <div>
                <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-body leading-relaxed">
                  <p>
                    Ocean Glory Homes is a family owned, custom home builder
                    located in Rockport and Corpus Christi known for quality,
                    craftsmanship, and the highest level of customer service.
                  </p>
                  <p>
                    Led by Reza, our team takes pride in treating every home as if
                    it were our own. We believe that the key to a successful build
                    is open communication, honest pricing, and uncompromising
                    quality.
                  </p>
                  <p>
                    From waterfront estates in Rockport to family homes in Corpus
                    Christi, we have helped countless families turn their vision
                    into reality. We would be honored to do the same for you.
                  </p>
                </div>
                <a href="tel:3617658888" className="btn-primary mt-6 inline-flex">
                  Call (361) 765-8888
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scale-in" delay={150}>
              <div className="rounded-xl overflow-hidden shadow-xl gradient-card-fallback">
                <img
                  src="https://oceangloryhomes.com/wp-content/uploads/2022/11/exterior.jpg"
                  alt="Ocean Glory Homes custom builder"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
                Visit Us
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
                Our Office
              </h2>
              <p className="text-body text-lg mb-2">
                6725 Wall St, Corpus Christi, TX 78414
              </p>
              <p className="text-muted text-sm">
                Serving Corpus Christi, Rockport, and the Texas Coastal Bend
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <ScrollReveal animation="slide-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
                Our Values
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity First",
                desc: "We do what we say. Honest pricing, transparent communication, and ethical business practices guide everything we do.",
              },
              {
                title: "Quality Craftsmanship",
                desc: "Every home is built with superior materials and meticulous attention to detail. Quality is never compromised.",
              },
              {
                title: "Customer Focused",
                desc: "Your satisfaction is our success. We listen, communicate, and deliver homes that exceed expectations.",
              },
              {
                title: "Local Roots",
                desc: "As a locally owned builder, we know the Coastal Bend. We build for this climate, this community, and this lifestyle.",
              },
              {
                title: "Innovation",
                desc: "We stay current with the latest building techniques, design trends, and energy-efficient technologies.",
              },
              {
                title: "Community",
                desc: "We believe in giving back. Supporting local organizations and events is part of who we are.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} animation="slide-up" delay={i * 80}>
                <div className="bg-white rounded-xl p-8 border border-card-border card-hover">
                  <h3 className="text-xl font-heading font-[700] text-brand-dark mb-3">
                    {v.title}
                  </h3>
                  <p className="text-body text-muted text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-section text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%]">
          <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-white leading-tight mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <a href="tel:3617658888" className="btn-primary text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
