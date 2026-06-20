# Firebase CLI and SDK Setup 2 of 2

## Overview
This lecture completes the Firebase SDK setup by initializing Firebase in `main.dart` and verifying the app builds and runs with Firebase connected. You will call `Firebase.initializeApp()` with the generated `DefaultFirebaseOptions` before `runApp()`. This ensures Firebase is ready before any widget tree is built.

## Key Points
- `main()` must be `async` to `await` the Firebase initialization call
- Call `WidgetsFlutterBinding.ensureInitialized()` before any async operations in `main()`
- Pass `DefaultFirebaseOptions.currentPlatform` to `Firebase.initializeApp()`
- The `firebase_core` package must be in `pubspec.yaml` and installed via `flutter pub get`
- After setup, run the app and check for no Firebase-related errors in the console

## Code Example
```dart
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FlutterChat',
      theme: ThemeData().copyWith(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 63, 17, 177),
        ),
      ),
      home: const AuthScreen(),
    );
  }
}
```

## Notes
`WidgetsFlutterBinding.ensureInitialized()` is required because Firebase initialization is asynchronous and happens before the Flutter engine is fully set up. Without it, the app will throw a binding error at runtime. This initialization pattern is standard across all Firebase Flutter integrations.

## Summary
Firebase is fully connected to your Flutter app once `Firebase.initializeApp()` is successfully awaited in `main()` using the auto-generated platform options.
