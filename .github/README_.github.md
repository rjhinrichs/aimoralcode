
# 📁 Repository Contribution Directory Overview

This repository includes structured folders to support ethical AI development, community contributions, and publishing workflows.

## .github/ – Contribution & Automation Controls

This folder contains GitHub-specific configuration:

- `ISSUE_TEMPLATE/`  
  Location for all community-submitted issue forms:
  - `new-blogpost.yml` → Default blog submission form  
  - `bug-report.yml`, `feature-request.yml`, etc. remain available under "Choose a different template"

- `config.yml`  
  This file sets `new-blogpost.yml` as the default template when users click **New Issue**, ensuring all contributors are routed through a structured submission interface.

## 📝 Submit a Blog Post

Want to share insights aligned with the AI Moral Code? Submit your blog post using this link:

👉 [Submit a New Blog Post](https://github.com/rjhinrichs/aimoralcode/issues/new?template=new-blogpost.yml)

Your submission will:
- Trigger a GitHub Action that creates a Markdown file in `_posts/`
- Auto-generate the correct frontmatter and filename
- Be published to [https://aimoralcode.org](https://aimoralcode.org) after review and merge

## 📂 _posts/

This is the folder where published blog entries live. Each file follows the standard Jekyll format:
```
_posts/YYYY-MM-DD-title-of-post.md
```

All posts must align with the NRBC ethical framework and will be reviewed for clarity, coherence, and moral consistency.
