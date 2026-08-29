# 029 - Understanding Subagents

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains subagents: specialized assistants within Claude Code that focus on specific types of tasks. Understanding subagents helps students know how to delegate different responsibilities to the right agent, improving quality and consistency.

## Learning Objectives

By the end of this lecture, students should understand:

* What a subagent is in Claude Code.
* Why subagents exist.
* What types of subagents are useful.
* How subagents differ from the main Claude Code assistant.
* How to think about which tasks to delegate to a subagent.

## Key Concepts

### What Is a Subagent

A subagent is a Claude instance configured with specific instructions, focus, and behavior for a particular type of task. Instead of using the same general Claude for every task, you can use specialized agents that are tuned for what they do.

Think of it like a development team:

* A general developer handles most tasks.
* A security reviewer focuses only on security.
* A test engineer focuses only on tests.
* A code reviewer focuses only on review quality.

### Why Subagents Help

Using a focused subagent for a specific task produces better results than asking a general assistant to do everything:

* The subagent's instructions are optimized for its specific role.
* It does not get distracted by other concerns.
* Its output is more consistent because the instructions are fixed.
* It can be given specific knowledge relevant to its role.

### Common Subagent Types

**Code Reviewer:**
Reviews changes for correctness, type safety, naming, complexity, and test coverage.

**Test Writer:**
Writes tests for new or existing code following the project's testing patterns.

**Security Reviewer:**
Inspects code for security vulnerabilities: injection, authentication issues, input validation gaps, exposed credentials.

**Refactoring Agent:**
Simplifies and reorganizes code without changing behavior.

**Documentation Writer:**
Writes or updates documentation, comments, and API references.

**Dependency Auditor:**
Reviews newly added dependencies for security, licensing, and bundle size impact.

**Performance Reviewer:**
Identifies performance bottlenecks in code.

### How Subagents Are Used

You invoke a subagent by asking Claude to use it or by referring to it by name:

```text
After you implement the feature, use the code-review subagent to inspect the changes.
Then use the test-writer subagent to add any missing tests.
```

Claude can launch subagents automatically as part of a workflow.

### The Relationship Between Subagents and Skills

Subagents define who does the work (their role and focus).
Skills define how they do the work (the specific steps they follow).

These two concepts complement each other and are often combined in practice.

## Important Notes

* Subagents are defined by their system prompt and instructions. Custom subagents are configured by the developer.
* Claude Code comes with some built-in subagents. Students can also create their own (covered in the next lecture).
* A subagent is still a Claude instance. It has the same underlying capabilities but different instructions.
* Subagents do not share context with each other automatically. You control what information passes between them.

## Why This Lecture Matters

Understanding subagents changes how students think about Claude Code. Instead of a single assistant doing everything, it becomes a team of specialized agents working together. This mental model enables more sophisticated and more reliable agentic workflows.

## Summary

Subagents are Claude instances configured with specific roles and instructions for particular types of tasks. Common examples include code reviewers, test writers, security reviewers, and documentation writers. Subagents produce more consistent results for their specific tasks than a general assistant. They complement skills, which define the steps the agent follows.
