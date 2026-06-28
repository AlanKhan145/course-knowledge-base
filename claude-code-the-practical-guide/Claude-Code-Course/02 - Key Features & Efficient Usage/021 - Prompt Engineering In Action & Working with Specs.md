# 021 - Prompt Engineering In Action & Working with Specs

## Section

Key Features & Efficient Usage

## Main Idea

This lecture demonstrates prompt engineering in practice and introduces specifications (specs) as a structured way to communicate complex feature requirements to Claude. Specs reduce ambiguity and give Claude a clear, complete picture of what needs to be implemented.

## Learning Objectives

By the end of this lecture, students should understand:

* How to apply prompt engineering techniques to real tasks.
* What a spec is and why it helps.
* How to write a good feature spec.
* How to use a spec with Claude Code.
* How specs improve implementation consistency.

## Key Concepts

### Prompt Engineering In Action

Before writing any feature, improve your prompt by:

**1. Specifying location:**

```text
In the file src/services/cartService.ts, add a function...
```

**2. Describing the expected behavior:**

```text
The function should accept an array of cart items and return the total price.
Include tax at 10%. Round to 2 decimal places.
```

**3. Setting constraints:**

```text
Use the existing Product type from src/types/product.ts.
Do not add new dependencies.
Follow the existing code style in this file.
```

**4. Asking for confirmation before acting:**

```text
Before writing any code, describe what you plan to implement.
```

### What Is a Spec

A spec (specification) is a structured document that describes:

* The goal of the feature.
* The requirements it must meet.
* The constraints it must follow.
* The acceptance criteria.

Specs give Claude a complete picture before it starts working, which reduces the need for back-and-forth corrections.

### Example Spec Format

```markdown
# Feature: User Authentication

## Goal
Allow users to sign up, log in, and log out of the application.

## Requirements
- Users can register with email and password.
- Users can log in with their credentials.
- Users can log out.
- Passwords must be at least 8 characters.
- Error messages appear for invalid credentials.

## Constraints
- Use the existing auth service in src/services/authService.ts.
- Do not change the database schema.
- Follow the existing TypeScript patterns in the codebase.
- Do not add new npm packages.

## Acceptance Criteria
- A new user can successfully register.
- A registered user can log in.
- A logged-in user can log out.
- Invalid credentials show a clear error message.
- Passwords shorter than 8 characters are rejected.
```

### Using a Spec With Claude Code

```text
I have written a spec for the user authentication feature.
Here it is:

[paste spec]

Please review the spec and ask any clarifying questions before implementing.
Then create an implementation plan.
Do not write any code yet.
```

### When Specs Are Most Valuable

* Large features that span multiple files.
* Features with specific business rules.
* Tasks with clear acceptance criteria.
* Situations where the wrong implementation would be costly to undo.

For small, simple changes, a well-structured prompt is enough. Specs add overhead that pays off for complex tasks.

## Important Notes

* Specs do not need to be perfect. Even a rough spec is better than no spec.
* Ask Claude to improve or critique the spec before implementing it.
* Specs can be stored in version control as part of the project documentation.
* A spec becomes a natural checklist for reviewing whether implementation is complete.

## Why This Lecture Matters

Without specs or structured prompts, Claude often takes shortcuts, makes assumptions, or implements only part of the requirements. This lecture teaches students to communicate with Claude more like a technical lead would brief a developer: with clear goals, concrete requirements, and testable outcomes.

## Summary

Prompt engineering involves specifying location, describing expected behavior, setting constraints, and asking Claude to confirm before acting. Specs are structured documents that give Claude the full picture of a feature before implementation begins. Together they reduce ambiguity, prevent incomplete implementations, and make complex tasks more manageable. Use specs for large features and improve them through iteration with Claude's feedback.
