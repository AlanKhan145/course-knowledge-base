# Getting Started with Theming

## Overview
This lecture begins the theming journey by explaining how Flutter's theming system works and how to configure a global `ThemeData` object in `MaterialApp`. Theming allows you to define colors, typography, and component styles once and have them automatically applied throughout the entire app. This is far more maintainable than styling individual widgets manually.

## Key Points
- `ThemeData` is the central object for configuring the app's visual theme
- Pass `ThemeData` to the `theme` property of `MaterialApp`
- Theme data is inherited by all descendant widgets via `Theme.of(context)`
- `ColorScheme` defines the full set of colors used by Material widgets

## Code Example
```dart
MaterialApp(
  title: 'Expense Tracker',
  theme: ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color.fromARGB(255, 96, 59, 181),
    ),
  ),
  home: const Expenses(),
)
```

## Notes
Defining theme data in one place means changing the app's look requires editing a single file. `ColorScheme.fromSeed` is the recommended M3 approach — it generates all 30+ color roles from a single seed color algorithmically. Avoid hardcoding colors in individual widgets; always reference theme colors via `Theme.of(context).colorScheme`.

## Summary
A centrally defined `ThemeData` in `MaterialApp` propagates consistent colors and styles throughout the app, making global design changes easy and maintainable.
