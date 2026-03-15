# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm generate     # Static site generation
pnpm preview      # Preview production build
```

No test suite is configured.

## Architecture

This is a **Nuxt 4** personal portfolio site (single developer, "Sven") with **TailwindCSS v4** and **shadcn-vue**.

**Key structural decisions:**
- All app code lives under `app/` (Nuxt v4 convention)
- Project data is hardcoded in `app/composables/useProjects.ts` — no CMS or API. To add/edit projects, modify the `projects` array there directly.
- `app/lib/utils.ts` exports `cn()` for merging Tailwind classes (clsx + twMerge)
- shadcn-vue components go in `app/components/ui/` (configured in `nuxt.config.ts` and `components.json`)

**Pages:**
- `app/pages/index.vue` — single-page portfolio with anchor-linked sections (Hero, About, Stack, Projects, Contact)
- `app/pages/projects/[slug].vue` — project detail page with prev/next navigation, driven by slug from `useProjects()`

**Styling:**
- TailwindCSS v4 via Vite plugin (not PostCSS)
- Dark-first design using oklch colors defined as CSS variables in `app/assets/css/main.css`
- Primary color: oklch(0.62 0.19 277) — purple
- Background: `#0d0d0f`, foreground: `#e8e8f0`

## Tech Stack

- Nuxt 4 / Vue 3 with `<script setup>` and TypeScript
- TailwindCSS v4 (`@tailwindcss/vite` plugin)
- shadcn-nuxt (zinc base color, CSS variables)
- Radix Vue (headless primitives)
- Lucide Vue Next (icons)
- pnpm
