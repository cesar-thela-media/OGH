import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

export default function IntegritySection() {
  const images = [
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bedroom.jpg",
      alt: "Luxurious bedroom in an Ocean Glory Homes custom home",
      label: "Master Suites",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bath.jpg",
      alt: "Spa-inspired bathroom in a custom home",
      label: "Luxury Bathrooms",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/dining.jpg",
      alt: "Elegant dining space in a Texas custom home",
      label: "Dining Spaces",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2026/04/home-builder-details.jpg",
      alt: "Quality craftsmanship details by Ocean Glory Homes",
      label: "Craftsmanship",
    },
  ];

  return (
    <section className="py-20 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        {/* Header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight mb-4">
              Built with Integrity
            </h2>
            <p className="text-body leading-relaxed text-lg">
              Every home is built with honest pricing, quality craftsmanship, and
              constant communication.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Image Grid */}
        <ScrollRevealStagger
          animation="slide-up"
          staggerDelay={120}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group h-[250px] md:h-[350px] card-hover shadow-md gradient-card-fallback"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm font-[600] tracking-wider uppercase">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
