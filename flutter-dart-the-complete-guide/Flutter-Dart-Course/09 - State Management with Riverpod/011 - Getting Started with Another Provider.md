# Getting Started with Another Provider

## Overview
This lecture begins building a second provider to manage the meal filter settings (categories like gluten-free, vegan, etc.). It introduces creating a `StateNotifierProvider` for filter state, demonstrating that the same Riverpod patterns scale to managing different types of application state beyond just favorites.

## Key Points
- A separate `filtersProvider` is created to manage a `Map<Filter, bool>` of active meal filters
- `Filter` is a custom Dart enum representing each possible filter option
- The initial state is a map with all filters set to `false` (inactive)
- The notifier exposes a method to update a specific filter's boolean value
- Having separate providers for separate concerns keeps state management organized

## Code Example
```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

// Enum for the different filter types
enum Filter {
  glutenFree,
  lactoseFree,
  vegetarian,
  vegan,
}

// Notifier to manage the filters map
class FiltersNotifier extends StateNotifier<Map<Filter, bool>> {
  // Default: all filters off
  FiltersNotifier()
      : super({
          Filter.glutenFree: false,
          Filter.lactoseFree: false,
          Filter.vegetarian: false,
          Filter.vegan: false,
        });

  void setFilter(Filter filter, bool isActive) {
    // Immutable map update using spread operator
    state = {
      ...state,
      filter: isActive,
    };
  }

  void setFilters(Map<Filter, bool> chosenFilters) {
    state = chosenFilters;
  }
}

final filtersProvider =
    StateNotifierProvider<FiltersNotifier, Map<Filter, bool>>(
  (ref) => FiltersNotifier(),
);
```

## Notes
Using an enum for filter keys (rather than strings) provides compile-time safety — you cannot accidentally mistype a filter key. The `Map` state is updated immutably by spreading the existing state and overriding the changed key, which ensures Riverpod detects the state change. This pattern for map-based state is very common in Flutter apps that manage user preferences or settings.

## Summary
A `StateNotifierProvider` with a `Map<Filter, bool>` state cleanly manages multiple boolean filter settings using the same Riverpod patterns established for the favorites feature.
