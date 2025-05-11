---
layout: project
title: jekyll-esbuild
description: >
  Jekyll plugin for processing JavaScript files using esbuild.
name: jekyll-esbuild
last_update: 2025-05-11
highlight: true
summary: >
  Jekyll plugin for processing JavaScript files using esbuild when the site
  is built and written to disk.
features:
  - Registers a hook into the "post_write" event of the Jekyll site to run
    esbuild, a fast and lightweight build tool, on JavaScript static files
    using the configured options.
  - Configuration options under the "esbuild" key to toggle bundling,
    minification, and sourcemaps, and to optionally set a list of specific
    JavaScript files to process (if not set, it processes all static files
    with .js extension).
  - Uses the Open3 library to have access the standard error output (stderr)
    and the exit status for every execution of the esbuild command.
  - Published to RubyGems.org to allow anyone to easily add the gem to their
    Jekyll site.
image: /assets/img/jekyll-esbuild-og-image.webp
display_image: /assets/img/jekyll-esbuild-og-image.webp
buttons:
  - text: RubyGems page
    url: https://rubygems.org/gems/jekyll-esbuild
    icon: icon-gem
    color: red
  - text: GitHub repository
    url: https://github.com/S8A/jekyll-esbuild
    icon: icon-github
    color: gray
---
