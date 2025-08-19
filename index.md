---
layout: page
title: "The AI Moral Code"
description: "A Publishing Platform for Evaluating and Debating AI Ethics"
---

## 🔆 Spotlight: Toward a Conscious Partnership with AI
[**Toward a Conscious Partnership with AI**](/blog-ai/2025-08-18-conscious-partnership-ai)

*August 18, 2025*

This post explores how human rational interpretation and AI’s statistical pattern recognition can form a conscious partnership. By combining rigorous analysis with intuitive judgment, the AI Moral Code evolves toward a sustainable model of shared ethical intelligence.

---

<section style="background-color: #f9f9f9; padding: 1rem; border-left: 4px solid #555; margin-bottom: 2rem;">
  <h3>Latest Breakthrough: AIMC as a Gregorian Tool</h3>
  <p>
    The AI Moral Code has been reframed as a <strong>Gregorian Moral Tool</strong>—a culturally inherited scaffold for synthetic moral infrastructure, inspired by Daniel Dennett’s evolutionary cognitive model.
  </p>
  <p>
    {% assign gregorian_post = site.posts | where: "title", "The AI Moral Code as a Gregorian Tool" | first %}
    {% if gregorian_post %}
      <a href="{{ gregorian_post.url | relative_url }}" class="button">📘 Read Full Post</a>
    {% else %}
      <span style="color: red;">Blog post not found. Please check title or publish date.</span>
    {% endif %}
  </p>
</section>

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
  <h3>Download the White Papers</h3>
  <p>
    <a href="/AI_Moral_Code_White_Paper.pdf" class="button" target="_blank" rel="noopener noreferrer">
      📄 Download the Full AI Moral Code White Paper (PDF)
    </a>
  </p>
  <p>
    <a href="/Deriving_the_12_Canonical_Values_of_the_AI_Moral_Code_Update_1.0.pdf" class="button" target="_blank" rel="noopener noreferrer">
      📄 Download the AI Moral Code ICAD Applications & Challenge (PDF)
    </a>
  </p>
</section>

<section>
  <h3>Recent Blog Posts</h3>
  <ul>
<li>
  <a href="/2025/07/17/aimc-gregorian-tool-discovery.html">The AI Moral Code as a Gregorian Tool</a>
  <span style="font-size: 0.9em; color: gray;"> – July 17, 2025</span>
</li>

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
  <p>
    Or, visit our full <a href="/contribute">Contribution Page</a> for detailed instructions and FAQs.
  </p>
</section>

<section>
  <h3>Governance for Submitting a Contributor Blog Post</h3>
  <p>
    This is a complete and functional governance process for your blog contribution and our publication process. We will intake and label your blog. It will pass through editorial stages from submission to canonical post. It will handle email notifications and contributor communication. The objective is to have a managed blog process driving for AI Moral Clarity, created by a field of experts:
    <a href="/policies/governance" class="nav-link">Governance</a>
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
