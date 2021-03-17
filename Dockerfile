# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12.20.1-alpine3.10

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . ./

RUN ls

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Build Admin Frontend
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]