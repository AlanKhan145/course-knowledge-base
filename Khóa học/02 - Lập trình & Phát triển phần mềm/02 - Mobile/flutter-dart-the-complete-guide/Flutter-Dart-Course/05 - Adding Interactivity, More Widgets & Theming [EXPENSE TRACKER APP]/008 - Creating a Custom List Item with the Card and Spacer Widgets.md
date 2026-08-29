# Creating a Custom Expense List Item with `Card` and `Spacer`

## Overview

Now that the expenses list is displayed, the next step is to improve each list item.

Instead of only showing the expense title as plain text, each item should display all relevant expense information, such as:

* Title
* Amount
* Category
* Date

To keep the `ExpensesList` widget clean and easy to manage, we will create a separate widget for rendering each individual expense item.

---

## Project Structure

To organize the code better, create a `widgets` folder and move the related widgets into it.

The suggested structure is:

```text
lib/
├── main.dart
├── models/
│   └── expense.dart
└── widgets/
    ├── expenses.dart
    └── expenses_list/
        ├── expenses_list.dart
        └── expense_item.dart
```

This structure is optional, but it helps keep the project manageable as the app grows.

---

## Creating the `ExpenseItem` Widget

Create a new file:

```text
lib/widgets/expenses_list/expense_item.dart
```

Inside this file, define a new stateless widget called `ExpenseItem`.

```dart
import 'package:flutter/material.dart';

import '../../models/expense.dart';

class ExpenseItem extends StatelessWidget {
  const ExpenseItem(this.expense, {super.key});

  final Expense expense;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Text(expense.title),
    );
  }
}
```

### Why `StatelessWidget`?

`ExpenseItem` does not manage any internal state. It simply receives an `Expense` object and displays its data.

Therefore, `StatelessWidget` is the correct choice.

---

## Using `ExpenseItem` in `ExpensesList`

In `expenses_list.dart`, replace the plain `Text` widget inside the `itemBuilder` with the new `ExpenseItem` widget.

```dart
itemBuilder: (ctx, index) => ExpenseItem(expenses[index]),
```

Each list item now receives one `Expense` object from the expenses list.

---

## Using the `Card` Widget

The `Card` widget is used to give each expense item a Material Design card style.

It adds:

* A subtle shadow
* Slight elevation
* Default spacing around the card
* A cleaner visual separation between list items

Example:

```dart
Card(
  child: Text(expense.title),
)
```

At this stage, the card only displays the expense title, but it already gives the item a better visual structure.

---

## Adding Padding Inside the Card

The `Card` widget has a `margin` parameter, but it does not have a direct `padding` parameter.

To add internal spacing between the card border and its content, wrap the content with a `Padding` widget.

```dart
Card(
  child: Padding(
    padding: const EdgeInsets.symmetric(
      horizontal: 20,
      vertical: 16,
    ),
    child: Text(expense.title),
  ),
)
```

### Why `EdgeInsets.symmetric`?

`EdgeInsets.symmetric` allows you to define different spacing values for horizontal and vertical directions.

In this example:

```dart
horizontal: 20
vertical: 16
```

This means:

* 20 pixels of padding on the left and right
* 16 pixels of padding on the top and bottom

---

## Using a `Column` for Multiple Rows

Each expense item should display more than one piece of information.

The layout should include:

1. The expense title
2. A second row with the amount, category icon, and date

Since the content should be arranged vertically, use a `Column`.

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    Text(expense.title),
    const SizedBox(height: 4),
    Row(
      children: [
        Text('\$${expense.amount.toStringAsFixed(2)}'),
      ],
    ),
  ],
)
```

### Why `Column` instead of `ListView`?

A `ListView` is useful for scrollable lists and performance optimization when there are many items.

Inside a single expense item, there are only a few rows, so a `Column` is more appropriate.

---

## Displaying the Expense Amount

The amount is stored as a `double`, but the `Text` widget expects a `String`.

To convert the amount into a formatted string, use:

```dart
expense.amount.toStringAsFixed(2)
```

Example:

```dart
Text('\$${expense.amount.toStringAsFixed(2)}')
```

### What does `toStringAsFixed(2)` do?

It limits the number to two decimal places.

For example:

```text
12.3433
```

becomes:

```text
12.34
```

This is useful for displaying money values cleanly.

### Escaping the Dollar Sign

In Dart strings, the dollar sign `$` is used for string interpolation.

To display an actual dollar sign, escape it with a backslash:

```dart
'\$${expense.amount.toStringAsFixed(2)}'
```

The first dollar sign is displayed as text, while the second one starts the interpolation expression.

---

## Using `Row` and `Spacer`

The second visible row should display:

* Amount on the left
* Category icon and date on the right

To achieve this, use a `Row`.

Inside the row, add a `Spacer` between the amount and the category/date group.

```dart
Row(
  children: [
    Text('\$${expense.amount.toStringAsFixed(2)}'),
    const Spacer(),
    Row(
      children: [
        const Icon(Icons.alarm),
        const SizedBox(width: 8),
        Text(expense.date.toString()),
      ],
    ),
  ],
)
```

### What does `Spacer` do?

`Spacer` takes up all remaining available space inside a `Row` or `Column`.

In this case, it pushes:

* The amount to the left
* The icon and date to the right

This makes the layout cleaner and easier to read.

---

## Complete `ExpenseItem` Example

```dart
import 'package:flutter/material.dart';

import '../../models/expense.dart';

class ExpenseItem extends StatelessWidget {
  const ExpenseItem(this.expense, {super.key});

  final Expense expense;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: 20,
          vertical: 16,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(expense.title),
            const SizedBox(height: 4),
            Row(
              children: [
                Text('\$${expense.amount.toStringAsFixed(2)}'),
                const Spacer(),
                Row(
                  children: [
                    const Icon(Icons.alarm),
                    const SizedBox(width: 8),
                    Text(expense.date.toString()),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## Important Notes

### `Card`

The `Card` widget is mainly used for styling. It gives the item an elevated surface with a subtle shadow.

### `Padding`

`Padding` adds internal spacing between the card border and its child content.

### `SizedBox`

`SizedBox` is useful for adding fixed spacing between widgets.

Example:

```dart
const SizedBox(height: 4)
```

adds vertical spacing.

```dart
const SizedBox(width: 8)
```

adds horizontal spacing.

### `Spacer`

`Spacer` pushes widgets apart by taking all remaining available space.

It is especially useful inside a `Row` when you want one widget on the left and another group of widgets on the right.

---

## Next Improvements

The current implementation still uses:

```dart
const Icon(Icons.alarm)
```

as a temporary icon.

It also displays the date using:

```dart
expense.date.toString()
```

which is not very user-friendly.

The next improvements will be:

* Choose the icon dynamically based on the expense category
* Format the date into a more readable format
* Improve the text styling of the expense title and amount

---

## Summary

In this lecture, we created a custom `ExpenseItem` widget to render each expense in a cleaner and more structured way.

The main widgets used were:

* `Card` for visual elevation
* `Padding` for internal spacing
* `Column` for vertical layout
* `Row` for horizontal layout
* `Spacer` for pushing widgets apart
* `SizedBox` for fixed spacing

This makes the expenses list easier to read, easier to style, and easier to maintain.
