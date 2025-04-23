---
layout: post
title: "Numerical Calculus assignments"
description: Links to Numerical Calculus assignments made in Jupyter.
category: projects
---

Today I'm making my Numerical Calculus (CAL604) assignments publicly available. They were created as [Jupyter](https://jupyter.org) notebooks between late January and early February this year, and exported as HTML to publish them here.

I worked in the three assignments with the support of Iván Sánchez, to whom I'm very grateful of course. The notebooks are in the following links:

{% assign mathematics = site.mathematics | reverse %}
{% for notebook in mathematics %}
  {% if notebook.image contains "cal604" %}
  - [{{ notebook.name }}]({{ notebook.url | relative_url }}) -- *{{ notebook.date | date_to_string }}*

    {{ notebook.summary }}
  {% endif %}
{% endfor %}


*[HTML]: Hypertext Markup Language
