#!/bin/bash

# Navigate to the repository directory
cd /home/alejandro/dev/personal-website || exit

# Log date
echo "Starting pull at $(date)" >> auto_pull.log

# Pull changes
git pull origin main >> auto_pull.log 2>&1
npm run build

# Log completion
echo "Finished pull at $(date)" >> auto_pull.log
echo "----------------------------------------" >> auto_pull.log
