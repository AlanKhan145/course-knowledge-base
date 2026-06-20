# Replacing WillPopScope with PopScope

## Overview
This lecture covers the deprecation of `WillPopScope` in Flutter 3.12 and its replacement with the `PopScope` widget. `PopScope` provides more control over the back navigation behavior, including intercepting the pop action and optionally returning data to the previous screen when the user presses the back button.

## Key Points
- `WillPopScope` is deprecated; use `PopScope` in Flutter 3.12 and later
- `PopScope` wraps a widget and intercepts back navigation via the `onPopInvoked` callback
- `canPop: false` prevents the default back navigation from occurring automatically
- Use `onPopInvoked` to run code (e.g., returning data) when the screen is about to be popped
- `Navigator.pop(context, data)` can still be used manually to pop with a result

## Code Example
```dart
// Old approach (deprecated)
WillPopScope(
  onWillPop: () async {
    // return data before popping
    return true;
  },
  child: Scaffold(/* ... */),
)

// New approach with PopScope
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
  child: Scaffold(
    appBar: AppBar(title: const Text('Your Filters')),
    body: Column(children: [/* filters */]),
  ),
)
```

## Notes
`PopScope` is the modern replacement for `WillPopScope` and is required for compatibility with Flutter 3.12+. Setting `canPop: false` means the framework will not automatically pop the route — your `onPopInvoked` callback must call `Navigator.pop` manually if you want the screen to close. This pattern is essential when you need to return data from a screen via back navigation.

## Summary
`PopScope` replaces the deprecated `WillPopScope`, allowing you to intercept back navigation and return data to the previous screen when the user presses back.
