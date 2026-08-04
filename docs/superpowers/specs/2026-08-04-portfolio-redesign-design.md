# Portfolio Redesign: Neo-Brutalism

## 1. Overview
The goal is to redesign the existing Next.js single-page portfolio to feature a "High-Contrast & Playful" Neo-Brutalism aesthetic. The redesign focuses on making the site visually striking, dynamic, and unapologetically bold while maintaining readability and clear navigation.

## 2. Visual Aesthetic
- **Colors**: Vibrant, high-contrast neon colors for section backgrounds (e.g., cyan, hot pink, vivid yellow, bright green).
- **Borders & Shadows**: Thick, solid black borders around elements and containers. Hard, non-blurred offset shadows (e.g., `8px 8px 0px #000`) for depth.
- **Typography**: Giant, uppercase, bold typography for headings to establish visual hierarchy and demand attention.
- **Decorations**: Playful elements like "sticker-like" shapes, asymmetric cutouts, and abstract geometric accents scattered strategically.

## 3. Architecture & Layout
The site will follow a "Long Scrolling Canvas" structure:
- **Global Structure**: Instead of a uniform background with isolated cards, each major section (Hero, About, Experience, Projects, Contact) acts as a full-width "poster" block with a distinct, solid neon background color.
- **Separators**: Sections are separated by thick, rigid black horizontal borders.

## 4. Components

### 4.1. Hero Section
- **Giant Typography**: The user's name is rendered in massive typography spanning the width of the screen.
- **Marquee**: A continuous, animated scrolling text (marquee) behind or below the main elements, displaying rotating keywords (e.g., "FULLSTACK WEB DEVELOPER • PROBLEM SOLVER • CREATIVE CODER").
- **Centerpiece**: A large, stylized cutout portrait of the user in the center, potentially overlapping the giant text and marquee.

### 4.2. Navigation & Interactions
- **Hover/Click States**: Interactive elements (buttons, links, project cards) will feature an aggressive interaction model. On hover, the offset shadow shifts. On click/active state, the element physically depresses (translate) and the shadow disappears, simulating a chunky mechanical button.
- **Sticky Elements**: Certain elements (like the navbar or section headers) may stick to the top with a heavy brutalist border as the user scrolls.

### 4.3. Other Sections (About, Experience, Projects, Contact)
- Will inherit the full-width colored background block structure.
- Content inside will be organized in rigid grid boxes ("bento-style" inner containers) or floating heavy-bordered cards.

## 5. Scope & Constraints
- The redesign applies to the existing Next.js application structure (`app/page.tsx`, `components/Hero.tsx`, etc.).
- The existing global CSS (`app/globals.css`) already defines some neo-brutalism tokens. These will be updated and extended to match the new vibrant and playful direction.
- No new complex backend logic; this is purely a frontend visual and layout overhaul.

## 6. Implementation Strategy
- Step 1: Update `globals.css` with the new color palette, utilities for marquee, and enhanced brutalist hover/active states.
- Step 2: Refactor the layout wrapper and section wrappers to support full-width colored backgrounds.
- Step 3: Completely rebuild the `Hero.tsx` component with giant typography and marquee.
- Step 4: Redesign the remaining components (`About`, `Experience`, `Projects`, `ContactForm`, `Footer`) to fit the "Long Scrolling Canvas" model.
