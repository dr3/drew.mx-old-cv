#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="latest"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy."
    exit 0
fi

git remote set-url origin "https://${GITHUB_TOKEN}@github.com/dr3/drew.mx.git"
git config user.email "foo@bar.com"
git config user.name "Travis Ci"
npm run deploy