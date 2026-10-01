# nodejs-demo-app
CI/CD pipeline task
# Task 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

## Overview
This repository contains a simple Node.js web application configured with a CI/CD pipeline using GitHub Actions and Docker.

## Project Structure
- `index.js`: Sample Express server implementation.
- `package.json`: Project dependencies and scripts.
- `Dockerfile`: Container configuration for the Node.js application.
- `.github/workflows/main.yml`: GitHub Actions pipeline to automate testing, building, and pushing the Docker image to Docker Hub.

## CI/CD Workflow Steps
1. Triggers automatically on code push to the `main` branch.
2. Sets up Node.js and installs dependencies.
3. Executes automated tests (`npm test`).
4. Authenticates with Docker Hub using repository secrets (`DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`).
5. Builds the Docker image and pushes `dagineeswari/nodejs-demo-app:latest` to Docker Hub.
