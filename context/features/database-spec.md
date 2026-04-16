# Prisma + Neon PostgreSQL Setup

## Overview

Set up Prisma 7 ORM with Neon PostgreSQL database for AeroFlow.

## Requirements

- Use Neon PostgreSQL (serverless)
- Create initial schema based on data models in 
  @context/project-overview.md
- Include NextAuth v5 models 
  (Account, Session, VerificationToken)
- Add appropriate indexes and cascade deletes
- Use migrations only — never db push

## AeroFlow Schema Includes

- User (with isPro, stripeCustomerId, stripeSubscriptionId)
- Project (workspace grouping with name, description, stack)
- Item (with ItemType enum, SpecStatus enum, version field)
- PromptRun (AI execution history for PROMPT items)
- Collection
- ItemCollection (join table)
- Tag
- All NextAuth v5 adapter models

## Important Enums

```prisma
enum ItemType {
  PROMPT
  CONTEXT_FILE
  FEATURE_SPEC
  TEMPLATE
  RESOURCE_LINK
}

enum SpecStatus {
  NOT_STARTED
  IN_PROGRESS
  DONE
}
```

## References

- Data models: @context/project-overview.md
  (full Prisma schema already defined here — use it)
- Coding standards: @context/coding-standards.md
- Prisma 7 upgrade guide: 
  https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-7
- Prisma quickstart:
  https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/prisma-postgres
- NextAuth v5 Prisma adapter:
  https://authjs.dev/getting-started/adapters/prisma

## Notes

- Always use `prisma migrate dev` for schema changes
- Never use `prisma db push` unless explicitly told to
- We have a development branch (DATABASE_URL) and a 
  production branch — keep them separate
- Prisma 7 has breaking changes — read the upgrade guide 
  before starting
- The full schema is already defined in 
  @context/project-overview.md — use that as the source 
  of truth, do not invent a new schema