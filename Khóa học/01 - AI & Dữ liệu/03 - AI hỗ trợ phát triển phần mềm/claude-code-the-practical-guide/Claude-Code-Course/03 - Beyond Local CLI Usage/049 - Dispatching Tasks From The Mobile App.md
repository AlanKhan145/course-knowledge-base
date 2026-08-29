# 049 - Dispatching Tasks From The Mobile App

## Section

Beyond Local CLI Usage

## Main Idea

This lecture explains how to dispatch Claude Code tasks from a mobile device. Students learn how the Claude mobile app can be used to send tasks to Claude when away from their development machine, enabling asynchronous AI-assisted work.

## Learning Objectives

By the end of this lecture, students should understand:

* What mobile task dispatch is.
* How to use the Claude mobile app to send tasks.
* What types of tasks are appropriate for mobile dispatch.
* How to review results from mobile-dispatched tasks.
* What the limitations of mobile-dispatched tasks are.

## Key Concepts

### What Is Mobile Task Dispatch

Mobile task dispatch is the ability to send instructions to Claude from the Claude mobile app (iOS or Android). You can describe a task, attach relevant context, and have Claude work on it — even when you are away from your computer.

**Example scenarios:**

* You are commuting and think of a bug fix. You describe it from your phone.
* You are in a meeting and want Claude to start researching a technical approach.
* You are away for the weekend but want Claude to summarize what changed in the codebase.
* You wake up and want Claude to prepare a morning status summary of a project.

### How Mobile Dispatch Works

1. Open the Claude mobile app.
2. Start a conversation or open a project.
3. Describe the task you want done.
4. Attach any relevant files, screenshots, or context.
5. Claude processes the task.
6. Review results when you return to your computer or read them on mobile.

### Task Types Suited for Mobile Dispatch

**Good candidates:**

* Research and analysis tasks (no code changes).
* Summarization tasks (summarize recent changes, open issues, documentation).
* Planning tasks (generate implementation plans for review).
* Documentation tasks (write or update docs).
* Review tasks (review code and provide feedback without making changes).

**Poor candidates for unreviewed mobile dispatch:**

* Tasks that make file edits (review before merging).
* Tasks that run commands with real side effects.
* Complex multi-step implementations that need close supervision.

### Mobile Dispatch With Guardrails

If using mobile dispatch for coding tasks:

* Ask Claude to create a plan only, not to implement.
* Ask Claude to output a summary report rather than make changes.
* If changes are needed, route them through a review process before they are applied.

### Reviewing Mobile-Dispatched Results

After dispatching a task:

* Check the conversation in the Desktop app or CLI for results.
* Review any code changes before applying them to the codebase.
* Use Git to apply and review changes before committing.

## Important Notes

* Mobile dispatch is best for initiating and reviewing tasks, not for active coding.
* The mobile app does not have the same file system access as the local CLI.
* Authentication on mobile uses the same account as other Claude interfaces.
* Be mindful of what you share from mobile — attachments and context are sent to Anthropic servers.
* Some advanced Claude Code features (hooks, local MCP servers) are not available from mobile.

## Why This Lecture Matters

Mobile access makes Claude Code asynchronous and context-independent. Students who learn to dispatch tasks from mobile can use idle time (commuting, waiting) productively and arrive at their desk with Claude's work ready to review. This changes the development workflow from purely synchronous to genuinely asynchronous.

## Summary

Mobile task dispatch allows you to send Claude tasks from your phone using the Claude mobile app. It is best for planning, research, summarization, and review tasks that do not require immediate code changes. For tasks involving code edits, ask Claude to produce a plan or report for review rather than making changes directly. Review all results before incorporating them into the project.
