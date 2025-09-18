# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Tech Stack

This is a **Jekyll v4** static site generator website using:
- **Tailwind CSS v4** for styling (via PostCSS plugin)
- **Alpine.js v3** for JavaScript interactivity
- **Ruby** gems for Jekyll plugins and functionality
- **Node.js/npm** for frontend dependencies and build tools

## Development Commands

### Local Development (Docker - Recommended)
```bash
# Start development server with Docker Compose
docker compose up

# Access site at http://localhost:4000
```

### Local Development (Native Ruby)
```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies  
npm install

# Serve site locally
bundle exec jekyll serve --drafts

# Build site for production
JEKYLL_ENV=production bundle exec jekyll build
```

### Build Commands
```bash
# Clean build artifacts
bundle exec jekyll clean

# Build site only (no server)
bundle exec jekyll build

# Build with production environment
JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build
```

## Project Architecture

### Content Collections
The site uses Jekyll collections to organize different types of content:
- `_posts/` - Blog posts with date-based permalinks
- `_desktop/` - Desktop software projects
- `_websites/` - Website projects  
- `_open_source/` - Open source contributions
- `_mathematics/` - Mathematical content and notebooks
- `_misc_projects/` - Miscellaneous projects

### Key Configuration Files
- `_config.yml` - Main Jekyll configuration
- `_data/*.yml` - Site data (navigation, about info, project collections, etc.)
- `package.json` - Node.js dependencies
- `postcss.config.js` - PostCSS configuration for Tailwind CSS
- `docker-compose.yml` - Docker development environment

### Frontend Architecture
- **CSS**: Single `assets/css/main.css` file imports Tailwind CSS with Jekyll front matter processing
- **JavaScript**: Single `assets/js/main.js` file bundles Alpine.js and dark mode functionality  
- **Layouts**: Modular layout system in `_layouts/` with includes in `_includes/`
- **Dark Mode**: Implemented via Alpine.js store with localStorage persistence

### Build Process
1. **Jekyll** processes Markdown content and Liquid templates
2. **jekyll-postcss-v2** plugin runs PostCSS on CSS files (uses forked version with timing fix)
3. **jekyll-esbuild** plugin bundles JavaScript with esbuild
4. **Tailwind CSS** generates utility classes based on HTML content
5. **jekyll-thumbnail-img** generates responsive image variants

### Custom Jekyll Plugins
- `jekyll-postcss-v2` (forked version) - PostCSS integration with proper build timing
- `jekyll-esbuild` - JavaScript bundling with esbuild
- `jekyll-thumbnail-img` - Responsive image generation

## Deployment

### GitHub Pages (Production)
Deployment is handled by GitHub Actions workflow (`.github/workflows/github-pages.yml`):
- Triggered on push to `master` branch
- Installs Ruby and Node.js dependencies
- Builds site with Jekyll
- Deploys to `gh-pages` branch

### Environment Files
- `.apt` - Ubuntu packages for GitHub Actions (empty file, Node.js handled separately)
- `.apk` - Alpine packages for Docker development (`nodejs`, `npm`, `git`, `imagemagick`)

## Content Creation

### Blog Posts
- Located in `_posts/`
- Use filename format: `YYYY-MM-DD-title.md`
- Require `layout: post` in front matter

### Project Pages
- Use appropriate collection (`_desktop/`, `_open_source/`, etc.)
- Use `layout: project` in front matter
- Include project metadata: `name`, `last_update`, `summary`, `features`, `buttons`

### Front Matter Structure
```yaml
---
layout: post|project|default
title: Page Title
description: SEO description
image: /assets/img/thumbnail.webp  # Default set in _config.yml
category: personal|technical       # For posts
---
```

## Development Notes

### Dark Mode Implementation
- Uses Alpine.js global store (`$store.darkMode`)
- Persists preference in localStorage
- Falls back to system preference on first visit
- Toggle implemented in site header

### Image Handling
- Uses `jekyll-thumbnail-img` for responsive images
- Supports local images and external CDN images via different includes
- Generates multiple sizes automatically during build

### Custom Includes
- `img.html` - Standard responsive images
- `img-local.html` - Local images with thumbnail generation
- `lucide-icon.html` - Lucide icon integration
- `header.html` - Site navigation with mobile menu

### Performance Optimizations
- CSS minification via Tailwind CSS built-in optimization
- JavaScript bundling and minification via esbuild
- Image optimization via jekyll-thumbnail-img
- SVG optimization via jekyll-inline-svg
