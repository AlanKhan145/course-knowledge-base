# Using Icons and Formatting Dates

## Overview

In this lecture, we improve the expense list item by adding two important features:

1. Dynamic icons based on the expense category
2. Human-readable date formatting

Previously, the `ExpenseItem` widget used a hardcoded icon and displayed the raw `DateTime` value. This worked technically, but it did not look user-friendly.

Now, we will update the `Expense` model so that each expense can provide:

* A formatted date string
* A matching icon for its category

This keeps the UI code cleaner and makes the expense list easier to read.

---

## Adding Category Icons

Open the `expense.dart` file inside the `models` folder.

In this file, we already define the `Expense` class and the `Category` enum. Now we will also add a map that connects each category to a Material icon.

```dart
import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';

const uuid = Uuid();

enum Category {
  food,
  travel,
  leisure,
  work,
}

const categoryIcons = {
  Category.food: Icons.lunch_dining,
  Category.travel: Icons.flight_takeoff,
  Category.leisure: Icons.movie,
  Category.work: Icons.work,
};
```

## Why Use a Map?

A `Map` allows us to connect one value to another.

In this case:

```dart
Category.food
```

is connected to:

```dart
Icons.lunch_dining
```

So later, when an expense has the category `Category.food`, we can automatically display the food icon.

---

## Adding the `intl` Package

Formatting dates manually in Dart can be inconvenient. For this reason, we use the `intl` package.

Run this command:

```bash
flutter pub add intl
```

This adds the package to the `pubspec.yaml` file.

Then import it in `expense.dart`:

```dart
import 'package:intl/intl.dart';
```

---

## Creating a Date Formatter

After importing `intl`, create a formatter at the top level of the file:

```dart
final formatter = DateFormat.yMd();
```

`DateFormat.yMd()` creates a date formatter that formats dates using year, month, and day.

For example, it can display a date like:

```text
6/17/2026
```

instead of a raw `DateTime` value like:

```text
2026-06-17 00:00:00.000
```

---

## Adding a Getter to the `Expense` Class

Inside the `Expense` class, add a getter called `formattedDate`.

```dart
String get formattedDate {
  return formatter.format(date);
}
```

A getter works like a property, but it can compute and return a value.

This means we can write:

```dart
expense.formattedDate
```

instead of calling a method like:

```dart
expense.getFormattedDate()
```

Because it is a getter, we do not add parentheses.

---

## Updated `expense.dart`

```dart
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:uuid/uuid.dart';

const uuid = Uuid();

final formatter = DateFormat.yMd();

enum Category {
  food,
  travel,
  leisure,
  work,
}

const categoryIcons = {
  Category.food: Icons.lunch_dining,
  Category.travel: Icons.flight_takeoff,
  Category.leisure: Icons.movie,
  Category.work: Icons.work,
};

class Expense {
  Expense({
    required this.title,
    required this.amount,
    required this.date,
    required this.category,
  }) : id = uuid.v4();

  final String id;
  final String title;
  final double amount;
  final DateTime date;
  final Category category;

  String get formattedDate {
    return formatter.format(date);
  }
}
```

---

## Using the Dynamic Icon in `ExpenseItem`

Now go back to the `expense_item.dart` file.

Previously, the icon was hardcoded:

```dart
const Icon(Icons.alarm)
```

This means every expense displayed the same icon.

Now we can use the `categoryIcons` map instead:

```dart
Icon(categoryIcons[expense.category])
```

The icon is selected dynamically based on the expense category.

Because the icon is no longer hardcoded, we must remove `const`.

---

## Using the Formatted Date

Previously, the date was displayed like this:

```dart
Text(expense.date.toString())
```

This produces a long and ugly date string.

Now we can use the getter:

```dart
Text(expense.formattedDate)
```

This displays a cleaner, human-readable date.

---

## Updated `ExpenseItem`

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
                    Icon(categoryIcons[expense.category]),
                    const SizedBox(width: 8),
                    Text(expense.formattedDate),
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

## How the Dynamic Icon Works

The expense object stores a category:

```dart
expense.category
```

For example:

```dart
Category.food
```

Then this category is used as a key in the `categoryIcons` map:

```dart
categoryIcons[expense.category]
```

This returns the matching icon:

```dart
Icons.lunch_dining
```

So each expense can display a different icon depending on its category.

---

## Important Notes

### `Icon`

The `Icon` widget displays an icon on the screen.

It expects an `IconData` value, usually from Flutter’s built-in `Icons` class.

Example:

```dart
Icon(Icons.work)
```

---

### `intl`

The `intl` package helps with formatting dates, numbers, currencies, and localized text.

In this lecture, we use it to format dates.

```dart
DateFormat.yMd()
```

This creates a short year-month-day formatter.

---

### Getter

A getter is useful when you want to expose a computed value as if it were a normal property.

Example:

```dart
String get formattedDate {
  return formatter.format(date);
}
```

Then you can access it like this:

```dart
expense.formattedDate
```

not like this:

```dart
expense.formattedDate()
```

---

## Before and After

### Before

```dart
const Icon(Icons.alarm)
Text(expense.date.toString())
```

Problems:

* Every expense used the same icon
* The date was too long and hard to read

---

### After

```dart
Icon(categoryIcons[expense.category])
Text(expense.formattedDate)
```

Benefits:

* Icons now match the expense category
* Dates are easier to read
* The UI looks cleaner and more polished

---

## Summary

In this lecture, we improved the expense list item by adding dynamic category icons and formatted dates.

We updated the `expense.dart` model file by adding:

* A `categoryIcons` map
* A top-level `DateFormat` formatter
* A `formattedDate` getter inside the `Expense` class

Then we updated the `ExpenseItem` widget to use:

```dart
Icon(categoryIcons[expense.category])
```

and:

```dart
Text(expense.formattedDate)
```

These changes make the expense list more readable, more visual, and more user-friendly.
