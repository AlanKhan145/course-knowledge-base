# Managing App-wide State and Data

## Overview
This lecture addresses the challenge of managing state that needs to be accessible across multiple screens, such as the list of favorite meals and active filters. The `TabsScreen` acts as the central state manager, holding both `_favoriteMeals` and `_filters` and distributing them to child screens via props. This prepares you for understanding why dedicated state management tools are beneficial.

## Key Points
- App-wide state (favorites, filters) is stored in the top-most stateful widget (`TabsScreen`)
- Multiple screens need access to the same data (e.g., favorites count in tab badge, favorites list in favorites screen)
- Changes to state in one screen must automatically reflect in other screens
- `setState` triggers a rebuild of the widget and all its descendants with updated data
- This approach has limitations that motivate using Riverpod or Provider in later modules

## Code Example
```dart
class _TabsScreenState extends State<TabsScreen> {
  final List<Meal> _favoriteMeals = [];
  Map<Filter, bool> _selectedFilters = {
    Filter.glutenFree: false,
    Filter.lactoseFree: false,
    Filter.vegetarian: false,
    Filter.vegan: false,
  };

  List<Meal> get _availableMeals {
    return dummyMeals.where((meal) {
      if (_selectedFilters[Filter.glutenFree]! && !meal.isGlutenFree) return false;
      if (_selectedFilters[Filter.lactoseFree]! && !meal.isLactoseFree) return false;
      if (_selectedFilters[Filter.vegetarian]! && !meal.isVegetarian) return false;
      if (_selectedFilters[Filter.vegan]! && !meal.isVegan) return false;
      return true;
    }).toList();
  }
  // ...
}
```

## Notes
Centralizing state in a common ancestor is the "lifting state up" pattern in action. As your widget tree grows deeper, this approach becomes harder to maintain because every intermediate widget must forward the state and callbacks. This is exactly the problem that state management solutions like Riverpod, Provider, or BLoC are designed to solve.

## Summary
App-wide state such as favorites and filters is managed in the top-level `TabsScreen` stateful widget and passed down to child screens via constructors.
