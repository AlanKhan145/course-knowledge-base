# 005 - Setting Up the Figma MCP Server

## Section

Converting Figma Designs to Code with Cursor + Figma MCP

## Duration

2:28

## Main Idea

Walks through the actual installation, since the Figma Context MCP is published on npm and
requires no build step. First, generate a Figma API key from the Figma account's Security settings
tab (free, tied to the account). Then run the server via `npx`, passing the Figma API key as a
flag. In Cursor's settings, add a new MCP server: give it a name, choose the connection type — the
host explains the two options are a command-based (local) server or SSE ("Server-Sent Events") for
a remote/hosted server — and pick SSE here. Running the server locally starts it on port `3333`
with the given Figma API key, exposing an SSE endpoint at `http://localhost:3333/sse`; that exact
URL (always ending in `/sse`) is what gets pasted into Cursor's "command" field, which
auto-detects it as an SSE connection. Naming the server (e.g. "Figma") and clicking Add completes
the setup, and Cursor shows a fresh SSE connection being established immediately. By the end of the
lesson, learners should be able to reproduce the full install-to-connected flow themselves.

## Key Topics Mentioned

* Figma API key: created under Figma account → Settings → Security tab; free and account-scoped
* Run command: `npx figma-developer-mcp --figma-api-key YOUR_FIGMA_API_KEY` (also referred to as
  `-figma-api-key` in the transcript)
* Two MCP server connection types in Cursor: command (local) vs. SSE (remote/hosted)
* Local server starts on port 3333, exposing an SSE endpoint at `http://localhost:3333/sse`
* Cursor's "Add new MCP server" flow: name → connection type → paste command/endpoint → Add
* Successful connection is visible immediately as a new SSE connection in Cursor's MCP settings

## Review Questions

1. What is the main purpose of "Setting Up the Figma MCP Server" in the context of Converting
   Figma Designs to Code with Cursor + Figma MCP?
2. Where in Figma's account settings do you generate the API key needed for the MCP server?
3. What is the difference between a command-based (local) MCP server connection and an SSE
   connection in Cursor, and which one does this workflow use?
4. What risk or limitation should you keep in mind about storing a Figma API key in a command run
   locally on your machine?

## Summary

Provides the concrete, reproducible steps to install and connect the Figma Context MCP server:
generating a Figma API key, running it via `npx` on port 3333, and registering its SSE endpoint
inside Cursor's MCP settings. This lesson is one building block toward the section's goal: getting
learners from "I understand MCP conceptually" to "I have a working Figma MCP connection in my own
Cursor install."

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
