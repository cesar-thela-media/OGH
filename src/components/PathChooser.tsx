import Link from "next/link";

interface PathCard {
  image: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
}

const paths: PathCard[] = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Build With Us",
    body: "Design and build a custom coastal home tailored to your lifestyle and the land you love.",
    cta: { label: "Explore Our Process", href: "/build-with-us" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Available Homes",
    body: "Browse move-in ready homes in Corpus Christi's best coastal communities.",
    cta: { label: "View Available Homes", href: "/available-homes" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    title: "Lots & Land",
    body: "Find the perfect lot to build your dream home on the Texas Coast.",
    cta: { label: "Explore Lots & Land", href: "/lots-land" },
  },
];

export default function PathChooser() {
  return (
    <div className="container-content">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paths.map((path) => (
          <Link
            key={path.title}
            href={path.cta.href}
            className="group relative rounded-[18px] overflow-hidden bg-white card-hover"
          >
            <div className="image-zoom aspect-[4/3]">
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-h3 text-ocean-ink mb-2">{path.title}</h3>
              <p className="text-body-sm text-slate mb-4">{path.body}</p>
              <span className="btn-ghost text-sm">
                {path.cta.label}
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
        ))}
      </div>
    </div>
  );
}
