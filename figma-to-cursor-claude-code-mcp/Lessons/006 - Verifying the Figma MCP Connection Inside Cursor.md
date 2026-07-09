# 006 - Verifying the Figma MCP Connection Inside Cursor

## Section

From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

## Duration

1:23

## Main Idea

With the Nuxt.js dev server running successfully (`npm run dev`, default Nuxt welcome screen on
localhost), attention shifts to confirming Cursor can actually see the Figma MCP server. Under
Cursor's chat settings, in Tools & Integrations, the Figma MCP entry should be listed (alongside
others like Supabase, which may or may not be used later). The instructor notes he ran into
Windows 11-specific trouble getting the MCP connection to work reliably with Figma and Claude
Code, and for that reason chooses to run this part of the workflow through Cursor's chat/agent
instead of the Claude Code terminal.

## Key Topics Mentioned

* `npm run dev` and confirming the Nuxt welcome screen renders
* Cursor Chat Settings > Tools & Integrations
* Confirming the Figma MCP entry is present and connected
* Supabase MCP also listed (undecided whether it will be used)
* Windows 11-specific reliability issues connecting Figma MCP through Claude Code
* Decision to use Cursor's agent chat (Claude 4 Sonnet) instead of the Claude Code terminal for
  the Figma-to-code steps

## Review Questions

1. What is the main purpose of verifying the MCP connection before prompting for UI generation?
2. How would you apply this troubleshooting decision if you hit similar OS-specific MCP issues?
3. What are the key steps shown for confirming an MCP tool is available in Cursor?
4. What risk is there in assuming an MCP tool is connected without checking first?

## Summary

Confirms the Nuxt.js dev server runs correctly, then walks through checking that the Figma MCP
server is actually available inside Cursor's tool settings — plus the practical, platform-specific
reason (Windows 11 reliability) for doing the Figma-driven generation work in Cursor's chat agent
rather than Claude Code. This lesson is one building block toward the section's goal of a verified,
working MCP link before generating any UI.
