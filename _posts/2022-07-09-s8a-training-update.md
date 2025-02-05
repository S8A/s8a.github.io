---
layout: post
title: "8A Training update: v4.1.0"
description: I updated my training log web-app to improve its UI & UX.
image: /assets/img/s8a-training-v4.1.0.webp
big_image: /assets/img/s8a-training-v4.1.0.webp
big_image_alt: Screenshots of the web-app on a mobile phone.
category: projects
---
Last night I finished doing improvements on the UI and UX of [8A Training](https://s8a-training.web.app/), the training log web-app that I created as a university assignment back in April and [wrote about last month]({% post_url 2022-06-15-s8a-training %}).

Here is the summary of the main visible changes of this [latest release](https://github.com/S8A/umc-prw703-proyecto/releases/tag/v4.1.0):
- **Home page (signed-in user):** Welcome text in title, links to training log and new training session pages have been replaced with buttons.
- **Training log:** Training session card buttons are now smaller, icons have been added to the buttons, pagination elements are now smaller.
- **Training session detail:** The exercises table has been replaced with separate cards for each item (with responsive layout), icons have been added to the buttons.
- **Create/edit training session:** The editable exercises table has been replaced with separate editable cards for each item (with responsive layout), the add exercise button now always adds items to the end of the list, the rest of the buttons have been moved to each exercise item card (thus eliminating the need for selection radio buttons), icons have been added to the buttons.

I also decided to make public the [GitHub repository of the project](https://github.com/S8A/umc-prw703-proyecto), as it turns out my security concerns about the Firebase configuration variable were unfounded. Now everyone can read the code and the history of commits and releases. By the way, I believe that [copyright is illegitimate and anti-market](https://mises.org/library/against-intellectual-property-0), and I don't plan to monetize the project any time soon, so you can copy and use the code as you wish.

I don't plan to translate the web-app to English or any other language, because it seems excessively tedious to do. However, I am thinking of further improving the interface for creating/editing training sessions by replacing the editable exercise item cards with static ones, and adding an edit button to each item that, when clicked, launches a modal dialog with a form to edit the item.


*[UI]: User interface
*[UX]: User experience
