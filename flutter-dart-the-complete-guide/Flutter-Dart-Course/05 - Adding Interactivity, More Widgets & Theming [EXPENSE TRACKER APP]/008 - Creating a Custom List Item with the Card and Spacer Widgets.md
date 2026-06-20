# Creating a Custom List Item with the Card and Spacer Widgets

## Overview
This lecture focuses on building a polished expense list item using the `Card` and `Spacer` widgets. The `Card` widget provides a Material Design surface with elevation and rounded corners, while `Spacer` pushes sibling widgets apart in a `Row` or `Column`. Together they help create a visually appealing and well-spaced expense entry.

## Key Points
- `Card` wraps content in a Material surface with configurable elevation and shape
- `Spacer` is a flexible widget that fills available space between siblings in a `Flex` layout
- `Padding` inside `Card` ensures content does not touch the card edges
- `CrossAxisAlignment.start` aligns text to the left within a `Column`

## Code Example
```dart
Card(
  child: Padding(
    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          expense.title,
          style: Theme.of(context).textTheme.titleLarge,
        ),
        const SizedBox(height: 4),
        Row(
          children: [
            Text('\$${expense.amount.toStringAsFixed(2)}'),
            const Spacer(), // pushes date to the right
            Row(
              children: [
                const Icon(Icons.calendar_month),
                const SizedBox(width: 4),
                Text(expense.formattedDate),
              ],
            ),
          ],
        ),
      ],
    ),
  ),
)
```

## Notes
`Spacer` is essentially a `Flexible` widget with a flex factor of 1, making it a concise way to push elements to opposite ends of a row. Cards automatically apply a subtle shadow that elevates them visually from the background. Use `SizedBox` for precise fixed spacing between elements when `Spacer` is too flexible.

## Summary
The `Card` and `Spacer` widgets together create visually clean and well-structured expense list items that follow Material Design guidelines.
