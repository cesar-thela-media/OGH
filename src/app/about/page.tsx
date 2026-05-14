import Link from "next/link"

export default function AboutPage() {
  const values = [
    { title: "Integrity", desc: "We do what we say. Honest pricing, transparent communication, and ethical business practices guide everything we build." },
    { title: "Quality", desc: "Every home is built with superior materials and meticulous attention to detail. Quality is never compromised." },
    { title: "Craftsmanship", desc: "From foundation to finishing touches, our work reflects generations of building expertise and pride." },
    { title: "Customer Satisfaction", desc: "Your success is our reputation. We listen closely, communicate openly, and deliver homes that exceed expectations." },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 shrink-0">
                ABOUT US
              </p>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px]">
              Custom Home Builder in Corpus Christi
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px]">
              Locally owned, deeply committed to building homes that families love for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 shrink-0">
                  OUR STORY
                </p>
                <div className="h-px flex-1 bg-white/20" />
              </div>
              <h2 className="font-heading text-[34px] md:text-[42px] leading-[1.2] text-white font-[400] mb-8">
                Building With Purpose,<br />
                Building With Pride.
              </h2>
              <div className="space-y-5 text-[16px] md:text-[18px] leading-[1.7] text-[#555555]">
                <p>
                  Led by Reza, Ocean Glory Homes is a locally owned custom home builder serving Corpus Christi and Rockport, Texas. With years of hands-on experience, Reza brings a personal touch to every project — treating each home as if it were his own.
                </p>
                <p>
                  We believe that a successful build starts with honest communication, transparent pricing, and uncompromising quality. From waterfront estates to family homes, we&apos;ve helped countless families turn their vision into reality.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
                >
                  CONTACT US
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative p-[10px]" style={{ backgroundColor: '#013773' }}>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85"
                  alt="Luxury custom home by Ocean Glory Homes"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
              WHAT WE STAND FOR
            </p>
            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400]">
              Our Core Values
            </h2>
            <div className="w-[60px] h-[1px] bg-white/30 mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-black/20 p-8 md:p-10 border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300">
                <div className="w-[60px] h-[1px] bg-white/30 mb-6" />
                <h3 className="font-heading text-[24px] text-white font-[400] mb-3">{v.title}</h3>
                <p className="text-[15px] md:text-[16px] text-[#555555] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building With Integrity */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 shrink-0">
                  OUR PROMISE
                </p>
                <div className="h-px flex-1 bg-white/20" />
              </div>
              <h2 className="font-heading text-[34px] md:text-[42px] leading-[1.2] text-white font-[400] mb-8">
                Building With Integrity
              </h2>
              <div className="space-y-5 text-[16px] md:text-[18px] leading-[1.7] text-[#555555]">
                <p>We&apos;re honest about costs from the start — no surprises, no hidden fees. Our careful planning ensures every detail is accounted for before construction begins.</p>
                <p>Superior service means we&apos;re with you at every step. From design consultations to final walkthroughs, we prioritize communication and transparency.</p>
                <p>Quality craftsmanship isn&apos;t a luxury — it&apos;s a standard. We build homes that stand the test of time, using materials and methods we stand behind.</p>
              </div>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-[13px] font-[600] uppercase tracking-[2px] border border-[#013773] text-[#C5A368] hover:bg-[#013773]/10 transition-all duration-300"
                >
                  GET IN TOUCH
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative p-[10px] lg:order-1" style={{ backgroundColor: '#013773' }}>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85"
                  alt="Quality craftsmanship details"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Homes - Build on Your Lot */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
              YOUR LAND, YOUR HOME
            </p>
            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400] mb-6">
              Custom Homes &mdash; Build on Your Lot
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-3xl mx-auto mb-10">
              Already own land? We can build your dream home on your property. As a locally owned builder serving Corpus Christi and Rockport, we know the terrain, the regulations, and the communities. Let us bring your vision to life on your lot.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
              >
                INQUIRE NOW
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
              Let&apos;s discuss your vision. Call us today.
            </p>
            <Link
              href="tel:3617658888"
              className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] border border-[#013773] text-[#C5A368] hover:bg-[#013773]/10 transition-all duration-300"
            >
              (361) 765-8888
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
