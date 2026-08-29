# Efficiently Rendering Long Lists with `ListView.builder`

## Overview

This lecture explains how to render a list of expenses efficiently in Flutter by using `ListView.builder`.

Previously, the app already had a hardcoded list of dummy `Expense` objects. The next step is to display those expenses on the screen. Instead of placing all the list logic directly inside the main `Expenses` widget, we create a separate widget called `ExpensesList`.

This keeps the main widget clean and makes the code easier to read, maintain, and expand later.

## Why Create a Separate List Widget?

A good Flutter practice is to keep `build()` methods lean and simple.

Instead of putting all list rendering logic inside the root expenses widget, we can move it into a separate widget file:

```dart
expenses_list.dart
```

This new widget will be responsible only for displaying the list of expenses.

The main `Expenses` widget will manage the data, while `ExpensesList` will receive that data and render it.

## Creating the `ExpensesList` Widget

The `ExpensesList` widget does not manage its own internal state. It only receives a list of expenses and displays them.

Therefore, it can be a `StatelessWidget`.

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
      itemBuilder: (ctx, index) => Text(expenses[index].title),
    );
  }
}
```

## Code Explanation

### `StatelessWidget`

```dart
class ExpensesList extends StatelessWidget
```

`ExpensesList` extends `StatelessWidget` because it does not create, change, or manage the expense data itself.

It only receives data from another widget and displays it.

## Accepting Expenses as Input

```dart
final List<Expense> expenses;
```

This property stores the list of expenses passed into the widget.

Because the list contains custom `Expense` objects, we use:

```dart
List<Expense>
```

This means the list can only contain objects created from the `Expense` class.

## Constructor

```dart
const ExpensesList({
  super.key,
  required this.expenses,
});
```

The constructor allows the parent widget to pass the expense list into `ExpensesList`.

The `required` keyword means that this value must be provided whenever `ExpensesList` is used.

Example:

```dart
ExpensesList(expenses: _registeredExpenses)
```

## Why Not Use `Column`?

In Flutter, `Column` is useful when you want to display a small number of widgets vertically.

For example:

```dart
Column(
  children: [
    Text('Expense 1'),
    Text('Expense 2'),
  ],
)
```

However, `Column` is not ideal for long or dynamic lists.

If a user adds 100 or 1,000 expenses, a `Column` would try to create all those widgets immediately, even if most of them are not visible on the screen.

This can hurt performance because Flutter would spend resources building many invisible widgets.

## Why Use `ListView`?

`ListView` creates a scrollable list.

A basic `ListView` can be written like this:

```dart
ListView(
  children: [
    Text('Expense 1'),
    Text('Expense 2'),
  ],
)
```

This gives you a scrollable list, but it still creates all child widgets immediately.

For small lists, this is fine. But for long lists, it is not the most efficient option.

## Why Use `ListView.builder`?

`ListView.builder` is better for long or dynamic lists.

It lazily builds list items only when they are visible or about to become visible on the screen.

This means Flutter does not create all list items at once.

Instead, it builds items as needed while the user scrolls.

This improves performance, especially when the list may contain many items.

## Basic `ListView.builder` Syntax

```dart
ListView.builder(
  itemCount: expenses.length,
  itemBuilder: (ctx, index) => Text(expenses[index].title),
)
```

## `itemCount`

```dart
itemCount: expenses.length
```

`itemCount` tells Flutter how many list items should be created in total.

Here, the total number of list items is equal to the number of expenses in the list.

The `length` property returns the number of items inside the list.

## `itemBuilder`

```dart
itemBuilder: (ctx, index) => Text(expenses[index].title)
```

`itemBuilder` is a function that Flutter calls whenever it needs to build a list item.

This function receives two values:

* `ctx`: the build context
* `index`: the position of the current item in the list

The function must return a widget.

In this example, it returns a `Text` widget that displays the title of the current expense.

## Understanding the `index`

List indexes in Dart start at `0`.

For example, if the list has two expenses:

```dart
expenses[0]
expenses[1]
```

The first item has index `0`.

The second item has index `1`.

Inside `itemBuilder`, Flutter automatically provides the correct index for each item.

So this code:

```dart
expenses[index].title
```

gets the current expense from the list and then accesses its `title`.

## Using an Arrow Function

The `itemBuilder` can be written with a short arrow function:

```dart
itemBuilder: (ctx, index) => Text(expenses[index].title)
```

This is useful when the function only returns one value.

It is equivalent to writing:

```dart
itemBuilder: (ctx, index) {
  return Text(expenses[index].title);
}
```

Both versions work, but the arrow function is shorter and cleaner for simple return logic.

## Using `ExpensesList` in the Parent Widget

After creating `ExpensesList`, use it inside the main expenses widget.

Example:

```dart
Column(
  children: [
    const Text('The chart'),
    Expanded(
      child: ExpensesList(
        expenses: _registeredExpenses,
      ),
    ),
  ],
)
```

## Why Wrap `ListView.builder` with `Expanded`?

When `ListView.builder` is placed inside a `Column`, Flutter needs to know how much vertical space the list should take.

Without constraints, Flutter may throw a layout error because the list tries to take unlimited height.

Using `Expanded` solves this problem:

```dart
Expanded(
  child: ExpensesList(
    expenses: _registeredExpenses,
  ),
)
```

`Expanded` tells Flutter that the list should take the remaining available space inside the column.

## Complete Example

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

## Key Points

* Use a separate widget to keep the main `build()` method clean
* Use `StatelessWidget` when the widget only receives and displays data
* Avoid `Column` for long or unknown-length lists
* Use `ListView.builder` for efficient list rendering
* `itemCount` defines how many items should be rendered
* `itemBuilder` creates each visible list item
* The `index` value is used to access the correct item in the list
* Wrap `ListView.builder` with `Expanded` when it is inside a `Column`

## Notes

`ListView.builder` is the standard Flutter approach for rendering long or dynamic lists.

It improves performance because it does not create every item immediately. Instead, it builds items only when they are needed.

This is especially useful for apps where users can add many entries, such as expense trackers, todo apps, chat apps, or shopping lists.

## Summary

In this lecture, you learned how to render a list of expenses efficiently using `ListView.builder`.

You created a separate `ExpensesList` widget, passed the expense data into it, and used `itemCount` and `itemBuilder` to display each expense title.

`ListView.builder` is preferred over `Column` for long lists because it builds list items lazily, improving performance and keeping the app responsive.
