# Current Feature

<!-- Feature name and short description -->

Dashboard UI — Phase 3: Main content area with stats, 
collections, pinned items, and item cards.

## Status

<!-- Not Started | In Progress | Completed -->
In Progress


## Goals

<!-- Define goals here -->

- 4 stats cards at top (Total Items, Collections, 
  Favorited Items, Pinned Items)
- Collections grid with cards showing name, description, 
  item count, and favorite star
- Pinned items section (only items where isPinned: true)
- Recent items section with grid/list view toggle
- ItemCard component showing type badge, version pill, 
  status pill, title, description, tags, date
- ItemTypeBadge reusable component using itemTypeConfig colors


## Notes

<!-- Additional context here -->

- Read @context/features/dashboard-phase-3-spec.md 
  for full requirements
- Use @src/lib/mock-data.ts for all data — no API calls
- ItemCard hover state: border shifts to item type color
- PROMPT items show version pill (v1, v2, v3)
- FEATURE_SPEC items show status pill with correct colors:
  NOT_STARTED = gray, IN_PROGRESS = orange, DONE = green
- Tailwind v4 — NO tailwind.config.ts
- Run npm run build when done and fix all errors


## History

- **2026-04-15** — Scaffolded Next.js 16 app with TypeScript, Tailwind CSS v4, ESLint, App Router, Turbopack, and `src/` directory. Removed default boilerplate, updated metadata and placeholder page to AeroFlow branding, initialized CLAUDE.md.
- **2026-04-16** — Dashboard Phase 1 complete. Initialized shadcn/ui (button, input, badge, card, separator, tooltip, sheet, avatar, dropdown-menu). Created `(dashboard)` route group with layout shell (sidebar + main placeholders), `/dashboard` page, root redirect from `/`. Built `TopBar` with search, `+ New Item` button, settings icon, and user avatar from mock data. Applied AeroFlow dark theme overrides and item type CSS variables to `globals.css`. Build passing.
- **2026-04-16** — Dashboard Phase 2 complete. Built `Sidebar` component: collapsible (240px ↔ 56px) with localStorage persistence, item type nav (5 types with icons and colors from itemTypeConfig), Quick Access section, Collections section with favorite stars, and user area pinned to bottom. Added `DashboardShell` client wrapper to share mobile drawer state between `TopBar` (hamburger) and `Sidebar` (Sheet). Updated layout to use `DashboardShell`. Note: tooltip uses `@base-ui/react` (not Radix) — `render` prop used instead of `asChild`. Build passing.
- **2026-04-16** — Dashboard Phase 3 complete. Created `ItemTypeBadge` (colored badge with icon from itemTypeConfig) and `ItemCard` (grid + list views, type badge, version pill for PROMPT, status pill for FEATURE_SPEC, tags, date, favorite/pin icons). Built dashboard page with 4 stats cards, scrollable collections row, pinned items section (hidden when empty), and all-items section with grid/list toggle. Hover border color uses CSS custom property `--item-color` set inline + `.item-card:hover` rule in globals.css. Build passing.