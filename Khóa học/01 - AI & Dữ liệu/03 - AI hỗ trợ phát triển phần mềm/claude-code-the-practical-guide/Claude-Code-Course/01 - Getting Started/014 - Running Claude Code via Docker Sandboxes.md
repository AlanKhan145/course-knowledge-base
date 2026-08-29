# 014 - Running Claude Code via Docker Sandboxes

## Section

Getting Started

## Main Idea

This lecture shows how to run Claude Code inside a Docker container to isolate its execution from the host machine. Docker sandboxing adds a layer of safety when running Claude Code on unfamiliar projects or allowing it to execute commands that could affect the system.

## Learning Objectives

By the end of this lecture, students should understand:

* Why Docker sandboxing is useful with Claude Code.
* How to set up a Docker container for Claude Code.
* What isolation Docker provides.
* What the limitations of Docker sandboxing are.

## Key Concepts

### Why Use Docker for Claude Code

Running Claude Code directly on your local machine means any command Claude executes has access to your entire file system and installed software. Docker creates a separate, isolated environment where:

* Commands run inside the container, not on the host.
* File system access is limited to what is mounted into the container.
* Network access can be restricted.
* The environment is clean and reproducible.

### Use Cases for Docker Sandboxing

* **Testing unknown projects:** If you receive a project from someone else, running Claude Code in Docker means Claude cannot accidentally damage your local system.
* **Running risky commands:** Claude may suggest commands you are not familiar with. Docker contains their impact.
* **Clean environments:** Testing setup scripts or install processes in a fresh environment.
* **Reproducible builds:** Ensuring Claude Code runs in the same environment every time.

### Basic Docker Setup for Claude Code

A minimal Docker workflow:

```bash
# Pull a base Node.js image
docker run -it --rm \
  -v $(pwd):/workspace \
  -w /workspace \
  node:20 \
  bash
```

Inside the container:

```bash
npm install -g @anthropic-ai/claude-code
claude
```

### Mounting Your Project

To give Claude Code access to your project files inside Docker:

```bash
docker run -it --rm \
  -v /path/to/your/project:/workspace \
  -w /workspace \
  -e ANTHROPIC_API_KEY=your_key_here \
  node:20 bash
```

### What Docker Does Not Protect Against

* Changes to files in mounted volumes still affect your local system.
* The API key is still used and requests are sent to Anthropic servers.
* If you mount `/` (the root), there is no meaningful isolation.

## Important Notes

* Docker sandboxing is optional. Most developers do not use it for everyday work.
* It is most valuable for one-off tasks with unfamiliar code or risky operations.
* Always review what volumes you mount into the container.
* Claude Code inside Docker still needs network access to reach the Anthropic API.
* This is not a replacement for version control — always commit checkpoints.

## Why This Lecture Matters

Claude Code is powerful and can run arbitrary shell commands. For students working with untrusted code or wanting maximum safety, Docker sandboxing provides an important safety boundary. Understanding this option expands the range of scenarios where Claude Code can be used confidently.

## Summary

Docker sandboxing runs Claude Code inside an isolated container, limiting what commands can affect the host machine. It is useful for testing unfamiliar projects, running risky commands, and ensuring clean reproducible environments. Mounted volumes still connect to the host file system, so sandbox protection applies mainly to the system environment rather than the project files themselves.
