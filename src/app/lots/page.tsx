import Link from "next/link"

const communities = [
  {
    name: "Rockport Country Club",
    tagline: "Premier Golf Course Living",
    description: "An exclusive gated community offering stunning golf course views, resort-style amenities, and beautifully designed custom homesites.",
    lots: 8,
  },
  {
    name: "Rockport Country Club - Daniel's Forest",
    tagline: "Cul-de-Sac Serenity",
    description: "A peaceful enclave within Rockport Country Club featuring cul-de-sac lots with breathtaking golf course views. Limited to just 20 homes.",
    lots: 4,
  },
  {
    name: "Southwind Harbor",
    tagline: "Waterfront Living",
    description: "Canal lots with direct waterfront access on Cape Velero Street. A boater's paradise where you can dock at your own backyard.",
    lots: 6,
  },
  {
    name: "Darya's Estate",
    tagline: "Sunset Views",
    description: "Premium lots within Southwind Harbor offering serene water and pond views with spectacular sunsets.",
    lots: 3,
  },
  {
    name: "Harbor Oaks",
    tagline: "Central Rockport Living",
    description: "An established neighborhood in central Rockport, close to shopping, dining, and all the Coastal Bend amenities.",
    lots: 2,
  },
]

export default function LotsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            BUILD YOUR DREAM
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px] mx-auto">
            Building Lots Available
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Explore our beautiful communities and find the perfect lot for your custom home.
          </p>
        </div>
      </section>

      {/* Communities */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto space-y-8">
          {communities.map((c, i) => (
            <div key={i} className="bg-[#111111] border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] text-black/60 font-[600] uppercase tracking-[2px]">
                      COMMUNITY {i + 1}
                    </span>
                  </div>
                  <h2 className="font-heading text-[26px] md:text-[30px] text-white font-[400]">
                    {c.name}
                  </h2>
                  <p className="text-black/60 text-[13px] font-[500] uppercase tracking-[2px] mt-1">
                    {c.tagline}
                  </p>
                </div>
                <span className="text-[12px] text-black/60 border border-[#013773]/30 px-4 py-2 shrink-0">
                  {c.lots} LOT{c.lots !== 1 ? 'S' : ''} AVAILABLE
                </span>
              </div>
              <p className="text-[16px] text-[#555555] leading-relaxed max-w-3xl">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Interested in a Lot?
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Call us to discuss available lots and pricing.
          </p>
          <Link
            href="tel:3617658888"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            Call (361) 765-8888
          </Link>
        </div>
      </section>
    </>
  )
}
