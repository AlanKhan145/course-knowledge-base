# 015 - Using Claude Code's Native Sandboxing

## Section

Getting Started

## Main Idea

This lecture explains Claude Code's built-in sandboxing feature, which provides an additional layer of safety without requiring Docker. Native sandboxing limits what Claude Code can do at the application level, reducing the risk of unwanted file changes or system modifications.

## Learning Objectives

By the end of this lecture, students should understand:

* What native sandboxing in Claude Code is.
* How it differs from Docker sandboxing.
* How to enable and configure native sandboxing.
* What protections native sandboxing provides.
* What its limitations are.

## Key Concepts

### What Is Native Sandboxing

Claude Code's native sandboxing is a built-in protection mode that restricts which actions Claude can perform without explicit approval. It operates at the Claude Code application level, not at the operating system or container level.

### How It Works

In sandboxed mode:

* Certain categories of actions require user confirmation before executing.
* File write operations are restricted by default.
* Command execution requires explicit approval.
* The scope of allowed operations is narrowed.

This is different from the permissions system: permissions are a configuration that persists across sessions, while sandboxing can be toggled for specific situations.

### Native vs Docker Sandboxing

| Feature | Native Sandboxing | Docker Sandboxing |
|---|---|---|
| Isolation level | Application level | OS/container level |
| Setup complexity | Low — built into Claude Code | Higher — requires Docker |
| File system isolation | No | Yes (via volume mounts) |
| Command containment | Approval-based | Container-level |
| Good for | Daily use safety | High-risk scenarios |

### When to Use Native Sandboxing

Native sandboxing is a good default mode for:

* Exploratory sessions where you want to review every action.
* Sessions on a codebase you are not yet familiar with.
* Any time you want Claude to propose changes before executing them.

### Enabling Sandboxing

Native sandboxing can be enabled through Claude Code's configuration or by using specific flags when starting a session. The exact configuration varies by Claude Code version — check the current documentation for the active flag or setting name.

## Important Notes

* Native sandboxing does not provide OS-level isolation. Commands can still run on the host.
* Docker sandboxing provides stronger isolation for high-risk scenarios.
* Sandboxing may slow down automated workflows because more confirmations are required.
* Even with sandboxing enabled, always use version control as a safety net.
* Native sandboxing is not the same as running in read-only mode — writes can still happen after approval.

## Why This Lecture Matters

Not all students have Docker set up or want the complexity of container-based sandboxing. Claude Code's native sandboxing provides a lower-friction safety option that most developers can use immediately without any additional infrastructure.

## Summary

Claude Code's native sandboxing provides application-level restrictions on what Claude can do without explicit user approval. It is simpler to set up than Docker sandboxing but provides less isolation. It is best used for everyday safety during sessions on unfamiliar codebases or when you want to review every action before it happens. Version control remains an essential complement to any sandboxing approach.
