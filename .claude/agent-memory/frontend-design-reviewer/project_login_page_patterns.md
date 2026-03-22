---
name: login_page_design_patterns
description: Design decisions and CSS patterns established for the auth/login page
type: project
---

The login page at `/auth/login` uses a full-viewport flex centering layout with a centered card form and purple radial background glow.

**Key design decisions:**

- Background glow: `radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.62 0.19 277 / 0.20) 0%, transparent 65%), var(--background)` — 20% opacity and 80/60% ellipse size reads clearly as a purple ambient glow on the dark base.
- Card: `bg-card border border-white/[0.09] rounded-2xl overflow-visible` with `style="box-shadow: 0 0 0 1px oklch(0.62 0.19 277 / 0.12), 0 20px 56px oklch(0 0 0 / 0.55);"` — `overflow-visible` allows the button's glow shadow to escape the card boundary. The layered shadow has a faint purple inner ring and deep black drop shadow.
- Inputs: `bg-background border border-white/[0.10] rounded-lg px-3.5 py-2.5 text-sm` — using `bg-background` inside `bg-card` creates the correct "recessed well" depth hierarchy.
- Labels: `text-sm font-medium text-foreground/75` — sentence-case, not uppercase.
- Submit button: `bg-primary` with `style="box-shadow: 0 4px 28px oklch(0.62 0.19 277 / 0.55), 0 0 0 1px oklch(0.62 0.19 277 / 0.2);"` — button glow MUST use inline style, not Tailwind arbitrary value (see critical note below).
- Max-width: `max-w-[360px]` — tighter than default `max-w-sm` (384px) for better form proportions.

**CRITICAL: oklch in Tailwind v4 arbitrary shadow values does not render**

Using `shadow-[0_4px_20px_oklch(0.62_0.19_277/0.4)]` as a Tailwind class does NOT produce visible shadows. The oklch color space in Tailwind arbitrary values for `box-shadow` is silently dropped. Always use inline `style` attribute for oklch box-shadow values on this project.

**Why:** The card/input depth hierarchy (bg-background inside bg-card) must be maintained. The radial glow at 20% opacity (vs original 14%) provides the visible purple ambience. All oklch box-shadows must be inline styles.

**How to apply:** For any future auth or modal form pages, use this pattern as the reference. The radial glow intensity (0.20 opacity, 80/60% ellipse) and button shadow (0.55 opacity) are the calibrated values for this design system. Never use Tailwind arbitrary values for oklch box-shadow.
