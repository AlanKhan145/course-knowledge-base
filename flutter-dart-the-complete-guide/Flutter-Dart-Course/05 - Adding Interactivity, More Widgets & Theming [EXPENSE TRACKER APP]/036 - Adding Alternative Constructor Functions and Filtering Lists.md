# Adding Alternative Constructor Functions and Filtering Lists

## Overview
This lecture introduces named constructors in Dart as a way to provide alternative initialization paths for a class. In the Expense Tracker, an `ExpenseBucket` class uses a named constructor to build a bucket filtered by category from the full expense list. Filtering lists with `where` is also covered as a functional approach to extracting subsets of data.

## Key Points
- Named constructors allow multiple ways to create an object (e.g., `ExpenseBucket.forCategory(...)`)
- The `where` method filters an `Iterable` and returns elements matching a condition
- Named constructors are defined with `ClassName.constructorName(...)` syntax
- Filtering lists for chart data is a common pattern in data-driven Flutter apps

## Code Example
```dart
class ExpenseBucket {
  const ExpenseBucket({
    required this.category,
    required this.expenses,
  });

  // Named alternative constructor — filters expenses by category
  ExpenseBucket.forCategory(List<Expense> allExpenses, this.category)
      : expenses = allExpenses
            .where((expense) => expense.category == category)
            .toList();

  final Category category;
  final List<Expense> expenses;

  double get totalExpenses {
    double sum = 0;
    for (final expense in expenses) {
      sum += expense.amount;
    }
    return sum;
  }
}
```

## Notes
Named constructors are a Dart feature with no direct equivalent in many other languages — they replace the common factory pattern seen in Java. The `where` method returns a lazy `Iterable`, so call `.toList()` to materialize it into a `List` for use in widgets. `totalExpenses` as a getter (not a method) is idiomatic Dart for computed properties.

## Summary
Named constructors and the `where` filter method together enable clean, expressive creation of category-specific expense buckets used to power the chart widget.
