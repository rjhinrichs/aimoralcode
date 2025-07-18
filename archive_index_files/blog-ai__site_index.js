// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve index.html form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', async (req, res) => {
  const { title, content } = req.body;
  const fullContent = decodeURIComponent(content);
  const repo = 'aimoralcode';
  const owner = 'rjhinrichs';

  // Format filename as Jekyll expects: YYYY-MM-DD-title.md
  const date = new Date().toISOString().split('T')[0];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const filename = `${date}-${slug}.md`;
  const filePath = `_posts/${filename}`;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  try {
    const encodedContent = Buffer.from(fullContent).toString('base64');
    const response = await axios.put(apiUrl, {
      message: `Add new blog post: ${filename}`,
      content: encodedContent,
      branch: 'main'
    }, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'aimoralcode-agent'
      }
    });

    res.send(`<p>Post submitted successfully. GitHub API response: ${response.status}</p>`);
  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).send(`<pre>Error: ${JSON.stringify(error.response?.data || error, null, 2)}</pre>`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
