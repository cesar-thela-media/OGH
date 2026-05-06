# Ocean Glory Homes — Brand Design System

> Brickly-inspired | Custom Home Builder | Corpus Christi & Rockport, TX

---

## 🎨 Color Palette

### Primary Colors (OGH Equivalents of Brickly)

| Brickly | OGH Equivalent | Hex | Usage |
|---------|---------------|-----|-------|
| Eerie Black (#1E1E1E) | OGH Dark | `#1a1a1a` | Headings, nav bg, footer bg, text on light |
| Royal Orange (#FA8B3B) | OGH Gold | `#f8a500` | Accent, CTAs, hover states, gold line accents |
| Cultured White (#F4F4F4) | OGH Warm White | `#f4f4f4` | Page background, card surfaces |
| Gainsboro Grey (#E0DDDA) | OGH Light Grey | `#e0ddda` | Borders, dividers, subtle surfaces |
| Charleston Green (#272727) | OGH Darker | `#1a1a1a` | Already mapped to OGH Dark |

### Gradient
- **Primary Gradient:** `#1a1a1a → #f8a500` (Dark to Gold)
  - Used on: Hero overlays, section backgrounds, accent lines

### Secondary
- `#ffffff` — Pure white for cards, text overlays
- `rgba(255,255,255,0.6-0.8)` — Muted white text on dark
- `rgba(248,165,0,0.1-0.2)` — Gold hover/glow effects

---

## 🔤 Typography

### Primary Font: PP Mori (OTF)

| Weight | File | Usage |
|--------|------|-------|
| SemiBold | `PPMori-SemiBold.otf` | H1, H2, nav items, large headings |
| SemiBold Italic | `PPMori-SemiBoldItalic.otf` | Accent headings, pull quotes |
| Regular | `PPMori-Regular.otf` | H3, H4, body text on dark bg, buttons |
| Regular Italic | `PPMori-RegularItalic.otf` | Testimonials, decorative quotes |
| Extralight | `PPMori-Extralight.otf` | Large decorative numbers, subtle text |
| Extralight Italic | `PPMori-ExtralightItalic.otf` | Elegant decorative elements |

### Fallback: Helvetica Neue / sans-serif

### Font Sizing (Desktop)
- **H1:** 4.5rem–5.5rem, SemiBold, tracking-tight
- **H2:** 2.5rem–3rem, SemiBold
- **H3:** 1.5rem–1.75rem, SemiBold  
- **Body:** 1rem, Regular, leading-relaxed
- **Small:** 0.875rem, Regular, tracking-wide
- **Caption/Tag:** 0.75rem, Regular, uppercase tracking-[0.15em]

---

## 🧱 Layout Principles

### Hero (Brickly Style)
- **Full-bleed** — edge-to-edge, no side margins
- Single high-quality architecture photo as background
- Dark gradient overlay (`#1a1a1a → #f8a500` warm cast on bottom)
- **Centered content:** H1 + sub-text (no CTA button in hero per Cesar)
- CTA only in navbar (`View Our Homes` button)
- Bottom: gold glow line, scroll indicator

### Nav
- **Minimal** — transparent on hero, solid on scroll
- **Dropdown menus** — expandable sub-menus for page groups
- Desktop: horizontal links + CTA button (gold-filled)
- Mobile: hamburger menu with full-screen overlay
- CTA button: `bg-gold` text `#1a1a1a`

### Content Sections
- **15% side margins** on desktop (`lg:px-[15%]`)
- Generous vertical spacing (`py-24`)
- Alternating bg: dark section → warm white section
- Section tag in uppercase, small, tracking-wide

### Cards & Containers
- **Subtle cards** — white bg, `#e0ddda` border, rounded-xl
- Image containers: never collapse (min-h or bg gradient fallback)
- Placeholder fallback: `bg-gradient-to-br from-#1a1a1a/5 to-#f8a500/10`

---

## 📄 Page Structure

### Homepage Sections (order)
1. **Hero** — Full-bleed image, centered H1, gold accent line
2. **About** — "A Truly Custom Home Builder" — two-column: text + image
3. **Integrity** — "Built with Integrity" — image grid or compact
4. **Custom Homes** — "Build on Your Lot" — image + text alternating
5. **Portfolio** — Bento image grid of best homes
6. **Communities** — Community/awards section
7. **Testimonials** — Carousel with warm white card on dark gradient
8. **CTA Band** — Gold/dark gradient with phone number

### All Subpages
- **Hero:** Gradient header (dark→gold), centered content
- **Content:** Same 15% margins, clean layout, ScrollReveal animations
- **Footer:** Consistent across all pages

---

## 🎬 Animations
- **ScrollReveal** — slide-up, scale-in, reveal (clip), fade-in
- **Duration:** 0.6s–0.8s, cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger delay:** 100–200ms between elements
- **Hero parallax:** Image moves at 0.35x scroll speed
- **Reduced motion:** All animations disabled with `prefers-reduced-motion`

---

## 🌐 Content Guidelines

### Tone
- Warm, professional, trustworthy
- Short sentences. Direct. No fluff.
- "Custom home builder in Corpus Christi and Rockport, TX"
- Highlight: quality craftsmanship, honest pricing, transparent communication

### Essential Copy (from OGH Original)
- "A truly custom home builder"
- "Family owned, known for quality, craftsmanship, and the highest level of customer service"
- "Custom homes as unique as the families who live in them"
- "Personalized design and construction process"
- "Build on property you already own or choose from our portfolio"
- "Quality craftsmanship and affordability CAN go together"
- "Phone: (361) 765-8888"

---

## 📐 CSS Architecture

### Tailwind v4 Theme Overrides

```css
@theme {
  --font-heading: 'PP Mori', 'Helvetica Neue', sans-serif;
  --font-body: 'Helvetica Neue', 'PP Mori', sans-serif;
  --color-brand-dark: #1a1a1a;
  --color-brand-gold: #f8a500;
  --color-warm-white: #f4f4f4;
  --color-brand-grey: #e0ddda;
}
```

### Gradient Classes
- `.gradient-hero` — dark overlay with gold glow on bottom
- `.gradient-dark-gold` — `#1a1a1a → #f8a500`
- `.gradient-section` — dark bg with gold accent overlay
- `.gradient-card` — subtle dark/gold gradient for image fallback
