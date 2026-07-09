# 011 - Exporting and Swapping in the Real Logo

## Section

From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

## Duration

2:53

## Main Idea

Back in Figma, the instructor selects the actual logo layer and exports it as an SVG. Rather than
guessing where framework conventions expect static assets to live, he asks Claude directly —
explicitly telling it not to make any code changes, just answer the question — and learns that
Nuxt.js expects assets like a logo in the `public` folder at the project root. He creates that
folder, drops in `logo.svg` (all lowercase), and then prompts the agent to replace the
AI-invented logo in the navbar with the real one at `/logo.svg`. The result renders correctly,
though it isn't clickable yet — a known follow-up for later.

## Key Topics Mentioned

* Exporting the logo layer from Figma as SVG
* Asking the AI a framework-convention question with an explicit "don't touch the code" constraint
* Nuxt.js convention: static assets like logos live in the `public` folder at project root
* Naming convention used: `logo.svg`, all lowercase
* Prompt: "Replace the existing logo in the navbar with the logo inside public/logo.svg"
* Known gap left for later: the logo isn't clickable yet

## Review Questions

1. What is the main purpose of asking the AI a question without letting it touch the code first?
2. How would you apply this "ask before you act" pattern to other framework-specific decisions?
3. What are the concrete steps from exporting the SVG to it rendering correctly in the navbar?
4. What risk is there in guessing asset locations instead of confirming framework conventions?

## Summary

Covers exporting the real logo as an SVG from Figma, confirming where Nuxt.js expects static
assets via a code-free question to the AI, and then prompting the agent to swap the placeholder
logo for the real one in the navbar. This lesson is one building block toward the section's goal
of replacing every AI-guessed asset with the actual design source of truth.
