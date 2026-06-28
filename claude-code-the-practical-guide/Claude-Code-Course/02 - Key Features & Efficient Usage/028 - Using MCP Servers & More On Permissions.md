# 028 - Using MCP Servers & More On Permissions

## Section

Key Features & Efficient Usage

## Main Idea

This lecture introduces the Model Context Protocol (MCP) and explains how MCP servers extend Claude Code's capabilities by connecting it to external tools and data sources. It also revisits permissions in the context of MCP, since more tool access requires more careful permission management.

## Learning Objectives

By the end of this lecture, students should understand:

* What MCP is and what problem it solves.
* How MCP servers work with Claude Code.
* What kinds of tools can be connected via MCP.
* How to add an MCP server to Claude Code.
* What the permission implications of MCP are.

## Key Concepts

### What Is MCP

MCP stands for Model Context Protocol. It is an open standard that allows Claude to connect to external tools, services, and data sources through a standardized interface.

Without MCP, Claude Code can only work with what is in the local file system and terminal. With MCP, Claude can:

* Query databases.
* Search the web.
* Access GitHub repositories.
* Read from external APIs.
* Control a browser.
* Query documentation systems.
* Interact with project management tools.

### How MCP Servers Work

An MCP server is a small service that:

1. Exposes a set of tools with defined inputs and outputs.
2. Handles the actual communication with an external system.
3. Receives requests from Claude and returns results.

Claude Code communicates with the MCP server, which in turn communicates with the external system.

```
Claude Code <---> MCP Server <---> External System
                                   (GitHub, DB, Browser, etc.)
```

### Common MCP Servers

| MCP Server | What It Provides |
|---|---|
| GitHub | Repository access, PR management, issue tracking |
| Brave Search | Web search results |
| Puppeteer/Playwright | Browser automation and screenshots |
| PostgreSQL | Direct database queries |
| Filesystem | Extended file system access |
| Slack | Messaging integration |
| Linear | Issue tracking |

### Adding an MCP Server

MCP servers are configured in Claude Code's settings:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

After configuration, Claude can use GitHub capabilities directly:

```text
List my open pull requests on the main repo.
Create a GitHub issue for the bug we just found.
```

### MCP and Permissions

MCP servers dramatically expand what Claude can do. This requires more careful permission thinking:

* **Principle of least privilege:** Give each MCP server only the permissions it needs.
* **API key security:** Never commit API keys or tokens to version control.
* **Scope limits:** GitHub tokens should have minimal required scopes.
* **Approval behavior:** For sensitive MCP actions (database writes, PR creation), consider requiring explicit approval.

## Important Notes

* MCP servers must be running for Claude to use them. Some are started automatically; others require manual startup.
* API keys and tokens for MCP servers should be stored in environment variables, not in the settings file directly.
* Not all MCP servers are official Anthropic products. Review third-party MCP servers before using them.
* MCP is an evolving standard. Server availability and capabilities change. Check current documentation.

## Why This Lecture Matters

MCP unlocks a completely different class of Claude Code workflows — ones that reach out to real external systems. Developers who connect Claude to GitHub, databases, or browsers can automate tasks that would be impossible with only local file access. Understanding permissions in this expanded context is equally critical.

## Summary

MCP (Model Context Protocol) is an open standard that lets Claude Code connect to external tools and data sources through MCP servers. Common examples include GitHub, web search, browser automation, and databases. MCP servers are configured in Claude Code settings and dramatically expand what Claude can do. More tool access requires more careful permission management, following the principle of least privilege.
