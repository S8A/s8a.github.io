---
layout: project
title: jekyll-postcss-v2
description: >
  I contributed an improvement to this Jekyll plugin to ensure proper PostCSS
  processing of the entire site's CSS files.
name: jekyll-postcss-v2
summary: >
  Jekyll plugin for processing CSS files with PostCSS. I modified the plugin to
  process CSS only after all pages are written to disk, fixing issues with
  Tailwind CSS class detection. Pull request still pending review.
last_update: 2025-02-13
repo_host: github
repo_url: https://github.com/bglw/jekyll-postcss-v2
pr_url: https://github.com/bglw/jekyll-postcss-v2/pull/7
pr_id: 7
features:
  - Changed the plugin to hook into the "post_write" event of the entire site
    to ensure CSS processing happens after all content has been written to disk.
  - Fixed issues where Tailwind CSS classes weren't being detected in several
    pages during the first build, eliminating the need for multiple build steps.
  - Possibly fixed similar issues with other PostCSS plugins that analyze the
    entire site's content.
image: /assets/img/jekyll-postcss-v2-pr-7-screenshot.webp
display_image: /assets/img/jekyll-postcss-v2-pr-7-screenshot.webp
buttons:
  - text: "Pull request #7"
    url: https://github.com/bglw/jekyll-postcss-v2/pull/7
    icon: bi bi-git
    color: blue
  - text: GitHub repository
    url: https://github.com/bglw/jekyll-postcss-v2
    icon: bi bi-github
    color: gray
---
