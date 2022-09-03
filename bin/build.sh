#!/bin/bash

# Script for zero downtime Nuxt continuous deployment
# called from ./deploy.sh to deploy new changes

set -e

cd ..

# Fetch new files from a specific branch
git pull -f origin main

# New build directory
# mkdir -p dist_next

# Make nuxt temporarily output to dist_next dir so production site is not interrupted
# echo "nuxt.config.ts changes to build in ./dist_next"
# sed -i "s/generate: { dir: 'dist' },/generate: { dir: 'dist_next' },/" nuxt.config.ts

# Make sure we have latest dependencies installed
echo "Updating Yarn dependencies..."
yarn

# Build the new nuxt app
echo "Building new nuxt app from branch main"
yarn build
echo "Nuxt built successfully"

# Revert the nuxt config change
# git restore nuxt.config.ts
# echo "nuxt.config.ts changes reverted"

# Replace the existing directory with the new build
# echo "Replacing files in ./dist with new build..."
# rm -rf dist && mv dist_next dist

# echo "build.sh completed successfully "