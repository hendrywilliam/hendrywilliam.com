FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1 AS production
WORKDIR /app

COPY --from=build --chown=bun:bun /app/.output ./.output

USER bun
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]
