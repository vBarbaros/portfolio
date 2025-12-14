# Victor Barbarosh Portfolio

Modern three-column portfolio built with React, featuring a professional dashboard layout.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Deployment

This project uses **controlled deployment** - you decide when to deploy to production.

### For Development (no deployment):
```bash
git add .
git commit -m "Work in progress: feature X"
git push origin main
```
*This only pushes source code changes, no deployment*

### When Ready to Deploy:
```bash
npm run deploy
```
*This builds, commits docs folder, and pushes - triggering deployment*

### Manual Control (alternative):
```bash
# Build when ready
npm run build

# Review the docs folder, then deploy
git add docs
git commit -m "Deploy: New feature release"
git push origin main
```

## Live Site

The portfolio is deployed at: `https://vBarbaros.github.io/portfolio`

## Key Benefits
- **Source commits** don't trigger deployment
- **Only `npm run deploy`** or manually committing `docs/` triggers deployment  
- You control exactly when to deploy
- Can commit work-in-progress without affecting live site

## Architecture

- **Left Sidebar**: Profile, skills, navigation, contact
- **Main Content**: Dynamic content based on route
- **Right Sidebar**: Platform cards, quick actions, tech stack, activity feed
- **Responsive**: Collapses to single column on smaller screens
- **Styling**: All measurements use `em` units for better scalability
