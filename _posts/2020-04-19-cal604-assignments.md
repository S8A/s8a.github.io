---
layout: post
title: "Numerical Calculus assignments"
og_desc: Links to CAL604 assignments made in Jupyter.
og_image: s8a-thumbnail.png
category: projects
---

Today I'm making my Numerical Calculus (CAL604) assignments publicly available. They were created as [Jupyter](https://jupyter.org) notebooks between late January and early February this year, and exported as HTML to publish them here.

I worked in the three assignments with the support of Iván Sánchez, to whom I'm very grateful of course. The documents are in the following links:

{%- assign documents = site.data.documents | reverse -%}
{%- for document in documents -%}
{%- assign id = document.id | split: "-" -%}
{% if id[0] == "cal604" %}
- [**{{ document.name }}**]({{ document.id | prepend: "/" }}) - *{{ document.date | date_to_string }}*
  
  {{ document.summary }}
{% endif %}
{%- endfor -%}
