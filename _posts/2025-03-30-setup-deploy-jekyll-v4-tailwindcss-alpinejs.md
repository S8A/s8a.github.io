---
layout: post
title: How to set up and deploy a Jekyll v4 website with Tailwind CSS and Alpine.js
description: Local development setup with Docker Compose, npm dependencies, PostCSS hook for Jekyll, and custom deployment to GitHub Pages.
image: /assets/img/jekyll-tailwindcss-alpinejs.webp
big_image: /assets/img/jekyll-tailwindcss-alpinejs.webp
# big_image_alt: Banner for the article
category: personal
---

Last month, I posted an [overview of how I redesigned my website]({% link _posts/2025-02-28-website-redesign.md %}) using [Jekyll](https://jekyllrb.com/) v4, [Tailwind CSS](https://tailwindcss.com/) v4, and [Alpine.js](https://alpinejs.dev/) v3. As I explained back then, I used two articles by [Giorgi Mezurnishvili](https://mzrn.sh/) for guidance on how to use Tailwind CSS with Jekyll, but I had to do some things differently because of changes introduced in Tailwind CSS v4, so I thought of writing an updated version of Giorgi's guides. I'll also explain how to set up Docker Compose for local development, a GitHub Actions workflow for deployment to GitHub Pages, and how to add Alpine.js to the stack.


## Set up Docker Compose for local development (optional)

This is optional, but I highly recommend it. Instead of having to install and configure Ruby and other dependencies directly in your system, you'll run them encapsulated and preconfigured in a Docker image, specifically, the [jvconseil/jekyll-docker](https://github.com/JV-conseil/jekyll-docker) image.

The first thing you'll need is a `docker-compose.yml` file in your project's root directory with the following content:

```yaml
services:
  site:
    image: jvconseil/jekyll-docker:stable
    command: sh -c 'npm install && jekyll serve'
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

This configuration creates one service called `site`, makes it take the `stable` version of the `jvconseil/jekyll-docker` image as its base, defines a custom default command that will be executed when the service is run, exposes the internal port 4000 of the container as port 4000 in the host machine, defines container-host volume mappings for the Jekyll website directory and Bundler's gems directory, and defines the environment variables. The custom command simply installs Node.js dependencies and then starts the Jekyll development server. The environment variables are pretty self-descriptive, but just in case, don't forget to set `TZ` to your timezone.

The other thing you'll need is a text file named `.apk` in your project's root directory to list additional Alpine Linux packages that will be installed when the image is built and run. Specifically, you need it to install `nodejs` and `npm` to be able to use the Node.js package manager, so the file would look like this:

```
nodejs
npm
```

Like I said, you can add any other package you need. For example, I added `git` to be able to add Git-based gems to my `Gemfile`, and `imagemagick` to be able to use the `jekyll-thumbnail-img` plugin.

Finally, prevent the `docker-compose.yml` file from being included in your Jekyll site by adding it to the `exclude` list in your `_config.yml`:


```yaml
# ...

exclude:
  - docker-compose.yml

# ...
```

You should know that since Jekyll v4, the items in the `exclude` list get _added_ to the default exclusion list instead of replacing it, so you don't have to manually write the default excluded items defined [in the documentation](https://jekyllrb.com/docs/configuration/options/). Also, you **don't** need to add `.apk` to the exclusion list because by default Jekyll also excludes files and directories with names that start with a dot.


## Use the Jekyll v4 gem

You simply have to make sure that your `Gemfile` lists `jekyll` as a dependency, not `github-pages`, because GitHub Pages is stuck with Jekyll v3 [for the foreseeable future](https://github.com/github/pages-gem/issues/651#issuecomment-1467155019). Your `Gemfile` should look something like this:

```ruby
source "https://rubygems.org"

gem "jekyll", :group => [:jekyll_plugins]
gem "webrick"

group :jekyll_plugins do
  # List Jekyll plugins here
  # ...
end

# Any other gems you need
# ...
```

If you use the Docker Compose setup explained before, you don't have to manually run `bundle install`, because the `jekyll` command in the Docker Image is actually a script that uses Bundler to install the gems first and then actually run Jekyll. In any case, you can run `bundle update` to make sure you have the latest version of all your gems.

I want to mention that one of the changes introduced in Jekyll v4 is that Jekyll plugins listed in the group `:jekyll_plugins` are automatically loaded by Jekyll without needing to also list them in `_config.yml`, so you can remove that redundancy.


## Install and configure Tailwind CSS as a PostCSS plugin on top of Jekyll

We're going to install Tailwind CSS as a PostCSS plugin so that we can integrate it into Jekyll using the [jekyll-postcss-v2](https://github.com/bglw/jekyll-postcss-v2) gem. That gem creates a hook in the Jekyll build process, so that it automatically regenerates the Tailwind CSS classes your website uses every time you build or every time you save changes to a file when you're running the development server.

First, install the latest version of Tailwind CSS, its PostCSS plugin, and PostCSS itself using `npm`:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Next, you'll need to create a `postcss.config.js` file in your project's root directory to set up PostCSS to use `@tailwindcss/postcss`:

```js
export default {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};
```

In case you read information for previous versions of Tailwind CSS: [starting from v4](https://tailwindcss.com/docs/upgrade-guide#using-postcss), `@tailwindcss/postcss` replaces the previous `tailwindcss` plugin, and it handles imports, vendor prefixing, and minification by itself, so you should no longer add `postcss-import`, `autoprefixer`, and `cssnano` to your PostCSS configuration. Of course, you can add other PostCSS plugins you might need; for example, I use `postcss-url` to move Bootstrap Icons' font files to the appropriate folder when I build my website.

Now, add the `jekyll-postcss-v2` gem to your `Gemfile` in the `:jekyll_plugins` group to install it and automatically enable it in Jekyll:

```ruby
# ...

group :jekyll_plugins do
  gem "jekyll-postcss-v2"
  # ...
end

# ...
```

Unfortunately, there is [an unresolved issue](https://github.com/bglw/jekyll-postcss-v2/issues/2) with the official version of the gem: it might fail to generate styles for all the classes you're using because it executes PostCSS as soon as it reads your CSS file, disregarding all files that are read afterward, so you'll have to build the site at least twice. Fortunately, I forked the repository to fix that by modifying the hook so that it executes PostCSS after the entire website has been built, thus ensuring that it detects all classes. To this date, the plugin's author hasn't reviewed and merged [my pull request](https://github.com/bglw/jekyll-postcss-v2/pull/7), but in the meantime you can modify your `Gemfile` to use the appropriate branch of my forked version of the repository like this:

```ruby
# ...

group :jekyll_plugins do
  gem "jekyll-postcss-v2", :git => "https://github.com/S8A/jekyll-postcss-v2.git", :branch => "feature/change_hook_to_site_post_write"
  # ...
end

# ...
```

After installing and configuring those dependencies, add `postcss.config.js`, `package.json`, and `package-lock.json` to Jekyll's exclusion list so that they're not exposed on your website:

```yaml
# ...

exclude:
  # ...
  - postcss.config.js
  - package.json
  - package-lock.json

# ...
```

Finally, to actually apply Tailwind CSS to your website, you need at least one CSS file with two required features: first, it has to be marked with [Front Matter](https://jekyllrb.com/docs/front-matter/) in the beginning, even if it's empty, so that it's treated as a "page" by Jekyll and thus processed by the `jekyll-postcss-v2` plugin; and second, it has to contain at least one [Tailwind CSS directive](https://tailwindcss.com/docs/functions-and-directives) so that the `@tailwindcss/postcss` plugin detects it as a Tailwind CSS file. Therefore, in the simplest case, you might have a single file, let's say `main.css`, with empty Front Matter in the beginning and a simple `@import` directive to import Tailwind CSS itself:

```css
---
---

@import "tailwindcss";
```

You can add any other Tailwind CSS directive you want, whether to explicitly set source directories and files in which you want to detect Tailwind CSS classes (for example, to have different CSS files for different pages), to enable dark mode based on classes or data attributes, to use legacy plugins like [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography), to import CSS from other Node.js modules or local files, etc.

After you've done all of that, you can start using Tailwind CSS classes in your HTML markup. Don't forget to link your Tailwind CSS stylesheet on the `<head>` of your pages or layout templates, of course.


## Deploy to GitHub Pages using GitHub Actions

By default, GitHub Pages takes your main/master branch and builds it using the `github-pages` gem, which is locked to Jekyll v3, as mentioned above, and of course it doesn't install Node.js dependencies. Therefore, to deploy your Jekyll v4 + Tailwind CSS setup to GitHub Pages, you'll have to configure a custom deployment workflow using GitHub Pages, which is simpler than it sounds.

To create that workflow, simply create a YAML file named something like `github-pages.yml` in the `.github/workflows` directory of your project with the following content, and make sure to push it to GitHub:

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
  1. Check out the repository so that the workflow can access it.
  2. Set up Ruby version 3.3 (update that in the future appropriately), enabling Bundler's cache.
  3. Install the apt dependencies specified in the `.apt` file.
  4. Set up Node.js version 20 (update that in the future appropriately).
  5. Install Node.js dependencies with `npm install`. In case you didn't know already, you're supposed to push `package.json` and `package-lock.json` to GitHub.
  6. Build the website with Jekyll, enabling verbose mode to have more informative logs.
  7. Deploy the generated static website to a branch named `gh-pages`.

The second thing you need, which I briefly mentioned above, is a text file named `.apt` in your project's root directory, where you'll list all the Ubuntu packages you're gonna need to install. This is **not** the same as the `.apk` file mentioned earlier in the article, which is for _Alpine Linux_ packages and will only be used by the Docker image for local development. Also, because you're getting Node.js in another step of the workflow, you should **not** include `nodejs` and `npm` in the `.apt` file, so in the simplest case the file will be empty.

Needless to say, you don't need to add `.apt` nor `.github/workflows/github-pages.yml` to Jekyll's exclusion list because they're excluded automatically.

Finally, you'll have to modify your repository's settings to deploy from the `gh-pages` branch generated by the workflow. Open your repository on [GitHub.com](https://github.com), navigate to the _Pages_ section of the _Settings_ tab, and modify these two settings:

- **Source:** Deploy from a branch.
- **Branch:** `gh-pages` branch, root directory (`/`).

After you do that, every time you merge a pull request into your main branch or push commits directly to it, the custom workflow will run on that branch, creating or updating the `gh-pages` branch with your built site, and then the actual deployment workflow will run on the `gh-pages` branch to publish your site.


## Install Alpine.js and bundle it with esbuild (optional)

This part was not at all in Giorgi's guides, and it's not obligatory to use it if you just want to use Tailwind CSS. I did it because I wanted to implement a dark mode toggle on my website as well as a few other small bits of interactivity, and I decided to use Alpine.js instead of vanilla JavaScript. Now I'll explain how I did it if you want to use it too.

First, install Alpine.js and [esbuild](https://esbuild.github.io/) using `npm`:

```bash
npm install alpinejs esbuild
```

I figured out that I had to use something to bundle Alpine.js into my JavaScript file after I tried to use it by itself and it didn't work. I asked Claude 3.5 Sonnet and it recommended using esbuild and gave me the command options I needed.

On that note, the next thing you need to do is define a Node.js build script so that you can use it to bundle your JavaScript before serving your website. Add a `scripts` section to your `package.json` and define the `build` script like this:


```json
{
  "type": "module",
  "dependencies": {
    // Mapping of dependencies and their versions
    // ...
  },
  "scripts": {
    "build": "esbuild path/to/js/main.js --bundle --outfile=path/to/js/bundle.js $(test \"$NODE_ENV\" = \"production\" && echo '--minify')",
  }
}
```

Replace `path/to/js/main.js` with the actual relative path of your original JavaScript file where you import and use Alpine.js, and replace `path/to/js/bundle.js` with the actual relative path of the JavaScript bundle file that will be produced by esbuild and that you will use in your HTML. The last part that is enclosed within `$()` is a [Bash command substitution](https://www.gnu.org/software/bash/manual/bash.html#Command-Substitution) that checks if the environment variable `NODE_ENV` is set to `production` and, if it is, adds the `--minify` argument to the esbuild command in order to produce a minified bundle.

The command substitution will obviously not work in Windows, so you have three solutions: define a build script for `production` with the `--minify` argument and another for `development` without it, use Windows Subsystem for Linux, or switch to Linux entirely (that last one is only half-joking). I'll continue the rest of this section assuming a single `build` script.

To use the new `build` script, simply run:

```bash
npm run build
```

If you're using the Docker Compose setup I explained above, modify the `command` to run the `build` script after installing Node.js dependencies and before running the Jekyll development server:

```bash
sh -c 'npm install && npm run build && jekyll serve'
```

And, of course, don't forget to add a step to your GitHub Pages deployment workflow to run the `buld` script after installing Node.js dependencies and before building the Jekyll site:

```yaml
# ...

jobs:
  github-pages:
    runs-on: ubuntu-latest
    steps:
      # Omitting the previous steps for brevity
      # ...
      - name: Install Node dependencies
        run: npm install
      - name: Build JavaScript bundle
        run: npm run build
      - name: Build site
        uses: limjh16/jekyll-action-ts@v2
        # ...
      # Rest of the file
      # ...
```

Finally, to actually use Alpine.js on your website, you need the following three lines of code on the JavaScript you're going to process with esbuild:

```js
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();
```

Basically: import the Alpine.js module, add it to the `window` object for easy access on each page, and initialize it.

If you want to implement a dark mode toggle like I did, you're going to need a few more lines before `Alpine.start()`:

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

I implemented it with an Alpine.js store, its API for global state management. On the first site visit, it enables or disables dark mode based on the user's browser setting, and it will continue to do so as long as the user doesn't use the toggle. Once the user clicks the toggle for the first time, it will save the setting to `localStorage` as well so that the next time the user visits the website, it will use the value from there instead of the browser setting.
