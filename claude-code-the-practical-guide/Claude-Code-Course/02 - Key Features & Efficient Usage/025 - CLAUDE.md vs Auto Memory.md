# 025 - CLAUDE.md vs Auto Memory

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains the difference between `CLAUDE.md` (explicit project instructions) and Claude Code's auto memory feature (automatic accumulation of information across sessions). Understanding the difference helps students choose the right tool for each type of persistent information.

## Learning Objectives

By the end of this lecture, students should understand:

* What `CLAUDE.md` is and what it is best for.
* What auto memory is and how it works.
* How the two differ in purpose and behavior.
* When to use each one.
* What the limitations of auto memory are.

## Key Concepts

### `CLAUDE.md` — Explicit Project Instructions

`CLAUDE.md` is a file that you write and maintain deliberately. It contains:

* Project-specific coding rules.
* Tech stack details.
* Commands for development, testing, and build.
* Workflow behavior instructions.
* Important file references.

**Characteristics of `CLAUDE.md`:**

* You control exactly what is in it.
* It is version-controlled with the project.
* It is visible to the whole team.
* It is consistent across all Claude sessions.
* It can be reviewed and updated at any time.

### Auto Memory — Automatic Learning

Claude Code's auto memory feature allows Claude to automatically remember facts across sessions without you explicitly writing them down.

**How auto memory works:**

* During a session, Claude notices and saves information it considers important.
* In future sessions, Claude may recall these saved facts.
* Examples of auto-saved information: user preferences, project-specific patterns, corrections you made to Claude's behavior.

**Characteristics of auto memory:**

* Automatic — you do not have to write anything.
* Less predictable — you do not always know what Claude remembered.
* Not team-shared — it is individual to your Claude account.
* Can become stale — old memories may no longer be accurate.

### Comparison

| Feature | `CLAUDE.md` | Auto Memory |
|---|---|---|
| Created by | You, explicitly | Claude, automatically |
| Version-controlled | Yes | No |
| Team-shared | Yes | No |
| Predictability | High | Lower |
| Best for | Project rules, team standards | Personal preferences, session patterns |
| Freshness control | Fully controlled | Requires review |

### When to Use Each

**Use `CLAUDE.md` for:**

* Coding standards and rules.
* Tech stack documentation.
* Commands that Claude needs to run.
* Project workflow instructions.
* Anything the whole team should agree on.

**Auto memory is useful for:**

* Personal workflow preferences.
* Patterns Claude should follow for your individual sessions.
* Corrections to Claude's behavior that you want to persist without updating `CLAUDE.md`.

### Viewing and Managing Auto Memory

Claude Code provides commands to view and manage auto memory:

```text
/memory
```

This shows what Claude has remembered automatically. You can review and remove stale or incorrect memories.

## Important Notes

* For project-critical information, always prefer `CLAUDE.md` over auto memory.
* Auto memory is not visible to other team members using Claude in the same project.
* Review auto memory periodically to remove outdated entries.
* Do not store sensitive information (API keys, passwords) in either `CLAUDE.md` or auto memory.

## Why This Lecture Matters

Students who understand the difference between `CLAUDE.md` and auto memory can choose the right tool for different types of information. Putting project rules in auto memory is unreliable. Relying on auto memory for team-wide standards means teammates without the same memory will get different results.

## Summary

`CLAUDE.md` is an explicit, version-controlled, team-shared project instruction file. Auto memory is automatic, individual, and less predictable. Project rules, coding standards, and workflow instructions belong in `CLAUDE.md`. Personal preferences and individual session patterns can be handled by auto memory. Use `/memory` to review and manage what Claude has automatically remembered.
