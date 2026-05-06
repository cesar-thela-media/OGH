import { ScrollRevealStagger } from "@/components/ScrollReveal";

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
];

export default function RecentlySoldPage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 gradient-section overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Past Sales
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Recently Sold Homes
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See the homes we have sold. Every one is a family we have helped
            find their dream home.
          </p>
        </div>
      </section>

      {/* Sold Grid */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <ScrollRevealStagger
            animation="slide-up"
            staggerDelay={80}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sold.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-card-border card-hover"
              >
                <div className="h-44 gradient-card-fallback relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span className="text-xs text-muted">Sold</span>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-brand-dark text-white text-xs font-[700] px-3 py-1 rounded-full">
                    SOLD
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-muted">{p.community}</span>
                    <span className="text-xs text-muted">{p.year}</span>
                  </div>
                  <h3 className="text-lg font-heading font-[700] text-brand-dark">
                    {p.address}
                  </h3>
                  <p className="text-xs text-muted mt-1">Rockport, Texas</p>
                </div>
              </div>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-section text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <a href="tel:3617658888" className="btn-primary text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
