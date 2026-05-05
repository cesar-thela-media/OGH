import Link from "next/link";

const features = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
    title: "Coastal Modern Retreat",
    location: "North Padre Island",
    slug: "coastal-modern-retreat",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    title: "Gulf Shores Estate",
    location: "Port Aransas",
    slug: "gulf-shores-estate",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    title: "Laguna Shores Bungalow",
    location: "Corpus Christi",
    slug: "laguna-shores-bungalow",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="container-content">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((project, i) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className={`group relative rounded-[18px] overflow-hidden bg-white card-hover ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div
              className={`image-zoom ${
                i === 0 ? "aspect-[16/10] lg:aspect-[21/12]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-ink/80 via-ocean-ink/40 to-transparent p-6 pt-16">
              <h3 className={`text-white font-semibold ${i === 0 ? "text-h2" : "text-h3"}`}>
                {project.title}
              </h3>
              <p className="text-white/70 text-body-sm">{project.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
