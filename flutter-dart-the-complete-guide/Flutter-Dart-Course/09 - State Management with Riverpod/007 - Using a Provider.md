# Using a Provider

## Overview
This lecture shows how to consume a Riverpod provider inside a Flutter widget. It introduces `ConsumerWidget` as the Riverpod-aware alternative to `StatelessWidget` and demonstrates using `ref.watch` to read provider values and automatically rebuild the widget when state changes.

## Key Points
- Replace `StatelessWidget` with `ConsumerWidget` to gain access to the `WidgetRef ref` parameter
- The `build` method of `ConsumerWidget` receives both `BuildContext context` and `WidgetRef ref`
- Use `ref.watch(providerName)` to read a value and subscribe to future changes
- The widget rebuilds automatically whenever the watched provider emits a new value
- `ConsumerStatefulWidget` and `ConsumerState` are the stateful equivalents

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/meals_provider.dart';

class MealsScreen extends ConsumerWidget {
  const MealsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Watch the provider — rebuilds when mealsProvider changes
    final meals = ref.watch(mealsProvider);

    return ListView.builder(
      itemCount: meals.length,
      itemBuilder: (ctx, index) => Text(meals[index].title),
    );
  }
}
```

## Notes
Switching from `StatelessWidget` to `ConsumerWidget` is a minimal change — you only add `WidgetRef ref` to the `build` signature and change the base class. The key behavioral difference is that `ref.watch` creates a reactive subscription, so Riverpod knows exactly which widgets depend on which providers and can efficiently trigger only the necessary rebuilds. Avoid calling `ref.watch` inside conditional blocks or loops, as Riverpod requires consistent call ordering.

## Summary
Use `ConsumerWidget` and `ref.watch(provider)` to consume Riverpod providers in your widgets, enabling automatic and efficient rebuilds when provider state changes.
