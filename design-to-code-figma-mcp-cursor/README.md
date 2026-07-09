# Design to Code with Figma MCP and Cursor

Turn a Figma wallet-app design into a running ReactJS web app and then into an installable iOS
app — using Figma Variables + Auto Layout to prep the file, the Figma MCP server to hand the
design to Cursor, and a generated `design-system.json` to keep every new screen visually
consistent. Ends with adding a component variant/interaction, a new "Send Money" screen, and a
full Expo + iOS Simulator preview.

Structured markdown study notes for a short tutorial video by Sergei (source auto-transcribed and
translated to Vietnamese; notes below are written in English).

## Video Stats

- Listed duration: ~18:06
- Lessons: 13 (across 6 modules)
- Language: English (source auto-transcribed/translated to Vietnamese for note-taking; notes
  below are written in English)
- Final product built in the video: a finance/wallet app (Main Card + Bitcoin + Ethereum wallets,
  Send Money screen), running on web and on iOS Simulator

## Source & Links

- No source URL was provided alongside the transcript for these notes — if you have the original
  video link, add it here for reference.
- Figma Dev Mode MCP Server / developer docs: check Figma's official "MCP Server" documentation
  for the current activation steps, since the UI location has changed at least once already.
- Tools used: Figma, Figma MCP Server, Cursor, ReactJS, Expo, Xcode/iOS Simulator, npm

## What You Will Learn

- Why Figma Variables (color, typography, spacing, radius, padding, gap, line-height) matter more
  than the prototype itself when handing a file to an AI tool via MCP — anywhere there's a number
  in the design, there should be a variable
- Why Auto Layout is the Figma equivalent of Flexbox, and why using it consistently is what lets
  an AI coding tool infer structure and produce responsive output
- How to enable the Figma MCP Server (now done from Dev Mode, not Preferences) and connect it to
  Cursor via Figma's developer site
- How to send a selected frame from Figma to Cursor using Figma's auto-generated example prompt,
  and how to extend that prompt to also request a `design-system.json` file
- What a generated `design-system.json` contains (typography, colors, spacing, radius tokens) and
  why it's more consistent for reuse than reading raw CSS
- How to run the first generated ReactJS build locally (`npm install`, `npm run dev`) and spot
  early defects (missing icons, non-working interactions)
- How to send a Figma component variant to Cursor to wire up a click interaction (Bitcoin wallet
  toggle), and how the same fix incidentally propagated to an Ethereum wallet variant
- How to prompt Cursor to build a brand-new screen (Send Money) that reuses the existing design
  system automatically, without re-specifying every token
- How to prompt Cursor to convert the same project into an iOS app previewable via Expo, and what
  to expect the first time (Cursor may offer to install Expo for you; Xcode has to be installed
  manually from the App Store)
- How to test the resulting iOS build in Simulator across multiple tabs/screens and iterate on
  remaining UI bugs with follow-up prompts

## How To Use

1. Watch/read through the lessons in order — each module builds on the previous one's output.
2. Prep your own Figma file first: convert every hardcoded number to a Variable, and rebuild your
   frames with Auto Layout before attempting the MCP handoff.
3. Reproduce the MCP + Cursor connection yourself, then use the extended prompt template in Lesson
   7 (implement design + pay attention to variables + generate `design-system.json`).
4. After the first successful web run, deliberately repeat the "send a variant to Cursor" and
   "generate a new screen from the design system" steps against your own file, to prove the
   design-system.json is doing real reuse work and not just decoration.
5. Only attempt the iOS/Expo stage (Module 6) once the web app is stable — it depends on a working
   local project and an installed Xcode + iOS Simulator.

## Chapters / Lessons

### Module 1: Introduction & Course Overview

- [001 - Introduction to the Design-to-Code Workflow](Lessons/001%20-%20Introduction%20to%20the%20Design-to-Code%20Workflow.md) - 0:00 (0:36)

### Module 2: Preparing the Figma File for AI and MCP

- [002 - Design File Overview](Lessons/002%20-%20Design%20File%20Overview.md) - 0:36 (0:35)
- [003 - Using Figma Variables](Lessons/003%20-%20Using%20Figma%20Variables.md) - 1:11 (1:35)
- [004 - Using Auto Layout Correctly](Lessons/004%20-%20Using%20Auto%20Layout%20Correctly.md) - 3:00 (1:08)

### Module 3: Setting Up Figma MCP and Cursor

- [005 - Enabling the Figma MCP Server](Lessons/005%20-%20Enabling%20the%20Figma%20MCP%20Server.md) - 4:08 (0:55)
- [006 - Connecting Figma MCP to Cursor](Lessons/006%20-%20Connecting%20Figma%20MCP%20to%20Cursor.md) - 5:03 (1:14)

### Module 4: Turning the Figma Design into a ReactJS App

- [007 - Sending the Design from Figma to Cursor](Lessons/007%20-%20Sending%20the%20Design%20from%20Figma%20to%20Cursor.md) - 6:17 (1:45)
- [008 - What Is a Design System JSON?](Lessons/008%20-%20What%20Is%20a%20Design%20System%20JSON.md) - 8:47 (0:46)
- [009 - Running and Reviewing the First Result](Lessons/009%20-%20Running%20and%20Reviewing%20the%20First%20Result.md) - 9:33 (1:15)

### Module 5: Adding Interaction, Variants, and New Screens

- [010 - Adding a Component Variant via Figma MCP](Lessons/010%20-%20Adding%20a%20Component%20Variant%20via%20Figma%20MCP.md) - 10:48 (1:27)
- [011 - Creating a New Screen from the Design System JSON](Lessons/011%20-%20Creating%20a%20New%20Screen%20from%20the%20Design%20System%20JSON.md) - 12:15 (1:39)

### Module 6: Turning the Project into an iOS App

- [012 - Prompting Cursor to Build an iOS App with Expo](Lessons/012%20-%20Prompting%20Cursor%20to%20Build%20an%20iOS%20App%20with%20Expo.md) - 13:54 (2:08)
- [013 - Testing the App in iOS Simulator](Lessons/013%20-%20Testing%20the%20App%20in%20iOS%20Simulator.md) - 16:02 (2:04)

## Study Checklist

- [ ] Rebuild one dashboard-style screen in Figma using Variables for color, spacing, radius, and
      typography, and Auto Layout for every major container.
- [ ] Enable the Figma MCP Server (Dev Mode panel) and connect it to Cursor via the developer
      setup link.
- [ ] Send the frame to Cursor with the extended prompt and confirm both a working ReactJS project
      and a `design-system.json` file are produced.
- [ ] Run the project locally (`npm install && npm run dev`) and log every visual/interaction bug
      found versus the Figma source.
- [ ] Send a component variant (e.g., a click-state) from Figma to Cursor and verify the
      interaction works in the running app.
- [ ] Prompt Cursor to generate one new screen purely from the design system JSON, without
      re-describing tokens, and check visual consistency against the first screen.
- [ ] Prompt Cursor to convert the project into an iOS app previewable with Expo, install Xcode if
      needed, and verify it launches in iOS Simulator.

## Note on Source Data

This folder covers a single short-form tutorial video (~18 minutes) rather than a paid
multi-module course, so lesson boundaries follow the module/lesson breakdown supplied with the
transcript rather than an official platform syllabus. Timestamps are approximate, taken from the
video's own narration cues.
