import { ScrollReveal, ScrollRevealStagger } from "@/components/ScrollReveal";

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
];

const statusColors: Record<string, string> = {
  "For Sale": "bg-green-100 text-green-800",
  "Under Construction": "bg-blue-100 text-blue-800",
  "Under Contract": "bg-amber-100 text-amber-800",
  "Sold": "bg-gray-100 text-gray-500",
};

export default function ForSalePage() {
  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 gradient-section overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
          <p className="text-brand-gold font-[600] text-sm tracking-[0.15em] uppercase mb-4">
            Available Now
          </p>
          <h1 className="text-4xl md:text-[4rem] font-heading font-[700] text-white leading-tight mb-4">
            Homes for Sale
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Browse our current inventory of new custom homes in Corpus Christi
            and Rockport.
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-24 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
          <ScrollRevealStagger
            animation="slide-up"
            staggerDelay={80}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {properties.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-card-border card-hover"
              >
                <div className="h-48 gradient-card-fallback relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0071ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span className="text-xs text-muted">Home in {p.community}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-[600] px-3 py-1 rounded-full ${
                        statusColors[p.status]
                      }`}
                    >
                      {p.status}
                    </span>
                    <span className="text-xs text-muted">{p.community}</span>
                  </div>
                  <h3 className="text-lg font-heading font-[700] text-brand-dark">
                    {p.address}
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Rockport, Texas
                  </p>
                </div>
              </div>
            ))}
          </ScrollRevealStagger>
        </div>
      </section>

      <section className="py-20 gradient-section text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-[700] text-white mb-4">
            Want to Schedule a Tour?
          </h2>
          <a href="tel:3617658888" className="btn-primary text-lg inline-flex">
            Call (361) 765-8888
          </a>
        </div>
      </section>
    </>
  );
}
