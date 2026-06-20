# Triggering a Notifier Method

## Overview
This lecture covers the write side of the favorites feature — how to call a method on the `FavoriteMealsNotifier` from a widget to toggle a meal's favorite status. It demonstrates the correct use of `ref.read(provider.notifier)` inside event callbacks to trigger state changes without creating a rebuild subscription.

## Key Points
- Use `ref.read(favoriteMealsProvider.notifier)` to access the notifier instance for calling methods
- `.notifier` gives you the `FavoriteMealsNotifier` object, not the state list
- Always use `ref.read` (not `ref.watch`) when calling methods inside callbacks like `onPressed`
- Using `ref.watch` in a callback would create an unnecessary subscription and is considered bad practice
- The notifier method updates `state`, which triggers rebuilds in all widgets watching the provider

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
    return Scaffold(
      appBar: AppBar(
        title: Text(meal.title),
        actions: [
          IconButton(
            icon: const Icon(Icons.star),
            onPressed: () {
              // ref.read — access notifier in a callback (no subscription)
              final wasAdded = ref
                  .read(favoriteMealsProvider.notifier)
                  .toggleMealFavoriteStatus(meal);

              ScaffoldMessenger.of(context).clearSnackBars();
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                    wasAdded ? 'Added to favorites!' : 'Removed from favorites.',
                  ),
                ),
              );
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
The `ref.read` vs `ref.watch` distinction is one of the most important practical rules in Riverpod. Watching inside a `build` method is correct and reactive; reading inside a callback is correct and non-reactive. Watching inside a callback can cause multiple redundant subscriptions and unexpected rebuilds. The notifier method's return value (e.g., a boolean indicating whether the item was added or removed) can be used to show feedback like a SnackBar.

## Summary
Call notifier methods from widget callbacks using `ref.read(provider.notifier).methodName()` to trigger state mutations without creating an unintended rebuild subscription.
