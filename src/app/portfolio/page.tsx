import Link from "next/link"

const categories = [
  { id: "exteriors", label: "Exteriors", desc: "Stunning curb appeal and architectural design", count: 42 },
  { id: "kitchens", label: "Kitchens", desc: "Gourmet kitchens with premium finishes", count: 38 },
  { id: "bathrooms", label: "Bathrooms", desc: "Spa-inspired luxury bathrooms", count: 35 },
  { id: "living", label: "Living Spaces", desc: "Open, elegant living areas", count: 48 },
  { id: "features", label: "Features", desc: "Custom details and premium features", count: 52 },
  { id: "foyers", label: "Foyers", desc: "Grand entrances that make an impression", count: 28 },
  { id: "dining", label: "Dining Spaces", desc: "Beautiful dining rooms for entertaining", count: 30 },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            PORTFOLIO
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[700px] mx-auto">
            Our Portfolio
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Browse our collection of custom homes showcasing our craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className="bg-[#111111] border border-[#013773]/20 hover:border-[#013773]/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Gradient placeholder image */}
                <div className="aspect-[3/2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border-b border-[#013773]/10">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-[22px] md:text-[24px] text-white font-[400]">
                      {cat.label}
                    </h3>
                    <span className="text-[12px] text-black/60/60 font-[500]">
                      {cat.count}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#555555] leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-[600] uppercase tracking-[2px] text-black/60 group-hover:gap-3 transition-all duration-300">
                    VIEW GALLERY
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] border border-[#013773] text-[#C5A368] hover:bg-[#013773]/10 transition-all duration-300"
            >
              VIEW ALL PROJECTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Want to See More?
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Schedule a visit to tour our model homes.
          </p>
          <Link
            href="tel:3617658888"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            (361) 765-8888
          </Link>
        </div>
      </section>
    </>
  )
}
