# Setting and Using a Color Scheme

## Overview
This lecture dives into Flutter's `ColorScheme` and shows how to define and consume theme colors throughout the app. Instead of hardcoding color values in widgets, you access the active color scheme via `Theme.of(context).colorScheme` and reference named color roles. This makes the app automatically adapt when the theme changes, including when switching between light and dark modes.

## Key Points
- `ColorScheme.fromSeed(seedColor: ...)` generates a full M3-compliant color palette
- Access colors via `Theme.of(context).colorScheme.primary`, `.surface`, `.error`, etc.
- Color roles like `primary`, `onPrimary`, `secondary`, `surface`, and `error` cover all UI needs
- Assign the color scheme to `ThemeData` and let Flutter handle component coloring

## Code Example
```dart
// Define in main.dart
final kColorScheme = ColorScheme.fromSeed(
  seedColor: const Color.fromARGB(255, 96, 59, 181),
);

MaterialApp(
  theme: ThemeData().copyWith(
    useMaterial3: true,
    colorScheme: kColorScheme,
    cardTheme: CardTheme(
      color: kColorScheme.secondaryContainer,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
    ),
  ),
)

// Using in a widget
Container(
  color: Theme.of(context).colorScheme.primaryContainer,
  child: Text(
    'Total',
    style: TextStyle(color: Theme.of(context).colorScheme.onPrimaryContainer),
  ),
)
```

## Notes
`ThemeData().copyWith(...)` is a pattern for creating a theme based on defaults and then overriding specific properties. Always pair a color role with its corresponding "on" color — e.g., text on `primaryContainer` should use `onPrimaryContainer` for accessible contrast. Avoid using raw `Color` values in widgets; reference the color scheme for consistency.

## Summary
Defining and consuming a `ColorScheme` via `Theme.of(context)` ensures consistent, accessible colors throughout the app that automatically adapt to theme changes.
