# Swapping The Favorite Button Based On Provider State

## Overview
This lecture shows how to dynamically change the appearance of the favorite icon button based on whether the current meal is in the favorites list. By watching the `favoriteMealsProvider` in the meal detail screen, the icon switches between a filled star and an outlined star to reflect the current favorites state.

## Key Points
- Watch `favoriteMealsProvider` to get the current list and check if the meal is a favorite
- Use a ternary expression to switch between `Icons.star` and `Icons.star_border` based on favorite status
- The icon updates automatically when the favorite status changes (no manual setState needed)
- This pattern ensures the UI is always consistent with the underlying provider state
- Reading state and triggering mutations can coexist in the same widget using `ref.watch` and `ref.read`

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/favorites_provider.dart';
import '../models/meal.dart';

class MealDetailScreen extends ConsumerWidget {
  const MealDetailScreen({super.key, required this.meal});

  final Meal meal;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Watch favorites list to reactively determine favorite status
    final favoriteMeals = ref.watch(favoriteMealsProvider);
    final isFavorite = favoriteMeals.contains(meal);

    return Scaffold(
      appBar: AppBar(
        title: Text(meal.title),
        actions: [
          IconButton(
            // Swap icon based on current favorite state
            icon: Icon(isFavorite ? Icons.star : Icons.star_border),
            onPressed: () {
              ref
                  .read(favoriteMealsProvider.notifier)
                  .toggleMealFavoriteStatus(meal);
            },
          ),
        ],
      ),
      body: const SizedBox(),
    );
  }
}
```

## Notes
Checking `favoriteMeals.contains(meal)` requires that the `Meal` class implements proper equality — either via `==` override or using the meal's unique `id` property for comparison. If `Meal` objects are compared by reference, `contains` may not work correctly. In the course project, meals are typically compared by `id`. This is a good reminder that state-driven UI requires correct equality semantics on your model classes.

## Summary
Watch the `favoriteMealsProvider` in the detail screen and use the result to conditionally render a filled or outlined star icon, keeping the UI always in sync with provider state.
