export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[#111111]">
      <div className="section-padding container-luxury">
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="max-w-xl">
            <h2 className="font-heading text-[32px] md:text-[40px] text-white font-[500] leading-tight mb-4">
              Let&apos;s Build<br />
              Together
            </h2>
            <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
              Your vision deserves a home that matches its ambition.
              Let&apos;s discuss how we can bring your dream residence to life.
            </p>
            <a href="tel:3617658888" className="btn-ghost inline-flex">
              (361) 765-8888
            </a>
          </div>

          {/* Right: Decorative brand wave/curve */}
          <div className="hidden md:block shrink-0">
            <svg
              width="180"
              height="120"
              viewBox="0 0 180 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 60 C40 20, 80 100, 120 60 C140 40, 160 80, 180 60"
                stroke="#C5A368"
                strokeWidth="0.3"
                opacity="0.3"
              />
              <path
                d="M0 70 C40 30, 80 110, 120 70 C140 50, 160 90, 180 70"
                stroke="#C5A368"
                strokeWidth="0.3"
                opacity="0.15"
              />
              <path
                d="M0 50 C40 10, 80 90, 120 50 C140 30, 160 70, 180 50"
                stroke="#C5A368"
                strokeWidth="0.3"
                opacity="0.15"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
