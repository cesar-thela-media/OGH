'use client'

import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="bg-[#C5A368]">
      <div className="w-full px-[5%] py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-20 xl:gap-28">
          {/* Left — Text */}
          <div className="lg:w-[42%]">
            {/* Kicker */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[13px] font-[500] uppercase tracking-[4px] text-white/70 shrink-0">
                ABOUT OCEAN GLORY HOMES
              </p>
              <div className="h-px flex-1 bg-white/30" />
            </div>

            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400] mb-8 max-w-[520px]">
              Building More Than Homes,<br />
              We Build Legacies.
            </h2>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-[#333333] max-w-[420px]">
              At Ocean Glory Homes, we believe a home is more than a structure&mdash;
              it&rsquo;s where life&rsquo;s best moments unfold. With a passion for design,
              we create spaces that blend lifestyle with coastal beauty.
            </p>
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-[600] uppercase tracking-[2px] border border-black text-black hover:bg-black/10 transition-all duration-300"
              >
                LEARN MORE ABOUT US
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Image with brand frame + play button */}
          <div className="lg:w-[58%]">
            <div className="relative p-[10px]" style={{ backgroundColor: '#000000' }}>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                  alt="Modern luxury villa"
                  className="w-full h-auto block"
                />
                {/* White fill play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center shadow-lg">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="#000000"
                      className="ml-1"
                    >
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
