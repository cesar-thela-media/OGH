import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

export default function IntegritySection() {
  const images = [
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bedroom.jpg",
      alt: "Luxurious bedroom in an Ocean Glory Homes custom home",
      label: "Master Suites",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/kitchen.jpg",
      alt: "Custom kitchen designed by Ocean Glory Homes",
      label: "Custom Kitchens",
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
    <section className="py-24 gradient-warm-blue">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        {/* Text header */}
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-white/80 font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-white leading-tight mb-4">
              Building with Integrity
            </h2>
            <p className="text-white/85 leading-relaxed text-lg">
              Every home is built with honest pricing, quality craftsmanship, and
              constant communication.
            </p>
          </div>
        </ScrollReveal>

        {/* Image Grid — 2x2 bento */}
        <ScrollRevealStagger
          animation="slide-up"
          staggerDelay={120}
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group h-[250px] md:h-[350px] card-hover shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
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
