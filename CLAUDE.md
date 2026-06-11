# CLAUDE.md — TBT Website

## Project
Tandem Bridge Talent (TBT) marketing site. **React + Vite + React Router + Tailwind**, framer-motion for animation, lucide-react for icons, shadcn-style `Button` from `@/components/ui/button`. The site's single goal is conversion: get visitors to book a strategy call at `/book`. Run solo by Alpha (based in Itagüí, Antioquia, Colombia).

## Infrastructure

GitHub: https://github.com/habeshaforever/tbt-website (public; replaced the old habeshaforever/website-whiz repo). Branch: main.
Deploy: Netlify (currently paused / not live).
Local dev: http://localhost:8080/

## Reference doc — read this first
A detailed per-page reference lives at **`docs/TBT-Website-Project-Knowledge.md`** in this repo. It documents each page's purpose, integrations, settled decisions *and the reasoning behind them*, and known gotchas. **Read it before working on any page.** Do not undo a documented decision unless explicitly asked; if a request contradicts one, flag it before proceeding.

- For **why** something is the way it is / what not to break → the reference doc.
- For **current** copy, layout, classes, and exact code → read the actual source files (these change often and are intentionally NOT tracked in the reference doc).

## Dev commands
- `npm run dev` — start the Vite dev server on **port 8080**. If it comes up on 8081, port 8080 was already taken; kill that process rather than changing the Vite config.
- `npm run build` — production build.
- `npm run preview` — preview the build.
- After any `.env` change, **restart the dev server** (Vite only reads env vars at startup).

(If these script names differ from `package.json`, trust `package.json`.)

## Workflow / git

In Cascade/Code, read files directly from the local folder — they're current on this machine. (The GitHub raw-URL pull habit was only for when files weren't local; not needed here.)
Windows PowerShell: chain git as SEPARATE lines, NOT with &&:

```powershell
git add .
git commit -m '[description]'
git push origin main
```

GitHub is the push target / backup, not the cross-account handoff. Push after meaningful chunks.
Slack to-do: when a task is completed, update it in the To-Do TBT Slack list (file ID F0B5V9KK3CK, channel C0B5V9KK3CK).

## Global conventions
- Follow `HealthcareIndustry.tsx` as the design reference for section patterns, spacing, and styling.
- Animations: framer-motion `whileInView` with `viewport={{ once: true }}`; above-the-fold hero uses `animate` instead.
- Do not rename/remove these Tailwind tokens — pages depend on them: `bg-gradient-dark`, `bg-gradient-hero`, `text-accent`, `text-success`/`bg-success`.
- The custom `Button` variants `hero`, `secondary`, `xl` must stay defined in `@/components/ui/button`.
- `/book` is the universal "book a call" target, linked from many CTAs. If that route changes, update every CTA across the site.

## Copy & content rules (strict)
- **No em dashes in visible copy.** Never use the `—` character in any user-facing string. Use a comma, period, colon, or restructure. The whole `src` tree was swept clean (components + all page subfolders); keep it that way. (En dashes in number ranges like `$2,200–$2,800` or `$130K–$160K` are fine — the rule targets `—` only.)
- **Punctuation conventions:** lead-in lists ("after the hire", "including") use a colon, not a dash; "not just X" contrasts use a comma; short punchy follow-ups become a new sentence.
- **Geographic language:** broad pages say "nearshore" or "South American", never a specific country. Only these files may say "Colombia/Colombian": `WhyColombia.tsx`, `Careers.tsx`, `AboutTBS.tsx` (founder bios only), `NearshoreVsOffshore.tsx` (comparison-table label only), `Blog.tsx` (post titles), `App.tsx` (routing), `Header.tsx` (nav label). Everything else is nearshore/South American.
- **Services balance:** every non-dedicated page must represent Managed Staffing and Recruiting & Direct Hire equally. Only `/solutions/managed-staffing` and `/solutions/recruiting-direct-hire` may favor one. Keep the two models distinct in copy: Managed = TBT runs everything post-hire; Direct Hire = one-time placement, client owns the employment relationship.
- **Verify before finishing:** `grep` for `—` and for `Colombian` across `**/*.tsx` should each return zero matches outside the allowed-files list above. Fast way to confirm a clean state.

## Machine / config notes
- `permissions.defaultMode: bypassPermissions` in `~/.claude/settings.json` is intentional — do NOT treat it as a mistake or reset it. (Correct schema nests it under `permissions`; a bare top-level `defaultMode` key is wrong.)

## Critical don't-break rules
- **`/contact` → `/book` redirect** (Navigate in `App.tsx`) must be preserved, or external `/contact` links 404.
- **Founder images** (`src/assets/alpha-bayan.png`, `gianna-reina.jpg`) must exist, or the whole app white-screens (Vite bundle fails).
- **`AboutTBS.tsx`** is the Our Story page (route `/our-story`) despite the filename — do NOT rename it. The old `/about-tbt` and `/about-tbs` routes must not exist.
- **Careers → Airtable**: API token needs scopes `data.records:read`, `data.records:write`, `schema.bases:write`; `careers@tandembridge.com` must stay an Airtable collaborator; Airtable select fields are intentionally plain-text — keep them that way.
- **Booking Calendly embed**: the wrapper height, widget height, and negative top-margin are calibrated together — never change one alone.
- **`src/data/logos.ts`** is currently unused but must NOT be deleted (reserved for future client logos).
- **`AIHiring.tsx`** still exists but is off-nav — do not re-add it to the nav (conflicts with the AI Training Teams page).

---

## SESSION HANDOFF LOG
> This is how the two accounts hand off work. **At the end of a working session — especially before hitting the usage limit — update this section** with what changed and what's next, so the other account picks up cleanly. Keep it short; the git history holds the detail. Read this at the start of every session.

**Last updated:** June 11, 2026 (main account / account 1)
**Done this session:** Settled agent-stack (Claude Code core; Hermes/Paperclip deferred). Cleaned + reprioritized the Notion Alpha Tasks DB and built a **Skills Registry** page there (source of truth for every skill/tool). Built repo skills `social-content` + `video-script`. Installed design/frontend skills at USER level (impeccable, ui-ux-pro-max + companions, taste-skill, playwright-cli) plus skillui/awesome-design-md; removed Perplexity from the positioning skills (they now research inside Claude Code). Added a skills-tracking convention to memory.
**In progress / next:** Account 1 has two READ-ONLY scheduled overnight runs: `tbt-pricing-research` (~5:15am) and `tbt-brand-voice-guidelines` (~10:15am) — output stays in the Scheduled run history, NOT in files. ACCOUNT 2 NEXT: run the first content batch (`social-content` + `video-script`, both committed in this repo). Then (account 1, with results in hand): review pricing → finalize pricing → unpause Netlify; set up weekly content + monthly competitive-sweep schedules.
**Watch out for:** USER-LEVEL skills (positioning + design: competitive-positioning, category-creation, generosity-marketing, impeccable, ui-ux-pro-max, taste-skill, playwright-cli) live in `~/.claude/skills/` and are NOT in the repo, so they do NOT sync to account 2 — account 2 only has the committed skills (social-content, video-script) + built-ins unless those are installed there too. Overnight tasks are read-only (no commits) so no git conflict; always `git pull` before file work. Pre-launch, no customers: content must never imply existing clients.
