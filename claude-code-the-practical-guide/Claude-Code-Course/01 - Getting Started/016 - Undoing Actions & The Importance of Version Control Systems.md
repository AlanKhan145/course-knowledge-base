# 016 - Undoing Actions & The Importance of Version Control Systems

## Section

Getting Started

## Main Idea

This lecture explains why Git is the most important safety tool when working with Claude Code. Because Claude can make many changes quickly across multiple files, version control gives you the ability to review, compare, and undo AI-generated changes with confidence.

## Learning Objectives

By the end of this lecture, students should understand:

* Why version control is essential when using AI coding assistants.
* How to use Git checkpoints before Claude Code sessions.
* How to review AI-generated changes using Git.
* How to undo changes if Claude Code makes mistakes.
* What workflows protect you from bad AI edits.

## Key Concepts

### Why AI Coding Makes Version Control More Important

When writing code manually, you know exactly what changed and why. When Claude Code makes changes, it may:

* Edit more files than expected.
* Make changes in ways you did not intend.
* Introduce bugs while fixing other issues.
* Remove code that was important.

Without version control, detecting and undoing these problems is very difficult.

### Creating Git Checkpoints Before Claude Sessions

Before asking Claude to make any significant changes:

```bash
git status
git add -A
git commit -m "checkpoint before Claude changes"
```

This creates a safe point you can always return to.

### Reviewing AI-Generated Changes

After Claude finishes:

```bash
# See all changed files
git status

# See what changed in a specific file
git diff src/auth/auth.service.ts

# See all changes at once
git diff
```

Always review the full diff before committing AI changes to the project history.

### Undoing Claude Code Changes

If Claude made a mistake or went in the wrong direction:

```bash
# Discard all uncommitted changes (go back to last commit)
git checkout .

# Or discard changes in a specific file
git checkout -- src/auth/auth.service.ts

# If you already committed Claude's changes and want to undo
git revert HEAD

# Or to go back to the checkpoint commit
git reset --hard HEAD~1
```

### Reviewing Specific File Changes

```bash
# See what Claude changed in one file
git diff HEAD src/components/UserCard.tsx

# Compare against the checkpoint commit specifically
git diff abc1234 HEAD
```

## Best Practices

1. **Always commit before starting a large Claude session.**
2. **Never commit without reviewing the diff.**
3. **Keep Claude sessions focused — smaller changes are easier to review.**
4. **Use branch-based workflows for larger features.** Create a branch, let Claude work on it, then review before merging.
5. **Write descriptive commit messages** that mention Claude was involved if it helps your team context.

## Important Notes

* Version control does not prevent Claude from making mistakes — it just makes recovery possible.
* Sandboxing and permissions reduce risk, but version control is the ultimate safety net.
* Do not auto-commit Claude's changes without review.
* For large changes, create a feature branch before starting the Claude session.

## Why This Lecture Matters

Without version control, a single bad Claude Code session could corrupt significant parts of a project. This lecture instills the habit of using Git as the primary safety mechanism when working with AI. This habit protects students' work and prevents the frustration of unrecoverable mistakes.

## Summary

Git is the most important safety tool for Claude Code users. Creating checkpoints before sessions, reviewing full diffs after sessions, and knowing how to undo changes are essential practices. Never commit AI-generated code without reviewing it, and always prefer working on a feature branch for larger changes.
