import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

export default function PortfolioSection() {
  const projects = [
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2026/01/905-Dunes-Exterior-Front-EDIT.jpg",
      alt: "Modern home exterior at 905 Dunes",
      label: "Exteriors",
      wide: true,
      tall: true,
    },
    {
      src: "https://oceangloryhomes.com/wp-content/uploads/2025/07/103-St-Andrews-Livingroom.jpg",
      alt: "Elegant living room in a custom home",
      label: "Living Spaces",
      wide: false,
      tall: false,
    },
  ];

  return (
    <section className="py-24 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-xl">
              <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
                Our Work
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-dark leading-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-brand-blue font-[600] hover:text-[#0059a6] transition-colors inline-flex items-center gap-2"
            >
              View Full Portfolio
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Creative two-card bento grid */}
        <ScrollRevealStagger
          animation="clip-in"
          staggerDelay={120}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group card-hover shadow-md ${
                project.wide && project.tall
                  ? "md:col-span-2 md:row-span-2 h-[350px] md:h-[500px]"
                  : project.wide
                  ? "md:col-span-2 h-[220px] md:h-[300px]"
                  : "md:col-span-1 h-[220px] md:h-[500px]"
              }`}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm font-[600] tracking-wider uppercase">
                  {project.label}
                </span>
              </div>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
