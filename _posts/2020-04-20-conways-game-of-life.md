---
layout: post
title: "Conway's Game of Life"
description: I made a simple implementation of the Game of Life in Python.
image: /assets/img/conway-og-image.webp
big_image: /assets/img/conway-big-image.webp
big_image_alt: Screenshots of the game.
category: projects
---

Last night I made a simple implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) in [Python 3](https://python.org) with [PyGame](https://www.pygame.org) and [NumPy](https://numpy.org/). It's available for download [here](https://gist.github.com/S8A/fa4ab4697f88022c87bc8c2699588a8d).

The Game of Life basically consists of two-dimensional grid of square cells, each of which is either alive or dead and interacts with its eight adjacent cells (neighbors). At every clock tick, the state of each cell changes if one of the following conditions or rules are met:
1. Any dead cell with exactly three neighbors becomes a live cell (reproduction).
2. Any live cell with fewer than two live neighbors or more than three dies (underpopulation and overpopulation, respectively).

If a cell doesn't match either condition, it stays in its current state. The simplest version of the game consists of setting the inital state and watching it evolve.

A friend from the university sent me [this video](https://www.youtube.com/watch?v=qPtKv9fSHZY) of YouTuber [Dot CSV](https://www.youtube.com/channel/UCy5znSnfMsDwaLlROnZ7Qbg) explaining how to make the game in Python in 10 minutes, and he challenged me to do it. It took me 50 minutes, because I can't type as fast as a sped-up recording and also because I had to look up how to stop PyGame from crashing.

My implementation of the game, like the one in the video, allows the user to pause and unpause the game by pressing any key, and to make cells alive or dead with left and right mouse clicks, respectively.

I enjoyed this little challenge, and I hope you enjoy downloading and running the game from [here](https://gist.github.com/S8A/fa4ab4697f88022c87bc8c2699588a8d).
