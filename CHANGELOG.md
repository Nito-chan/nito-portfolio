# Changelog

All notable changes to the portfolio. Detailed audit reports live in the
local-only `portfolio-review/` folder (gitignored) so blunt criticism and
business strategy are not published with the site.

## 2026-10-26 — Phase 0: audit setup

- Created branch `portfolio-overhaul`.
- Created local `portfolio-review/` workspace with audit reports, screenshots,
  Lighthouse JSON and cloned repos. Added it to `.gitignore`.
- Added `TODO_FOR_NITO.md` for facts only Nitō can confirm (client status,
  testimonials, pricing, resume/photo, integrations).
- Added audit tooling under `portfolio-review/tools/` (Playwright, Lighthouse,
  axe). Tooling is dev-only and never shipped to the live site.
- Confirmed environment: Windows 10, PowerShell 5.1, Node 24, npm 11, Git 2.54,
  Python 3.14, ffmpeg 9, Chrome, Playwright Chromium.
- Confirmed GitHub CLI is installed but unauthenticated; using the public API
  and HTTPS clones for Phase 2. No pushes without approval.

## 2026-10-26 — Phase 1: audit

- Completed the full audit: 360/768/1440 screenshots, no-JS and reduced-motion
  states, Lighthouse mobile, axe, keyboard checks, link audit and a Formspree
  test.
- Key findings: unverifiable social proof and a mislabelled dental demo;
  core content is JS-only (home drops from 6,233 to 1,770 characters without
  JS, with 11 empty containers); home-page mobile performance is 51–52 with
  one `PAGE_HUNG` Lighthouse run; the mobile case-study modal opens scrolled
  down; the resume link is dead; pricing is USD-first and outdated.
- Detailed findings and evidence are in the local-only `portfolio-review/`
  folder. No site code changed in this phase.
- Next: Phase 2 project inventory and ranking, then stop for approval.

## 2026-10-26 — Phase 2: project inventory and ranking

- Inventoried 41 public GitHub repos and 33 local project folders: 52
  canonical/excluded rows, 37 ranked portfolio candidates, 15 excluded.
- Found that five of the 31 GitHub candidates are one product: the
  home-service demo kit (HVAC, plumbing, roofing, electrician, pest). Treated
  as one front-page card, not five.
- Ranked the work on visual craft, local-service relevance, proof/honesty,
  completeness, performance/a11y and story. Recommended front page: Home-Service
  Demo Kit, Purana Bazaar, Slotwise, and Al Ameen Dental (conditional on fixes).
- Buckets: FRONT PAGE 7 repos (5 demos + Purana + Slotwise) plus 1 conditional;
  WORK ARCHIVE 4; LAB 15; RETIRE 10.
- Flagged the remaining unsupported proof: Al Ameen (mislabelled client,
  placeholders, unverified stats, corrupt images), USA Dental (invented stats),
  Cleaning Service (invented stats, 18.9 s LCP), Restaurant Assistant (invented
  4.9/1200+ rating). Also documented the `client-outreach` 500, the
  `n8n-story-factory` root 404, and the dead Clearview original URL.
- Secrets scan: 0 high-confidence findings; 14 env files not read. Reports and
  tooling remain local-only in `portfolio-review/` (gitignored).
- No site code changed, pushed or deployed. Next: Nitō approves the ranking,
  then Phase 3 starts.
