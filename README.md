# Rigi

Self-hosted, extensible task manager — a modular core plus plugins. Connectors
(e.g. Task Tracker, Slack) are plugins built on the plugin SDK.

Rigi is Georgian for "queue / row / order".

## Development

Requires [mise](https://mise.jdx.dev) and Podman (or Docker).

```bash
mise install            # node, pnpm, just
pnpm install
cp .env.example .env
just up                 # start Postgres + Redis
just db-migrate         # apply Prisma migrations
just dev                # run core (http://localhost:3000, admin at /admin)
```

Tests: `just test` (unit), `just test-int` (integration), `just test-e2e` (against the prod-like stack via `compose.prod.yaml`).

## Stack

- **NestJS** (Express) + TypeScript — modular core
- **PostgreSQL** — native columns plus a `custom_fields` JSONB column
- **BullMQ (Redis)** — event bus, outgoing webhooks, recurring jobs, reminders
- **AdminJS** — admin panel with a custom Kanban board
- **Plugins** — npm/git packages built on `@rigi/plugin-sdk`

## License

TBD.
