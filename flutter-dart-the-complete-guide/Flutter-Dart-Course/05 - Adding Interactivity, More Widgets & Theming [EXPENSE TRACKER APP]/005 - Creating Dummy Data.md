# Creating Dummy Data

## Overview
This lecture covers creating a hardcoded list of dummy `Expense` objects to use while developing and testing the UI before real user input is implemented. Dummy data lets you see realistic content in your app without needing backend or user input. You will store this list in the widget's state and pass it down to child widgets.

## Key Points
- Define a `List<Expense>` with several hardcoded `Expense` instances
- Use realistic values for titles, amounts, dates, and categories
- Store the dummy list as a state variable in the root `StatefulWidget`
- Pass the list to child widgets as constructor parameters

## Code Example
```dart
final List<Expense> _registeredExpenses = [
  Expense(
    title: 'Flutter Course',
    amount: 19.99,
    date: DateTime.now(),
    category: Category.work,
  ),
  Expense(
    title: 'Cinema',
    amount: 15.69,
    date: DateTime.now(),
    category: Category.leisure,
  ),
  Expense(
    title: 'Sushi',
    amount: 53.40,
    date: DateTime.now(),
    category: Category.food,
  ),
];
```

## Notes
Using dummy data during development speeds up UI iteration because you do not need to fill in forms every time you hot-reload. Once the add-expense feature is built, dummy data can be removed or kept as initial seed data. Make sure date values are valid `DateTime` objects so formatting functions work correctly.

## Summary
Dummy data provides realistic expense entries during development, enabling immediate UI testing before user input functionality is implemented.
