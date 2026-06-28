# 005 - Using Bun

## Section

Getting Started

## Main Idea

This lecture briefly introduces Bun as a JavaScript runtime and package manager. Some demo projects or commands used in the course may use Bun instead of npm or yarn. Students learn what Bun is and why the course may use it so they are not confused when they see `bun` commands.

## Learning Objectives

By the end of this lecture, students should understand:

* What Bun is.
* How Bun differs from npm and yarn.
* Why the course may use Bun in some demonstrations.
* How to install Bun if needed.

## Key Concepts

### What Is Bun

Bun is an all-in-one JavaScript runtime and toolkit. It is designed to be a fast alternative to Node.js and replaces tools like npm, yarn, and even ts-node in many workflows.

Bun includes:

* A JavaScript/TypeScript runtime.
* A package manager (`bun install`).
* A test runner.
* A bundler.

### Why Use Bun

Bun is significantly faster than npm for installing packages and running scripts. Some demo projects in the course use Bun because it speeds up the development workflow.

### Installing Bun

On macOS or Linux:

```bash
curl -fsSL https://bun.sh/install | bash
```

On Windows:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Common Bun Commands

| npm equivalent | Bun equivalent |
|---|---|
| `npm install` | `bun install` |
| `npm run dev` | `bun run dev` |
| `npm run test` | `bun test` |
| `npx <tool>` | `bunx <tool>` |

## Important Notes

* Bun is optional. You can use npm or yarn instead in most cases.
* If the course demo uses `bun run dev`, you can substitute `npm run dev` in most projects.
* Bun is compatible with most Node.js packages.
* Installing Bun globally is enough for following the course.

## Why This Lecture Matters

Students who have not used Bun before may be confused when they see `bun` commands in the terminal. This short lecture removes that confusion by explaining Bun's role and showing how it compares to familiar tools like npm.

## Summary

Bun is a fast JavaScript runtime and package manager used in some course demonstrations. It can replace npm for installing packages and running scripts. Students can install Bun if they want to follow the demos exactly, or they can substitute npm commands in most situations.
