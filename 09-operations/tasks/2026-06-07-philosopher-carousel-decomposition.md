# Decomposition: Philosopher Gallery Widget (Carousel)
Date: 2026-06-07
Source: Customer Wish

## Vision
Add an interactive widget-gallery (carousel) for key philosophers from the 50 episodes to the dashboard. Slides must contain Name, Business Risk Thesis, and Status (released/planned).

## Atomic Tasks

### Task 1: [Data] Enrich Philosopher Dataset with Business Risk Theses
- **Agent:** `#agent-philosophy`
- **Files:** `dashboard/app.js`, `04-philosophy/philosophers.md`
- **Description:**
  1. Extract "central thesis on business risks" for all 50 philosophers.
  2. Update `dashboard/app.js` data structure to include `thesis` and `episodeStatus` for each philosopher.
- **Definition of Done (DoD):**
  - [ ] `dashboard/app.js` contains a complete array of 50 philosophers with `name`, `thesis`, and `episodeStatus`.
  - [ ] Data is valid JSON.
  - [ ] No regressions in existing dashboard data rendering.
  - [ ] Automated check: `node -e "const data = require('./dashboard/app.js'); if(data.philosophers.length !== 50) throw new Error('Incomplete data')"` (or equivalent).

### Task 2: [UI] Implement Carousel Component Skeleton & Styling
- **Agent:** `#agent-frontend`
- **Files:** `dashboard/index.html`, `dashboard/styles.css`
- **Description:**
  1. Add a responsive carousel container to `index.html`.
  2. Implement minimalist styling in `styles.css` consistent with the "Business Philosophy" brand (Analytic Tradition).
  3. Prepare slide slots for name, thesis, and status badge.
- **Definition of Done (DoD):**
  - [ ] Carousel container visible on the dashboard.
  - [ ] Responsive behavior (works on desktop and mobile).
  - [ ] Styled according to Brand OS brandbook (dry, rigorous style).
  - [ ] Verification: Playwright screenshot of the carousel shell.

### Task 3: [Logic] Dynamic Rendering & Lifecycle Management
- **Agent:** `#agent-frontend`
- **Files:** `dashboard/app.js`
- **Description:**
  1. Implement JS logic to populate the carousel slides from the `app.js` data object.
  2. Implement navigation (Next/Prev) and auto-rotation if applicable.
  3. Apply status badges: `released` (green) vs `planned` (grey).
- **Definition of Done (DoD):**
  - [ ] 50 slides are dynamically generated.
  - [ ] Navigation correctly updates the active slide.
  - [ ] Status badges accurately reflect data.
  - [ ] Automated Test: Playwright script verifies clicking "Next" changes the displayed philosopher name.
