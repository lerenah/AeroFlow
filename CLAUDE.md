# AeroFlow

AeroFlow is a guided AI workflow manager for developers — a workspace to store prompts, context files, and feature specs, then attach them to AI runs. The tagline is "Your specs take flight."

Think of it as the "Projects" feature in Claude.ai, but as a dedicated app — versioned, searchable, runnable, and working across any AI tool.

## Context Files

Read the following to get the full context of the project.

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # Run ESLint
```

There is no test suite yet.

## Architecture

AeroFlow is a guided AI workflow manager for developers — a workspace to store prompts, context files, and feature specs, then attach them to AI runs.

**Stack:** Next.js 15 · React 19 · TypeScript (strict) · Tailwind CSS v4 · App Router

**Planned additions** (not yet wired up): Neon PostgreSQL + Prisma 7, NextAuth v5, OpenAI GPT-4o Mini, Stripe, Upstash Redis, Vercel deployment.

### Key Next.js 15 / React 19 conventions

- **`params` and `searchParams` are Promises.** Always `await` them before accessing values — synchronous access is deprecated.
- **`cookies()` and `headers()` are async.** Use `await cookies()` / `await headers()`. Synchronous access still works for backwards-compat but will be removed.
- **`use cache` directive** replaces the old `fetch` cache options for component- and function-level caching. Requires `cacheComponents: true` in `next.config.ts` to enable.
- Route handlers live in `app/…/route.ts`; server actions use `'use server'`.
- Before using any Next.js API, check `node_modules/next/dist/docs/` — APIs differ from prior versions.

### Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).

### Planned route structure

```
src/app/
├── (auth)/           # Login, register
├── (dashboard)/      # Main app shell
│   ├── items/        # All 5 item types (Prompt, Context File, Feature Spec, Template, Resource Link)
│   ├── collections/
│   └── runner/       # Prompt Runner — Pro feature
└── api/
    ├── ai/           # Run, generate, autotag
    └── webhooks/     # Stripe webhooks
```

### Item types (domain model)

| Type | Color | Description |
|---|---|---|
| Prompt | Purple | Reusable AI prompt — versioned, runnable, output history |
| Context File | Blue | Project overviews, coding standards, architectural decisions |
| Feature Spec | Orange | Structured spec (requirements, stack, status) — drives Generate |
| Template | Emerald | Reusable code patterns / boilerplate |
| Resource Link | Indigo | Docs and references |

### Pro features

- **Prompt Runner** — attach context files to a prompt and run it inline
- **Prompt Diff** — compare prompt outputs side-by-side
- **Generate** — turn a Feature Spec into scaffolded code matching project conventions
- **AI Spec Writer** — draft a structured spec from plain-English description
