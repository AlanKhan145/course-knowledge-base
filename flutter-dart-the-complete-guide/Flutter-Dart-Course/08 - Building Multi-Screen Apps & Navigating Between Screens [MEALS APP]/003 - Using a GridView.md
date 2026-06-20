# Using a GridView

## Overview
This lecture introduces the `GridView` widget for displaying categories of meals in a grid layout. You will learn the difference between `GridView.count` and `GridView.builder`, and how to configure the cross-axis count and spacing. The categories screen uses a grid to give users a visually appealing overview of all meal categories.

## Key Points
- `GridView` displays items in a 2D scrollable grid
- `GridView.builder` is preferred for large or dynamic lists (builds items lazily)
- `crossAxisCount` controls how many columns the grid has
- `crossAxisSpacing` and `mainAxisSpacing` control gaps between grid items
- `childAspectRatio` adjusts the width-to-height ratio of each grid cell

## Code Example
```dart
GridView(
  padding: const EdgeInsets.all(24),
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2,
    childAspectRatio: 3 / 2,
    crossAxisSpacing: 20,
    mainAxisSpacing: 20,
  ),
  children: availableCategories.map((category) {
    return CategoryGridItem(category: category);
  }).toList(),
)
```

## Notes
`GridView` works similarly to `ListView` but arranges items in a grid. The `SliverGridDelegateWithFixedCrossAxisCount` is the most commonly used delegate because it lets you define a fixed number of columns. Always consider performance — use `GridView.builder` when the number of items is large or unknown.

## Summary
The `GridView` widget is used to display meal categories in a responsive, scrollable grid layout with configurable columns and spacing.
