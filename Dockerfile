# Build Stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
# Install only production dependencies
RUN npm ci --only=production
# Copy built assets: frontend (dist) and backend (dist/server)
# Note: npm run build puts frontend in dist/ and backend in dist/server/server
COPY --from=build /app/dist ./dist

EXPOSE 8080
CMD ["npm", "run", "start"]
