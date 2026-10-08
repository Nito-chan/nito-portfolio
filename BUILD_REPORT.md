# BUILD_REPORT — nito-portfolio (Nitō, real site)

## 1. Deploy status

- **Target:** new repo `Nito-chan/nito-portfolio` → Vercel → `nito.dpdns.org`.
- Footer points at the planned repo URL.

## 2. What this is

Not a template: v2's Ember Cinema chassis + old dev.folio's real business.
Front page = best 6 (Al Ameen, CHRONOS, Funngro, Outreach linkless,
Pantheon, Bistro) + View-all cell. Archive (`work.html`) = 17 lifetime
items with filters. Pricing $100 (≈₹8,300) / $300 (≈₹25,000) / Custom.
Name Nitō everywhere. Dropped: Supabase/admin/API, skill percentages
(→ honest levels), third-person testimonial (→ first person).

## 3. Test battery (evidence, not claims)

| Project | Result |
|---|---|
| 7 old demos (vercel.app) | All HTTP 200, real titles captured; archive uses observed titles (e.g. live La Mesa link is actually French fine dining — labeled honestly) |
| Claimed custom domains (alameendental.com…) | All DNS-fail — cut, never printed |
| Al Ameen (local `next start`) | 16 sections, zero console errors; screenshot verified polished |
| Cleaning (local) | 17 sections, zero errors |
| Pantheon (local dist) | Renders (ZEUS UI), 1 canvas, no page errors |
| Bistro (local) | Chat UI complete, 8 buttons, no errors |
| CHRONOS (local) | Boots clean (title, 4 canvases, no errors) BUT pixels black under software WebGL — **unverified visually, flagged on its card**; needs a real-GPU check |
| Funngro v1 + v2 | Both live 200 |

Modal screenshots: alameen/pantheon/bistro → `assets/*.webp` (57 KB total),
lazy-loaded on modal open only.

## 4. Verification (this build)

- Syntax: `node --check` ×4 + vercel.json valid.
- Overflow matrix 320→1440 both pages (fixed: h1 min, grid blowout ×2,
  html overflow-x clip; sticky header re-verified).
- Modal (with lazy screenshots), filters (17 cards, e.g. Video→1),
  menu trap, form validation + selects, `?static=1` pass. Console clean.
- Contrast: same v2 pairs (6.2–16.3:1).
- Lighthouse local mobile — index: **70**/100/100/100 (LCP 4.0s, CLS 0.044);
  work.html: **67**/100/100/100 (CLS fixed 0.558→0.081 via grid reserve,
  heading-order + label-name fixes applied). Cost drivers: fonts + GSAP
  parse on throttled CPU. Badges stay "—" until the production audit.

## 5. Could not verify

- CHRONOS visuals (see above) — owner's real-browser check pending.
- Production deploy + Formspree activation on new domain.
- Safari/Firefox, 200% zoom, screen reader, field vitals.
