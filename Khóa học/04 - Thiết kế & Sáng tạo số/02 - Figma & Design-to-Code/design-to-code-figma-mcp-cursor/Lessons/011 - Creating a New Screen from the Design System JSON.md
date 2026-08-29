# 011 - Creating a New Screen from the Design System JSON

## Section

Module 5: Adding Interaction, Variants, and New Screens

## Duration

1:39

## Main Idea

Shows the payoff of generating `design-system.json` back in Lesson 8: the presenter asks Cursor to
build an entirely new "Send Money" screen using the project's existing design system, without
re-describing any tokens or re-attaching a Figma frame. Cursor produces a screen with account
selection, an amount field, a list of recent contacts, and a send button. After reloading and
navigating to it, the new screen is judged to look good and stay visually consistent with the
original design, with only a minor "not filled correctly" layout issue noted as a small
imperfection.

## Key Topics Mentioned

* Reusing `design-system.json` to generate a brand-new screen without a new Figma reference
* Requested screen: "Send Money" — accounts, amount, recent contacts, send button
* Verifying visual/style consistency against the original screen
* Minor layout defect noted (an element "not filled correctly")

## Prompt Used

```
Create a send money screen using the design system of the project.
```

## Review Questions

1. What does the presenter deliberately avoid doing when asking for this new screen (compared to
   earlier lessons)?
2. What four UI elements does the generated Send Money screen include?
3. Why is this lesson considered proof that the `design-system.json` approach is working, rather
   than just a convenience?

## Summary

Tests the actual value of the design-system JSON generated earlier: a single short prompt, with no
new Figma frame attached, is enough for Cursor to produce a full new "Send Money" screen (accounts,
amount, recent contacts, send button) that stays visually consistent with the first screen — with
only a small layout glitch left to fix.
