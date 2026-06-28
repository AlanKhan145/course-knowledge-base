# 009 - Choosing AI Models

## Section

Getting Started

## Main Idea

This lecture explains that Claude Code supports different Claude models and that the choice of model affects quality, speed, and cost. Students learn when to use stronger models versus lighter models and how to configure model selection.

## Learning Objectives

By the end of this lecture, students should understand:

* That Claude Code supports multiple Claude models.
* How different models differ in capability, speed, and cost.
* When to use a stronger model versus a lighter one.
* How to configure which model Claude Code uses.

## Key Concepts

### Available Claude Models

Claude Code can use different Claude models from Anthropic's model family. As of 2026, the main models include:

* **Claude Opus** — Most capable, best for complex reasoning, architecture planning, and multi-step tasks. Higher cost and slower.
* **Claude Sonnet** — Strong balance of capability and speed. Good for most coding tasks.
* **Claude Haiku** — Fastest and lowest cost. Good for simple, well-defined tasks.

### When to Use Each Model

| Model | Best For |
|---|---|
| Opus | Complex reasoning, architecture decisions, multi-file refactors, Plan Mode |
| Sonnet | Most daily coding tasks, feature implementation, code review |
| Haiku | Simple lookups, small edits, quick formatting, repetitive tasks |

### Model Selection Strategy

Use the strongest model when:

* The task is ambiguous.
* The codebase is complex.
* You need the AI to reason about multiple files.
* You are using Plan Mode or designing architecture.

Use a lighter model when:

* The task is well-defined and small.
* You need fast responses for iterative work.
* You are running an automated loop with many steps.
* Cost is a concern.

### Configuring the Model

In Claude Code settings:

```json
{
  "model": "claude-sonnet-4-6"
}
```

Or inside a session using the `/model` command or the configuration menu.

### Fast Mode

Claude Code has a Fast Mode that uses Claude Opus with faster output. It does not downgrade to a smaller model but optimizes for speed. Toggle it with `/fast` inside a session.

## Important Notes

* The default model is usually Sonnet, which is a good starting point.
* Switching to Opus for planning tasks and Haiku for simple tasks is a smart cost strategy.
* Model names and availability may change as Anthropic releases updates.
* Always check the Anthropic documentation for the latest model IDs and pricing.

## Why This Lecture Matters

Choosing the wrong model can result in poor output quality (if the model is too weak for the task) or unnecessary cost (if the model is stronger than needed). Understanding model tradeoffs helps students work efficiently and economically.

## Summary

Claude Code supports multiple Claude models with different capability, speed, and cost profiles. Opus is best for complex tasks, Sonnet for most daily coding work, and Haiku for simple and repetitive tasks. Model selection can be configured globally or changed per session.
