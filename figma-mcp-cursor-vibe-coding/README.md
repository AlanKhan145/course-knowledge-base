# Vibe-Coding Figma Design System Components with Cursor & Figma MCP

Connect Figma to Cursor through the Figma MCP server, feed AI your design tokens and variable
structure, and vibe-code your first React design system components (buttons) straight from a
Figma selection link.

Structured markdown study notes for the UI Collective YouTube video hosted by Kirkland, with
guest Amir (Cursor AI specialist).

## Video Stats

- Listed duration: 18:26
- Chapters: 8
- Language: English (source auto-transcribed/translated to Vietnamese for note-taking; notes
  below are written in English)
- Channel: UI Collective

## Source & Links

- UI Collective Academy: https://uicollective.co/
- Amir's channel: `@amirmxt` / https://buildshipmarket.com/
- UI Collective Kit (design system used in the demo): https://collectivekit.co/
- Figma MCP Catalog: https://www.figma.com/mcp-catalog/
- Design system consulting: https://designsystemlabs.co/

## What You Will Learn

- Connect Cursor to Figma using the Figma MCP server, install the MCP tool, and authenticate it
  against a single Figma account
- Understand why AI needs to be "prepped" with design-token/variable context before it can
  generate reliable components (the same prep-with-context idea used for PRDs, applied to tokens)
- Import a Figma variable structure (brand → alias → mapped collections) into Cursor by having AI
  research the Figma file and summarize the token architecture in a markdown file first
- Vibe-code the actual design tokens so they reference variables (not raw hex codes), preserving
  the brand → alias → mapped chain from Figma in code
- Select a small demo set of Figma components (e.g. a handful of button variants) and vibe-code
  them into React components that consume those tokens
- Install dependencies and run a local dev server to preview and interact with the generated
  components

## How To Use

1. Watch the video chapter by chapter using the notes below as a scaffold.
2. Reproduce the Cursor + Figma MCP connection in your own environment.
3. Rebuild the "summarize tokens in markdown → build tokens → build components" workflow against
   your own design system instead of copying prompts verbatim.
4. Compare the generated components against your Figma source for missed states (e.g. hover
   effects) and practice the follow-up dialogue needed to fix them.

## Chapters / Lessons

- [001 - Introduction](Lessons/001%20-%20Introduction.md) - 0:00 (0:52)
- [002 - Connecting Cursor and Figma MCP](Lessons/002%20-%20Connecting%20Cursor%20and%20Figma%20MCP.md) - 0:52 (2:46)
- [003 - AI Generation Technique](Lessons/003%20-%20AI%20Generation%20Technique.md) - 3:38 (1:30)
- [004 - Figma Variable and Design Token Intro](Lessons/004%20-%20Figma%20Variable%20and%20Design%20Token%20Intro.md) - 5:08 (1:13)
- [005 - Vibe-Coding Our Design Tokens](Lessons/005%20-%20Vibe-Coding%20Our%20Design%20Tokens.md) - 6:21 (6:12)
- [006 - Choosing Our Components](Lessons/006%20-%20Choosing%20Our%20Components.md) - 12:33 (0:49)
- [007 - Vibe-Coding Our Figma Components](Lessons/007%20-%20Vibe-Coding%20Our%20Figma%20Components.md) - 13:22 (3:22)
- [008 - Previewing End Result](Lessons/008%20-%20Previewing%20End%20Result.md) - 16:44 (1:42)

## Study Checklist

- [ ] Watch the video in order, chapter by chapter.
- [ ] Set up your own Figma MCP connection in Cursor (or another supported AI tool).
- [ ] Rebuild the token-summary → tokens → components workflow on your own design system.
- [ ] Add one short note about what confused you and how you resolved it.

## Note on Source Data

This folder covers a single YouTube video rather than a paid multi-module course, so it is
organized as one course with 8 chapter-based lessons instead of the multi-section layout used
elsewhere in this repo.
