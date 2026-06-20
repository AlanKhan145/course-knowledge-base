# Reading and Using Returned Data

## Overview
This lecture focuses on reading the `Map<Filter, bool>` returned from `FiltersScreen` and using it to update the app's filter state in `TabsScreen`. After `Navigator.push` completes, the returned result is checked for null and then applied to `_selectedFilters` via `setState`, which triggers a UI rebuild with the new filter settings.

## Key Points
- The result from `await Navigator.push(...)` is received after the pushed screen is popped
- Always null-check the result before using it — the user may have dismissed the screen unexpectedly
- Use `setState` to update `_selectedFilters` with the returned map to trigger a rebuild
- The updated filters immediately affect `_availableMeals` computed property on the next build
- Logging or debugging the returned result is helpful during development

## Code Example
```dart
void _setScreen(String identifier) async {
  Navigator.pop(context); // close drawer

  if (identifier == 'filters') {
    final result = await Navigator.of(context).push<Map<Filter, bool>>(
      MaterialPageRoute(
        builder: (ctx) => FiltersScreen(currentFilters: _selectedFilters),
      ),
    );

    // null-check: result is null if user pressed system back without PopScope handling
    setState(() {
      _selectedFilters = result ?? kInitialFilters;
    });
  }
}

// Constant for default filters
const kInitialFilters = {
  Filter.glutenFree: false,
  Filter.lactoseFree: false,
  Filter.vegetarian: false,
  Filter.vegan: false,
};
```

## Notes
Using a constant `kInitialFilters` as the fallback when `result` is null is a clean way to reset filters if the return value is missing. The `??` (null coalescing) operator provides a concise way to handle the null case. After `setState` updates `_selectedFilters`, the `_availableMeals` getter automatically recomputes the filtered meal list on the next `build` call.

## Summary
The returned filter map from `FiltersScreen` is null-checked and applied via `setState` in `TabsScreen`, immediately updating the available meals list.
