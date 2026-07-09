# From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

Wire a Figma design into a real, running app: enable the Figma Dev Mode MCP server, scaffold a
Nuxt.js project with Claude Code, generate the UI from a Figma selection through Cursor's agent,
iteratively fix layout issues with small prompts, swap in the real exported logo, and integrate
the OpenAI API to make the hero section's hobby input actually return AI-generated business ideas.

Structured markdown study notes for a build-in-public video on Sidebling.com — an AI tool that
takes a hobby or interest and suggests ways to monetize it. This is the third video in the series:
video 1 covered the concept, video 2 covered the logo and Figma UI design, and this one is where
the design gets translated into code.

## Video Stats

- Listed duration: ~21:06
- Chapters: 15
- Language: English (source auto-transcribed/translated to Vietnamese for note-taking; notes
  below are written in English)
- Series: Sidebling.com build-in-public series (video 3 of 4)
- Related resources plugged in the video: designcourse.com

## What You Will Learn

- Enable the Dev Mode MCP Server in a Figma file and keep layers named clearly enough for AI tools
  to read the structure correctly
- Install Claude Code inside Cursor and use it to scaffold a Nuxt.js project from an empty folder
- Break AI-coding work into small, single-purpose prompts instead of one massive "build the app"
  request, and ask the AI for tech-stack advice before asking it to write code
- Verify a Figma MCP connection inside Cursor's tool settings, and troubleshoot the connection by
  toggling the MCP tool off and back on when access is lost
- Prompt an AI agent to generate UI from a selected Figma frame, including behavior a static
  design can't convey on its own (like floating labels and viewport-bottom-bound elements)
- Iteratively fix layout defects (centering, overflow, logo placement) with small, targeted
  follow-up prompts rather than full regenerations
- Export a real asset (logo SVG) from Figma and correctly place it per framework convention by
  asking the AI a code-free question first
- Use Claude Code's `/init` command to generate a persistent `CLAUDE.md` project-context file
- Integrate a third-party AI API (OpenAI) end to end: SDK install, API route, environment
  variables, and a first live test of the feature

## How To Use

1. Watch the video chapter by chapter using the notes below as a scaffold.
2. Reproduce the Cursor + Claude Code + Figma MCP connection in your own environment.
3. Rebuild the "small prompt → verify → next small prompt" workflow against your own Figma design
   instead of copying prompts verbatim.
4. Compare each generated result against the Figma source, and practice writing the follow-up
   prompts needed to fix what the AI got wrong or couldn't infer.

## Chapters / Lessons

- [001 - Recap: Where the Sidebling Project Stands](Lessons/001%20-%20Recap%20-%20Where%20the%20Sidebling%20Project%20Stands.md) - 0:00 (0:48)
- [002 - Enabling the Figma Dev Mode MCP Server](Lessons/002%20-%20Enabling%20the%20Figma%20Dev%20Mode%20MCP%20Server.md) - 0:48 (0:47)
- [003 - Starting a Fresh Cursor Project and Installing Claude Code](Lessons/003%20-%20Starting%20a%20Fresh%20Cursor%20Project%20and%20Installing%20Claude%20Code.md) - 1:35 (0:59)
- [004 - Prompting Philosophy: Small Steps and Knowing Your Stack](Lessons/004%20-%20Prompting%20Philosophy%20-%20Small%20Steps%20and%20Knowing%20Your%20Stack.md) - 2:34 (0:43)
- [005 - Scaffolding the Nuxt.js Project with Claude Code](Lessons/005%20-%20Scaffolding%20the%20Nuxt.js%20Project%20with%20Claude%20Code.md) - 3:17 (1:47)
- [006 - Verifying the Figma MCP Connection Inside Cursor](Lessons/006%20-%20Verifying%20the%20Figma%20MCP%20Connection%20Inside%20Cursor.md) - 5:04 (1:23)
- [007 - First Prompt: Generating the Hero Section from Figma](Lessons/007%20-%20First%20Prompt%20-%20Generating%20the%20Hero%20Section%20from%20Figma.md) - 6:27 (2:36)
- [008 - Troubleshooting Figma MCP Access in Cursor](Lessons/008%20-%20Troubleshooting%20Figma%20MCP%20Access%20in%20Cursor.md) - 9:03 (1:15)
- [009 - Reviewing the First Generated UI and Requesting Fixes](Lessons/009%20-%20Reviewing%20the%20First%20Generated%20UI%20and%20Requesting%20Fixes.md) - 10:18 (2:34)
- [010 - Centering the Navbar](Lessons/010%20-%20Centering%20the%20Navbar.md) - 11:59 (0:53)
- [011 - Exporting and Swapping in the Real Logo](Lessons/011%20-%20Exporting%20and%20Swapping%20in%20the%20Real%20Logo.md) - 12:52 (2:53)
- [012 - Running /init to Generate the CLAUDE.md Project Guide](Lessons/012%20-%20Running%20init%20to%20Generate%20the%20CLAUDE.md%20Project%20Guide.md) - 15:45 (0:54)
- [013 - Integrating the OpenAI API](Lessons/013%20-%20Integrating%20the%20OpenAI%20API.md) - 16:39 (1:52)
- [014 - Testing the AI Business Idea Generator](Lessons/014%20-%20Testing%20the%20AI%20Business%20Idea%20Generator.md) - 18:31 (2:03)
- [015 - Wrap-Up and What's Next](Lessons/015%20-%20Wrap-Up%20and%20Whats%20Next.md) - 20:34 (0:32)

## Study Checklist

- [ ] Watch the video in order, chapter by chapter.
- [ ] Set up your own Figma MCP connection in Cursor (or another supported AI tool).
- [ ] Rebuild the Nuxt.js scaffold → Figma-driven UI generation → iterative fix-up workflow on
      your own design.
- [ ] Wire up your own OpenAI (or other LLM) API integration behind an environment variable, never
      hard-coded.
- [ ] Add one short note about what confused you and how you resolved it.

## Note on Source Data

This folder covers a single YouTube video (part of a build-in-public series) rather than a paid
multi-module course, so it is organized as one course with 15 chapter-based lessons instead of the
multi-section layout used elsewhere in this repo. Chapter timestamps are approximate, derived from
the video's own narration cues rather than an official chapter list.
