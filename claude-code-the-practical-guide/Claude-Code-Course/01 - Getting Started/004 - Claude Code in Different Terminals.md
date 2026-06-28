# 004 - Claude Code in Different Terminals

## Section

Getting Started

## Main Idea

This lecture explains that Claude Code can be used across different terminal environments and that the choice of terminal can affect how smoothly Claude Code operates. Students learn about the supported environments and what to be aware of when working in each one.

## Learning Objectives

By the end of this lecture, students should understand:

* That Claude Code works in multiple terminal environments.
* What terminal environments are supported.
* How the terminal environment affects Claude Code behavior.
* Which environment is best for different operating systems.

## Key Concepts

### Supported Terminal Environments

Claude Code can be used in:

* **macOS Terminal** — Native macOS terminal, works well out of the box.
* **iTerm2 (macOS)** — Popular alternative with better features.
* **Windows Terminal** — Modern terminal for Windows 10/11.
* **Git Bash (Windows)** — Unix-like terminal environment on Windows.
* **WSL (Windows Subsystem for Linux)** — Full Linux environment on Windows.
* **VS Code integrated terminal** — Terminal built into the VS Code editor.
* **Other POSIX-compatible shells** — Any shell that supports Node.js and the Claude CLI.

### VS Code Terminal Integration

Using Claude Code inside the VS Code terminal is a popular workflow because it keeps the AI assistant close to the code editor. Students can run Claude Code in the terminal panel while viewing and editing files in the editor.

### Windows Considerations

On Windows, Claude Code works best in:

* Windows Terminal with PowerShell or Command Prompt.
* Git Bash for Unix-like command behavior.
* WSL for the most Linux-compatible experience.

Native PowerShell and CMD work but may have minor differences in how paths and commands are handled.

### Terminal and Command Execution

When Claude Code runs shell commands as part of a task, it uses the current terminal's shell. This means the available commands, PATH configuration, and environment variables depend on which terminal you use.

## Important Notes

* Make sure Node.js and `claude` are in your terminal's PATH regardless of which environment you choose.
* If Claude Code cannot run a command, check whether the command is available in that specific terminal environment.
* The VS Code terminal is a practical choice for most development workflows.
* On Windows, WSL provides the most compatibility with Unix-style commands.

## Why This Lecture Matters

Different developers use different terminal setups. Understanding which terminals work with Claude Code and what differences exist prevents confusion when following along with course demonstrations that may use a specific environment.

## Summary

Claude Code works in multiple terminal environments including macOS Terminal, Windows Terminal, Git Bash, WSL, and the VS Code integrated terminal. The choice of terminal affects command availability and PATH configuration. The VS Code integrated terminal is a recommended choice for most developers as it keeps Claude Code close to the code editor.
