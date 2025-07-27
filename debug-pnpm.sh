#!/bin/bash

echo "=== PNPM DEBUG INFO ==="
echo "PNPM version:"
pnpm --version

echo -e "\n=== PNPM STORE PATH ==="
pnpm store path

echo -e "\n=== PNPM STORE STATUS ==="
pnpm store status

echo -e "\n=== NODE_MODULES STRUCTURE ==="
if [ -d "node_modules" ]; then
    echo "node_modules exists, listing top-level contents:"
    ls -la node_modules/ | head -20
    echo -e "\nnode_modules size:"
    du -sh node_modules/
else
    echo "node_modules not found"
fi

echo -e "\n=== SYMLINK DETECTION ==="
if [ -d "node_modules" ]; then
    echo "Checking for symlinks in node_modules:"
    find node_modules -maxdepth 2 -type l | head -10
    echo -e "\nChecking for actual directories vs symlinks:"
    ls -la node_modules/ | grep "^l" | head -10
    echo -e "\nChecking for actual directories:"
    ls -la node_modules/ | grep "^d" | head -10
else
    echo "node_modules not found for symlink detection"
fi

echo -e "\n=== WORKSPACE INFO ==="
echo "Current working directory:"
pwd
echo -e "\nWorkspace packages:"
pnpm list -r --depth=0 2>/dev/null || echo "Unable to list workspace packages"

echo -e "\n=== DISK USAGE ==="
df -h .

echo "=== END DEBUG INFO ==="