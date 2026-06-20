# SnackBar Durations

## Overview
This lecture explains how to control how long a `SnackBar` remains visible using the `duration` property. Snackbars are brief messages shown at the bottom of the screen to notify users of actions — in this app, they confirm that an expense was deleted. Choosing the right duration ensures the user has enough time to read the message and optionally undo the action.

## Key Points
- `SnackBar` has a `duration` property that accepts a `Duration` object
- The default duration is 4 seconds; you can increase or decrease as needed
- Short messages need less time; messages with action buttons (like "Undo") need more
- `Duration` is created with named parameters: `Duration(seconds: 3)`

## Code Example
```dart
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(
    duration: const Duration(seconds: 3), // visible for 3 seconds
    content: const Text('Expense deleted.'),
    action: SnackBarAction(
      label: 'Undo',
      onPressed: () {
        // restore the expense
      },
    ),
  ),
);
```

## Tips
- 2-3 seconds is typically enough for simple notification messages
- If an undo action is present, use 4-5 seconds to give users time to react
- Clear previous snackbars before showing a new one with `ScaffoldMessenger.of(context).clearSnackBars()`
- Avoid making duration too short on accessibility grounds — some users need more reading time

## Notes
The `Duration` class is highly flexible — it also accepts `milliseconds`, `minutes`, and `hours`. Snackbar duration is a UX decision: too short frustrates users who miss the message; too long becomes annoying if triggered frequently. Always test snackbar timing on a real or simulated device.

## Summary
The `duration` property of `SnackBar` controls visibility time, and choosing an appropriate duration balances user notification with non-intrusive UX.
