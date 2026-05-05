import Link from "next/link";

interface InventoryCardProps {
  image: string;
  status: string;
  statusType?: "success" | "warning" | "active";
  title: string;
  location: string;
  price?: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  specs?: { label: string; value: string }[];
  href: string;
}

export default function InventoryCard({
  image,
  status,
  statusType = "active",
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  specs,
  href,
}: InventoryCardProps) {
  const statusColors: Record<string, string> = {
    success: "bg-[#E3F2E4] text-success",
    warning: "bg-[#FDECD9] text-warning",
    active: "bg-sea-glass text-gulf-blue",
  };

  return (
    <Link
      href={href}
      className="group block bg-white rounded-[18px] overflow-hidden card-hover"
    >
      <div className="image-zoom aspect-[16/12] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span
          className={`absolute top-4 left-4 chip ${statusColors[statusType] || statusColors.active}`}
        >
          {status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-h3 text-ocean-ink mb-1 group-hover:text-gulf-blue transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-driftwood mb-3">{location}</p>
        {price && (
          <p className="text-h3 text-ocean-ink font-semibold mb-3">{price}</p>
        )}
        {beds && baths && sqft && (
          <div className="flex items-center gap-4 text-body-sm text-slate mb-3">
            <span>{beds} Beds</span>
            <span className="w-[1px] h-4 bg-mist-border" />
            <span>{baths} Baths</span>
            <span className="w-[1px] h-4 bg-mist-border" />
            <span>{sqft.toLocaleString()} Sq Ft</span>
          </div>
        )}
        {specs && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-body-sm text-slate mb-3">
            {specs.map((s) => (
              <span key={s.label}>
                {s.label}: <strong>{s.value}</strong>
              </span>
            ))}
          </div>
        )}
        <span className="btn-ghost text-sm mt-2">
          View Details
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
