---
layout: post
title: "Links and thoughts #2 (February 2024)"
og_desc: Interesting articles.
category: personal
---

This month I was busy, so I didn't have time to read as many great articles as the previous month and to write at length about them.

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

For the rest of the article, Rosenbauer examines some implications of both possible answers to the P versus NP problem, delves into some properties and examples of NP problems, presents three barriers that mathematicians have discovered which tell us how _not_ to solve the problem, uses Playfair's axiom (a substitute for Euclid's fifth axiom) as a sort of illustrative analogy for P and NP logic circuits, and concludes with some thoughts about the future of the problem.

I highly recommend reading the article, this summary might not do it justice. Rosenbauer provides an enjoyable overview of a lot of interesting topics in mathematics and computation that I would like to learn more about at some point.


---

## _Mind Viruses_

- [Link to the article](https://arctotherium.substack.com/p/mind-viruses)
- Author: Arctotherium
- Source: Not With a Bang (Substack)
- Date: 2023-11-19

In this article, Arctotherium defends the concept of a mind virus as a useful term to describe and explain real phenomena.

First, he explains what the mind virus analogy, as he uses it, actually claims: like viruses, ideas spread from person to person or, more specifically, social contact with a person spreading an idea increases the probability that a person accepts it or spreads it; like viruses, ideas can reduce fitness and function, that is, number of surviving offspring and execution of adaptations, respectively; like viruses, ideas that reduce fitness and function can still spread.

Second, he explains what the mind virus analogy doesn't claim, which is that a mind virus must operate independently of other factors, in fact they could have a strong influence on susceptibility to the pathogen, but in the end the pathogen is the relevant vausal agent.

Next, he explains the major point of disanalogy between contagious diseases and mind viruses, which is that mind viruses are a fundamentally social phenomenon, a person doesn't need to believe a mind virus to be affected by it and we use the term primarily to refer to the aggregate social effect of an idea, whereas for contagious diseases the harm is primarily to the infected individual and thus we think of its effects first and foremost on an individual basis. Obviously, mind viruses can directly affect their believers, and contagious diseases can indirectly harm people that are not infected, but the contrast is evident.

Then, he proceeds to present four case studies of mind viruses. I'll provide a brief summary of each case study, but I strongly recommend reading the article because some of them sound far-fetched or even made-up, but he provides apparently solid evidence to back them up.

1. The Xhosa Cattle-Killing Movement: In 1856, a Xhosa girl claimed that the spirits told her that if the Xhosa killed all their cattle and destroyed their crops, the dead would rise and the European settlers would be expelled. She convinced her uncle, who in turn convinced the paramount chief, who in turn convinced the rest of the Xhosa to do as the spirits allegedly told her. Predictably, the actual result was mass starvation, the depopulation of the region, the survivors having to submit to European authority, and the land being taken by European farmers.
2. Brazilian Soap Operas: According to surprisingly robust results by a group of researchers, the soap operas (telenovelas) produced by the Rede Globo television group were directly responsible for a significant 7% of the decline in fertility in Brazil across the 12 years of census data studied. The apparent mechanism is that the portrayal of female soap opera protagonists changed perceptions of adultery and made low fertility seem more desirable.
3. French Secularism: France had its first modern demographic transition toward significantly lower fertility since 1760, more than a century before other European countries. The most robust explanation for this precocious fertility collapse seems to be French secularization, specifically the loss of moral authority of the Catholic Church, which in turn led to reduced marital fertility.
4. Bradlaugh-Besant: The British demographic transition started a little over a century after the French transition, somewhat earlier than other European countries. This is apparently due to the cultural influence of the debate over the morality of family planning brought forth by the Bradlaugh-Besant trial of 1877. In this case, two activists went to court against the censorship of the second edition of a book about contraceptive techniques, _The Fruits of Philosophy_, due to new "obscene" illustrations. The real aim of the activists was to make the idea of family planning popular, and they succeeded.

The author concludes by briefly presenting some possible prevention or mitigation strategies against mind viruses. A radical solution would be analogous to a quarantine, a strict linguistic or cultural barrier, nut this requires belonging to a pre-existing, cohesive, outsider group. For individuals, the advice is simply to be careful about which ideas to accept, but obviously this doesn't directly affect the spread of mind viruses among others. From a political perspective, there is practically nothing that can be done, since censorship is prone to abuse and undesirable by itself for many reasons.

I generally agreed with the article, "mind viruses" as defined by the author are definitely a real phenomen with real effects. The case studies were interesting and seemed solid, though I'm still somewhat skeptical of the Brazilian soap operas case study despite the claims of robustness.