# Current Feature

<!-- Feature name and short description -->

Dashboard UI — Phase 2: Collapsible sidebar with item type 
navigation, collections, and user area.

## Status

<!-- Not Started | In Progress | Completed -->
In Progress


## Goals

<!-- Define goals here -->

- Build Sidebar component at src/components/layout/Sidebar.tsx
- Collapsible with icon-only mode (56px) and expanded (240px)
- Item type navigation links for all 5 AeroFlow types
- Quick Access section (Favorites, Recent)
- Collections section with mock data
- User avatar area pinned to bottom
- Mobile: renders as Sheet drawer
- Sidebar collapse state persisted in localStorage


## Notes

<!-- Additional context here -->

- Read @context/features/dashboard-phase-2-spec.md 
  for full requirements
- Use @src/lib/mock-data.ts for collections and user data
- Use itemTypeConfig from mock-data for icon colors
- Tailwind v4 — NO tailwind.config.ts
- Run npm run build when done and fix all errors


## History

- **2026-04-15** — Scaffolded Next.js 16 app with TypeScript, Tailwind CSS v4, ESLint, App Router, Turbopack, and `src/` directory. Removed default boilerplate, updated metadata and placeholder page to AeroFlow branding, initialized CLAUDE.md.
- **2026-04-16** — Dashboard Phase 1 complete. Initialized shadcn/ui (button, input, badge, card, separator, tooltip, sheet, avatar, dropdown-menu). Created `(dashboard)` route group with layout shell (sidebar + main placeholders), `/dashboard` page, root redirect from `/`. Built `TopBar` with search, `+ New Item` button, settings icon, and user avatar from mock data. Applied AeroFlow dark theme overrides and item type CSS variables to `globals.css`. Build passing.
- **2026-04-16** — Dashboard Phase 2 complete. Built `Sidebar` component: collapsible (240px ↔ 56px) with localStorage persistence, item type nav (5 types with icons and colors from itemTypeConfig), Quick Access section, Collections section with favorite stars, and user area pinned to bottom. Added `DashboardShell` client wrapper to share mobile drawer state between `TopBar` (hamburger) and `Sidebar` (Sheet). Updated layout to use `DashboardShell`. Note: tooltip uses `@base-ui/react` (not Radix) — `render` prop used instead of `asChild`. Build passing.