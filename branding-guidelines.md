# Ocean Glory Homes — Branding Guidelines

> **Version 1.0**
> Extracted from the landing page build (May 2026).
> Use this document to maintain visual consistency across all pages.

---

## 1. Brand Identity

### Mission
Crafting timeless oceanfront homes that inspire generations.

### Tone
- **Luxurious** but not ostentatious
- **Trustworthy & Coastal** — gold accents (`#C5A368`) against dark charcoal backgrounds
- **Confident** — clean typography, generous whitespace, deliberate contrast
- **Authentic** — understated elegance, no flashy effects

### Tagline (primary)
> *Crafting Timeless Oceanfront Living*

---

## 2. Color Palette

All colors below are derived from the landing page. Use exact hex values.

### Neutral / Background

| Token | Hex | Usage |
|---|---|---|
| Pure Black | `#000000` | Portfolio section bg, card inside gold sections |
| Light Charcoal | `#111111` | Primary page bg, header bg, Testimonials section |
| Gold Alt | `#C5A368` | About section bg, Footer bg, alt section backgrounds |
| Near White | `#FDF8EE` | Headline text on dark bg |

### Gold (Text, Icons, Section Bg, Nav CTA)

| Token | Hex | Usage |
|---|---|---|
| Brand Gold | `#C5A368` | Section labels, SVG icons, alt section bg, nav CTA button |
| Gold Light | `#D4B47A` | Text hover state, nav CTA hover |

### Blue (Buttons, Borders, Decorations)

| Token | Hex | Usage |
|---|---|---|
| Brand Blue | `#013773` | Filled buttons, ghost button borders, header bar (3px), carousel dots, portfolio tags |
| Blue Light | `#014B9A` | Blue button hover state |
| Blue Divider | `#013773` | Section divider lines

### Text

| Token | Hex | Usage |
|---|---|---|
| White | `#FFFFFF` | Primary text, headings, nav links |
| Light Grey | `#A0A0A0` | Body text, descriptions, subtext |
| Dark Grey | `#555555` | Body text on gold section backgrounds (readable on gold) |
| Medium Grey | `#444444` | Muted text on gold sections |
| Near White | `#FDF8EE` | Hero headline (slightly warm white) |

### Overlay / Effects

| Token | Hex / Value | Usage |
|---|---|---|
| Black Gradient (hero) | `from-black/85 via-black/50 to-transparent` | Left-to-right text readability |
| Black Gradient (bottom) | `from-black/60 via-black/20 to-transparent` | Bottom fade on hero |
| Semi-transparent black | `bg-black/10` | Image overlays, play button backdrop |
| Gold section dividers | `bg-white/30` | Divider lines on gold sections |

### Rules
- **Never** use pure white `#FFFFFF` on blue backgrounds (low contrast)
- On **gold backgrounds** (`#C5A368`), use dark text (`#333333` or `#555555`) for readability
- **Never** use bright/vibrant colors — all accents must be muted brand blue
- **Never** use colored shadows — use `rgba(0,0,0,x)` only

---

## 3. Typography

Two-font system: **Playfair Display** (headings) + **Montserrat** (everything else).

| Property | Value |
|---|---|
| Heading Font | `Playfair Display`, Georgia, serif |
| Heading Weight | `400` (regular) — some sections use `500` |
| Heading Color | `#FFFFFF` (or `#FDF8EE` for hero) |
| Body Font | `Montserrat`, 'Helvetica Neue', Arial, sans-serif |
| Body Weight | `400` (regular) or `300` (light) |
| Body Color | `#A0A0A0` |
| Small Text | `12px` Montserrat, uppercase, letter-spacing `2px` |

### Font Sizes

| Element | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero Headline | `58–70px` | `48px` | `38px` |
| Section Headline | `48–52px` | `42px` | `36px` |
| Card Title | `26px` | `24px` | `22px` |
| Body / Paragraph | `18–20px` | `16px` | `16px` |
| Nav Link | `12px` | `12px` | — |
| Button (filled) | `11px` | `11px` | `11px` |
| Button (ghost) | `12–13px` | `12px` | `12px` |
| Section Label | `13px` | `13px` | `13px` |
| Small / Meta | `12px` | `12px` | `12px` |

### Letter-Spacing (Tracking)

| Element | Tracking |
|---|---|
| Nav Links | `1.2px` |
| Button Text | `1.5px–2px` |
| Section Labels | `4px` |
| Quote Author Name | `3px` |
| Headline (serif) | `-0.5px` to `-2px` (negative = tighter) |

### Line-Height

| Element | Value |
|---|---|
| Headlines | `1.08` to `1.2` (tight) |
| Body text | `1.5` to `1.7` |
| Small text | `1.4` |

---

## 4. Spacing System

### Container

```css
.container-luxury {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;  /* responsive horizontal padding */
}
```

All page sections use `w-full px-[5%]` as the outer wrapper.

### Section Padding

| Breakpoint | Top | Bottom |
|---|---|---|
| Desktop (lg+) | `144px` (`py-36`) | `144px` (`py-36`) |
| Tablet | `112px` (`py-28`) | `112px` (`py-28`) |
| Mobile | `112px` (`py-28`) | `112px` (`py-28`) |

### Gaps & Margins

| Context | Value |
|---|---|
| Between nav links | `20px` (`mx-5`) |
| Between portfolio cards | `24px` (`gap-6`) |
| Between icon banner items | Elastic (flex-1) with `px-6` padding |
| Between headline and paragraph | `32px` (`mb-8`) |
| Between paragraph and button | `48px` to `56px` (`mb-12` to `mb-14`) |
| Section label to headline | `16px` (`mb-4`) |
| Headline to divider | `24px` (`mt-6`) |
| Divider to content below | `64px` to `80px` (`mb-16 lg:mb-20`) |
| Card image to title | `24px` (`p-6`) |
| Card title to description | `8px` (`mb-2`) |
| Card description to link | `24px` (`mb-6`) |

---

## 5. Component Specs

### 5.1 Navigation (Desktop)

```
┌─────────────────────────────────────────────────────┐
│ [🏠] OCEAN GLORY    ABOUT US | OUR PROJECTS | ...   │
│       HOMES                                        │
│                                    [ENQUIRE NOW]    │
└─────────────────────────────────────────────────────┘
```

- **Background**: `transparent` (default) → `bg-[#0A0A0A]/90 backdrop-blur-lg` (scrolled)
- **Logo**: Stacked "OCEAN GLORY" above "HOMES", brand house icon, white text
- **Nav links**: White `#FFFFFF`, all-caps, 12px, tracking `1.2px`, weight `400`
- **CTA button**: Ghost style (1px brand blue border
- **Transition**: `500ms` on background change, `300ms` on link hover
- **Responsive**: Desktop-only (`hidden lg:block`). Mobile uses hamburger overlay.

### 5.2 Hero Section

```
┌─────────────────────────────────────────────────────┐
│  Crafting Timeless                                  │
│  Oceanfront Living                                  │
│  Luxury villas and residences...                    │
│  ┌─────────────────────┐                            │
│  │ EXPLORE OUR PROJECTS → │                          │
│  └─────────────────────┘                            │
│                                                     │
│  Background: Villa dusk shot, left gradient overlay │
└─────────────────────────────────────────────────────┘
```

- **Image**: Unsplash luxury villa at dusk `photo-1600585154340-be6161a56a0c`
- **Gradient**: `from-black/85 via-black/50 via-40% to-transparent` (left→right) + `from-black/60 via-black/20 via-50% to-transparent` (bottom→top)
- **Headline**: 2 lines, serif, 58px desktop, white. **No pre-headline.**
- **Subheadline**: Montserrat, white/75 opacity, `14px` on mobile
- **CTA**: Filled brand blue `#013773`, dark text `#0A0A0A`, with right arrow, uppercase, `11px`, sharp corners
- **No scroll indicator**, no decorative elements

### 5.3 Icon Banner (Trust Strip)

```
┌───────┬───────┬───────┬───────┐
│  🏆   │  📍   │  ♾️   │  🛡️  │
│PREMIUM│ PRIME │BESPOKE│ TRUST │
│QUALITY│LOCAT'N│ DESIGN│& TRANS│
│Fines..│Handp..│Thought│Commi..│
└───────┴───────┴───────┴───────┘
```

- **Layout**: 4-column **horizontal** grid (icon-left + text-right per the reference)
- Each item: SVG brand blue icon → white bold label → grey subtext
- **Dividers**: Blue vertical lines between items (20% opacity)
- **Background**: `bg-[#0A0A0A]`
- **Padding**: `py-12`

Wait — the most recent full-page reference says "icon-left + text-right". Confirm with the specifics:
- Actually the reference shows stacked layout (icon above title above subtext), with the four items in a horizontal row separated by blue vertical lines. This was the original design in the first reference.

Use stacked layout: icon centered → label centered → subtext centered. Items separated by `border-r border-[#013773]/20`.

### 5.4 About Section

```
┌──────────────────────┬─────────────────────────┐
│ ABOUT OCEAN GLORY ──│                         │
│                      │   ┌─────────────┐      │
│ Building More Than   │   │  [▶]        │      │
│ Homes, We Build      │   │  (image)    │      │
│ Legacies.            │   │             │      │
│                      │   └─────────────┘      │
│ At Ocean Glory Homes,│   Brand blue frame     │
│ we believe a home is │                         │
│ more than a          │                         │
│ structure—it's where │                         │
│ life's best moments  │                         │
│ unfold...            │                         │
│                      │                         │
│ [ LEARN MORE ABOUT US ]                        │
└──────────────────────┴─────────────────────────┘
```

- **Kicker**: "ABOUT OCEAN GLORY HOMES" — brand blue `#013773`, all-caps, 13px, tracking `4px`, followed by horizontal brand blue line
- **Headline**: Serif, 48px, white, 2 lines
- **Body**: Montserrat, 18px, `#A0A0A0`, max-width `420px`, line-height `1.7`
- **Button**: Ghost (1px brand blue border
- **Image**: Brand blue frame (~10px), play button overlay (white fill circle, black play icon, ~90px)
- **Layout**: 42% text / 58% image on desktop, stacked on mobile

### 5.5 Portfolio Section

```
┌─────────────────────────────────────────────┐
│         OUR PROJECTS                        │
│    Exquisite Spaces. Extraordinary Living.   │
│              ────── (brand blue)                   │
│                                             │
│   ←   ┌──────┐ ┌──────┐ ┌──────┐   →       │
│       │VILLAS│ │APARTM│ │VILLAS│            │
│       │Azure │ │Ocean │ │Coral │            │
│       │Bay   │ │view  │ │Crest │            │
│       │Villas│ │Resid.│ │Villas│            │
│       │      │ │      │ │      │            │
│       │VIEW  │ │VIEW  │ │VIEW  │            │
│       │PROJ.→│ │PROJ.→│ │PROJ.→│            │
│       └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────────┘
```

- **Section Label**: "OUR PROJECTS", brand blue, 13px, centered, uppercase, tracking 4px
- **Headline**: Serif, 52px, white, centered, 1 line
- **Divider**: 60px brand blue line, centered
- **Cards**: 3 cards centered in viewport, black background, **no card border**
- **Arrow buttons**: 50×50 circular, white/40-opacity border, white chevron, outside cards on either side
- **Tags**: `bg-[#013773]/90` with white text, `11px`, overlaid on image top-left
- **Card content**: Title (serif, 26px), description (Montserrat, 16px, `#A0A0A0`), "VIEW PROJECT" link (brand blue, with arrow)

### 5.6 Testimonial Section

```
┌─────────────────────────────────────────────┐
│          WHAT OUR CLIENTS SAY                │
│                                             │
│  ←  "Ocean Glory Homes exceeded our         │
│       expectations in every way. From       │
│       the stunning design..."               │
│                                             │
│            PRIYA & ARJUN MEHTA               │
│             Azure Bay Villa Owners           │
│                                             │
│                ● ○ ○                       │
└─────────────────────────────────────────────┘
```

- **Section Label**: "WHAT OUR CLIENTS SAY", brand blue, 13px, centered, tracking 4px
- **Quote**: Serif, 36px, white, `line-height 1.35`
- **Author**: Montserrat, white, all-caps, 14px, tracking `3px`
- **Subtitle**: Montserrat, `#A0A0A0`, 14px
- **Stars**: ❌ **None** — the reference does not include stars
- **Navigation arrows**: Blue chevrons at left/right edges of quote block
- **Pagination**: 3 dots (active: blue fill, inactive: brand blue outline circle), centered below

### 5.7 Pre-Footer CTA

```
┌─────────────────────────────────────────────┐
│  Let's Build Something                       │
│      Timeless Together                       │
│                                             │
│  Share your vision with us. We'll turn it    │
│           into a legacy.                    │
│                                             │
│        ┌──────────────────┐                 │
│        │   INQUIRE NOW →   │                 │
│        └──────────────────┘                 │
└─────────────────────────────────────────────┘
```

- **Background**: `#0A0A0A` with geometric line-art overlay (brand blue lines, 8% opacity)
- **Headline**: Serif, 42px, white, centered, 2 lines
- **Subtext**: Montserrat, 16px, `#A0A0A0`, max-width 480px
- **Button**: Filled brand blue `#013773`, dark text, uppercase, 13px, tracking `2px`, with arrow
- **Text**: "INQUIRE NOW" (not "ENQUIRE")

### 5.8 Footer

```
┌────────────────────────────────────────────────────────┐
│ [🏠] OCEAN GLORY  QUICK LINKS  OUR PROJECTS  CONTACT US │
│       HOMES                                           │
│ Crafting timeless...  About Us    Azure Bay ...  +91 ..│
│                       Our Proj.   Oceanview ...  info..│
│  f  i  in  ▶️        Villas      Coral Crest...  Ocean..│
│                       Apartments  All Projects         │
│                       Why OGH                          │
│                       Contact                          │
│                                                        │
│ © 2026 Ocean Glory Homes. All Rights Reserved.  Privacy│
│ Policy | Terms & Conditions                            │
└────────────────────────────────────────────────────────┘
```

- **Background**: `#111111` (slightly lighter than page bg)
- **Layout**: 4-column grid (`sm:grid-cols-2 lg:grid-cols-4`)
- **Logo**: Same stacked "OCEAN GLORY" / "HOMES" with brand blue icon
- **Brand text**: "Crafting timeless oceanfront homes that inspire generations."
- **Social icons**: SVG icons (Facebook, Instagram, LinkedIn, YouTube) in brand blue circle outlines
- **Quick Links**: About Us, Our Projects, Villas, Apartments, Why OGH, Contact
- **Our Projects**: Azure Bay Villas, Oceanview Residences, Coral Crest Villas, All Projects
- **Contact**: Phone (with icon), Email (with icon), Address with blue map pin icon
- **Copyright bar**: Thin brand blue line separator, copyright text left, "Privacy Policy | Terms & Conditions" right

---

## 6. Component Directory Structure

Each component follows a **desktop/mobile split** pattern:

```
src/components/
├── HeroSection.tsx        ← wrapper (toggles visibility)
├── SiteHeader.tsx         ← wrapper
├── IconBanner.tsx         ← responsive (no split needed)
├── AboutSection.tsx       ← responsive
├── PortfolioSection.tsx   ← responsive
├── TestimonialsSection.tsx ← responsive
├── PreFooterCta.tsx       ← responsive
├── SiteFooter.tsx         ← responsive
├── desktop/
│   ├── HeroSection.tsx    ← desktop-only version
│   └── SiteHeader.tsx     ← desktop-only version
└── mobile/
    ├── HeroSection.tsx    ← mobile-only version
    └── SiteHeader.tsx     ← mobile-only version
```

The wrapper uses:
```jsx
<div className="hidden lg:block"><DesktopVersion /></div>
<div className="lg:hidden"><MobileVersion /></div>
```

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Target |
|---|---|---|
| `lg` | `≥1024px` | Desktop layout switch |
| `md` | `≥768px` | Tablet adjustments |
| Base | `<768px` | Mobile-first |

### Mobile Differences
- Navigation: Hamburger fullscreen overlay menu instead of top bar
- Hero: Text bottom-aligned, smaller font (38px), heavier gradient
- Cards: Stack vertically instead of horizontal carousel
- Footer: 2-column grid on tablet, 1-column on mobile
- Icon Banner: Flex column (wraps to 2-per-row) on mobile

---

## 8. Images & Media

### Photography Style
- **Architecture**: Modern luxury villas with floor-to-ceiling glass
- **Lighting**: Warm golden sunset tones
- **Settings**: Coastal views, infinity pools, palm trees
- **Color treatment**: Warm, high contrast, slightly desaturated

### Image Hosting
- Primary: Unsplash (free tier)
- Quality: `w=1920&q=85` for hero, `w=800&q=80` for cards
- Always include fallback gradient in CSS background

### Hero Image
```
https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85
```

---

## 9. Effects & Animations

| Animation | Duration | CSS |
|---|---|---|
| Fade In | `0.6s` | `fadeIn` keyframes |
| Slide Up | `0.6s` | `slideUp` keyframes (+30px→0) |
| Scale In | `0.6s` | `scaleIn` keyframes |
| Reveal (clip) | `0.8s` | `reveal` keyframes |
| Clip In (vertical) | `0.6s` | `clipIn` keyframes |

### Hover States
- Nav links: text color → white `transition-colors duration-300`
- Ghost buttons: bg → `rgba(197,163,104,0.1)` for `300ms`
- Filled buttons: bg → `#014B9A` for `300ms`
- All links use blue accent on hover

### Gradients
- Hero overlay: Left-to-right black fade + bottom-to-top black fade
- Pre-footer CTA: `linear-gradient(135deg, ...)` subtle brand blue overlay

---

## 10. CSS Utilities (globals.css)

```css
@theme {
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
}
```

### Utility Classes

| Class | Purpose |
|---|---|
| `.btn-primary` | Filled brand blue button |
| `.btn-ghost` | Outlined brand blue button |
| `.section-label` | Gold uppercase label above section headlines |
| `.accent-line` | 60px brand blue divider line |
| `.container-luxury` | Max-width 1440px + padding |
| `.section-padding` | 96px top/bottom padding |
| `.scrollbar-hide` | Hide scrollbar while keeping scroll |
| `.dot-pattern` | Subtle brand blue dot grid background |
| `.gradient-placeholder` | Image loading placeholder |

---

## 11. Key Do's & Don'ts

### ✅ Do
- Use brand blue `#013773` / `#013773` for all accent elements
- Keep backgrounds dark (`#0A0A0A` or `#000000`)
- Use generous whitespace (large section padding)
- Stack logo in two lines on dark backgrounds
- Use Playfair Display for all headings
- Use brand blue divider lines between sections

### ❌ Don't
- Use bright colors, primary colors, or gradients other than black overlays
- Use border-radius on buttons (keep sharp corners)
- Use scroll indicators, parallax, or heavy animations
- Use pipe separators `|` between nav links
- Use pure `#FFFFFF` on blue backgrounds
- Add stars to testimonials (reference has none)
- Stack cards horizontally on mobile (use full-width columns)

---

*This document was automatically extracted from the Ocean Glory Homes landing page source code. Update as new components and pages are created.*
