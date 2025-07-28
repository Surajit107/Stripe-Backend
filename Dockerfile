# Use Node.js 18 Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for TypeScript compilation)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript to JavaScript
RUN npm run build

# Remove dev dependencies to reduce image size
RUN npm prune --production

# Expose port 5000 (adjust if your server uses a different port)
EXPOSE 5000

# Start the server
CMD ["npm", "start"] 