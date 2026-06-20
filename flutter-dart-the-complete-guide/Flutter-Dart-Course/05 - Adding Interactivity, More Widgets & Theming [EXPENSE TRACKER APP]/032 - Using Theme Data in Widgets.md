# Using Theme Data in Widgets

## Overview
This lecture focuses on how to consume theme data inside widget `build` methods using `Theme.of(context)`. Rather than hardcoding colors and text styles, every widget reads from the active theme, making the entire app respond correctly when the theme changes. You will update the expense list item and chart widgets to use theme colors and text styles.

## Key Points
- `Theme.of(context)` returns the nearest `ThemeData` in the widget tree
- Access color roles via `.colorScheme.primary`, `.colorScheme.surface`, etc.
- Access text styles via `.textTheme.titleLarge`, `.textTheme.bodyMedium`, etc.
- Widget-specific theme overrides (like `cardTheme`) can be read via `Theme.of(context).cardTheme`

## Code Example
```dart
class ExpenseItem extends StatelessWidget {
  const ExpenseItem(this.expense, {super.key});

  final Expense expense;

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              expense.title,
              style: Theme.of(context).textTheme.titleLarge, // theme text style
            ),
            const SizedBox(height: 4),
            Row(
              children: [
                Text('\$${expense.amount.toStringAsFixed(2)}'),
                const Spacer(),
                Row(
                  children: [
                    Icon(
                      categoryIcons[expense.category],
                      color: Theme.of(context).colorScheme.primary, // theme color
                    ),
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

## Notes
`Theme.of(context)` is an inherited widget lookup — it travels up the widget tree to find the nearest `Theme` ancestor. This is efficient and cached by Flutter. Avoid calling `Theme.of(context)` outside of `build` methods or in `initState`, as context may not be fully initialized at that stage.

## Summary
Reading colors and text styles from `Theme.of(context)` inside widgets ensures they automatically reflect the active theme, enabling seamless light/dark mode and theme switching.
