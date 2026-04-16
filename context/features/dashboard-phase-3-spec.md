# Dashboard UI — Phase 3 Spec

## Overview

Phase 3 of 3. Build the main content area using mock data. 
This is the dashboard homepage — what a user sees after logging in.

## Requirements

### Stats Row
- 4 stat cards in a horizontal row at the top
- Cards:
  - Total Items (count from mock items array)
  - Collections (count from mock collections array)
  - Favorited Items (count of isFavorite: true items)
  - Pinned Items (count of isPinned: true items)
- Each card: dark surface, muted label, large number, 
  subtle border
- Responsive: 2x2 grid on mobile, 4 across on desktop

### Collections Section
- Section heading: "Collections" + "View all →" link
- Horizontal scrollable row of collection cards
- Each collection card shows:
  - Folder icon
  - Collection name
  - Short description (truncated)
  - Item count badge
  - Filled star if isFavorite: true
- 4 cards visible on desktop, scrollable on mobile
- Import from mock collections array

### Pinned Items Section
- Section heading: "Pinned"
- Show only items where isPinned: true from mock data
- Render as ItemCard components (see below)
- If none pinned: hide section entirely

### Recent Items Section
- Section heading: "All Items" with Filter + view toggle 
  (grid/list icons) + `+ New Item` button
- Show all 8 items from mock data
- Toggle between grid view (3 columns) and list view
- Default: grid view
- Import from mock items array

### Item Card Component
Create `src/components/items/ItemCard.tsx`

Each card displays:
- Type badge with icon and color from `itemTypeConfig`
- Version pill (e.g. "v2") for PROMPT type items
- Status pill for FEATURE_SPEC items:
  - NOT_STARTED: gray
  - IN_PROGRESS: orange  
  - DONE: green
- Title (bold)
- Description (2 lines max, truncated)
- Tags as small pills
- Date (formatted, e.g. "Mar 12")
- Favorite star icon (filled if isFavorite)
- Pin icon (filled if isPinned)
- Hover state: border color shifts to item type color

### Item Type Badge
Reusable component showing the colored type label.
Use `itemTypeConfig` from mock-data.ts for color and icon.
Used inside ItemCard and anywhere else a type needs displaying.

### Behavior Notes
- All data imported directly from `@/lib/mock-data`
- No API calls, no server actions
- View toggle (grid/list) uses local React state
- Clicking an item card does nothing yet 
  (drawer comes in a future spec)

## References

- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-2-spec.md
