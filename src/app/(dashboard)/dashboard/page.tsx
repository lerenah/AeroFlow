"use client";

import { useState } from "react";
import { Folder, Star, Filter, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import ItemCard from "@/components/items/ItemCard";
import { items, collections } from "@/lib/mock-data";

// ─── Derived stats ────────────────────────────────────────────

const stats = [
  { label: "Total Items",      value: items.length },
  { label: "Collections",      value: collections.length },
  { label: "Favorited Items",  value: items.filter((i) => i.isFavorite).length },
  { label: "Pinned Items",     value: items.filter((i) => i.isPinned).length },
];

const pinnedItems = items.filter((i) => i.isPinned);

// ─── Section heading helper ───────────────────────────────────

function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      {action}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────

export default function DashboardPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex flex-col gap-8 p-6">

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4"
          >
            <span className="text-xs text-muted-foreground">{label}</span>
            <span className="text-2xl font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>

      {/* Collections */}
      <div className="flex flex-col gap-3">
        <SectionHeading
          title="Collections"
          action={
            <a
              href="/collections"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </a>
          }
        />
        <div className="flex gap-3 overflow-x-auto pb-1">
          {collections.map((col) => (
            <div
              key={col.id}
              className="flex w-52 shrink-0 flex-col gap-2 rounded-lg border border-border bg-card p-4 lg:flex-1"
            >
              <div className="flex items-start justify-between gap-2">
                <Folder className="h-4 w-4 shrink-0 text-muted-foreground" />
                {col.isFavorite && (
                  <Star className="h-3.5 w-3.5 shrink-0 fill-yellow-400 text-yellow-400" />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground">
                  {col.name}
                </span>
                <p className="line-clamp-2 text-xs text-muted-foreground">
                  {col.description}
                </p>
              </div>
              <span className="mt-auto inline-flex w-fit rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                {col.itemCount} items
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned items */}
      {pinnedItems.length > 0 && (
        <div className="flex flex-col gap-3">
          <SectionHeading title="Pinned" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pinnedItems.map((item) => (
              <ItemCard key={item.id} item={item} view="grid" />
            ))}
          </div>
        </div>
      )}

      {/* All items */}
      <div className="flex flex-col gap-3">
        <SectionHeading
          title="All Items"
          action={
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                <Filter className="h-3.5 w-3.5" />
                Filter
              </Button>

              <div className="flex rounded-md border border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setView("grid")}
                  className={`h-7 w-7 rounded-none rounded-l-md transition-colors ${
                    view === "grid"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setView("list")}
                  className={`h-7 w-7 rounded-none rounded-r-md transition-colors ${
                    view === "list"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label="List view"
                >
                  <List className="h-3.5 w-3.5" />
                </Button>
              </div>

              <Button
                size="sm"
                className="h-7 bg-primary px-3 text-xs text-primary-foreground hover:bg-primary/90"
              >
                + New Item
              </Button>
            </div>
          }
        />

        {view === "grid" ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} view="list" />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
