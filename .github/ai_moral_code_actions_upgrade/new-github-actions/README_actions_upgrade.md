# GitHub Actions Upgrade — AI Moral Code Blog Pipeline

This upgrade introduces full end-to-end automation with preview and admin approval.

## New Workflows
1. **issue-to-post.yml**  
   - **Trigger:** Issue labeled **publish-post**  
   - **Action:** 
     - Parses issue body (using the `new-blogpost.yml` template fields)
     - Generates a properly formatted Markdown file in `_posts/`
     - Pushes to a new branch `blogpost-{slug}`
     - Opens a **draft Pull Request** for review

2. **admin-automerge.yml**  
   - **Trigger:** Pull Request labeled **admin-approved**  
   - **Action:** Uses `gh` to merge the PR automatically, respecting branch-protection settings.

## Workflow
1. Contributor submits issue with the *New Blogpost* template.  
2. After review, **add the label `publish-post`** to run the conversion.  
3. CI opens a **draft PR** for preview on the site.  
4. Admin reviews Markdown, suggests edits, and when satisfied, **adds label `admin-approved`**.  
5. The PR auto‑merges, Netlify (or GitHub Pages) rebuilds, and the post is live.

## Required Secrets
- `GITHUB_TOKEN` (provided by default)  
- Optional: Add `GH_TOKEN` if using a fine‑grained token for `gh pr merge`.

Place the two YAML files in **.github/workflows/** and commit to `main`.