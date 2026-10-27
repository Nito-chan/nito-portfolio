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

## 2026-10-27 — Phase 3: front page, work archive and Lab

- Rebuilt the front page around a six-scene scroll-scrub deck: Home-Service
  Demo Kit, Purana Bazaar, Al Ameen Dental, Slotwise, BELLWARD and Funngro.
  Each opens a case-study modal with strength, goal and vision.
- Added a front-page Lab teaser and a separate arcade-style Lab page with four
  cabinets: BELLWARD (live), TEMPO, HEFT and LOOPBOUND (playable local builds,
  public URLs pending). Real gameplay screenshots are used where available.
- Rebuilt the work archive with all 30 complete projects that have live URLs,
  including legacy demos. Every card has a real screenshot, live link, stack
  and an honest demo/concept label. Filters cover Web, AI & Automation, Video,
  Design and Games.
- Added USD-first pricing: Launch $150 (≈ ₹12,500), Studio $400 (≈ ₹33,000)
  and Custom “Name your price”. AI automation sits inside Studio, not a
  separate add-on.
- Optimized every project and game screenshot to WebP and fixed image aspect
  handling so screenshots are no longer stretched or side-cropped.
- Fixed the process section staying invisible after a hash load or refresh by
  switching reveal triggers from ScrollTrigger batches to IntersectionObserver.
- Fixed the Lab hero grid on mobile/tablet, the work-page h1 overflow at 375,
  pricing CTA alignment, static/reduced-motion fallbacks and modal focus.
- QA at 1440/768/375: no console errors, failed requests or horizontal
  overflow; filters, case modal, mobile menu, FAQ, reduced motion and forced
  static mode checked.
- No push or deployment. Preview approval remains with Nitō.

## 2026-10-27 — Hero simplification and scroll performance

- Restored the original hero layout: one message column plus the build-log
  terminal. Removed the three-image reel and its config, render and CSS.
- Replaced the per-frame aurora canvas with a static CSS gradient. Removed the
  hero scrub parallax and the delayed hero intro so the headline, subline, CTAs
  and stats are visible on first paint.
- Restored honest hero stats: 30 live projects & demos, 4 original games,
  1 person running the whole pipeline. No “plus” claims.
- Marquee now uses two seamless groups (one `aria-hidden`), pauses when
  offscreen or the tab is hidden, and still pauses on hover.
- Removed `backdrop-filter` from the terminal and ghost buttons, dropped global
  `will-change` from buttons, disabled header blur below 960px and reduced it
  to 10px on desktop. Hid the decorative scroll hint below 960px.
- `?static=1` and reduced motion now resolve every reveal and CSS loop to its
  final visible state instead of leaving infinite animations running.
- Bumped shared asset cache busters to `?v=6`.
- Throttled scroll benchmark (1440×900, 4× CPU, 0→1800px): 8.0 FPS before,
  ~24.4 FPS after, essentially the 25.3 FPS all-motion-off harness floor.
  Static mode measured 31.6 FPS. No console errors or horizontal overflow at
  1440/768/375.
