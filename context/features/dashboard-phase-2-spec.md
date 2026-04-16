# Dashboard UI — Phase 2 Spec

## Overview

Phase 2 of 3. Build the sidebar using mock data. 
The sidebar is AeroFlow's primary navigation — item types, 
collections, and quick access links.

## Requirements

### Sidebar Component
- Create `src/components/layout/Sidebar.tsx`
- Dark background: `#111111`
- Right border: `1px solid rgba(255,255,255,0.08)`
- Default width: 240px when expanded
- Collapsible — icon-only mode when collapsed (56px wide)
- Collapse toggle button at the top right of the sidebar
- Always renders as a Sheet drawer on mobile (below 1024px)
- Sheet drawer triggered by hamburger icon in the top bar

### Sidebar Sections (top to bottom)

**Logo area**
- ⚡ AeroFlow logo mark (purple square, white bolt icon)
- "AeroFlow" wordmark — hidden when collapsed
- Collapse toggle icon

**Item Types navigation**
- Section label: "TYPES" (uppercase, muted, small)
- Links for all 5 AeroFlow item types:
  - Prompts → `/items/prompts` (Sparkles icon, purple)
  - Context Files → `/items/context` (FileText icon, blue)
  - Feature Specs → `/items/specs` (ClipboardList icon, orange)
  - Templates → `/items/templates` (Layout icon, emerald)
  - Resource Links → `/items/links` (Link icon, indigo)
- Active item: colored left border + slightly lighter background
- Collapsed state: show icon only with tooltip on hover
- Use item type colors from `itemTypeConfig` in mock-data.ts

**Quick Access**
- Section label: "QUICK ACCESS"
- Favorites link (Star icon)
- Recent link (Clock icon)

**Collections**
- Section label: "COLLECTIONS" with `+` new button on the right
- Show collections from mock data
- Favorited collections show a filled star
- Max 5 shown, "View all" link if more
- Collapsed state: hide this section entirely

**User area (bottom)**
- Pinned to bottom of sidebar
- User avatar circle with initials (from mock currentUser)
- Display name + email — hidden when collapsed
- Settings icon on the right

### Behavior
- Sidebar state (open/collapsed) persisted in localStorage
- Smooth transition on collapse/expand (200ms)
- Import all data directly from `@/lib/mock-data`

## References

- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-3-spec.md
