#!/bin/bash

# Clean previous build
rm -rf dist

npm install
# Build
npm run build  
pm2 start server.cjs