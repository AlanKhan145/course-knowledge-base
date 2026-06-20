# Passing Functions Through Multiple Layers of Widgets for State Management

## Overview
This lecture demonstrates a state management pattern where callback functions are passed down through multiple widget layers ("prop drilling"). The `onToggleFavorite` function is defined at the `TabsScreen` level and passed down through `MealsScreen` and `MealItem` to `MealDetailsScreen`. This allows child widgets to trigger state changes in a parent widget.

## Key Points
- Define the state and its mutation function at the highest widget that needs access to it
- Pass callback functions as constructor parameters to child widgets
- This pattern is called "lifting state up" — state lives in the common ancestor
- Prop drilling becomes unwieldy with many layers; state management libraries (like Riverpod) solve this
- Use `typedef` or `void Function(...)` signatures to type your callbacks clearly

## Code Example
```dart
// In TabsScreen (stateful parent)
final List<Meal> _favoriteMeals = [];

void _toggleMealFavoriteStatus(Meal meal) {
  setState(() {
    if (_favoriteMeals.contains(meal)) {
      _favoriteMeals.remove(meal);
    } else {
      _favoriteMeals.add(meal);
    }
  });
}

// Passed down to MealsScreen
MealsScreen(
  meals: availableMeals,
  onToggleFavorite: _toggleMealFavoriteStatus,
)

// MealsScreen passes it further to MealDetailsScreen
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (ctx) => MealDetailsScreen(
      meal: meal,
      onToggleFavorite: widget.onToggleFavorite,
    ),
  ),
);
```

## Notes
While function passing works well for simple apps, it becomes cumbersome when the function needs to travel through many widget layers. This pattern is intentionally introduced before Riverpod or Provider to help you understand why state management libraries exist. Recognizing "prop drilling" is the first step toward using more scalable solutions.

## Summary
Callback functions are passed from parent to child widgets across multiple layers so that child screens can trigger state changes managed by the parent `TabsScreen`.
