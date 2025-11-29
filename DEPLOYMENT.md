# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Repository
- **Repository URL**: https://github.com/CodeZettaa/angular-preformance-patterns.git
- **GitHub Pages URL**: https://codezettaa.github.io/angular-preformance-patterns/

## Automatic Deployment

The project uses GitHub Actions to automatically build and deploy to GitHub Pages whenever code is pushed to the `main` branch.

### Workflow File
The deployment workflow is located at: `.github/workflows/deploy.yml`

### How It Works
1. On every push to `main` branch, the workflow triggers
2. It builds the Angular app for production with the correct `baseHref`
3. It deploys the built files to GitHub Pages

## Manual Setup (If Needed)

If automatic deployment doesn't work, follow these steps:

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Verify Base Href
The `angular.json` file is configured with:
```json
"baseHref": "/angular-preformance-patterns/"
```

This matches your repository name. If you rename the repository, update this value.

### 3. Build and Deploy Manually (Alternative)
If you prefer manual deployment:

```bash
# Build for production
npm run build -- --configuration production

# The built files will be in: dist/angular-performance-patterns/browser
```

Then you can use tools like `gh-pages` package or manually upload to GitHub Pages.

## Troubleshooting

### Build Fails
- Check GitHub Actions tab for error logs
- Ensure Node.js version is compatible (project uses Node 20)
- Verify all dependencies are in `package.json`

### 404 Errors on Routes
- Ensure `baseHref` in `angular.json` matches your repository name
- Check that routes are configured correctly
- Verify GitHub Pages is serving from the correct directory

### Assets Not Loading
- Check that `baseHref` is set correctly
- Verify asset paths in `angular.json`
- Ensure public assets are included in the build

## Deployment Status

Check deployment status:
1. Go to **Actions** tab in your GitHub repository
2. View the latest workflow run
3. Check for any errors or warnings

## Local Testing

To test the production build locally:

```bash
# Build for production
npm run build -- --configuration production

# Serve the built files (requires http-server or similar)
npx http-server dist/angular-performance-patterns/browser -p 8080
```

Then visit `http://localhost:8080/angular-preformance-patterns/` to test.

## Notes

- The repository name has "preformance" (typo) - the baseHref matches this exactly
- GitHub Pages may take a few minutes to update after deployment
- Clear browser cache if you see old content

