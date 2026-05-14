'use client'

import { useState } from "react"

const testimonials = [
  {
    text: "Ocean Glory Homes exceeded our expectations in every way. From the stunning design to the impeccable craftsmanship, our home is a true sanctuary.",
    name: "PRIYA & ARJUN MEHTA",
    title: "Azure Bay Villa Owners",
  },
  {
    text: "The attention to detail and commitment to quality was exceptional throughout the entire process. Every room reflects the highest standards of luxury living.",
    name: "SARAH & MICHAEL THOMPSON",
    title: "Bayfront Paradise Owners",
  },
  {
    text: "We interviewed several builders before choosing Ocean Glory Homes. Their transparency, dedication, and craftsmanship made all the difference.",
    name: "ROBERT & LISA CHEN",
    title: "Oceanview Residence Owners",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  return (
    <section className="bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="w-full px-[5%]">
        {/* Section label */}
        <p className="text-center text-[13px] font-[500] uppercase tracking-[4px] text-[#C5A368] mb-4">
          WHAT OUR CLIENTS SAY
        </p>

        {/* Quote with navigation arrows */}
        <div className="relative max-w-4xl mx-auto px-14 lg:px-20">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#C5A368] hover:text-[#D4B47A] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#C5A368] hover:text-[#D4B47A] transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Quote content */}
          <div className="text-center">
            <blockquote className="font-heading text-[28px] md:text-[36px] leading-[1.35] text-white font-[400] mb-8">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Stars — intentionally absent per reference */}

            <p className="font-body text-white text-[14px] uppercase tracking-[3px] font-[500] mb-1">
              {t.name}
            </p>
            <p className="font-body text-[#A0A0A0] text-sm">
              {t.title}
            </p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full border border-[#013773] transition-all duration-300 ${
                i === current ? "bg-[#013773]" : "bg-transparent"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
