# Creating Dummy Data

## Overview

This lecture explains how to create a hardcoded list of dummy `Expense` objects inside the expenses widget state. Dummy data is useful during development because it allows you to test and preview the UI before implementing real user input.

Instead of starting with an empty screen, you can use predefined expense entries and display them in a list. Later, when the add-expense feature is implemented, this dummy data can be replaced or used as initial seed data.

## Why Use Dummy Data?

Dummy data helps you:

* Test the UI immediately
* Preview how expense items will look in a list
* Avoid manually entering data after every hot reload
* Develop the layout before connecting real input logic
* Check formatting for titles, amounts, dates, and categories

## Key Idea

After creating the `Expense` model, you can use it as a type in Dart.

For example:

```dart
final List<Expense> _registeredExpenses = [];
```

This means `_registeredExpenses` is a list that can only contain `Expense` objects.

When you create a class in Dart, that class automatically becomes a custom type. Therefore, the `Expense` class can be used to define the shape of expense objects stored in the list.

## Creating Dummy Expenses

Inside the state class of the expenses widget, create a final list named `_registeredExpenses`.

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

## Code Explanation

### `List<Expense>`

```dart
final List<Expense> _registeredExpenses
```

This defines a list that stores multiple `Expense` objects.

The `Expense` type comes from the custom `Expense` class created earlier.

### `Expense(...)`

```dart
Expense(
  title: 'Flutter Course',
  amount: 19.99,
  date: DateTime.now(),
  category: Category.work,
)
```

This creates a new expense object by calling the `Expense` constructor.

Each expense requires several pieces of data:

* `title`: the name of the expense
* `amount`: the money spent
* `date`: the date of the expense
* `category`: the type of expense

### `DateTime.now()`

```dart
date: DateTime.now()
```

`DateTime` is a built-in Dart class used for working with dates and times.

`DateTime.now()` creates a date value using the current date and time.

This is useful for dummy data because it quickly assigns today’s date without manually entering year, month, and day values.

### `Category.work`

```dart
category: Category.work
```

`Category` is an enum defined in the expense model file.

Enums provide a fixed list of predefined values. For example:

```dart
enum Category {
  food,
  travel,
  leisure,
  work,
}
```

You can access enum values using dot notation:

```dart
Category.work
Category.leisure
Category.food
```

## Importing the Expense Model

To use the `Expense` class and the `Category` enum, make sure the expense model file is imported.

Example:

```dart
import 'package:your_app/models/expense.dart';
```

The exact import path depends on your project structure.

Once the model file is imported, both `Expense` and `Category` become available in the widget file.

## Where to Store the Dummy Data

The dummy list should be stored inside the state class of the root expenses widget.

Example:

```dart
class _ExpensesState extends State<Expenses> {
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
  ];

  @override
  Widget build(BuildContext context) {
    return const Scaffold();
  }
}
```

At this point, the list exists but is not displayed yet.

The editor may show a warning saying `_registeredExpenses` is unused. This is normal for now. The warning will disappear once the list is passed to another widget and rendered in the UI.

## Passing Dummy Data to Child Widgets

After creating the dummy expenses, the next step is to pass the list to a child widget that will display the data.

For example:

```dart
ExpensesList(expenses: _registeredExpenses)
```

The child widget can then use the list to build expense items on the screen.

## Notes

Using dummy data is a common development technique. It allows you to build and test the interface before implementing features such as forms, buttons, validation, and saving data.

Dummy data should use realistic values so the UI can be tested properly. For example, use real-looking titles, different amounts, valid dates, and different categories.

Later, when users are able to add their own expenses, this list can be updated dynamically with `setState()`.

## Summary

In this lecture, you created a hardcoded list of dummy `Expense` objects inside the expenses widget state.

You learned that:

* A custom class can be used as a type in Dart
* `List<Expense>` stores multiple expense objects
* `DateTime.now()` creates a current date value
* Enum values such as `Category.work` can be assigned to each expense
* Dummy data helps test the UI before real user input is implemented

This dummy expense list will be used in the next step to display expense items in the app UI.
