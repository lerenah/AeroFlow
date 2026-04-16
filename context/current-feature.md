# Current Feature

<!-- Feature name and short description -->

Database setup — Prisma 7 + Neon PostgreSQL initial schema 
and migration.

## Status

<!-- Not Started | In Progress | Completed -->
In Progress — waiting on Neon DATABASE_URL to run migration


## Goals

<!-- Define goals here -->

- Create Neon PostgreSQL project with dev and prod branches
- Install Prisma 7 and initialize
- Create schema.prisma with full AeroFlow data model
- Run initial migration on dev branch
- Verify connection works locally
- Add DATABASE_URL to .env.local


## Notes

<!-- Additional context here -->

- Read @context/features/database-spec.md for 
  full requirements
- Use the schema already defined in 
  @context/project-overview.md as the source of truth
- Prisma 7 has breaking changes — read the upgrade guide
  before writing any code
- Always migrate, never db push
- Do not seed yet — that comes after auth is set up


## History

- **2026-04-15** — Scaffolded Next.js 16 app with TypeScript, Tailwind CSS v4, ESLint, App Router, Turbopack, and `src/` directory. Removed default boilerplate, updated metadata and placeholder page to AeroFlow branding, initialized CLAUDE.md.
- **2026-04-16** — Dashboard Phase 1 complete. Initialized shadcn/ui (button, input, badge, card, separator, tooltip, sheet, avatar, dropdown-menu). Created `(dashboard)` route group with layout shell (sidebar + main placeholders), `/dashboard` page, root redirect from `/`. Built `TopBar` with search, `+ New Item` button, settings icon, and user avatar from mock data. Applied AeroFlow dark theme overrides and item type CSS variables to `globals.css`. Build passing.
- **2026-04-16** — Dashboard Phase 2 complete. Built `Sidebar` component: collapsible (240px ↔ 56px) with localStorage persistence, item type nav (5 types with icons and colors from itemTypeConfig), Quick Access section, Collections section with favorite stars, and user area pinned to bottom. Added `DashboardShell` client wrapper to share mobile drawer state between `TopBar` (hamburger) and `Sidebar` (Sheet). Updated layout to use `DashboardShell`. Note: tooltip uses `@base-ui/react` (not Radix) — `render` prop used instead of `asChild`. Build passing.
- **2026-04-16** — Homepage complete. Built marketing landing page at `/` (Server Component) with navbar, hero, problem/solution before-after comparison, item types grid (colored left borders from CSS vars), AI features grid, how-it-works steps, pricing section, CTA banner, and footer. Extracted `PricingCards` as a Client Component for the monthly/yearly toggle. Note: `Button` also uses `@base-ui/react` — use `render` prop instead of `asChild` for link rendering throughout the codebase. Build passing.
- **2026-04-16** — Dashboard Phase 3 complete. Created `ItemTypeBadge` (colored badge with icon from itemTypeConfig) and `ItemCard` (grid + list views, type badge, version pill for PROMPT, status pill for FEATURE_SPEC, tags, date, favorite/pin icons). Built dashboard page with 4 stats cards, scrollable collections row, pinned items section (hidden when empty), and all-items section with grid/list toggle. Hover border color uses CSS custom property `--item-color` set inline + `.item-card:hover` rule in globals.css. Build passing.
- **2026-04-16** — Database setup (partial). Installed `prisma@7`, `@prisma/client@7`, `@prisma/adapter-pg`, `dotenv`. Ran `prisma init`. Wrote full AeroFlow schema to `prisma/schema.prisma` (User, Account, Session, VerificationToken, Project, Item, PromptRun, Collection, ItemCollection, Tag + ItemType/SpecStatus enums). Created `prisma.config.ts` (loads `.env.local` then `.env`, seed command). Created `src/lib/prisma.ts` singleton using `PrismaPg` adapter. Created `.env.example` and placeholder `.env.local`. Excluded `prisma/` from tsconfig, fixed generated client import path (`@/generated/prisma/client`). Schema validates. Build passing. Pending: add Neon DATABASE_URL to `.env.local` and run `npx prisma migrate dev --name init`.