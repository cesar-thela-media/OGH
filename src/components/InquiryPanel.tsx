import Link from "next/link";

interface InquiryPanelProps {
  title: string;
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
  details?: { label: string; value: string }[];
}

export default function InquiryPanel({
  title,
  price,
  ctaLabel = "Schedule a Tour",
  ctaHref = "/contact",
  details,
}: InquiryPanelProps) {
  return (
    <div className="bg-white rounded-[18px] p-6 md:p-8 sticky top-[104px] shadow-sm border border-mist-border">
      <h3 className="text-h2 text-ocean-ink mb-2">{title}</h3>
      {price && <p className="text-h3 text-gulf-blue font-semibold mb-4">{price}</p>}
      {details && (
        <div className="space-y-3 mb-6">
          {details.map((d) => (
            <div key={d.label} className="flex justify-between text-body-sm">
              <span className="text-driftwood">{d.label}</span>
              <span className="text-slate font-medium">{d.value}</span>
            </div>
          ))}
        </div>
      )}
      <Link href={ctaHref} className="btn-primary w-full mb-3">
        {ctaLabel}
      </Link>
      <Link href="tel:+13611234567" className="btn-secondary w-full text-sm">
        Call (361) 123-4567
      </Link>
    </div>
  );
}
