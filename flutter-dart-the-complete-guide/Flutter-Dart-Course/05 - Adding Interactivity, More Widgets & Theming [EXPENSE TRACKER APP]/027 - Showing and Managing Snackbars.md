# Showing and Managing Snackbars

## Overview
This lecture implements the full snackbar flow for the expense deletion feature, including showing the snackbar, providing an "Undo" action, and restoring the deleted expense if the user taps Undo. Managing snackbars through `ScaffoldMessenger` ensures proper coordination with the scaffold context and prevents overlapping notifications.

## Key Points
- `ScaffoldMessenger.of(context).showSnackBar(...)` displays a snackbar within the scaffold
- `SnackBarAction` adds a tappable label (like "Undo") to the snackbar
- Call `clearSnackBars()` before showing a new one to prevent stacking
- The dismissed expense index must be captured before removal to allow restoration

## Code Example
```dart
void _removeExpense(Expense expense) {
  final expenseIndex = _registeredExpenses.indexOf(expense);

  setState(() {
    _registeredExpenses.remove(expense);
  });

  // Clear previous snackbars
  ScaffoldMessenger.of(context).clearSnackBars();

  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      duration: const Duration(seconds: 3),
      content: const Text('Expense deleted.'),
      action: SnackBarAction(
        label: 'Undo',
        onPressed: () {
          setState(() {
            // Restore at original position
            _registeredExpenses.insert(expenseIndex, expense);
          });
        },
      ),
    ),
  );
}
```

## Notes
Capturing the expense index before removing it is essential for re-inserting it at the correct position during an undo operation. `ScaffoldMessenger` is separate from `Scaffold` to handle cases where the context outlives the scaffold — always use `ScaffoldMessenger.of(context)`. Without `clearSnackBars()`, rapidly dismissing multiple expenses would queue multiple snackbars.

## Summary
A well-implemented snackbar with an "Undo" action provides user-friendly feedback after deletion and allows quick restoration of accidentally removed expenses.
