# Rigi

Self-hosted, extensible task manager. A modular core plus plugins — connectors
(e.g. Task Tracker, Slack) are plugins built on the plugin SDK.

Rigi (Georgian for "queue / row / order"). npm scope `@rigi`.

## Stack

- **NestJS** (Fastify adapter) + TypeScript — modular core
- **PostgreSQL** — native columns for core fields plus a `custom_fields` JSONB
  column, backed by a `custom_field_definitions` registry (types, permissions,
  required flags)
- **BullMQ (Redis)** — the single durable model for the event bus, outgoing
  webhooks, recurring jobs, and reminders
- **AdminJS** — admin panel: auto CRUD from models, a custom Kanban React
  component, and Bull Board for queue monitoring
- **Plugin loader** — homegrown, built on Nest `DynamicModule`. A plugin is an
  npm/git package that depends on `@rigi/plugin-sdk`
- **Auth** — API keys

## Priority layers

- **Layer 1 (MVP):** projects; tasks (title/description/status/priority);
  per-project statuses + Kanban; minimal custom fields; comments; API-key auth;
  outgoing webhooks; AdminJS.
- **Layer 2:** plugin system + connectors as plugins; labels; custom-field
  permissions; richer auth.
- **Layer 3:** recurring tasks; reminders; filtered task lists; workflow
  transition rules; time tracking.

## Plugins

Plugins publish under the `@rigi` scope (`@rigi/plugin-sdk`,
`@rigi/tp-connector`, `@rigi/slack-connector`). The first connector is
a Task Tracker connector.
