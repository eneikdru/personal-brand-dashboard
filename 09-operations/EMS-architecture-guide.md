# EMS Architecture Guide: Brand OS Ecosystem

## 1. The Brand Philosophy (Strategic Pivot)
- **Core Focus:** Moving away from generic analyst interviews to **"Business Philosophy"**.
- **Foundations:** Built on analytic philosophy (logical analysis, language frameworks, rigor like Kant, Russell, Wittgenstein).
- **Structure:** 50 episodes with a weekly Tuesday rhythm.
- **Rule:** Every technical task must respect, preserve, or enhance this specific structure.

## 2. EMS Workflow Laws (Lean & TOC)
- **Input Channel:** Accept inputs ONLY in the "Customer Wishes" column in Linear.
- **Decomposition:** Every Customer wish must be decomposed into the smallest possible technical steps.
- **Git Isolation Law:** One task must modify a maximum of 1–3 specific files to eliminate merge conflicts.
- **Agent Distribution:** Distribute tasks evenly among tags:
  - `#agent-backend`
  - `#agent-frontend`
  - `#agent-philosophy`
- **Goal:** Maintain a fluid deployment pipeline without bottlenecking the GitHub Actions queue.

## 3. Six Sigma Laws (Zero Defect Architecture)
- **Definition of Done (DoD):** Every task MUST contain a strict, non-negotiable checklist.
- **Automated Testing:** Mandate automated tests (e.g., pytest, custom mock verifications).
- **Waste Management:** Any code delivered without verified tests is considered "waste" and cannot be merged into `main`.

## 4. Operating Protocol for the Super Architect
1. Receive request in "Customer Wishes".
2. Decompose into atomic tasks.
3. Create Linear issues with specific agent tags.
4. Include detailed DoD and testing requirements in each issue.
5. Monitor execution and ensure zero-defect delivery.
