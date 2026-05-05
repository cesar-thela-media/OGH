export default function TrustRibbon() {
  const items = [
    { value: "Custom Homes", desc: "Designed for your lifestyle" },
    { value: "Available Homes", desc: "Move-in ready" },
    { value: "Lots & Land", desc: "Find your perfect lot" },
    { value: "Corpus Christi Area", desc: "Local expertise" },
    { value: "Local Guidance", desc: "From lot to keys" },
  ];

  return (
    <div className="bg-ocean-ink">
      <div className="container-content py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.value}
              className="text-center"
            >
              <div className="text-body text-white font-semibold mb-1">{item.value}</div>
              <div className="text-body-sm text-white/50">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
