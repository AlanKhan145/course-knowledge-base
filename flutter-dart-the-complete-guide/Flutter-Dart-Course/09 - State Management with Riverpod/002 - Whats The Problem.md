# Whats The Problem

## Overview
This lecture identifies the core pain points of managing state without a dedicated state management solution. It demonstrates how passing data and callbacks through multiple layers of widgets (prop-drilling) becomes unmanageable as an app grows. Understanding these problems motivates the adoption of Riverpod.

## Key Points
- Passing state down the widget tree via constructor arguments is called "prop-drilling"
- Callbacks must be passed back up the tree to notify parent widgets of changes, creating tight coupling
- When multiple unrelated widgets need the same piece of state, sharing it becomes very difficult
- setState only works well for local, isolated widget state
- Rebuilding large widget subtrees unnecessarily hurts performance

## Tips
- Draw the widget tree on paper and trace where data flows — this makes prop-drilling pain very visible
- Think about what happens when a deeply nested widget needs to update state owned by a far-away ancestor
- Consider how many widgets need to be modified just to thread a new piece of data through the tree

## Notes
The meals app used in this course requires favorites state to be accessible from multiple screens and widgets simultaneously. Without a state management solution, this forces you to lift state all the way up to the root widget and pass it down through every intermediate widget. This becomes increasingly fragile and hard to maintain as features are added.

## Summary
Prop-drilling and callback-threading in large widget trees reveal the fundamental need for a centralized, accessible state management solution.
