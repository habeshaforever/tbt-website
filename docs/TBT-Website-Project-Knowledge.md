# TBT Website — Project Knowledge

> **How to use this document.** This is the durable, slow-changing reference for the TBT website. It holds *purpose, integrations, settled decisions, conventions, and gotchas* — things that stay true even when pages are redesigned. It deliberately does **not** contain exact copy, CSS classes, layout details, or config values, because those change often and live in the actual files. When you need the current state of a page, read the file; when you need to know *why* something is the way it is or *what not to break*, read this.

---

## Company & Site Overview

**Tandem Bridge Talent (TBT)** is a US-operated nearshore staffing company that places vetted, native-level English-and-Spanish-speaking Latin American professionals (primarily Colombia-based) with US and Canadian companies. Core positioning: same caliber as a US hire at ~70% less cost, with ~2% annual turnover vs. an 18–20% industry average, top-1% vetting, and team members working the client's exact hours/time zone.

**Two engagement models** (these recur across the whole site):
- **Managed Staffing** (`/solutions/managed-staffing`) — TBT runs everything post-hire: office, equipment, HR, payroll, compliance, performance. Flat all-inclusive rate.
- **Recruiting & Direct Hire** (`/solutions/recruiting-direct-hire`) — TBT finds and vets; the client hires directly onto their own payroll. Backed by a 90-day replacement guarantee.

**Founders:** Alpha Bayan (business/operations side — MHA/MBA, healthcare operations background) and Gianna Reina (talent side — built her career as a top-percentile remote worker for US/Canadian companies). The "one from the business side, one from the talent side" framing is core to the brand story.

**Primary conversion action across the entire site:** book a strategy call. The booking page is `/book`, and it is the CTA target for nearly every page.

---

## Sitewide Conventions

- **Stack:** React + Vite + React Router, Tailwind, framer-motion, lucide-react icons, shadcn-style `Button` component from `@/components/ui/button`.
- **Design reference:** `HealthcareIndustry.tsx` is the canonical reference for section patterns, spacing, and component styling. New pages should follow it.
- **Named design tokens that must keep existing** (renaming/removing them breaks pages): `bg-gradient-dark`, `bg-gradient-hero`, `text-accent` (blue highlight), `text-success` / `bg-success` (green).
- **`Button` variants** in use beyond shadcn defaults: `hero`, `secondary`, `xl`. The `hero` variant in particular is custom and must stay defined.
- **Animation convention:** sections use framer-motion `whileInView` with `viewport={{ once: true }}` (fire once on scroll). Above-the-fold hero content uses `animate` instead of `whileInView`.
- **CTA routing:** `/book` is the universal "book a call" destination. Many pages link to it from multiple buttons — if the booking route ever changes, every CTA across the site must be updated.
- **Dev server:** Vite runs on **port 8080**. If it appears on 8081, port 8080 was already occupied — kill that process rather than changing the Vite config.

---

## Booking Page — `/book`

**File:** `src/pages/Contact.tsx`

**Purpose:** The site's primary lead-conversion page. Sole job: get qualified decision-makers to book a 30-minute strategy call. It replaced the old generic contact page.

**Integrations & stable facts:**
- Calendly booking URL: `https://calendly.com/tandembridge/tbt-strategy-call`
- `/contact` permanently redirects to `/book` via a React Router `Navigate` component in `App.tsx`.
- Uses the `react-calendly` `InlineWidget`.
- Calendly availability is configured in the Calendly dashboard (event: "TBT Strategy Call") — 3-day rolling window, max 2 bookings/day, two daily windows (nothing before 10:30 AM, evenings up to 8:30 PM), 1-hour minimum notice.

**Settled decisions (don't undo without reason):**
- Hero uses the **dark** gradient, not the medium-blue one — chosen for a more premium, selective feel appropriate to a qualifying page. Medium blue was rejected as too soft.
- The **"Email Us" section was deliberately removed** from the left card — it distracted from booking. Do not add it back; email lives in the footer.
- The "Powered by Calendly" badge is hidden via Calendly's page settings plus a cropping technique. A white overlay box on top of the widget was **tried and rejected** (it covered the card border and scrollbar) — do not reintroduce it.
- The left qualifying sidebar is kept on desktop (helps convert hesitant visitors) and stacks above the calendar on mobile.

**Gotchas:**
- The Calendly embed crop relies on **three interdependent values** (wrapper height, widget height, negative top margin) that were calibrated together. If you adjust the embed, test all three together or you'll reintroduce blank space or the internal scrollbar.
- `react-calendly` must stay installed — don't swap to a raw iframe unless the package is fully removed.
- The `/contact → /book` redirect must be preserved if `App.tsx` is refactored, or external links to `/contact` will 404.

---

## AI Training Teams — `/ai-training-teams`

**File:** `src/pages/AITrainingTeams.tsx`

**Purpose:** A **client-facing, outbound sales page** that sells TBT's service of staffing humans to train/fine-tune/evaluate AI models (data labeling, RLHF, prompt engineering, model eval/red-teaming, training-data curation). It is **not** about how TBT uses AI internally. Plain nav link (no dropdown).

**Integrations & links:** CTAs → `/book`; the two engagement cards → `/solutions/managed-staffing` and `/solutions/recruiting-direct-hire`.

**Settled decisions (don't undo without reason):**
- This page is **distinct from the old "AI Hiring" page** — an earlier version conflated "how TBT finds candidates" with "the AI-training service TBT sells." They are different audiences. This one is commercial/client-facing.
- Name "AI Training Teams" (scannable nav label) with the emotional punch on the page itself. Rejected alternatives: "AI Hiring" (wrong meaning), "Human Intelligence for AI" (too abstract), "LLM Training" (too jargon-heavy), "Affordable On-Demand LLM Training" (generic/cheap-sounding).
- Consolidated into **one page**, not separate pages per service line — cleaner UX and SEO. The Colombia/quality objection is handled **mid-page** (before the process section) on purpose. **No FAQ** — the buyer is an AI-company decision-maker, not someone needing "what is RLHF?" explained.
- Plugs into the existing `/solutions/` architecture rather than creating a new funnel.
- Tone is more direct and punchy here than elsewhere on the site.

**Gotchas:**
- The old `src/pages/AIHiring.tsx` still exists with its own route — only its nav link was replaced. Don't re-add "AI Hiring" to the nav (it conflicts with this page's intent); that page should eventually be reviewed for removal/repurposing.
- Nav item must remain a **plain link** (a dropdown would require Header type changes).
- The two engagement links depend on the `/solutions/...` pages continuing to exist.

---

## Homepage — `/`

**File:** `src/pages/Index.tsx`, composed of these components (durable building blocks): `Header`, `Hero`, `CandidateShowcase`, `Services`, `WhyUs`, `HowItWorks`, `CTA`, `Footer`.

**Purpose:** Single job — move the visitor to book a call. It is **not** a browsing/discovery page; role browsing and deep service detail live on dedicated pages.

**Integrations & links:** `/book` (multiple CTAs), `#how-it-works` anchor, `/our-process`, `mailto:info@tandembridge.com`. Candidate videos via Gumlet; flags via flagcdn.

**Settled decisions (don't undo without reason):**
- "Bilingual" was replaced with **"native English and Spanish speakers"** — more accurate (candidates grew up with both) and more differentiating than the term every competitor uses.
- Any "English good enough" phrasing is rejected — it implies mediocrity and contradicts the site's "Native-Level English" standard.
- The **"Browse by Role" grid was permanently removed** from the homepage — it pulled visitors off the conversion path. Role browsing lives only in the nav/Solutions pages.
- **No logo trust bar** until real client logos exist — fake placeholder logos would be misleading. (`src/data/logos.ts` was built for this and is currently unused — **do not delete it**; it's for when real logos arrive.)
- Two WhyUs cards were merged ("Same Hours as Your Team" absorbed "Your Hours. Their Default.") — don't split them again.
- "Office/Equipment/Internet Included" was removed from shared-audience sections because it only applies to Managed Staffing (misleading for Direct Hire visitors).
- The "72 hours" (first profiles) and "two weeks" (full placement) figures refer to **different milestones** — they are not contradictory; keep both.
- HowItWorks Step 3 is intentionally **service-model agnostic** (no contracts/compliance/payroll mention) since those only apply to Managed Staffing.
- Some stats appear in both the Hero and WhyUs **on purpose** (the WhyUs versions add a specific $75K example / narrative) — that redundancy was reviewed and kept.

**Gotchas:**
- `AnimatedCounter` is a custom component — don't replace the animated stats with plain numbers.
- The `#how-it-works` anchor lives on the `HowItWorks` section's `id` — renaming/removing it breaks the Hero's "See How It Works" button.
- `/book` is used by 3 separate homepage CTAs — all must update together if the route changes.

---

## CandidateShowcase (homepage section, not a standalone page)

**File:** `src/components/CandidateShowcase.tsx`

**Purpose:** Primary social-proof block. Lets prospects **see and hear real candidates speaking fluent English** before booking — directly answering the top client objection about English quality. Built around increasing perceived likelihood of success with real people/outcomes.

**Integrations & stable facts:**
- **Video hosting: Gumlet** (free tier). Player color set to site blue in the Gumlet dashboard; TBT logo watermark added via Gumlet branding. End screen set to a CTA/custom card, not "more videos." Autoplay OFF, loop OFF.
- Country flags via `flagcdn.com` (Colombia), not emoji.
- Bottom CTA → `/book`.

**Settled decisions (don't undo without reason):**
- **Gumlet over YouTube/Vimeo** — YouTube shows branding/suggested videos (unprofessional for B2B); Vimeo free keeps a watermark; Vimeo paid is unnecessary cost. Gumlet free is clean, embeddable, has a React package.
- **Carousel over grid** — keeps focus on one candidate at a time and scales as candidates are added; the peek effect signals there's more to scroll.
- Badge wording: **"US Work Experience"** (rejected "US Verified" as confusing, tiered/"client-ready English" badges as redundant with the green English badge).
- English labels use plain terms ("Native-Level English," etc.), **not CEFR codes** (C2/B2) — American business owners don't read CEFR.
- **Flag images, not emoji** — emoji flags render as country-code letters on some systems.
- No separate avatar (the video thumbnail already shows the face); no autoplay (jarring for B2B).
- Each candidate's "outcome" line is sourced from their **actual video captions**, not invented copy — keeps claims authentic.

**Gotchas:**
- Gumlet video IDs are **permanent** — safe to hardcode.
- The Gumlet logo URL must be a **direct image link** (e.g. `i.imgur.com/XXXXX.png`) — Drive/album links don't work.
- All current candidates are **Colombia-based and the flag is hardcoded to Colombia** — if a non-Colombian candidate is added, the flag logic must be made dynamic.
- This section's background must stay distinct from the section directly below it (they'd visually merge otherwise).

---

## Our Story — `/our-story`

**File:** `src/pages/AboutTBS.tsx` *(filename intentionally NOT renamed — see below)*

**Purpose:** Editorial founding-story page to build trust and human connection. It is **not** a sales page — it should feel personal and editorial, not metrics-driven. Tells the two co-founders' origin story (Alpha Bayan, business side; Gianna Reina, talent side) plus a values section.

**Integrations & stable facts:** CTAs → `/contact`. Founder images: `src/assets/alpha-bayan.png` and `src/assets/gianna-reina.jpg`.

**Settled decisions (don't undo without reason):**
- Route is `/our-story` but the file stays `AboutTBS.tsx` — **do not rename the file** (avoids breaking imports). The old `/about-tbt` route must not exist anywhere.
- **Gianna's bio intentionally says "from Colombia"** — this is a biographical fact, not a sales claim, and is one of the few allowed exceptions to the nearshore/South American geographic rule. Do not genericize it. The page's hero subheadline uses "Latin American" to keep the page itself balanced.
- **No salesy stats bar** on this page — an earlier "Top 1% / 70% savings" bar and a "By the Numbers" box were removed for feeling too commercial. Stats belong on sales/industry pages.
- **Rectangular portraits, not circular** — circular crops lost too much of the full-body polo-shirt photos. Both images use top-anchored cropping so heads aren't cut off.
- **Alternating horizontal founder layout** chosen over stacked cards — better suits the long stories and full-body photos.

**Gotchas:**
- If either founder image is missing from `src/assets/`, the **whole app white-screens** (Vite bundle fails). Confirm both exist before running the dev server after any image-import change.
- If image imports are commented out, the matching `image` field and `src` reference must be commented out too, or TypeScript errors.
- Don't change the founders-section background away from its muted separator — it provides necessary visual separation.

---

## Careers — `/careers`

**Files:** `src/pages/Careers.tsx` and `src/lib/airtable.ts`

**Purpose:** **Candidate intake** page for Latin American professionals wanting to join TBT's talent pool — i.e. supply-side intake for TBT's core placement business, **not** internal hiring for TBT itself. Standalone nav item. Contains a candidate application form, a "how it works for candidates" process, and a Facebook Group callout.

**Integrations & stable facts:**
- Form submissions POST to **Airtable** via the REST API.
  - Base ID: `appJlIr5hIzAVZTm6`, table: `Candidates`.
  - Env vars: `VITE_AIRTABLE_API_KEY`, `VITE_AIRTABLE_BASE_ID`.
  - Submit logic: `submitCandidateApplication` in `src/lib/airtable.ts`.
  - On each new record, an **Airtable Automation** emails `careers@tandembridge.com`.
- Facebook Group: `https://web.facebook.com/share/g/1H9sX2Hm5u/` (opens new tab).
- Phone field uses `react-phone-number-input` (international format, default country US).
- *(The form's current fields and option lists live in `Careers.tsx` — read them there, since they're edited often.)*

**Settled decisions (don't undo without reason):**
- **Airtable over Netlify Forms** — Netlify's free tier caps at 100 submissions/month; Airtable's free plan handles 1,000 records.
- Airtable select/multi-select fields were converted to **plain text/long-text** field types — the API rejects new option values that don't already exist in a select field's definition. Plain text accepts anything, so form options can change freely without touching Airtable. **Keep these as text fields.**
- WhatsApp checkbox removed in favor of a helper line on the phone field (all candidates are expected to use WhatsApp).
- Video-intro instructions allow **Google Drive / Dropbox only** — YouTube (can go private/deleted) and Loom (free links expire) were rejected.
- **Single-page form**, not multi-step (simplicity). Third-party form tools (Tally, Fillout, Jotform, Airtable native) were rejected because all show branding on free tiers — hence the hand-built React form.
- City/Region is a **plain text input** — a country-driven city dropdown was rejected as too much data to maintain.
- The country list is intentionally **Latin America only** (that's where TBT sources candidates).

**Gotchas:**
- The Airtable API token needs **three scopes**: `data.records:read`, `data.records:write`, `schema.bases:write`. Missing any breaks submission.
- `careers@tandembridge.com` must remain an **Airtable collaborator** on the base, or the automation email fails (free-plan billing restriction).
- Restart the dev server after any `.env` change (Vite only reads env vars at startup).
- The `react-phone-number-input` CSS import is required, or the country/flag dropdown renders unstyled.
- The Airtable Automation lives in the Airtable dashboard, **separate from the code** — if it's disabled, emails stop but submissions still save.

---

## Additional pages & cross-page gotchas

These pages weren't individually documented above but have known fragilities worth recording.

**OurProcess — `OurProcess.tsx`:** Fragile step structure. Steps 05–07 are Managed-Staffing-only infrastructure. A clarifying note at Step 04 marks where Direct Hire ends and Managed Staffing continues. If steps are reordered or added, that note must move with Step 04 or the services balance breaks.

**Why Colombia — `WhyColombia.tsx`:** The one page that is intentionally Colombia-specific. All Colombia language here is correct and allowed. The "30 minutes from the airport" detail lives in a feature card on this page — don't duplicate it elsewhere on the page.

**Nearshore vs Offshore — `NearshoreVsOffshore.tsx`:** "Colombia" appears in the comparison-table column header. That is an intentional factual label, not a marketing claim — keep it.

**Preview banner — `PreviewBanner.tsx`:** Editor-only UI. Renders only when `isPreviewMode()` is true (inside the Sanity Presentation Tool iframe). Not marketing-facing — safe to skip in copy reviews.
