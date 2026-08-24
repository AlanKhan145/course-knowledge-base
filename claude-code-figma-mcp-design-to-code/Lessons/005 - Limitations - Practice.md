# 005 - Limitations

## Section

Claude Code + Figma MCP Server for Design to Code

## Duration

1:31

## Main Idea

Lays out four practical limitations of the Claude Code + Figma MCP workflow for production use.
First, Claude Code is good at generating new components from scratch but not at updating existing
ones — when a design changes and you ask for the code to be updated, it tends to try to recreate
the entire component, and in doing so can introduce incorrect functional changes. Second, sharing
multiple Figma links isn't supported by the MCP server: a design with multiple states requires
converting each Figma frame individually, then re-prompting Claude Code to combine them into one
interactive component — a process that burns more tokens, more time, and requires careful
coordination of how the pieces fit together. Third, it's not possible to iterate on the visually
generated output — adjusting padding or fine-tuning a hover state means more prompting, but AI can
only infer so much from a screenshot, so you risk burning tokens without getting the result you
want. Fourth, the whole workflow is CLI-only, which limits it to developers and makes the developer
the bottleneck for every design change request — every PM's A/B test variant, every marketing
"make this text bigger" ask, every designer's padding comment ends up in the developer's backlog.
The presenter notes, from experience, that this bottleneck problem is not why developers got
excited about coding in the first place.

## Key Topics Mentioned

* Limitation 1: poor handling of updates to existing components (risk of incorrect functional changes)
* Limitation 2: no support for combining multiple Figma links/frames/states in a single pass
* Limitation 3: no visual iteration loop — refinement requires more (imprecise) prompting from screenshots
* Limitation 4: CLI-only workflow restricts the process to developers, creating a change-request bottleneck
* Real-world friction: PM A/B test variants, marketing copy requests, designer padding comments all funnel through one developer

## Review Questions

1. What is the main purpose of Limitations in the context of Claude Code + Figma MCP Server for Design to Code?
2. How would you apply this to a real Figma-to-code workflow?
3. What are the key steps or ideas demonstrated in this lesson?
4. What risk or limitation should you keep in mind when using this in your own work?

## Summary

Details four production-relevant limitations of the Claude Code + Figma MCP workflow: unreliable
updates to existing components, no multi-frame/multi-state support, no visual iteration on
generated output, and a CLI-only process that bottlenecks all design change requests on developers.
This lesson is the turning point of the video — it sets up the argument for Fusion as a different
approach to the same underlying problem.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
