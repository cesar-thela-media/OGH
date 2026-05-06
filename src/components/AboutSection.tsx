import { ScrollReveal } from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <ScrollReveal animation="slide-up">
            <div>
              <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
                About Ocean Glory Homes
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-6">
                A Truly Custom Home Builder
              </h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  Ocean Glory Homes is a family owned, custom home builder
                  located in Rockport and Corpus Christi known for quality,
                  craftsmanship, and the highest level of customer service.
                </p>
                <p>
                  We believe our custom homes should be as unique as the families
                  who live in them. From the first consultation to the final
                  walkthrough, we work closely with you to develop a floor plan
                  tailored specifically for your family.
                </p>
                <p>
                  Our commitment to frequent communication means you are never
                  left wondering about the status of your project. We treat every
                  home as if it were our own.
                </p>
              </div>
              <a
                href="tel:3617658888"
                className="btn-primary mt-8 inline-flex"
              >
                Call (361) 765-8888
              </a>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal animation="scale-in" delay={150}>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-card-fallback">
                <img
                  loading="lazy"
                  src="https://oceangloryhomes.com/wp-content/uploads/2022/11/entryway.jpg"
                  alt="Elegant entryway in an Ocean Glory Homes custom home"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
