# Applying Filters

## Overview
This lecture wires up the filter logic so that the active filters from `FiltersScreen` actually affect which meals are displayed. A computed getter `_availableMeals` filters the `dummyMeals` list based on `_selectedFilters`, and this filtered list is passed to the meals screens so only compliant meals appear.

## Key Points
- A getter `_availableMeals` filters `dummyMeals` based on the four boolean filter flags
- Each filter check uses a `where` clause that returns `false` for meals that fail the active filter
- The filtered list is passed to both the `CategoriesScreen` meals context and `MealsScreen`
- Filter changes via `setState` trigger a rebuild, and the getter recomputes automatically
- Verify that combinations of filters (e.g., vegan + gluten-free) produce the correct intersection

## Code Example
```dart
// In _TabsScreenState
List<Meal> get _availableMeals {
  return dummyMeals.where((meal) {
    if (_selectedFilters[Filter.glutenFree]! && !meal.isGlutenFree) {
      return false;
    }
    if (_selectedFilters[Filter.lactoseFree]! && !meal.isLactoseFree) {
      return false;
    }
    if (_selectedFilters[Filter.vegetarian]! && !meal.isVegetarian) {
      return false;
    }
    if (_selectedFilters[Filter.vegan]! && !meal.isVegan) {
      return false;
    }
    return true;
  }).toList();
}

// Passed to CategoriesScreen so category meal counts are accurate
CategoriesScreen(availableMeals: _availableMeals)

// And to MealsScreen for the favorites tab
MealsScreen(meals: _favoriteMeals.where(
  (meal) => _availableMeals.contains(meal)).toList())
```

## Notes
The getter pattern is elegant because it recalculates automatically whenever the widget rebuilds — no need to call a separate update function. Multiple active filters act as an AND condition: a meal must satisfy all active filters to be included. Remember to also filter the favorites list so that a favorited meal that no longer meets the filters is hidden from the favorites tab.

## Summary
The `_availableMeals` getter filters `dummyMeals` based on all active filter flags and is passed to child screens so the UI always reflects the current filter settings.
