# 011 - When To Start New Sessions & Making Sense Of Compaction

## Section

Getting Started

## Main Idea

This lecture explains when it is better to start a fresh Claude Code session rather than continuing an existing one. It also explains the concept of compaction — how Claude handles context that grows too large — and what that means for information retention.

## Learning Objectives

By the end of this lecture, students should understand:

* When to start a new Claude Code session.
* What happens to context as a session grows.
* What compaction is and how it works.
* How to avoid losing important information due to compaction.

## Key Concepts

### When to Start a New Session

Starting a new session is often the better choice when:

* **The task has changed completely.** If you finished implementing a feature and now want to work on something unrelated, a clean session avoids carrying over irrelevant context.
* **Claude seems confused.** If Claude keeps making the same mistake or gives answers that do not match the project, old context may be polluting its reasoning.
* **Too much irrelevant context has accumulated.** Long sessions include information that no longer applies to the current task.
* **The previous direction was wrong.** If you went down a bad path and want to restart, a new session guarantees a clean slate.

### What Is Compaction

When a Claude Code session grows very long, the model cannot fit all messages into its context window. Claude handles this by compacting — summarizing older parts of the conversation into a shorter representation.

**What compaction does:**

* Older messages and file contents are replaced by a condensed summary.
* Recent messages are kept in full.
* The summary tries to capture important decisions and context.

**What compaction loses:**

* Exact wording of earlier instructions.
* Specific file contents that were loaded early in the session.
* Nuanced details in long discussions.

### How to Handle Compaction

Strategies to minimize the impact of compaction:

* Use `CLAUDE.md` to hold persistent project context, since it is re-read at the start of sessions.
* Repeat important constraints or goals periodically if the session is very long.
* Start a new session when the task changes significantly.
* Keep each session focused on a single task or feature.

### Session Resumption

Claude Code offers session resumption features that allow you to continue a previous session. However, continued sessions still carry the accumulated context (including compacted history), so the considerations above still apply.

## Important Notes

* Compaction is automatic. You cannot prevent it when the context window fills.
* A fresh session always starts with clean, focused context.
* The best sessions are short and task-focused, not long and wide-ranging.
* `CLAUDE.md` helps maintain continuity across sessions by providing permanent project context.

## Why This Lecture Matters

Students who keep sessions running for too long often see Claude's performance degrade over time. Understanding compaction and knowing when to start fresh prevents this problem and keeps Claude Code working at its best.

## Summary

Start a new Claude Code session when the task changes, when Claude seems confused, or when too much irrelevant context has accumulated. Compaction automatically summarizes old context when the session grows long, but details can be lost in the process. Keeping sessions focused and using `CLAUDE.md` for persistent context are the best strategies for consistent performance.
