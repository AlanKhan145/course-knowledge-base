# 002 - Enabling the Figma Dev Mode MCP Server

## Section

From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

## Duration

0:47

## Main Idea

Before any AI tool can read a Figma file, the file itself has to expose an MCP server. In Figma's
menu, "Enable Dev Mode MCP Server" must be checked, or none of the downstream tooling (Cursor,
Claude Code) will be able to pull layout, tokens, or images from the design. The instructor also
points out that the shared Figma file (linked in the video description) has been updated since the
previous video specifically to fix layer names — nearly every layer is now explicitly named, which
matters because AI tools use those names to understand structure.

## Key Topics Mentioned

* Figma menu > "Enable Dev Mode MCP Server" checkbox
* Without this enabled, MCP clients cannot connect at all
* Updated Figma file (linked in the description) with cleaned-up, explicit layer names
* Why consistent layer naming matters for AI-driven code generation

## Review Questions

1. What is the main purpose of enabling the Dev Mode MCP Server in the context of this workflow?
2. How would you apply this to a real Figma-to-code project you're starting from scratch?
3. What are the key steps demonstrated in this lesson?
4. What risk or limitation comes from skipping proper layer naming before generating code?

## Summary

Covers the two prerequisites for a working Figma-to-code pipeline: enabling the Dev Mode MCP
Server checkbox in Figma, and making sure every layer in the file has a clear, descriptive name.
This lesson is one building block toward the section's goal of accurately translating a Figma
design into code — nothing downstream works without this being set up correctly first.
