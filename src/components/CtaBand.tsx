export default function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 gradient-dark-gold">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(248,165,0,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[15%] text-center">
        <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-white leading-tight mb-4">
          Start Building Your Dream Home
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Call us today and take the first step toward the home you&apos;ve always wanted.
        </p>
        <a
          href="tel:3617658888"
          className="inline-block text-4xl md:text-5xl font-heading font-[700] text-white hover:text-brand-gold transition-colors"
        >
          (361) 765-8888
        </a>
      </div>
    </section>
  );
}
