---
layout: post
title: How to set up and deploy a Jekyll v4 website with Tailwind CSS and Alpine.js
description: Local development setup with Docker Compose, npm dependencies, PostCSS hook for Jekyll, and custom deployment to GitHub Pages.
# image: /assets/img/website-redesign.webp
# big_image: /assets/img/website-redesign.webp
# big_image_alt: Screenshots of my redesigned website on mobile and desktop.
category: personal
---

Last month, I posted an [overview of how I redesigned my website]({% link _posts/2025-02-28-website-redesign.md %}) using Jekyll v4, Tailwind CSS v4, and Alpine.js v3. As I explained back then, I used two articles by [Giorgi Mezurnishvili](https://mzrn.sh/) for guidance, but I had to do some things differently because of changes introduced in Tailwind CSS v4, so I thought of writing an updated version of Giorgi's guides. I also added Alpine.js (v3) to my website and set up a Docker Compose file for local deployment, so I'll explain how to do that too.


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
