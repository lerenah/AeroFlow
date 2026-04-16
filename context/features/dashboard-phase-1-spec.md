# Dashboard UI — Phase 1 Spec

## Overview

Phase 1 of 3. Establish the foundation: shadcn/ui setup, dashboard route, global styles, and the top bar shell. Phases 2 and 3 build on top of this.

## Requirements

### shadcn/ui Setup
- Initialize shadcn/ui if not already done
- Install these components for use across all 3 phases:
  `button`, `input`, `badge`, `card`, `separator`, 
  `tooltip`, `sheet`, `avatar`, `dropdown-menu`

### Dashboard Route
- Create route at `/dashboard`
- Redirect root `/` to `/dashboard` for now 
  (homepage comes later)

### Layout Shell
- Dashboard layout file at 
  `src/app/(dashboard)/layout.tsx`
- Full viewport height, dark background (`#0a0a0a`)
- Two-column structure: sidebar (left) + main area (right)
- Placeholder `<h2>Sidebar</h2>` and `<h2>Main</h2>` 
  for now — phases 2 and 3 will replace these

### Top Bar
- Fixed at top of the main area (not the sidebar)
- Left side: search input with ⌘K placeholder text
- Right side: 
  - `+ New Item` button (purple, filled)
  - Settings icon (gear)
  - User avatar circle showing initials from mock data
- Display only — no functionality yet

### Global Styles
- Dark mode by default — no light mode toggle yet
- Background: `#0a0a0a`
- Surface: `#111111`
- Purple accent: `#8b5cf6`
- Item type CSS variables in `globals.css`:
  ```css
  --color-prompt: #8b5cf6;
  --color-context: #3b82f6;
  --color-spec: #f97316;
  --color-template: #10b981;
  --color-link: #6366f1;
  ```
- Subtle borders: `1px solid rgba(255,255,255,0.08)`

## References

- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-2-spec.md
- @context/features/dashboard-phase-3-spec.md
