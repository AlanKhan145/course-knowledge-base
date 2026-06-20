# Installing the Solution Riverpod

## Overview
This lecture walks through adding the flutter_riverpod package to a Flutter project. It covers updating pubspec.yaml, running the package installation command, and wrapping the app with the required ProviderScope widget. This setup is the mandatory foundation before any Riverpod providers can be used.

## Key Points
- Add `flutter_riverpod` to the `dependencies` section of `pubspec.yaml`
- Run `flutter pub get` to download and install the package
- Wrap the root `MaterialApp` (or the entire `runApp` widget) with `ProviderScope`
- `ProviderScope` is the container that stores all provider state for the app
- Without `ProviderScope`, accessing any provider will throw a runtime error

## Code Example
```dart
// pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_riverpod: ^2.0.0

// main.dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  runApp(
    const ProviderScope(
      child: MyApp(),
    ),
  );
}
```

## Notes
The `ProviderScope` widget acts as the global store for all Riverpod providers in the application. It must be placed at the very top of the widget tree — typically wrapping the `runApp` call — so that every widget in the app can access providers. Nesting multiple `ProviderScope` widgets is possible for advanced scoping scenarios but is not needed for most apps.

## Summary
Installing Riverpod requires adding the `flutter_riverpod` package and wrapping your app's root with `ProviderScope` to enable provider access throughout the widget tree.
