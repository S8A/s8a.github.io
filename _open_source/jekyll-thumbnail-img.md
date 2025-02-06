---
layout: open_source
name: jekyll-thumbnail-img
summary: >
  Jekyll plugin for generating thumbnails from images. I contributed two new
  features: allowing to set the thumbnail width using a variable, and thumbnail
  caching to avoid regeneration on every site change. Published as v0.1.3.
last_update: 2025-01-27
repo_host: github
repo_url: https://github.com/abpaudel/jekyll-thumbnail-img
pr_url: https://github.com/abpaudel/jekyll-thumbnail-img/pull/7
pr_id: 7
features:
  - Added the ability to set thumbnail width using variables, whether assigned in the template or from Front Matter, making the plugin more flexible.
  - Implemented thumbnail generation in Jekyll's built-in cache directory, copying them to the destination only when needed. This prevents regenerating all thumbnails every time any file changes in the Jekyll site, significantly improving build times.
image: /assets/img/jekyll-thumbnail-img-pr-7-screenshot.webp
---
