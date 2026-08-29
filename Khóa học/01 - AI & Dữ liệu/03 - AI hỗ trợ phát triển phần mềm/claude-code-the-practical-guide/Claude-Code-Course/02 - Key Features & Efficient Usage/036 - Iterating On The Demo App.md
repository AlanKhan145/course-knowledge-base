# 036 - Iterating On The Demo App

## Section

Key Features & Efficient Usage

## Main Idea

This lecture applies the course concepts to a real demo application. Students see how to use context engineering, `CLAUDE.md`, Plan Mode, subagents, and skills together in a realistic development workflow. The goal is to demonstrate that these tools work together, not in isolation.

## Learning Objectives

By the end of this lecture, students should understand:

* How to combine multiple Claude Code features in a real workflow.
* How to use Plan Mode for feature additions.
* How to use review and test subagents after implementation.
* How to manage context during a realistic development session.
* What a complete Claude Code-assisted feature workflow looks like.

## Key Concepts

### The Demo Workflow

The typical workflow applied to the demo app:

**1. Inspect the current state:**

```text
Inspect the demo app project structure and explain what it does.
Read CLAUDE.md to understand the project rules.
Do not make any changes yet.
```

**2. Identify what to improve:**

```text
Based on the current state, identify two or three improvements we could make:
- Bug fixes
- Missing features
- Code quality improvements
- Performance improvements
Tell me which has the highest value and lowest risk.
```

**3. Plan the improvement:**

```text
Enter Plan Mode.
Create a detailed plan for implementing [chosen improvement].
Include which files will change and why.
```

**4. Review and approve the plan:**

Read the plan carefully. Ask clarifying questions. Approve when satisfied.

**5. Implement:**

```text
Implement the approved plan.
Follow the coding rules in CLAUDE.md.
Keep changes minimal.
```

**6. Review the implementation:**

```text
Use the code-reviewer subagent to review the changes.
```

**7. Write tests:**

```text
Use the test-writer subagent to write tests for the new code.
```

**8. Verify:**

```text
Run the test suite.
Run the linter.
Show me the full list of changed files.
```

**9. Commit:**

After reviewing the diff:

```bash
git add -A
git commit -m "feat: add [description of change]"
```

### What Students Learn From This Lecture

* Seeing features work together in context makes their value clear.
* The workflow is sequential and deliberate — never rushing from prompt to implementation.
* Each stage adds value: planning prevents wrong direction, review catches mistakes, tests validate correctness.
* `CLAUDE.md` rules are respected throughout without repeating them in every prompt.

### Common Observations From Demo App Sessions

* Claude often finds existing bugs while implementing new features.
* The plan step frequently reveals assumptions that need clarification.
* The review step regularly catches issues the main implementation missed.
* Test writing often reveals edge cases not covered in the original implementation.

## Important Notes

* The demo app is available in the course resources.
* Students should follow along with their own version of the demo app.
* The exact improvements made in the lecture may vary based on what the instructor demonstrates.
* The workflow described here is more important than the specific changes made.

## Why This Lecture Matters

Theory is valuable but seeing a complete workflow applied to a real project is what builds confidence. This lecture is where students see that the course concepts are not just academic — they work together in practice to produce a professional development workflow.

## Summary

This lecture applies Claude Code features to a demo application using a complete workflow: inspect, plan, review, implement, review with subagents, test, verify, and commit. Students see how context engineering, `CLAUDE.md`, Plan Mode, subagents, and skills work together rather than in isolation. The workflow itself — not just the individual features — is the key lesson.
