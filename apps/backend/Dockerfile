# Stage 1: Build the backend application
FROM node:18 AS builder

# Set working directory in container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies (but ignore the devDependencies for production)
RUN pnpm install --frozen-lockfile --prod

# Copy the entire monorepo into the container
COPY . .

# Build only the backend app
RUN pnpm nx build backend

# Stage 2: Create a smaller image with only the build output
FROM node:18-slim AS runner

# Set working directory in the final container
WORKDIR /app

# Copy only the built backend files from the previous stage
COPY --from=builder /app/dist/apps/backend ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port that the backend service will run on
EXPOSE 3000

# Start the backend service
CMD ["node", "dist/main.js"]
