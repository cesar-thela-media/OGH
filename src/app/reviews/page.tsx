import Link from "next/link"

const testimonials = [
  { text: "We bought our home last year and are so grateful to this amazing builder! He literally built our dream home. Please call to have your home built by this builder. He is conscientious, professional and has gone above and beyond.", name: "Maria & David" },
  { text: "Ocean Glory Homes is fully committed to customer support. They are quick and responsive. Completely satisfied with my home.", name: "Jennifer T." },
  { text: "Ocean Glory Homes assured that all my plans were done to my specifications, the details were precise and beautifully finished.", name: "Robert K." },
  { text: "Reza is very attentive and detail oriented. He worked with me throughout the process. I'm thankful I chose Ocean Glory Homes.", name: "Michael S." },
  { text: "The quality of this home is great!! Thank you for making our crazy ideas come to light!", name: "Ryan & Kassandra" },
  { text: "We truly couldn't have picked anyone better. Our home was completed on budget and on time.", name: "Sarah & Tom" },
  { text: "Reza is a pleasure to work with — personable, conscientious and detail oriented. He went above and beyond.", name: "Amanda P." },
  { text: "Ocean Glory Homes built my family a beautiful home for us to enjoy for years to come. I highly recommend them.", name: "Patricia M." },
]

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            TESTIMONIALS
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[800px] mx-auto">
            What Our Homeowners Say
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Don&apos;t take our word for it. Hear from the families who call an Ocean Glory home their own.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#111111] p-8 md:p-10 border-l-4 border-[#013773] border border-[#013773]/10 hover:border-[#013773]/30 transition-all duration-300">
                {/* Quote graphic */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5 opacity-50">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <blockquote className="font-heading text-[18px] md:text-[20px] leading-[1.6] text-white font-[400] italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="w-[40px] h-[1px] bg-white/30 mb-4" />
                <p className="text-[14px] text-black/60 font-[500] uppercase tracking-[2px]">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#C5A368] py-24 lg:py-28">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <h2 className="font-heading text-[34px] md:text-[42px] text-white font-[500] leading-tight mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#555555] text-[16px] leading-relaxed max-w-md mx-auto mb-10">
            Join our family of happy homeowners.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300"
          >
            INQUIRE NOW
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
