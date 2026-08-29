# 010 - Understanding Sessions & Context

## Section

Getting Started

## Main Idea

This lecture explains how Claude Code manages context within a session. Understanding how context works is essential because context quality directly determines the quality of Claude's output. Students learn what is included in the context, what limits exist, and why context management matters.

## Learning Objectives

By the end of this lecture, students should understand:

* What a Claude Code session is.
* What information is included in the context.
* What the context window limit means.
* How context quality affects output quality.
* How to manage context effectively.

## Key Concepts

### What Is a Session

A Claude Code session is a single continuous conversation with Claude. Everything discussed, every file read, and every command run within that session is part of the session's context.

When you close Claude Code and reopen it, a new session starts with no memory of the previous session (unless auto-memory or session resumption features are used).

### What Is In The Context

The context includes:

* All messages in the conversation so far.
* Files Claude has read or inspected.
* Results of commands Claude has run.
* Any project instructions (like `CLAUDE.md`).
* Tool results and outputs.

### Context Window Limits

Every AI model has a maximum context window — the total amount of information it can process at once. When the context exceeds this limit, older information may be dropped or summarized.

As of 2026, Claude models support large context windows (hundreds of thousands of tokens), but large projects with many files can still push against these limits.

### Why Context Quality Matters

Claude can only reason about what is in its context. If the wrong files are loaded, or if the context is cluttered with irrelevant conversation, Claude's responses will be less accurate.

**Good context includes:**

* The relevant files for the current task.
* Clear instructions and goals.
* Constraints and project rules.
* Recent test results or error messages.

**Bad context includes:**

* Files unrelated to the current task.
* Long conversation history from different tasks.
* Contradictory instructions.
* Stale information.

### Context Engineering

Actively managing what goes into the context is called context engineering. It is one of the most important skills for working effectively with Claude Code.

## Important Notes

* Do not assume Claude remembers something from a previous session by default.
* The more irrelevant content is in the context, the more likely Claude is to make mistakes.
* Long sessions accumulate context that may no longer be relevant. Starting a new session can improve performance.
* Use `CLAUDE.md` to inject important project context at the start of every session.

## Why This Lecture Matters

Many users are frustrated when Claude gives wrong answers, but the root cause is often poor context. Understanding how context works transforms Claude Code from an unreliable assistant into a consistent and predictable tool.

## Summary

A Claude Code session maintains context across the entire conversation, including files read, commands run, and instructions given. Context quality directly affects output quality. Students should actively manage what goes into the context by providing relevant files, clear instructions, and removing irrelevant information. This practice is called context engineering and is fundamental to working effectively with Claude Code.
