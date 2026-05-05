import Link from "next/link";

const footerGroups = [
  {
    title: "Build",
    links: [
      { label: "Build With Us", href: "/build-with-us" },
      { label: "Our Process", href: "/build-with-us#process" },
      { label: "Custom Options", href: "/build-with-us" },
      { label: "Lot Guidance", href: "/build-with-us#lots" },
    ],
  },
  {
    title: "Browse",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Available Homes", href: "/available-homes" },
      { label: "Lots & Land", href: "/lots-land" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Service Area", href: "/about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "(361) 123-4567", href: "tel:+13611234567" },
      { label: "hello@oceangloryhomes.com", href: "mailto:hello@oceangloryhomes.com" },
      { label: "Get Directions", href: "#" },
      { label: "Schedule a Visit", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ocean-ink text-white">
      <div className="container-content section-standard">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-label text-white/50 mb-5">{group.title}</h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 hover:text-white transition-colors duration-200 text-body-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/50 text-body-sm">
            &copy; {new Date().getFullYear()} Ocean Glory Homes. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-body-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-body-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
