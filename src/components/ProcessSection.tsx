import { ScrollReveal } from "./ScrollReveal";

const steps = [
  { step: "01", title: "Initial Consultation", desc: "We meet to discuss your vision, budget, and timeline. We help determine the perfect lot and floor plan for your family." },
  { step: "02", title: "Design & Build", desc: "Our team crafts your custom home with premium materials and meticulous attention to detail. You're involved every step of the way." },
  { step: "03", title: "Keys in Your Hands", desc: "We walk you through your finished home, ensuring every detail exceeds expectations. Welcome home." },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
              How Our Process Works
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((p, i) => (
            <ScrollReveal key={p.step} animation="slide-up" delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue font-heading font-[700] text-xl">{p.step}</span>
                </div>
                <h3 className="text-xl font-heading font-[700] text-brand-dark mb-3">{p.title}</h3>
                <p className="text-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
