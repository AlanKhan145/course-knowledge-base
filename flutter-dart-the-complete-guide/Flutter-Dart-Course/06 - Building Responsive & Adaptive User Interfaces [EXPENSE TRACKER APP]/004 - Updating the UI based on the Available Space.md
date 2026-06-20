# Updating the UI based on the Available Space

## Overview
This lecture covers how to dynamically update your Flutter UI layout based on the actual screen space available at runtime. Using `MediaQuery`, you can read the current screen dimensions and conditionally render different widget trees or adjust sizing accordingly. This is the core technique for building truly responsive Flutter apps.

## Key Points
- `MediaQuery.of(context).size` returns the current screen width and height
- Conditional logic (e.g., `if (width > 600)`) allows switching between different layouts
- `MediaQuery` values update automatically when orientation changes
- You can use `MediaQuery` to read width, height, padding, text scale factor, and more
- Wrapping layout decisions in conditions makes the UI adapt without rebuilding the whole app

## Code Example
```dart
class ExpensesPage extends StatelessWidget {
  const ExpensesPage({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isWideScreen = screenWidth > 600;

    return Scaffold(
      appBar: AppBar(title: const Text('Expenses')),
      body: isWideScreen
          ? Row(
              children: [
                // Side chart for wide screens
                Expanded(child: ExpenseChart()),
                Expanded(child: ExpenseList()),
              ],
            )
          : Column(
              children: [
                // Stacked layout for narrow screens
                ExpenseChart(),
                Expanded(child: ExpenseList()),
              ],
            ),
    );
  }
}
```

## Notes
`MediaQuery.of(context)` must be called inside a `build` method where a valid `BuildContext` with a `MediaQuery` ancestor is available. Be careful about calling it too high in the widget tree before `MaterialApp` is initialized. For more fine-grained control within a subtree, the `LayoutBuilder` widget (covered later) is often a better choice than `MediaQuery`.

## Summary
Use `MediaQuery.of(context).size` to read screen dimensions and conditionally render different layouts, making your UI adapt seamlessly to any screen size.
