# --- build stage ---
FROM node:24-slim AS build
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@11.15.0 --activate
WORKDIR /repo
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @rigi/core build
# Prune to a self-contained deployable tree for @rigi/core. pnpm v10+
# refuses to deploy a workspace package by default unless
# inject-workspace-packages=true is set repo-wide; --legacy opts back into
# the pre-v10 deploy behaviour (resolve workspace deps as regular installs)
# without requiring that repo-wide setting.
RUN pnpm --filter @rigi/core deploy --prod --legacy /app
# `pnpm deploy` reinstalls @prisma/client fresh from the store into /app, so
# running `prisma generate` in /repo beforehand doesn't help: the generated
# `.prisma/client` output it writes lives alongside /repo's copy of the
# package and isn't part of what deploy carries over. Generate again, this
# time directly against /app, using the prisma CLI bin that deploy happens
# to leave in its pnpm virtual store even under --prod.
COPY apps/core/prisma /app/prisma
RUN /app/node_modules/.pnpm/node_modules/.bin/prisma generate --schema=/app/prisma/schema.prisma

# --- runtime stage ---
FROM node:24-slim AS runtime
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/prisma ./prisma
# `prisma migrate deploy` (run at boot below) needs a Prisma config file
# with datasource.url set; it refuses to read DATABASE_URL from the schema
# directly. prisma.config.ts already reads it from process.env, which is
# how DATABASE_URL reaches the app here (compose env, no .env file).
COPY --from=build --chown=node:node /repo/apps/core/prisma.config.ts ./prisma.config.ts
# Run as the non-root `node` user (built into node:24-slim). /app is
# chowned to node above so AdminJS can still write its .adminjs/ bundle
# directory here at boot.
USER node
EXPOSE 3000
# Apply any pending migrations against the target database, then boot.
# migrate deploy is idempotent and safe for prod (unlike migrate dev).
CMD ["sh", "-c", "node_modules/.pnpm/node_modules/.bin/prisma migrate deploy && node dist/main.js"]
