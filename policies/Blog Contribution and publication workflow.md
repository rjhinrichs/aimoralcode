# AI Moral Code Governance: Blog Contribution and Publication Workflow

## Overview

This governance guide defines how community contributions to the AI Moral Code blog are handled, reviewed, and published. It establishes a clear, accountable path from submission to publication, ensuring that public-facing content reflects the values and editorial quality of the AI Moral Code project.

---

## 1. Contributor Submits a Blog Draft

* Contributors use the **New Blog Contributor Request** form located in GitHub Issues.
* The issue must include:

  * Blog title
  * Author name
  * Tags (optional)
  * Markdown-formatted content
* The issue is automatically labeled `blog` and triggers a GitHub Action to generate a draft.

---

## 2. Notification and Intake

* The core editorial team (currently Ran Hinrichs) receives an **email notification** with the draft content.
* The post is not published to the main blog.
* Instead, it is routed to a **Wiki draft folder** (e.g., `/wiki/blog-pending/`) or GitHub Wiki as a staging area.

---

## 3. Review Process

The editorial team evaluates the draft:

* **Accept** with no edits → Mark as "Ready for Blog"
* **Suggest Revisions** → Comment on GitHub Issue and optionally edit the Wiki draft
* **Reject or Archive** → Label as `rework-needed` or `archived`

Feedback may be provided to the contributor for transparency and improvement.

---

## 4. Approval and Promotion to Canonical Blog

Once approved:

* The editor uses the **Create New Blog Post** issue form
* Re-enters or imports the finalized content
* Submits it as a canonical post authored by the core team

The blog post is saved in:

* `_posts/` directory (Markdown)
* Displays on **aimoralcode.org** homepage

---

## 5. Communication with Contributors

When appropriate:

* Thank-you messages or update notifications are sent via GitHub comment or email
* Option to invite contributor to future involvement
* Option to add to "Friends of the Code" or contributor credits page

---

## 6. Optional Labels for Workflow Automation

* `blog` → Initial trigger for processing
* `wiki-staged` → Moved to wiki draft space
* `ready-for-blog` → Reviewed and approved
* `rework-needed` → Sent back for revisions
* `archived` → Retired with no further action

---

## Future Enhancements (Planned)

* Role-based editorial assignments (team contributors)
* Front-end submission form with preview and validation
* Auto-linking wiki drafts to GitHub Wiki sidebar
* RSS feed segmentation: canonical vs. community posts

---

For questions or to propose revisions to this governance model, contact the project maintainer via GitHub Issues or [aimoralcode.org](https://aimoralcode.org).
