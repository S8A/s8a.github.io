---
layout: post
title: Website update and redesign
description: How I updated and redesigned my website using Jekyll v4, Tailwind CSS v4, and Alpine.js v3.
category: personal
---

I don't have many regular visitors, but if you have visited my website before February 5th, you should have noticed that it looks a lot different now. Since December last year, I've been gradually updating the information and design of my website, and now I can finally say that it's finished.

My website was previously built using the standard GitHub Pages version of Jekyll v3, and I was using Bootstrap v5.1.3 for the frontend, along with Bootstrap Icons. Now, it's built using Jekyll v4, Tailwind CSS v4, and Alpine.js v3. The website is still deployed on GitHub Pages but now using a custom GitHub Actions workflow because by default GitHub Pages doesn't support Jekyll v4 yet (and [probably won't anytime soon](https://github.com/github/pages-gem/issues/651#issuecomment-1467155019)).

I implemented these changes in the first place for a few reasons that are related to each other.

1. I simply wanted to improve the design of my website.
2. I wanted to use Tailwind CSS instead of Bootstrap, as I had used it at work and I simply came to prefer its flexibility and utility-first approach. Bootstrap websites all pretty much look like they're made in Bootstrap.
3. I specifically wanted to implement a "dark mode" toggle, and Bootstrap v5.1.3 didn't support it. Yes, Bootstrap v5.3.0 brought that feature, but the way I included Bootstrap in the project, by simply downloading the CSS and JavaScript files, made it a minor inconvenience to update to the latest version. Also, like I said, I just wanted to use Tailwind CSS.
4. I was also curious about using Alpine.js, and given that Tailwind CSS is a CSS-only framework, unlike Bootstrap, it was a perfect opportunity to try it out.

Given that I was going to use Tailwind CSS and Alpine.js, I wanted to use `npm` to install them as Node packages; I also wanted to keep using Bootstrap Icons but now as a Node package as well. I figured I needed to do something to make those Node packages work properly on GitHub Pages. Looking around, I found two articles by [Giorgi Mezurnishvili](https://mzrn.sh/) related to the topic:

- _[Starting a blank Jekyll site with Tailwind CSS in 2022](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/)_ (2022-04-09).
- _[How to use Tailwind CSS with Jekyll on GitHub Pages](https://mzrn.sh/2023/10/26/how-to-use-tailwind-css-with-jekyll-on-github-pages/)_ (2023-10-26).

Turns out that the first article is a little outdated now that Tailwind CSS v4 is out: Tailwind CSS no longer uses a JavaScript configuration file, the directives in the CSS file are different, and fewer dependencies are needed (see the [Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)). Also, I had to use the [jekyll-postcss-v2](https://github.com/bglw/jekyll-postcss-v2) plugin instead of [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) to make it work (I'll come back to this later). What remains the same is the need to create a GitHub Actions workflow to use Jekyll v4 on GitHub Pages, as I mentioned before. I will probably write an updated version of Giorgi's guide soon.

Before that big overhaul, I made some smaller but still important changes to the website. I won't go through everything in chronological order (you can check out [this website's GitHub repository](https://github.com/S8A/s8a.github.io) for details), but I want to mention two big changes to showcase what I learned and did along the way:

1. I created a `docker-compose.yml` file to run the website locally in a Docker container instead of installing everything on my system. It went through a few iterations and had to read some source code, but now I finally have a solid setup using the [jvconseil/jekyll-docker](https://github.com/JV-conseil/jekyll-docker) image.
2. I used the [jekyll-thumbnail-img](https://github.com/abpaudel/jekyll-thumbnail-img) plugin to generate thumbnails for the images in my website, and I ended up contributing two new features to the plugin.

Let me elaborate on the second point. First, as I wanted to create a generic image template, I ran into the problem that the plugin didn't allow variables to set the image width, so I forked the repository to add the feature and created [a pull request](https://github.com/abpaudel/jekyll-thumbnail-img/pull/4), but it went without notice. Later, I ran into [another problem that also affected other users](https://github.com/abpaudel/jekyll-thumbnail-img/issues/5): any change in any page would trigger a regeneration of all the thumbnails, which for me took over a minute to complete. I forked the repository again to implement a cache mechanism to fix the issue, and created [another pull request](https://github.com/abpaudel/jekyll-thumbnail-img/pull/7) including that fix and the feature I implemented previously. This time, the plugin's author was kind enough to review the pull request, suggest an improvement (using Jekyll's built-in cache directory instead of a custom one), and merge the pull request. Thus, my two new features were officially released as v0.1.3 of the plugin. Thanks again to [Abhishek Paudel](https://github.com/abpaudel) for the support.

Later on, I ended up contributing to the jekyll-postcss-v2 plugin as well. I noticed that some of the styles were not being generated on the first build, which was a minor problem in development but a major problem in production. I thought it was a bug with Tailwind CSS itself, or PostCSS itself, or my configuration, but it turned out to be a bug in the plugin that was [also affecting other users](https://github.com/bglw/jekyll-postcss-v2/issues/2). I forked the repository to fix the issue by changing the trigger event for the PostCSS command, and created [a pull request](https://github.com/bglw/jekyll-postcss-v2/pull/7). Unfortunately, this plugin's author seems to have abandoned the project, so my contribution remains unmerged. In the meantime, I'm using my forked version of the plugin on my website, and commented on the issue so that others can use it too.
