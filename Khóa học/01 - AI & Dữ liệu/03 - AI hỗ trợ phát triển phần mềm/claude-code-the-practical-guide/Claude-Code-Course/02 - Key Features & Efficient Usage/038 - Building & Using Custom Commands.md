# 038 - Building & Using Custom Commands

## Section

Key Features & Efficient Usage

## Main Idea

This lecture provides a hands-on guide to building custom commands. Students work through creating several practical commands, learn the structure in detail, and practice invoking them in a Claude Code session.

## Learning Objectives

By the end of this lecture, students should understand:

* How to write a command file from scratch.
* How to use `$ARGUMENTS` effectively.
* How to test a new command.
* How to build a small library of useful commands for a project.
* Best practices for organizing and naming commands.

## Key Concepts

### Command File Structure

```markdown
---
name: command-name
description: One-line description of what this command does. Used by Claude to decide when to invoke it automatically.
---

The prompt content goes here.
Use $ARGUMENTS to insert anything typed after the command name.
```

### Example Commands

**1. Feature Review Command**

File: `.claude/commands/review-feature.md`

```markdown
---
name: review-feature
description: Reviews the implementation of a specific feature for correctness, tests, and code quality.
---

Review the implementation of this feature: $ARGUMENTS

Check:
- Correctness of logic
- Edge cases handled
- Type safety
- Missing tests
- Security concerns
- Documentation

Format your review as a prioritized list.
```

Invoke: `/review-feature user authentication`

---

**2. Explain Architecture Command**

File: `.claude/commands/explain-arch.md`

```markdown
---
name: explain-arch
description: Explains the architecture of a specific part of the codebase.
---

Explain the architecture of: $ARGUMENTS

Include:
- Purpose of this part of the system
- Key files and their roles
- How data flows through it
- Dependencies it relies on

Keep the explanation concise — focus on what matters for development decisions.
```

Invoke: `/explain-arch the authentication system`

---

**3. Prepare Commit Command**

File: `.claude/commands/prep-commit.md`

```markdown
---
name: prep-commit
description: Reviews all staged changes and suggests a good commit message.
---

Review the staged changes (run git diff --cached) and:
1. Summarize what changed in a few bullet points.
2. Identify any issues that should be fixed before committing.
3. Suggest a conventional commit message (feat/fix/refactor/docs/test: description).

Do not create the commit — only suggest the message.
```

Invoke: `/prep-commit`

---

**4. Debug Help Command**

File: `.claude/commands/debug.md`

```markdown
---
name: debug
description: Helps analyze and fix an error or bug described in the argument.
---

I am debugging this issue: $ARGUMENTS

Help me:
1. Understand what the error means.
2. Identify the most likely root cause.
3. Suggest 2-3 things to check or try.

Do not write code yet. Help me understand first.
```

Invoke: `/debug TypeError: Cannot read properties of undefined (reading 'id')`

### Testing a New Command

After creating a command:

1. Open a Claude Code session.
2. Type `/` to see it listed.
3. Invoke it with test input.
4. Review whether the output matches expectations.
5. Adjust the command file if needed.

### Organizing Your Command Library

* Use descriptive, verb-first names: `review-`, `explain-`, `generate-`, `debug-`, `check-`.
* Keep each command focused on one purpose.
* Group related commands with consistent naming prefixes.
* Document what each command is for in the `description` field.

## Important Notes

* Claude reads the command file content as a prompt. Write it as if you were giving Claude the instruction directly.
* The `description` field is used by Claude to match automatic invocations. Make it specific enough to trigger only when appropriate.
* Commands with `$ARGUMENTS` fail gracefully if no argument is provided — the `$ARGUMENTS` placeholder becomes empty.
* Commands can reference project conventions or link to `CLAUDE.md` sections.

## Why This Lecture Matters

Building practical commands gives students a collection of productivity tools that pay dividends immediately. By the end of this lecture, students should have several working commands that they can use in their own projects right away.

## Summary

Custom commands are built as Markdown files in `.claude/commands/`. Each has a name, a description, and a prompt body with optional `$ARGUMENTS` substitution. Build commands for tasks you do repeatedly: feature reviews, architecture explanations, commit preparation, and debugging help. Test each command with real input and iterate until the output is consistently useful.
