# 043 - Providing Feedback via Automated Tests

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to use automated test results as feedback for Claude Code. When Claude implements a feature and tests fail, the test output can be fed back to Claude so it can understand the failures, diagnose the root cause, and fix the issues without manual intervention.

## Learning Objectives

By the end of this lecture, students should understand:

* Why test output is valuable feedback for Claude.
* How to pass test results back to Claude.
* How Claude interprets test failures.
* How to build a test-driven feedback loop.
* What the limits of this approach are.

## Key Concepts

### Why Tests Are Good Feedback

Test output provides Claude with:

* Exact failure information (which test, what assertion failed).
* The actual versus expected values.
* Stack traces pointing to the relevant code.
* Whether the issue is a logic error, type error, or missing behavior.

This is far more precise than describing the problem in text.

### Basic Test Feedback Workflow

**Manual approach (paste test output):**

```text
I ran the tests and got these failures:

FAIL src/tests/auth.test.ts
  ● loginUser › should return error for invalid password
    Expected: { success: false, error: "Invalid credentials" }
    Received: { success: false, error: "Invalid password" }

    at Object.<anonymous> (src/tests/auth.test.ts:34:5)

Please analyze the failure, find the root cause, and fix it with minimal changes.
```

**Automated approach (ask Claude to run tests itself):**

```text
Implement the user authentication feature.
After implementation, run npm test.
If any tests fail, analyze the failures, fix them, and run tests again.
Repeat until all tests pass.
```

### Claude's Test Failure Analysis Pattern

When given test failures, Claude should:

1. Read the failing test to understand what behavior is expected.
2. Read the implementation code that is being tested.
3. Identify the discrepancy.
4. Make the minimal change to fix the failure.
5. Run the tests again.

### Test-Driven Development With Claude

A powerful workflow is to write tests before asking Claude to implement:

```text
Here are the tests I have written for the new feature:
[paste test file]

Implement the code that makes these tests pass.
Do not change the test file.
Run npm test after implementation to verify all tests pass.
```

This is the AI-assisted version of test-driven development.

### What to Do When Tests Keep Failing

If Claude is stuck in a failure loop:

* Add more context: provide the relevant code files directly.
* Check if the tests themselves have issues.
* Ask Claude to explain what it thinks the correct behavior should be before fixing.
* Break the failing tests into smaller units to isolate the problem.

### Types of Test Feedback That Work Well

* **Unit test failures** — Precise assertion failures with clear expected/actual values.
* **Integration test failures** — HTTP response mismatches, database state errors.
* **Type check errors** — TypeScript compilation failures.
* **Lint errors** — Style or rule violations.

### Types of Feedback That Work Less Well

* End-to-end test failures involving complex browser state.
* Flaky tests that fail inconsistently.
* Tests with poor error messages that do not identify the root cause.

## Important Notes

* Always review Claude's fix before re-running tests. Claude may fix the symptom rather than the root cause.
* If tests are poorly written, Claude's fixes may break other functionality while making the failing test pass.
* Set a maximum number of retry iterations to prevent Claude from looping indefinitely.
* Good tests with clear assertions produce much better feedback than vague integration tests.

## Why This Lecture Matters

Test-driven feedback is the most reliable automated feedback mechanism for logic correctness. Students who learn to use test output as Claude feedback can automate large portions of the bug-fixing cycle and implement features with much higher confidence in correctness.

## Summary

Automated test results are precise feedback for Claude Code. Pass test output directly to Claude and ask it to analyze failures, find root causes, and fix them. Claude can also run tests itself and iterate until they pass. This creates a test-driven feedback loop that automates much of the debugging process. Good tests with clear assertions provide the most useful feedback for Claude.
