# 008 - Configuring Claude Code

## Section

Getting Started

## Main Idea

This lecture explains how to configure Claude Code for efficient daily use. Configuration affects default behavior, permissions, model selection, and project-specific preferences. A well-configured Claude Code setup reduces friction and makes AI-assisted development safer and more consistent.

## Learning Objectives

By the end of this lecture, students should understand:

* Where Claude Code configuration is stored.
* What the main configuration areas are.
* How to configure permissions.
* How to configure model preferences.
* How to set project-specific instructions.

## Key Concepts

### Configuration Files

Claude Code uses configuration files at multiple levels:

* **Global settings:** Applied to all Claude Code sessions across all projects. Stored in `~/.claude/settings.json`.
* **Project settings:** Applied only to the current project. Stored in `.claude/settings.json` in the project directory.
* **Local project settings:** For personal overrides not shared with the team. Stored in `.claude/settings.local.json`.

### Main Configuration Areas

**Default model:**
You can specify which Claude model Claude Code should use by default.

**Permissions:**
Control which tools Claude can use without asking for permission each time. For example, you can allow read-only file operations automatically but require confirmation for file writes or command execution.

**Auto-approval:**
Certain low-risk actions can be automatically approved so Claude Code does not interrupt the workflow for every minor action.

**Custom instructions:**
You can add instructions that Claude follows in every session, similar to a system prompt.

### The `/config` Command

Inside a Claude Code session, you can use the `/config` command to view and change configuration settings interactively.

### Permission Configuration Example

```json
{
  "permissions": {
    "allow": [
      "read",
      "write",
      "bash(git:*)",
      "bash(npm:*)"
    ],
    "deny": [
      "bash(rm:*)"
    ]
  }
}
```

## Important Notes

* Always review permission settings carefully. Broad permissions increase risk.
* Project-level settings override global settings.
* Local settings override project settings.
* Changes to configuration take effect in new sessions.
* The `CLAUDE.md` file is separate from settings and covers project-specific instructions rather than tool behavior.

## Why This Lecture Matters

Without proper configuration, Claude Code may either ask for permission too often (slowing you down) or have too many permissions (increasing risk). Good configuration finds the right balance for your workflow and project.

## Summary

Claude Code configuration is stored at global, project, and local levels. The main areas to configure are model preferences, permissions, and auto-approval behavior. The `/config` command allows interactive configuration inside a session. Proper configuration balances efficiency and safety in the Claude Code workflow.
