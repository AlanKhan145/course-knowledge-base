# Setting Text Themes

## Overview
This lecture covers how to configure the app-wide text theme using `TextTheme` inside `ThemeData`. Flutter's text theme provides a hierarchy of predefined text styles (like `titleLarge`, `bodyMedium`, `labelSmall`) that maintain typographic consistency. You will learn how to override default styles and apply them in widgets via `Theme.of(context).textTheme`.

## Key Points
- `ThemeData.textTheme` holds a `TextTheme` with named text style slots
- Text styles follow a hierarchy: `displayLarge` > `titleLarge` > `bodyMedium` > `labelSmall`
- Override specific styles using `TextTheme().copyWith(...)` or `ThemeData().copyWith(...)`
- Access styles in widgets with `Theme.of(context).textTheme.titleLarge`

## Code Example
```dart
// In main.dart — customize text theme
MaterialApp(
  theme: ThemeData().copyWith(
    useMaterial3: true,
    colorScheme: kColorScheme,
    textTheme: ThemeData().textTheme.copyWith(
      titleLarge: TextStyle(
        fontWeight: FontWeight.bold,
        color: kColorScheme.onSecondaryContainer,
        fontSize: 16,
      ),
    ),
  ),
)

// In a widget — use the named text style
Text(
  expense.title,
  style: Theme.of(context).textTheme.titleLarge,
)
```

## Notes
`ThemeData().textTheme` provides a base text theme using the default font (Roboto on Android, SF Pro on iOS). The M3 text scale uses descriptive names like `titleLarge` rather than M2's `headline6`, so check the mapping table when migrating. Setting `color` in a `TextStyle` within the theme overrides the default color scheme-based coloring for that slot.

## Summary
Configuring `TextTheme` in `ThemeData` establishes a typographic hierarchy used consistently across all widgets, ensuring cohesive and maintainable text styling.
