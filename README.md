# Rigi

Self-hosted, extensible task manager — a modular core plus plugins. Connectors
(e.g. Task Tracker, Slack) are plugins built on the plugin SDK.

Rigi is Georgian for "queue / row / order".

> **Status: work in progress.** Not yet ready to run — setup and usage docs will
> land once the MVP core is in place.

## Stack

- **NestJS** (Fastify) + TypeScript — modular core
- **PostgreSQL** — native columns plus a `custom_fields` JSONB column
- **BullMQ (Redis)** — event bus, outgoing webhooks, recurring jobs, reminders
- **AdminJS** — admin panel with a custom Kanban board
- **Plugins** — npm/git packages built on `@rigi/plugin-sdk`

## License

TBD.
