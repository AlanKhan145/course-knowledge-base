# 005 - Vibe-Coding Our Design Tokens

## Section

Vibe-Coding Figma Design System Components with Cursor & Figma MCP

## Duration

6:12

## Main Idea

Demonstrates the two-step prompting pattern for turning Figma variables into code: first ask AI
to research the Figma variable structure (pasting the Figma file link) and pay attention to how
collections connect — especially brand → alias → mapped — and summarize that structure in a
markdown file; only then ask it to build the actual design tokens from that documented
understanding, explicitly telling it not to build any components yet. Skipping the markdown
summary step is called out as the common failure mode: without it, AI tends to hardcode raw hex
values directly instead of referencing back through the alias and brand collections, which
silently breaks the design-system structure that was carefully set up in Figma. With the summary
step done first, the generated token files (alias, brand, mapped collections) correctly reference
each other. By the end of the lesson, learners should see how Vibe-Coding Our Design Tokens
connects to every component built afterward, since those components will consume these token
files.

## Key Topics Mentioned

* Two-step prompting: research + markdown summary, then token generation
* Prompting AI to explicitly note the brand ↔ alias ↔ mapped connection points
* Editing the markdown summary and re-running analysis if AI misunderstands something
* Failure mode when skipping the summary step: raw hardcoded hex values instead of variable references
* Verifying generated token files reference alias/brand collections instead of hardcoding values

## Review Questions

1. What is the main purpose of Vibe-Coding Our Design Tokens in the context of Vibe-Coding Figma Design System Components with Cursor & Figma MCP?
2. How would you apply this to a real Figma-to-code workflow?
3. What are the key steps or ideas demonstrated in this lesson?
4. What risk or limitation should you keep in mind when using this in your own work?

## Summary

Demonstrates a two-step prompting pattern — first document the Figma variable structure in a
markdown summary, then generate design tokens from that documented understanding — which keeps
generated tokens referencing alias/brand collections instead of silently hardcoding raw hex
values. This lesson is one building block toward the section's goal: teaching how to connect
Cursor to Figma via the Figma MCP server, feed AI the right design-token context, and vibe-code
initial React design system components that stay wired to Figma variables.
