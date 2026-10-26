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

- Pending.
