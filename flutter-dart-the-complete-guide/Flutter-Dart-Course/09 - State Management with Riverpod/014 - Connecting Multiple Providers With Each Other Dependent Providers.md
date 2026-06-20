# Connecting Multiple Providers With Each Other Dependent Providers

## Overview
This lecture demonstrates how to create a provider that depends on other providers — specifically a `filteredMealsProvider` that combines the full meals list from `mealsProvider` with the active filters from `filtersProvider`. Using `ref.watch` inside a provider's callback enables this reactive dependency chain.

## Key Points
- A provider can watch other providers using `ref.watch(otherProvider)` inside its callback
- When any watched dependency changes, the dependent provider automatically recomputes its value
- `filteredMealsProvider` watches both `mealsProvider` and `filtersProvider` to derive filtered meals
- This is a `Provider<List<Meal>>` (not StateNotifier) because its value is derived, not manually mutated
- Dependent providers keep business logic (filtering) out of widgets entirely

## Code Example
```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/meal.dart';
import 'meals_provider.dart';
import 'filters_provider.dart';

// A derived provider that recomputes whenever meals or filters change
final filteredMealsProvider = Provider<List<Meal>>((ref) {
  // Watch both dependencies — recomputes if either changes
  final meals = ref.watch(mealsProvider);
  final activeFilters = ref.watch(filtersProvider);

  return meals.where((meal) {
    if (activeFilters[Filter.glutenFree]! && !meal.isGlutenFree) {
      return false;
    }
    if (activeFilters[Filter.lactoseFree]! && !meal.isLactoseFree) {
      return false;
    }
    if (activeFilters[Filter.vegetarian]! && !meal.isVegetarian) {
      return false;
    }
    if (activeFilters[Filter.vegan]! && !meal.isVegan) {
      return false;
    }
    return true;
  }).toList();
});
```

## Notes
This reactive dependency pattern is one of Riverpod's most powerful features. The `filteredMealsProvider` is essentially a computed/derived value that Riverpod keeps up to date automatically. You never need to manually trigger a recalculation — changing the filters state causes `filtersProvider` to emit a new value, which causes `filteredMealsProvider` to recompute, which causes any watching widget to rebuild. This chain is handled entirely by Riverpod.

## Summary
Use `ref.watch` inside a provider's callback to create dependent providers that automatically recompute their derived values whenever any of their dependencies change.
