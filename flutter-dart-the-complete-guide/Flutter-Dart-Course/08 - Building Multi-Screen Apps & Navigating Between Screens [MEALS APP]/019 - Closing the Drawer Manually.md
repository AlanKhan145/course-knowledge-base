# Closing the Drawer Manually

## Overview
This lecture covers how to programmatically close the side drawer before or after navigating to a new screen. When a user taps a drawer item, the drawer must be dismissed before pushing the new screen, otherwise both the drawer and the new screen stack up visually. `Navigator.pop(context)` is used to close the drawer since it is treated as a route overlay.

## Key Points
- The `Drawer` in Flutter is treated as a route on the navigation stack
- Calling `Navigator.pop(context)` closes the drawer by popping it off the stack
- Close the drawer before calling `Navigator.push` for a smooth transition
- Alternatively, use `Scaffold.of(context).closeDrawer()` for an explicit close
- The order matters: pop the drawer first, then push the new screen

## Code Example
```dart
// In the drawer widget or its callback handler in TabsScreen
void _setScreen(String identifier) {
  Navigator.pop(context); // Close the drawer first

  if (identifier == 'filters') {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (ctx) => const FiltersScreen()),
    );
  }
}

// Or using Scaffold.of if inside a widget with Scaffold ancestor
ListTile(
  title: const Text('Filters'),
  onTap: () {
    Scaffold.of(context).closeDrawer();
    // then navigate
  },
)
```

## Notes
Since the drawer is pushed onto the navigator stack as an overlay, `Navigator.pop` is the correct way to dismiss it programmatically. Forgetting to close the drawer before navigating can cause visual glitches where the drawer remains visible during the page transition. Always test drawer navigation on a real device or emulator to verify the transition looks correct.

## Summary
The drawer is closed programmatically by calling `Navigator.pop(context)` before navigating to ensure smooth screen transitions.
