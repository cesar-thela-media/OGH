import Link from "next/link";

const items = [
  { label: "(361) 123-4567", href: "tel:+13611234567" },
  { label: "Corpus Christi, TX", href: "/contact" },
  { label: "Trusted Since 2015", href: "/about" },
];

export default function UtilityBar() {
  return (
    <div className="bg-ocean-ink text-white text-body-sm">
      <div className="container-content flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors duration-200 text-[13px]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-1 text-white/60 text-[13px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Serving the Coastal Bend</span>
        </div>
      </div>
    </div>
  );
}
