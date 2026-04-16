"use client";

import { Menu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { currentUser } from "@/lib/mock-data";

interface TopBarProps {
  onMobileMenuClick: () => void;
}

export default function TopBar({ onMobileMenuClick }: TopBarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background px-4">
      {/* Hamburger — mobile only */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onMobileMenuClick}
        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Search */}
      <div className="flex flex-1 items-center">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search... ⌘K"
            className="h-8 bg-secondary text-sm text-muted-foreground placeholder:text-muted-foreground"
            readOnly
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <Button size="sm" className="h-8 bg-primary text-primary-foreground hover:bg-primary/90">
          + New Item
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          aria-label="Settings"
        >
          <Settings className="h-4 w-4" />
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">
            {currentUser.avatarInitials}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
