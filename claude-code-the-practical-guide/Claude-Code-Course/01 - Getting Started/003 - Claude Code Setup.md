# 003 - Claude Code Setup

## Section

Getting Started

## Main Idea

This lecture walks through the process of installing and preparing Claude Code for use. Students learn what prerequisites are needed, why a Claude Code subscription is required, and how to confirm that the installation was successful.

Getting the setup right from the beginning ensures that all the course demonstrations will work correctly without configuration problems later.

## Learning Objectives

By the end of this lecture, students should understand:

* What prerequisites are needed before installing Claude Code.
* Why a Claude Code subscription is necessary.
* How to install Claude Code on your system.
* How to verify that Claude Code is working correctly after installation.

## Key Concepts

### Prerequisites

Before installing Claude Code, you need:

* Node.js installed on your machine (Claude Code requires a modern Node.js version).
* A terminal or command-line interface.
* A Claude Code subscription (Max plan or API access, depending on how you authenticate).

### Claude Code Subscription

Claude Code is a paid product. A subscription is required to use it in production. The course assumes you have access through either:

* An Anthropic Claude Max subscription.
* An API key with sufficient credits.

### Installation Command

Claude Code is installed globally via npm:

```bash
npm install -g @anthropic-ai/claude-code
```

### Verification

After installation, you can verify it works by running:

```bash
claude --version
```

Or by navigating to a project folder and typing:

```bash
claude
```

This should open the Claude Code interactive session.

## Important Notes

* Claude Code requires Node.js 18 or later.
* The `claude` command must be available in your terminal PATH after installation.
* You will need to authenticate Claude Code with your Anthropic account or API key on first run.
* If you use Windows, ensure your terminal is set up properly (Git Bash, WSL, or PowerShell with correct permissions can all work).

## Common Setup Issues

* **npm not found:** Install Node.js first from nodejs.org.
* **Permission errors:** On macOS/Linux, you may need to use `sudo` or configure npm global prefix.
* **Authentication failure:** Make sure you have a valid subscription and are logged into the correct account.

## Why This Lecture Matters

Without a correct setup, none of the course content is practical. This lecture makes sure every student starts from the same working state so that follow-along examples function as expected.

## Summary

This lecture covers installing Claude Code using npm, setting up a valid subscription or API key, and verifying the installation works. Students should complete this step before moving on, as all subsequent lectures depend on having Claude Code running correctly.
