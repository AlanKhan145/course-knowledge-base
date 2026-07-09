# Converting Figma Designs to Code with Cursor + Figma MCP

A crash-course walkthrough of the Model Context Protocol (MCP): what it is, why it matters for AI
coding, how its host/client/server architecture works, and a hands-on install of the Figma MCP
server inside Cursor. Ends with two live one-shot demos — a minimal lending page and a more
complex multi-section landing page — converted straight from a Figma selection link into React
code, followed by an honest review of what the AI got right (layout, color, text, components) and
where it still struggled (missing images, broken SVGs).

Structured markdown study notes for a short tutorial video (source auto-transcribed and
translated to Vietnamese; notes below are written in English).

## Video Stats

- Listed duration: ~15:46
- Chapters: 9
- Language: English (source auto-transcribed/translated to Vietnamese for note-taking; notes
  below are written in English)
- Tools used: Figma, `figma-developer-mcp` (npm/npx), Cursor, Claude 3.5/3.7 Sonnet (Thinking)

## Source & Links

- No source URL was provided alongside the transcript for these notes — if you have the original
  video link, add it here for reference.
- Official MCP site: https://modelcontextprotocol.io/ (spec and SDKs are open source; created by
  the team behind Claude 3.5 Sonnet at Anthropic)
- Figma Context MCP (open source server used in the demo): search GitHub for `figma-developer-mcp`
- Cursor's MCP directory (curated list of MCP servers for Cursor/other IDEs): cursor.directory/mcps

## What You Will Learn

- What MCP (Model Context Protocol) is and why it matters for AI coding: it standardizes how
  applications feed context and tools to an LLM, the same way USB-C standardizes physical
  connections across devices
- The MCP architecture — host, client, server, local data sources, and remote services — and how
  an IDE like Cursor acts as both host and client at once
- How to generate a Figma API key and run the `figma-developer-mcp` server locally via `npx`,
  exposing an SSE endpoint (`http://localhost:3333/sse`)
- How to register a new MCP server inside Cursor's settings and verify the connection succeeded
  (tools like `get_figma_data` and `download_figma_images` become available)
- How to copy a "link to selection" from a Figma frame and turn it into a one-shot design-to-code
  prompt in Cursor
- What a first-pass AI generation typically gets right (layout, color, typography, component
  splitting, simple state like an accordion) versus where it typically fails (missing images,
  broken SVG handling) and how to prompt Cursor to fix those gaps
- Why AI-generated design-to-code output should be treated as an accelerant, not a replacement for
  human review and creative polish

## How To Use

1. Watch the video chapter by chapter using the notes below as a scaffold.
2. Reproduce the Figma MCP + Cursor connection in your own environment using your own Figma API
   key.
3. Pick a Figma frame of your own, copy its selection link, and run the same one-shot prompt
   against it to see how well the workflow generalizes beyond the video's demos.
4. Practice the follow-up prompting shown in the video (fix missing images, double-check SVGs)
   rather than accepting the first generation as final.

## Chapters / Lessons

- [001 - The Finished Result: A One-Shot Lending Page](Lessons/001%20-%20The%20Finished%20Result%20A%20One-Shot%20Lending%20Page.md) - 0:00 (1:01)
- [002 - What Is MCP? (Model Context Protocol)](Lessons/002%20-%20What%20Is%20MCP%20(Model%20Context%20Protocol).md) - 1:01 (1:35)
- [003 - MCP Architecture: Host, Client, Server](Lessons/003%20-%20MCP%20Architecture%20Host%2C%20Client%2C%20Server.md) - 2:36 (1:08)
- [004 - Figma Context MCP and the Cursor MCP Directory](Lessons/004%20-%20Figma%20Context%20MCP%20and%20the%20Cursor%20MCP%20Directory.md) - 3:44 (2:08)
- [005 - Setting Up the Figma MCP Server](Lessons/005%20-%20Setting%20Up%20the%20Figma%20MCP%20Server.md) - 5:52 (2:28)
- [006 - Connecting Figma MCP Tools and Picking a Model](Lessons/006%20-%20Connecting%20Figma%20MCP%20Tools%20and%20Picking%20a%20Model.md) - 8:20 (0:47)
- [007 - Generating a Landing Page From a Figma Link](Lessons/007%20-%20Generating%20a%20Landing%20Page%20From%20a%20Figma%20Link.md) - 9:07 (1:53)
- [008 - Reviewing the AI Output: Wins and Gaps](Lessons/008%20-%20Reviewing%20the%20AI%20Output%20Wins%20and%20Gaps.md) - 11:00 (2:34)
- [009 - Fixing Images, Code Structure, and Final Takeaways](Lessons/009%20-%20Fixing%20Images%2C%20Code%20Structure%2C%20and%20Final%20Takeaways.md) - 13:34 (2:12)

## Study Checklist

- [ ] Watch the video in order, chapter by chapter.
- [ ] Generate a Figma API key and run `figma-developer-mcp` locally.
- [ ] Register the MCP server in Cursor and confirm `get_figma_data` / `download_figma_images`
      appear as available tools.
- [ ] Run the same one-shot "convert this Figma design exactly as it looks" prompt against one of
      your own Figma frames.
- [ ] Practice a fix-up prompt (missing images, broken SVGs) instead of accepting the first result.
- [ ] Add one short note about what confused you and how you resolved it.

## Note on Source Data

This folder covers a single YouTube video rather than a paid multi-module course, so it is
organized as one course with 9 chapter-based lessons instead of the multi-section layout used
elsewhere in this repo.
