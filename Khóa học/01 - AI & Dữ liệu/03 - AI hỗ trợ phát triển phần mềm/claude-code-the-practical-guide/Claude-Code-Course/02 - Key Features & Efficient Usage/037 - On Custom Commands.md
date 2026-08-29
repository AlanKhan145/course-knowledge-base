# 037 - On Custom Commands

## Section

Key Features & Efficient Usage

## Main Idea

This lecture introduces custom commands as reusable prompt templates stored as files. Students learn what custom commands are, how they differ from skills, and when to use them.

## Learning Objectives

By the end of this lecture, students should understand:

* What a custom command is.
* How custom commands differ from skills.
* When to use a custom command versus a full skill.
* How commands are structured.

## Key Concepts

### What Is a Custom Command

A custom command is a stored prompt template that can be invoked quickly with a slash command. It is simpler than a full skill — it is a reusable prompt, not a full multi-step workflow.

**Analogy:**

* A skill is like a standard operating procedure.
* A custom command is like a quick shortcut or macro.

### When to Use a Custom Command

Use a custom command when:

* You type the same prompt repeatedly.
* The task is simple enough not to need detailed step-by-step instructions.
* You want a shortcut for a common one-liner task.
* The command accepts an argument that varies each time.

Use a skill instead when:

* The task has multiple ordered steps.
* Consistency in process is critical.
* The task produces structured output.

### Simple Command vs Full Skill

**Simple command (one step, shortcut):**

```markdown
---
name: explain
description: Explain what a file or function does.
---

Explain the following in plain language: $ARGUMENTS

Be concise. Focus on what it does, not how it works internally.
```

Invoke:

```text
/explain src/auth/auth.service.ts
```

**Full skill (multi-step process):**

A skill with numbered steps, rules, and structured output for a complete workflow.

### Custom Command Examples

**Review recent changes:**

```markdown
---
name: review-changes
description: Review all recent uncommitted changes.
---

Review the current uncommitted changes in the repository.
Run git diff to see what changed.
Identify any obvious issues, missing tests, or style violations.
Summarize in a short bullet list.
```

**Explain the current file:**

```markdown
---
name: explain-file
description: Explain the purpose and structure of a specific file.
---

Read this file: $ARGUMENTS
Explain its purpose, what it exports, and how it connects to the rest of the project.
Keep the explanation to 3-5 sentences.
```

**Summarize test failures:**

```markdown
---
name: analyze-test-failures
description: Analyze test output and explain the root causes of failures.
---

Analyze these test failures: $ARGUMENTS

For each failure:
1. State the test name.
2. Explain the root cause in one sentence.
3. Suggest the most likely fix.
```

## Important Notes

* Commands are stored in `.claude/commands/` just like full skills.
* The only difference is complexity — simple prompt vs multi-step workflow.
* Commands are a good entry point for students new to custom automation. Start with commands before building full skills.
* Commands and skills are both available as slash commands. The format is identical.

## Why This Lecture Matters

Custom commands are the simplest form of workflow automation in Claude Code. Understanding what they are and when to use them gives students a low-friction entry point into building their own productivity tools.

## Summary

Custom commands are reusable prompt templates stored in `.claude/commands/`. They are simpler than full skills — a shortcut for prompts you type repeatedly rather than a multi-step workflow. Use commands for simple, one-step tasks and skills for complex, multi-step processes. Both are invoked as slash commands in Claude Code sessions.
