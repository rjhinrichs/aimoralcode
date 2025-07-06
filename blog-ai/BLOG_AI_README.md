# Blog Trigger API

This small Express server enables secure blog post creation via GitHub Actions.

## Setup

1. Copy `.env.example` to `.env` and insert your GitHub PAT  
2. Run `npm install`  
3. Start server: `npm start`  
4. POST to `http://localhost:3000/create-blog` with JSON body:

```json
{
  "title": "...",
  "date": "...",
  "author": "...",
  "tags": "...",
  "summary": "...",
  "content": "..."
}
