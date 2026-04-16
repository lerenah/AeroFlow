"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText,
  ClipboardList,
  Layout,
  Link as LinkIcon,
  Star,
  Clock,
  Plus,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { currentUser, collections } from "@/lib/mock-data";

// ─── Nav config ───────────────────────────────────────────────

const NAV_TYPES: { href: string; label: string; icon: LucideIcon; color: string }[] = [
  { href: "/items/prompts",   label: "Prompts",        icon: Sparkles,     color: "#8b5cf6" },
  { href: "/items/context",   label: "Context Files",  icon: FileText,     color: "#3b82f6" },
  { href: "/items/specs",     label: "Feature Specs",  icon: ClipboardList, color: "#f97316" },
  { href: "/items/templates", label: "Templates",      icon: Layout,       color: "#10b981" },
  { href: "/items/links",     label: "Resource Links", icon: LinkIcon,     color: "#6366f1" },
];

const QUICK_ACCESS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/favorites", label: "Favorites", icon: Star  },
  { href: "/recent",    label: "Recent",    icon: Clock },
];

// ─── Shared inner content ─────────────────────────────────────

interface SidebarInnerProps {
  collapsed: boolean;
  onToggle: () => void;
}

function SidebarInner({ collapsed, onToggle }: SidebarInnerProps) {
  const pathname = usePathname();
  const visibleCollections = collections.slice(0, 5);
  const hasMore = collections.length > 5;

  return (
    <div className="flex h-full flex-col">

      {/* ── Logo area ── */}
      <div className="flex h-14 shrink-0 items-center justify-between px-3">
        <div className="flex items-center gap-2 overflow-hidden">
          {/* Purple logo mark */}
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary">
            <Zap className="h-4 w-4 text-white" fill="white" />
          </div>
          {!collapsed && (
            <span className="truncate text-sm font-semibold text-foreground">
              AeroFlow
            </span>
          )}
        </div>

        {/* Collapse toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-6 w-6 shrink-0 text-muted-foreground hover:text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <Separator />

      {/* ── Scrollable nav area ── */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-3">

        {/* Item Types */}
        <nav>
          {!collapsed && (
            <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Types
            </p>
          )}
          <ul className="space-y-0.5 px-1.5">
            {NAV_TYPES.map(({ href, label, icon: Icon, color }) => {
              const isActive = pathname.startsWith(href);
              return (
                <li key={href}>
                  <NavItem
                    href={href}
                    label={label}
                    icon={<Icon className="h-4 w-4 shrink-0" style={{ color }} />}
                    isActive={isActive}
                    activeColor={color}
                    collapsed={collapsed}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        <Separator />

        {/* Quick Access */}
        <nav>
          {!collapsed && (
            <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Access
            </p>
          )}
          <ul className="space-y-0.5 px-1.5">
            {QUICK_ACCESS.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <NavItem
                    href={href}
                    label={label}
                    icon={<Icon className="h-4 w-4 shrink-0 text-muted-foreground" />}
                    isActive={isActive}
                    collapsed={collapsed}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Collections — hidden when collapsed */}
        {!collapsed && (
          <>
            <Separator />
            <div>
              <div className="mb-1 flex items-center justify-between px-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Collections
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-4 w-4 text-muted-foreground hover:text-foreground"
                  aria-label="New collection"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <ul className="space-y-0.5 px-1.5">
                {visibleCollections.map((col) => (
                  <li key={col.id}>
                    <Link
                      href={`/collections/${col.id}`}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <span className="flex-1 truncate">{col.name}</span>
                      {col.isFavorite && (
                        <Star className="h-3 w-3 shrink-0 fill-current text-yellow-400" />
                      )}
                    </Link>
                  </li>
                ))}
                {hasMore && (
                  <li>
                    <Link
                      href="/collections"
                      className="flex items-center px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                    >
                      View all →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* ── User area (pinned bottom) ── */}
      <Separator />
      <div className="shrink-0 p-3">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <Avatar className="h-7 w-7 shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
              {currentUser.avatarInitials}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-xs font-medium text-foreground">
                  {currentUser.name}
                </span>
                <span className="truncate text-[10px] text-muted-foreground">
                  {currentUser.email}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 shrink-0 text-muted-foreground hover:text-foreground"
                aria-label="Settings"
              >
                <Settings className="h-3.5 w-3.5" />
              </Button>
            </>
          )}
        </div>
      </div>

    </div>
  );
}

// ─── NavItem helper ───────────────────────────────────────────

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  activeColor?: string;
  collapsed: boolean;
}

function NavItem({ href, label, icon, isActive, activeColor, collapsed }: NavItemProps) {
  const base =
    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors";
  const inactive = "text-muted-foreground hover:bg-secondary hover:text-foreground";
  const active = "bg-secondary text-foreground font-medium";

  const linkEl = (
    <Link
      href={href}
      className={`${base} ${isActive ? active : inactive} ${
        isActive && activeColor ? "border-l-2 pl-[6px]" : ""
      } ${collapsed ? "justify-center px-0" : ""}`}
      style={isActive && activeColor ? { borderColor: activeColor } : undefined}
    >
      {icon}
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip>
        {/* base-ui Trigger renders as a button by default; render as div to avoid
            button-wraps-anchor invalid HTML */}
        <TooltipTrigger render={<div />} className="w-full">
          {linkEl}
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    );
  }

  return linkEl;
}

// ─── Sidebar (public export) ──────────────────────────────────

export interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed");
    if (stored !== null) setCollapsed(stored === "true");
  }, []);

  const handleToggle = () => {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("sidebar-collapsed", String(next));
      return next;
    });
  };

  const sidebarClasses = `hidden lg:flex flex-col shrink-0 border-r border-border bg-card
    overflow-hidden transition-all duration-200 ${collapsed ? "w-14" : "w-70"}`;

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={sidebarClasses}>
        <SidebarInner collapsed={collapsed} onToggle={handleToggle} />
      </aside>

      {/* Mobile Sheet */}
      <Sheet open={mobileOpen} onOpenChange={(open) => !open && onMobileClose()}>
        <SheetContent side="left" className="w-70 p-0 bg-card border-r border-border">
          <SidebarInner collapsed={false} onToggle={() => {}} />
        </SheetContent>
      </Sheet>
    </>
  );
}
