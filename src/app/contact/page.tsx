"use client";

import { useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/content";

const interests = [
  "Custom Home Build",
  "Available Home Tour",
  "Lots & Land Inquiry",
  "General Question",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Contact</p>
          <h1 className="text-h1 text-white">Let's Start the Conversation</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Whether you're ready to build, looking for a home, or just exploring options — we're here to help.
          </p>
        </div>
      </section>

      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-[18px] p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-sea-glass flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <h2 className="text-h2 text-ocean-ink mb-3">Thank You!</h2>
                  <p className="text-body text-slate">We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-[18px] p-8 md:p-10">
                  <h2 className="text-h2 text-ocean-ink mb-6">Send Us a Message</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-label text-driftwood block mb-2">Name *</label>
                      <input type="text" required className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors" />
                    </div>
                    <div>
                      <label className="text-label text-driftwood block mb-2">Email *</label>
                      <input type="email" required className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="text-label text-driftwood block mb-2">Phone</label>
                    <input type="tel" className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors" />
                  </div>
                  <div className="mb-5">
                    <label className="text-label text-driftwood block mb-2">I'm interested in</label>
                    <select className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors">
                      <option value="">Select an option</option>
                      {interests.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="text-label text-driftwood block mb-2">Tell us more *</label>
                    <textarea required rows={4} className="w-full p-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message</button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[18px] p-8 md:p-10">
                <h2 className="text-h2 text-ocean-ink mb-6">What Happens Next</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "We Review", body: "Our team reviews your message within 24 hours." },
                    { step: "2", title: "We Connect", body: "We'll reach out to learn more about your project." },
                    { step: "3", title: "We Plan", body: "Schedule a site visit or consultation at your convenience." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-sea-glass flex items-center justify-center shrink-0">
                        <span className="text-body font-semibold text-gulf-blue">{item.step}</span>
                      </div>
                      <div>
                        <p className="text-body font-semibold text-ocean-ink">{item.title}</p>
                        <p className="text-body-sm text-slate">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-4">
                <div className="bg-white rounded-[18px] p-6 flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div>
                    <p className="text-body-sm text-driftwood">Phone</p>
                    <p className="text-body text-ocean-ink font-semibold">{site.phone}</p>
                  </div>
                </div>
                <div className="bg-white rounded-[18px] p-6 flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <p className="text-body-sm text-driftwood">Email</p>
                    <p className="text-body text-ocean-ink font-semibold">{site.email}</p>
                  </div>
                </div>
                <div className="bg-white rounded-[18px] p-6 flex items-center gap-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <p className="text-body-sm text-driftwood">Office</p>
                    <p className="text-body text-ocean-ink font-semibold">{site.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
