FROM node:21-alpine as base

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

RUN corepack enable

WORKDIR /app

RUN npm install -G pnpm

COPY package.json package-lock.json* ./

FROM base as build

COPY . .

# Install dependencies
RUN pnpm install

# build the project
RUN pnpm run build

FROM base as production

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 service-user
USER service-user

ENV NODE_ENV=production

# Copy the built project from the previous stage
COPY --from=build /app/build ./build

# Copy the package.json and node_modules from the previous stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Expose port 3000 (default SvelteKit port) to the outside world
EXPOSE 3000

CMD ["node", "build/index.js"]