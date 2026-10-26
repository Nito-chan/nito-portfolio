/* ============================================================
   NITŌ — personal portfolio config. Real content, real links.
   Featured (front page, 4) + archive (all live projects).
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
    availability: { open: true, text: "Taking new projects — 2 slots open" }
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

  /* Front page: best first — 4 cards */
  projects: [
    {
      title: "Home-Service Demo Kit — 5 niches",
      summary: "One kit, five home-service niches: HVAC, plumbing, roofing, electrician and pest control. Booking-ready sites for small Indian cities, with WhatsApp CTA and lead form.",
      purpose: "Show what a local service business gets: a complete, mobile-first website that turns visitors into booked jobs.",
      role: "Design and build (Next.js + Tailwind), solo demo",
      problem: "Local service businesses in small Indian cities have no online presence; customers call for everything.",
      result: "A reusable demo kit with service pages, booking flow, gallery and lead form. Mobile-first, 78/100 Lighthouse, a11y 100. Demo banner + noindex; not a client project.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://electrician-demo-bay.vercel.app/",
      thumb: "ember", featured: true, cat: "Web", year: "2026",
      label: "Demo — fictional business"
    },
    {
      title: "Purana Bazaar — Khargone marketplace",
      summary: "Local marketplace for Khargone: INR-first, Hindi/English, mobile-first. Mock listings — a private project included in the portfolio.",
      purpose: "Prove local-market understanding: Indian city, INR pricing, bilingual UI, real CC0 photos.",
      role: "Design and build (Next.js), solo private project",
      problem: "Small-town marketplaces need a simple, mobile-first online presence.",
      result: "Mobile-first marketplace demo with INR pricing, Hindi/English UI, 35 commits, tests and CI. Mock data; not a live marketplace.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://purana-bazaar.vercel.app/",
      thumb: "teal", featured: true, cat: "Web", year: "2026",
      label: "Demo — private project, mock data"
    },
    {
      title: "Slotwise — booking automation",
      summary: "Booking automation concept for clinics, salons and studios. Fictional data — a public concept, not a live SaaS.",
      purpose: "Show how a small business cuts no-shows with reminders and a clean booking flow.",
      role: "Design and build, solo concept",
      problem: "Small businesses lose bookings to unanswered messages and missed calls.",
      result: "Clean booking concept with pricing, privacy and book-demo flow. Explicitly fictional data; concept label shown.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://slotwise-six.vercel.app/",
      thumb: "studio", featured: true, cat: "Web", year: "2026",
      label: "Concept — fictional data"
    },
    {
      img: "alameen",
      title: "Al Ameen Dental Clinic",
      summary: "Full clinic website for Aden, Yemen: services, booking, team, gallery, Arabic tagline. Demo built for a real dentist — not a paying client.",
      purpose: "Give a busy surgical practice an online front door: services, booking and trust.",
      role: "Design and build (Next.js), solo demo",
      problem: "A busy implant and surgery practice with no online presence; patients called for everything.",
      result: "Complete bilingual site with booking flow. Demo label shown; not presented as a client result.",
      stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
      liveUrl: "https://dr-osamah-ameen.vercel.app/",
      shot: "alameen",
      thumb: "ember", featured: true, cat: "Web", year: "2026",
      label: "Demo — built for a real dentist, not a paying client"
    }
  ],

  /* Archive: all complete projects with a live URL. Nothing hidden because it's old. */
  archive: [
    { title: "Home-Service Demo — Electrician", cat: "Web", desc: "Electrician demo from the home-service kit. Services, booking, gallery, lead form.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://electrician-demo-bay.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { title: "Home-Service Demo — HVAC", cat: "Web", desc: "HVAC demo from the home-service kit. India variant shows Indore +91 92447 60460.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://hvac-demo-iota.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { title: "Home-Service Demo — Pest Control", cat: "Web", desc: "Pest control demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://pest-demo-three.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { title: "Home-Service Demo — Plumbing", cat: "Web", desc: "Plumbing demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://plumbing-demo-sand.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { title: "Home-Service Demo — Roofing", cat: "Web", desc: "Roofing demo from the home-service kit.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://roofing-demo-sigma-sand.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { title: "Purana Bazaar — Khargone marketplace", cat: "Web", desc: "Local marketplace for Khargone: INR-first, Hindi/English, mobile-first. Mock listings.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://purana-bazaar.vercel.app/", year: "2026", label: "Demo — private project, mock data" },
    { title: "Slotwise — booking automation", cat: "Web", desc: "Booking automation concept for clinics, salons and studios. Fictional data.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://slotwise-six.vercel.app/", year: "2026", label: "Concept — fictional data" },
    { img: "alameen", title: "Al Ameen Dental Clinic", cat: "Web", desc: "Full clinic website for Aden, Yemen: services, booking, team, gallery, Arabic tagline. Demo built for a real dentist — not a paying client.", stack: ["Next.js", "React", "Tailwind", "Framer Motion"], liveUrl: "https://dr-osamah-ameen.vercel.app/", year: "2026", label: "Demo — built for a real dentist, not a paying client" },
    { img: "funngro", title: "Funngro Revamp", cat: "Web", desc: "Submitted revamp of India's teen-earning platform. Home + Brands pages, SEO audit, Lighthouse evidence. Unofficial redesign concept.", stack: ["Next.js", "TypeScript", "Tailwind", "Motion"], liveUrl: "https://funngro-revamp-nito.vercel.app/", year: "2026", label: "Unofficial redesign concept — demo data" },
    { title: "Funngro Revamp v2", cat: "Web", desc: "Second design direction: light editorial theme, bento grids.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://funngro-revamp-nito-v2.vercel.app/", year: "2026", label: "Unofficial redesign concept — demo data" },
    { img: "bistro", title: "Nitō's Bistro + Assistant", cat: "AI & Automation", desc: "Restaurant page with a working rule-based chat assistant: menu cards, booking state machine, ticket numbers.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://restaurant-assistant-bot.vercel.app/", year: "2026", label: "Demo — fictional restaurant" },
    { img: "cleaning", title: "Sparkle & Shine Cleaning Co.", cat: "Web", desc: "Cleaning-service site with services, booking and quote flows.", stack: ["Next.js", "React", "Tailwind"], liveUrl: "https://cleaning-service-one-lyart.vercel.app/", year: "2026", label: "Demo — fictional business" },
    { img: "demo-dental", title: "Bright Smile Dentary", cat: "Web", desc: "Premium dental-care demo: confident-smiles hero, booking flow.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://proper-demo-tan.vercel.app/", year: "2025", label: "Legacy demo — fictional clinic" },
    { img: "demo-aether", title: "AETHER — Immersive Brand", cat: "Web", desc: "Narrative-driven brand experience for a tech startup.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://immersive-seven-puce.vercel.app/", year: "2025", label: "Legacy demo — fictional brand experience" },
    { img: "demo-aeon", title: "AEON — Luxury E-Commerce", cat: "Web", desc: "Visionary luxury storefront with streamlined checkout.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://futuristic-ten.vercel.app/", year: "2025", label: "Legacy demo — fictional luxury brand" },
    { img: "demo-port", title: "Design Portfolio Demo", cat: "Design", desc: "Grid-driven agency portfolio with scroll animations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://port-gamma-amber.vercel.app/", year: "2025", label: "Legacy demo — generic portfolio" },
    { img: "demo-restaurant", title: "L'Éclat — Fine Dining Demo", cat: "Web", desc: "Elegant restaurant experience with reservations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://restaurant-rho-three-64.vercel.app/", year: "2025", label: "Legacy demo — fictional restaurant" },
    { img: "demo-aura", title: "AURA — Fashion & Lifestyle", cat: "Design", desc: "Mood-driven fashion microsite demo.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://ecom-blush-ten.vercel.app/", year: "2025", label: "Legacy demo — fictional fashion store" },
    { img: "demo-flare", title: "FLARE — Street Food & Culture", cat: "Web", desc: "High-energy food brand page with events and gallery.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://fast-food-weld.vercel.app/", year: "2025", label: "Legacy demo — fictional street food brand" },
    { img: "carousel", title: "Carousel Generator", cat: "Design", desc: "Instagram carousel exporter: 7-slide trust-building post, PNG export. Lead-magnet tool.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://carousel-generator-sable.vercel.app/", year: "2026", label: "Internal tool — lead magnet" },
    { img: "story", title: "Story Factory — AI video pipeline", cat: "Video", desc: "Reddit story → script → AI scenes → TTS → stitched MP4. Finished short plus reusable n8n workflow.", stack: ["Python", "n8n", "Gemini", "FFmpeg"], liveUrl: "https://n8n-story-factory.vercel.app/demo/", year: "2026", label: "Internal pipeline demo" },
    { img: "pantheon", title: "Pantheon — Chronicles of the Infinite", cat: "Web", desc: "Immersive 3D mythology scroll: Greek, Norse, Egyptian and Japanese realms with synth audio and codex.", stack: ["React", "Three.js", "Framer Motion", "GSAP"], liveUrl: "https://mythology-3d-iota.vercel.app/", year: "2026", label: "Concept — 3D mythology scroll" },
    { title: "CHRONOS — Operating System for Time", cat: "Web", desc: "Luxury 3D concept brand site: timeline simulator, GSAP scroll scenes, full brand system.", stack: ["Next.js", "Three.js", "GSAP", "Lenis"], liveUrl: "https://chronos-time-omega.vercel.app/", year: "2026", label: "Concept — 3D brand site", note: "Concept — 3D needs a real-GPU check" },
    { img: "sneaker", title: "Sole Saga — Anime Sneakers", cat: "Web", desc: "Anime-inspired sneaker brand: animated hero, anatomy, colorways, collab roster and drop waitlist.", stack: ["Vite", "TypeScript", "CSS", "Video"], liveUrl: "https://sole-saga-sneakers.vercel.app/", year: "2026", label: "Concept — anime sneaker drop" },
    { title: "Regular Ring — Smart Ring", cat: "Design", desc: "Smart-ring product page concept.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://regular-ring-sigma.vercel.app/", year: "2026", label: "Concept — smart-ring product page" },
    { title: "Marchetti & Sons — Brand", cat: "Design", desc: "Fictional brand portfolio piece.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://marchetti-sons.vercel.app/", year: "2026", label: "Portfolio piece — fictional brand" },
    { title: "BELLWARD — Metroidvania", cat: "Games", desc: "Original metroidvania game: playable vertical slice.", stack: ["Next.js", "TypeScript"], liveUrl: "https://bellward-metroidvania.vercel.app/", year: "2026", label: "Original game — playable vertical slice" },
    { img: "vela-one", title: "VELA One — Product Page", cat: "Web", desc: "Scroll-driven 3D product page demo. Fictional product page.", stack: ["HTML", "CSS", "JavaScript", "3D"], liveUrl: "https://vela-one-three.vercel.app/", year: "2026", label: "Demo — fictional product page" },
    { title: "USA Dental — Legacy", cat: "Web", desc: "Fictional dental clinic demo. Retired from front page due to invented stats.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://dental-clinic-usa.vercel.app/", year: "2025", label: "Legacy demo — fictional clinic" }
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
      name: "Complete website — WhatsApp booking",
      price: "₹25,000",
      inr: "≈ $300",
      blurb: "Mobile-first local-business website: services, booking, gallery, WhatsApp CTA and contact form. Live in about 2 weeks.",
      features: [
        { text: "Done within 2 weeks", yes: true },
        { text: "WhatsApp booking + contact form", yes: true },
        { text: "Mobile-first, responsive design", yes: true },
        { text: "Figma design included", yes: true },
        { text: "3 months support", yes: true },
        { text: "1 revision round", yes: true },
        { text: "AI / automation workflows", yes: false }
      ],
      cta: { label: "Start build", href: "#contact" }, featured: true
    },
    {
      name: "AI automation add-on",
      price: "₹10,000",
      inr: "≈ $120",
      blurb: "Make.com workflows, AI chatbot or lead capture added to your website.",
      features: [
        { text: "Make.com workflows", yes: true },
        { text: "AI chatbot (GPT / Claude)", yes: true },
        { text: "Lead capture & booking automation", yes: true },
        { text: "Webhooks & integrations", yes: true },
        { text: "Dry-run tests before launch", yes: true },
        { text: "1 revision round", yes: true },
        { text: "Requires a website build", yes: false }
      ],
      cta: { label: "Add automation", href: "#contact" }, featured: false
    }
  ],

  testimonials: [],
  trusted: [],

  faq: [
    { q: "Why hire you instead of three freelancers?", a: "Design, development, AI automation and video in one person — every piece fits because one brain planned it. Delivered on time with clear communication." },
    { q: "How long will my project take?", a: "Landing pages: 3–5 days. Full sites: 1–3 weeks. Automations: 1–2 weeks. You get a timeline before we start, and I stick to it." },
    { q: "How do revisions work?", a: "Progress shared at milestones — no surprises. Starter includes 1 round, Premium unlimited. I iterate until you're happy." },
    { q: "Do you offer support after launch?", a: "Yes — every plan includes post-launch support for bugs and updates. Monthly retainers available." },
    { q: "What's your refund policy?", a: "Full refund if the delivered work doesn't match what we agreed. I fix first, refund if I can't." },
    { q: "How can I pay?", a: "Cards via Stripe, PayPal, bank transfer, UPI, or Upwork/Fiverr milestones. Proper invoice every time. INR pricing approximate at ₹83/$." }
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
      "I'm Nitō — developer, automation nerd, designer. I started rebuilding family shop pages; now I ship cinematic sites and AI workflows for clients worldwide.",
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

  formServices: ["Website + WhatsApp booking", "AI automation add-on", "UI / UX Design", "Video Editing", "Full Package", "Other"],
  formBudgets: ["Under ₹12,500", "₹12,500 – ₹33,000", "₹33,000 – ₹83,000", "₹83,000+"]
};
