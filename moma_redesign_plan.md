# MoMA-Inspired Art Direction Plan

## Vision
Transform the current clean website into an **immersive digital exhibition**. The interface should feel like walking through a modern art gallery: spacious, deliberate, and intellectually stimulating. The user isn't just reading a resume; they are viewing an exhibition of Cesar's career.

## Design Pillars
1.  **Structural Typography**: Text is not just content; it is the primary graphic element. Use massive scale contrasts (tiny labels vs. giant headlines).
2.  **The "White Cube" Grid**: Use a strict but asymmetrical grid. Content should sometimes stick to edges or overlap, breaking standard web conventions.
3.  **Museum Curation**: Treat every piece of information (a job role, a skill) as an *artifact* with its own label and breathing room.
4.  **Monochrome Tension**: Strict black and white, but use line weights (hairlines vs. heavy blocks) to create depth.

## Implementation Steps

### 1. Typography Overhaul (`src/styles/index.css`)
-   Import a font closer to MoMA’s aesthetic (e.g., `Inter` with tighter tracking for body, and a strong Grotesque for headers).
-   Define utility classes for "Museum Labels" (small, all-caps, wide tracking) vs. "Exhibition Titles" (massive, tight tracking).

### 2. The "Museum Guide" Navigation (`src/components/Navigation.jsx`)
-   Create a new sticky navigation bar that feels like a museum map.
-   It should anchor to the side or bottom, not just the top.
-   Current section indicator (e.g., "Now Viewing: Gallery 1").

### 3. Hero: The Entrance Hall (`src/components/Hero.jsx`)
-   Break the center alignment. Name "CESAR DIEZ" should be architectural, spanning the viewport edges.
-   Subtitle should look like an exhibition intro text on a gallery wall.
-   Add a subtle entrance animation (curtain reveal or text slide-up).

### 4. Experience: The Timeline Walk (`src/components/Experience.jsx`)
-   Ditch the standard list.
-   Create a horizontal scroll or a strong vertical line connector that feels like walking through time.
-   Use "Object Labels" for dates and roles.

### 5. Projects: The Gallery Wall (`src/components/Projects.jsx`)
-   Masonry layout or "salon hang" style.
-   Images (if any) or abstract geometric representations of data projects.
-   Hover effects that "illuminate" the specific project while dimming others.

### 6. Interactive Polish (`src/styles/animations.css`)
-   Add `locomotive-scroll` or similar smooth scrolling feel (optional, or just CSS smooth scroll).
-   Custom cursor? (Maybe a small circle that expands over clickable elements).

## Technical Changes
-   **New Component**: `Navigation.jsx`
-   **Refactored**: `Hero.jsx`, `Experience.jsx`, `Projects.jsx`
-   **New Styles**: `animations.css`, updated `index.css`

## Execution Order
1.  **Global Styles**: Update font system and grid variables.
2.  **Navigation**: Add the sticky "guide".
3.  **Hero**: Redesign for maximum impact.
4.  **Sections**: Refactor Experience & Projects.
5.  **Polish**: Animations and spacing.

