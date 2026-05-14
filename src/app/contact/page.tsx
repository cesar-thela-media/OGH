"use client"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Visual only — no backend
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111111] pt-40 lg:pt-48 pb-28 lg:pb-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto text-center">
          <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 mb-4">
            CONTACT US
          </p>
          <h1 className="font-heading text-[42px] md:text-[56px] lg:text-[64px] leading-[1.15] text-white font-[400] mb-6 max-w-[700px] mx-auto">
            Get In Touch
          </h1>
          <div className="w-[60px] h-[1px] bg-white/30 mx-auto mb-6" />
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#555555] max-w-[600px] mx-auto">
            Ready to start building your dream home? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#C5A368] py-28 lg:py-36">
        <div className="w-full px-[5%] max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left — Form */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[13px] font-[500] uppercase tracking-[4px] text-black/60 shrink-0">
                  SEND A MESSAGE
                </p>
                <div className="h-px flex-1 bg-white/20" />
              </div>
              <h2 className="font-heading text-[34px] md:text-[42px] leading-[1.2] text-white font-[400] mb-8">
                Let&apos;s Build Together
              </h2>
              <p className="text-[16px] text-[#555555] leading-relaxed mb-10">
                Whether you have a specific vision or are just starting to explore your options, we&apos;re here to help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[12px] text-black/60 uppercase tracking-[2px] font-[600] mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-5 py-3.5 bg-[#111111] border border-[#013773]/20 text-white text-[15px] focus:outline-none focus:border-[#013773] transition-colors placeholder:text-[#444444]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[12px] text-black/60 uppercase tracking-[2px] font-[600] mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-5 py-3.5 bg-[#111111] border border-[#013773]/20 text-white text-[15px] focus:outline-none focus:border-[#013773] transition-colors placeholder:text-[#444444]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[12px] text-black/60 uppercase tracking-[2px] font-[600] mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3.5 bg-[#111111] border border-[#013773]/20 text-white text-[15px] focus:outline-none focus:border-[#013773] transition-colors placeholder:text-[#444444]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[12px] text-black/60 uppercase tracking-[2px] font-[600] mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-5 py-3.5 bg-[#111111] border border-[#013773]/20 text-white text-[15px] focus:outline-none focus:border-[#013773] transition-colors placeholder:text-[#444444] resize-none"
                    placeholder="Tell us about your dream home..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-[13px] font-[600] uppercase tracking-[2px] bg-[#013773] text-white hover:bg-[#014B9A] transition-all duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right — Contact Info */}
            <div className="lg:pt-16">
              <div className="space-y-10">
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#013773]/30 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] text-white font-[400] mb-1">Phone</h3>
                    <a href="tel:3617658888" className="text-[16px] text-black/60 hover:text-[#D4B47A] transition-colors">
                      (361) 765-8888
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#013773]/30 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] text-white font-[400] mb-1">Email</h3>
                    <a href="mailto:info@oceangloryhomes.com" className="text-[16px] text-black/60 hover:text-[#D4B47A] transition-colors">
                      info@oceangloryhomes.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#013773]/30 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] text-white font-[400] mb-1">Service Area</h3>
                    <p className="text-[16px] text-[#555555] leading-relaxed">
                      Corpus Christi &amp; Rockport, Texas
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 border border-[#013773]/30 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A368" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] text-white font-[400] mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="https://www.facebook.com/oceangloryhomes" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-[#D4B47A] transition-colors text-[14px]">
                        Facebook
                      </a>
                      <a href="https://www.instagram.com/oceanglory_homes/" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-[#D4B47A] transition-colors text-[14px]">
                        Instagram
                      </a>
                      <a href="https://www.linkedin.com/company/ocean-glory-homes" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-[#D4B47A] transition-colors text-[14px]">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
