import Link from "next/link";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featured?: boolean;
}

export default function ArticleCard({
  image,
  category,
  title,
  excerpt,
  date,
  slug,
  featured,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/journal/${slug}`}
        className="group block bg-white rounded-[18px] overflow-hidden card-hover"
      >
        <div className="image-zoom aspect-[21/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="chip">{category}</span>
            <span className="text-body-sm text-driftwood">{date}</span>
          </div>
          <h2 className="text-h2 text-ocean-ink mb-3 group-hover:text-gulf-blue transition-colors">
            {title}
          </h2>
          <p className="text-body text-slate mb-4 max-w-[680px]">{excerpt}</p>
          <span className="btn-ghost">
            Read Article
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

  return (
    <Link
      href={`/journal/${slug}`}
      className="group block bg-white rounded-[18px] overflow-hidden card-hover"
    >
      <div className="image-zoom aspect-[16/12]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="chip">{category}</span>
          <span className="text-body-sm text-driftwood">{date}</span>
        </div>
        <h3 className="text-h3 text-ocean-ink mb-2 group-hover:text-gulf-blue transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-slate mb-3 line-clamp-2">{excerpt}</p>
        <span className="btn-ghost text-sm">
          Read Article
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
