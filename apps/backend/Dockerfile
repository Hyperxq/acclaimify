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

RUN pnpx nx run frontend:build:production

# Now build the backend app, which depends on the UI library
RUN NODE_ENV=production pnpx nx run backend:build:production --verbose

# Stage 2: Create a smaller image with only the build output
FROM node:18-slim AS runner

# Set working directory in the final container
WORKDIR /app

# Install Chrome and Puppeteer dependencies
RUN apt-get update && apt-get install -y wget gnupg && \
  wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install -y google-chrome-stable --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# Copy only the built backend files from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Set Puppeteer to use the system-installed Chrome
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Expose the port that the backend service will run on
EXPOSE 3000

# Start the backend service
ENTRYPOINT ["node", "dist/apps/backend/main.js"]
