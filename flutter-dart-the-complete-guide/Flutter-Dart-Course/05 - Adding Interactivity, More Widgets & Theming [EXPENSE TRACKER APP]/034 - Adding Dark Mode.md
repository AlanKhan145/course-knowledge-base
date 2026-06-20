# Adding Dark Mode

## Overview
This lecture implements full dark mode support for the Expense Tracker App by defining a `darkTheme` in `MaterialApp`. The dark theme uses a separate `ColorScheme` generated with `Brightness.dark`, ensuring all Material widgets automatically use darker backgrounds and lighter text. The system theme toggle then seamlessly switches between light and dark appearances.

## Key Points
- Define a `kDarkColorScheme` using `ColorScheme.fromSeed` with `brightness: Brightness.dark`
- Assign the dark theme to `darkTheme` in `MaterialApp`
- `themeMode: ThemeMode.system` (the default) respects the device's OS-level setting
- Override component themes (like `cardTheme`) separately for dark mode within `darkTheme`

## Code Example
```dart
final kColorScheme = ColorScheme.fromSeed(
  seedColor: const Color.fromARGB(255, 96, 59, 181),
);

final kDarkColorScheme = ColorScheme.fromSeed(
  brightness: Brightness.dark,
  seedColor: const Color.fromARGB(255, 5, 99, 125),
);

MaterialApp(
  darkTheme: ThemeData.dark().copyWith(
    useMaterial3: true,
    colorScheme: kDarkColorScheme,
    cardTheme: CardTheme(
      color: kDarkColorScheme.secondaryContainer,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: kDarkColorScheme.primaryContainer,
        foregroundColor: kDarkColorScheme.onPrimaryContainer,
      ),
    ),
  ),
  theme: ThemeData().copyWith(
    useMaterial3: true,
    colorScheme: kColorScheme,
    // light theme config...
  ),
  themeMode: ThemeMode.system,
  home: const Expenses(),
)
```

## Notes
`ThemeData.dark()` provides sensible dark defaults that you then override with `copyWith`. Both `theme` and `darkTheme` should define the same component themes (card, button, text) to ensure visual consistency in both modes. Test dark mode on both Android and iOS as their system settings may differ slightly.

## Summary
Adding `darkTheme` with a dark `ColorScheme` and setting `themeMode: ThemeMode.system` gives the Expense Tracker App automatic, OS-synchronized dark mode support.
