"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    name: "Built Our Dream Home!",
    text: "We bought our home last year and are so grateful to this amazing builder! He literally built our dream home. Please call to have your home built by this builder. He is conscientious, professional and has gone above and beyond.",
  },
  {
    name: "Committed to Customer Support",
    text: "Ocean Glory Homes is fully committed to customer support. They are quick and responsive and go out of their way to provide quick resolution to any issues you may encounter on your home. Completely satisfied with my home.",
  },
  {
    name: "Precise and Beautifully Finished",
    text: "Ocean Glory Homes assured that all my plans were done to my specifications, and that the details were precise and beautifully finished.",
  },
  {
    name: "Attentive and Detail Oriented",
    text: "After moving back to CC, Ocean Glory built my custom home. Reza is very attentive and detail oriented.",
  },
  {
    name: "Wowed Beyond Belief",
    text: "We walked in to our new home and we were wowed beyond belief. Beautiful. Good quality control. There was no damage after Harvey.",
  },
  {
    name: "Very Personable",
    text: "Reza is very personable and easy to get along with. He did all that we asked of him and the house was very tastefully and well built.",
  },
  {
    name: "No Regrets",
    text: "I purchased my first house from Ocean Glory Homes… I loved it from the first showing.",
  },
  {
    name: "Completely Satisfied",
    text: "I have been completely satisfied with my purchase. The quality, design and amenities was second to none.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-[15%]">
        <ScrollReveal animation="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-white/80 font-[600] text-sm tracking-[0.15em] uppercase mb-4">
              Homeowner Reviews
            </p>
            <h2 className="text-3xl md:text-[3rem] font-heading font-[700] text-white leading-tight">
              What Our Homeowners Say
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonial Card */}
        <ScrollReveal animation="slide-up" delay={100}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-warm-bg rounded-2xl p-8 md:p-12 border border-card-border relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#f8a500"
                    stroke="#f8a500"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-body leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Source */}
              <p className="text-dark font-heading font-[700] text-sm">
                — {t.name}
              </p>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-card-border">
                <div className="text-xs text-muted">
                  {current + 1} of {testimonials.length}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
                    aria-label="Previous testimonial"
                  >
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
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-card-border flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
                    aria-label="Next testimonial"
                  >
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-brand-blue w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
