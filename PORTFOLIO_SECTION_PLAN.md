# Galaxy Portfolio — Section-by-Section Plan

## 1) Goals & success criteria
- **Primary goal**
  - Convert visitors into conversations (job leads, freelance clients, collab requests).
- **Secondary goal**
  - Prove depth across full-stack, mobile, CRM/SaaS integrations, and automation.
- **Success criteria**
  - Clear positioning in <10 seconds.
  - Projects are easy to scan, with fast paths to: demo, repo (if available), and “how it works”.
  - Contact CTA visible in multiple places.
  - Great performance on mid-range mobile devices.

## 2) Audience & positioning
- **Target audiences**
  - Hiring managers / tech leads
  - Founders / operators who need integrations + automation
  - Agencies needing an implementation partner
- **One-line positioning (draft)**
  - Full-stack developer building web & mobile apps, specializing in CRM/SaaS integrations and automation workflows.
- **Proof points to emphasize**
  - Multi-CRM syncs (GoHighLevel, HubSpot, Kajabi, Karta)
  - Automation platforms (Make, n8n)
  - Data layer range (MySQL, Postgres, Supabase, Firebase)

## 3) Information architecture (site map)
- **Single-page (recommended for launch)**
  - `/#hero`
  - `/#about`
  - `/#skills`
  - `/#projects`
  - `/#integrations`
  - `/#automation`
  - `/#contact`
- **Optional later**
  - `/project/:slug` detail pages
  - `/playground` for heavier Three.js experiments

## 4) Global UI decisions
- **Navigation**
  - Sticky header with anchor links.
  - “Contact” button always visible.
- **Layout**
  - Large section headers, short paragraphs, scannable cards.
  - Consistent CTAs: “View case study”, “See workflow”, “Contact”.
- **Theme**
  - Galaxy theme stays as *visual flavor*, not a readability tax.
  - Background effects should degrade gracefully and be perf-safe.

## 5) Section plans

### 5.1 Hero (Above the fold)
- **Objective**
  - Communicate who you are + what you do + strongest differentiator.
- **Content**
  - Name
  - Role/title
  - 1–2 sentence value proposition
  - 6–10 tech tags (fast credibility)
- **Primary CTA**
  - “Contact me” (opens email / contact section)
- **Secondary CTA**
  - “View projects” (scroll to projects)
- **UI/components**
  - `Hero`
  - Optional background starfield (lightweight) + subtle parallax
- **Data needed**
  - Your name
  - Your headline and subheadline
  - Social links (GitHub, LinkedIn, email)

### 5.2 About / Cosmic Story
- **Objective**
  - Give context, show intent, and build trust.
- **Content**
  - 2–4 short paragraphs or a timeline
  - What you enjoy building
  - What kinds of problems you solve (integration, automation, shipping apps)
- **UI/components**
  - `CosmicStory` (timeline cards or scroll narrative)
- **Suggested structure**
  - “Now” (what you do)
  - “Strengths” (shipping, integration, automation)
  - “Principles” (reliability, maintainability, measurable outcomes)
- **Data needed**
  - 3–6 milestone bullets with years (optional)

### 5.3 Skills / Technology Galaxies
- **Objective**
  - Make your breadth scannable and organized by category.
- **Content**
  - Categories: Frontend, Backend, Mobile, Databases, CRM, Automation, CMS
- **UI/components**
  - `TechGalaxies`
  - Hover/focus states show details: “what I use it for”
- **Interaction idea (perf-safe)**
  - Orbit animation only on desktop or reduced-motion off
- **Data needed**
  - A curated list per category (keep it tight)

### 5.4 Projects (Web/Mobile) — “Constellations”
- **Objective**
  - Showcase impact and technical decision-making.
- **Content (per project card)**
  - Name, 1-line description, year
  - 3–6 tech chips
  - 2–3 highlights (results > features)
  - Links (demo, repo, case study) if available
- **UI/components**
  - `ProjectsGrid`
  - Filters: Web, Mobile, Automation (optional), Featured
  - “Featured projects” row at top
- **Case study template (for later detail pages)**
  - Problem
  - Constraints
  - Solution
  - Integrations
  - Outcome/metrics
  - Lessons learned
- **Data needed**
  - Final project list with consistent fields
  - Screenshots (ideally 1200×750)

### 5.5 CRM / SaaS Integrations — “CRM Cluster”
- **Objective**
  - Make your integration expertise obvious and credible.
- **Content**
  - Systems you integrate: GoHighLevel, HubSpot, Kajabi, Karta, WordPress
  - Typical integration patterns:
    - bi-directional sync
    - event-driven updates
    - deduplication + mapping
    - rate-limit handling + retries
- **UI/components**
  - `CRMCluster`
  - Visual graph of systems + data flow lines
- **Data needed**
  - 3–5 integration stories (short bullets)

### 5.6 Automation — “Automation Nebula”
- **Objective**
  - Show workflow thinking and business leverage.
- **Content**
  - Tools: Make, n8n
  - 3–6 workflows (trigger → steps → outcome)
  - Emphasize reliability: alerting, retries, idempotency
- **UI/components**
  - `AutomationNebula`
  - Workflow cards with a tiny diagram
- **Data needed**
  - Workflow list with:
    - trigger
    - systems involved
    - outcomes
    - edge cases handled

### 5.7 Optional: Interactive Star Map (All skills/projects)
- **Objective**
  - Create a “wow” moment without blocking core UX.
- **Placement**
  - Near the end, after you’ve already delivered the essentials.
- **UI/components**
  - `StarMap` (Three.js)
- **Perf guardrails**
  - Lazy-load
  - Offer “Open star map” button instead of auto-render
  - Respect `prefers-reduced-motion`

### 5.8 Contact — “Contact Portal”
- **Objective**
  - Make reaching you effortless.
- **Content**
  - Email + LinkedIn + GitHub
  - What you’re open to: full-time, contract, integrations, automation
- **UI/components**
  - `Contact`
  - Simple form (optional) or mailto link
- **Data needed**
  - Preferred email
  - Location/timezone (optional)

### 5.9 Footer
- **Objective**
  - Wrap up with links and small credibility.
- **Content**
  - Copyright
  - Social links
  - Optional: “Built with React + …”

## 6) Content to collect (checklist)
- **Identity**
  - Name
  - Headline + 1–2 sentence summary
- **Links**
  - GitHub
  - LinkedIn
  - Email
  - Resume (PDF) optional
- **Projects**
  - 4–8 best projects
  - 1–2 screenshots per project
  - Bullet outcomes
- **Integrations**
  - 3–5 short stories
- **Automations**
  - 3–6 workflows

## 7) React app build plan (high level)
- **Milestone 1**
  - Scaffold React + TypeScript + Tailwind, set layout + sections with placeholder content.
- **Milestone 2**
  - Add data files and map them into UI (projects, stacks, workflows).
- **Milestone 3**
  - Add animations progressively (GSAP), enforce reduced-motion support.
- **Milestone 4**
  - Add optional Three.js StarMap as lazy-loaded feature.

## 8) Open questions (answer these before we scaffold)
1. What name/brand should the hero use (your full name vs handle)?
2. Do you want a single-page site only, or also per-project detail pages?
3. Which 4–8 projects are the “featured” ones?
4. Do you want to include a contact form, or only links?
5. Any must-have inspiration behaviors from CAKE.com / Lore Obsessed / Siena Film?
