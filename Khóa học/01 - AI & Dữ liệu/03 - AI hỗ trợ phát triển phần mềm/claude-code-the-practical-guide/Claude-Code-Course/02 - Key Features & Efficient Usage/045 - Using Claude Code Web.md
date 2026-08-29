# 045 - Using Claude Code Web

## Section

Key Features & Efficient Usage

## Main Idea

This lecture introduces Claude Code Web — a cloud-based way to use Claude Code without running it entirely on a local machine. Students learn what Claude Code Web is, what it is used for, and how it fits into the broader Claude Code ecosystem.

## Learning Objectives

By the end of this lecture, students should understand:

* What Claude Code Web is.
* How it differs from the local CLI.
* What use cases it is best suited for.
* How to access and use Claude Code Web.
* What its limitations are compared to local usage.

## Key Concepts

### What Is Claude Code Web

Claude Code Web is a web-based interface for Claude Code that allows users to:

* Start Claude Code sessions from a browser.
* Work with repositories connected to the cloud.
* Dispatch tasks to Claude without a local terminal.
* Share sessions or results with teammates.
* Access Claude Code from any device with a browser.

### Claude Code Web vs Local CLI

| Feature | Local CLI | Claude Code Web |
|---|---|---|
| Requires local Node.js | Yes | No |
| Access from any device | No | Yes |
| Full file system access | Yes | Connected repository only |
| Terminal command execution | Yes | Limited |
| Session portability | No | Yes |
| Best for | Active coding | Reviews, planning, remote access |

### Use Cases for Claude Code Web

* **Remote work without your primary machine:** Access Claude from a laptop, tablet, or another computer.
* **Code review from a browser:** Review changes and ask Claude about the code without setting up a local environment.
* **Team sharing:** Share Claude Code sessions or outputs with teammates.
* **Non-developer team members:** Allow team members who do not have a development environment to interact with Claude on the codebase.
* **Cloud-based task dispatch:** Dispatch Claude tasks from the web and retrieve results.

### Connecting a Repository

To use Claude Code Web effectively:

* Connect your GitHub (or other Git provider) repository.
* Claude Code Web can then read your repository's files.
* You can ask Claude to analyze, plan, or suggest changes based on the code.

### Limitations of Claude Code Web

* Direct local file editing may not be available — changes go through connected repositories.
* Command execution is more limited than the local CLI.
* Some local features (hooks, local MCP servers) may not work in the cloud context.
* Real-time feedback loops (browser, test runner) require additional setup.

### When to Use Web vs CLI

**Use Claude Code Web when:**

* You are away from your development machine.
* You need to review code from a browser.
* You want to share a session with a colleague.
* You are on a device without a terminal.

**Use the local CLI when:**

* You are actively coding and need full file system access.
* You need to run local commands, tests, or the dev server.
* You are using hooks, plugins, or local MCP servers.
* You need maximum context and performance.

## Important Notes

* Claude Code Web capabilities may evolve as Anthropic releases new features.
* Not all features available in the CLI are available in the web interface.
* For security-sensitive projects, review what data is sent to cloud infrastructure.
* Check current Anthropic documentation for the latest Claude Code Web features and access methods.

## Why This Lecture Matters

Claude Code is not only a CLI tool. Understanding the web interface expands where and how developers can use Claude Code, making it accessible from any device and enabling team collaboration scenarios that the local CLI does not support.

## Summary

Claude Code Web provides browser-based access to Claude Code without requiring a local terminal setup. It is best for remote access, code review, team sharing, and dispatching tasks from non-development devices. It has limitations compared to the local CLI, particularly around direct file editing and command execution. Use the local CLI for active development and Claude Code Web for access, review, and collaboration scenarios.
