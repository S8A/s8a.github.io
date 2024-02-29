---
layout: post
title: "Links and thoughts #2 (February 2024)"
og_desc: Interesting articles.
category: personal
---

This month I was busy, so I didn't have tome to read as many great articles as the previous month and to write at length about them.

Anyway, here's what I could gather for the 2nd post in my "Links and thoughts" series, for February 2024.


---


## _Why Do Programmers Listen to Music?_

- [Link to article](https://bzolang.blog/p/why-do-programmers-listen-to-music)
- Author: Charles Rosenbauer
- Source: Bzogramming (Substack)
- Date: 2022-02-02

As Rosenbauer explains, a superficial answer to the question of why do programmers (and office workers in general) listen to music while working could simply be because it increases focus and productivity, but that answer just raises the question of _why_. I'd also add that such an answer assumes that it increases focus and productivity, but it could be the case that it actually doesn't have any effect either way or that it even decreases it slightly.

Rosenbauer proposes a deeper, alternative explanation: the human brain wants highly multisensory experiences. As he explains, primitive hunter-gatherers had to be able to pay attention to multiple simultaneous real-time sensory inputs, process them, and quickly react appropriately to the information in order to hunt effectively, evade predators, and generally survive in nature. Thus, this selective pressure resulted in the human brain evolving to be able to process multiple sensory data streams simultaneously, and even to feel unease when a sensory input is missing, as that could indicate trouble or vulnerability.

Programming, and office work in general, is an overwhelmingly visual activity, with the only auditory and tactile feedback being the sound and feel of typing on the keyboard, and maybe moving the mouse, scrolling, and clicking. Our brain feels unease because of the lack of sensory inputs, and thus we feel compelled to listen to music while working. However, as Rosenbauer explains, since the music has nothing to do with the actual task, the implication is that what we're doing is the equivalent of feeding our brain sensory junk food.

Next, he presents the idea of sensory substitution. Since the brain cortex is composed of modular, repeating circuits called cortical columns that are nearly interchangeable, it's possible to change the sensory modality of a brain region just by changing its inputs. Going further, it's theoretically possible to feed in data one has no natural sense for, in other words, sensory augmentation.

For the rest of the article, Rosenbauer speculates about the features that a code sonification scheme should have in order to actually provide useful auditory information that increases effective use of brain power and thus programming productivity. A simple text-to-speech program would probably be counterproductive, since it's just an inferior way of reading code. 

A code sonification scheme that actually reduces programmer effort should probably focus on the structure that otherwise would have to be inferred manually. A rough, "zoomed-out" representation of large amounts of code in audio form could be a good starting point. A full-fledged implementation could play notes as one scrolls through the code editor, in a way that indicates how each part relates to the rest of the code on a larger scale.

Finally, Rosenbauer briefly expresses interest in somehow integrating a haptic feedback device to augment the programming experience.

I thoroughly agreed with Rosenbauer's evolutionary explanation for why we listen to music while programming, and found his ideas for code sonification interesting and worth investigating. Meanwhile, I'll keep listening to metal while programming.


---


## _The Most Profound Problem in Mathematics_

- [Link to article](https://bzolang.blog/p/the-most-profound-problem-in-mathematics)
- Author: Charles Rosenbauer
- Source: Bzogramming (Substack)
- Date: 2022-11-15

This is another article by the same author as the previous one in this list, but this one is a lot longer and more complex, and requires more knowledge of mathematics and computation theory in order to fully understand and appreciate it. I read it from beginning to end and I could understand in general terms and appreciate the significance of the problem, but honestly I'm not well-read enough to properly elaborate on the different technical topics presented by Rosenbauer. Therefore, I'll provide only a brief summary of the general themes of the article.

Rosenbauer starts the article by presenting a previously unsolved problem in mathematics: Euclid's fifth axiom of geometry or parallel postulate. From the beginning, this axiom was criticized for not being as self-evident as the other four, but no one could disprove it or derive it from the other axioms for 2000 years. In the 1800s, the counterintuitive solution was discovered: there are non-Euclidian geometries with different, but equally valid in their context, fifth axioms, like spherical, hyperbolic, and Riemannian geometry. The study of these non-Euclidean geometries eventually allowed Einstein to solve previously unsolved problems in physics, enabling subsequent developments in modern science and technology.

This sets the stage for presenting what Rosenbauer considers to be the most profound unsolved problem in modern mathematics: the P versus NP problem. Rosenbauer considers that this problem has symptoms similar to those of the problem of Euclid's fifth axiom, which hint at the profundity of its implications and the potential bizarreness of its solution.

The P class (P stands for Polynomial) refers to those problems that can be solved by an algorithm in polynomial time, i.e., task completion time varies as a polynomial function of input size, as opposed to exponential time, for example. The NP class (NP stands for Non-deterministic Polynomial) encompasses those problems whose solutions can be _verified_ in polynomial time, but there is no known algorithm that can _solve_ them in polynomial time. The P versus NP problem is essentially the question of whether or not the P and NP classes are equivalent. If P = NP, then all problems that can be verified in polynomial time can also be solved in polynomial time, we just have to find the appropriate algorithm for each; if P ≠ NP, there are problems that simply cannot be solved in polynomial time, though they can be verified in polynomial time.


