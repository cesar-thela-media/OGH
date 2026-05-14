import Link from "next/link"

const reasons = [
  {
    title: "Quality Craftsmanship",
    desc: "Every home we build reflects our unwavering commitment to quality. From foundation to finishing touches, we use premium materials and proven techniques that stand the test of time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2 L30 12 L26 12 L26 30 L22 30 L22 22 L14 22 L14 30 L10 30 L10 12 L6 12 Z" />
        <line x1="14" y1="22" x2="22" y2="22" />
      </svg>
    ),
  },
  {
    title: "Custom Design",
    desc: "Your home, your way. We work closely with you to create a home that reflects your unique lifestyle, preferences, and personality — no cookie-cutter designs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="16" r="10" />
        <circle cx="18" cy="16" r="3" />
        <path d="M18 26 L18 32" />
        <circle cx="18" cy="16" r="6" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "No surprises, no hidden fees. We provide detailed, honest pricing from day one so you know exactly what your investment looks like before we break ground.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 4 L6 10 L6 18 C6 26 12 30 18 32 C24 30 30 26 30 18 L30 10 Z" />
        <path d="M14 16 L18 20 L24 12" />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    desc: "As a locally owned builder, we know the Coastal Bend inside and out. We build for this climate, understand local regulations, and are deeply connected to the community.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="16" r="10" fill="none" />
        <circle cx="18" cy="16" r="3" fill="none" />
        <path d="M18 26 L18 32" />
      </svg>
    ),
  },
  {
    title: "After-Sale Support",
    desc: "Our relationship doesn&apos;t end at closing. We stand behind our work and are always available to support you long after move-in day.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Built on Your Lot",
    desc: "Already own land? We can build on your property. No need to search for a new lot — bring your vision to life right where you are.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
]

export default function WhyOghPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            WHY CHOOSE US
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px] mx-auto">
            Why Ocean Glory Homes?
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Here&apos;s why homeowners across the Coastal Bend trust us with their most important investment.
          </p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-[#111111] p-8 md:p-10 border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300">
                <div className="mb-5">{r.icon}</div>
                <div className="w-[40px] h-[1px] bg-white/30 mb-5" />
                <h3 className="font-heading text-[22px] text-white font-[400] mb-3">{r.title}</h3>
                <p className="text-[15px] text-[#555555] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Start Your Journey
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Let&apos;s build something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            GET STARTED
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
