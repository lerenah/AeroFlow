// Mock data for dashboard UI — replace with real DB calls once Prisma is wired up

// ============================================================
// Types
// ============================================================

export type ItemType =
  | "PROMPT"
  | "CONTEXT_FILE"
  | "FEATURE_SPEC"
  | "TEMPLATE"
  | "RESOURCE_LINK";

export type SpecStatus = "NOT_STARTED" | "IN_PROGRESS" | "DONE";

export interface User {
  name: string;
  email: string;
  avatarInitials: string;
  isPro: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  isFavorite: boolean;
}

interface BaseItem {
  id: string;
  title: string;
  description: string;
  itemType: ItemType;
  tags: string[];
  createdAt: string;
  isFavorite: boolean;
  isPinned: boolean;
}

interface PromptItem extends BaseItem {
  itemType: "PROMPT";
  version: number;
}

interface ContextFileItem extends BaseItem {
  itemType: "CONTEXT_FILE";
}

interface FeatureSpecItem extends BaseItem {
  itemType: "FEATURE_SPEC";
  specStatus: SpecStatus;
}

interface TemplateItem extends BaseItem {
  itemType: "TEMPLATE";
}

interface ResourceLinkItem extends BaseItem {
  itemType: "RESOURCE_LINK";
  url: string;
}

export type Item =
  | PromptItem
  | ContextFileItem
  | FeatureSpecItem
  | TemplateItem
  | ResourceLinkItem;

export interface ItemTypeConfig {
  label: string;
  color: string;
  iconName: string;
}

// ============================================================
// Current User
// ============================================================

export const currentUser: User = {
  name: "Lerena Holloway",
  email: "holloway.lerena@gmail.com",
  avatarInitials: "LH",
  isPro: true,
};

// ============================================================
// Collections
// ============================================================

export const collections: Collection[] = [
  {
    id: "col_1",
    name: "React Project",
    description: "Context files, prompts, and specs for my main React app.",
    itemCount: 12,
    isFavorite: true,
  },
  {
    id: "col_2",
    name: "Client: Acme Corp",
    description: "Everything for the Acme Corp client engagement.",
    itemCount: 7,
    isFavorite: false,
  },
  {
    id: "col_3",
    name: "Auth Patterns",
    description: "Reusable auth templates and reference prompts.",
    itemCount: 5,
    isFavorite: true,
  },
  {
    id: "col_4",
    name: "Interview Prep",
    description: "Prompts and templates for technical interview practice.",
    itemCount: 9,
    isFavorite: false,
  },
];

// ============================================================
// Items
// ============================================================

export const items: Item[] = [
  {
    id: "item_1",
    itemType: "PROMPT",
    title: "Generate a feature slice",
    description:
      "Scaffolds a full feature slice — component, server action, types, and schema update — from a plain-English description.",
    tags: ["codegen", "scaffold", "feature"],
    createdAt: "2026-04-10T09:00:00Z",
    isFavorite: true,
    isPinned: true,
    version: 3,
  },
  {
    id: "item_2",
    itemType: "PROMPT",
    title: "Code review checklist",
    description:
      "Reviews a code diff against our coding standards and flags any issues.",
    tags: ["review", "quality"],
    createdAt: "2026-04-08T14:30:00Z",
    isFavorite: false,
    isPinned: false,
    version: 1,
  },
  {
    id: "item_3",
    itemType: "CONTEXT_FILE",
    title: "Next.js coding standards",
    description:
      "Project conventions: file structure, server vs. client components, naming rules, and Tailwind v4 config approach.",
    tags: ["standards", "nextjs", "tailwind"],
    createdAt: "2026-04-07T11:00:00Z",
    isFavorite: true,
    isPinned: false,
  },
  {
    id: "item_4",
    itemType: "CONTEXT_FILE",
    title: "AeroFlow project overview",
    description:
      "Full stack description, data model, and feature list for AeroFlow. Attach to any AI run for full project context.",
    tags: ["context", "aeroflow"],
    createdAt: "2026-04-06T10:00:00Z",
    isFavorite: false,
    isPinned: false,
  },
  {
    id: "item_5",
    itemType: "FEATURE_SPEC",
    title: "User authentication",
    description:
      "Email/password login and GitHub OAuth via NextAuth v5. Includes session handling and protected route middleware.",
    tags: ["auth", "nextauth"],
    createdAt: "2026-04-09T16:00:00Z",
    isFavorite: false,
    isPinned: false,
    specStatus: "IN_PROGRESS",
  },
  {
    id: "item_6",
    itemType: "FEATURE_SPEC",
    title: "Item CRUD — all 5 types",
    description:
      "Create, read, update, and delete for Prompts, Context Files, Feature Specs, Templates, and Resource Links.",
    tags: ["crud", "items"],
    createdAt: "2026-04-11T08:00:00Z",
    isFavorite: false,
    isPinned: false,
    specStatus: "NOT_STARTED",
  },
  {
    id: "item_7",
    itemType: "TEMPLATE",
    title: "Server Action with Zod validation",
    description:
      "Boilerplate for a typed server action: Zod schema, auth check, Prisma call, and { success, data, error } return shape.",
    tags: ["template", "server-action", "zod"],
    createdAt: "2026-04-05T13:00:00Z",
    isFavorite: true,
    isPinned: false,
  },
  {
    id: "item_8",
    itemType: "RESOURCE_LINK",
    title: "Prisma 7 upgrade guide",
    description: "Official migration guide from Prisma 5/6 to Prisma 7.",
    tags: ["prisma", "database", "reference"],
    createdAt: "2026-04-04T09:00:00Z",
    isFavorite: false,
    isPinned: false,
    url: "https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7",
  },
];

// ============================================================
// Item Type Config
// ============================================================

export const itemTypeConfig: Record<ItemType, ItemTypeConfig> = {
  PROMPT: {
    label: "Prompt",
    color: "#8b5cf6",
    iconName: "Sparkles",
  },
  CONTEXT_FILE: {
    label: "Context File",
    color: "#3b82f6",
    iconName: "FileText",
  },
  FEATURE_SPEC: {
    label: "Feature Spec",
    color: "#f97316",
    iconName: "ClipboardList",
  },
  TEMPLATE: {
    label: "Template",
    color: "#10b981",
    iconName: "Layout",
  },
  RESOURCE_LINK: {
    label: "Resource Link",
    color: "#6366f1",
    iconName: "Link",
  },
};
