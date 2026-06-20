# Adding Cross-Screen Navigation

## Overview
This lecture introduces Flutter's imperative navigation system using `Navigator.push` and `MaterialPageRoute`. When a user taps a category, the app navigates to the `MealsScreen` by pushing a new route onto the navigation stack. The back button automatically pops the route and returns the user to the categories screen.

## Key Points
- `Navigator.push` adds a new screen (route) on top of the navigation stack
- `MaterialPageRoute` wraps a widget builder and provides a platform-appropriate transition animation
- The navigator maintains a stack — you push screens on and pop them off
- The system back button (Android) or back arrow (iOS app bar) calls `Navigator.pop` automatically
- Pass the filtered meals list to `MealsScreen` at navigation time

## Code Example
```dart
// Inside CategoriesScreen or CategoryGridItem callback:
void _selectCategory(BuildContext context, Category category) {
  final filteredMeals = dummyMeals
      .where((meal) => meal.categories.contains(category.id))
      .toList();

  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (ctx) => MealsScreen(
        title: category.title,
        meals: filteredMeals,
      ),
    ),
  );
}
```

## Notes
`Navigator.push` is the standard way to navigate forward in Flutter's imperative navigation model. The `BuildContext` passed to `Navigator.push` must be accessible where the navigation call happens. Flutter automatically adds a back button to the `AppBar` of any screen pushed onto the stack, unless you explicitly remove it.

## Summary
`Navigator.push` with `MaterialPageRoute` enables forward navigation from the categories grid to a filtered meals list screen.
