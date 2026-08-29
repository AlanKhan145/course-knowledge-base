# 020 - Making Sense of Prompt & Context Engineering

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains the difference between prompt engineering (writing better instructions) and context engineering (providing the right information). Both are important for getting good results from Claude Code, but context engineering is often the more impactful of the two.

## Learning Objectives

By the end of this lecture, students should understand:

* What prompt engineering is.
* What context engineering is.
* How they differ and how they complement each other.
* Why context quality often matters more than prompt wording.
* How to think about improving both.

## Key Concepts

### Prompt Engineering

Prompt engineering is the practice of writing clearer, more structured, and more effective instructions for Claude.

**Example of a weak prompt:**

```text
Fix the bug.
```

**Example of a stronger prompt:**

```text
There is a bug in the login function in src/auth/auth.service.ts.
When the user enters an incorrect password, the error message does not appear.
The error handling code is in the catch block starting at line 45.
Fix only the error display logic. Do not change any other behavior.
```

**Prompt engineering improvements:**

* Be specific about what is wrong.
* Point to the exact location.
* Describe the expected behavior.
* Set scope limits.
* Use action verbs clearly.

### Context Engineering

Context engineering is the practice of giving Claude the right information to solve the problem — not just writing better instructions, but assembling the right files, constraints, examples, and background knowledge.

**What goes into context:**

* The relevant source files.
* Project constraints and coding rules.
* Examples of existing patterns to follow.
* Test cases or acceptance criteria.
* Error messages or stack traces.
* The project's `CLAUDE.md` instructions.

**What to keep out of context:**

* Unrelated files.
* Old, irrelevant conversation history.
* Contradictory instructions.
* Vague background information.

### The Relationship Between Them

| | Prompt Engineering | Context Engineering |
|---|---|---|
| Focus | How you write the instruction | What information you provide |
| Impact | Better task definition | Better problem-solving material |
| When it helps most | When instructions are vague | When Claude misunderstands the codebase |

Both are needed. A perfect prompt with the wrong files loaded still produces poor results. Good context with a vague prompt also leads to unfocused output. Together they produce consistently good results.

## Important Notes

* Context engineering is often underrated by beginners who focus only on prompt wording.
* Providing too much context (irrelevant files, long conversations) can hurt performance.
* The goal is the right context — not the most context.
* `CLAUDE.md` is a tool for permanent context engineering across sessions.

## Why This Lecture Matters

Many students blame the AI when output is poor, but the root cause is usually bad prompts or bad context. This lecture gives students the mental model to diagnose and fix their own interaction quality instead of assuming Claude is failing.

## Summary

Prompt engineering means writing clearer instructions. Context engineering means providing the right information. Both improve Claude Code output. Context engineering often has the greater impact because Claude can only reason about what is in its context window. The combination of a focused prompt and the right context is what produces consistently reliable results.
