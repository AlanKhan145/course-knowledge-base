# 030 - Creating & Using A Custom Subagent

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to create a custom subagent tailored to the needs of a specific project. Students learn the structure of a subagent definition and see a practical example of how to create and use a custom agent.

## Learning Objectives

By the end of this lecture, students should understand:

* How subagents are defined.
* What to include in a subagent definition.
* How to write a focused and effective system prompt for a subagent.
* How to use a custom subagent in a session.
* How to test and improve a custom subagent.

## Key Concepts

### Where Subagents Are Defined

Custom subagents are defined in Markdown files stored in the `.claude/agents/` directory inside your project (or globally in `~/.claude/agents/` for agents you want available in all projects).

**File naming:**

```
.claude/agents/code-reviewer.md
.claude/agents/test-writer.md
.claude/agents/security-reviewer.md
```

### Subagent Definition Format

Each subagent file has a frontmatter section and a body:

```markdown
---
name: code-reviewer
description: Reviews code changes for correctness, type safety, naming, and test coverage.
---

You are a TypeScript code reviewer for this project.

Your role:
- Review code changes for correctness and logic errors.
- Check type safety and avoid use of `any`.
- Evaluate naming clarity (variables, functions, components).
- Identify unnecessary complexity.
- Check for missing tests on critical logic.
- Flag security concerns like input validation gaps.

Your behavior:
- Be specific. Reference file names and line numbers.
- Group findings by severity: Critical, Warning, Suggestion.
- Do not rewrite the code unless asked.
- Provide a brief summary at the end.

Constraints:
- Focus on the changed files only, not the whole codebase.
- Do not flag style issues that are handled by the linter.
```

### Example: Test Writer Subagent

```markdown
---
name: test-writer
description: Writes tests for new code following the project's Vitest patterns.
---

You are a test writer for this TypeScript/React project.

Your role:
- Write unit tests for new functions and utilities.
- Write component tests for new React components.
- Follow the existing test patterns in src/tests/.
- Use Vitest and React Testing Library.

Your behavior:
- Before writing tests, read the existing test files to understand the patterns.
- Cover happy path, edge cases, and error cases.
- Keep tests focused and independent.
- Do not test implementation details — test behavior.

Constraints:
- Use describe/it blocks.
- Use vi.mock for external dependencies.
- Do not write tests that depend on each other.
```

### Using a Custom Subagent

Once defined, you can invoke the subagent in a session:

```text
Use the code-reviewer subagent to review the changes I just made.
```

Or as part of a workflow:

```text
After implementing the feature, automatically invoke the code-reviewer subagent.
Then invoke the test-writer subagent to write tests for the new code.
```

### Testing and Improving a Custom Subagent

After using a subagent:

* Review whether its output matched what you needed.
* Identify where it was vague, too strict, or missed important issues.
* Update the subagent definition to address the gaps.
* Repeat until the subagent behaves consistently.

## Important Notes

* Start with a focused, simple subagent definition. Add complexity only when needed.
* The `description` field matters — Claude uses it to decide when to invoke the agent automatically.
* Subagents can also reference project files or conventions in their instructions.
* Custom subagents should be committed to version control and shared with the team.

## Why This Lecture Matters

This is the first hands-on lesson where students create a custom agent. Building a custom subagent means students are now extending Claude Code beyond its defaults to match their specific project needs. This is a significant step toward agentic workflow design.

## Summary

Custom subagents are defined in Markdown files in `.claude/agents/`. Each definition includes a name, description, and a focused system prompt that describes the agent's role, behavior, and constraints. After creation, subagents can be invoked by name in a session or triggered automatically in workflows. Test and iterate on subagent definitions until they behave consistently.
