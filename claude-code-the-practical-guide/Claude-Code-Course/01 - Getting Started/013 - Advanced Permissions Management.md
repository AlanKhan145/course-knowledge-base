# 013 - Advanced Permissions Management

## Section

Getting Started

## Main Idea

This lecture explains how to control what Claude Code is and is not allowed to do. Because Claude Code can run commands and edit files, permissions management is critical for safety. Students learn how to configure a permission model that allows productive work without giving Claude unlimited access.

## Learning Objectives

By the end of this lecture, students should understand:

* Why permissions management matters for safety.
* What kinds of actions Claude Code can perform.
* How to use allow lists and deny lists.
* How to restrict dangerous commands.
* What best practices look like for permission configuration.

## Key Concepts

### Why Permissions Matter

Claude Code is not just a text assistant. It can:

* Read and write files.
* Delete files.
* Run shell commands.
* Install packages.
* Execute scripts.
* Access the network.
* Interact with version control.

Without permission controls, a mistaken or misunderstood instruction could have serious consequences.

### Permission Configuration Structure

Permissions are configured in the Claude Code settings file:

```json
{
  "permissions": {
    "allow": [
      "read",
      "write",
      "bash(git:*)",
      "bash(npm run:*)",
      "bash(bun:*)"
    ],
    "deny": [
      "bash(rm -rf:*)",
      "bash(curl:*)",
      "bash(wget:*)"
    ]
  }
}
```

### Allow List

Define what Claude Code can do without asking for confirmation. Good candidates for auto-allow:

* File reads
* Git operations (status, diff, log, add, commit)
* Running test commands
* Running lint commands
* Package manager operations (install, run)

### Deny List

Define what Claude Code is never allowed to do, even if requested:

* `rm -rf` (recursive force delete)
* Network requests with curl/wget (if you want to prevent exfiltration)
* `sudo` commands
* Dangerous git operations (force push, reset --hard)

### Interactive Permission Prompts

For actions not on either list, Claude Code will ask before proceeding. This is the default behavior for anything not explicitly allowed or denied.

### Project vs Global Permissions

* **Global permissions** apply to all projects.
* **Project permissions** apply only to that specific project and override global settings.

Use stricter global defaults and relax permissions at the project level only when needed.

## Important Notes

* Never allow `rm -rf` automatically — always require confirmation for destructive operations.
* Permissions granted to Claude Code apply to whatever Claude does within that session.
* Always use version control before running sessions with broad permissions.
* Review the deny list periodically. Commands added to the deny list should reflect your actual risk profile.
* When in doubt, require confirmation rather than auto-allowing.

## Best Practices

1. Start with strict permissions and loosen only when needed.
2. Always allow Git operations for easy rollback.
3. Always deny destructive file system commands.
4. Review permission prompts before accepting them in session.
5. Use project-level settings to allow project-specific commands without affecting global security.

## Why This Lecture Matters

Permission misconfiguration is one of the most common causes of accidents when using AI coding assistants. Students who understand how to configure permissions properly can use Claude Code aggressively for productivity while keeping their systems safe.

## Summary

Claude Code can perform powerful actions including file edits, command execution, and network access. Permissions management uses allow lists and deny lists to control what Claude can do automatically versus what requires confirmation. Best practice is to start strict, always allow git operations, always deny destructive commands, and use project-level settings for project-specific relaxations.
