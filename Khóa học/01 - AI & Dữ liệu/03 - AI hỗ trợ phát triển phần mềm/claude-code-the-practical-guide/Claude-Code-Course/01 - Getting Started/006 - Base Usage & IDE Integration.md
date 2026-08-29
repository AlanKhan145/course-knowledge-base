# 006 - Base Usage & IDE Integration

## Section

Getting Started

## Main Idea

This lecture demonstrates the core Claude Code workflow: opening Claude Code inside a project, asking it to inspect files, making edits, reviewing changes, and working alongside a code editor. This is the foundation of everything that follows in the course.

## Learning Objectives

By the end of this lecture, students should understand:

* How to open Claude Code inside a project directory.
* How to ask Claude to inspect files without editing them.
* How to ask Claude to make code edits.
* How to review changes Claude has made.
* How Claude Code integrates with a code editor like VS Code.

## Key Concepts

### Starting Claude Code in a Project

Navigate to the project directory in your terminal and run:

```bash
claude
```

Claude Code opens an interactive session and has access to the files in the current working directory.

### Asking Claude to Inspect First

A good habit is to ask Claude to read and understand the project before making changes:

```text
Inspect this project. Tell me about the structure, main files, and how the code is organized.
Do not edit anything yet.
```

### Asking Claude to Make Edits

Once Claude understands the project, you can ask it to make specific changes:

```text
Add a function that calculates the total price of items in the cart.
Place it in the existing utils.ts file and follow the current coding style.
```

### Reviewing Changes

After Claude makes edits:

* Review the diff Claude shows you in the terminal.
* Check the files in your editor.
* Use `git diff` to see exactly what changed.
* Approve or reject specific changes.

### IDE Integration

Claude Code and an IDE work together naturally:

* Claude Code runs in the VS Code integrated terminal.
* You can see file changes in the editor immediately as Claude edits them.
* You can switch between reading Claude's output in the terminal and reviewing the code in the editor side by side.

## Important Notes

* Always review what Claude has changed before committing.
* Claude may sometimes edit more files than expected. Check the full diff.
* Asking Claude to explain before editing is a good practice for risky changes.
* The IDE and Claude Code terminal can be viewed side by side for efficient review.

## Basic Workflow Summary

1. Navigate to project folder.
2. Run `claude` to start a session.
3. Ask Claude to inspect and explain the project.
4. Ask Claude to make a specific change.
5. Review the diff.
6. Accept or reject.
7. Run tests.
8. Commit changes.

## Why This Lecture Matters

This is the first hands-on demonstration in the course. Students see Claude Code working in a real project for the first time. This lecture builds the mental model of how Claude Code interacts with a codebase that all future lectures build upon.

## Summary

Base usage of Claude Code involves starting a session in a project directory, asking Claude to inspect files, reviewing its understanding, then requesting edits and reviewing the output. The IDE integration allows students to work with Claude Code in the terminal while viewing code changes in the editor simultaneously.
