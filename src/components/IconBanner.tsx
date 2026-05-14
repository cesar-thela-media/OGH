export default function IconBanner() {
  const items = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Diamond/faceted ring — representing PREMIUM QUALITY */}
          <path d="M18 2 L30 12 L26 12 L26 30 L22 30 L22 22 L14 22 L14 30 L10 30 L10 12 L6 12 Z" fill="none" />
          <line x1="14" y1="22" x2="22" y2="22" />
        </svg>
      ),
      label: "PREMIUM QUALITY",
      subtext: "Finest materials, superior craftsmanship",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Map pin — representing PRIME LOCATIONS */}
          <circle cx="18" cy="16" r="10" fill="none" />
          <circle cx="18" cy="16" r="3" fill="none" />
          <path d="M18 26 L18 32" />
          {/* smaller icon inside pin */}
          <circle cx="18" cy="16" r="6" strokeDasharray="2 2" />
        </svg>
      ),
      label: "PRIME LOCATIONS",
      subtext: "Handpicked oceanfront and waterfront sites",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Infinity-like interlocking loops 'B' & 'D' — representing BESPOKE DESIGN */}
          <path d="M10 12 C6 12 4 16 6 18 C8 20 12 20 14 18 C16 16 18 16 20 18 C22 20 26 20 28 18 C30 16 28 12 24 12" />
          <circle cx="8" cy="16" r="2" fill="#C5A368" />
          <circle cx="26" cy="16" r="2" fill="#C5A368" />
        </svg>
      ),
      label: "BESPOKE DESIGN",
      subtext: "Thoughtful architecture, tailored to you",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Shield with protective roof — representing TRUST & TRANSPARENCY */}
          <path d="M18 4 L6 10 L6 18 C6 26 12 30 18 32 C24 30 30 26 30 18 L30 10 Z" />
          <path d="M14 16 L18 20 L24 12" strokeWidth="1.5" />
        </svg>
      ),
      label: "TRUST & TRANSPARENCY",
      subtext: "Commitment to honesty, clarity, and value",
    },
  ];

  return (
    <section className="bg-[#111111] py-12">
      <div className="w-full px-[5%]">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center px-6 py-8 relative border-b md:border-b-0 md:border-r border-[#013773]/20 last:border-0"
            >
              {/* Icon */}
              <div className="mb-4">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="font-body text-white text-[11px] font-[600] uppercase tracking-[1.5px] mb-2">
                {item.label}
              </h3>
              {/* Subtext */}
              <p className="font-body text-[#A0A0A0] text-[12px] leading-relaxed max-w-[180px]">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
