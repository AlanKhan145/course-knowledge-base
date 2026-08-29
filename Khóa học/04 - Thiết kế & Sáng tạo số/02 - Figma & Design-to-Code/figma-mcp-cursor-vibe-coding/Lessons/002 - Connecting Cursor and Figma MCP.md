# 002 - Connecting Cursor and Figma MCP

## Section

Vibe-Coding Figma Design System Components with Cursor & Figma MCP

## Duration

2:46

## Main Idea

Walks through wiring Cursor to Figma using the Figma MCP (Model Context Protocol) server so the
two tools can exchange design system components, design tokens, and variables. In Cursor, this
starts under Settings > Tools & MCP; the Figma MCP Catalog lists every AI tool Figma's MCP can
connect to (VS Code, Cursor, Claude Code, Claude, Windsurf, etc.). Clicking "Add MCP to Cursor"
opens Cursor's MCP install dialog, after which the server must be installed, connected, and then
authorized against a Figma account via an external web page. A callout warns against being logged
into multiple Figma accounts on desktop, since that can cause authorization issues — stick to one
primary account. By the end of the lesson, learners should see how Connecting Cursor and Figma
MCP connects to everything downstream: no token or component pull works until this authenticated
MCP link exists.

## Key Topics Mentioned

* Cursor Settings > Tools & MCP
* Figma MCP Catalog (supported clients: VS Code, Cursor, Claude Code, Claude, Windsurf, etc.)
* Install → Connect → external-page authorization flow
* Avoiding multi-account Figma logins to prevent connection issues
* Confirming the MCP server shows as connected and authenticated in Cursor

## Review Questions

1. What is the main purpose of Connecting Cursor and Figma MCP in the context of Vibe-Coding Figma Design System Components with Cursor & Figma MCP?
2. How would you apply this to a real Figma-to-code workflow?
3. What are the key steps or ideas demonstrated in this lesson?
4. What risk or limitation should you keep in mind when using this in your own work?

## Summary

Walks through wiring Cursor to Figma using the Figma MCP server: installing the MCP tool from the
Figma MCP Catalog, connecting it inside Cursor, and authorizing it against a single Figma account
through an external authorization page. This lesson is one building block toward the section's
goal: teaching how to connect Cursor to Figma via the Figma MCP server, feed AI the right
design-token context, and vibe-code initial React design system components that stay wired to
Figma variables.
