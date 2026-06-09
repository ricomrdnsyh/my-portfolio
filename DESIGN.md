---
name: Voltage Neo-Brutalist System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4632'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7f775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd500'
  on-primary-container: '#705c00'
  inverse-primary: '#eac300'
  secondary: '#006970'
  on-secondary: '#ffffff'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ad009b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffc8ed'
  on-tertiary-container: '#ac009a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe174'
  primary-fixed-dim: '#eac300'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#554500'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#ffd7f0'
  tertiary-fixed-dim: '#fface8'
  on-tertiary-fixed: '#3a0033'
  on-tertiary-fixed-variant: '#840076'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  base-unit: 4px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  stack-gap: 48px
---

## Brand & Style

The design system is built for a high-impact, high-contrast Neo-Brutalist aesthetic tailored for a Fullstack Developer portfolio. The brand personality is unapologetic, technical, and high-energy. It moves away from the "softness" of modern SaaS design in favor of raw, architectural layouts and honest materials. 

The target audience consists of technical recruiters, startup founders, and fellow engineers who value clarity, confidence, and a distinct lack of decorative fluff. The UI evokes a sense of "digital construction"—utilizing heavy strokes, vibrant primary-tier colors, and structural rigidity to signal precision and bold technical capability.

## Colors

The palette is aggressive and high-contrast, designed to command attention. 
- **Primary (Yellow):** Used for large background sections and primary call-to-action surfaces.
- **Secondary (Cyan) & Tertiary (Pink):** Used for code snippets, tag highlighting, and project category differentiation.
- **Background (Bone White):** Used as the canvas for content-heavy sections to maintain readability against the heavy black strokes.
- **Stroke (Black):** Used for all borders, shadows, and text to provide the "ink-on-paper" structural feel characteristic of brutalism.

## Typography

This design system utilizes **Space Grotesk** for its technical yet quirky geometric qualities. All headings and display titles must be set in uppercase with tight letter-spacing to reinforce the heavy, blocky nature of the layout. 

For technical details, code blocks, and metadata, **Space Mono** is used to emphasize the developer-centric nature of the portfolio. Maintain high contrast by ensuring text is almost exclusively black on the vibrant primary colors or white background.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy. Content is housed in "containers" that act as physical blocks on the page. 
- **Desktop:** 12-column grid with 32px gutters. Margins are generous (64px) to allow the heavy shadows of the containers to breathe.
- **Mobile:** 4-column grid with 16px gutters.
- **Rhythm:** All spacing (padding and margins) must be multiples of 8px. Use 32px or 48px gaps between major sections to emphasize the "chunkiness" of the UI.
- **Borders:** Every container and structural element must have a minimum 4px solid black border. No exceptions.

## Elevation & Depth

This design system rejects blurred shadows and gradients. Depth is achieved through **Hard-Edge Drop Shadows**:
- All elevated elements (cards, buttons, input fields) feature a solid black shadow offset by **8px 8px**.
- There is no blur or transparency on shadows.
- Interactivity is key: upon hover or click, the element should physically shift **4px down and 4px right**, partially "covering" its own shadow to simulate a physical mechanical press.
- Secondary elements can use a 4px shadow for a "lower" elevation feel.

## Shapes

The shape language is strictly **Sharp**. There are no border-radii in this design system. Every corner must be 90 degrees to maintain the brutalist, architectural integrity of the layout. This applies to buttons, card containers, input fields, and images.

## Components

### Buttons
- **Base:** 4px black border, sharp corners, Primary Yellow or Cyan background.
- **Typography:** All-caps, bold.
- **Shadow:** 8px solid black.
- **Interaction:** On hover, translate(4px, 4px). On active, translate(8px, 8px) to sit flush where the shadow was.

### Cards
- **Base:** Bone White background with a 4px black border.
- **Header:** Often topped with a solid color bar (Pink or Cyan) containing the title.
- **Shadow:** Always 8px solid black.

### Input Fields
- **Base:** White background, 4px black border.
- **Focus State:** Background changes to Primary Yellow. No glow, just a color shift.

### Chips / Tags
- **Base:** 2px black border, flat color background (Cyan or Pink). 
- **Typography:** Space Mono, small, all-caps.

### Project Grid
- Projects should be displayed as cards that "pop" from the grid. When a user hovers over a project card, it should shift position as if being pressed into the page, or the border thickness should increase to 8px.
