#!/bin/bash

# Prompt for blog post title
read -p "Enter blog post title: " title

# Generate slug and filename
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')
date=$(date +%Y-%m-%d)
filename="_posts/${date}-${slug}.md"

# Copy template
cp _posts/post-template.md "$filename"

# Replace placeholders
sed -i "s/title: \"Your Blog Title Here\"/title: \"$title\"/" "$filename"
sed -i "s/date: YYYY-MM-DD/date: $date/" "$filename"

# Confirm
echo "✅ New post created: $filename"

# Git add, commit, push
git add "$filename"
git commit -m "Add new blog post: $title"
git push

# Optionally open in Notepad
# notepad "$filename"
