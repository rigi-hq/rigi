<div align="center">

# Rigi

**Self-hosted, extensible task manager — a modular core plus plugins.**

Connectors (e.g. Task Tracker, Slack) are plugins built on the plugin SDK.

<br />

[![CI](https://img.shields.io/github/actions/workflow/status/rigi-hq/rigi/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=CI)](https://github.com/rigi-hq/rigi/actions/workflows/ci.yml)
[![Node](https://img.shields.io/badge/node-%E2%89%A522-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)](https://nestjs.com)
[![License](https://img.shields.io/badge/license-TBD-lightgrey?style=flat-square)](#license)

<sub>Rigi is Georgian for "queue / row / order".</sub>

</div>

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
