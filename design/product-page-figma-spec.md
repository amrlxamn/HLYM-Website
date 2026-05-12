# Product Page — Figma Design Specification

> Migrated from code. Use this document to recreate each section in the HLYM Website Figma project for design touch-up.

---

## Design Tokens (Global)

| Token | Value | Notes |
|-------|-------|-------|
| `--color-bg-primary` | `#0a0a0a` | Main dark background |
| `--color-bg-surface` | `#fafafa` | Light surface |
| `--color-bg-muted` | `#f8f8f8` | Muted surface |
| `--color-text-primary` | `#0a0a0a` | Dark text |
| `--color-text-inverse` | `#ffffff` | Light text |
| `--color-text-muted-light` | `#00000066` | 40% black |
| `--color-text-muted-dark` | `#ffffff80` | 50% white |
| `--color-text-subtle` | `#00000050` | 30% black |
| `--color-text-soft-dark` | `#ffffff50` | 30% white |
| `--color-border-inverse` | `#ffffff18` | 10% white |
| `--color-border-subtle` | `#00000014` | 8% black |
| `--red` | `#ec1c24` | Brand red |
| `--red-marker` | `#ee393d` | Brand marker red |
| `--radius-pill` | `999px` | Pill border radius |
| `--shadow-card` | `0 24px 60px rgba(0,0,0,0.14)` | Card drop shadow |
| `--container` | `1240px` | Max content width |
| `--duration-base` | `240ms` | Transition duration |
| `--easing-standard` | `cubic-bezier(0.22, 1, 0.36, 1)` | Transition easing |
| `--header-height-total` | `110px` | 76px main + 34px utility |
| Font family | `Inter, sans-serif` | Primary typeface |

---

## Page Composition (Top → Bottom)

```
┌─────────────────────────────────────────────┐
│  Site Header (110px total)                   │
├─────────────────────────────────────────────┤
│  Section 1: Product Video Hero              │
│  (full viewport height)                     │
├─────────────────────────────────────────────┤
│  Section 2: Product Showcase Page            │
│  (full viewport height)                      │
├─────────────────────────────────────────────┤
│  Section 3: Product Colors Section           │
│  (full viewport height)                      │
├─────────────────────────────────────────────┤
│  Footer Section                              │
└─────────────────────────────────────────────┘

  ┌──────── Floating Sub Header ────────┐
  │ (fixed bottom center, z-40)        │
  └─────────────────────────────────────┘
```

---

## Section 1: Product Video Hero

### Overview
Full-viewport video section with gradient overlay, hero copy, and play/pause control.

### Layout
- **Root**: Full viewport height (`min-height: calc(100vh - 110px)`)
- **Background**: `#0a0a0a`
- **Cursor**: pointer (entire section is clickable to toggle playback)

### Video
- **Position**: absolute, covers entire section (`inset: 0`)
- **Object fit**: cover, centered
- **Behavior**: autoplay, loop, muted, plays inline
- **Poster**: `/assets/hlym/nvx-360/frame-01.jpg`
- **Source**: `/assets/hlym/nvx-hero.mp4`

### Gradient Overlay (shade)
Two layered gradients over the video:

**Horizontal gradient** (left → right):
- `0%`: `rgba(#0a0a0a, 0.84)` — dark left edge
- `25%`: `rgba(#0a0a0a, 0.52)` — mid fade
- `58%`: `transparent` — clear right side

**Vertical gradient** (top → bottom):
- `0%`: `rgba(#0a0a0a, 0.18)` — slight top darkening
- `42%`: `transparent` — clear middle
- `100%`: `rgba(#0a0a0a, 0.26)` — bottom vignette

### Hero Copy
- **Position**: relative, z-index 1
- **Padding**: `clamp(72px, 13vh, 132px)` top/bottom, `clamp(24px, 8vw, 136px)` left/right
- **Alignment**: start (top-left)
- **Text**: "A fastback scooter designed for the rush of urban performance."
- **Style**: `<h1>` element
  - Font: Inter, weight 500
  - Size: `clamp(24px, 2.3vw, 34px)`
  - Line height: 1.14
  - Letter spacing: 0
  - Color: `#ffffff` (inverse)
  - Max width: 430px
  - Mobile max width: `min(100%, 330px)`

### Play/Pause Button
- **Position**: absolute, bottom-right
  - Desktop: `bottom: 24px; right: 24px`
  - Mobile (≤760px): `bottom: 18px; right: 18px`
- **Size**: 44×44px
- **Background**: `rgba(#0a0a0a, 0.24)` with `backdrop-filter: blur(16px)`
- **Border**: 1px solid `#ffffff18`
- **Border radius**: 8px
- **Icon**: Play/Pause (18×18px, Lucide icons)
- **Color**: `#ffffff`
- **z-index**: 2

---

## Section 2: Product Showcase Page

### Overview
Full-viewport product display with large poster text behind a centered product image, and spec cards at the bottom.

### Layout
- **Root**: Full viewport height (`min-height: calc(100vh - 110px)`)
- **Background**: `#fafafa` (surface)
- **Overlay**: Radial gradient + linear gradient pseudo-element:
  - Radial: `circle at 50% 62%`, `rgba(#0a0a0a, 0.08)` → transparent (48%)
  - Linear: `180deg`, `#f8f8f8` (0%) → `#fafafa` (34%)

### Inner Container
- Max width: 1240px, centered
- Grid layout, full viewport height
- Padding: `top: 22px; bottom: 32px`

### Stage (main content area)
- Grid: rows `1fr auto`
- Min height: `calc(100vh - 110px - 54px)`

### Title Layer (poster text behind product)
- **Position**: absolute, centered horizontally
- **Top**: `clamp(26px, 8vh, 82px)`
- **Width**: `min(100%, 1040px)`
- **Pointer events**: none
- **z-index**: 1

#### Brand Name (`YAMAHA`)
- Font: Inter, weight 700
- Size: 11px
- Letter spacing: 2.8px
- Line height: 1
- Text transform: uppercase
- Color: `#0a0a0a` (primary)
- Margin bottom: 14px

#### Poster Text (large model name, e.g. "NVX")
- Font: Inter, weight 900
- Size: `clamp(92px, 19vw, 270px)`
- Line height: 0.78
- Letter spacing: 0
- Text transform: uppercase
- Color: `rgba(#0a0a0a, 0.08)` — barely visible watermark effect
- Margin: 0

### Image Panel
- Centered flex container
- Min height: `min(64vh, 620px)`
- Padding top: `clamp(112px, 18vh, 180px)`
- z-index: 2
- **Product image**:
  - Max height: `min(58vh, 560px)`
  - Max width: `min(1060px, 100%)`
  - Object fit: contain
  - Drop shadow: `0 24px 60px rgba(0,0,0,0.14)`
- **Mobile (≤760px)**:
  - Panel min height: 420px, padding top: 128px
  - Image max height: 320px

### Bottom Panel (spec cards + CTA)
- Grid: `1fr auto` (desktop) / `1fr` (mobile)
- Gap: 24px
- z-index: 3

#### Spec Cards Grid
- Grid: `repeat(4, 1fr)` (desktop) / `repeat(2, 1fr)` (mobile)
- Max width: 760px, centered
- Gap: 22px (desktop) / 14px (mobile)

**Each Spec Card**:
- Grid: single column, gap 5px
- Text align: center
- **Value** (`<strong>`):
  - Font: Inter, weight 800
  - Size: `clamp(18px, 2vw, 28px)`
  - Text transform: uppercase
  - Color: `#0a0a0a`
- **Label** (`<span>`):
  - Font: Inter, weight 700
  - Size: 10px
  - Letter spacing: 2px
  - Text transform: uppercase
  - Color: `#00000066` (muted-light)

**Sample Data (NVX 155)**:
| Value | Label |
|-------|-------|
| 155cc | ENGINE |
| 15.4 PS | POWER |
| 127 KG | WEIGHT |
| RM11,998 | MSRP |

#### CTA Button (ProductCta)
- Background: `#0a0a0a`
- Border radius: 8px
- Color: `#ffffff`
- Min height: 64px
- Padding: `0 20px`
- Gap: 14px
- Font: Inter, weight 800, size 14px
- Letter spacing: 1.2px
- Text transform: uppercase
- Text: "BUILD & PRICE"
- Hover: `background: rgba(#0a0a0a, 0.86)`
- Mobile: full width, centered

---

## Section 3: Product Colors Section

### Overview
Full-viewport color picker section with large product image and color swatch buttons below.

### Layout
- **Root**: Full viewport height (`min-height: calc(100vh - 110px)`)
- **Background**: `#fafafa` (surface)
- **Color**: `#0a0a0a` (primary text)

### Inner Container
- Grid: rows `1fr auto`
- Full viewport height
- Gap: 24px (desktop) / 20px (mobile)
- Padding: `48px` top/bottom (desktop) / `32px` (mobile)
- Max width: 1240px

### Color Stage (product image area)
- Centered flex container
- Width: 100%
- **Image**:
  - Max width: 960px
  - Width: `min(100%, 960px)`
  - Drop shadow: `0 24px 60px rgba(0,0,0,0.14)`
  - Object fit: contain

### Color Panel (swatches + label)
- Centered grid, gap 10px
- Justify items: center
- z-index: 2

#### Swatch Grid
- Grid: `repeat(4, 1fr)`, gap 4px

**Each Swatch Button** (36×36px):
- Background: `#f8f8f8` (muted)
- Border: 1px solid
  - Active: `#0a0a0a` (primary)
  - Inactive: `#00000014` (subtle)
- Border radius: 0 (square)
- Contains swatch image (full bleed, object-fit: cover)
- States:
  - `aria-pressed` for active
  - Active state: dark border

#### Color Name
- Font: Inter, weight 600
- Size: 12px
- Letter spacing: 0
- Line height: 1.2
- Color: `#0a0a0a`

**Color Options**:
| Label | Swatch | Product Image |
|-------|--------|---------------|
| Gunmetal Grey | `gunmetal-grey-swatch.jpg` | `gunmetal-grey-transparent.webp` |
| Cyber Blu | `cyber-blu-swatch.jpg` | `cyber-blu-transparent.webp` |
| Electric Yellow | `electric-yellow-swatch.jpg` | `electric-yellow-transparent.webp` |
| Violet Rush | `violet-rush-swatch.jpg` | `violet-rush-transparent.webp` |

---

## Floating: Product Sub Header

### Overview
Fixed bottom-center navigation bar with product name, tab navigation, and CTA button.

### Layout
- **Position**: fixed, bottom 24px, centered horizontally
- **z-index**: 40
- **Background**: `#fafafa` (surface)
- **Border radius**: 2px
- **Box shadow**: `0 24px 60px rgba(0,0,0,0.14)`
- **Padding**: `6px 24px`

### Inner Grid
- Grid: `auto 1fr auto`
- Height: 52px (desktop) / 48px (mobile)

### Product Name
- Flex, align center
- Padding right: 24px (desktop) / 12px (mobile)

**Lead** (e.g. "NVX"):
- Font: Inter, weight 700
- Size: 13px
- Letter spacing: 0.5px
- Text transform: uppercase
- Color: `#0a0a0a`

**Suffix** (e.g. "155"):
- Font: Inter, weight 400
- Size: 13px
- Letter spacing: 0.5px
- Margin left: 5px
- Text transform: uppercase
- Color: `#0a0a0a`

### Tab Navigation
- Flex row, gap 0
- Overflow x: auto, hidden scrollbar

**Each Tab Button**:
- Padding: `0 16px` (desktop) / `0 10px` (mobile)
- Font: Inter
- Size: 11px (desktop) / 10px (mobile)
- Weight: 700 (active) / 500 (inactive)
- Letter spacing: 1.2px (desktop) / 0.8px (mobile)
- Text transform: uppercase
- Border bottom: 2px solid
  - Active: `#0a0a0a`
  - Inactive: transparent
- Color:
  - Active: `#0a0a0a`
  - Inactive: `#00000050` (subtle)
- Hover: `#0a0a0a`
- Transition: `color 240ms cubic-bezier(0.22, 1, 0.36, 1)`, `border-color 240ms cubic-bezier(0.22, 1, 0.36, 1)`

**Tabs**: Overview | Specifications | Features

### CTA Button
- Padding left: 24px (desktop) / 12px (mobile)
- Background: `#0a0a0a`
- Border radius: `999px` (pill)
- Color: `#ffffff`
- Height: 34px (desktop) / 30px (mobile)
- Padding: `0 18px` (desktop) / `0 14px` (mobile)
- Font: Inter, weight 700
- Size: 11px (desktop) / 10px (mobile)
- Letter spacing: 1px
- Text transform: uppercase
- Hover: `background: rgba(#0a0a0a, 0.86)`
- Transition: `background 240ms cubic-bezier(0.22, 1, 0.36, 1)`
- Text: "BUILD & PRICE"

---

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| ≤760px | Mobile |
| ≤860px | Small tablet (colors section) |
| ≤980px | Tablet (container width adjusts) |
| >980px | Desktop |

### Mobile Adaptations (≤760px)
- Video hero copy max width: `min(100%, 330px)`
- Video control button: bottom 18px, right 18px
- Product image: max height 320px, panel min height 420px, padding top 128px
- Spec cards: 2 columns instead of 4, gap 14px
- CTA button: full width, centered
- Sub header: height 48px
- Sub header name padding: 0 12px
- Sub header tabs: font 10px, letter spacing 0.8px, padding 0 10px
- Sub header CTA: height 30px, font 10px, padding 0 14px

### Small Tablet (≤860px, colors section only)
- Colors inner gap: 20px
- Colors inner padding: 32px top/bottom
- Color stage: align self end

---

## Product Models Data

| # | Name | Category | Poster Label | Price | Engine | Power | Weight |
|---|------|----------|-------------|-------|--------|-------|--------|
| 1 | NVX 155 | Automatic | NVX | RM11,998 | 155cc | 15.4 PS | 127 KG |
| 2 | YZF-R15M | Street | R15M | RM14,998 | 155cc | 19.3 PS | 137 KG |
| 3 | MT-09 | Big Bikes | MT-09 | RM57,998 | 890cc | 119 PS | 193 KG |
| 4 | Y15ZR | Moped | Y15ZR | RM9,498 | 149cc | 15.4 PS | 115 KG |
| 5 | TMAX 560 | Big Bikes | TMAX | RM75,888 | 562cc | 47.6 PS | 221 KG |

---

## Component Hierarchy (for Figma structure)

```
Product Page
├── Product Video Hero
│   ├── Video (fullscreen, autoplay)
│   ├── Gradient Overlay
│   │   ├── Horizontal (left fade)
│   │   └── Vertical (vignette)
│   ├── Hero Copy (h1)
│   └── Play/Pause Control
│
├── Product Showcase Page
│   ├── Background Overlay (radial + linear gradient)
│   ├── Title Layer
│   │   ├── Brand Name (YAMAHA)
│   │   └── Poster Text (watermark)
│   ├── Image Panel
│   │   └── Product Image / 360° Viewer
│   └── Bottom Panel
│       ├── Spec Cards (4 columns / 2 mobile)
│       └── CTA Button
│
├── Product Colors Section
│   ├── Color Stage (large product image)
│   └── Color Panel
│       ├── Swatch Grid (4 color options)
│       └── Color Name
│
└── Product Sub Header (fixed bottom)
    ├── Product Name (lead + suffix)
    ├── Tab Navigation (3 tabs)
    └── CTA Button
```
