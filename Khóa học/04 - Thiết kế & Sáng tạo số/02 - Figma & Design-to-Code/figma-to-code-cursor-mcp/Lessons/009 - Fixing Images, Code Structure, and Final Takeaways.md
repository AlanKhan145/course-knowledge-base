# 009 - Fixing Images, Code Structure, and Final Takeaways

## Section

Converting Figma Designs to Code with Cursor + Figma MCP

## Duration

2:12

## Main Idea

Closes the loop with a follow-up prompt asking Cursor to "double-check with Figma and make sure
images are downloaded and placed correctly," which triggers another round of permission-gated tool
calls. The host then reviews the generated code structure and likes what it sees: components are
split sensibly (e.g. a top-level `.tsx` file composing several smaller components), which the host
explicitly ties to the Single Responsibility Principle from SOLID. The main recurring weak spot is
SVG handling — brand logos and some footer images fail to resolve correctly, which the host
attributes to the AI/tooling struggling with SVG specifically, distinct from raster image handling
which worked well. A second, earlier test on a hero section is also referenced: the AI used the
hero image directly as a background, got the layout right, but visible text was missing — still
called "a great way to start" a page. The video closes with practical advice: don't expect 100%
perfection from one prompt, ask Cursor follow-up questions and adjust to taste, bring your own
creative and human touch to polish, fix remaining bugs, and separately prompt for responsive
design if needed. By the end of the lesson, learners should have a checklist for what to fix after
a first-pass generation and realistic expectations for the workflow overall.

## Key Topics Mentioned

* Follow-up prompt pattern: "double-check with the Figma MCP tools and make sure images are
  downloaded and placed correctly"
* Code structure review: components split by responsibility, echoing the Single Responsibility
  Principle (SOLID)
* Persistent weak spot: SVG assets (brand logos, some footer images) frequently fail to resolve,
  more so than raster images
* Earlier hero-section test: correct layout using the hero image as a background, but missing
  visible text — still framed as a strong starting point
* Closing advice: don't expect a perfect one-shot result; ask Cursor many follow-up questions,
  adjust to taste, add human creative polish, fix remaining bugs, and prompt separately for
  responsive behavior

## Review Questions

1. What is the main purpose of "Fixing Images, Code Structure, and Final Takeaways" in the context
   of Converting Figma Designs to Code with Cursor + Figma MCP?
2. What follow-up prompt does the host use to get Cursor to fix missing/misplaced images, and why
   is a second round of tool calls needed?
3. Why does the host connect the generated component structure to the Single Responsibility
   Principle, and why does SVG handling remain the most persistent weak spot?
4. What risk or limitation should you keep in mind about treating a one-shot Figma-to-code
   generation as a finished product rather than a starting point?

## Summary

Wraps up the workflow by fixing the image gaps from the previous lesson, praising the generated
code's component structure and SOLID-aligned separation of concerns, calling out SVG handling as
the main recurring weakness, and closing with practical guidance to iterate with follow-up
prompts, apply human polish, and request responsiveness separately. This lesson is the final
building block of the section's goal: leaving learners with a realistic, actionable checklist for
using Figma MCP + Cursor on their own designs rather than expecting a flawless single-shot result.
