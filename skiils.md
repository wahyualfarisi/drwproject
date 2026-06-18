# Next.js Company Profile Website — Complete Build Prompt

---

## Project Overview

Build a **premium company profile website** for a digital technology solutions company using **Next.js 14+ (App Router)**, with a focus on modern interactions, fluid animations, and high-end visual design. This is a conversion-focused marketing site — every section should build trust and compel action.

---

## Tech Stack

```
Framework:       Next.js 14+ (App Router)
Language:        TypeScript
Styling:         Tailwind CSS v3 + CSS custom properties
Animation:       Framer Motion v11
Icons:           Lucide React
3D / WebGL:      Three.js + @react-three/fiber + @react-three/drei (hero only)
Fonts:           next/font — Inter (body), Cal Sans or Syne (display headings)
Linting:         ESLint + Prettier
```

---

## Design System

### Color Palette

```css
/* Base */
--color-bg:          #050A14   /* near-black deep navy */
--color-surface:     #0D1525   /* card backgrounds */
--color-surface-2:   #152035   /* elevated surfaces */
--color-border:      rgba(255,255,255,0.08)

/* Brand */
--color-primary:     #2563EB   /* electric blue */
--color-primary-glow:#3B82F6
--color-accent:      #06B6D4   /* cyan accent */
--color-accent-2:    #8B5CF6   /* violet for gradients */

/* Text */
--color-text:        #F8FAFC
--color-text-muted:  #94A3B8
--color-text-subtle: #475569
```

### Typography

```css
Display headings:   Syne or Cal Sans, weight 700, tight tracking (-0.03em)
Body / UI:          Inter, weight 400/500
Mono / labels:      JetBrains Mono (small caps labels, code snippets)

Scale:
  --text-xs:    0.75rem     /* labels, eyebrows */
  --text-sm:    0.875rem    /* meta, captions */
  --text-base:  1rem        /* body */
  --text-lg:    1.125rem    /* lead / intro */
  --text-xl:    1.25rem     /* card titles */
  --text-2xl:   1.5rem      /* section subheads */
  --text-4xl:   2.25rem     /* section headings */
  --text-6xl:   3.75rem     /* hero heading */
  --text-8xl:   6rem        /* hero large number / hero statement */
```

### Design Signature

The single memorable element: **an animated mesh gradient orb** in the hero — a live WebGL sphere with a fluid, shifting surface (electric blue → cyan → violet) that responds to mouse movement with subtle parallax. This orb is used nowhere else. Everything else is disciplined and quiet.

---

## Page Architecture

```
/                     → Home (all sections on one page, full scroll experience)
/services/[slug]      → Individual service detail pages
/about                → Team, culture, story
/work                 → Case studies / portfolio
/contact              → Contact form + office info
```

---

## Section-by-Section Specification

---

### 1. NAVIGATION

**Component:** `components/layout/Navbar.tsx`

```
Behavior:
- Transparent on load, frosted glass (backdrop-blur-xl + bg/10) after 80px scroll
- Logo left — wordmark in Syne, "DR.W" with a small animated square bracket icon
- Center nav links: Services, Work, About, Insights
- Right: "Get in touch" CTA button (outlined → filled on hover with color sweep)
- Mobile: hamburger → full-screen overlay menu with staggered link entrance

Animations:
- Nav background: smooth transition on scroll (Framer Motion useScroll + useTransform)
- CTA button: border gradient sweep on hover (CSS @keyframes background-position)
- Mobile overlay: slide in from right, links stagger with 50ms delay each
```

---

### 2. HERO SECTION

**Component:** `components/sections/Hero.tsx`

**Layout:** Full viewport height, centered content, WebGL orb right-side

```
Left column (60%):
  Eyebrow:    Small caps label — "DIGITAL TECHNOLOGY PARTNER"
              Monospace font, letter-spacing 0.2em, cyan color
              Subtle typing cursor animation

  Headline:   Two-line statement, display font 6xl–8xl, white
              Line 1: "We build digital"
              Line 2: "products that scale."
              Animate: words slide up and fade in, 80ms stagger per word

  Subheadline: 18px, muted color, max-w-lg, leading-relaxed
               "From web and mobile applications to enterprise
                platforms and cloud solutions — we help
                organizations innovate and stay ahead."

  CTAs:
    Primary button:  "Start a project"  → /contact
                     Solid blue bg, white text, subtle right-arrow icon
                     Hover: slight scale(1.03) + glow shadow
    Secondary button: "See our work"   → /work
                     Ghost style, animated underline on hover

  Trust signals (below CTAs, small):
    Three pills: "50+ Projects" | "8 Years" | "ISO Certified"
    Fade in 600ms after headline completes

Right column (40%):
  Three.js animated sphere — mesh gradient, reacts to mouse parallax
  Soft glow ring underneath (pure CSS, no JS)
  Floating stat cards orbiting the sphere:
    - "99.9% Uptime"
    - "< 2s Load Time"
    - "50+ Clients"
    Cards use Framer Motion path animation (circular orbit, very slow ~20s)

Background:
  Deep navy base
  Subtle grid pattern (CSS background-image: linear-gradient lines, 0.03 opacity)
  Two radial glow spots: one blue bottom-left, one violet top-right, very low opacity
```

---

### 3. SERVICES SECTION

**Component:** `components/sections/Services.tsx`

```
Layout: Full-width section, dark bg

Section header:
  Eyebrow: "WHAT WE DO"
  Title:   "End-to-end digital solutions"
  Body:    One sentence description

Services grid: 3 columns × 3 rows = 8 cards + 1 large CTA card
Each service card:
  - Icon (Lucide, 28px, cyan colored)
  - Service name (18px, white, Syne)
  - One-line description (muted)
  - "Learn more →" link (hidden, slides in on hover)
  - Border: 1px rgba(255,255,255,0.06), rounded-2xl
  - Background: var(--color-surface)
  - Hover: border brightens to 0.2 opacity + subtle top-edge gradient line
  
Animations:
  - Cards animate into view as user scrolls: fade up + slight Y translate
  - Stagger: 80ms per card
  - Use Framer Motion whileInView with viewport: { once: true, amount: 0.2 }
  
Services list:
  1. Custom Web Application Development  (code-2 icon)
  2. Mobile App Development iOS & Android (smartphone icon)
  3. Enterprise Software Solutions        (building-2 icon)
  4. API Development & System Integration (plug icon)
  5. Cloud Solutions & Infrastructure     (cloud icon)
  6. UI/UX Design                         (pen-tool icon)
  7. Digital Transformation Consulting    (trending-up icon)
  8. Software Maintenance & Support       (shield-check icon)
```

---

### 4. PROCESS / HOW WE WORK

**Component:** `components/sections/Process.tsx`

```
Layout: Alternating content + number, horizontal timeline on desktop

Title: "How we deliver"
Subtitle: "A proven process from idea to production."

Steps (4 total):
  01 — Discovery & Strategy
       "We align on business goals, technical requirements, and user needs."
  02 — Design & Architecture
       "Wireframes, system design, and a technical blueprint before a single line of code."
  03 — Build & Iterate
       "Agile sprints, weekly demos, continuous integration."
  04 — Launch & Scale
       "Deployment, monitoring, and an ongoing partnership post-launch."

Animation (THE signature interaction of this section):
  - Horizontal progress line connecting the 4 steps
  - As user scrolls through the section, the line draws itself (SVG stroke-dasharray animation)
  - Each step node "activates" (glows, scales up slightly) as the line reaches it
  - Use Framer Motion useScroll + useTransform to map scroll progress → stroke-dashoffset
  - On mobile: vertical timeline with same draw-on-scroll effect
```

---

### 5. METRICS / SOCIAL PROOF

**Component:** `components/sections/Metrics.tsx`

```
Layout: Full-width band, slightly lighter bg than main, 4 metrics across

Metrics:
  50+      → Projects delivered
  8        → Years of experience
  30+      → Expert engineers
  99.9%    → Average uptime SLA

Animation:
  - Count-up animation when metrics enter viewport
  - Use a custom useCountUp hook with easeOutExpo timing
  - Duration: 1800ms, starts when 60% of section is visible

Design:
  - Large number in display font (Syne 5xl), white
  - Label below in muted small caps
  - Thin vertical dividers between items (opacity 0.1)
  - No card borders — these float in the space
```

---

### 6. FEATURED WORK / CASE STUDIES

**Component:** `components/sections/Work.tsx`

```
Layout: Horizontal scroll carousel on desktop, vertical stack on mobile

Section header:
  Eyebrow: "OUR WORK"
  Title:   "Built for scale. Designed for people."
  CTA:     "View all projects →"

Case study cards (3 featured, each wide):
  Each card:
    - Full-bleed mockup image (use placeholder gradients or abstract tech visuals)
    - Overlay gradient (bottom up, from black/80 to transparent)
    - Client name + project type (top-left badge)
    - Project title (bottom, large, white, Syne)
    - Tags: "React", "Node.js", "AWS" etc. (bottom-right pills)
    - Hover: image zooms slightly (scale 1.05), overlay darkens, "View case study →" arrow appears

Horizontal scroll (desktop):
  - Custom scrollbar hidden
  - Drag to scroll (Framer Motion drag with dragConstraints)
  - Subtle "drag" cursor indicator on hover
  - Arrow navigation buttons (left/right) fade in on hover

Animation:
  - Cards enter: fade up with stagger
  - Active card: subtle scale differentiation
```

---

### 7. TECH STACK / EXPERTISE

**Component:** `components/sections/TechStack.tsx`

```
Layout: Centered, two rows of logos with infinite marquee scroll

Title: "Technologies we master"
Subtitle: "Modern tools for modern challenges."

Two marquee rows:
  Row 1 (left-to-right): React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, MongoDB
  Row 2 (right-to-left): AWS, GCP, Azure, Docker, Kubernetes, Terraform, Redis, GraphQL

Each logo item:
  - SVG/PNG logo, grayscale filter, opacity 0.5
  - Hover: full color, opacity 1.0, slight scale(1.1)
  - Transition: 300ms ease

Marquee animation:
  - Pure CSS infinite scroll animation (@keyframes marquee)
  - Row 1: 30s duration
  - Row 2: 25s duration, reverse direction
  - Pause on hover (@media: prefers-reduced-motion → static grid instead)
  - Duplicate items to create seamless loop
```

---

### 8. TESTIMONIALS

**Component:** `components/sections/Testimonials.tsx`

```
Layout: Single large quote, centered, with client switcher

Section:
  Large opening quote mark (Syne, 120px, cyan, decorative)
  Quote text: 20px, italic, white, max-w-2xl centered, leading-relaxed
  Below: Avatar circle + "Name, Title, Company"
  Client logos below as switcher (click to change testimonial)

3 testimonials (write realistic placeholder copy):
  1. CTO of a fintech startup: result-focused, mentions speed and quality
  2. Director at an SMB: mentions collaboration and communication
  3. Enterprise IT Manager: mentions scalability and reliability

Animation:
  - Switching testimonials: exit left, enter right (Framer Motion AnimatePresence)
  - Auto-rotate every 5 seconds, pause on hover
  - Active logo indicator: thin bottom border in cyan
```

---

### 9. CALL TO ACTION SECTION

**Component:** `components/sections/CTA.tsx`

```
Layout: Full-width, centered, high-contrast

Background: Animated gradient mesh (slower, more subtle than hero orb)
            Use CSS conic-gradient with animation

Content:
  Headline: "Ready to build something great?" (Syne, 4xl–5xl)
  Body:     "Tell us about your project. We'll get back to you within 24 hours."
  Button:   "Start a conversation" — large, white bg, dark text (inverted)
            Hover: slight grow + shadow

Floating elements:
  2–3 small glowing dots positioned absolutely, subtle pulse animation
```

---

### 10. FOOTER

**Component:** `components/layout/Footer.tsx`

```
Layout: 4-column grid above copyright bar

Columns:
  1. Logo + tagline + social icons (LinkedIn, GitHub, Twitter/X)
  2. Services list (links)
  3. Company links (About, Work, Blog, Careers)
  4. Contact info (email, location, "Book a call" link)

Bottom bar:
  © 2025 CompanyName. All rights reserved.
  Privacy Policy | Terms of Service (right-aligned)

Design:
  Thin top border (rgba white 0.08)
  Muted text, links lighten on hover
  Social icons: outline circle, icon inside, hover fills with brand color
```

---

## Animation System

### Principles
- All animations respect `prefers-reduced-motion: reduce`
- Page load: stagger hero elements with 80ms delays
- Scroll-triggered: use `whileInView` with `{ once: true }` to avoid re-triggering
- Hover micro-interactions: 200–300ms, ease-out
- Page transitions: shared layout animations where applicable

### Reusable Animation Variants

Create `lib/animations.ts`:

```typescript
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
}
```

### Scroll Progress Indicator
- Thin line at top of page, width driven by scroll progress
- Framer Motion `useScroll` + `useSpring` for smooth lag
- Electric blue color

---

## Performance & SEO

```
Images:        next/image for all, with width/height + priority on hero
Fonts:         next/font with display: swap
Metadata:      generateMetadata per page
OG Images:     /app/opengraph-image.tsx — dynamic OG with company name
Analytics:     Placeholder for GA4 or Plausible (env-gated)
Core Web Vitals targets:
  LCP < 2.5s
  CLS < 0.1
  FID < 100ms
```

---

## File Structure

```
app/
  layout.tsx              # Root layout, Navbar + Footer
  page.tsx                # Home — assembles all section components
  services/[slug]/
    page.tsx
  about/page.tsx
  work/page.tsx
  contact/page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
    ScrollProgress.tsx
  sections/
    Hero.tsx
    Services.tsx
    Process.tsx
    Metrics.tsx
    Work.tsx
    TechStack.tsx
    Testimonials.tsx
    CTA.tsx
  ui/
    Button.tsx            # primary / ghost / outline variants
    Badge.tsx             # pill tags
    Card.tsx              # service card, case study card
    SectionHeader.tsx     # eyebrow + title + subtitle pattern
    AnimatedCounter.tsx   # count-up number
    Marquee.tsx           # infinite scroll row
    GradientOrb.tsx       # WebGL Three.js hero sphere

lib/
  animations.ts           # Framer Motion variants
  constants.ts            # Services, testimonials, metrics data

public/
  logos/                  # Tech stack SVG logos
  work/                   # Case study images
```

---

## Data & Content

Keep all content in `lib/constants.ts` as typed arrays:

```typescript
// Services
export const SERVICES = [
  {
    id: "web-development",
    title: "Custom Web Application Development",
    description: "Scalable, performant web apps built with modern frameworks.",
    icon: "code-2",
    features: ["React / Next.js", "Node.js / Python", "PostgreSQL / MongoDB"]
  },
  // ... (all 8 services)
]

// Metrics
export const METRICS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 8, suffix: "", label: "Years of experience" },
  { value: 30, suffix: "+", label: "Expert engineers" },
  { value: 99.9, suffix: "%", label: "Average uptime SLA" }
]

// Testimonials
export const TESTIMONIALS = [...]

// Case Studies
export const CASE_STUDIES = [...]
```

---

## Key Implementation Notes

1. **Three.js orb** — Use `@react-three/fiber` with a `MeshDistortMaterial` from `@react-three/drei`. Set `distort={0.3}` and `speed={2}`. Apply mouse-driven rotation with `useFrame` + lerp for smooth following. Wrap in `<Suspense>` with a CSS gradient fallback.

2. **Marquee** — Duplicate children once in JSX (`[...items, ...items]`), apply `animation: marquee 30s linear infinite`. Pause with `animation-play-state: paused` on hover.

3. **Process timeline** — Use `useScroll` with a `ref` on the section. Map `scrollYProgress` to `pathLength` on an SVG `<motion.line>`. Reveal step numbers with `useTransform` thresholds.

4. **Dark mode** — This site is dark-only. Set `<html class="dark">` and configure Tailwind's `darkMode: 'class'`. No light mode toggle needed.

5. **Reduced motion** — Wrap all Framer Motion components in a check:
   ```typescript
   const prefersReducedMotion = useReducedMotion()
   const variants = prefersReducedMotion ? {} : fadeUp
   ```

6. **Smooth scroll** — Add `html { scroll-behavior: smooth }` and use `#section-id` anchors for in-page nav links.

---

## Getting Started Commands

```bash
npx create-next-app@latest company-site --typescript --tailwind --eslint --app
cd company-site
npm install framer-motion lucide-react @react-three/fiber @react-three/drei three
npm install -D @types/three
npm run dev
```

---

## Deliverable Quality Bar

The finished site should feel indistinguishable from the work of a high-end agency like Vercel's own marketing site, Linear, or Raycast. Every hover state is intentional. No section should feel like a template. The Three.js orb and scroll-drawn process timeline are the two moments people remember.