---
layout: post
title: "8A Training bugfix update: v4.1.1"
description: I updated my training log web-app to fix a bug and do some tweaks.
image: /assets/img/s8a-training-v4.1.0.webp
category: projects
---
Yesterday I published a new patch version of [8A Training](https://s8a-training.web.app/), the training log web-app that I created as a university assignment back in April.

The main change of this [latest release](https://github.com/S8A/umc-prw703-proyecto/releases/tag/v4.1.1) is an internal fix for a bug which caused exercise items to appear out of order if there were more than 10 in a training session. The cause of the problem was that Firebase stores the exercise items' document IDs as strings, and thus they're sorted lexicographically instead of numerically. Therefore, if a training session had 13 exercise items, for example, they would be ordered as 0, 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9 instead of the intended numerical ordering. The fix consists of adding a leading zero to single digit IDs, thus guaranteeing that the lexicographical sort matches the numerical ordering.

To maintain backward compatibility with existing exercise items, the functions that update and delete training sessions were each modified to try to find and remove exercise items with unpadded single digit IDs when applied. This way, it wasn't necessary to do a tedious migration of existing data and users don't need to change their existing training sessions. End users won't even notice the change if they never tried to record more than 10 training sessions previously, and in fact *I* am the only one who has (I checked the Firestore database).

I also took the opportunity to do some tweaks I had planned but were not urgent: making the header navbar logo smaller, adding [Open Graph](https://ogp.me/) metadata tags, and fixing the titles of two pages (the resources page and the 404 error page).

As I wrote in my [previous post]({% post_url 2022-07-09-s8a-training-update %}), I am thinking of further improving the interface for creating/editing training sessions by replacing the editable exercise item cards with static ones, and adding an edit button to each item that, when clicked, launches a modal dialog with a form to edit the item. I haven't had time to do so yet, but I think that I might be able to do it in late September or early October.
