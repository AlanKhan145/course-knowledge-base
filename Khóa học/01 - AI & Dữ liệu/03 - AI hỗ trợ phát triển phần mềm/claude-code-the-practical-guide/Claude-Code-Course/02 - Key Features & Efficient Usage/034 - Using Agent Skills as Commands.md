# 034 - Using Agent Skills as Commands

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how skills can be invoked as slash commands inside Claude Code sessions, making them feel like built-in behaviors rather than external instructions. Students learn the command format and how it simplifies invoking complex workflows.

## Learning Objectives

By the end of this lecture, students should understand:

* How skills map to slash commands.
* The syntax for invoking skills as commands.
* How arguments can be passed to commands.
* When to use command syntax versus explicit instruction.

## Key Concepts

### Skills as Slash Commands

When a skill is defined in `.claude/commands/`, it is automatically available as a slash command using its filename (without the `.md` extension):

```
.claude/commands/create-api-endpoint.md → /create-api-endpoint
.claude/commands/code-review.md        → /code-review
.claude/commands/write-tests.md        → /write-tests
```

### Invoking a Skill Command

Inside a Claude Code session:

```text
/create-api-endpoint
```

Claude reads the skill definition and follows its steps.

### Passing Arguments to Commands

Skills can use `$ARGUMENTS` as a placeholder for input passed after the command name:

**In the skill file:**

```markdown
# Skill: Create API Endpoint

Create a REST API endpoint for: $ARGUMENTS

## Steps
1. Understand what the endpoint should do based on the description above.
2. Find similar endpoints in the codebase for reference.
...
```

**Invoking with an argument:**

```text
/create-api-endpoint user profile retrieval with filtering by status
```

Claude substitutes the argument into the `$ARGUMENTS` placeholder and follows the skill steps.

### Comparison: Command vs Explicit Instruction

| Approach | Example |
|---|---|
| Explicit instruction | "Follow the API endpoint skill steps to create a user profile endpoint." |
| Command syntax | `/create-api-endpoint user profile endpoint` |

Both work. Command syntax is faster once the skill is well-established. Explicit instruction is better when you want to pass additional context.

### Combining Commands in Workflows

Skills can be chained through explicit instruction:

```text
/create-api-endpoint order history endpoint
After implementation, /code-review
After review, /write-tests
```

Or as a single workflow instruction:

```text
Create the order history endpoint. After implementation, run code-review and write-tests.
```

### Listing Available Commands

Claude Code shows available commands when you type `/` in the session. Custom commands appear alongside built-in commands.

## Important Notes

* The command name is derived from the filename. Use clear, descriptive filenames.
* Arguments passed via the command line replace `$ARGUMENTS` in the skill. Keep arguments concise.
* If no arguments are passed, `$ARGUMENTS` is empty. Write skills that work with or without arguments when possible.
* Global commands (in `~/.claude/commands/`) are available in all projects. Project commands are project-specific.

## Why This Lecture Matters

Slash command syntax makes skills feel like first-class features rather than workarounds. Developers who know that `/create-api-endpoint` exists will use it consistently. This makes skills a genuine part of the workflow, not something that gets forgotten between sessions.

## Summary

Skills stored in `.claude/commands/` are automatically available as slash commands in Claude Code sessions. Use the skill filename as the command name and pass optional arguments after the command. Command syntax is a faster and more consistent way to invoke skills for common tasks. Skills and commands together create a library of reusable workflows that improve productivity over time.
