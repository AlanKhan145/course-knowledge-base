# 035 - Enhancing Skills & Adding Third-Party Skills

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how to improve custom skills over time and how to incorporate skills created by others. Students learn best practices for skill iteration and evaluation, and understand where to find skills shared by the community.

## Learning Objectives

By the end of this lecture, students should understand:

* How to evaluate whether a skill is working well.
* What signals indicate a skill needs improvement.
* How to iterate on skill definitions effectively.
* Where to find third-party skills.
* How to evaluate third-party skills before using them.

## Key Concepts

### Signs a Skill Needs Improvement

After using a skill, evaluate the output:

* **Steps were skipped:** Claude did not follow all the steps. Either the steps were unclear or the ordering was wrong.
* **Output was inconsistent:** Different invocations produced different structures or formats. The skill needs more specific formatting instructions.
* **Edge cases were missed:** The skill did not handle unusual situations. Add specific rules for edge cases.
* **Too much or too little detail:** Output format does not match what you need. Adjust the output format section.
* **Wrong context was loaded:** Claude read unnecessary files. Add guidance on which files to focus on.

### How to Improve a Skill

**Step 1: Document the gap.**
After each use, note what was missing or wrong.

**Step 2: Add specificity.**
Replace vague instructions with concrete ones.

Before:
```markdown
4. Write tests for the new code.
```

After:
```markdown
4. Write Vitest unit tests for the new functions:
   - Place tests in the corresponding test file in src/tests/.
   - Write one describe block per function.
   - Cover: happy path, null/undefined inputs, out-of-range values, and error cases.
   - Use vi.mock for all external dependencies.
```

**Step 3: Add examples.**
If a format or pattern is expected, show an example:

```markdown
## Output Format Example

**Critical:** The login function does not validate email format (src/auth/auth.service.ts:45).
**Warning:** Unused import in user.ts:3.
**Suggestion:** Consider adding a null check before accessing user.profile.
```

**Step 4: Add constraints.**
List what the skill should NOT do:

```markdown
## Constraints
- Do not refactor code that is not directly related to the task.
- Do not add dependencies not already in the project.
- Do not change test configuration files.
```

### Third-Party Skills

Third-party skills are skill files created by other developers or the community. They can be:

* Shared on GitHub repositories.
* Published in Claude Code community channels.
* From Anthropic's official skill library (if available).

### Evaluating Third-Party Skills

Before using a third-party skill:

1. **Read it fully.** Understand exactly what it will do.
2. **Check assumptions.** Does it assume the same tech stack and conventions as your project?
3. **Check permissions.** Does it require any dangerous permissions?
4. **Test it on a small task first.** Do not use an unknown skill on a critical part of the codebase.
5. **Modify as needed.** Adapt the skill to match your project's specific conventions.

### Sharing Your Own Skills

If you build a skill that works well:

* Document how to use it.
* Remove project-specific details.
* Share it with the community for others to use and improve.

## Important Notes

* Skills are living documents. They should be updated as your project evolves.
* A skill that worked well six months ago may need revision if the codebase has changed.
* Never blindly use third-party skills on production code without review.
* Skill files should be version-controlled and changes should be reviewed like code changes.

## Why This Lecture Matters

Skills are only as good as the effort put into improving them. Students who understand how to iterate on skills build a progressively better toolkit over time. Understanding how to evaluate third-party skills helps students take advantage of community knowledge without introducing risks.

## Summary

Improve skills by identifying gaps after each use and adding specificity, examples, and constraints. Common gaps include skipped steps, inconsistent output, and missed edge cases. Third-party skills from the community can save time but must be read carefully and adapted to your project's conventions before use. Treat skill files like code — version-control them, review changes, and improve them continuously.
