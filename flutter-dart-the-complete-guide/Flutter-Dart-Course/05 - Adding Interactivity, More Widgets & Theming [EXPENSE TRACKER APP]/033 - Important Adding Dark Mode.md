# Important: Adding Dark Mode

## Overview
This lecture is a quick important note about adding dark mode support to the Expense Tracker App before the full dark mode implementation lecture. It highlights what needs to be considered — specifically defining a separate dark color scheme — and why using theme color roles instead of hardcoded colors is critical for dark mode to work correctly. Think of this as a prerequisite overview.

## Key Points
- Dark mode requires a separate `darkTheme` property on `MaterialApp` in addition to `theme`
- The `darkColorScheme` should be generated from the same seed color but with dark brightness
- All widgets must reference theme colors (not hardcoded hex values) for dark mode to apply automatically
- Flutter automatically switches between `theme` and `darkTheme` based on the device's system setting

## Tips
- Review all widgets in the app and ensure no hardcoded `Color(...)` values are used
- Use `ColorScheme.fromSeed(seedColor: ..., brightness: Brightness.dark)` for the dark scheme
- Test both themes using the Flutter DevTools or by toggling the device theme setting
- The `themeMode` property on `MaterialApp` can force light, dark, or system-default

## Notes
This preparatory lecture ensures you understand the importance of theme-aware colors before writing dark mode code. Any widget that uses a hardcoded color instead of a theme color will break dark mode. Making the switch to theme-aware coding from the beginning saves significant refactoring effort.

## Summary
This lecture emphasizes that proper dark mode support depends on consistently using theme color roles rather than hardcoded colors in all widgets throughout the app.
