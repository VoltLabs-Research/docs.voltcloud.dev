# Production image for docs.voltcloud.dev, built by Quantum on each push to main.
# Quantum builds through the Docker API without BuildKit, so this sticks to plain
# Dockerfile syntax: no RUN --mount and no heredocs.
#
# One stage on purpose: next.config.mjs goes through fumadocs-mdx, which compiles
# source.config.ts again when `next start` loads it, so the server needs the
# sources it was built from, not just .next.

FROM node:22-bookworm-slim
WORKDIR /app

# postinstall runs fumadocs-mdx, which loads source.config.ts and what it imports,
# so the sources go in before the install.
COPY . .
RUN npm ci
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000
CMD ["npx", "next", "start"]
