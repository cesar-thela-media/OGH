"use client"

import Link from "next/link"

const posts = [
  {
    title: "Corpus Christi: A Great Place to Live",
    excerpt: "Discover why Corpus Christi is one of the fastest-growing cities in Texas, with its beautiful coastline, thriving economy, and family-friendly communities.",
    date: "March 15, 2025",
    category: "Community",
  },
  {
    title: "Where to Move in Corpus Christi: Best Neighborhoods",
    excerpt: "From waterfront estates to family-friendly suburbs, explore the best neighborhoods Corpus Christi has to offer for your new custom home.",
    date: "February 28, 2025",
    category: "Real Estate",
  },
  {
    title: "New Homes in Rockport Country Club: Daniel's Forest",
    excerpt: "Introducing Daniel's Forest — an exclusive enclave of just 20 custom homes within the prestigious Rockport Country Club community.",
    date: "January 20, 2025",
    category: "New Homes",
  },
  {
    title: "The Benefits of Building on Your Own Lot",
    excerpt: "Already own land in the Coastal Bend? Here's why building a custom home on your lot offers greater value, flexibility, and personalization.",
    date: "December 10, 2024",
    category: "Home Building",
  },
  {
    title: "Custom Home Design Trends for 2025",
    excerpt: "Explore the latest trends in luxury custom home design, from open-concept living to sustainable materials and smart home integration.",
    date: "November 5, 2024",
    category: "Design",
  },
  {
    title: "Understanding the Custom Home Building Process",
    excerpt: "A step-by-step guide to building your dream home with Ocean Glory Homes — from initial consultation to final walkthrough.",
    date: "October 12, 2024",
    category: "Home Building",
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            LATEST UPDATES
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[700px] mx-auto">
            News &amp; Insights
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Stay informed with the latest from Ocean Glory Homes — community news, home building tips, and more.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div key={i} className="bg-[#111111] border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300 group">
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border-b border-[#013773]/10">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] text-black/60 font-[600] uppercase tracking-[2px]">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-[#444444]">|</span>
                    <span className="text-[12px] text-[#444444]">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-[20px] md:text-[22px] text-white font-[400] leading-tight mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-[#555555] leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-[600] uppercase tracking-[2px] text-black/60 group-hover:gap-3 transition-all duration-300">
                    READ MORE
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Subscribe for Updates
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Stay in the loop with the latest news, community updates, and new home listings.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-lg mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-black/20 border border-[#013773]/20 text-white text-[15px] focus:outline-none focus:border-[#013773] transition-colors placeholder:text-[#444444]"
            />
            <button
              type="submit"
              className="px-8 py-3.5 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
