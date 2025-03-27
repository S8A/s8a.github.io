---
layout: post
title: How to set up and deploy a Jekyll v4 website with Tailwind CSS and Alpine.js
description: Local development setup with Docker Compose, npm dependencies, PostCSS hook for Jekyll, and custom deployment to GitHub Pages.
# image: /assets/img/website-redesign.webp
# big_image: /assets/img/website-redesign.webp
# big_image_alt: Screenshots of my redesigned website on mobile and desktop.
category: personal
---

Last month, I posted an [overview of how I redesigned my website]({% link _posts/2025-02-28-website-redesign.md %}) using [Jekyll](https://jekyllrb.com/) v4, [Tailwind CSS](https://tailwindcss.com/) v4, and [Alpine.js](https://alpinejs.dev/) v3. As I explained back then, I used two articles by [Giorgi Mezurnishvili](https://mzrn.sh/) for guidance on how to use Tailwind CSS with Jekyll, but I had to do some things differently because of changes introduced in Tailwind CSS v4, so I thought of writing an updated version of Giorgi's guides. I also added Alpine.js (v3) to my website and set up a Docker Compose file for local deployment, so I'll explain how to do that too.


## 1. Set up Docker Compose for local development (optional)

This is optional but I highly recommend it. Instead of having to install and configure Ruby and other dependencies directly in your system, you'll run them encapsulated and preconfigured in a Docker image, specifically, the [jvconseil/jekyll-docker](https://github.com/JV-conseil/jekyll-docker) image.

The first thing you'll need is a `docker-compose.yml` file on the root of your project's repository with the following content:

```yaml
services:
  site:
    image: jvconseil/jekyll-docker:stable
    command: sh -c 'npm install && npm run build && jekyll serve'
    ports:
      - "4000:4000"
    volumes:
      - .:/srv/jekyll
      - ./vendor/bundle:/usr/local/bundle
    environment:
      - JEKYLL_ENV=development
      - NODE_ENV=development
      - TZ=America/Caracas
      - DEBUG=0
```

This configuration creates one service called `site`, makes it take the `stable` version of the `jvconseil/jekyll-docker` image as its base, defines a custom default command that will be executed when the service is run, exposes the internal port 4000 of the container as port 4000 in the host machine, defines container-host volume mappings for the Jekyll website directory and Bundler's gems directory, and defines the environment variables. The above command runs three steps sequentially: install Node.js dependencies, build JavaScript bundle, and start Jekyll development server. The environment variables are pretty self-descriptive, but just in case, don't forget to set `TZ` to your timezone.

The other thing you'll need is an `.apk` file on the root of your project's repository to list additional Alpine Linux packages that will be installed when the image is built and run. Specifically, you need it to install `nodejs` and `npm` to be able to use the Node.js package manager, so the file would look like this:

```
nodejs
npm
```

Like I said, you can add any other package you need. For example, I added `git` to be able to add Git-based gems to my `Gemfile`, and `imagemagick` to be able to use the `jekyll-thumbnail-img` plugin.

Finally, exclude the `docker-compose.yml` file from being include in your Jekyll site by adding it to the `exclude` key of your `_config.yml`:


```yaml
# ...

exclude:
  - docker-compose.yml

# ...
```

You should know that since Jekyll v4, the items in the `exclude` list get _added_ to the default exclusion list, so you don't have to manually write the default excluded items defined [in the documentation](https://jekyllrb.com/docs/configuration/options/). Also, you **don't** need to add `.apk` to the exclusion list because by default Jekyll also excludes filenames that start with a dot.


## 2. Use the Jekyll v4 gem

You simply have to make sure that your `Gemfile` lists `jekyll` as a dependency, not `github-pages`, because GitHub Pages is stuck with Jekyll v3 [for the foreseeable future](https://github.com/github/pages-gem/issues/651#issuecomment-1467155019). Your `Gemfile` should look something like this:

```ruby
source "https://rubygems.org"

gem "jekyll", :group => [:jekyll_plugins]
gem "webrick"

group :jekyll_plugins do
  # List Jekyll plugins here
  # ...
end

# Any other gems you want
# ...
```

If you use the Docker Compose setup explained before, you don't have to manually run `bundle install`, because the `jekyll` command in the Docker Image is actually a script that uses Bundler to install the gems first and then actually run Jekyll. In any case, you can run `bundle update` to make sure you have the latest version of all your gems.

I want to mention that one of the changes introduced in Jekyll v4 is that Jekyll plugins listed in the group `:jekyll_plugins` are automatically loaded by Jekyll without needing to also list them in `_config.yml`, so you can remove that redundancy.


## 3. Install and configure Tailwind CSS as a PostCSS plugin on top of Jekyll

We're going to install Tailwind CSS as a PostCSS plugin so that we can integrate it into Jekyll using the [jekyll-postcss-v2](https://github.com/bglw/jekyll-postcss-v2) gem. That plugin creates a hook in the Jekyll build process, so that it automatically regenerates the Tailwind CSS classes your website uses every time you build, or every time you save changes to a file when you're running the development server. To add the gem to Jekyll, simply add it to your `Gemfile` in the `:jekyll_plugins` group:

```ruby
# ...

group :jekyll_plugins do
  gem "jekyll-postcss-v2"
  # ...
end

# ...
```

That's the default way to do it. Unfortunately, there is [an unresolved issue](https://github.com/bglw/jekyll-postcss-v2/issues/2) with the official version of the gem: it might fail to generate styles for all the classes you're using because it executes PostCSS as soon as it reads your CSS file, disregarding all files that are read afterward, so you'll have to build the site at least twice. Fortunately, I forked the repository to fix that by modifying the hook so that it executes PostCSS after the entire website has been built, thus ensuring that it detects all classes. To this date, the plugin's author hasn't reviewed and merged [my pull request](https://github.com/bglw/jekyll-postcss-v2/pull/7), but you can modify your `Gemfile` to use the appropriate branch of my forked version of the repository like this:

```ruby
# ...

group :jekyll_plugins do
  gem "jekyll-postcss-v2", :git => "https://github.com/S8A/jekyll-postcss-v2.git", :branch => "feature/change_hook_to_site_post_write"
  # ...
end

# ...
```

You'll need to create a `postcss.config.js` file in the root of your project's repository to specify `@tailwindcss/postcss` as a PostCSS plugin, like this:

```js
export default {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};
```

In case you read information for previous versions of Tailwind CSS: [starting from v4](https://tailwindcss.com/docs/upgrade-guide#using-postcss), `@tailwindcss/postcss` replaces the previous `tailwindcss` plugin, and it handles imports, vendor prefixing, and minification by itself, so you should no longer add `postcss-import`, `autoprefixer`, and `cssnano` to your PostCSS configuration. Of course, you can add other PostCSS plugins you might need; for example, I use `postcss-url` to move Bootstrap Icons' font files to the appropriate folder when I build my website.

Next, to actually apply Tailwind CSS to your website you need at least one CSS file with two required features: first, it has to be marked with [Front Matter](https://jekyllrb.com/docs/front-matter/) in the beginning, even if it's empty, so that it's treated as a "page" by Jekyll and thus detected by the `jekyll-postcss-v2` plugin; and second, it has to contain at least one [Tailwind CSS directive](https://tailwindcss.com/docs/functions-and-directives) so that the `@tailwindcss/postcss` plugin detects it as a Tailwind CSS file. Therefore, in the simplest case, you might have a single file, let's say `main.css`, with empty Front Matter in the beginning and a simple `@import` directive to import Tailwind CSS itself:

```css
---
---

@import "tailwindcss";
```

You can add any other Tailwind CSS directive you want, whether to explicitly set source directories and files in which you want to detect Tailwind CSS classes (for example, to have different CSS files for different pages), to enable dark mode based on classes or data attributes, to use legacy plugins like [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography), to import CSS from other Node modules or local files, etc.

Now, let's actually install the latest version of Tailwind CSS, its PostCSS plugin, and PostCSS itself using `npm`:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Finally, add `postcss.config.js`, `package.json`, and `package-lock.json` to Jekyll's exclusion list so that they're not exposed on your website:

```yaml
# ...

exclude:
  # ...
  - postcss.config.js
  - package.json
  - package-lock.json

# ...
```

After you've done all of that, you can start using Tailwind CSS classes in your HTML markup. Don't forget to link your Tailwind CSS stylesheet on the `<head>` of your pages or layout templates, of course.


## 4. Deploy to GitHub Pages using GitHub Actions

By default, GitHub Pages takes your main/master branch and builds it using the `github-pages` gem, which is locked to Jekyll v3, as mentioned above, and of course it doesn't install Node.js dependencies. Therefore, to deploy your Jekyll v4 + Tailwind CSS setup to GitHub Pages you'll have to configure a custom deployment workflow using GitHub Pages, which is simpler than it sounds.

To create that workflow, simply create a YAML file (perhaps named `github-pages.yml`) in the `.github/workflows` directory of your repository with the following content (and make sure to push it to GitHub):

```yaml
name: Build and deploy this site to GitHub Pages

on:
  push:
    branches:
      - master

env:
  JEKYLL_ENV: production
  NODE_ENV: production
  TZ: America/Caracas

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.3
          bundler-cache: true
      - name: Install apt dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y $(cat .apt)
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '20'
      - name: Install Node dependencies
        run: npm install
      - name: Build site
        uses: limjh16/jekyll-action-ts@v2
        with:
          enable_cache: true
          custom_opts: "--verbose"
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site

```

I'll briefly explain each part of the file:

1. Set the name of the workflow.
2. Set the workflow to be activated whenever there is a push to the `master` branch. Change that to `main` if that's your repository's main branch, of course.
3. Set the environment variables appropriately. Don't forget to change `TZ` to your timezone.
4. Define one job named `github-pages` that runs on the latest version of Ubuntu and executes the following steps:
  1. Checkout the repository so that the workflow can access it.
  2. Setup Ruby version 3.3 (update that in the future appropriately), enabling Bundler's cache.
  3. Install the apt dependencies specified in the `.apt` file.
  4. Setup Node.js version 20 (update that in the future appropriately).
  5. Install Node.js dependencies with `npm install`. In case you didn't know already, you're supposed to push `package.json` to GitHub.
  6. Build the website with Jekyll, enabling verbose mode to have more informative logs.
  7. Deploy the generated static website to a branch named `gh-pages`.

The second thing you need, which I briefly mentioned above, is an `.apt` file at the root fo your website's repository, where you'll list all the Ubuntu packages you're gonna need to install. This is **not** the same as the `.apk` package mentioned earlier in the article, which is for _Alpine Linux_ packages and will only be used by the Docker image for local development. Also, because you're getting Node in another step of the workflow, you should **not** include `nodejs` and `npm` in the `.apt` file, so in the simplest case the file will be empty.

You don't need to add `.apt` to Jekyll's exclusion list because its filename starts with a dot, and you also don't need to add the workflow file because it's within a directory whose name starts with a dot.

Finally, you'll have to modify your repository's settings to deploy from the `gh-pages` branch generated by the workflow. Open your repository on [GitHub.com](https://github.com), navigate to the _Pages_ section of the _Settings_ tab, and modify these two settings:

- **Source:** Deploy from a branch.
- **Branch:** `gh-pages` branch, root directory (`/`).

After you do that, every time you merge a pull request into your main branch or push commits directly to it, the custom workflow will run on that branch, creating or updating the `gh-pages` branch with your built site, and then the actual deployment workflow will run on the `gh-pages` branch to publish your site.


## 5. Install Alpine.js and bundle it with esbuild (optional)

This part was not at all in Giorgi's guides, and it's not obligatory to use it if you just want to use Tailwind CSS. I did it because I wanted to implement a dark mode toggle on my website as well as a few other small bits of interactivity, and I decided to use Alpine.js instead of vanilla JavaScript. Now I'll explain how I did it if you want to use it too.



To use Alpine.js on your website, you need the following three lines of code on a JavaScript file:

```js
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();
```

Basically: import the Alpine.js module, add it to the `window` object for easy access on each page, and start the Alpine.js engine.

If you want to implement a dark mode toggle like I did, you're gonna need a few more lines before `Alpine.start()`:

```js
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.store("darkMode", {
    on: false,
    init() {
        if ("theme" in localStorage) {
            this.on = localStorage.theme === "dark";
        } else {
            this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    },
    toggle() {
        this.on = !this.on;
        localStorage.theme = this.on ? "dark" : "light";
    },
});

Alpine.start();
```

I implemented it with an Alpine.js store, its API for global state management. On the first site visit, it enables or disables dark mode based on the user's browser setting, and it will continue to do so as long as the user doesn't use the toggle. Once the user clicks the toggle for the first time, it will save the setting to `localStorage` so that the next time the user visits the website it will use the value from there instead of the browser setting.
