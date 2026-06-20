# Replacing Screens Instead of Pushing

## Overview
This lecture explains the difference between `Navigator.push` and `Navigator.pushReplacement` and when to use each. When navigating from the drawer to the `FiltersScreen`, using `pushReplacement` replaces the current screen on the stack rather than stacking a new one on top, which avoids an undesired back navigation to the categories screen.

## Key Points
- `Navigator.push` stacks a new route on top of the existing one (back button returns to previous)
- `Navigator.pushReplacement` replaces the current route (back button skips the replaced screen)
- Use `pushReplacement` when navigating from a drawer item to a main destination screen
- The replaced screen is removed from the stack and cannot be returned to with the back button
- Consider user experience when choosing between push and pushReplacement

## Code Example
```dart
// In TabsScreen drawer callback
void _setScreen(String identifier) {
  Navigator.pop(context); // Close drawer

  if (identifier == 'filters') {
    Navigator.of(context).push(
      MaterialPageRoute(builder: (ctx) => FiltersScreen(
        currentFilters: _selectedFilters,
      )),
    );
  }
}

// When navigating back to meals from filters (replacing)
Navigator.of(context).pushReplacement(
  MaterialPageRoute(builder: (ctx) => const TabsScreen()),
);
```

## Notes
The choice between `push` and `pushReplacement` significantly affects the user experience and back-navigation behavior. `pushReplacement` is ideal for flows like login -> home, where the user should not be able to navigate back to the login screen. For the Meals App, using `push` from the drawer to `FiltersScreen` keeps the back button available for returning to the main screen.

## Summary
`Navigator.pushReplacement` replaces the current screen on the stack, preventing the user from navigating back to it, while `Navigator.push` adds a screen on top.
