#!/bin/bash
# Sync script for GitHub and StackBlitz workflow

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: Please provide a commit message"
  echo "Usage: ./sync.sh \"Your commit message\""
  exit 1
fi

# Store the commit message
COMMIT_MESSAGE="$1"

echo "=== OPTION_PAiY-2.0 Sync Script ==="
echo "Starting sync process..."

# Pull latest changes
echo "Pulling latest changes from GitHub..."
git pull
if [ $? -ne 0 ]; then
  echo "Error: Failed to pull latest changes"
  echo "Please resolve any conflicts and try again"
  exit 1
fi
echo "✅ Pull successful"

# Run tests if they exist
echo "Running tests..."
if npm test; then
  echo "✅ Tests passed"
else
  echo "⚠️ Tests failed, but continuing with sync"
  # Uncomment the line below to exit on test failure
  # exit 1
fi

# Run linting if available
if [ -f "package.json" ] && grep -q "\"lint\"" package.json; then
  echo "Running linting..."
  if npm run lint; then
    echo "✅ Linting passed"
  else
    echo "⚠️ Linting failed, but continuing with sync"
  fi
fi

# Add all changes
echo "Adding changes to git..."
git add -A
if [ $? -ne 0 ]; then
  echo "Error: Failed to add changes"
  exit 1
fi
echo "✅ Changes added"

# Commit changes
echo "Committing changes with message: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"
if [ $? -ne 0 ]; then
  echo "Error: Failed to commit changes"
  exit 1
fi
echo "✅ Changes committed"

# Push changes
echo "Pushing changes to GitHub..."
git push
if [ $? -ne 0 ]; then
  echo "Error: Failed to push changes"
  echo "Try pulling again to resolve any conflicts"
  exit 1
fi
echo "✅ Changes pushed successfully"

echo "Sync complete! Your changes should now be visible in StackBlitz."
echo "StackBlitz URL: https://sb1-rg9ate.stackblitz.io"
echo "=== End of Sync Process ==="
