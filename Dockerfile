# Simple single-stage Dockerfile for EB Docker platform
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Build Next.js (if not already built)
RUN npm run build || echo "Build failed or already built"

# EB expects port 8080
EXPOSE 8080

ENV NODE_ENV=production
ENV PORT=8080

# Start the app
CMD ["node_modules/.bin/next", "start", "-p", "8080"]
