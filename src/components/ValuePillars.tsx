const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M12 2v20" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Coastal Expertise",
    body: "Decades of experience building on the Texas Coast means we know how to handle coastal conditions, wind ratings, and the unique beauty of seaside living.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 6 6v0a6 6 0 0 0-6-6Z" /><path d="M12 15a6 6 0 0 0-6-6v0a6 6 0 0 0 6 6Z" /><path d="M6 9a12 12 0 0 1 12 0" />
      </svg>
    ),
    title: "Custom Craftsmanship",
    body: "Every home is built with intention — from the foundation to the finishes. We partner with skilled trades who share our commitment to quality.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /><path d="M9 12h6" /><path d="M12 9v6" />
      </svg>
    ),
    title: "Clear Communication",
    body: "We keep you informed at every stage. Our transparent pricing and regular updates mean no surprises — just confidence in your build.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" />
      </svg>
    ),
    title: "Lot-to-Home Guidance",
    body: "Not sure where to start? We help you find the right lot, navigate permits, and make informed decisions from day one.",
  },
];

export default function ValuePillars() {
  return (
    <div className="container-content">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white rounded-[18px] p-8 card-hover"
          >
            <div className="w-14 h-14 rounded-full bg-sea-glass flex items-center justify-center text-gulf-blue mb-5">
              {pillar.icon}
            </div>
            <h3 className="text-h3 text-ocean-ink mb-3">{pillar.title}</h3>
            <p className="text-body-sm text-slate">{pillar.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
