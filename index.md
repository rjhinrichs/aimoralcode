---
layout: default
title: AI Moral Code Project
---

# Welcome to the AI Moral Code

A living initiative to define, simulate, and operationalize ethical reasoning in artificial intelligence systems. Here we document our tools, blog reflections, case studies, and evolving architecture—anchored in canonical moral values and real-world application.

---

## 🌟 Spotlight: Back to the Beginning

### [Back to the Beginning: Dewey, Malik, and the Rebirth of AI Morality](/blog-ai/2025-07-29-back-to-the-beginning-dewey-malik-ai-morality)
*July 29, 2025*

Explore how John Dewey’s pragmatism, Kenan Malik’s historical insights, and the AI Moral Code architecture converge in a shared vision of moral evolution. This post reflects on ethical origins, survivor metaphors, and the power of pattern recognition in shaping our collective AI future.

---

## 📝 Recent Blog Posts

{% assign recent_posts = site.posts | sort: 'date' | reverse | slice: 0, 3 %}
{% for post in recent_posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
  <span style="font-size: 0.9em; color: gray;">
  – {{ post.date | date: "%B %d, %Y" }}</span>
{% endfor %}
