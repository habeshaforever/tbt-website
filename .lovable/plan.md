## Goal
Replace the placeholder "TB" rounded-square monogram with a custom, ownable **symbol/icon** that gives Tandem Bridge Talent a real visual identity. The icon will sit next to the existing "TandemBridge Talent" wordmark in both the header and footer.

## Concept
The name carries two ideas worth fusing into one mark:
- **Tandem** = two entities working together (US + nearshore teams).
- **Bridge** = the span that connects them.

The mark: two upward strokes that lean toward each other and meet at a central keystone, forming a clean **bridge arch** that also reads as the negative-space letter "B" / a connection point. Geometric, confident, premium B2B — no clip art. Built as a crisp custom SVG using the existing brand gradient (`--gradient-hero`) so it stays on-brand and theme-aware.

I'll produce a few refined directions of this concept first (e.g. solid gradient mark vs. linework arch vs. interlocking spans) and let you pick before implementing, so the final mark matches your taste.

## What gets built
1. **New component** `src/components/BrandLogo.tsx` — a reusable inline SVG icon plus the wordmark, with a `size`/`variant` prop so header and footer share one source of truth.
2. **Header** (`src/components/Header.tsx`) — swap the `<div>…TB…</div>` block for `<BrandLogo />`.
3. **Footer** (`src/components/Footer.tsx`) — replace both "TB" blocks (lines ~61 and ~86) with the same component.
4. **Favicon / social image** — optionally regenerate the favicon from the new mark so the browser tab matches (currently a generic uploaded PNG). I'll flag this as a follow-up unless you want it included.

## Design rules respected
- Uses semantic tokens / existing gradient (`bg-gradient-hero`, `text-primary`, `text-accent`) — no hardcoded colors, works in light/dark.
- Keeps wordmark styling per brand memory: bold weight, "Talent" same dark color as "Tandem".
- No copy changes, no em dashes, no country-specific language. Pure presentation.

## Technical notes
- The icon is hand-built SVG (paths + the existing linear gradient), kept inline so it inherits theme tokens and animates with the header. No new dependencies.
- One component used in 3 places removes the current duplicated markup.

## Open question
Want the **favicon and OG/social image** updated to the new mark in this same pass, or keep that as a separate step?
