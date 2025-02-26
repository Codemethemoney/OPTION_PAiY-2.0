# Development Workflow

This document outlines the development workflow for the OPTION_PAiY-2.0 project, which integrates an AI IDE (Windsurf/Cursor) with GitHub and StackBlitz for seamless development.

## Setup

1. **Clone the Repository**
   ```bash
   git clone git@github.com:Codemethemoney/OPTION_PAiY-2.0.git
   cd OPTION_PAiY-2.0
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up SSH Key for GitHub**
   Ensure your SSH key is added to your GitHub account and loaded in your SSH agent:
   ```bash
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519  # or path to your private key
   ```

4. **Connect with StackBlitz**
   Open the StackBlitz project using the provided URL:
   - Edit URL: https://stackblitz.com/edit/sb1-rg9ate?file=.vscode%2Fsettings.json
   - Live Preview: https://sb1-rg9ate.stackblitz.io

## Daily Development Workflow

1. **Pull Latest Changes**
   ```bash
   git pull
   ```

2. **Create or Switch to a Feature Branch**
   ```bash
   git checkout -b feature-name
   # or
   git checkout feature-name
   ```

3. **Develop with AI Assistance**
   Use Windsurf/Cursor to write and refine code with AI assistance.

4. **Commit Changes Frequently**
   ```bash
   git add -A
   git commit -m "Descriptive message about your changes"
   git push
   ```

5. **View Changes in StackBlitz**
   After pushing to GitHub, check the live preview in StackBlitz to see your changes in action.

6. **Iterate Based on Feedback**
   Make adjustments based on what you see in the live preview, then commit and push again.

7. **Merge to Main When Ready**
   ```bash
   git checkout main
   git merge feature-name
   git push
   ```

## Automation Scripts

The project includes automation scripts to streamline common tasks:

### Sync Script

The `sync.sh` script automates the process of pulling changes, running tests, and pushing updates:

```bash
./scripts/sync.sh "Your commit message"
```

## Best Practices

1. **Commit Frequently**
   Make small, focused commits with clear messages to maintain a clean history.

2. **Pull Before Push**
   Always pull the latest changes before pushing to avoid merge conflicts.

3. **Use Feature Branches**
   Create separate branches for different features or bug fixes.

4. **Test Before Merging**
   Ensure all tests pass before merging changes to the main branch.

5. **Document API Changes**
   Update documentation when adding or modifying API endpoints.

## Troubleshooting

### SSH Issues
If you encounter SSH authentication issues:
```bash
ssh -T git@github.com  # Test GitHub SSH connection
```

### StackBlitz Sync Issues
If changes aren't appearing in StackBlitz:
1. Verify your changes were pushed to GitHub
2. Check the StackBlitz project settings to ensure it's connected to the correct repository
3. Try refreshing the StackBlitz page

## Monitoring and Logging

- Use the API status endpoint (`/api/status`) to check the health of the application
- Check the console logs for any errors or warnings
- Monitor GitHub issues for bug reports and feature requests
