FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build && npm install --production --ignore-scripts --prefer-offline && cd .next/standalone 
RUN wget https://gobinaries.com/tj/node-prune 

RUN sh node-prune

RUN node-prune

FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000


ENV NEXT_TELEMETRY_DISABLED 1


CMD ["npm", "run", "start"]