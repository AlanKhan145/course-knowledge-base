# Efficiently Rendering Long Lists with ListView

## Overview
This lecture explains how to use `ListView.builder` to efficiently render long or dynamically sized lists in Flutter. Unlike `Column` with multiple children, `ListView.builder` renders only the visible items on screen, making it performant for large datasets. You will replace a basic column layout with a proper scrollable list for the expense entries.

## Key Points
- `ListView` renders all children at once — avoid for long lists
- `ListView.builder` lazily builds only the widgets currently visible on screen
- The `itemCount` parameter defines the total number of items
- The `itemBuilder` callback receives the context and index for each item

## Code Example
```dart
ListView.builder(
  itemCount: expenses.length,
  itemBuilder: (ctx, index) => ExpenseItem(expenses[index]),
)
```

## Notes
`ListView.builder` is the standard approach for rendering lists in Flutter because it recycles widget instances as the user scrolls. Always provide `itemCount` when the list length is known to help Flutter optimize rendering. Wrap `ListView.builder` in an `Expanded` widget inside a `Column` to prevent layout overflow errors.

## Summary
`ListView.builder` efficiently renders only visible list items, making it the preferred widget for displaying dynamic or long lists in Flutter.
