# 047 - Advanced Claude Code Desktop Features

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explores the more advanced features of the Claude Desktop app: deeper project interaction, sophisticated context management, productivity workflows, and configuration options that go beyond basic chat usage.

## Learning Objectives

By the end of this lecture, students should understand:

* How to use project workspaces in the Desktop app.
* How to manage context across Desktop sessions.
* What advanced MCP features the Desktop app supports.
* How to integrate Desktop workflows into a team process.
* What configuration options improve Desktop app productivity.

## Key Concepts

### Projects in the Claude Desktop App

The Desktop app supports the concept of projects — organized spaces where:

* Multiple conversations are grouped by project.
* Files relevant to the project can be pinned or referenced consistently.
* Project-specific instructions (like `CLAUDE.md` equivalents) can be maintained.
* Context is more persistent across multiple sessions.

**Creating a project:**
In the Desktop app, create a new project for each significant codebase or work initiative. Keep conversations organized within the project.

### Context Management in Desktop

The Desktop app allows finer control over context:

* **Pinned context:** Keep important files or documents persistently available in every conversation within a project.
* **File attachments:** Attach files directly in the conversation.
* **Selective context:** Choose which previous conversations are included as background.

### Advanced MCP Usage in Desktop

With MCP configured in the Desktop app, Claude can:

* Query connected databases and show results in the conversation.
* Browse connected GitHub repositories and reference code inline.
* Search the web and incorporate results into analysis.
* Interact with project management tools.

**Example: Combined MCP workflow in Desktop:**

```text
Check the open issues in our GitHub repo labeled "security".
For each issue, read the relevant code file.
Summarize the risk level of each issue and suggest priority order.
```

### Keyboard Shortcuts and Productivity Features

The Desktop app provides:

* Keyboard shortcuts for quick navigation.
* Conversation history search.
* Code block copying with one click.
* Markdown rendering for formatted output.
* Dark/light mode.

### Team Collaboration via Desktop

**Sharing findings:**
Summarize Claude's analysis from a Desktop conversation and share the summary with the team without exposing the full context.

**Template conversations:**
Create template prompts in a project that team members can reuse for common tasks.

### Desktop vs Web

| Feature | Desktop App | Claude Code Web |
|---|---|---|
| Project organization | Yes | Limited |
| Native installation | Yes | No |
| MCP support | Yes | Evolving |
| Offline capability | Partial | No |
| File attachment | Yes | Yes |

## Important Notes

* Desktop app features vary by platform (macOS may have more native integration than Windows).
* Advanced features like project workspaces may require specific subscription tiers.
* Desktop updates are separate from CLI updates. Keep both up to date.
* Check Anthropic's release notes for new Desktop features as they are added frequently.

## Why This Lecture Matters

Basic Desktop app usage is covered in the previous lecture. This lecture gives students the advanced features that make the Desktop app a genuine productivity tool for teams and complex projects, not just an alternative interface for simple chat.

## Summary

Advanced Desktop app features include project workspaces for organized multi-session work, pinned context for persistent project knowledge, advanced MCP workflows, and team collaboration patterns. The Desktop app's project organization, combined with MCP tool access, enables sophisticated research and analysis workflows that complement the CLI's coding strengths.
