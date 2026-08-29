# 044 - Running Claude Code In A Loop

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how to run Claude Code in an iterative loop — a pattern where Claude performs an action, receives feedback, improves the result, and repeats. Loops enable autonomous multi-step workflows where Claude works toward a goal until a stopping condition is met.

## Learning Objectives

By the end of this lecture, students should understand:

* What a Claude Code loop is.
* When loops are appropriate.
* How to design an effective loop.
* What stopping conditions loops must have.
* What risks loops carry and how to mitigate them.

## Key Concepts

### What Is a Loop

A loop is an instruction pattern where Claude:

1. Performs an action (writes code, runs tests, checks the browser).
2. Evaluates the result.
3. Determines if the goal is met.
4. If not, adjusts and tries again.
5. Continues until the goal is met or a stopping condition is reached.

**Example loop instruction:**

```text
Implement the shopping cart feature.
After each implementation step, run npm test.
If tests fail, analyze them and fix the failures.
Continue until all tests pass.
Maximum 5 iterations.
```

### Good Use Cases for Loops

* **Test-driven fixing:** Implement, run tests, fix failures, repeat.
* **UI refinement:** Make UI changes, check in browser, identify issues, fix, repeat.
* **Build fixing:** Fix build error, attempt to build, check result, repeat.
* **Code quality loops:** Implement, run linter, fix violations, run linter again.

### Designing an Effective Loop

**Define the goal clearly:**

```text
Goal: All unit tests in src/tests/auth.test.ts must pass.
```

**Define the feedback mechanism:**

```text
After each change, run: npm test -- --testPathPattern=auth
```

**Define the stopping conditions:**

```text
Stop when:
- All specified tests pass. (success)
- 5 iterations have been completed without success. (limit)
- A new error appears that was not in the original error list. (safety)
```

**Define what Claude should not do:**

```text
Do not change test files.
Do not add new dependencies.
Do not delete any existing functionality.
```

### Stopping Conditions Are Mandatory

A loop without a stopping condition can run indefinitely, consuming API credits and making unpredictable changes. Always define:

* **Success condition:** When to stop because the goal is achieved.
* **Iteration limit:** Maximum number of attempts.
* **Safety condition:** When to stop because something unexpected happened.

### The `/loop` Skill Pattern

Claude Code supports a built-in looping behavior through the `/loop` skill or equivalent patterns. The skill creates a structured loop with the specified prompt on a defined interval.

For agentic coding loops (as opposed to time-based loops), define the loop inline in your prompt with explicit stopping conditions.

### Loop Safety

Loops with Claude making automatic changes carry more risk than single-step sessions. Mitigate risks:

* **Use version control checkpoints** before starting any loop.
* **Limit file scope** — tell Claude which files it is allowed to change.
* **Monitor the loop** — do not leave a loop unattended for long sessions.
* **Review the diff** after the loop completes, before accepting changes.
* **Set iteration limits** — never allow unbounded loops.

## Important Notes

* Loops work best for well-defined goals with clear success criteria.
* Vague goals produce vague loops that run without converging.
* Test feedback loops are among the most reliable because test results are binary (pass/fail).
* Browser feedback loops are less reliable due to visual ambiguity.
* Always review the full set of changes after a loop, not just the final iteration.

## Why This Lecture Matters

Loops represent the step from Claude as a tool you control to Claude as an autonomous agent working toward a goal. Understanding how to design safe, bounded loops with clear goals and stopping conditions is the foundation of agentic engineering with Claude Code.

## Summary

Claude Code loops are iterative instruction patterns where Claude performs an action, evaluates the result, and repeats until a goal is met. They are most effective for test-driven fixing, UI refinement, and build repair. Every loop must have explicit stopping conditions: a success state, an iteration limit, and a safety abort condition. Always use version control checkpoints before loops and review the full diff after completion.
