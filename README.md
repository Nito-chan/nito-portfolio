# Nitō — Personal Portfolio (dev.folio)

My real portfolio: immersive Ember Cinema design, real content, real links.
HTML + CSS + vanilla JS + GSAP/ScrollTrigger via CDN (deferred, progressive
enhancement). Static, deploys on Vercel.

Two pages sharing one core:
- `index.html` — best 6 projects, services, process, pricing, reviews, FAQ, contact.
- `work.html` — the lifetime collection: everything, filterable (All / Web /
  AI & Automation / Video / Design), each card readable + visitable.

## Content model (`js/config.js`)

`projects[6]` = front-page featured (with `cat`, `year`, optional `liveUrl`,
`shot` for modal screenshots, or honest `note` when linkless).
`archive[]` = everything else. Filters derive from `cat`.
Pricing in USD with INR subtext (`inr` field, ≈ ₹83/$).

## Form

Formspree AJAX (endpoint in config), service + budget selects,
`_gotcha` honeypot, inline `aria-live` errors.

## Deploy

Vercel: import repo, Root `./`, Framework Other, no build command.
Domain: `nito.dpdns.org`. Old `portfolio/` folder stays as backup until
the new site is live and verified.
