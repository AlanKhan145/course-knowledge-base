# Setting an AppBar with a Title and Actions

## Overview
This lecture covers how to configure a `Scaffold`'s `AppBar` with a title and action buttons. Action buttons in the AppBar provide quick access to important features, such as opening the add-expense form. You will add an `IconButton` to the AppBar's `actions` list to trigger the modal sheet for adding expenses.

## Key Points
- `AppBar` accepts a `title` widget (usually a `Text`) and an `actions` list of widgets
- `IconButton` in `actions` provides tappable icon controls in the top-right area
- The `onPressed` callback of the `IconButton` triggers navigation or modal display
- `AppBar` is part of `Scaffold` and automatically handles status bar padding and theming

## Code Example
```dart
Scaffold(
  appBar: AppBar(
    title: const Text('Flutter Expense Tracker'),
    actions: [
      IconButton(
        onPressed: _openAddExpenseOverlay,
        icon: const Icon(Icons.add),
      ),
    ],
  ),
  body: Column(
    children: [
      // chart placeholder
      Expanded(
        child: ExpensesList(
          expenses: _registeredExpenses,
        ),
      ),
    ],
  ),
)
```

## Notes
The `actions` list can hold any widget, but `IconButton` is the most common choice for AppBar actions. Multiple action buttons can be added by appending more widgets to the `actions` list. The AppBar automatically applies the current theme's color scheme, so minimal manual styling is needed.

## Summary
Adding an `IconButton` to the `AppBar`'s `actions` list gives users a prominent way to open the add-expense modal directly from the main screen.
