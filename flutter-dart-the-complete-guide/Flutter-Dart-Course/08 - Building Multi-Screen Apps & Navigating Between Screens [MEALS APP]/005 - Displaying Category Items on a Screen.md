# Displaying Category Items on a Screen

## Overview
This lecture focuses on building the `CategoryGridItem` widget and rendering each meal category as a styled card in the grid. You will use `Container` with a `BoxDecoration` to apply gradient backgrounds and rounded corners to each category tile. The result is a visually appealing categories screen that shows all available meal categories.

## Key Points
- Create a `CategoryGridItem` widget that accepts a `Category` model object
- Use `BoxDecoration` with `LinearGradient` to style each grid cell
- Apply `borderRadius` to give grid items rounded corners
- Display the category title using a `Text` widget styled with `Theme` data
- Iterate over the categories list and map each to a `CategoryGridItem`

## Code Example
```dart
class CategoryGridItem extends StatelessWidget {
  const CategoryGridItem({super.key, required this.category});

  final Category category;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: LinearGradient(
          colors: [
            category.color.withOpacity(0.55),
            category.color.withOpacity(0.9),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Text(
        category.title,
        style: Theme.of(context).textTheme.titleLarge!.copyWith(
              color: Theme.of(context).colorScheme.onBackground,
            ),
      ),
    );
  }
}
```

## Notes
Using `LinearGradient` inside `BoxDecoration` is a clean way to add color variation to grid items without extra packages. The `Category` model should store a `Color` and a `String` title at minimum. Accessing theme data via `Theme.of(context)` ensures the UI adapts correctly to light and dark modes.

## Summary
Each category is displayed as a gradient-styled, rounded container inside the grid, using data from the `Category` model and Flutter's theming system.
