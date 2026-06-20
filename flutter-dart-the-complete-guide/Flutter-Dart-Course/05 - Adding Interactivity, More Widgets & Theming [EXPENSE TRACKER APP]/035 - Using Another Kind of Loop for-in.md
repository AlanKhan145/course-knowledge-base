# Using Another Kind of Loop: for-in

## Overview
This lecture introduces the `for-in` loop in Dart as a clean alternative to index-based `for` loops when you need to iterate over every element of a collection. In the context of the Expense Tracker, `for-in` is used to compute per-category expense totals for the chart. Understanding different loop patterns makes your Dart code more readable and expressive.

## Key Points
- `for (var item in collection)` iterates over every element without needing an index
- Cleaner and less error-prone than `for (int i = 0; i < list.length; i++)`
- Works with any `Iterable`: `List`, `Set`, `Map.entries`, etc.
- Variables declared in `for-in` are scoped to the loop body

## Code Example
```dart
// Calculate total spending per category for chart
double getTotalForCategory(List<Expense> expenses, Category category) {
  double totalAmount = 0;

  for (final expense in expenses) {
    if (expense.category == category) {
      totalAmount += expense.amount;
    }
  }

  return totalAmount;
}

// Using for-in with enum values to build chart data
List<ExpenseBucket> get buckets {
  return [
    for (final category in Category.values)
      ExpenseBucket.forCategory(_registeredExpenses, category),
  ];
}
```

## Notes
The `for-in` loop is ideal when you need every element but not its index. If you need the index, use `list.asMap().entries` with `for-in` or the traditional index-based for loop. Dart also supports collection `for` inside list/set/map literals, a powerful feature for building collections declaratively.

## Summary
The `for-in` loop provides a clean, readable way to iterate over collections in Dart, making per-category expense calculations concise and easy to understand.
