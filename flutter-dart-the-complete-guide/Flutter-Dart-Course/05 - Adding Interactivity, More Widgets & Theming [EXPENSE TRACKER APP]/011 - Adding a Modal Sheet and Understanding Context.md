# Adding a Modal Sheet and Understanding Context

## Overview
This lecture introduces `showModalBottomSheet` to display an overlay panel from the bottom of the screen, used for the add-expense form. You will also gain a deeper understanding of the `BuildContext` object — what it is, why it matters, and how it connects widgets to the widget tree. Context is crucial for navigating, showing dialogs, and accessing theme data.

## Key Points
- `showModalBottomSheet` displays a panel that slides up from the bottom and dims the background
- `BuildContext` represents a widget's location in the widget tree
- Context must not be used after a widget is disposed (async context usage requires care)
- The `builder` parameter of `showModalBottomSheet` returns the widget to show inside the sheet

## Code Example
```dart
void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    builder: (ctx) => const NewExpense(),
  );
}

// In AppBar action:
IconButton(
  onPressed: _openAddExpenseOverlay,
  icon: const Icon(Icons.add),
)
```

## Notes
`BuildContext` is not just a parameter — it carries the widget's position in the tree, enabling access to inherited data like themes and navigation. The `ctx` passed to `builder` is a different context than the outer `context`, scoped to the modal itself. Always use the nearest appropriate context to avoid subtree-related errors.

## Summary
`showModalBottomSheet` combined with `BuildContext` enables displaying the add-expense form as an overlay, anchored to the widget tree's context.
