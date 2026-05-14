'use client'

export default function MobileHero() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#000000]">
      {/* Background — same image, centered on the lit part of the house */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85')",
            backgroundPosition: '50% 50%',
          }}
        />
        {/* Heavier overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 via-50% to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/50" />
      </div>

      {/* Content — bottom-aligned on mobile */}
      <div className="relative z-10 w-full px-6 pb-12 pt-32">
        <h1 className="font-heading text-[38px] leading-[1.08] text-white font-[300] mb-3">
          Crafting Timeless<br />
          Oceanfront Living
        </h1>
        <p className="text-white/75 text-sm leading-relaxed max-w-xs mb-7">
          Luxury villas and residences designed to inspire, built to endure.
        </p>
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-[600] uppercase tracking-[1.5px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
        >
          EXPLORE OUR PROJECTS
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
