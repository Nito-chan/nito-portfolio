/* ============================================================
   NITŌ — personal portfolio config. Real content, real links.
   6 featured case studies + all live projects + 4 lab games.
   ============================================================ */
window.SITE = {
  meta: {
    title: "Nitō — Websites that feel like films",
    description:
      "Nitō builds local-business websites with WhatsApp booking and AI automation add-ons. Web dev, AI workflows, design and video from India.",
    url: "https://nito.dpdns.org/",
    ogImage: "https://nito.dpdns.org/og-image.png",
    lang: "en"
  },

  person: {
    name: "Nitō",
    brand: "dev.folio",
    role: "Full-Stack Engineer & AI Architect",
    location: "India · working worldwide",
    email: "nitodev.official@gmail.com",
    whatsapp: "919244760460",
    waText: "Hi! I'm interested in your services. Can we chat?",
    calendly: "https://calendly.com/tanjiro-kamado9u/new-client",
    resumeUrl: "#",
    availability: { open: true, text: "Open for new projects" }
  },

  hero: {
    kicker: "Freelance developer · AI automation · designer",
    headline: "Websites with",
    accent: "a pulse.",
    subline:
      "I'm Nitō. I build local-business websites with WhatsApp booking, AI workflows, design and video — cinematic sites that convert visitors.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "See best work", href: "#work" }
  },

  marquee: ["Web Development", "AI Automation", "UI / UX Design", "Video Editing", "Make.com Workflows", "Landing Pages"],

  services: [
    { name: "Web Development", desc: "Fast, responsive sites built from scratch or on Webflow/Framer. Pixel-perfect on every device.", tags: ["HTML/CSS", "JavaScript", "React", "Next.js"] },
    { name: "AI Automation", desc: "Make.com workflows, AI chatbots and integrations that save hours every week.", tags: ["Make.com", "OpenAI API", "Chatbots", "Webhooks"] },
    { name: "UI / UX Design", desc: "Clean wireframes, mockups and brand identities for web and apps.", tags: ["Figma", "Branding", "Prototyping"] },
    { name: "Video Editing", desc: "Reels, promos and brand videos — including AI-assisted short-form pipelines.", tags: ["Premiere Pro", "After Effects", "Reels"] }
  ],

  /* Front page: 6 scroll-scrub case studies. */
  projects: [
    {
      title: "Home-Service Demo Kit",
      subtitle: "Five niches. One booking engine.",
      cat: "Web · Demo",
      label: "Demo — fictional business",
      summary: "One codebase, five home-service niches: HVAC, plumbing, roofing, electrician and pest control. Booking-ready sites for small Indian cities.",
      strength: "One codebase, five niches — swap copy, palette and hero, keep the booking flow, WhatsApp CTA and lead form.",
      goal: "Show small home-service businesses in Indore what a complete, mobile-first site can do for booked jobs.",
      vision: "A white-label kit local agencies can deploy for clients in days, not weeks.",
      purpose: "Show what a local service business gets: a complete, mobile-first website that turns visitors into booked jobs.",
      problem: "Local service businesses in small Indian cities have no online presence; customers call for everything.",
      role: "Design and build (Next.js + Tailwind), solo demo",
      result: "A reusable demo kit with service pages, booking flow, gallery and lead form. Demo banner + noindex; not a client project.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://electrician-demo-bay.vercel.app/",
      domain: "electrician-demo-bay.vercel.app",
      img: "shots/electrician-demo",
      accent: "ember", featured: true, catKey: "Web", year: "2026"
    },
    {
      title: "Purana Bazaar",
      subtitle: "A small-town marketplace, built for INR.",
      cat: "Web · Private project",
      label: "Demo — private project, mock data",
      summary: "A local marketplace for Khargone: INR-first, Hindi/English, mobile-first. Mock listings — a private project shown publicly as a demo.",
      strength: "INR-first pricing, Hindi/English UI, real CC0 photos and a mobile-first layout built for a small Indian city.",
      goal: "Make a small-town bazaar feel discoverable online without a heavy app.",
      vision: "A real hyperlocal marketplace for Khargone, starting with trusted local sellers.",
      purpose: "Prove local-market understanding: Indian city, INR pricing, bilingual UI, real CC0 photos.",
      problem: "Small-town marketplaces need a simple, mobile-first online presence.",
      role: "Design and build (Next.js), solo private project",
      result: "Mobile-first marketplace demo with INR pricing, Hindi/English UI, tests and CI. Mock data; not a live marketplace.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://purana-bazaar.vercel.app/",
      domain: "purana-bazaar.vercel.app",
      img: "shots/purana-bazaar",
      accent: "teal", featured: true, catKey: "Web", year: "2026"
    },
    {
      title: "Al Ameen Dental Clinic",
      subtitle: "A calm, bilingual front door for a real dentist.",
      cat: "Web · Dental demo",
      label: "Demo — built for a real dentist, not a paying client",
      summary: "Full clinic website for Aden, Yemen: services, booking, team, gallery and Arabic tagline. A demo built for a real dentist — not a paying client.",
      strength: "Bilingual clinic site with a calm, surgical tone: services, booking, team, gallery and Arabic tagline.",
      goal: "Give a busy implant and surgery practice a credible online front door.",
      vision: "A booking-first clinic template other dentists in Aden can adapt.",
      purpose: "Give a busy surgical practice an online front door: services, booking and trust.",
      problem: "A busy implant and surgery practice with no online presence; patients called for everything.",
      role: "Design and build (Next.js), solo demo",
      result: "Complete bilingual site with booking flow. Demo label shown; not presented as a client result.",
      stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
      liveUrl: "https://dr-osamah-ameen.vercel.app/",
      domain: "dr-osamah-ameen.vercel.app",
      img: "shots/dr-osamah-ameen",
      accent: "fire", featured: true, catKey: "Web", year: "2026"
    },
    {
      title: "Slotwise",
      subtitle: "Fewer empty chairs. More booked days.",
      cat: "Web · Concept",
      label: "Concept — fictional data",
      summary: "Booking automation concept for clinics, salons and studios. Fictional data — a public concept, not a live SaaS.",
      strength: "A clean booking flow with reminders, pricing, privacy and book-demo states.",
      goal: "Show how a small business cuts no-shows with a WhatsApp-first booking experience.",
      vision: "A lightweight SaaS for Indian service businesses, built around WhatsApp.",
      purpose: "Show how a small business cuts no-shows with reminders and a clean booking flow.",
      problem: "Small businesses lose bookings to unanswered messages and missed calls.",
      role: "Design and build, solo concept",
      result: "Clean booking concept with pricing, privacy and book-demo flow. Explicitly fictional data; concept label shown.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://slotwise-six.vercel.app/",
      domain: "slotwise-six.vercel.app",
      img: "shots/slotwise",
      accent: "violet", featured: true, catKey: "Web", year: "2026"
    },
    {
      title: "BELLWARD",
      subtitle: "The Drowned Belfry. A playable metroidvania.",
      cat: "Games · Original",
      label: "Original game — playable vertical slice",
      summary: "An original metroidvania vertical slice: atmosphere-first art direction, tight controls and a world that pulls you forward.",
      strength: "Atmosphere-first art direction, tight controls and a playable vertical slice — not a mockup.",
      goal: "Prove I can ship a game, not just a website.",
      vision: "A full metroidvania with more rooms, bosses and a public release.",
      purpose: "Build an original game from scratch and ship a playable vertical slice.",
      problem: "Most portfolio games are concept art. I wanted a real playable build.",
      role: "Design, code, art direction and build",
      result: "Playable browser build with original art direction and a public live URL.",
      stack: ["Next.js", "TypeScript"],
      liveUrl: "https://bellward-metroidvania.vercel.app/",
      domain: "bellward-metroidvania.vercel.app",
      img: "shots/bellward-gameplay",
      accent: "teal", featured: true, catKey: "Games", year: "2026"
    },
    {
      title: "Funngro Revamp",
      subtitle: "A credible redesign for India's teen-earning platform.",
      cat: "Web · Redesign",
      label: "Unofficial redesign concept — demo data",
      summary: "An unofficial redesign of India's teen-earning platform: home + brands pages, SEO audit, Lighthouse evidence and two design directions.",
      strength: "Two design directions, a real SEO audit and Lighthouse evidence — not just a pretty mockup.",
      goal: "Make Funngro feel credible to teens and parents at first glance.",
      vision: "A conversion-first brand system Funngro could ship as its next site.",
      purpose: "Show how a fast-growing Indian platform could look and convert better.",
      problem: "The existing site had to explain too much before it earned trust.",
      role: "Research, design and build (Next.js), solo concept",
      result: "Two complete design directions with SEO audit and Lighthouse evidence. Unofficial concept; demo data labelled.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
      liveUrl: "https://funngro-revamp-nito.vercel.app/",
      domain: "funngro-revamp-nito.vercel.app",
      img: "shots/funngro-revamp",
      accent: "ember", featured: true, catKey: "Web", year: "2026"
    }
  ],

  /* Archive: all complete projects with a live URL. Nothing hidden because it's old. */
  archive: [
    { img: "shots/electrician-demo", title: "Home-Service Demo — Electrician", cat: "Web", desc: "Electrician demo from the home-service kit. Services, booking, gallery, lead form.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://electrician-demo-bay.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/hvac-demo", title: "Home-Service Demo — HVAC", cat: "Web", desc: "HVAC demo from the home-service kit. India variant shows Indore +91 92447 60460.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://hvac-demo-iota.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/pest-demo", title: "Home-Service Demo — Pest Control", cat: "Web", desc: "Pest control demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://pest-demo-three.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/plumbing-demo", title: "Home-Service Demo — Plumbing", cat: "Web", desc: "Plumbing demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://plumbing-demo-sand.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/roofing-demo", title: "Home-Service Demo — Roofing", cat: "Web", desc: "Roofing demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://roofing-demo-sigma-sand.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/purana-bazaar", title: "Purana Bazaar — Khargone marketplace", cat: "Web", desc: "Local marketplace for Khargone: INR-first, Hindi/English, mobile-first. Mock listings.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://purana-bazaar.vercel.app/", year: "2026", label: "Demo — private project, mock data" },
    { img: "shots/slotwise", title: "Slotwise — booking automation", cat: "Web", desc: "Booking automation concept for clinics, salons and studios. Fictional data.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://slotwise-six.vercel.app/", year: "2026", label: "Concept — fictional data" },
    { img: "shots/dr-osamah-ameen", title: "Al Ameen Dental Clinic", cat: "Web", desc: "Full clinic website for Aden, Yemen: services, booking, team, gallery and Arabic tagline. Demo built for a real dentist — not a paying client.", stack: ["Next.js", "React", "Tailwind", "Framer Motion"], liveUrl: "https://dr-osamah-ameen.vercel.app/", year: "2026", label: "Demo — built for a real dentist, not a paying client" },
    { img: "shots/clearview", title: "Clearview — client reports", cat: "Web", desc: "White-label client-reporting SaaS concept: features, pricing, privacy and book-demo flow. Concept notice and fictional figures are explicit.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://clearview-nito.vercel.app/", year: "2026", label: "Concept — fictional data" },
    { img: "shots/funngro-revamp", title: "Funngro Revamp", cat: "Web", desc: "Submitted revamp of India's teen-earning platform. Home + Brands pages, SEO audit, Lighthouse evidence. Unofficial redesign concept.", stack: ["Next.js", "TypeScript", "Tailwind", "Motion"], liveUrl: "https://funngro-revamp-nito.vercel.app/", year: "2026", label: "Unofficial redesign concept — demo data" },
    { img: "shots/funngro-revamp-v2", title: "Funngro Revamp v2", cat: "Web", desc: "Second design direction: light editorial theme, bento grids.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://funngro-revamp-nito-v2.vercel.app/", year: "2026", label: "Unofficial redesign concept — demo data" },
    { img: "shots/restaurant-assistant-bot", title: "Nitō's Bistro + Assistant", cat: "AI & Automation", desc: "Restaurant page with a working rule-based chat assistant: menu cards, booking state machine, ticket numbers.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://restaurant-assistant-bot.vercel.app/", year: "2026", label: "Demo — fictional restaurant" },
    { img: "shots/cleaning-service", title: "Sparkle & Shine Cleaning Co.", cat: "Web", desc: "Cleaning-service site with services, booking and quote flows.", stack: ["Next.js", "React", "Tailwind"], liveUrl: "https://cleaning-service-one-lyart.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "shots/vela-one", title: "VELA One — Product Page", cat: "Web", desc: "Scroll-driven 3D product page demo. Fictional product page.", stack: ["HTML", "CSS", "JavaScript", "3D"], liveUrl: "https://vela-one-three.vercel.app/", year: "2026", label: "Demo — fictional product page" },
    { img: "shots/chronos-time", title: "CHRONOS — Operating System for Time", cat: "Web", desc: "Luxury 3D concept brand site: timeline simulator, GSAP scroll scenes, full brand system.", stack: ["Next.js", "Three.js", "GSAP", "Lenis"], liveUrl: "https://chronos-time-omega.vercel.app/", year: "2026", label: "Concept — 3D brand site", note: "3D needs a real-GPU check" },
    { img: "shots/mythology-3d", title: "Pantheon — Chronicles of the Infinite", cat: "Web", desc: "Immersive 3D mythology scroll: Greek, Norse, Egyptian and Japanese realms with synth audio and codex.", stack: ["React", "Three.js", "Framer Motion", "GSAP"], liveUrl: "https://mythology-3d-iota.vercel.app/", year: "2026", label: "Concept — 3D mythology scroll" },
    { img: "shots/sole-saga-sneakers", title: "Sole Saga — Anime Sneakers", cat: "Web", desc: "Anime-inspired sneaker brand: animated hero, anatomy, colorways, collab roster and drop waitlist.", stack: ["Vite", "TypeScript", "CSS", "Video"], liveUrl: "https://sole-saga-sneakers.vercel.app/", year: "2026", label: "Concept — anime sneaker drop" },
    { img: "shots/carousel-generator", title: "Carousel Generator", cat: "Design", desc: "Instagram carousel exporter: 7-slide trust-building post, PNG export. Lead-magnet tool.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://carousel-generator-sable.vercel.app/", year: "2026", label: "Internal tool — lead magnet" },
    { img: "shots/n8n-story-factory", title: "Story Factory — AI video pipeline", cat: "Video", desc: "Reddit story → script → AI scenes → TTS → stitched MP4. Finished short plus reusable n8n workflow.", stack: ["Python", "n8n", "Gemini", "FFmpeg"], liveUrl: "https://n8n-story-factory.vercel.app/demo/", year: "2026", label: "Internal pipeline demo" },
    { img: "shots/bellward-gameplay", title: "BELLWARD — Metroidvania", cat: "Games", desc: "Original metroidvania game: playable vertical slice.", stack: ["Next.js", "TypeScript"], liveUrl: "https://bellward-metroidvania.vercel.app/", year: "2026", label: "Original game — playable vertical slice" },
    { img: "shots/regular-ring", title: "Regular Ring — Smart Ring", cat: "Design", desc: "Smart-ring product page concept.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://regular-ring-sigma.vercel.app/", year: "2026", label: "Concept — smart-ring product page" },
    { img: "shots/marchetti-sons", title: "Marchetti & Sons — Brand", cat: "Design", desc: "Fictional brand portfolio piece.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://marchetti-sons.vercel.app/", year: "2026", label: "Portfolio piece — fictional brand" },
    { img: "shots/proper-demo", title: "Bright Smile Dentary", cat: "Web", desc: "Premium dental-care demo: confident-smiles hero, booking flow.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://proper-demo-tan.vercel.app/", year: "2025", label: "Legacy demo — fictional clinic" },
    { img: "shots/immersive", title: "AETHER — Immersive Brand", cat: "Web", desc: "Narrative-driven brand experience for a tech startup.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://immersive-seven-puce.vercel.app/", year: "2025", label: "Legacy demo — fictional brand experience" },
    { img: "shots/futuristic", title: "AEON — Luxury E-Commerce", cat: "Web", desc: "Visionary luxury storefront with streamlined checkout.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://futuristic-ten.vercel.app/", year: "2025", label: "Legacy demo — fictional luxury brand" },
    { img: "shots/port", title: "Design Portfolio Demo", cat: "Design", desc: "Grid-driven agency portfolio with scroll animations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://port-gamma-amber.vercel.app/", year: "2025", label: "Legacy demo — generic portfolio" },
    { img: "shots/restaurant", title: "L'Éclat — Fine Dining Demo", cat: "Web", desc: "Elegant restaurant experience with reservations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://restaurant-rho-three-64.vercel.app/", year: "2025", label: "Legacy demo — fictional restaurant" },
    { img: "shots/ecom", title: "AURA — Fashion & Lifestyle", cat: "Design", desc: "Mood-driven fashion microsite demo.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://ecom-blush-ten.vercel.app/", year: "2025", label: "Legacy demo — fictional fashion store" },
    { img: "shots/fast-food", title: "FLARE — Street Food & Culture", cat: "Web", desc: "High-energy food brand page with events and gallery.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://fast-food-weld.vercel.app/", year: "2025", label: "Legacy demo — fictional street food brand" },
    { img: "shots/usa-dental", title: "USA Dental — Legacy", cat: "Web", desc: "Fictional dental clinic demo. Kept in the archive as a legacy build.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://dental-clinic-usa.vercel.app/", year: "2025", label: "Legacy demo — fictional clinic" }
  ],

  /* Lab: original games and experiments. */
  lab: [
    {
      title: "BELLWARD",
      genre: "Metroidvania · The Drowned Belfry",
      desc: "An original metroidvania vertical slice with atmosphere-first art direction and a world that pulls you forward.",
      img: "shots/bellward-gameplay",
      liveUrl: "https://bellward-metroidvania.vercel.app/",
      status: "live",
      statusLabel: "LIVE",
      action: "Play now",
      note: "Playable in the browser",
      stack: ["Next.js", "TypeScript"],
      accent: "#2dd4bf"
    },
    {
      title: "TEMPO",
      genre: "Original game · First Gate",
      desc: "A browser-first puzzle-platformer about retiming the machines of Concerto. Playable Gate 1 vertical slice.",
      img: "shots/tempo-gameplay",
      liveUrl: "",
      status: "local",
      statusLabel: "LOCAL BUILD",
      action: "Public URL pending",
      note: "Playable Gate 1 build — public URL pending",
      stack: ["Vite", "Phaser"],
      accent: "#f472b6"
    },
    {
      title: "HEFT",
      genre: "2.5D physics fable · Milestone 0",
      desc: "Weight never disappears. You can only borrow it, carry it, and hope the Ledger returns it kindly. Three greybox rooms, real conservation, plumb heft values.",
      img: "shots/heft-gameplay",
      liveUrl: "",
      status: "local",
      statusLabel: "LOCAL BUILD",
      action: "Public URL pending",
      note: "Playable Milestone 0 build — public URL pending",
      stack: ["Vite", "TypeScript", "Rapier"],
      accent: "#fbbf24"
    },
    {
      title: "LOOPBOUND",
      genre: "Arise Protocol · Story-driven",
      desc: "Solo grind meets mercy-as-puzzle. Every death lets you steal your killer's power — but the System watching you is your future self begging you to stop.",
      img: "shots/loopbound",
      liveUrl: "",
      status: "local",
      statusLabel: "LOCAL BUILD",
      action: "Public URL pending",
      note: "Playable local build — public URL pending",
      stack: ["Next.js", "TypeScript"],
      accent: "#a3e635"
    }
  ],

  process: [
    { step: "Cold open", text: "A call about goals and audience. You get a one-page treatment with a fixed price.", deliverable: "Treatment + fixed quote" },
    { step: "Storyboard", text: "Clickable prototype with copy and motion beats. You review, I revise.", deliverable: "Clickable prototype" },
    { step: "Production", text: "Build with preview links the whole way. Automations get dry-run tests first.", deliverable: "Preview link" },
    { step: "Premiere", text: "Launch, docs, handover. Support included per plan.", deliverable: "Launch + handover" }
  ],

  skills: [
    { group: "Build", items: [{ name: "HTML / CSS", level: "Daily" }, { name: "JavaScript", level: "Daily" }, { name: "React / Next.js", level: "Comfortable" }, { name: "WordPress / Webflow", level: "Daily" }] },
    { group: "AI & Automation", items: [{ name: "Make.com", level: "Daily" }, { name: "AI integration (GPT, Claude)", level: "Comfortable" }, { name: "Chatbots", level: "Comfortable" }, { name: "n8n / Zapier", level: "Comfortable" }] },
    { group: "Craft", items: [{ name: "Figma / UI design", level: "Comfortable" }, { name: "Video editing", level: "Daily" }, { name: "SEO basics", level: "Comfortable" }] }
  ],

  tiers: [
    {
      name: "Launch",
      tagline: "Landing page + basics",
      price: "$150",
      inr: "≈ ₹12,500",
      blurb: "A sharp one-page site that makes a small business look real and ready to book.",
      features: [
        { text: "1-page landing site", yes: true },
        { text: "Mobile-first responsive design", yes: true },
        { text: "WhatsApp CTA + contact form", yes: true },
        { text: "Basic SEO + analytics setup", yes: true },
        { text: "1 revision round", yes: true },
        { text: "5-day delivery", yes: true },
        { text: "1 month support", yes: true },
        { text: "AI automation + booking flow", yes: false }
      ],
      cta: { label: "Start small", href: "#contact" }, featured: false
    },
    {
      name: "Studio",
      tagline: "Full website + automation",
      price: "$400",
      inr: "≈ ₹33,000",
      blurb: "The complete local-business website: pages, booking, forms and AI automation that works while you sleep.",
      features: [
        { text: "Up to 6 pages", yes: true },
        { text: "WhatsApp booking + lead forms", yes: true },
        { text: "Make.com automation workflows", yes: true },
        { text: "AI chatbot or lead capture", yes: true },
        { text: "3 revision rounds", yes: true },
        { text: "3 months support", yes: true },
        { text: "2–3 week delivery", yes: true }
      ],
      cta: { label: "Build the full site", href: "#contact" }, featured: true
    },
    {
      name: "Custom",
      tagline: "3D + complex builds",
      price: "Name your price",
      inr: "Scoped after a call",
      blurb: "3D websites, complex integrations, custom interactions or something nobody has built yet. Tell me what you need — we scope it together.",
      features: [
        { text: "3D / WebGL experiences", yes: true },
        { text: "Custom interactions + motion", yes: true },
        { text: "Complex integrations + APIs", yes: true },
        { text: "Custom timeline + milestones", yes: true },
        { text: "NDA-friendly", yes: true },
        { text: "Proposal after a discovery call", yes: true },
        { text: "Template-only work", yes: false }
      ],
      cta: { label: "Tell me your idea", href: "#contact" }, featured: false
    }
  ],

  testimonials: [],
  trusted: [],

  faq: [
    { q: "Why hire you instead of three freelancers?", a: "Design, development, AI automation and video in one person — every piece fits because one brain planned it. Delivered on time with clear communication." },
    { q: "How long will my project take?", a: "Landing pages: about 5 days. Full sites: 2–3 weeks. Automations: 1–2 weeks. Custom 3D work is scoped after a call. You get a timeline before we start." },
    { q: "How do revisions work?", a: "Launch includes 1 round, Studio includes 3, Custom is scoped per project. Progress is shared at milestones — no surprises." },
    { q: "Do you offer support after launch?", a: "Yes — Launch includes 1 month of support, Studio includes 3 months. Monthly retainers are available for ongoing work." },
    { q: "What's your refund policy?", a: "Full refund if the delivered work doesn't match what we agreed. I fix first, refund if I can't." },
    { q: "How can I pay?", a: "Cards via Stripe, PayPal, bank transfer, UPI, or Upwork/Fiverr milestones. Proper invoice every time. INR pricing is approximate at ₹83/$." }
  ],

  experience: [
    { role: "Web development & landing pages", org: "Freelance — client sites" },
    { role: "AI tools & automation", org: "Freelance — Make.com, GPT, workflows" },
    { role: "AI chatbots", org: "Freelance — support & booking bots" },
    { role: "Mobile video editing", org: "Reels, promos, shorts" },
    { role: "PC video editing", org: "Premiere Pro, After Effects" }
  ],

  about: {
    paragraphs: [
      "I'm Nitō — developer, automation nerd, designer. I started rebuilding family shop pages; now I build cinematic sites and AI workflows for local businesses.",
      "One person, whole pipeline: design, code, automation, video. No handoffs, no telephone game, no bloat."
    ],
    photo: null
  },

  social: [
    { label: "GitHub", href: "https://github.com/Nito-chan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nito-dev" },
    { label: "Instagram", href: "https://www.instagram.com/nitodev.official" },
    { label: "Fiverr", href: "https://www.fiverr.com/sellers/nitodev" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~0189875129c75c286f?mp_source=share" }
  ],

  theme: { default: "dark", accent: null },

  form: { endpoint: "https://formspree.io/f/mnpjddvq" },

  formServices: ["Launch — landing page", "Studio — full website + AI", "Custom — 3D / complex", "UI / UX Design", "Video Editing", "Other"],
  formBudgets: ["Under $150", "$150 – $400", "$400 – $1,000", "$1,000+", "Not sure yet"]
};
