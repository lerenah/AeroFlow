import { Star, Pin } from "lucide-react";
import ItemTypeBadge from "./ItemTypeBadge";
import { itemTypeConfig, type Item } from "@/lib/mock-data";

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

const SPEC_STATUS_STYLES: Record<string, string> = {
  NOT_STARTED: "bg-secondary text-muted-foreground",
  IN_PROGRESS:  "bg-orange-500/15 text-orange-400",
  DONE:         "bg-green-500/15 text-green-400",
};

const SPEC_STATUS_LABELS: Record<string, string> = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  DONE:        "Done",
};

interface ItemCardProps {
  item: Item;
  view?: "grid" | "list";
}

export default function ItemCard({ item, view = "grid" }: ItemCardProps) {
  const color = itemTypeConfig[item.itemType].color;
  const cardStyle = { "--item-color": color } as React.CSSProperties;

  const favoriteIcon = (
    <Star
      className={`h-3.5 w-3.5 shrink-0 ${
        item.isFavorite
          ? "fill-yellow-400 text-yellow-400"
          : "text-muted-foreground"
      }`}
    />
  );

  const pinIcon = (
    <Pin
      className={`h-3.5 w-3.5 shrink-0 ${
        item.isPinned ? "fill-current text-primary" : "text-muted-foreground"
      }`}
    />
  );

  // ── List view ────────────────────────────────────────────────
  if (view === "list") {
    return (
      <div
        className="item-card flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors"
        style={cardStyle}
      >
        <ItemTypeBadge itemType={item.itemType} />

        <span className="flex-1 truncate text-sm font-medium text-foreground">
          {item.title}
        </span>

        <div className="hidden items-center gap-1 sm:flex">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(item.createdAt)}
        </span>

        <div className="flex items-center gap-1.5">
          {favoriteIcon}
          {pinIcon}
        </div>
      </div>
    );
  }

  // ── Grid view ────────────────────────────────────────────────
  return (
    <div
      className="item-card flex flex-col gap-3 rounded-lg border border-border bg-card p-4 transition-colors"
      style={cardStyle}
    >
      {/* Header row: badge + pills + icons */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <ItemTypeBadge itemType={item.itemType} />

          {"version" in item && (
            <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              v{item.version}
            </span>
          )}

          {"specStatus" in item && item.specStatus && (
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                SPEC_STATUS_STYLES[item.specStatus]
              }`}
            >
              {SPEC_STATUS_LABELS[item.specStatus]}
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {favoriteIcon}
          {pinIcon}
        </div>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
        <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
          {item.description}
        </p>
      </div>

      {/* Footer: tags + date */}
      <div className="mt-auto flex items-end justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-[10px] text-muted-foreground">
          {formatDate(item.createdAt)}
        </span>
      </div>
    </div>
  );
}
