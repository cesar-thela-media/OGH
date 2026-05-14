import Link from "next/link"

const features = [
  {
    title: "Floor-to-Ceiling Windows",
    desc: "Ocean views from every angle with expansive glass that floods your home with natural light.",
  },
  {
    title: "Premium Finishes",
    desc: "Quartz countertops, hardwood flooring, custom cabinetry, and designer fixtures throughout.",
  },
  {
    title: "Ocean Views",
    desc: "Wake up to breathtaking coastal vistas from the comfort of your private residence.",
  },
  {
    title: "Resort Amenities",
    desc: "Pool, fitness center, concierge services, and secure underground parking included.",
  },
  {
    title: "Open Floor Plans",
    desc: "Seamlessly connected living, dining, and kitchen spaces designed for modern coastal living.",
  },
  {
    title: "Private Balconies",
    desc: "Step outside to your own private outdoor space overlooking the Gulf of Mexico.",
  },
]

export default function ApartmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            LUXURY LIVING
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px] mx-auto">
            Oceanview Residences &amp; Apartments
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Experience the pinnacle of coastal luxury living at Oceanview Residences — where every detail is designed for elegance and comfort.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative p-[10px]" style={{ backgroundColor: '#013773' }}>
              <img
                src="https://images.unsplash.com/photo-1605146768851-eda79da39897?w=900&q=85"
                alt="Luxury sea-facing apartment"
                className="w-full h-64 md:h-96 object-cover block"
              />
            </div>
            <div className="relative p-[10px]" style={{ backgroundColor: '#013773' }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85"
                alt="Modern apartment interior with ocean view"
                className="w-full h-64 md:h-96 object-cover block"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400] mb-6">
              Designed for Coastal Sophistication
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555]">
              Oceanview Residences offers an unparalleled living experience along the Texas Coast. Each residence is thoughtfully crafted with premium finishes, open layouts, and private outdoor spaces that embrace the coastal lifestyle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#111111] p-8 border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300">
                <div className="w-[40px] h-[1px] bg-white/30 mb-5" />
                <h3 className="font-heading text-[22px] text-white font-[400] mb-3">{f.title}</h3>
                <p className="text-[15px] text-[#555555] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Reserve Your Oceanview Residence
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            These exclusive residences won&apos;t last long. Inquire about availability today.
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
      </section>
    </>
  )
}
