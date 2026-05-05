import Link from "next/link";

interface LotCardProps {
  image: string;
  status: string;
  title: string;
  location: string;
  acreage: string;
  waterfront?: boolean;
  href: string;
}

export default function LotCard({
  image,
  status,
  title,
  location,
  acreage,
  waterfront,
  href,
}: LotCardProps) {
  const statusColors: Record<string, string> = {
    Available: "chip-success",
    Pending: "chip-warning",
    Sold: "chip-success",
    Featured: "chip-active",
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
        <span className={`absolute top-4 left-4 chip ${statusColors[status] || "chip-active"}`}>
          {status}
        </span>
        {waterfront && (
          <span className="absolute top-4 right-4 chip bg-ocean-ink text-white">
            Waterfront
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-h3 text-ocean-ink mb-1 group-hover:text-gulf-blue transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-driftwood mb-2">{location}</p>
        <p className="text-body-sm text-slate mb-3">{acreage}</p>
        <span className="btn-ghost text-sm">
          View Lot
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
