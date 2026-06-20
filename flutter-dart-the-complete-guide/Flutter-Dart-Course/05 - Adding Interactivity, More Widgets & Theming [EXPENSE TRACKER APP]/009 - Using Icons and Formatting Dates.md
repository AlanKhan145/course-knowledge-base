# Using Icons and Formatting Dates

## Overview
This lecture shows how to display Material icons in widgets using the `Icon` widget and how to format `DateTime` objects into human-readable strings using the `intl` package. Icons enhance usability by providing visual cues for expense categories, and formatted dates make the expense list much easier to read at a glance.

## Key Points
- The `Icon` widget takes an `IconData` value, typically from the `Icons` class
- The `intl` package provides `DateFormat` for locale-aware date formatting
- Add `intl` to `pubspec.yaml` dependencies before importing it
- A getter on the `Expense` model is a clean way to expose a formatted date string

## Code Example
```dart
import 'package:intl/intl.dart';

final formatter = DateFormat.yMd(); // e.g., "6/17/2026"

class Expense {
  // ... other fields ...

  String get formattedDate {
    return formatter.format(date);
  }
}

// Using Icon and formatted date in a widget
Row(
  children: [
    Icon(categoryIcons[expense.category]),
    const SizedBox(width: 8),
    Text(expense.formattedDate),
  ],
)
```

## Notes
`DateFormat.yMd()` produces a short locale-sensitive date like "6/17/2026", while `DateFormat('dd MMM yyyy')` gives "17 Jun 2026" — choose based on your UI needs. Declaring the `DateFormat` as a top-level constant avoids recreating it on every build. Category icons can be stored in a `Map<Category, IconData>` for easy lookup.

## Summary
Icons and formatted dates improve the readability and visual quality of expense list items, turning raw data into a user-friendly interface.
