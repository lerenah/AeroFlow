import {
  Sparkles,
  FileText,
  ClipboardList,
  Layout,
  Link as LinkIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { itemTypeConfig, type ItemType } from "@/lib/mock-data";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  FileText,
  ClipboardList,
  Layout,
  Link: LinkIcon,
};

interface ItemTypeBadgeProps {
  itemType: ItemType;
}

export default function ItemTypeBadge({ itemType }: ItemTypeBadgeProps) {
  const config = itemTypeConfig[itemType];
  const Icon = ICON_MAP[config.iconName] ?? Sparkles;

  return (
    <span
      className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium"
      style={{
        color: config.color,
        backgroundColor: `${config.color}1a`,
      }}
    >
      <Icon className="h-3 w-3 shrink-0" />
      {config.label}
    </span>
  );
}
