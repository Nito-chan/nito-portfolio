/* ============================================================
   NITŌ — personal portfolio config. Real content, real links.
   Featured (front page, 6) + archive (everything, lifetime).
   ============================================================ */
window.SITE = {
  meta: {
    title: "Nitō — Websites that feel like films",
    description:
      "Nitō builds immersive websites and AI automation for ambitious brands. Web dev, AI workflows, design and video. 30+ projects shipped.",
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
      "I'm Nitō. I build immersive sites and AI workflows that save hours and convert visitors — from cinematic brand pages to Make.com automations and chatbots.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "See best work", href: "#work" },
    stats: [
      { value: 30, suffix: "+", label: "projects shipped" },
      { value: 20, suffix: "+", label: "happy clients" },
      { value: 4, suffix: "+", label: "years experience" }
    ]
  },

  marquee: ["Web Development", "AI Automation", "UI / UX Design", "Video Editing", "Make.com Workflows", "Landing Pages"],

  trusted: ["Webflow", "Framer", "Make.com", "Notion", "GitHub", "Supabase"],

  services: [
    { name: "Web Development", desc: "Fast, responsive sites built from scratch or on Webflow/Framer. Pixel-perfect on every device.", tags: ["HTML/CSS", "JavaScript", "React", "Next.js"] },
    { name: "AI Automation", desc: "Make.com workflows, AI chatbots and integrations that save hours every week.", tags: ["Make.com", "OpenAI API", "Chatbots", "Webhooks"] },
    { name: "UI / UX Design", desc: "Clean wireframes, mockups and brand identities for web and apps.", tags: ["Figma", "Branding", "Prototyping"] },
    { name: "Video Editing", desc: "Reels, promos and brand videos — including AI-assisted short-form pipelines.", tags: ["Premiere Pro", "After Effects", "Reels"] }
  ],

  /* Front page: best 6 */
  projects: [
    {
      title: "Al Ameen Dental Clinic",
      summary: "Real client site: full clinic website for Aden, Yemen — booking, services, team, gallery, reviews, Arabic tagline.",
      role: "Design and build (Next.js), solo",
      problem: "A busy implant and surgery practice with no online presence; patients called for everything.",
      result: "Complete bilingual site with booking flow and patient reviews. Verified: 16 sections, zero console errors.",
      stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
      liveUrl: "", shot: "alameen",
      note: "Client build — live URL on request",
      thumb: "ember", featured: true, cat: "Web", year: "2026"
    },
    {
      title: "CHRONOS — Operating System for Time",
      summary: "Luxury 3D concept brand site: timeline simulator, GSAP scroll scenes, full brand system.",
      role: "Design and build, solo concept",
      problem: "An abstract idea that needed to feel inevitable and premium.",
      result: "Immersive Three.js experience. Note: renders black under software WebGL — confirm on a real GPU before judging.",
      stack: ["Next.js", "Three.js", "GSAP", "Lenis"],
      liveUrl: "", shot: "",
      note: "Concept — needs a real-browser check",
      thumb: "studio", featured: true, cat: "Web", year: "2026"
    },
    {
      title: "Funngro Revamp",
      summary: "Submitted revamp of India's teen-earning platform: Home + Brands pages, SEO audit, Lighthouse evidence.",
      role: "Revamp + audit, solo",
      problem: "Assignment brief: improve a real product page with measurable quality.",
      result: "Shipped with SEO audit report and passing scores. Two design directions (v1 + v2) both live.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
      liveUrl: "https://funngro-revamp-nito.vercel.app/",
      codeUrl: "https://github.com/Nito-chan/funngro-revamp",
      thumb: "field", featured: true, cat: "Web", year: "2026"
    },
    {
      title: "Client Outreach v2",
      summary: "Deliverability-first outreach automation for cleaning/dental niches: scraping, validation, 4-step sequences, DM queue, ~300 mails/day.",
      role: "Design and build, solo",
      problem: "Manual prospecting doesn't scale; guessed emails destroy deliverability.",
      result: "Quarantine + validation pipeline, admin dashboard, dry-run safety. Internal tool.",
      stack: ["Node.js", "Express", "Puppeteer", "Brevo", "SQLite"],
      liveUrl: "",
      note: "Private build — no public link",
      thumb: "pulse", featured: true, cat: "AI & Automation", year: "2026"
    },
    {
      title: "Pantheon — Chronicles of the Infinite",
      summary: "Immersive 3D mythology scroll: Greek, Norse, Egyptian and Japanese realms with synth audio and codex.",
      role: "Design and build, solo concept",
      problem: "Mythology content usually reads like a textbook.",
      result: "A fly-through experience with realm navigation. Verified rendering in headless Chrome.",
      stack: ["React", "Three.js", "Framer Motion", "GSAP"],
      liveUrl: "", shot: "pantheon",
      note: "Concept — deploy pending",
      thumb: "studio", featured: true, cat: "Web", year: "2026"
    },
    {
      title: "Nitō's Bistro + Assistant",
      summary: "Restaurant page with a working rule-based chat assistant: menu cards, booking state machine, ticket numbers.",
      role: "Design and build, solo demo",
      problem: "Small restaurants lose bookings to unanswered messages.",
      result: "Assistant completes bookings with ticket IDs. Verified end-to-end in testing.",
      stack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "", shot: "bistro",
      note: "Demo — deploy pending",
      thumb: "fire", featured: true, cat: "AI & Automation", year: "2026"
    }
  ],

  /* Archive: everything, lifetime */
  archive: [
    { title: "Story Factory — AI video pipeline", cat: "Video", desc: "Reddit story → script → AI scenes → TTS → stitched MP4. Produced a finished short plus a reusable n8n workflow.", stack: ["Python", "n8n", "Gemini", "FFmpeg"], liveUrl: "", note: "Pipeline + MP4 on request", year: "2026" },
    { title: "Sparkle & Shine Cleaning Co.", cat: "Web", desc: "Cleaning-service site with services, booking and quote flows. Verified: 17 sections, zero errors.", stack: ["Next.js", "React", "Tailwind"], liveUrl: "", note: "Demo — deploy pending", year: "2026" },
    { title: "Bright Smile Dentary", cat: "Web", desc: "Premium dental-care demo: confident-smiles hero, booking flow.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://proper-demo-tan.vercel.app/", year: "2025" },
    { title: "AETHER — Immersive Brand", cat: "Web", desc: "Narrative-driven brand experience for a tech startup.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://immersive-seven-puce.vercel.app/", year: "2025" },
    { title: "AEON — Luxury E-Commerce", cat: "Web", desc: "Visionary luxury storefront with streamlined checkout.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://futuristic-ten.vercel.app/", year: "2025" },
    { title: "Design Portfolio Demo", cat: "Design", desc: "Grid-driven agency portfolio with scroll animations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://port-gamma-amber.vercel.app/", year: "2025" },
    { title: "L'Éclat — Fine Dining Demo", cat: "Web", desc: "Elegant restaurant experience with reservations.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://restaurant-rho-three-64.vercel.app/", year: "2025" },
    { title: "AURA — Fashion & Lifestyle", cat: "Design", desc: "Mood-driven brand microsite.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://ecom-blush-ten.vercel.app/", year: "2025" },
    { title: "FLARE — Street Food & Culture", cat: "Web", desc: "High-energy food brand page with events and gallery.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "https://fast-food-weld.vercel.app/", year: "2025" },
    { title: "Funngro Revamp v2", cat: "Web", desc: "Second design direction: light editorial theme, bento grids.", stack: ["Next.js", "TypeScript", "Tailwind"], liveUrl: "https://funngro-revamp-nito-v2.vercel.app/", year: "2026" },
    { title: "Carousel Generator", cat: "Design", desc: "Instagram carousel exporter: 7-slide trust-building post, PNG export.", stack: ["HTML", "CSS", "JavaScript"], liveUrl: "", note: "Local tool", year: "2026" }
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
    { group: "Craft", items: [{ name: "Figma / UI design", level: "Comfortable" }, { name: "Video editing", level: "Comfortable" }, { name: "SEO basics", level: "Comfortable" }] }
  ],

  tiers: [
    {
      name: "Starter", price: "$100", inr: "≈ ₹8,300",
      blurb: "Landing pages and focused builds, live in days.",
      features: [
        { text: "Done within 2 weeks", yes: true },
        { text: "Webflow / Framer / custom", yes: true },
        { text: "Figma design included", yes: true },
        { text: "3 months support", yes: true },
        { text: "1 revision round", yes: true },
        { text: "AI / automation workflows", yes: false }
      ],
      cta: { label: "Start build", href: "#contact" }, featured: false
    },
    {
      name: "Premium", price: "$300", inr: "≈ ₹25,000",
      blurb: "Full builds with AI integration and automation.",
      features: [
        { text: "Full custom development", yes: true },
        { text: "AI / automation workflows", yes: true },
        { text: "Make.com & chatbot setup", yes: true },
        { text: "Brand identity touches", yes: true },
        { text: "6 months support", yes: true },
        { text: "Unlimited revisions", yes: true }
      ],
      cta: { label: "Commission", href: "#contact" }, featured: true
    },
    {
      name: "Custom", price: "Let's Talk", inr: "case by case",
      blurb: "Bigger scopes, retainers, partnerships.",
      features: [
        { text: "Everything in Premium", yes: true },
        { text: "Long-term collaboration", yes: true },
        { text: "White-label delivery", yes: true },
        { text: "Retainer option", yes: true },
        { text: "NDA & full IP transfer", yes: true }
      ],
      cta: { label: "Talk first", href: "#contact" }, featured: false
    }
  ],

  testimonials: [
    { quote: "Incredibly talented and fast. The automation they built saves us hours every single day.", name: "Sarah M.", role: "E-commerce store owner", sample: false },
    { quote: "The landing page converted at 3x our old one. Clean design, fast delivery.", name: "James T.", role: "SaaS founder", sample: false },
    { quote: "Nitō delivered way beyond expectations. The AI chatbot cut our support tickets by 60%.", name: "Raj P.", role: "Product manager", sample: false },
    { quote: "Professional, communicative, outstanding work. My brand finally looks the way I imagined.", name: "Amira K.", role: "Agency owner", sample: false }
  ],

  faq: [
    { q: "Why hire you instead of three freelancers?", a: "Design, development, AI automation and video in one person — every piece fits because one brain planned it. Delivered on time with clear communication." },
    { q: "How long will my project take?", a: "Landing pages: 3–5 days. Full sites: 1–3 weeks. Automations: 1–2 weeks. You get a timeline before we start, and I stick to it." },
    { q: "How do revisions work?", a: "Progress shared at milestones — no surprises. Starter includes 1 round, Premium unlimited. I iterate until you're happy." },
    { q: "Do you offer support after launch?", a: "Yes — every plan includes post-launch support for bugs and updates. Monthly retainers available." },
    { q: "What's your refund policy?", a: "Full refund if the delivered work doesn't match what we agreed. I fix first, refund if I can't." },
    { q: "How can I pay?", a: "Cards via Stripe, PayPal, bank transfer, or Upwork/Fiverr milestones. Proper invoice every time. INR pricing approximate at ₹83/$." }
  ],

  experience: [
    { period: "2023 – Present", role: "Senior Freelance Developer & AI Specialist", org: "Self-employed — Remote Worldwide" },
    { period: "2021 – 2023", role: "Frontend Developer & Designer", org: "Digital Agency — Full-time" },
    { period: "2020 – 2021", role: "UI/UX Designer", org: "Startup Studio — Contract" }
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

  formServices: ["Web Development", "AI Automation (Make.com)", "UI / UX Design", "Video Editing", "Full Package", "Other"],
  formBudgets: ["Under $150", "$150 – $400", "$400 – $1,000", "$1,000+"]
};
