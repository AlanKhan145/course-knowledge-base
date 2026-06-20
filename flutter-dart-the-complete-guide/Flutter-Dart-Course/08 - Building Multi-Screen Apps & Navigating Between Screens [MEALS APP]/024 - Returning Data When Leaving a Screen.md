# Returning Data When Leaving a Screen

## Overview
This lecture explains how to send data back to the previous screen when popping a route off the navigation stack. When the user leaves the `FiltersScreen` (via back button or manual pop), the current filter selections are returned as a `Map<Filter, bool>` to the calling screen. This is done using `Navigator.pop(context, result)`.

## Key Points
- `Navigator.pop(context, result)` pops the current route and passes `result` back to the caller
- The result can be any Dart object: a map, a list, a model instance, etc.
- Using `PopScope` with `canPop: false` lets you intercept the system back button to return data
- The calling screen uses `await Navigator.push(...)` to wait for the result
- If the user presses back without your custom pop, the result will be `null`

## Code Example
```dart
// In FiltersScreen — returning data on back navigation
PopScope(
  canPop: false,
  onPopInvoked: (didPop) {
    if (didPop) return;
    Navigator.of(context).pop({
      Filter.glutenFree: _glutenFreeFilterSet,
      Filter.lactoseFree: _lactoseFreeFilterSet,
      Filter.vegetarian: _vegetarianFilterSet,
      Filter.vegan: _veganFilterSet,
    });
  },
  child: Scaffold(/* ... */),
)

// In TabsScreen — pushing and awaiting result
void _setScreen(String identifier) async {
  Navigator.pop(context); // close drawer
  if (identifier == 'filters') {
    final result = await Navigator.of(context).push<Map<Filter, bool>>(
      MaterialPageRoute(builder: (ctx) => FiltersScreen(currentFilters: _selectedFilters)),
    );
    // result contains the returned map (or null if back was pressed without pop)
  }
}
```

## Notes
The `await` keyword on `Navigator.push` pauses execution at the calling site until the pushed screen is popped. Type-annotating `Navigator.push<Map<Filter, bool>>` ensures the returned value is correctly typed, avoiding runtime type errors. Always handle the `null` case since the user might close the app or the screen could be disposed unexpectedly.

## Summary
`Navigator.pop(context, result)` sends data back to the calling screen, which retrieves it by awaiting the `Navigator.push` future.
