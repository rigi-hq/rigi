# --- build stage ---
FROM node:24-slim AS build
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@11.15.0 --activate
WORKDIR /repo
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @rigi/core build
RUN pnpm --filter @rigi/core deploy --prod --ignore-scripts /app
COPY apps/core/prisma /app/prisma
RUN /app/node_modules/.pnpm/node_modules/.bin/prisma generate --schema=/app/prisma/schema.prisma

# --- runtime stage ---
FROM node:24-slim AS runtime
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/prisma ./prisma
COPY --from=build --chown=node:node /repo/apps/core/config ./config
COPY --from=build --chown=node:node /repo/apps/core/prisma.config.ts ./prisma.config.ts
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]
