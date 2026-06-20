# Using Lists Inside Of Lists

## Overview
This lecture explores how to nest lists within lists in Flutter to build more complex layouts, such as a list of expense items where each item itself contains a row of sub-elements. You will learn how to structure widget trees that involve multiple layers of scrollable and non-scrollable lists. Understanding this concept is essential for building rich, data-driven UIs.

## Key Points
- A `Column` inside a `ListView` item can stack multiple rows of data vertically
- Use `Row` inside list item widgets to lay out elements horizontally
- Avoid nesting scrollable widgets without proper constraints (use `shrinkWrap` or `Expanded`)
- Separate list item logic into a dedicated widget class for cleaner code

## Code Example
```dart
class ExpenseItem extends StatelessWidget {
  const ExpenseItem(this.expense, {super.key});

  final Expense expense;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(expense.title),
            Row(
              children: [
                Text('\$${expense.amount.toStringAsFixed(2)}'),
                const Spacer(),
                Text(expense.date.toString()),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
```

## Notes
Nesting a `Column` inside a `ListView.builder` item is perfectly valid since the `Column` is not independently scrollable. Each expense item is a self-contained widget, which improves readability and allows reuse. Breaking complex widgets into smaller composable parts is a core Flutter best practice.

## Summary
Nesting lists and rows within list item widgets creates rich UI layouts, and extracting item widgets into separate classes keeps the codebase clean and maintainable.
