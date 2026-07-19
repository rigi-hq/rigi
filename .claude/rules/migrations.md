---
paths:
  - "apps/*/prisma/**"
  - "**/*.prisma"
  - "**/Dockerfile"
  - "**/compose*.yaml"
---

# Schema & code delivery (migrations)

Every schema migration must be **backward-compatible with the currently
running code**, so a migration and the code that uses it can ship independently
and a rollback never breaks a running instance. Follow expand/contract; the
order depends on the change:

- **Add** (new column/table): migration **first**, then code. New columns are
  nullable or have a default so the old code keeps working until the new code
  catches up.
- **Remove** (drop column/table): code **first** (stop using it and ship), then
  the migration that drops it. Dropping before the old code is gone crashes it.
- **Rename / change type**: never one migration + code. Do it in steps —
  add new → backfill/dual-write → switch code → drop old.

Never couple a destructive migration to the same release as the code change.
Migrations run as a **separate step before the app starts** (a one-shot job /
`migrate deploy`), not inside the app's start command.
