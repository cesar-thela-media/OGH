import Link from "next/link"

const awards = [
  {
    name: "Texas Association of Builders",
    desc: "Proud member demonstrating our commitment to professional standards and excellence in home building across Texas.",
    logo: "TAB",
  },
  {
    name: "National Association of Home Builders",
    desc: "NAHB member adhering to the highest industry standards and best building practices.",
    logo: "NAHB",
  },
  {
    name: "Coastal Bend Builders Association",
    desc: "Active member supporting the local building community and advocating for quality housing in the Coastal Bend.",
    logo: "CBBA",
  },
  {
    name: "BBB Accredited Business",
    desc: "Better Business Bureau accredited, reflecting our dedication to ethical business and customer satisfaction.",
    logo: "BBB",
  },
]

const involvement = [
  "Supporting local community events in Corpus Christi and Rockport",
  "Participating in Coastal Bend home shows and parades of homes",
  "Contributing to local charitable organizations",
  "Building energy-efficient, sustainable homes for the Coastal Bend",
  "Supporting Rockport recovery and rebuilding efforts after Hurricane Harvey",
]

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            COMMUNITY
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px] mx-auto">
            Community &amp; Recognition
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            We believe in giving back to the communities we build in.
          </p>
        </div>
      </section>

      {/* Awards / Affiliations */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
              AFFILIATIONS
            </p>
            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400]">
              Professional Affiliations &amp; Awards
            </h2>
            <div className="w-[60px] h-[1px] bg-white/30 mx-auto mt-6" />
          </div>

          {/* Badge logos row */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {awards.map((a) => (
              <div key={a.logo} className="w-[150px] h-[80px] bg-[#111111] border border-[#013773]/20 flex items-center justify-center">
                <span className="text-black/60/50 text-[11px] font-[600] uppercase tracking-[2px] text-center">{a.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((a, i) => (
              <div key={i} className="bg-[#111111] p-8 border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300">
                <div className="w-[60px] h-[1px] bg-white/30 mb-5" />
                <h3 className="font-heading text-[22px] text-white font-[400] mb-3">{a.name}</h3>
                <p className="text-[15px] text-[#555555] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
              GIVING BACK
            </p>
            <h2 className="font-heading text-[38px] md:text-[48px] leading-[1.2] text-white font-[400]">
              Community Involvement
            </h2>
            <div className="w-[60px] h-[1px] bg-white/30 mx-auto mt-6" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {involvement.map((item, i) => (
              <div key={i} className="bg-black/20 p-6 border border-[#013773]/10 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-[#013773] flex items-center justify-center shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[16px] text-[#555555] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Want to Learn More?
          </h2>
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
