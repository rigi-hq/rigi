COMPOSE := env_var_or_default("COMPOSE", "podman compose")

up:
    {{COMPOSE}} up -d

down:
    {{COMPOSE}} down

dev:
    pnpm --filter @rigi/core dev

build:
    pnpm turbo run build

typecheck:
    pnpm turbo run typecheck

lint:
    pnpm turbo run lint

test:
    pnpm turbo run test

test-int:
    pnpm turbo run test:int

test-e2e:
    pnpm turbo run test:e2e

db-migrate:
    pnpm --filter @rigi/core exec prisma migrate dev

db-generate:
    pnpm --filter @rigi/core exec prisma generate

image:
    {{COMPOSE}} -f compose.prod.yaml build
