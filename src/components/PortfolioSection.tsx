import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger } from "./ScrollReveal";

const projects = [
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2025/10/103-St-Andrews-Front-Exterior-2-edited.jpg",
    alt: "Stunning custom home exterior",
    label: "Exteriors",
    wide: true,
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2025/06/14-Tradewinds-Primary-Living-Area.jpg",
    alt: "Spacious living area with natural light",
    label: "Living Spaces",
    wide: false,
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2022/11/entryway.jpg",
    alt: "Grand entryway with beautiful finishes",
    label: "Entryways",
    wide: false,
  },
  {
    src: "https://oceangloryhomes.com/wp-content/uploads/2026/01/905-Dunes-Exterior-Front-EDIT.jpg",
    alt: "Modern home exterior",
    label: "Modern Homes",
    wide: false,
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-xl">
              <p className="text-brand-blue font-[600] text-sm tracking-[0.15em] uppercase mb-4">
                Our Work
              </p>
              <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-brand-dark leading-tight">
                Our Recent Work
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

        {/* Bento grid */}
        <ScrollRevealStagger
          animation="scale-in"
          staggerDelay={120}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group card-hover shadow-md gradient-card-fallback ${
                project.wide
                  ? "md:col-span-2 h-[250px] md:h-[400px]"
                  : i === 1
                  ? "md:col-span-1 h-[190px] md:h-[192px]"
                  : i === 2
                  ? "md:col-span-1 md:row-span-2 h-[190px] md:h-[400px]"
                  : "md:col-span-1 h-[190px] md:h-[192px]"
              }`}
            >
              <img
                src={project.src}
                alt={project.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
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
