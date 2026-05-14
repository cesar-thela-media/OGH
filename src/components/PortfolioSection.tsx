'use client'

import Link from "next/link"

const projects = [
  {
    title: "Azure Bay Villas",
    description: "Private oceanfront villas.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tag: "VILLAS",
  },
  {
    title: "Oceanview Residences",
    description: "Luxury sea-facing apartments.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    tag: "APARTMENTS",
  },
  {
    title: "Coral Crest Villas",
    description: "Bespoke villas with timeless design.",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?w=800&q=80",
    tag: "VILLAS",
  },
]

export default function PortfolioSection() {
  return (
    <section className="bg-[#000000] py-28 lg:py-36 overflow-hidden">
      <div className="w-full px-[5%]">
        {/* Section Label */}
        <p className="text-center text-[13px] font-[500] uppercase tracking-[4px] text-[#C5A368] mb-4">
          OUR PROJECTS
        </p>

        {/* Headline */}
        <h2 className="font-heading text-center text-[42px] md:text-[52px] leading-[1.2] text-white font-[400] tracking-[-0.5px]">
          Exquisite Spaces. Extraordinary Living.
        </h2>

        {/* Brand divider line */}
        <div className="flex justify-center mt-6 mb-16 lg:mb-20">
          <div className="w-[60px] h-[1px] bg-[#013773]" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative max-w-[1280px] mx-auto flex items-center gap-0">
          {/* Left Arrow — outside cards */}
          <div className="shrink-0 mr-4 xl:mr-6">
            <button
              className="w-[50px] h-[50px] rounded-full border border-white/40 flex items-center justify-center bg-black hover:border-white/60 transition-all duration-300"
              aria-label="Previous project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>

          {/* Cards — centered in remaining space */}
          <div className="flex-1 flex justify-center gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full max-w-[380px] bg-black overflow-hidden group"
              >
                {/* Image — 3:2 aspect ratio */}
                <div className="relative">
                  <div
                    className="aspect-[3/2] bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  {/* Category tag over image */}
                  <div className="absolute top-4 left-4 bg-[#013773]/90 px-3 py-1.5">
                    <span className="text-[11px] font-[500] uppercase tracking-[2px] text-white">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-[24px] md:text-[26px] text-white font-[400] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#A0A0A0] leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-[13px] font-[500] uppercase tracking-[2px] text-[#C5A368] hover:text-[#D4B47A] transition-colors duration-300 group/link"
                  >
                    VIEW PROJECT
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow — outside cards */}
          <div className="shrink-0 ml-4 xl:ml-6">
            <button
              className="w-[50px] h-[50px] rounded-full border border-white/40 flex items-center justify-center bg-black hover:border-white/60 transition-all duration-300"
              aria-label="Next project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
