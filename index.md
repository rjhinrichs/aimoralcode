---
layout: default
title: "The AI Moral Code"
description: "A Methodological and Empirical Approach to Ethical AI"
---

<section>
  <h1 style="margin-bottom: 0.5rem;">The AI Moral Code</h1>
  <h2 style="font-weight: normal;">A Methodological and Empirical Approach to Ethical AI</h2>
  <p><strong>Author:</strong> Randy J. Hinrichs, Professor of Practice, Norwich University</p>
  <p><strong>Contact:</strong> <a href="mailto:rhinrich@norwich.edu">rhinrich@norwich.edu</a></p>
</section>

<section>
  <h3>Abstract</h3>
  <p>
    This paper presents a methodological and empirical framework for the AI Moral Code, based on the Normative, Regulatory, Behavioral, and Conceptual (NRBC) architecture. Analyzing 291 AI ethics documents (2006–2025), it identifies high-frequency values and forecasts emerging trends. The framework translates ethical priorities into system design and governance, offering evidence-based insights and supporting value alignment across sectors such as healthcare, education, justice, and autonomous vehicle technologies.
  </p>
</section>

<section>
  <h3>Download White Paper</h3>
  <p>
    <a href="/AI_Moral_Code_White_Paper.pdf" class="button" target="_blank" rel="noopener noreferrer">
      📄 Download Full AI Moral Code White Paper (PDF)
    </a>
  </p>
</section>

<section>
  <h3>Recent Blog Posts</h3>
  <ul>
    {% assign recent_posts = site.posts | sort: 'date' | reverse | slice: 0, 3 %}
    {% for post in recent_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span style="font-size: 0.9em; color: gray;">
          – {{ post.date | date: "%B %d, %Y" }}
        </span>
      </li>
    {% endfor %}
    <li><a href="/blog.html">View All Posts</a></li>
  </ul>
</section>

<section>
  <h3>Access QR Code</h3>
  <img src="/assets/AI_Moral_Code_QR.png" alt="QR Code to AI Moral Code" width="200" />
</section>

<section>
  <h3>NRBC Architecture Diagram</h3>
  <img 
    src="/assets/AI_Moral_Agent_Architecture.png" 
    alt="Diagram of the Normative, Regulatory, Behavioral, and Conceptual architecture for AI Moral Agents" 
    style="max-width: 100%; height: auto;" 
  />
  <p style="font-size: 0.9em; color: #555;">
    This diagram illustrates the NRBC Architecture for ethical AI agents. It establishes a visual taxonomy linking moral principles, compliance layers, social behaviors, and system-level development practices. Published here as a timestamped IP declaration.
  </p>
</section>
