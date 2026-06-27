# Decomposition: Project Bootstrap & Linear Workspace Setup
Date: 2026-06-07
Source: Customer Directive ("Start from scratch")

## Vision
Initialize a clean, high-rigor Linear workspace optimized for the EMS Architect-Agent workflow.

## Atomic Tasks

### Task 1: [System] Workspace Configuration & Workflow States
- **Agent:** `#agent-backend`
- **Target:** Linear API
- **Description:**
  1. Define the following states: `Customer Wishes` (Triage), `Backlog`, `In Progress`, `Review`, `Done`.
  2. Create Agent Labels: `#agent-backend`, `#agent-frontend`, `#agent-philosophy`.
  3. Create Rigor Labels: `#six-sigma`, `#high-rigor`.
- **Definition of Done (DoD):**
  - [ ] Workspace reflects the EMS structure.
  - [ ] CLI tool `getTeams` and `getLabels` return the new configuration.

### Task 2: [Philosophy] 50-Episode Core Dataset Audit
- **Agent:** `#agent-philosophy`
- **Files:** `04-philosophy/philosophers.md`, `06-content/youtube-publication-calendar-2026-2027.md`
- **Description:**
  1. Perform a "Zero-Waste" audit of all 50 philosopher entries.
  2. Ensure every title is "Scene-Based" (Business Risk) and every thesis is logically rigorous.
- **Definition of Done (DoD):**
  - [ ] 100% of episodes pass the "Analytic Philosophy Rigor" check.
  - [ ] No robotic framework placeholders remain.

### Task 3: [Backend] Linear-to-Dashboard Sync Engine
- **Agent:** `#agent-backend`
- **Files:** `00-system/update-dashboard-data.js`
- **Description:**
  1. Refactor the sync script to pull "Episode Status" from the corresponding Linear issues.
  2. Map Linear states to Dashboard statuses (released/planned).
- **Definition of Done (DoD):**
  - [ ] `node 00-system/update-dashboard-data.js` successfully updates `dashboard/app.js` using Linear API data.
  - [ ] Automated tests verify the mapping logic.
