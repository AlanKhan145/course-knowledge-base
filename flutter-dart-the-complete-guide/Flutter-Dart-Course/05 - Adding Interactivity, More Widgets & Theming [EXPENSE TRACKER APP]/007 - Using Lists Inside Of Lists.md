# Using Lists Inside of Lists

## Overview

This lecture explains how to use the custom `ExpensesList` widget inside the main `Expenses` widget.

After creating a reusable list widget with `ListView.builder`, the next step is to render that widget inside the main screen. Since the main screen already uses a `Column`, placing a `ListView` inside it requires proper layout constraints.

You will learn why Flutter needs help sizing nested vertical widgets and how the `Expanded` widget solves this problem.

## Goal

The goal is to display the list of registered expenses below a chart placeholder.

The screen structure should look like this:

```dart
Column(
  children: [
    Text('The chart'),
    Expanded(
      child: ExpensesList(
        expenses: _registeredExpenses,
      ),
    ),
  ],
)
```

The chart placeholder appears at the top, and the expense list takes the remaining available space below it.

## Using the Custom `ExpensesList` Widget

After creating `ExpensesList` in a separate file, you can use it inside `expenses.dart`.

First, import the file:

```dart
import 'package:your_app/widgets/expenses_list.dart';
```

The exact import path depends on your project structure.

Then use the widget inside the `build()` method:

```dart
ExpensesList(
  expenses: _registeredExpenses,
)
```

Here, `_registeredExpenses` is the list of dummy expense objects created earlier.

The `ExpensesList` widget receives that list through its `expenses` parameter and renders the items with `ListView.builder`.

## Why `const` Must Be Removed

You may originally have something like this:

```dart
const ExpensesList(
  expenses: _registeredExpenses,
)
```

However, this will not work because `_registeredExpenses` is not a compile-time constant.

Even if the list is declared with `final`, the list object itself can still be modified later. For example, new expense items can be added to the same list.

So the correct version is:

```dart
ExpensesList(
  expenses: _registeredExpenses,
)
```

You can still keep `const` on widgets that do not depend on runtime values:

```dart
const Text('The chart')
```

## The Layout Problem

After adding `ExpensesList` inside the `Column`, the list may not appear correctly, or Flutter may show a layout error.

This happens because `ExpensesList` internally uses `ListView.builder`.

A `ListView` is a scrollable vertical widget. A `Column` is also a vertical layout widget.

When a scrollable list is placed inside a `Column`, Flutter needs to know how much height the list should take. Without a height constraint, the `ListView` tries to take unlimited vertical space, but the `Column` cannot provide that automatically.

This creates a layout conflict.

## Why This Happens

The main widget contains a `Column`:

```dart
Column(
  children: [
    const Text('The chart'),
    ExpensesList(
      expenses: _registeredExpenses,
    ),
  ],
)
```

But `ExpensesList` returns a `ListView.builder`:

```dart
ListView.builder(
  itemCount: expenses.length,
  itemBuilder: (ctx, index) => Text(expenses[index].title),
)
```

So the structure becomes similar to this:

```dart
Column(
  children: [
    Text('The chart'),
    ListView.builder(...),
  ],
)
```

The problem is that the `ListView` does not know how tall it should be inside the `Column`.

## Solving the Problem with `Expanded`

To fix this, wrap the `ExpensesList` widget with `Expanded`.

```dart
Expanded(
  child: ExpensesList(
    expenses: _registeredExpenses,
  ),
)
```

`Expanded` tells Flutter that the list should take all remaining available space inside the `Column`.

This gives the `ListView` a clear height constraint, so it can render properly.

## Complete Example

```dart
import 'package:flutter/material.dart';

import '../models/expense.dart';
import 'expenses_list.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<Expenses> createState() {
    return _ExpensesState();
  }
}

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
    return Scaffold(
      body: Column(
        children: [
          const Text('The chart'),
          Expanded(
            child: ExpensesList(
              expenses: _registeredExpenses,
            ),
          ),
        ],
      ),
    );
  }
}
```

## `expenses_list.dart`

```dart
import 'package:flutter/material.dart';

import '../models/expense.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({
    super.key,
    required this.expenses,
  });

  final List<Expense> expenses;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: expenses.length,
      itemBuilder: (ctx, index) => Text(
        expenses[index].title,
      ),
    );
  }
}
```

## Understanding `final` Lists

A list declared with `final` cannot be reassigned.

For example, this is not allowed:

```dart
_registeredExpenses = [];
```

However, the contents of the list can still be changed:

```dart
_registeredExpenses.add(newExpense);
```

This is because `final` protects the variable from pointing to a different list object. It does not make the list itself immutable.

That is why `_registeredExpenses` is still considered a runtime value and cannot be used with `const`.

## Why This Is a “List Inside a List-like Layout”

In this screen, the expense list is placed inside another vertical layout.

The outer widget is a `Column`, and the inner widget is a `ListView`.

```dart
Column
 ├── Text
 └── Expanded
      └── ListView.builder
```

This is a common Flutter layout pattern.

Whenever you place a scrollable widget like `ListView` inside a vertical parent like `Column`, you usually need to wrap it with `Expanded` or otherwise give it a fixed height.

## Key Points

* `ExpensesList` should be imported before it can be used in `expenses.dart`
* The list of expenses is passed into `ExpensesList` through a constructor parameter
* `const` cannot be used when passing runtime data such as `_registeredExpenses`
* `Column` and `ListView` are both vertical layout widgets
* A `ListView` inside a `Column` needs a height constraint
* `Expanded` gives the list the remaining available space
* This prevents layout errors and makes the list visible
* The result is a scrollable, performance-optimized expense list

## Notes

Using a separate `ExpensesList` widget keeps the main `Expenses` widget clean.

The main widget manages the data, while the list widget focuses only on displaying that data.

This separation makes the code easier to maintain and prepares the app for future features, such as adding, removing, and styling expense items.

## Summary

In this lecture, you connected the custom `ExpensesList` widget to the main `Expenses` widget.

You passed the dummy expenses into the list widget and learned why a `ListView` must be wrapped with `Expanded` when placed inside a `Column`.

With this structure, the app can now display dummy expenses in a scrollable list while keeping the layout clean and efficient.
