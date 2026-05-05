const steps = [
  {
    number: "01",
    title: "Discover",
    body: "We start with what matters to you — your vision, budget, and the lifestyle you're after. We'll tour lots, explore communities, and define your project scope.",
  },
  {
    number: "02",
    title: "Plan",
    body: "Our design team brings your vision to life with custom floor plans, material selections, and coastal-appropriate specifications. Every detail is intentional.",
  },
  {
    number: "03",
    title: "Build",
    body: "Construction begins with our vetted trade partners. You'll get regular updates, site visit access, and a project manager who's always available.",
  },
  {
    number: "04",
    title: "Move In",
    body: "We walk through every detail together before you move in. Your new coastal home is built to last and designed for the life you want.",
  },
];

interface ProcessTimelineProps {
  expanded?: boolean;
  featured?: boolean;
}

export default function ProcessTimeline({ expanded, featured }: ProcessTimelineProps) {
  const displaySteps = featured ? steps.slice(0, 3) : steps;

  return (
    <div className="container-content">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {displaySteps.map((step, i) => (
          <div key={step.number} className="relative">
            {/* Connector line */}
            {i < displaySteps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[60px] right-0 h-[2px] bg-mist-border -z-10" />
            )}
            <div className="w-20 h-20 rounded-full bg-sea-glass flex items-center justify-center mb-5">
              <span className="text-h3 text-gulf-blue font-semibold">{step.number}</span>
            </div>
            <h3 className="text-h3 text-ocean-ink mb-3">{step.title}</h3>
            <p className="text-body-sm text-slate">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
