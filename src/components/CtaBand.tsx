import Link from "next/link";

interface CtaBandProps {
  headline: string;
  body?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "dark" | "light";
}

export default function CtaBand({
  headline,
  body,
  primaryCta,
  secondaryCta,
  variant = "dark",
}: CtaBandProps) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "bg-ocean-ink" : "bg-sea-glass"}>
      <div className="container-content section-standard text-center">
        <h2
          className={`text-h1 mb-4 ${
            isDark ? "text-white" : "text-ocean-ink"
          }`}
        >
          {headline}
        </h2>
        {body && (
          <p
            className={`text-body max-w-[600px] mx-auto mb-8 ${
              isDark ? "text-white/70" : "text-slate"
            }`}
          >
            {body}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`btn-primary ${
              isDark
                ? "bg-white text-ocean-ink hover:bg-white/90"
                : ""
            }`}
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`btn-secondary ${
                isDark
                  ? "border-white/30 text-white hover:border-white hover:bg-white/10"
                  : ""
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
