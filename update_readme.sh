#!/bin/bash

# Make sure README.md is staged and committed
echo "Committing updated README.md with canonical values and NRBC update..."

git add README.md
git commit -m "Update README to reflect 15 canonical values and computational NRBC"
git push origin main

echo "✅ README.md successfully pushed to GitHub."
