#!/bin/bash
set -e

cd /app

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install dependencies and build
npm install
npm run build
