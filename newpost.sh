#!/bin/bash

# Prompt for blog title
read -p "Enter blog post title: " title

# Format the filename
slug=$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g')
date=$(date +%Y-%m-%d)
filename="_posts/${date}-${slug}.md"

# Copy the template
cp _posts/post-template.md "$filename"

# Replace placeholders in the new file
sed -i "s/title: \"Your Blog Title Here\"/title: \"$title\"/" "$filename"
sed -i "s/date: YYYY-MM-DD/date: $date/" "$filename"

# Output confirmation
echo "New post created: $filename"

# Optional: Open in editor (uncomment your preferred editor)
# code "$filename"        # VS Code
# nano "$filename"        # Nano
# notepad "$filename"     # Windows Notepad
