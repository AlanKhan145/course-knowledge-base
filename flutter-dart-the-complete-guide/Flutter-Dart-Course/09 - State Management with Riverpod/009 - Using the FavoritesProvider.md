# Using the FavoritesProvider

## Overview
This lecture demonstrates how to consume the `favoriteMealsProvider` in widgets to display the list of favorite meals. It covers reading the favorites state in a screen widget and rendering the favorites list, completing the read side of the favorites feature.

## Key Points
- Watch `favoriteMealsProvider` to get the current list of favorite meals as a `List<Meal>`
- The favorites screen rebuilds automatically whenever a meal is added or removed from favorites
- An empty state UI should be shown when the favorites list is empty
- `ref.watch` on a `StateNotifierProvider` returns the state (the list), not the notifier itself
- To access the notifier's methods, use `ref.read(favoriteMealsProvider.notifier)`

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/favorites_provider.dart';
import '../widgets/meal_item.dart';

class FavoritesScreen extends ConsumerWidget {
  const FavoritesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // ref.watch returns List<Meal> — the state of the StateNotifier
    final favoriteMeals = ref.watch(favoriteMealsProvider);

    if (favoriteMeals.isEmpty) {
      return Center(
        child: Text(
          'You have no favorites yet.',
          style: Theme.of(context).textTheme.headlineLarge,
        ),
      );
    }

    return ListView.builder(
      itemCount: favoriteMeals.length,
      itemBuilder: (ctx, index) => MealItem(meal: favoriteMeals[index]),
    );
  }
}
```

## Notes
The distinction between `ref.watch(favoriteMealsProvider)` (returns the state list) and `ref.watch(favoriteMealsProvider.notifier)` (returns the `FavoriteMealsNotifier` instance) is important to keep clear. For displaying data, always watch the provider directly. Accessing the notifier is only needed when you want to call mutation methods. This separation keeps widget code clean and declarative.

## Summary
Consume the `favoriteMealsProvider` with `ref.watch` to reactively display the favorites list, which automatically updates whenever the underlying state changes.
