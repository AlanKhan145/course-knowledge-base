# Creating a More Complex Provider with StateNotifier

## Overview
This lecture introduces `StateNotifier` and `StateNotifierProvider` for managing mutable state that can change over time. It demonstrates how to create a notifier class that encapsulates state mutation logic and how to expose it via a `StateNotifierProvider`. This pattern is used to manage the list of favorite meals.

## Key Points
- `StateNotifier<T>` is a class that holds immutable state of type `T` and exposes methods to update it
- State is always replaced entirely (immutably) — never mutated directly
- `StateNotifierProvider<NotifierClass, StateType>` exposes both the notifier and its state
- Methods on the `StateNotifier` subclass update `state` by assigning a new value
- This pattern keeps business logic out of widgets and inside testable notifier classes

## Code Example
```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/meal.dart';
import 'meals_provider.dart';

// The StateNotifier subclass holds and manages the favorites list
class FavoriteMealsNotifier extends StateNotifier<List<Meal>> {
  // Initialize with an empty list
  FavoriteMealsNotifier() : super([]);

  // Method to toggle a meal's favorite status
  bool toggleMealFavoriteStatus(Meal meal) {
    final mealIsFavorite = state.contains(meal);

    if (mealIsFavorite) {
      // Create a new list without the meal (immutable update)
      state = state.where((m) => m.id != meal.id).toList();
      return false;
    } else {
      // Create a new list with the meal added
      state = [...state, meal];
      return true;
    }
  }
}

// The StateNotifierProvider exposes the notifier and its state
final favoriteMealsProvider =
    StateNotifierProvider<FavoriteMealsNotifier, List<Meal>>(
  (ref) => FavoriteMealsNotifier(),
);
```

## Notes
The key rule with `StateNotifier` is that you must never mutate the state object in place — always assign a completely new object to `state`. This is what allows Riverpod to detect changes and notify listeners. For lists, this means using spread operators (`[...state, newItem]`) or `.where().toList()` instead of `state.add()` or `state.remove()`. Keeping the notifier class focused on a single concern makes it easy to test in isolation.

## Summary
`StateNotifier` combined with `StateNotifierProvider` is the standard Riverpod pattern for managing complex mutable state with encapsulated business logic.
