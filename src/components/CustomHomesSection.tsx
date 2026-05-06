import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

export default function CustomHomesSection() {
  const images = [
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg",
      alt: "Custom home exterior at 103 St. Andrews",
      label: "Build on Your Lot",
      wide: true,
      description: "Bring your vision to life on your own property",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/bath.jpg",
      alt: "Luxury bathroom with premium finishes by Ocean Glory Homes",
      label: "Spa Bathrooms",
      wide: false,
      description: "",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2025/06/14-Tradewinds-Primary-Living-Area.jpg",
      alt: "Bright and spacious living area in a custom home",
      label: "Open Living Areas",
      wide: false,
      description: "",
    },
  ];

  return (
    <section className="py-24 bg-warm-coastal">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Your Land, Your Home
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-dark leading-tight mb-4">
              Custom Homes — We Can Build on Your Lot
            </h2>
            <p className="text-body leading-relaxed">
              Already own land? Let us build your dream home on your property.
              Locally owned and operated in Corpus Christi and Rockport, TX.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <ScrollRevealStagger
          animation="slide-up"
          staggerDelay={100}
          className="grid md:grid-cols-3 gap-4"
        >
          {/* Wide card — 2 cols */}
          <div className="md:col-span-2 relative rounded-xl overflow-hidden h-[400px] group card-hover shadow-md">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-white text-2xl font-heading font-[700] mb-2">
                {images[0].label}
              </h3>
              <p className="text-white/80 text-sm">{images[0].description}</p>
            </div>
          </div>

          {/* Right stacked — bath */}
          <div className="relative rounded-xl overflow-hidden h-[193px] group card-hover shadow-md">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-heading font-[700]">
                {images[1].label}
              </h3>
            </div>
          </div>

          {/* Living area */}
          <div className="relative rounded-xl overflow-hidden h-[200px] group card-hover shadow-md">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-heading font-[700]">
                {images[2].label}
              </h3>
            </div>
          </div>
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
