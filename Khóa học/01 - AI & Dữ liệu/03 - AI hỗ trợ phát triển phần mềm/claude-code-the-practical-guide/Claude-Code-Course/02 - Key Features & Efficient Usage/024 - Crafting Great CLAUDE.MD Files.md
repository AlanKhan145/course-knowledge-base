# 024 - Crafting Great CLAUDE.MD Files

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how to write an effective `CLAUDE.md` file. A great `CLAUDE.md` acts as persistent project memory and instructions for Claude, ensuring that every session starts with the right project knowledge and behavior rules.

## Learning Objectives

By the end of this lecture, students should understand:

* What belongs in a `CLAUDE.md` file.
* What a well-structured `CLAUDE.md` looks like.
* How to write clear and actionable project rules.
* What makes a `CLAUDE.md` effective versus ineffective.
* How to maintain and update `CLAUDE.md` over time.

## Key Concepts

### What `CLAUDE.md` Is

`CLAUDE.md` is a Markdown file placed in the root of the project. Claude Code reads it at the start of every session and uses it as persistent project context.

Think of it as the instructions you would give to a new developer joining the team — but optimized for an AI assistant.

### Structure of a Great `CLAUDE.md`

```markdown
# Project Overview

Brief description of what this project does and who it is for.
One to three sentences is enough.

## Tech Stack

- Language: TypeScript
- Framework: Next.js 14
- Database: PostgreSQL with Prisma ORM
- Styling: Tailwind CSS
- Testing: Vitest
- Package manager: npm

## Commands

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Build for production
npm run build
```

## Project Structure

- `src/app` — Next.js App Router pages and layouts
- `src/components` — Reusable UI components
- `src/lib` — Utilities and shared logic
- `src/services` — Business logic and external integrations
- `prisma/schema.prisma` — Database schema

## Coding Rules

- Use TypeScript strictly. Avoid `any` types.
- Keep components small and single-responsibility.
- Prefer server components over client components when possible.
- Use Tailwind for all styling — no inline styles or CSS modules.
- Write tests for all new utility functions and services.
- Do not introduce new dependencies without asking first.

## Workflow Rules

- Always inspect existing code before making changes.
- Create a plan before implementing large features.
- Run `npm test` after any logic changes.
- Summarize changed files after implementation is complete.

## Important Files

- `src/lib/db.ts` — Database client configuration
- `src/services/auth.ts` — Authentication logic
- `prisma/schema.prisma` — Database schema (do not change without review)
```

### What Makes a `CLAUDE.md` Effective

**Be specific:**
Vague rules like "write good code" do not help. Specific rules like "prefer server components over client components" give Claude actionable guidance.

**Include commands:**
Claude needs to know how to run tests, start the server, and check the build. Without this, it cannot give you accurate instructions.

**List important files:**
Pointing Claude to the most important files in the project helps it find the right context quickly.

**Add workflow rules:**
Instructions about how Claude should behave (inspect before editing, plan before implementing) improve safety and consistency.

### What Not to Put in `CLAUDE.md`

* Sensitive information like API keys or passwords.
* Outdated information about old parts of the codebase.
* Overly long descriptions that are not actionable.
* Information that changes frequently (put that in comments in the code instead).

## Important Notes

* `CLAUDE.md` should be committed to version control and kept up to date.
* Review and update it whenever the tech stack or project structure changes significantly.
* Nested `CLAUDE.md` files in subdirectories are also read by Claude and apply to those folders.
* The quality of `CLAUDE.md` directly affects the quality of Claude Code sessions.

## Why This Lecture Matters

`CLAUDE.md` is the most powerful persistent improvement you can make to Claude Code's behavior on your project. Students who write good `CLAUDE.md` files get better results in every session without having to repeat instructions each time.

## Summary

A great `CLAUDE.md` includes a project overview, the tech stack, commands for development and testing, the project structure, specific coding rules, workflow behavior rules, and references to important files. It should be specific, actionable, and committed to version control. Keeping it updated as the project evolves ensures Claude always has accurate project knowledge.
