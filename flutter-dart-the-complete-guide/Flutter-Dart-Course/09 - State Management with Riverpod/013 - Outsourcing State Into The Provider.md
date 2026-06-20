# Outsourcing State Into The Provider

## Overview
This lecture refactors the filters screen to move all local state management into the `filtersProvider`, eliminating the hybrid local/provider approach from the previous lecture. The filters screen becomes a pure `ConsumerWidget` that reads and writes directly to the provider, simplifying the code significantly.

## Key Points
- Removing local state from the widget means the provider becomes the single source of truth
- The filters screen uses `ref.watch(filtersProvider)` to always display the current filter values
- Each switch's `onChanged` callback calls `ref.read(filtersProvider.notifier).setFilter(...)` directly
- Eliminating local state removes the need for `ConsumerStatefulWidget` — a plain `ConsumerWidget` suffices
- This approach ensures filter state persists correctly if the user navigates away and returns

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/filters_provider.dart';

class FiltersScreen extends ConsumerWidget {
  const FiltersScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Always reflects the current provider state
    final activeFilters = ref.watch(filtersProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Your Filters')),
      body: Column(
        children: [
          SwitchListTile(
            value: activeFilters[Filter.glutenFree]!,
            onChanged: (isChecked) {
              // Write directly to provider on every toggle
              ref
                  .read(filtersProvider.notifier)
                  .setFilter(Filter.glutenFree, isChecked);
            },
            title: const Text('Gluten-free'),
            subtitle: const Text('Only include gluten-free meals.'),
          ),
          // Additional SwitchListTiles for other filters...
        ],
      ),
    );
  }
}
```

## Notes
This refactoring demonstrates an important principle: when provider state is the authoritative source, there is no need for a separate local copy. The immediate UI responsiveness concern is handled by Riverpod's efficient rebuild mechanism — `ref.watch` causes only this widget to rebuild when filters change, which is fast. Removing the stateful widget also reduces boilerplate and makes the code easier to read and maintain.

## Summary
Moving all state directly into the provider and using `ref.watch` + `ref.read` in a `ConsumerWidget` creates simpler, more maintainable code with the provider as the single source of truth.
