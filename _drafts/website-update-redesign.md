---
layout: post
title: Website redesign
description: Overview of how I redesigned my website using Jekyll v4, Tailwind CSS v4, and Alpine.js v3 and contributed to two open-source projects along the way.
image: /assets/img/website-redesign.webp
big_image: /assets/img/website-redesign.webp
big_image_alt: Screenshots of my redesigned website on mobile and desktop.
category: personal
---

I don't have many regular visitors, but if you've visited my website before, you might have noticed that it looks a lot different now. Since December last year, I've been gradually updating and improving my website, and in February I did a big overhaul in terms of design and tech stack.

My website was previously built using the standard Ruby gem for GitHub Pages (which is basically Jekyll v3 plus a lot of plugins), and I was using Bootstrap v5.1.3 for the frontend, along with Bootstrap Icons. Now, I rebuilt it using [Jekyll](https://jekyllrb.com/) v4, [Tailwind CSS](https://tailwindcss.com/) v4, and [Alpine.js](https://alpinejs.dev/) v3. The website is still on [GitHub Pages](https://pages.github.com/), but now I deploy it with a custom automated workflow.

I implemented these changes for a few interconnected reasons:

1. I simply wanted to improve the design of my website.
2. I wanted to use Tailwind CSS instead of Bootstrap, as I had used it at work, and I simply came to prefer its flexibility and utility-first approach. Bootstrap is a more opinionated design system, which makes it pretty obvious when a website uses it.
3. I specifically wanted to implement a "dark mode" toggle, and Bootstrap v5.1.3 didn't support it. Yes, Bootstrap v5.3.0 brought that feature, but the way I included Bootstrap in the project, by simply downloading the CSS and JavaScript files to my website's repository, made it a minor inconvenience to update to the latest version. Also, like I said, I just wanted to use Tailwind CSS.
4. I was also curious about using Alpine.js, and given that Tailwind CSS is a CSS-only framework, unlike Bootstrap, it was a perfect opportunity to try it out.
5. Regarding Jekyll, I wanted to use the latest version for its own sake instead of being stuck with v3, and also I wanted to use the jekyll-thumbnail-img plugin (I'll go back to it later), which requires Jekyll v4 or later.

I looked up how to update GitHub Pages to Jekyll v4 and found out that it's not possible by default and [probably won't be anytime soon](https://github.com/github/pages-gem/issues/651#issuecomment-1467155019). Therefore, I had to replace the GitHub Pages gem with the one for Jekyll v4, explicitly add the other plugins that were bundled with GitHub Pages that I still wanted to use, and set up a custom GitHub Actions workflow to build the website to a new branch every time the master branch is updated and deploy that as a generic static site.

Next, I wanted to use [npm](https://www.npmjs.com/) to install Tailwind CSS, Alpine.js, and Bootstrap Icons as Node packages, and thus make it trivial to keep them updated in the future. I figured I needed to do something to make those Node packages work properly with Jekyll and GitHub Pages. Looking around, I found two relevant guides by [Giorgi Mezurnishvili](https://mzrn.sh/):

- _[Starting a blank Jekyll site with Tailwind CSS in 2022](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/)_ (2022-04-09).
- _[How to use Tailwind CSS with Jekyll on GitHub Pages](https://mzrn.sh/2023/10/26/how-to-use-tailwind-css-with-jekyll-on-github-pages/)_ (2023-10-26).

The first article is outdated now that Tailwind CSS v4 is out: configuration is now done using directives in the CSS file where Tailwind CSS is imported instead of using a separate JavaScript file, and it now takes over the role of the other PostCSS plugins mentioned in the guide, making them unnecessary (see the [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)). Also, I had to use the [jekyll-postcss-v2](https://github.com/bglw/jekyll-postcss-v2) plugin instead of [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) to make it work. The GitHub deployment guide is still spot on, besides obviously using newer versions of Ruby and Node.js. I will probably write an updated and consolidated version of Giorgi's guides soon.

Before that big overhaul, I made some smaller but still important changes to the website. I won't go through everything I did in chronological order (you can check out [my website's GitHub repository](https://github.com/S8A/s8a.github.io) for details), but I want to mention two highlights:

1. I created a `docker-compose.yml` file to run the website locally in a Docker container instead of installing and running everything directly on my system. I went through a few iterations and had to read some source code, but now I finally have a simple and solid setup using the [jvconseil/jekyll-docker](https://github.com/JV-conseil/jekyll-docker) image.
2. I used the [jekyll-thumbnail-img](https://github.com/abpaudel/jekyll-thumbnail-img) plugin to generate optimally sized versions of the images on my website for all viewport sizes. I ended up [contributing two new features to the plugin](https://github.com/abpaudel/jekyll-thumbnail-img/pull/7) that were released as v0.1.3: one to allow variables to set the image width and another to implement a cache mechanism to avoid regenerating the thumbnails on every change to the site. Thanks again to the plugin's author, [Abhishek Paudel](https://github.com/abpaudel), for reviewing and merging my pull request.

Later on, after I had already switched to Tailwind CSS, I ended up making a fix for the jekyll-postcss-v2 plugin as well. I noticed that it wasn't generating several styles in the output CSS file on the first build, which was a major problem in production. After many futile attempts to fix the issue, I realized that it was a bug in the plugin and that it was [also affecting other users since at least 2022](https://github.com/bglw/jekyll-postcss-v2/issues/2). I forked the repository to fix the issue by making sure that the PostCSS command is triggered after the whole site is built and created [a pull request](https://github.com/bglw/jekyll-postcss-v2/pull/7). Unfortunately, this plugin's author seems to have abandoned the project, so my contribution remains unmerged. In the meantime, I'm using my forked version of the plugin on my website and commented on the issue so that others can use it too.

That's the short story of how I updated, redesigned, and optimized my website, and how along the way I contributed to two open-source projects in a programming language I had no previous experience with. As a wise man once said, "You can just do things."
