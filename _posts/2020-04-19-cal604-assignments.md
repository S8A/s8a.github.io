---
layout: post
title: "Numerical Calculus assignments"
og_desc: Links to Numerical Calculus assignments made in Jupyter.
og_image: s8a-thumbnail.png
category: projects
---

Today I'm making my Numerical Calculus (CAL604) assignments publicly available. They were created as [Jupyter](https://jupyter.org) notebooks between late January and early February this year, and exported as HTML to publish them here.

I worked in the three assignments with the support of Iván Sánchez, to whom I'm very grateful of course. The documents are in the following links:

{% assign documents = site.documents | reverse %}
{% for document in documents %}
{% assign id = document.image | split: "-" %}
  {% if id[0] == "cal604" %}
  - [{{ document.name }}]({{ document.url | absolute_url }}) – *{{ document.date | date_to_string }}*
    
    {{ document.summary }}
  {% endif %}
{% endfor %}


*[HTML]: Hypertext Markup Language
