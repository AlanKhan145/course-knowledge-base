# Creating a Provider

## Overview
This lecture demonstrates how to create a basic Riverpod provider that exposes a value to the rest of the application. It covers the `Provider` class for read-only values and the conventions for declaring providers as top-level constants in a dedicated file. This is the starting point for all Riverpod state management.

## Key Points
- Providers are declared as top-level `final` variables, outside any class
- The basic `Provider<T>` is used for values that do not change (or are computed from other providers)
- The provider callback receives a `ref` argument for reading other providers
- It is convention to place providers in a separate file (e.g., `providers/meals_provider.dart`)
- Provider names typically end with `Provider` by convention (e.g., `mealsProvider`)

## Code Example
```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/meal.dart';
import '../data/dummy_data.dart';

// A simple read-only provider that exposes the list of all meals
final mealsProvider = Provider<List<Meal>>((ref) {
  return dummyMeals; // returns the static dummy data
});
```

## Notes
The `Provider<T>` type is best suited for values that are derived or constant — it does not have built-in mechanisms for mutation. For mutable state, you will use `StateProvider` or `StateNotifierProvider` in later lectures. Keeping provider declarations in their own files keeps the codebase organized and makes it easy to find and reason about what state exists in the app.

## Summary
Create a Riverpod provider by declaring a top-level `final` variable using `Provider<T>`, passing a callback that returns the value you want to expose to the widget tree.
