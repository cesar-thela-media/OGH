import Link from "next/link"

const properties = [
  { address: "118 Forest Hills", community: "Rockport Country Club", status: "For Sale" },
  { address: "116 Forest Hills", community: "Rockport Country Club", status: "For Sale" },
  { address: "427 Augusta", community: "Rockport", status: "Under Construction" },
  { address: "10 Westpointe", community: "Rockport Country Club", status: "For Sale" },
  { address: "125 Sunrise", community: "Rockport", status: "For Sale" },
  { address: "1511 Cape Velero", community: "Southwind Harbor", status: "Under Construction" },
  { address: "15 Tradewinds", community: "Southwind Harbor", status: "Under Contract" },
  { address: "114 Forest Hills", community: "Rockport Country Club", status: "For Sale" },
  { address: "24 Tradewinds", community: "Southwind Harbor", status: "For Sale" },
  { address: "2221 N Fulton Beach", community: "Rockport", status: "For Sale" },
  { address: "210 Royal Oaks", community: "Rockport", status: "Under Construction" },
  { address: "8 Westpointe", community: "Rockport Country Club", status: "For Sale" },
  { address: "103 St Andrews", community: "Rockport", status: "For Sale" },
  { address: "101 Cypress Point", community: "Rockport Country Club", status: "Under Contract" },
  { address: "14 Tradewinds", community: "Southwind Harbor", status: "For Sale" },
]

const statusColors: Record<string, string> = {
  "For Sale": "border-[#4ADE80] text-[#4ADE80]",
  "Under Construction": "border-[#013773] text-black/60",
  "Under Contract": "border-[#FBBF24] text-[#FBBF24]",
  "Sold": "border-[#666666] text-[#444444]",
}

export default function ForSalePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            AVAILABLE NOW
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[700px] mx-auto">
            Homes for Sale
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Browse our current inventory of new custom homes in Corpus Christi and Rockport.
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <div key={i} className="bg-[#111111] border border-[#013773]/20 hover:border-[#013773]/40 transition-all duration-300 group">
                {/* Image placeholder */}
                <div className="aspect-[3/2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border-b border-[#013773]/10">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-[600] uppercase tracking-[2px] px-3 py-1 border ${statusColors[p.status]}`}>
                      {p.status}
                    </span>
                    <span className="text-[12px] text-[#555555]">{p.community}</span>
                  </div>
                  <h3 className="font-heading text-[20px] md:text-[22px] text-white font-[400] leading-tight">
                    {p.address}
                  </h3>
                  <p className="text-[13px] text-[#444444] mt-1">Rockport, Texas</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Want to Schedule a Tour?
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Call us to arrange a private showing of any available home.
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
