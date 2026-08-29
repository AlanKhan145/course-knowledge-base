# 046 - Using the Claude Desktop App

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explains how to use the Claude Desktop app as part of a development workflow. The Desktop app offers a visual interface that complements the CLI and provides features not easily available in a terminal environment.

## Learning Objectives

By the end of this lecture, students should understand:

* What the Claude Desktop app provides.
* How it integrates with development workflows.
* How to use it for project planning and review.
* How it handles context and project files.
* When to prefer the Desktop app over the CLI.

## Key Concepts

### What the Claude Desktop App Offers

The Claude Desktop app is a native application for macOS and Windows with:

* A graphical chat interface for Claude.
* Support for MCP server connections.
* File attachment capabilities.
* Project and conversation organization.
* Integration with external tools via MCP.
* Access to Claude's extended context window.

### Using the Desktop App in a Development Context

**Project planning:**
Start a new project discussion in the Desktop app. Use it to draft architecture decisions, discuss trade-offs, and outline implementation approaches before touching the code.

```text
I am building a new authentication system for our Express app.
It needs to support email/password and OAuth providers.
Here is the current user model: [attach file]

Help me design the data model, API routes, and middleware strategy.
```

**Code review from the Desktop:**
Attach code files to a Desktop conversation for review, without needing to have a terminal open.

**Context sharing with colleagues:**
Desktop app conversations can be shared, making it easy for a tech lead to discuss code with Claude and then share the findings with the team.

### MCP in the Desktop App

The Desktop app also supports MCP servers, giving Claude access to:

* GitHub repositories.
* Databases.
* File systems.
* Web search.

This extends the Desktop app's capabilities well beyond simple chat.

**Adding MCP to Desktop:**
MCP servers are configured in the Desktop app settings, similar to the CLI configuration but through the UI.

### Desktop App vs CLI Comparison

| Task | CLI | Desktop App |
|---|---|---|
| Editing files | Yes | Limited |
| Running commands | Yes | Limited |
| Project planning | Possible | Better |
| Visual organization | No | Yes |
| File attachment | Via context | Direct |
| Sharing sessions | No | Yes |
| Team review | No | Yes |

### Practical Use Pattern

Many developers use both:

1. **Desktop app** for planning, design discussions, and document-heavy tasks.
2. **CLI** for active coding, test running, and direct file manipulation.

This two-tool pattern leverages the strengths of each interface.

## Important Notes

* The Claude Desktop app is available for macOS and Windows.
* MCP configuration in the Desktop app is separate from CLI configuration.
* Desktop app features evolve with updates. Check Anthropic's documentation for the current feature set.
* The Desktop app uses the same Claude API as the CLI but presents it through a different interface.

## Why This Lecture Matters

Many students use only the CLI and miss the Desktop app's advantages for certain workflows. This lecture shows that the Desktop app is not a separate product but a complementary tool that fills gaps the CLI cannot easily address.

## Summary

The Claude Desktop app provides a visual interface for Claude that is best suited for project planning, design discussions, code review without a terminal, and team sharing. It supports MCP servers for external tool integration. The Desktop app and CLI complement each other — use the Desktop for planning and the CLI for active coding. Both tools access the same Claude models and capabilities.
