# 010 - Adding a Component Variant via Figma MCP

## Section

Module 5: Adding Interaction, Variants, and New Screens

## Duration

1:27

## Main Idea

Fixes the non-working interaction from Lesson 9 by going back to Figma, selecting the relevant
component, and again copying its MCP example prompt. Back in Cursor, the presenter pastes that
prompt and explicitly asks for the click-to-switch behavior: clicking the Bitcoin wallet should
reveal that component variant. After running the prompt, the interaction works exactly like the
Figma prototype — and, as a bonus, the same fix also correctly wired up an Ethereum wallet variant
that wasn't explicitly requested, which the presenter calls out as a nice surprise.

## Key Topics Mentioned

* Re-selecting a component in Figma to get a fresh MCP example prompt
* Extending the prompt to describe the desired click interaction
* Result: Bitcoin wallet toggle now works as in the Figma prototype
* Unplanned bonus: Ethereum wallet variant also got wired up correctly

## Prompt Used

```
Update the design.
When I click on the Bitcoin wallet, I need to see this component variant.
```

## Review Questions

1. What extra step (compared to Lesson 7) does the presenter repeat here to get an updated MCP
   prompt for a specific component?
2. What interaction was broken before this lesson, and how is it verified as fixed afterward?
3. What unexpected side benefit did this same prompt produce, and why might that happen even
   though it wasn't explicitly asked for?

## Summary

Demonstrates the "send a variant, get an interaction" pattern: select the component in Figma, copy
its MCP prompt, and tell Cursor what should happen on click. The Bitcoin wallet toggle starts
working as expected, and the same change unexpectedly also fixes the Ethereum wallet variant,
illustrating how a well-structured Figma component (with proper variants) lets one fix generalize.
