# 033 - Adding Custom Skills

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to create custom skills. Students learn the structure of a skill definition and work through a detailed example, understanding how to write steps that are clear, complete, and produce consistent results.

## Learning Objectives

By the end of this lecture, students should understand:

* How skill files are structured.
* Where skill files are stored.
* How to write effective skill steps.
* What constraints to include.
* How to invoke a skill in a session.
* How to iterate and improve skills.

## Key Concepts

### Where Skills Are Stored

Skills are stored as Markdown files in `.claude/commands/` inside the project, or in `~/.claude/commands/` globally.

```
.claude/commands/create-api-endpoint.md
.claude/commands/code-review.md
.claude/commands/write-tests.md
```

### Skill File Structure

```markdown
---
name: create-api-endpoint
description: Creates a consistent REST API endpoint following project patterns.
---

# Skill: Create API Endpoint

## Purpose

Create a new REST API endpoint that follows the existing project conventions.

## Steps

1. Read the existing route files in src/routes/ to understand the current patterns.
2. Read the relevant model in src/models/ to understand the data structure.
3. Read the relevant service in src/services/ if it exists.

4. Create or update the route file with:
   - Input validation using the project's existing validation library.
   - Correct HTTP method and path following existing conventions.
   - Error handling consistent with other routes.
   - Response format matching the existing API.

5. Create or update the service layer with:
   - Business logic separated from the route handler.
   - Database access through the existing data access layer.
   - Proper TypeScript types.

6. Write tests for:
   - Happy path.
   - Validation errors.
   - Not found cases.
   - Unauthorized access if applicable.

7. After implementation:
   - Run the test suite.
   - List changed files.
   - Note any open questions or decisions made.

## Rules

- Follow existing project conventions. Do not introduce new patterns.
- Do not add dependencies without asking.
- Always write tests alongside the implementation.
- Validate all inputs at the route level.
- Keep route handlers thin — business logic belongs in services.
```

### Example: Code Review Skill

```markdown
---
name: code-review
description: Performs a structured code review of recent changes.
---

# Skill: Code Review

## Purpose

Review code changes for correctness, quality, security, and test coverage.

## Steps

1. Identify which files have been changed (use git diff to check).
2. For each changed file:
   a. Read the current state of the file.
   b. Understand what the code is supposed to do.
   c. Evaluate it against the criteria below.

## Review Criteria

**Correctness:**
- Does the code do what it is supposed to do?
- Are there logic errors or off-by-one issues?
- Are edge cases handled?

**Type Safety:**
- Are TypeScript types correct and specific?
- Is `any` used anywhere? Can it be avoided?

**Security:**
- Are inputs validated?
- Are SQL queries parameterized?
- Are any secrets exposed?

**Test Coverage:**
- Are new functions tested?
- Are edge cases covered?

## Output Format

Group findings by severity:

**Critical** — Must fix before merging.
**Warning** — Should fix, but not a blocker.
**Suggestion** — Nice to have improvement.

End with a one-sentence summary.
```

### Invoking a Skill

```text
Use the create-api-endpoint skill to create a new endpoint for retrieving user profile data.
```

Or reference the slash command form:

```text
/create-api-endpoint for user profiles
```

### Iterating on Skills

After using a skill:

* Did it produce the expected result?
* Were any steps skipped or done incorrectly?
* Was any important check missing?

Update the skill file based on real experience. Skills improve over time.

## Important Notes

* Skills work best when steps are concrete and ordered. Vague steps produce vague behavior.
* Include examples in skill steps where the pattern is complex.
* Skills can reference project conventions and should be updated when conventions change.
* Skills in `.claude/commands/` should be committed to version control.

## Why This Lecture Matters

This lecture is where students gain the ability to capture their own best practices inside Claude Code. A well-designed library of skills becomes a productivity multiplier: common tasks take less time and produce more consistent results as the team's skill library grows.

## Summary

Custom skills are defined as Markdown files in `.claude/commands/`. Each skill has a name, description, purpose, ordered steps, rules, and optionally an output format. Clear, specific steps produce consistent behavior. Invoke skills by name in a session. Skills improve over time through iteration — update them whenever you identify gaps in their coverage.
