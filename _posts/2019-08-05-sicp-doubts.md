---
layout: post
title: "I will not complete the SICP book"
og_desc: There's no point in learning techniques aimlessly.
og_image: s8a-thumbnail.png
category: projects
---
I finished section 2.2. of the SICP book last Friday. I decided to not continue with it, for several reasons. Instead, I will complete the HTDP book.

As explained in depth in my previous post, I decided to follow the [Teach Yourself Computer Science guide](https://teachyourselfcs.com/). For the first subject (programming), the author's main recommendation is the classic ["Structure and Interpretation of Computer Programs"](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html).

I was determined to complete the first three chapters of the book and its exercises, as suggested in the guide. I even created a [Trello](https://trello.com) board to track my progress and a [GitHub repository](https://github.com/S8A/sicp-exercises) to publish my solutions.

However, by the second section of the second chapter I was growing weary. I liked that the exercises were challenging and the subjects seemed interesting, but things started to become tedious. There was the feeling that I was solving puzzles and reading about techniques that may be useful sometime; there was no feeling of being more prepared or capable of creating and maintaining actual, useful programs. Besides, I had to look up the solutions to a few exercises only to find out that most of them were not working due to quirks in the way Scheme treats lists and pairs.

The last straw was when I reached section 2.2.4., which is about working through the creation of a picture language using data abstraction. As I suspected, MIT Scheme has no native support for graphics, so I had no way to test my solutions other than logic, confidence and looking up other's solutions. The exercises, though tedious, were way easier than I thought, so there's that. Still, I had no idea how completing all that would translate into useful applicable knowledge that I didn't have before.

Then, I thought about the alternative book recommendation from the guide, ["How to Design Programs"](https://htdp.org). I had dismissed it long ago because the guide said it was "for those who find SICP too challenging" and because it required the use of DrRacket, a simplified IDE. My ego was too much for that, I thought back then. The frustration with SICP was too much now, so I searched for "SICP vs HTDP" to get independent opinions.

That's how I found a publication titled ["The Structure and Interpretation of the Computer Science Curriculum"](https://www2.ccs.neu.edu/racket/pubs/jfp2004-fffk.pdf), written by the authors of HTDP.

They start with a history of SICP, explore the proper focus of a computer science curriculum and the principles of programming that should be taught in the first course, and explain the "natural choice" of teaching a functional programming language before an object-oriented one, as well as the particular choice of Scheme for the former.

Then the authors move on to an in-depth critique of SICP, saying that "although [its] collection of topics is impressive at first glance, a second look shows that SICP suffers from a serious flaw." The flaw, they say, is that SICP "doesn’t state how to program and how to manage the design of a program", leaving those things implicit while making students learn by copying and modifying code. The other flaw of SICP is that many of its exercises and examples use "complex domain knowledge", especially of mathematics and electrical engineering.

They continue by explaining their alternative approach, translated into the HTDP book, which addresses SICP's flaws along four dimensions:
>First, the book discusses explicitly how programs should be constructed. Second, to tame the complexity of programming, it defines a series of teaching languages based on Scheme that represent five distinct knowledge levels through which students pass during their first course. [...] Third, the book uses exercises to reinforce the explicit guidelines on program design; few, if any, exercises are designed for the sake of domain knowledge. Finally, the book uses more accessible forms of domain knowledge than SICP.

The publication concludes by showcasing the strong results of implementing the HTDP approach at a dozen colleges and several dozens of high schools. More importantly, it convinced me the HTDP is not just an "easier alternative" to SICP, but a thoroughly thought-out and more effective one.

I decided to complete the HTDP book from beginning to end, starting next Monday. I will use this week to try to make an Android app idea that I had a few weeks ago.
