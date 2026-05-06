import { ScrollReveal } from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-24 gradient-warm-blue">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text — white for readability on blue gradient */}
          <ScrollReveal animation="slide-up">
            <div>
              <p className="text-white/80 font-[600] text-sm tracking-[0.15em] uppercase mb-4">
                About Ocean Glory Homes
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-white leading-tight mb-6">
                Building Homes, Building Trust
              </h2>
              <div className="space-y-4 text-white/85 leading-relaxed">
                <p>
                  We recognize that buying or building a home is one of the most
                  important decisions you will make. At Ocean Glory Homes, we work
                  closely with you throughout every phase of the process,
                  developing a floor plan tailored specifically for your family.
                </p>
                <p>
                  Our commitment to frequent communication means you are never
                  left wondering about the status of your project. From the first
                  consultation to the final walkthrough, we are by your side.
                </p>
                <p>
                  As a locally owned and operated builder serving Corpus Christi
                  and Rockport, Texas, we take pride in every home we build and
                  every relationship we cultivate.
                </p>
              </div>
              <a href="tel:3617658888" className="btn-gold mt-8 inline-flex">
                Call (361) 765-8888
              </a>
            </div>
          </ScrollReveal>

          {/* Image — entryway, no duplicate with hero */}
          <ScrollReveal animation="scale-in" delay={150}>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  loading="lazy"
                  src="https://oceangloryhomes.com/wp-content/uploads/2022/11/entryway.jpg"
                  alt="Elegant entryway in an Ocean Glory Homes custom home"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
