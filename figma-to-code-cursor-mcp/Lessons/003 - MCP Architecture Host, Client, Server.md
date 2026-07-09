# 003 - MCP Architecture: Host, Client, Server

## Section

Converting Figma Designs to Code with Cursor + Figma MCP

## Duration

1:08

## Main Idea

Breaks down MCP's architecture into its core pieces: MCP servers, MCP clients/hosts, local data
sources, and remote services. A host application like Cursor, Windsurf, or another AI-enabled IDE
typically acts as both client and server-consumer at once, letting it talk to MCP servers. The MCP
server is the piece that actually talks to the underlying LLM to either supply context or perform
actions — exposed to the model as "tools." The host gives a deliberately simple example: if an LLM
can't natively compute `1 + 1`, an MCP tool can run that calculation (e.g. via JavaScript) on the
server and return the result. Real-world tools are naturally more complex, but the mental model
holds. By the end of the lesson, learners should be able to name the three architectural roles and
explain what a "tool" is in MCP terms.

## Key Topics Mentioned

* Architecture pieces: MCP servers, MCP clients, local data sources, remote services
* A host (Cursor, Windsurf, other MCP-capable IDEs) acts as both host and client simultaneously
* MCP servers interact with the underlying LLM to supply context or perform actions ("tools")
* Simple example: an LLM can't compute `1 + 1` on its own, but an MCP tool can run that
  calculation server-side and hand back the result
* MCP is conceptually comparable to a REST API, but specifically designed for LLM communication

## Review Questions

1. What is the main purpose of "MCP Architecture" in the context of Converting Figma Designs to
   Code with Cursor + Figma MCP?
2. What are the three core architectural roles in MCP, and how does an IDE like Cursor occupy more
   than one of them at once?
3. In the `1 + 1` example, why does routing the calculation through an MCP tool help, given that
   LLMs are not reliable calculators on their own?
4. What risk or limitation should you keep in mind when comparing MCP to "a REST API for LLMs" —
   where does the analogy break down?

## Summary

Lays out MCP's host/client/server/data-source architecture and clarifies what a "tool" actually
is, using a minimal `1 + 1` calculation example before moving to real tools. This lesson is one
building block toward the section's goal: giving learners the architectural vocabulary needed to
understand what the Figma MCP server will expose in the setup lessons that follow.
