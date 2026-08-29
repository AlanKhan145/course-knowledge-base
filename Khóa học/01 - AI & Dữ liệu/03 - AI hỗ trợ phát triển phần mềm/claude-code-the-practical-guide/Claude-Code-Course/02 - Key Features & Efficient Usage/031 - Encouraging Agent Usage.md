# 031 - Encouraging Agent Usage

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how to get Claude to proactively use subagents as part of its workflow rather than requiring you to invoke them manually every time. The goal is to build workflows where Claude automatically delegates tasks to the right agent.

## Learning Objectives

By the end of this lecture, students should understand:

* Why Claude does not always use subagents automatically.
* How to instruct Claude to use agents as part of workflows.
* Where to put agent usage instructions for maximum effect.
* How to design prompts that encourage agent delegation.

## Key Concepts

### Why Claude Does Not Always Use Subagents

By default, Claude Code will handle everything itself unless instructed to delegate. Even if subagents are defined, Claude does not automatically decide to use them for every task.

This is intentional — not every task needs a subagent. But when you have built specialized agents, you want to ensure they are used at the right moments.

### Instructing Claude to Use Agents

The clearest way is to include agent usage in your request:

```text
After implementing the feature, use the code-reviewer subagent to review the changes.
Then use the test-writer subagent to write tests for any new functions.
```

This explicit instruction reliably triggers agent usage.

### Adding Agent Usage Rules to `CLAUDE.md`

To make agent usage automatic for all sessions, add workflow rules to `CLAUDE.md`:

```markdown
## Workflow Rules

- After implementing any feature, invoke the code-reviewer subagent.
- After code review, invoke the test-writer subagent.
- For any change touching authentication logic, always invoke the security-reviewer subagent.
- Do not commit changes without running the code-reviewer subagent first.
```

### The Subagent Description Field

The `description` field in each subagent definition is used by Claude to understand when to invoke the agent automatically:

```markdown
---
name: security-reviewer
description: Use this agent whenever changes are made to authentication, authorization, input validation, or any security-sensitive code.
---
```

A descriptive, specific description helps Claude decide proactively when an agent is relevant.

### Design Pattern: Review-Then-Implement Loop

A common pattern is to instruct Claude to:

1. Implement the feature.
2. Automatically pass the output to a reviewer agent.
3. Incorporate the reviewer's feedback.
4. Repeat until the reviewer gives approval.

```text
Implement the user authentication feature.
After implementation, use the code-reviewer subagent.
If the reviewer raises critical issues, fix them and review again.
Continue until there are no critical issues remaining.
```

### Building Automatic Agent Chains

```text
For this task:
1. Use Plan Mode to create the implementation plan.
2. After approval, implement the plan.
3. After implementation, run the code-reviewer subagent.
4. After review, run the test-writer subagent.
5. After tests are written, run npm test and report results.
```

## Important Notes

* Claude will follow explicit instructions about agent usage reliably. Make it explicit.
* Rules in `CLAUDE.md` are the best place for recurring agent usage patterns.
* Subagent descriptions matter. Write them clearly so Claude can make automatic decisions.
* Do not chain too many agents in a single instruction. Complex chains are harder to debug.
* Agent chains that loop can run for a long time. Always set a stopping condition.

## Why This Lecture Matters

Building workflows where Claude automatically uses the right agents at the right time is what separates basic Claude Code usage from genuine agentic engineering. This lecture teaches the patterns that make agents a natural part of the development workflow rather than an opt-in extra.

## Summary

Claude does not automatically use subagents unless instructed. You can encourage agent usage through explicit instructions in prompts, workflow rules in `CLAUDE.md`, and clear descriptions in subagent definitions. Design patterns like review-then-fix loops and multi-agent chains create powerful automated workflows that handle tasks end-to-end with minimal manual intervention.
