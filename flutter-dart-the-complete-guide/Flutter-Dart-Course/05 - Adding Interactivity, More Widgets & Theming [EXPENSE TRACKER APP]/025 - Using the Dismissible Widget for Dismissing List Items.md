# Using the Dismissible Widget for Dismissing List Items

## Overview
This lecture introduces the `Dismissible` widget, which adds swipe-to-dismiss functionality to list items. Users can swipe an expense item left or right to delete it from the list. The `Dismissible` widget handles the swipe animation automatically, and you provide a callback to update the state when an item is dismissed.

## Key Points
- `Dismissible` wraps a list item and provides built-in swipe-to-dismiss behavior
- The `key` parameter must be unique per item — use the expense's `id` with `ValueKey`
- `onDismissed` callback is triggered after the swipe animation completes
- `background` sets the widget shown behind the item as it is swiped away

## Code Example
```dart
Dismissible(
  key: ValueKey(expense.id),
  background: Container(
    color: Theme.of(context).colorScheme.error,
    margin: EdgeInsets.symmetric(
      horizontal: Theme.of(context).cardTheme.margin!.horizontal,
    ),
    child: const Icon(Icons.delete, color: Colors.white, size: 40),
  ),
  onDismissed: (direction) {
    onRemoveExpense(expense); // callback to parent to remove from list
  },
  child: ExpenseItem(expense),
)

// Parent removes the expense from state
void _removeExpense(Expense expense) {
  setState(() {
    _registeredExpenses.remove(expense);
  });
}
```

## Notes
The `key` must be unique across all `Dismissible` items in the list — using the expense's UUID ensures this. Without a unique key, Flutter cannot distinguish between items and may dismiss the wrong one. The `background` widget is shown during the swipe animation, so use a colored container with a trash icon for a clear affordance.

## Summary
The `Dismissible` widget enables intuitive swipe-to-delete functionality for expense list items with minimal code, using a unique key and an `onDismissed` callback.
