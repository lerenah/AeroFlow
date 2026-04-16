# Current Feature

<!-- Feature name and short description -->

Homepage — Marketing landing page at the root route.

## Status

<!-- Not Started | In Progress | Completed -->
In Progress


## Goals

<!-- Define goals here -->

- Build the AeroFlow marketing homepage at src/app/page.tsx
- Remove the temporary redirect from / to /dashboard
- Sections: navbar, hero, problem/solution, features grid,
  how it works, pricing with toggle, CTA banner, footer
- Dark mode, mobile responsive, developer aesthetic


## Notes

<!-- Additional context here -->

- Read @context/project-overview.md for product details
  and pricing tiers
- Design direction: Linear, Vercel, Raycast — clean and minimal
- Dark background #0a0a0a, purple accent #8b5cf6
- Item type colors already defined as CSS variables in globals.css
- Use those variables for the feature cards colored borders
- Tailwind v4 — NO tailwind.config.ts
- All buttons and links point to /dashboard for now
- No auth flows, no API calls, no forms that submit
- Run npm run build when done and fix all errors


## History

- **2026-04-15** — Scaffolded Next.js 16 app with TypeScript, Tailwind CSS v4, ESLint, App Router, Turbopack, and `src/` directory. Removed default boilerplate, updated metadata and placeholder page to AeroFlow branding, initialized CLAUDE.md.
- **2026-04-16** — Dashboard Phase 1 complete. Initialized shadcn/ui (button, input, badge, card, separator, tooltip, sheet, avatar, dropdown-menu). Created `(dashboard)` route group with layout shell (sidebar + main placeholders), `/dashboard` page, root redirect from `/`. Built `TopBar` with search, `+ New Item` button, settings icon, and user avatar from mock data. Applied AeroFlow dark theme overrides and item type CSS variables to `globals.css`. Build passing.
- **2026-04-16** — Dashboard Phase 2 complete. Built `Sidebar` component: collapsible (240px ↔ 56px) with localStorage persistence, item type nav (5 types with icons and colors from itemTypeConfig), Quick Access section, Collections section with favorite stars, and user area pinned to bottom. Added `DashboardShell` client wrapper to share mobile drawer state between `TopBar` (hamburger) and `Sidebar` (Sheet). Updated layout to use `DashboardShell`. Note: tooltip uses `@base-ui/react` (not Radix) — `render` prop used instead of `asChild`. Build passing.
- **2026-04-16** — Homepage complete. Built marketing landing page at `/` (Server Component) with navbar, hero, problem/solution before-after comparison, item types grid (colored left borders from CSS vars), AI features grid, how-it-works steps, pricing section, CTA banner, and footer. Extracted `PricingCards` as a Client Component for the monthly/yearly toggle. Note: `Button` also uses `@base-ui/react` — use `render` prop instead of `asChild` for link rendering throughout the codebase. Build passing.
- **2026-04-16** — Dashboard Phase 3 complete. Created `ItemTypeBadge` (colored badge with icon from itemTypeConfig) and `ItemCard` (grid + list views, type badge, version pill for PROMPT, status pill for FEATURE_SPEC, tags, date, favorite/pin icons). Built dashboard page with 4 stats cards, scrollable collections row, pinned items section (hidden when empty), and all-items section with grid/list toggle. Hover border color uses CSS custom property `--item-color` set inline + `.item-card:hover` rule in globals.css. Build passing.