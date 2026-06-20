# Locking the Device Orientation

## Overview
This lecture demonstrates how to restrict your Flutter app to a specific device orientation, such as portrait-only or landscape-only. Sometimes an app's design is only suitable for one orientation, and Flutter provides a straightforward way to enforce this. You will use the `SystemChrome` class from the `services` package to lock orientation.

## Key Points
- `SystemChrome.setPreferredOrientations()` is used to lock device orientation
- Must be called before `runApp()` in the `main()` function, and `main` should be made async
- Accepts a list of `DeviceOrientation` values (e.g., `portraitUp`, `landscapeLeft`)
- Locking orientation is a quick fix, but building a truly responsive UI is the better long-term approach
- The `flutter/services.dart` package must be imported to access `SystemChrome`

## Code Example
```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() async {
  // Ensure Flutter engine is initialized before calling platform channels
  WidgetsFlutterBinding.ensureInitialized();

  // Lock the app to portrait mode only
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  runApp(const MyApp());
}
```

## Notes
Calling `WidgetsFlutterBinding.ensureInitialized()` is required when you need to interact with platform channels (like `SystemChrome`) before `runApp()` is called. While locking orientation is simple to implement, it limits the user experience, especially on tablets. For most production apps, building a responsive layout that supports both orientations is preferred.

## Summary
You can lock a Flutter app to a specific orientation using `SystemChrome.setPreferredOrientations()` in an async `main()` function before calling `runApp()`.
