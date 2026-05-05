"use client";

import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

const colors = [
  { name: "Ocean Ink", hex: "#102A3A", css: "bg-ocean-ink text-white" },
  { name: "Gulf Blue", hex: "#1E5D84", css: "bg-gulf-blue text-white" },
  { name: "Deep Gulf", hex: "#163F5B", css: "bg-deep-gulf text-white" },
  { name: "Shell White", hex: "#FAF8F4", css: "bg-shell-white text-ocean-ink border" },
  { name: "Pure White", hex: "#FFFFFF", css: "bg-white text-ocean-ink border" },
  { name: "Sea Glass", hex: "#DCE9E7", css: "bg-sea-glass text-ocean-ink" },
  { name: "Sandstone", hex: "#E8D8C3", css: "bg-sandstone text-ocean-ink" },
  { name: "Slate", hex: "#4E5961", css: "bg-slate text-white" },
  { name: "Driftwood", hex: "#85796B", css: "bg-driftwood text-white" },
  { name: "Brass Gold", hex: "#B88945", css: "bg-brass-gold text-white" },
  { name: "Mist Border", hex: "#D8D7D2", css: "bg-mist-border text-ocean-ink" },
  { name: "Success", hex: "#527A5A", css: "bg-success text-white" },
  { name: "Warning", hex: "#A46B2A", css: "bg-warning text-white" },
  { name: "Error", hex: "#A34A43", css: "bg-error text-white" },
  { name: "Info", hex: "#567A96", css: "bg-info text-white" },
];

export default function DesignSystemPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />

      <div className="bg-ocean-ink pt-[120px] pb-16">
        <div className="container-content">
          <p className="text-label text-white/50 mb-3">Reference</p>
          <h1 className="text-h1 text-white">Design System</h1>
          <p className="text-body text-white/70 mt-3">Ocean Glory Homes — design tokens and component reference.</p>
        </div>
      </div>

      <div className="section-standard container-content space-y-16">
        {/* Colors */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Colors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {colors.map((c) => (
              <div key={c.name} className="rounded-[18px] overflow-hidden shadow-sm">
                <div className={`h-20 ${c.css.split(" ")[0]} flex items-center justify-center text-body-sm font-medium`}>
                  {c.hex}
                </div>
                <div className="p-3 bg-white">
                  <p className="text-body-sm font-semibold text-ocean-ink">{c.name}</p>
                  <p className="text-[12px] text-driftwood">{c.css.split(" ")[0].replace("bg-", "")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Typography</h2>
          <div className="bg-white rounded-[18px] p-8 space-y-6">
            <div>
              <p className="text-label text-driftwood mb-1">Headings — Cormorant Garamond</p>
              <p className="text-hero">Hero 68/74</p>
              <p className="text-h1">Heading 1 48/54</p>
              <p className="text-h2">Heading 2 34/40</p>
              <p className="text-h3">Heading 3 24/30</p>
            </div>
            <div>
              <p className="text-label text-driftwood mb-1">Body — Inter</p>
              <p className="text-body">Body text 17/28 — The quick brown fox jumps over the lazy dog.</p>
              <p className="text-body-sm">Body small 15/24 — The quick brown fox jumps over the lazy dog.</p>
              <p className="text-label">Label 12/18 Uppercase Tracked</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Spacing & Layout</h2>
          <div className="bg-white rounded-[18px] p-8 space-y-4">
            {[
              { label: "Section padding desktop", value: "96px" },
              { label: "Section padding tablet", value: "64px" },
              { label: "Section padding mobile", value: "64px" },
              { label: "Card radius", value: "18px" },
              { label: "Input radius", value: "14px" },
              { label: "Button radius", value: "999px (pill)" },
              { label: "Max container width", value: "1320px" },
              { label: "Inner content width", value: "1200px" },
              { label: "Container padding desktop", value: "48px" },
              { label: "Container padding tablet", value: "32px" },
              { label: "Container padding mobile", value: "20px" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center border-b border-mist-border pb-3">
                <span className="text-body-sm text-slate">{item.label}</span>
                <span className="text-body-sm text-gulf-blue font-mono font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Buttons</h2>
          <div className="bg-white rounded-[18px] p-8 space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="#" className="btn-primary">Primary Button</Link>
              <Link href="#" className="btn-secondary">Secondary Button</Link>
              <Link href="#" className="btn-ghost">Tertiary Link</Link>
            </div>
            <div>
              <p className="text-label text-driftwood mb-3">Chips</p>
              <div className="flex flex-wrap gap-3">
                <span className="chip">Default Chip</span>
                <span className="chip chip-success">Success Chip</span>
                <span className="chip chip-warning">Warning Chip</span>
                <span className="chip chip-active">Active Chip</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[18px] p-8 card-hover shadow-sm border border-mist-border">
              <h3 className="text-h3 text-ocean-ink mb-2">Standard Card</h3>
              <p className="text-body-sm text-slate mb-4">Hover me for a lift effect.</p>
              <span className="btn-ghost text-sm">Learn More</span>
            </div>
            <div className="bg-white rounded-[18px] overflow-hidden shadow-sm border border-mist-border image-zoom">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Card with image" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-h3 text-ocean-ink mb-1">Image Card</h3>
                <p className="text-body-sm text-slate">With zoom effect on hover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Forms */}
        <section>
          <h2 className="text-h2 text-ocean-ink mb-6">Forms</h2>
          <div className="bg-white rounded-[18px] p-8 space-y-5 max-w-[500px]">
            <div>
              <label className="text-label text-driftwood block mb-2">Text Input</label>
              <input type="text" placeholder="Placeholder text" className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors" />
            </div>
            <div>
              <label className="text-label text-driftwood block mb-2">Select</label>
              <select className="w-full h-[52px] px-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div>
              <label className="text-label text-driftwood block mb-2">Textarea</label>
              <textarea rows={3} className="w-full p-4 rounded-[14px] border border-mist-border bg-shell-white text-slate text-body-sm focus:outline-none focus:border-gulf-blue transition-colors resize-none" />
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
