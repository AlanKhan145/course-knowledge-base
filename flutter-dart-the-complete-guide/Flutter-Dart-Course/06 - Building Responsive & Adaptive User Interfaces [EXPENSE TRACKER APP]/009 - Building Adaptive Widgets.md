# Building Adaptive Widgets

## Overview
This lecture explains adaptive UI design in Flutter, which means adjusting the visual style and behavior of widgets to match the conventions of the target platform (iOS or Android). Flutter provides platform-aware widgets and the `Platform` class to detect the current OS and render the appropriate native-looking components. Adaptive widgets feel natural to users on each platform.

## Key Points
- `Platform.isIOS` and `Platform.isAndroid` (from `dart:io`) detect the current platform
- Flutter offers Cupertino (iOS-style) equivalents for many Material widgets (e.g., `CupertinoSwitch`, `CupertinoAlertDialog`)
- You can create custom adaptive widgets that return a Cupertino or Material widget based on the platform
- `Switch.adaptive`, `CircularProgressIndicator.adaptive`, and similar adaptive constructors simplify platform switching
- Adaptive design improves UX by meeting platform-specific user expectations

## Code Example
```dart
import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

// A custom adaptive switch widget
class AdaptiveSwitch extends StatelessWidget {
  const AdaptiveSwitch({
    super.key,
    required this.value,
    required this.onChanged,
  });

  final bool value;
  final void Function(bool) onChanged;

  @override
  Widget build(BuildContext context) {
    // Return platform-appropriate switch widget
    if (Platform.isIOS) {
      return CupertinoSwitch(
        value: value,
        onChanged: onChanged,
      );
    }
    return Switch(
      value: value,
      onChanged: onChanged,
    );
  }
}

// Using the built-in adaptive constructor
Switch.adaptive(
  value: true,
  onChanged: (val) {},
),
```

## Notes
Building adaptive widgets is most important for apps targeting both iOS and Android, where design language differs significantly (Material Design vs Human Interface Guidelines). Flutter's Cupertino library provides a comprehensive set of iOS-style widgets. For web and desktop targets, adaptiveness extends further to cover mouse interactions, keyboard navigation, and platform-specific layout conventions.

## Summary
Adaptive widgets detect the current platform and render the appropriate native-style UI component, ensuring your app feels at home on both iOS and Android.
