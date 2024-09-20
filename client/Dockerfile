# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the build
RUN npm install -g serve

# Expose the port for the React app
EXPOSE 3000

# Command to run the app in production mode
CMD ["serve", "-s", "build"]
