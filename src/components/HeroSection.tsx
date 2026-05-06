export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background — blue→cyan→gold */}
      <div className="absolute inset-0 gradient-cta" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(248,165,0,0.15),transparent_50%)]" />

      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://oceangloryhomes.com/wp-content/uploads/2022/11/exterior.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements — floating soft blobs */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-[15%] w-80 h-80 bg-yellow-300/5 rounded-full blur-3xl" />

      {/* Centered tagline only — no CTA buttons */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-white font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-[700] tracking-tight drop-shadow-lg">
          Homes Worthy of<br />
          <span className="italic font-[500]">Your Dreams</span>
        </h1>
      </div>

      {/* Scroll indicator — bounce arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
