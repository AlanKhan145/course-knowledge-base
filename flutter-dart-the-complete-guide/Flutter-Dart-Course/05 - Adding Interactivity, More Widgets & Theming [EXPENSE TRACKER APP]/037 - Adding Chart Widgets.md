# Adding Chart Widgets

## Overview
This lecture adds a bar chart to the Expense Tracker App that visualizes spending per category as a proportion of total spending. The chart is built with custom Flutter widgets using `FractionallySizedBox` to render bars whose height reflects each category's share of total expenses. No third-party chart library is needed — the bars are pure Flutter widget compositions.

## Key Points
- The chart is composed of two widgets: `Chart` (the bar group) and `ChartBar` (individual bar)
- `FractionallySizedBox` sizes a child as a fraction of its parent's size — ideal for proportional bars
- Each bar's fill fraction is `bucket.totalExpenses / maxTotalExpense` (clamped to 1.0)
- The chart is placed above the expense list in a `Column` layout

## Code Example
```dart
// ChartBar widget
class ChartBar extends StatelessWidget {
  const ChartBar({super.key, required this.fill});

  final double fill; // 0.0 to 1.0

  @override
  Widget build(BuildContext context) {
    final isDarkMode =
        MediaQuery.of(context).platformBrightness == Brightness.dark;

    return Expanded(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 4),
        child: FractionallySizedBox(
          heightFactor: fill,
          child: DecoratedBox(
            decoration: BoxDecoration(
              shape: BoxShape.rectangle,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
              color: isDarkMode
                  ? Theme.of(context).colorScheme.secondary
                  : Theme.of(context).colorScheme.primary.withOpacity(0.65),
            ),
          ),
        ),
      ),
    );
  }
}
```

## Notes
`FractionallySizedBox` requires a parent with a defined size; wrapping it in `Expanded` inside a `Row` satisfies this constraint. Normalize bar heights by dividing each bucket's total by the maximum bucket total — not the grand total — so the tallest bar always reaches full height. `DecoratedBox` is lighter than `Container` when only decoration (not size or padding) is needed.

## Summary
A custom bar chart built with `FractionallySizedBox` and `DecoratedBox` provides a clear visual summary of category-wise spending proportions without requiring any external charting package.
