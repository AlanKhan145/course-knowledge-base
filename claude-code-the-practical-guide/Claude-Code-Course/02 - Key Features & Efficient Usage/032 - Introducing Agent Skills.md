# 032 - Introducing Agent Skills

## Section

Key Features & Efficient Usage

## Main Idea

This lecture introduces agent skills as a way to define reusable workflows and instruction sets that Claude can follow for repeated tasks. Skills make Claude's behavior more consistent and reduce the need to re-describe the same process every time.

## Learning Objectives

By the end of this lecture, students should understand:

* What an agent skill is.
* How skills differ from subagents.
* Why skills improve consistency.
* When to create a skill.
* What skills look like in practice.

## Key Concepts

### What Is a Skill

A skill is a reusable instruction set that defines how Claude should approach a specific type of task. When Claude uses a skill, it follows the defined steps consistently every time, regardless of who wrote the prompt or what session is active.

Think of a skill as a checklist or standard operating procedure:

* **Subagent:** Defines who handles the task (the agent's role and perspective).
* **Skill:** Defines how the task is performed (the steps and rules to follow).

### Skills vs Subagents

| Feature | Subagent | Skill |
|---|---|---|
| Defines | Who does the work | How the work is done |
| Contains | Role, perspective, constraints | Steps, process, rules |
| Invoked by | Agent name | Skill name |
| Example | "code-reviewer agent" | "code-review skill" |

In practice, a subagent often uses a specific skill. A code-reviewer agent might use a code-review skill.

### Why Skills Improve Consistency

Without skills, every time you ask Claude to review code or create an endpoint, it decides on its own how to do it. The process varies between sessions and between team members.

With a skill:

* The process is standardized.
* Every invocation follows the same steps.
* Results are predictable.
* Quality is more consistent.
* The process can be improved over time and everyone benefits.

### When to Create a Skill

Create a skill when:

* You find yourself giving Claude the same multi-step instructions repeatedly.
* A task has a clear, repeatable process.
* You want consistent output format or quality.
* Multiple team members need to use the same workflow.
* You want to improve a process over time without changing prompts every session.

### Examples of Skills

* API endpoint builder
* Code review checklist
* Database migration creator
* PR description writer
* Test suite generator
* Documentation updater
* Security audit checklist

## Important Notes

* Skills are defined as Markdown files similar to subagent definitions.
* A skill can be used by any Claude agent, not just a specific subagent.
* Skills are covered in detail in the next lecture with concrete examples.
* Skills can reference other skills (skill composition) for complex workflows.

## Why This Lecture Matters

Understanding skills conceptually before creating them helps students design better skills. Knowing the difference between subagents (roles) and skills (processes) helps students build more organized and maintainable agentic workflows.

## Summary

Skills are reusable instruction sets that define how Claude approaches specific tasks. They standardize workflows, improve consistency, and make Claude's behavior predictable across sessions and team members. Skills define the process; subagents define the role. Create skills for any task that has a clear, repeatable multi-step process.
