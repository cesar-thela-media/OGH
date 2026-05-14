'use client'

export default function DesktopHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
      {/* Background — modern luxury villa at dusk */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85')",
            backgroundPosition: '60% 50%',
          }}
        />
        {/* Strong left gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-40% to-transparent" />
        {/* Dark bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 via-50% to-transparent" />
        {/* Warm brand ambient glow */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 60%, #013773 0%, transparent 60%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[5%] pt-32 pb-20">
        <div className="max-w-[600px]">
          <h1 className="font-heading text-[56px] md:text-[72px] leading-[1.08] text-white font-[300] mb-5">
            Crafting Timeless<br />
            Oceanfront Living
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm md:max-w-md mb-9">
            Luxury villas and residences designed to inspire, built to endure.
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2.5 px-9 py-3.5 text-[11px] font-[600] uppercase tracking-[1.5px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            EXPLORE OUR PROJECTS
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
