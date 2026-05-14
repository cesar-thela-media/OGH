import Link from "next/link"

export default function PreFooterCta() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-24 lg:py-28">
      {/* Geometric line-art overlay */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave/geometric patterns */}
          <path d="M0 200 C200 150 400 250 600 180 C800 110 1000 250 1440 160" stroke="#C5A368" strokeWidth="1" />
          <path d="M0 260 C200 210 400 310 600 240 C800 170 1000 310 1440 220" stroke="#C5A368" strokeWidth="0.8" />
          <path d="M0 320 C200 270 400 370 600 300 C800 230 1000 370 1440 280" stroke="#C5A368" strokeWidth="0.6" />
          <path d="M0 380 C200 330 400 430 600 360 C800 290 1000 430 1440 340" stroke="#C5A368" strokeWidth="0.5" />
          {/* Abstract floor-plan lines */}
          <rect x="80" y="100" width="60" height="40" stroke="#C5A368" strokeWidth="0.5" rx="2" />
          <rect x="1300" y="420" width="80" height="50" stroke="#C5A368" strokeWidth="0.5" rx="2" />
          <circle cx="400" cy="450" r="30" stroke="#C5A368" strokeWidth="0.5" />
          <circle cx="1050" cy="150" r="25" stroke="#C5A368" strokeWidth="0.5" />
          <path d="M1200 100 L1250 130 L1220 170" stroke="#C5A368" strokeWidth="0.5" fill="none" />
          <path d="M200 480 L240 510 L220 540" stroke="#C5A368" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="w-full px-[5%] relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Let&apos;s Build Something<br />
            Timeless Together
          </h2>
          <p className="text-[#A0A0A0] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Share your vision with us. We&apos;ll turn it into a legacy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            INQUIRE NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
