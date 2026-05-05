"use client";

import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import CtaBand from "@/components/CtaBand";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <section className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">About</p>
          <h1 className="text-h1 text-white">Our Story</h1>
          <p className="text-body text-white/70 mt-3 max-w-[500px]">
            Building quality coastal homes with integrity, craftsmanship, and a deep love for the Texas Coast.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-standard">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-[18px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Coastal home" className="w-full h-auto" loading="lazy" />
            </div>
            <div>
              <h2 className="text-h1 text-ocean-ink mb-6">Built on the Coast. Built for the Coast.</h2>
              <div className="text-body text-slate space-y-4">
                <p>
                  Ocean Glory Homes was founded with a simple mission: build beautiful, resilient
                  homes that celebrate coastal living. Since 2015, we've been helping families
                  create homes on the Texas Coast that are as functional as they are beautiful.
                </p>
                <p>
                  Every home we build starts with listening. We take the time to understand how
                  you live, what you value, and what you want from your coastal property. Then we
                  bring together skilled trades, quality materials, and decades of coastal construction
                  experience to make it real.
                </p>
                <p>
                  We don't just build houses — we build relationships. Many of our clients become
                  friends, and many come back to us for their next project. That's the Ocean Glory
                  difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-standard bg-sea-glass/30">
        <div className="container-content">
          <p className="text-label text-driftwood mb-3 text-center">Service Area</p>
          <h2 className="text-h1 text-ocean-ink mb-8 text-center">Where We Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {["Corpus Christi", "North Padre Island", "Port Aransas", "Rockport", "Portland", "Mustang Island", "Aransas Pass", "Fulton"].map((area) => (
              <div key={area} className="bg-white rounded-[18px] p-6 card-hover">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E5D84" strokeWidth="1.5" className="mx-auto mb-3"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                <p className="text-body text-ocean-ink font-semibold">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-standard">
        <div className="container-content text-center">
          <p className="text-label text-driftwood mb-3">Recognition</p>
          <h2 className="text-h1 text-ocean-ink mb-8">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Best Custom Builder", org: "Coastal Bend HBA", year: "2024" },
              { title: "Excellence in Design", org: "Texas Association of Builders", year: "2023" },
              { title: "Customer Satisfaction Award", org: "Home Builders Association", year: "2024" },
            ].map((award) => (
              <div key={award.title} className="bg-white rounded-[18px] p-8 card-hover">
                <p className="text-h3 text-ocean-ink mb-2">{award.title}</p>
                <p className="text-body-sm text-gulf-blue">{award.org}</p>
                <p className="text-body-sm text-driftwood">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-standard bg-sea-glass/30">
        <div className="container-content text-center">
          <p className="text-label text-driftwood mb-3">Our Team</p>
          <h2 className="text-h1 text-ocean-ink mb-6">Meet the People Behind Your Home</h2>
          <p className="text-body text-slate max-w-[600px] mx-auto mb-10">
            Our team brings decades of combined experience in coastal construction, design,
            and project management. We're proud to call the Coastal Bend home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Mark Sullivan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
              { name: "Elena Cruz", role: "Lead Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
              { name: "James Walker", role: "Project Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-[18px] p-6 card-hover">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-h3 text-ocean-ink">{member.name}</p>
                <p className="text-body-sm text-driftwood">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Ready to Work With Us?"
        body="Let's start a conversation about your coastal home."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <SiteFooter />
    </>
  );
}
