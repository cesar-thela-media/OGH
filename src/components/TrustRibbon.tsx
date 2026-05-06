export default function TrustRibbon() {
  const logos = [
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2018/06/TEXAS-ASSOCIATION.gif",
      alt: "Texas Association of Builders",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2018/06/NAHB.gif",
      alt: "National Association of Home Builders",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2018/06/COSTAL-BEND.gif",
      alt: "Coastal Bend Builders Association",
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2018/06/BBB.gif",
      alt: "Better Business Bureau Accredited",
    },
  ];

  return (
    <section className="py-16 bg-warm-bg border-t border-b border-brand-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <p className="text-center text-xs text-muted tracking-[0.15em] uppercase mb-8 font-[600]">
          Proudly Affiliated With
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
