# Claude Code - The Practical Guide

Comprehensive notes from a practical Claude Code course. Covers everything from basic setup to advanced agentic workflows, scheduled tasks, and beyond-CLI usage.

## Course Info

- **Instructor:** Academind by Maximilian Schwarzmüller
- **Duration:** ~3 hours | 54 lectures
- **Level:** Beginner to intermediate developers

## Course Structure

### Section 1 — Getting Started (Lectures 001–018)
- Installation, configuration, terminal environments
- Sessions, context, and context window management
- Permissions, Docker sandboxing, native sandboxing
- Version control as a safety net, commands cheat sheet

### Section 2 — Key Features & Efficient Usage (Lectures 019–045)
- Prompt and context engineering, specs
- `CLAUDE.md` project memory files
- Plan Mode for safer implementation
- Built-in tools (Read, Grep, Edit, Bash, Glob)
- MCP servers for external tool integration
- Subagents, skills, and custom commands
- Hooks for automated workflows
- Plugins and extension
- Browser feedback loops and screenshot-based prompting
- Automated test feedback loops
- Running Claude in iterative agent loops
- Claude Code Web

### Section 3 — Beyond Local CLI Usage (Lectures 046–054)
- Claude Desktop app (basic and advanced)
- Mobile task dispatch
- Remote control and CI/CD integration
- Telegram channel integration
- Non-coding use cases
- Scheduled autonomous tasks

## Key Concepts

| Concept | Description |
|---|---|
| Context Engineering | Assembling the right files, constraints, and examples for Claude |
| `CLAUDE.md` | Project instruction file — Claude's persistent project memory |
| Plan Mode | Create a plan before implementation to prevent wrong-direction edits |
| MCP Server | Connect Claude to external tools (GitHub, databases, browsers) |
| Subagent | Specialized Claude instance for a specific role |
| Skill | Reusable multi-step workflow definition |
| Hook | Automated action triggered by Claude Code events |
| Feedback Loop | Claude makes changes → gets feedback → iterates until goal is met |
