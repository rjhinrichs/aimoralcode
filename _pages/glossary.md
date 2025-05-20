---
title: Glossary
layout: page
permalink: /glossary/
---

# Canonical Ethical Values of the AI Moral Code

{%- for entry in site.data.glossary -%}
### {{ entry.canonical_value }}

**Synonyms:**  
{{ entry.synonyms | join: ", " }}

**Opposing Concepts:**  
{{ entry.opposing_concepts | join: ", " }}

**Definition:**  
{{ entry.definition }}

**Governance Function:**  
{{ entry.governance_function }}

**NRBC Alignment:**  
{{ entry.nrbc_alignment }}

---

{%- endfor -%}

---

*This glossary is canonical. Suggested extensions must be submitted via [Glossary Discussions](https://github.com/rjhinrichs/aimoralcode/discussions/categories/glossary-extensions).*
