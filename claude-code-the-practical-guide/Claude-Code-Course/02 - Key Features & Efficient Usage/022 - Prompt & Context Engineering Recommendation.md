# 022 - Prompt & Context Engineering Recommendation

## Section

Key Features & Efficient Usage

## Main Idea

This lecture consolidates the prompt and context engineering lessons into a set of practical recommendations. Students get a clear, actionable list of best practices they can apply immediately when working with Claude Code.

## Learning Objectives

By the end of this lecture, students should understand:

* The most important prompt engineering habits.
* The most important context engineering habits.
* How to apply these in everyday Claude Code sessions.
* What mistakes to avoid.

## Key Concepts

### Prompt Engineering Best Practices

**1. State the goal clearly:**

```text
I want to add server-side input validation to the user registration endpoint.
```

**2. Mention relevant files:**

```text
The endpoint is in src/routes/auth.ts. The user model is in src/models/user.ts.
```

**3. State constraints upfront:**

```text
Do not change the database schema. Follow existing validation patterns in the codebase.
```

**4. Set scope limits:**

```text
Fix only the validation logic. Do not refactor other parts of the file.
```

**5. Ask for explanation before action:**

```text
Before making any changes, explain your plan and wait for my approval.
```

**6. Provide acceptance criteria:**

```text
The implementation is complete when:
- Empty strings are rejected.
- Email format is validated.
- Password length is enforced.
- Errors return 400 with a clear message.
```

### Context Engineering Best Practices

**1. Load only relevant files:**
Point Claude to the specific files for the task. Do not ask it to read the entire codebase.

**2. Use `CLAUDE.md` for persistent rules:**
Project coding standards, tech stack details, and workflow rules should live in `CLAUDE.md` so they are always in context.

**3. Provide error messages directly:**
If you have an error, paste it into the conversation rather than describing it vaguely.

**4. Give examples of existing patterns:**

```text
Look at how the order endpoint works in src/routes/order.ts.
The new endpoint should follow the same structure.
```

**5. Clear stale context when switching tasks:**
Use `/clear` or start a new session when the current conversation context is no longer relevant to the new task.

**6. Repeat key constraints for long sessions:**
If the session is long and important rules were stated early, repeat them in the current message to make sure they are fresh.

### What to Avoid

* Vague goal descriptions: "fix the bug" or "make it better."
* Omitting file locations.
* Forgetting to set constraints.
* Loading unrelated files into context.
* Running very long sessions for many different tasks.
* Accepting Claude's changes without reviewing them.

## Recommended Workflow for Every Task

1. State the goal clearly.
2. Point to relevant files.
3. State constraints.
4. Ask Claude to explain the plan before acting.
5. Review and approve the plan.
6. Ask Claude to implement.
7. Review the diff.
8. Run tests.
9. Commit.

## Important Notes

* These recommendations improve results for all skill levels. Even experienced developers benefit from structured prompting.
* Context engineering matters more than most students expect. Start loading only the right files.
* Reviewing diffs before committing is non-negotiable when working with AI-generated code.

## Why This Lecture Matters

Practical checklists and concrete recommendations are more useful than theory alone. This lecture gives students tools they can use immediately.

## Summary

The key prompt engineering habits are: state the goal clearly, specify file locations, set constraints, limit scope, and ask Claude to explain before acting. The key context engineering habits are: load only relevant files, use `CLAUDE.md` for persistent rules, provide actual errors rather than descriptions, give pattern examples, and clear stale context when switching tasks. Following these practices consistently produces much better Claude Code output.
