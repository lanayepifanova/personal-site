# Brainstorming: Media Kit for @lana_yaps

## User Requirements
- **Core Function:** Scrollable media kit for website integration.
- **Theme:** White and black (white background main), minimalist, elegant.
- **Vibe:** Academic and Tech.
- **Content:** Same as the 7-slide deck (Positioning, Audience, Metrics, Proof, Work, Packages, Contact).
- **New Feature:** "More analytics" + "Scroll through option thingy".
- **Target Audience:** Brands, Agencies, Founders.

## Design Approaches

<response>
<text>
<idea>
  **Design Movement**: Swiss International Style (Digital Evolution)
  **Core Principles**:
  1. **Grid-Based Precision**: Everything aligns to a strict, visible or invisible grid.
  2. **Typography as Image**: Large, bold, grotesque typography (Inter/Helvetica) carries the visual weight.
  3. **Data as Art**: Analytics are not just charts; they are interactive, elegant visualizations using thin lines and precise geometry.
  4. **Radical Clarity**: High contrast, zero fluff.
  **Color Philosophy**:
  - **Primary**: White (#FFFFFF) background.
  - **Secondary**: Black (#000000) for text and primary UI elements.
  - **Accent**: Electric Blue (#2952FF) - used *very* sparingly for key data points, links, and active states. This connects to the "Tech" vibe without overwhelming the "Academic" white/black base.
  **Layout Paradigm**:
  - **Single-Column Scroll**: A continuous, smooth-scrolling narrative.
  - **Sectional Reveals**: Content fades in or slides up as the user scrolls.
  - **Sticky Navigation**: A minimal side or top bar that tracks progress (Intro -> Audience -> Metrics -> Contact).
  **Signature Elements**:
  - **The "Data Lens"**: Hovering over charts reveals deeper granularity (e.g., specific age % or exact view counts).
  - **The "Manifesto" Type**: The positioning statement is treated like a poster or book cover.
  - **Thin Line Dividers**: Hairline separators between sections, reminiscent of academic papers or architectural blueprints.
  **Interaction Philosophy**:
  - **Micro-Interactions**: Subtle hover states on brand names (maybe showing the campaign type).
  - **Smooth Scroll**: Using `lenis` or similar for a premium feel (if possible, otherwise standard smooth scroll).
  **Animation**:
  - **Entrance**: Staggered fade-up for text.
  - **Charts**: Bars grow, lines draw themselves upon view.
  **Typography System**:
  - **Headlines**: Inter (Tight tracking, Bold/Black weight).
  - **Body**: Inter (Regular, readable line height).
  - **Monospace**: JetBrains Mono or similar for data labels/technical specs (reinforces "Tech/Dev" audience).
</idea>
</text>
<probability>0.08</probability>
</response>

<response>
<text>
<idea>
  **Design Movement**: Brutalist Academia
  **Core Principles**:
  1. **Raw Structure**: Exposed borders, visible layout constraints.
  2. **Information Density**: High density but organized, like a dashboard or research paper.
  3. **Systematic**: Feels like a tool or a directory.
  **Color Philosophy**:
  - **Base**: Off-white / Paper (#F5F5F5).
  - **Ink**: Deep Charcoal (#1A1A1A).
  - **Highlight**: Highlighter Yellow or Neon Green (Cyberpunk touch).
  **Layout Paradigm**:
  - **Masonry/Bento Grid**: Sections interlock.
  - **Horizontal Scroll**: For the portfolio section.
  **Signature Elements**:
  - **Typewriter/Mono Fonts**: For headers.
  - **Marquee**: Scrolling text for "Trusted By".
  **Interaction Philosophy**:
  - **Click-to-Expand**: Accordions for detailed metrics.
  **Animation**:
  - **Glitch**: Subtle tech glitches on hover.
  **Typography System**:
  - **Headlines**: Space Grotesk.
  - **Body**: DM Sans.
</idea>
</text>
<probability>0.05</probability>
</response>

<response>
<text>
<idea>
  **Design Movement**: Ethereal Tech (Glass & Light)
  **Core Principles**:
  1. **Softness**: Blur effects, soft shadows, light gradients.
  2. **Floating Elements**: Content cards float on the white background.
  3. **Cleanliness**: Apple-esque minimalism.
  **Color Philosophy**:
  - **Base**: Pure White.
  - **Text**: Dark Grey (#333).
  - **Accents**: Soft gradients (Blue to Purple).
  **Layout Paradigm**:
  - **Central Focus**: Centered container with generous margins.
  **Signature Elements**:
  - **Glassmorphism**: Frosted glass headers.
  - **Soft Shadows**: Elevation to separate content.
  **Interaction Philosophy**:
  - **Parallax**: Subtle movement of background elements.
  **Animation**:
  - **Fade & Scale**: Elements scale up gently.
  **Typography System**:
  - **Headlines**: SF Pro Display (or system font).
  - **Body**: SF Pro Text.
</idea>
</text>
<probability>0.03</probability>
</response>

## Selected Approach: Swiss International Style (Digital Evolution)

**Why?**
- It perfectly matches the "Academic and Tech" vibe requested.
- "White and Black themed" is the core of Swiss style.
- "Minimalist and Elegant" is inherent to this style.
- It allows the *data* (analytics) to be the star, which is crucial for a media kit.
- The "Monospace" addition for data labels reinforces the "Dev/Tech" niche of the creator.

**Implementation Plan:**
1.  **Typography**: Inter (Variable) + JetBrains Mono (for data).
2.  **Colors**: White bg, Black text, Electric Blue (#2952FF) accent.
3.  **Components**:
    -   **Hero**: Large typography, profile photo cut-out or framed.
    -   **Analytics**: Custom Recharts or Chart.js components. Minimalist bar charts and doughnut charts.
    -   **Grid**: A strict CSS grid for the "Previous Work" section.
    -   **Pricing**: Clean tables with monospace numbers.
4.  **Tech Stack**: React, Tailwind, Framer Motion (for entrance animations), Recharts (for analytics).

**Refinements for "More Analytics":**
-   **Heatmap**: Visualizing "Top Countries" or "Active Times".
-   **Growth Chart**: Line chart showing follower growth or view consistency (simulated data based on provided metrics).
-   **Engagement Ratios**: Visual bars comparing her engagement vs. industry average.
