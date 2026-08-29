# 023 - Initializing Claude Projects

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to initialize a project for Claude Code so that Claude understands the project's structure, conventions, and rules from the very first session. A properly initialized project produces better results from the start and reduces the setup work needed each time you open Claude.

## Learning Objectives

By the end of this lecture, students should understand:

* What it means to initialize a project for Claude Code.
* How Claude Code scans and understands a project.
* What the `/init` command does.
* How project initialization connects to `CLAUDE.md`.

## Key Concepts

### Why Initialize a Project

Without initialization, Claude Code starts every session with no knowledge of the project. It must rediscover the structure, naming conventions, tech stack, and project rules each time. This is:

* Inefficient.
* Inconsistent across sessions.
* Error-prone for complex projects.

Proper initialization gives Claude a head start by providing persistent project knowledge.

### The `/init` Command

Claude Code provides an `/init` command that automatically scans the current project and creates an initial `CLAUDE.md` file based on what it finds.

```bash
# Inside a Claude Code session
/init
```

Claude will:

1. Inspect the project directory structure.
2. Identify the tech stack (languages, frameworks, config files).
3. Look for existing documentation.
4. Generate a draft `CLAUDE.md` covering the discovered project facts.

### What Gets Detected

Claude can automatically detect:

* Languages and frameworks (package.json, requirements.txt, go.mod, etc.).
* Project folder structure.
* Scripts and commands (from package.json or Makefile).
* Test framework configuration.
* Linting and formatting tools.
* Existing README content.

### After `/init`

The auto-generated `CLAUDE.md` is a starting point, not a finished product. After running `/init`:

* Review the generated file.
* Add project-specific rules and constraints that Claude could not discover.
* Add workflow instructions (how Claude should behave in sessions).
* Add important file references.
* Correct anything that was inferred incorrectly.

### Manual Initialization

If you prefer to write `CLAUDE.md` from scratch rather than using `/init`, that is also valid. The next lecture covers how to craft great `CLAUDE.md` files manually.

## Important Notes

* `/init` generates a draft, not a final `CLAUDE.md`. Always review and edit it.
* Run `/init` at the start of a new project or when onboarding Claude into an existing project.
* The `CLAUDE.md` file should be committed to version control so the whole team benefits.
* A team member working with Claude in the same repository will share the same `CLAUDE.md`.

## Why This Lecture Matters

Project initialization is the bridge between Section 1 (setup and basics) and Section 2 (advanced features). Once a project is properly initialized with a good `CLAUDE.md`, every subsequent Claude session starts with a strong foundation.

## Summary

Initializing a project for Claude Code means giving it persistent knowledge about the project's structure, tech stack, and rules. The `/init` command auto-generates a starting `CLAUDE.md` by scanning the project. This file should be reviewed, edited, and committed to version control. Proper initialization reduces setup time and improves consistency across all Claude Code sessions on the project.
