---
layout: page
title: "The AI Moral Code"
description: "A Publishing Platform for Evaluating and Debating AI Ethics"
---

<section style="display: flex; align-items: center; justify-content: space-between;">
  <div>
    <h1 style="margin-bottom: 0.5rem;">The AI Moral Code</h1>
    <h2 style="font-weight: normal;">A Publishing Platform for Ethical AI Evaluation and Engagement</h2>
    <p><strong>Author:</strong> Randy J. Hinrichs, Professor of Practice, Norwich University</p>
    <p><strong>Contact:</strong> <a href="mailto:rhinrich@norwich.edu">rhinrich@norwich.edu</a></p>
  </div>
</section>

<section>
  <h3>What is This Site?</h3>
  <p>
    This website is a publishing and evaluation environment for exploring, debating, and applying the <strong>AI Moral Code</strong>. Whether you are an academic, engineer, policy maker, or student, you can:
  </p>
  <ul>
    <li>Read and respond to blog posts using the AI Moral Code as a lens for analysis</li>
    <li>Submit your own content to test how values interact with real-world AI research</li>
    <li>Apply the NRBC framework to evaluate papers, technologies, or policies</li>
    <li>Track how value alignment changes over time across sectors</li>
  </ul>
</section>

<section>
  <h3>Download White Paper</h3>
  <p>
    <a href="/AI_Moral_Code_White_Paper.pdf" class="button" target="_blank" rel="noopener noreferrer">
      📄 Download the Full AI Moral Code White Paper (PDF)
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
  <h3>Submit a Blog Post</h3>
  <p>
    Want to contribute? You can submit a blog post using the AI Moral Code template and it will be auto-published to our platform:
    <a href="https://github.com/rjhinrichs/aimoralcode/issues/new?template=new-blogpost.yml">Submit a New Blog Post</a>
  </p>
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
