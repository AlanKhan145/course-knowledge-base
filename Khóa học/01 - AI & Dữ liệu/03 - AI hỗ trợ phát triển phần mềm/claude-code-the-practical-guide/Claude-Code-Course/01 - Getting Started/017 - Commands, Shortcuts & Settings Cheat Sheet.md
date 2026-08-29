# 017 - Commands, Shortcuts & Settings Cheat Sheet

## Section

Getting Started

## Main Idea

This lecture provides a reference for important Claude Code commands, keyboard shortcuts, and settings. Having a cheat sheet helps students work faster and avoid having to search for syntax or commands during active development sessions.

## Learning Objectives

By the end of this lecture, students should understand:

* The most important Claude Code slash commands.
* Useful keyboard shortcuts in the Claude Code interface.
* Key settings and where to find them.
* How to get help without leaving the session.

## Key Concepts

### Session Commands (Slash Commands)

These commands are typed directly inside an active Claude Code session:

| Command | What It Does |
|---|---|
| `/help` | Show all available commands |
| `/config` | View or change configuration |
| `/model` | Change the active Claude model |
| `/clear` | Clear the current conversation |
| `/compact` | Manually compact old context |
| `/status` | Show session and context information |
| `/exit` | Exit Claude Code |
| `/fast` | Toggle Fast Mode (Opus with speed optimization) |
| `/memory` | View or manage auto memory |
| `/plan` | Enter or exit Plan Mode |

### Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+C` | Cancel current action or exit |
| `Ctrl+L` | Clear the terminal screen |
| `Up arrow` | Navigate to previous message in input |
| `Tab` | Autocomplete file paths or commands |
| `Ctrl+Z` | Suspend Claude Code (bring back with `fg`) |

### Starting Claude Code

```bash
# Start in current directory
claude

# Start with a one-shot prompt (no interactive session)
claude -p "explain this project structure"

# Start with a specific file loaded
claude --file src/main.ts

# Start in headless/non-interactive mode
claude --no-interactive
```

### Configuration Locations

| Level | File |
|---|---|
| Global | `~/.claude/settings.json` |
| Project | `.claude/settings.json` |
| Local overrides | `.claude/settings.local.json` |
| Project instructions | `CLAUDE.md` |

### Useful Git Commands for Claude Code Workflows

```bash
# Checkpoint before a Claude session
git add -A && git commit -m "checkpoint"

# Review all changes Claude made
git diff

# Undo all Claude changes
git checkout .

# Create a branch for Claude to work on
git checkout -b feature/claude-implementation
```

## Important Notes

* Slash commands only work inside an interactive Claude Code session.
* Keyboard shortcuts may vary slightly by terminal environment.
* The `/plan` command enters Plan Mode, which is covered in detail in Section 2.
* Settings changes made with `/config` persist in the settings files.
* The cheat sheet is a reference — students do not need to memorize everything.

## Why This Lecture Matters

Knowing commands and shortcuts reduces friction in daily Claude Code usage. Students who know these commands will spend less time searching for syntax and more time getting work done. This lecture serves as a practical reference to return to during the course.

## Summary

This lecture provides a cheat sheet of the most important Claude Code commands, keyboard shortcuts, configuration locations, and Git workflows for Claude Code use. Keep this reference handy during the course and during real development sessions. The most essential commands are `/help`, `/config`, `/model`, `/plan`, and `/clear`.
