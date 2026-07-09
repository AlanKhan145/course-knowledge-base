# Claude Code + Figma MCP Server for Design to Code

Connect a Figma design file to Claude Code through Figma's Dev Mode MCP server, turn a Figma
selection link into working React/MUI code with a single prompt, and understand where that
Claude Code + Figma MCP workflow breaks down in real production use — then see how Builder.io's
Fusion tool reframes the same design-to-code problem as a visual, always-in-sync experience
instead of a one-shot text prompt.

Structured markdown study notes for a short-form product/demo video (source auto-transcribed and
translated to Vietnamese; notes below are written in English).

## Video Stats

- Listed duration: ~5:30 (8 chapters, timestamps 0:00–5:09+)
- Chapters: 8
- Language: English (source auto-transcribed/translated to Vietnamese for note-taking; notes
  below are written in English)
- Publisher: Builder.io (the video pivots into a demo/pitch for Builder.io's "Fusion" product)

## Source & Links

- No source URL was provided alongside the transcript for these notes — if you have the original
  video link, add it here for reference.
- Figma Dev Mode MCP Server docs: search Figma's official documentation for "Dev Mode MCP Server"
  to confirm the current setup steps, since MCP tooling changes quickly.
- Claude Code install: `npm install -g @anthropic-ai/claude-code`

## What You Will Learn

- Why design-to-code hand-off is slow by default (a simple card component takes ~60 minutes, a
  full landing page half a week of manual "human OCR" work translating Figma into code)
- How to install Claude Code and confirm the prerequisites: a Figma Dev/Full seat account with at
  least one design file, and a project that needs the design implemented
- How to enable Figma's Dev Mode MCP Server from the Figma desktop app (Menu → Preferences/Options
  → Enable Dev Mode MCP Server), which starts a local server on port 3845
- How to connect Claude Code to that local Figma MCP server from the terminal, and verify the
  connection with `claude mcp list`
- How to convert a Figma design (e.g. a signup card) into code by pasting a Figma link into a
  Claude Code prompt, and what the generated output looks like against an existing MUI component
  library
- Four practical limitations of the Claude Code + Figma MCP workflow: poor handling of updates to
  existing components, no support for combining multiple Figma links/states in one pass, no way to
  visually iterate on generated output, and a CLI-only workflow that bottlenecks all design change
  requests on a developer
- How Builder.io's Fusion tool targets the same root cause (forcing a visual, multiplayer design
  process into a single-player text workflow) with a visual design-to-code editor that preserves
  React logic/state/API calls when syncing Figma changes, supports multi-frame patterns (e.g.
  carousels) in one step, and gives designers/PMs/marketers a way to make production-safe changes
  without developer time

## How To Use

1. Watch the video chapter by chapter using the notes below as a scaffold.
2. Reproduce the Claude Code + Figma MCP connection in your own environment (`npm install -g
   @anthropic-ai/claude-code`, enable Dev Mode MCP Server in Figma desktop, `claude mcp list` to
   verify).
3. Try converting one of your own Figma components to code with a single Claude Code prompt, then
   deliberately test the four limitations described in Lesson 5 against your own design system.
4. Treat the Fusion section (Lessons 6–7) as a comparison case study, not a required tool — the
   useful takeaway is the diagnosis (text-only prompting vs. visual, always-in-sync editing), which
   applies even if you evaluate a different design-to-code tool.

## Chapters / Lessons

- [001 - Introduction](Lessons/001%20-%20Introduction.md) - 0:00 (0:26)
- [002 - Setting Up Your Environment](Lessons/002%20-%20Setting%20Up%20Your%20Environment.md) - 0:26 (0:29)
- [003 - Connecting Figma to Claude Code](Lessons/003%20-%20Connecting%20Figma%20to%20Claude%20Code.md) - 0:55 (0:34)
- [004 - Converting Designs to Code](Lessons/004%20-%20Converting%20Designs%20to%20Code.md) - 1:29 (0:33)
- [005 - Limitations](Lessons/005%20-%20Limitations.md) - 2:02 (1:31)
- [006 - Fusion: A Better Solution](Lessons/006%20-%20Fusion%20A%20Better%20Solution.md) - 3:33 (0:41)
- [007 - Fusion Features and Benefits](Lessons/007%20-%20Fusion%20Features%20and%20Benefits.md) - 4:14 (0:55)
- [008 - Future of AI in Design](Lessons/008%20-%20Future%20of%20AI%20in%20Design.md) - 5:09 (~0:20)

## Study Checklist

- [ ] Watch the video in order, chapter by chapter.
- [ ] Install Claude Code and enable Figma's Dev Mode MCP Server on your own machine.
- [ ] Convert one real Figma component to code with a single prompt and evaluate the output
      against your own component library conventions.
- [ ] Deliberately try to update an existing generated component and note whether Claude Code
      regenerates it correctly or introduces unintended functional changes.
- [ ] Write one note on which of the four limitations (update handling, multi-frame states,
      visual iteration, CLI-only access) would matter most for your team.

## Note on Source Data

This folder covers a single short-form video rather than a paid multi-module course, so it is
organized as one course with 8 chapter-based lessons instead of the multi-section layout used
elsewhere in this repo. The video is presented from Builder.io's perspective and includes a
promotional segment for their "Fusion" product (Lessons 6–8) — treat that portion as a vendor
pitch/case study rather than a neutral tutorial.
