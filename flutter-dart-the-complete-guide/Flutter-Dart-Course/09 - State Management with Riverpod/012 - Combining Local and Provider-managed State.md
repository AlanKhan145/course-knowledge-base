# Combining Local and Provider-managed State

## Overview
This lecture explores how to use both local widget state (via `StatefulWidget` or `ConsumerStatefulWidget`) and Riverpod provider state together in the same widget. It demonstrates initializing local form/UI state from a provider's current values, which is a common real-world pattern for settings screens.

## Key Points
- `ConsumerStatefulWidget` and `ConsumerState` combine `StatefulWidget` with Riverpod's `ref`
- Local state (e.g., current switch positions) can be initialized from the provider's state in `initState`
- `ref` is accessible as `ref` directly inside `ConsumerState` without needing a `build` parameter
- Local state is used for immediate UI responsiveness; provider state is the source of truth
- This pattern avoids unnecessary provider updates on every UI interaction before the user confirms

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/filters_provider.dart';

class FiltersScreen extends ConsumerStatefulWidget {
  const FiltersScreen({super.key});

  @override
  ConsumerState<FiltersScreen> createState() => _FiltersScreenState();
}

class _FiltersScreenState extends ConsumerState<FiltersScreen> {
  // Local state initialized from provider
  var _glutenFreeFilterSet = false;

  @override
  void initState() {
    super.initState();
    // Read provider once to initialize local state
    final currentFilters = ref.read(filtersProvider);
    _glutenFreeFilterSet = currentFilters[Filter.glutenFree]!;
  }

  @override
  Widget build(BuildContext context) {
    return SwitchListTile(
      value: _glutenFreeFilterSet,
      onChanged: (isChecked) {
        setState(() {
          _glutenFreeFilterSet = isChecked;
        });
      },
      title: const Text('Gluten-free'),
    );
  }
}
```

## Notes
Using `ref.read` (not `ref.watch`) in `initState` is correct here because you only want the value once for initialization, not a live subscription. If you used `ref.watch` in `initState`, Riverpod would throw an error since `initState` runs outside the build cycle. This hybrid approach gives you smooth UI interactions (local state updates instantly) while keeping the provider as the persisted source of truth.

## Summary
Combine `ConsumerStatefulWidget` with local state initialized from a provider using `ref.read` in `initState` to build responsive settings screens that sync with provider state.
