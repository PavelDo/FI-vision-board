#!/bin/bash
set -e

cd /app

# Install Node.js 20 (no root required - direct binary)
curl -fsSL https://nodejs.org/dist/v20.18.3/node-v20.18.3-linux-x64.tar.xz | tar -xJ --strip-components=1 -C /tmp
export PATH="/tmp/bin:$PATH"

# Install dependencies and build
npm install
npm run build
