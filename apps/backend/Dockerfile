# Stage 1: Build the backend application
FROM node:18 AS builder

# Set working directory in container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm and Nx globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire monorepo into the container
COPY . .

# Build the UI library first
RUN pnpx nx run ui-components:build --verbose

# Now build the backend app, which depends on the UI library
RUN pnpx nx run backend:build:production --configuration=production --verbose

# Verify that the backend build output exists
RUN ls -la /app/dist/apps/backend

# Stage 2: Create a smaller image with only the build output
FROM node:18-slim AS runner

# Set working directory in the final container
WORKDIR /app

# Copy only the built backend files from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Expose the port that the backend service will run on
EXPOSE 3000

# Start the backend service
ENTRYPOINT ["node", "dist/apps/backend/main.js"]
