import Link from "next/link"

const sold = [
  { address: "115 Forest Hills", community: "Rockport Country Club", year: 2025 },
  { address: "102 Cypress Point", community: "Rockport Country Club", year: 2025 },
  { address: "12 Westpointe", community: "Rockport Country Club", year: 2024 },
  { address: "9 Tradewinds", community: "Southwind Harbor", year: 2024 },
  { address: "1505 Cape Velero", community: "Southwind Harbor", year: 2024 },
  { address: "2201 N Fulton Beach", community: "Rockport", year: 2024 },
  { address: "104 St Andrews", community: "Rockport", year: 2023 },
  { address: "117 Forest Hills", community: "Rockport Country Club", year: 2023 },
  { address: "7 Westpointe", community: "Rockport Country Club", year: 2023 },
  { address: "13 Tradewinds", community: "Southwind Harbor", year: 2023 },
  { address: "101 Cypress Point", community: "Rockport Country Club", year: 2023 },
  { address: "14 Westpointe", community: "Rockport Country Club", year: 2023 },
  { address: "6 Tradewinds", community: "Southwind Harbor", year: 2022 },
  { address: "1510 Cape Velero", community: "Southwind Harbor", year: 2022 },
  { address: "118 Forest Hills", community: "Rockport Country Club", year: 2022 },
  { address: "2231 N Fulton Beach", community: "Rockport", year: 2022 },
  { address: "105 St Andrews", community: "Rockport", year: 2022 },
  { address: "119 Forest Hills", community: "Rockport Country Club", year: 2021 },
  { address: "5 Westpointe", community: "Rockport Country Club", year: 2021 },
  { address: "1501 Cape Velero", community: "Southwind Harbor", year: 2021 },
]

export default function RecentlySoldPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            SOLD
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[700px] mx-auto">
            Recently Sold Homes
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            See the homes we&apos;ve sold. Every one is a family we&apos;ve helped find their dream home.
          </p>
        </div>
      </section>

      {/* Sold Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sold.map((p, i) => (
              <div key={i} className="bg-[#111111] border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300 group">
                <div className="aspect-[3/2] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border-b border-[#013773]/10 relative">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <div className="absolute top-3 left-3 border border-[#666666] px-3 py-1">
                    <span className="text-[11px] font-[600] uppercase tracking-[2px] text-[#444444]">SOLD</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[12px] text-[#555555]">{p.community}</span>
                    <span className="text-[12px] text-[#444444]">{p.year}</span>
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
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Let&apos;s build your dream home together.
          </p>
          <Link
            href="tel:3617658888"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] border border-[#013773] text-[#C5A368] hover:bg-[#013773]/10 transition-all duration-300"
          >
            (361) 765-8888
          </Link>
        </div>
      </section>
    </>
  )
}
