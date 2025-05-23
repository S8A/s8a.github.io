---
layout: project
title: Trello Music Manager
description: Tool for managing artists and albums in a Trello board.
name: Trello Music Manager
last_update: 2022-05-21
summary: >
  Tool for managing artists and albums in a Trello board. Obsolete due to
  changes in the Trello API.
features:
  - "Made in Python 3 and using the official Trello API."
  - "Manages a Trello board with (at least) three lists: one for the artists,
    and three for albums (pending, doing, and done)."
  - "Load data from artist folders which contain a text file listing the
    artist's albums."
  - "Check the status of an artist's albums or a specific album. Each album has
    four tasks to be marked as complete: download, add metadata, transfer to
    phone, and listen."
  - "Mark some or all of an album's tasks as complete and move the album's card
    to the appropriate list automatically."
  - "Mark all tasks of an album as incomplete and automatically move it to the
    pending list."
  - "Delete an artist or a specific album."
image: /assets/img/trello-music-manager-demo.webp
display_image: /assets/img/trello-music-manager-demo.webp
buttons:
  - text: GitHub repository
    url: https://github.com/S8A/trello-music-manager
    icon: icon-github
    color: gray
---
