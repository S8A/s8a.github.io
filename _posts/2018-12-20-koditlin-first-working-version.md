---
layout: post
title: "Koditlin: First working version"
date: 2018-12-20 17:55:00 -0400
category: projects
---
Today I wrote the first working version of Koditlin, a simple text editor. It currently has only basic functionality: create a new file, open a file, and save the current file.

I made it in IntelliJ IDEA with the latest Kotlin and TornadoFX. I used [this TornadoFX guide](https://edvin.gitbooks.io/tornadofx-guide/).

The project is in [this GitHub repository](https://github.com/S8A/koditlin).

As I improve my learning of Kotlin, I'll gradually add the following features:
- Checking if the current file has been saved before creating a new file or opening another one.
- Save As
- Find and replace
- Tabs for multiple files
- Syntax highlighting (at least for Markdown)
