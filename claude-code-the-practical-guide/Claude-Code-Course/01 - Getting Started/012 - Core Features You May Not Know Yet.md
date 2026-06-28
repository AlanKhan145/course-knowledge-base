# 012 - Core Features You May Not Know Yet

## Section

Getting Started

## Main Idea

This lecture introduces useful Claude Code features that many beginners discover late or miss entirely. These features are not hidden, but they are not obvious from basic usage. Knowing them early helps students get more value from Claude Code from the start.

## Learning Objectives

By the end of this lecture, students should understand:

* What lesser-known Claude Code features exist.
* How to use file inspection effectively.
* How to use context management features.
* How to leverage project-aware prompting.
* What built-in commands are available.

## Key Concepts

### File Inspection Without Editing

You can ask Claude to read and understand files without making any changes:

```text
Read the file src/auth/auth.service.ts and explain what it does.
Do not make any changes.
```

This is useful before asking for edits, to make sure Claude understands what already exists.

### Targeted File Reference

You can tell Claude exactly which files to focus on:

```text
Look at these three files: src/routes/user.ts, src/models/user.ts, src/services/user.ts.
Tell me if there are any inconsistencies.
```

### Built-in Slash Commands

Inside a Claude Code session, several slash commands are available:

| Command | Purpose |
|---|---|
| `/help` | Show available commands |
| `/config` | View or change configuration |
| `/model` | Change the active model |
| `/clear` | Clear conversation history |
| `/compact` | Manually compact the conversation |
| `/status` | Show current session information |
| `/exit` or `Ctrl+C` | Exit Claude Code |

### Image Input

Claude Code can accept image input. You can paste a screenshot or reference an image file to show Claude what a UI looks like or what an error screen says.

### Asking Claude to Explain Before Acting

Before any large change, asking Claude to explain its plan is a powerful habit:

```text
Before editing anything, explain what changes you plan to make and why.
Then wait for my approval before proceeding.
```

### Context Window Status

You can check how full the context window is to know if you are approaching the compaction threshold. The `/status` command or session information shows context usage.

### Multi-File Understanding

Claude Code can read multiple files and reason about how they interact:

```text
Read all the files in src/auth/ and explain the authentication flow.
```

## Important Notes

* Many students only ever use Claude Code as a simple code generator. Learning these features unlocks much more power.
* The slash commands work inside the interactive session but not in one-shot CLI invocations.
* Image input requires a model that supports vision (Claude Sonnet and Opus).
* Always verify that Claude has read the right files by asking it to confirm what it has inspected.

## Why This Lecture Matters

Beginning users often ask Claude vague questions and get vague answers. Learning these features helps students ask precise questions, control what Claude reads, and guide the interaction more effectively — resulting in much better output.

## Summary

Claude Code has many useful features beyond basic code generation: file inspection without editing, targeted file references, built-in slash commands, image input, and multi-file reasoning. Learning these early in the course helps students interact with Claude Code more precisely and effectively.
