# Current Feature

<!-- Feature name and short description -->

Dashboard UI — Phase 1: shadcn/ui setup, dashboard route, 
layout shell, top bar, and global styles.

## Status

<!-- Not Started | In Progress | Completed -->
In Progress


## Goals

<!-- Define goals here -->

- Initialize shadcn/ui and install required components:
  button, input, badge, card, separator, tooltip, 
  sheet, avatar, dropdown-menu
- Create dashboard route at /dashboard
- Redirect / to /dashboard temporarily
- Create dashboard layout shell with sidebar + main placeholders
- Build top bar with search input, New Item button, 
  settings icon, and user avatar
- Set up global CSS variables for item type colors
- Dark mode by default


## Notes

<!-- Additional context here -->

- Read @context/features/dashboard-phase-1-spec.md 
  for full requirements
- Read @context/features/dashboard-phase-2-spec.md and 
  @context/features/dashboard-phase-3-spec.md so you 
  understand what phase 1 needs to support
- Use mock data from @src/lib/mock-data.ts for the 
  user avatar initials in the top bar
- Tailwind v4 — NO tailwind.config.ts
- Run npm run build when done and fix all errors

## History

- **2026-04-15** — Scaffolded Next.js 16 app with TypeScript, Tailwind CSS v4, ESLint, App Router, Turbopack, and `src/` directory. Removed default boilerplate, updated metadata and placeholder page to AeroFlow branding, initialized CLAUDE.md.
- **2026-04-16** — Dashboard Phase 1 complete. Initialized shadcn/ui (button, input, badge, card, separator, tooltip, sheet, avatar, dropdown-menu). Created `(dashboard)` route group with layout shell (sidebar + main placeholders), `/dashboard` page, root redirect from `/`. Built `TopBar` with search, `+ New Item` button, settings icon, and user avatar from mock data. Applied AeroFlow dark theme overrides and item type CSS variables to `globals.css`. Build passing.