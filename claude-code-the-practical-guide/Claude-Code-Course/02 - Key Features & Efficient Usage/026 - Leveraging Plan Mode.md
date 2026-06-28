# 026 - Leveraging Plan Mode

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to use Plan Mode, a Claude Code feature that asks Claude to create a structured implementation plan before writing any code. Plan Mode is one of the most important safety and quality features in Claude Code, especially for complex tasks.

## Learning Objectives

By the end of this lecture, students should understand:

* What Plan Mode is.
* How to activate and use Plan Mode.
* What a good plan from Claude looks like.
* How to review and approve a plan before implementation.
* Why Plan Mode prevents costly mistakes.

## Key Concepts

### What Is Plan Mode

Plan Mode is a Claude Code mode where Claude analyzes the task and produces a detailed plan of what it intends to do before making any changes. Nothing is edited until you explicitly approve the plan.

This is the equivalent of asking a developer to write a design document or technical brief before touching the code.

### Activating Plan Mode

Inside a Claude Code session:

```text
/plan
```

Or you can ask Claude explicitly:

```text
Before making any changes, create a detailed plan of what you intend to implement.
Include which files you will modify, what changes you will make to each, and why.
Do not write any code until I approve the plan.
```

### What a Good Plan Looks Like

Claude should produce something like:

```
Implementation Plan: User Authentication

Files to be modified:
1. src/routes/auth.ts
   - Add POST /register endpoint
   - Add POST /login endpoint
   - Add POST /logout endpoint

2. src/services/authService.ts
   - Add registerUser(email, password) function
   - Add loginUser(email, password) function
   - Add validatePassword(password) function

3. src/middleware/authenticate.ts (new file)
   - Add JWT verification middleware
   - Export for use in protected routes

4. src/types/auth.ts (new file)
   - Define AuthUser type
   - Define LoginRequest type
   - Define RegisterRequest type

Dependencies required:
- jsonwebtoken (already installed)
- bcryptjs (need to install)

Tests to update:
- src/tests/auth.test.ts

Estimated risk: Medium (new files are safe; auth.ts modification could break existing behavior)

Questions:
- Should JWT tokens expire? If yes, what duration?
- Should password reset be included in this feature?
```

### Reviewing the Plan

When you receive the plan:

* Check that the files listed are the right ones.
* Verify that the approach makes sense.
* Ask Claude to revise if anything is wrong.
* Ask clarifying questions before approving.
* Once satisfied, give explicit approval:

```text
The plan looks good. Please implement it now.
```

### Plan Mode Workflow

```
Ask Claude for plan
       ↓
Review plan carefully
       ↓
   Is it right?
   /         \
 Yes          No
  ↓            ↓
Approve     Ask Claude to revise
  ↓
Claude implements
  ↓
Review diff + run tests
  ↓
Commit
```

## Important Notes

* Plan Mode is not automatic. You must ask Claude to plan before acting.
* A plan is only as good as the context Claude has. Provide good context before asking for a plan.
* Plans can be saved as reference documents in the project.
* For small, simple changes, Plan Mode adds overhead. Use it for medium-to-large tasks.
* Always review the plan critically. Claude may propose reasonable-sounding but incorrect approaches.

## Why This Lecture Matters

Without Plan Mode, Claude often starts making changes immediately, sometimes in the wrong direction. Students who use Plan Mode consistently make fewer mistakes, catch design problems early, and have much more confidence in the changes Claude makes.

## Summary

Plan Mode asks Claude to create a detailed implementation plan before writing any code. It includes which files will be changed, what changes will be made, and any risks or open questions. You review and approve the plan before Claude implements it. Plan Mode is especially valuable for complex features, reducing the chance of wasted work from going in the wrong direction.
