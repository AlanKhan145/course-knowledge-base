# Saving New Expenses

## Overview
This lecture implements the logic to save a newly created expense to the list managed by the parent widget. Using a callback function passed from the parent, the `NewExpense` form notifies the parent to add the expense to its state. This pattern demonstrates how child widgets communicate data back up to parent widgets in Flutter.

## Key Points
- Pass a callback function from the parent to the `NewExpense` widget via its constructor
- The callback type is `void Function(Expense expense)`
- Call the callback in `_submitExpenseData` after validation passes
- The parent updates its state list with `setState` inside the callback

## Code Example
```dart
// Parent widget (Expenses)
void _addExpense(Expense expense) {
  setState(() {
    _registeredExpenses.add(expense);
  });
}

void _openAddExpenseOverlay() {
  showModalBottomSheet(
    context: context,
    builder: (ctx) => NewExpense(onAddExpense: _addExpense),
  );
}

// NewExpense widget
class NewExpense extends StatefulWidget {
  const NewExpense({super.key, required this.onAddExpense});

  final void Function(Expense expense) onAddExpense;
  // ...
}

// Calling the callback on valid submit
widget.onAddExpense(
  Expense(
    title: _titleController.text.trim(),
    amount: enteredAmount,
    date: _selectedDate!,
    category: _selectedCategory,
  ),
);
Navigator.pop(context);
```

## Notes
Passing callbacks from parent to child is the standard "lifting state up" pattern in Flutter and React-like frameworks. The parent owns the expense list state, ensuring a single source of truth. After calling the callback, always close the modal with `Navigator.pop` to return the user to the main screen.

## Summary
Callback functions passed from parent to child enable the `NewExpense` form to communicate newly created expenses back up to the parent, which updates the list in state.
