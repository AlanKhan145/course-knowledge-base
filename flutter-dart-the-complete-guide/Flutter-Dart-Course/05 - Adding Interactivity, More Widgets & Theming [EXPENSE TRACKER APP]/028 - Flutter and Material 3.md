# Flutter and Material 3

## Overview
This lecture introduces Material 3 (M3), the latest version of Google's Material Design system, and how Flutter supports it. Material 3 brings updated component styles, a dynamic color system, and more expressive typography. You will learn how to enable M3 in your Flutter app and what visual changes to expect compared to Material 2.

## Key Points
- Enable Material 3 by setting `useMaterial3: true` in `MaterialApp`'s `theme`
- M3 introduces a new color system based on color roles (primary, secondary, surface, error, etc.)
- Components like `Card`, `AppBar`, `FloatingActionButton`, and `Button` have updated M3 styles
- M3 is the default in Flutter 3.16+ — older apps may see visual changes when upgrading

## Code Example
```dart
MaterialApp(
  theme: ThemeData(
    useMaterial3: true, // enables Material 3 globally
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
  ),
  home: const Expenses(),
)
```

## Notes
Material 3's color system is derived from a single seed color using `ColorScheme.fromSeed`, which automatically generates a harmonious palette. Some M2 properties are deprecated in M3 — check the Flutter migration guide when updating older projects. The visual changes in M3 are generally more rounded and expressive than M2.

## Summary
Enabling Material 3 with `useMaterial3: true` unlocks Flutter's latest design system, bringing a modern color scheme and updated component styles to the app.
