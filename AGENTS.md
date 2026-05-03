# AGENTS.md

## Stack And Build
- This repo is a Jekyll 4 site, not a Node app. Node is only used by Jekyll hooks for PostCSS and esbuild.
- There are no `npm` scripts for build, lint, test, or typecheck. Do not invent `npm run ...` commands here.
- CSS is built from `assets/css/main.css` through `jekyll-postcss-v2`. Keep the empty front matter at the top of that file or Jekyll will stop treating it as a page to process.
- JS is bundled from `assets/js/main.js` by `jekyll-esbuild`, configured in `_config.yml` under `esbuild.files`.
- The repo pins a fork of `jekyll-postcss-v2` in `Gemfile`/`Gemfile.lock` (`S8A/jekyll-postcss-v2` on branch `feature/change_hook_to_site_post_write`). Do not replace it with the upstream gem unless the user asks.

## Commands
- Install deps with `bundle install` and `npm install`.
- Local dev without Docker: `bundle exec jekyll serve --drafts`.
- Local dev with Docker: `docker compose up`. The container already runs `npm install && jekyll serve --drafts`.
- Production-style build: `JEKYLL_ENV=production NODE_ENV=production bundle exec jekyll build --verbose`.
- CI deploys on pushes to `master`, using Ruby `3.3`, Node `20`, and apt packages listed in `.apt`.

## Repo Map
- Content collections are defined in `_config.yml`: `_open_source`, `_websites`, `_desktop`, `_mathematics`, `_misc_projects`, plus `_posts` for the blog.
- `projects.html` and the home page derive project listings from `site.documents` and `_data/project_collections.yml`; highlighted project cards come from collection documents with `highlight: true`.
- Blog pagination is wired manually through `blog/index.html` and `_config.yml` (`paginate: 12`, `paginate_path: "/blog/:num/"`).
- Math notebook pages use `layout: jupyter-notebook`, which bypasses the default Tailwind layout and uses the committed `assets/css/jupyter-*.css` files instead.

## Editing Gotchas
- Do not edit `_site/`; it is generated and ignored.
- Default page chrome lives in `_layouts/default.html`; the Tailwind stylesheet and bundled JS are linked there.
- Local responsive images are usually rendered with `{% include img-local.html %}`, which depends on `jekyll-thumbnail-img` to generate width variants. Preserve that pattern when changing image markup.
