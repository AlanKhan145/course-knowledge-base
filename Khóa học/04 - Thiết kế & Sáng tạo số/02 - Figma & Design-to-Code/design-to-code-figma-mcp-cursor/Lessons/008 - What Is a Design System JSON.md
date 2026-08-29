# 008 - What Is a Design System JSON?

## Section

Module 4: Turning the Figma Design into a ReactJS App

## Duration

0:46

## Main Idea

Explains what Cursor actually produces while executing the prompt from Lesson 7: a project
structure, a CSS file built from the Figma variables, and a `design-system.json` file. That JSON
captures typography, colors, spacing, radius, and other style tokens as a structured list. The
presenter's framing is that JSON is more consistent and more "list-like" for this purpose than a
plain CSS file of used styles — it's meant to be the reference future prompts point back to so new
screens don't drift from the original design.

## Key Topics Mentioned

* Cursor's output: project structure, generated CSS, and `design-system.json`
* JSON contents: typography, colors, spacing, radius, style tokens
* JSON vs. CSS as a consistency reference — JSON is described as cleaner/more list-like
* The JSON's purpose: keeping future screens visually consistent with the original

## Review Questions

1. What three things does Cursor generate in response to the Lesson 7 prompt?
2. What categories of design data does the `design-system.json` file store?
3. Why might a structured JSON token list be easier for an AI tool to reuse correctly than parsing
   an existing CSS file?

## Summary

A brief conceptual lesson (delivered while Cursor is still working) on the role of the generated
`design-system.json`: a structured token list of typography, colors, spacing, and radius values,
intended as the durable reference that keeps every screen generated afterward visually consistent
with the first one.
