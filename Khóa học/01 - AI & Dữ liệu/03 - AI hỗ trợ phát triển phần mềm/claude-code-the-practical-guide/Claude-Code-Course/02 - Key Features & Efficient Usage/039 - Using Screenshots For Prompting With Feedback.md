# 039 - Using Screenshots For Prompting With Feedback

## Section

Key Features & Efficient Usage

## Main Idea

This lecture shows how to use screenshots as input for Claude Code, especially for UI-related tasks. Screenshots give Claude visual context that text descriptions cannot always convey, enabling more accurate UI diagnosis and fixes.

## Learning Objectives

By the end of this lecture, students should understand:

* How to provide screenshots to Claude Code.
* What types of problems screenshots help diagnose.
* How to structure prompts when using screenshots.
* What Claude can and cannot infer from a screenshot.
* How to use screenshots in a feedback loop.

## Key Concepts

### Why Screenshots Are Useful

When working on UI problems, describing issues in text can be ambiguous:

* "The button is in the wrong position" — where exactly?
* "The colors look off" — which colors?
* "The layout is broken on mobile" — broken how?

A screenshot shows Claude exactly what you see. Claude can analyze the image and give more targeted suggestions.

### How to Provide Screenshots

Claude Code supports image input. You can:

* **Paste the image** directly into the Claude Code session (in environments that support paste).
* **Reference an image file** by path if it is accessible in the project directory.
* **Drag and drop** in terminal environments that support it.

### Prompting With a Screenshot

**Example prompt:**

```text
Here is a screenshot of the current UI:
[attach screenshot]

Compare it against these design requirements:
- The title should be left-aligned.
- The card components should have equal height.
- The mobile layout should stack elements vertically.
- The button should be full-width on mobile.

Identify all discrepancies between the current UI and the requirements.
Then suggest the specific CSS or component changes needed.
```

### Types of Problems Screenshots Help With

* **Layout issues:** misaligned elements, overflow, spacing problems.
* **Typography problems:** wrong font size, line height, or weight.
* **Color discrepancies:** colors not matching the design.
* **Responsiveness:** how the UI looks at different screen sizes.
* **State display:** what the UI looks like in a specific application state.
* **Error UI:** what an error screen actually looks like versus how it should look.

### Screenshot Feedback Loop

Screenshots enable a visual feedback loop:

```
Claude makes UI changes
        ↓
Take a screenshot
        ↓
Provide screenshot to Claude
        ↓
Claude compares with requirements
        ↓
Claude identifies remaining issues
        ↓
Claude makes further adjustments
        ↓
Repeat
```

This loop continues until the UI matches the desired state.

### What Claude Can Infer From Screenshots

* Element positions and alignment.
* Visible text and typography.
* Color and contrast.
* Spacing and padding (approximately).
* Component structure and layout.
* UI states (loading, error, empty, populated).

### What Claude Cannot Infer From Screenshots

* Exact CSS values — it estimates based on visual appearance.
* Dynamic behavior (animations, hover states) — static screenshots only.
* Performance — screenshots do not show rendering speed.
* Accessibility — color perception issues or screen reader behavior are not visible.

## Important Notes

* Screenshot quality matters. Higher resolution screenshots give Claude more detail to work with.
* Screenshots of specific components are more useful than full-page screenshots when debugging a specific element.
* After Claude suggests changes, always test in the actual browser — visual estimates may not be exact.
* Screenshots of both the current state and the desired state (if you have a mockup) give Claude the best context.

## Why This Lecture Matters

Text-only UI debugging with Claude is frustrating. Screenshots unlock a much faster feedback loop for visual problems. Students who learn to use screenshots effectively can resolve UI issues in far fewer iterations than those relying on text descriptions alone.

## Summary

Screenshots provide visual context that text descriptions cannot always capture. Provide screenshots to Claude by pasting, dragging, or referencing a file. Structure the prompt to describe what requirements the UI should meet, then ask Claude to identify discrepancies and suggest fixes. Use screenshots in a feedback loop where Claude makes changes, you take a new screenshot, and Claude evaluates the result until the UI is correct.
