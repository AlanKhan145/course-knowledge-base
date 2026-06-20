# FlutterFire Configuration

## Overview
This lecture demonstrates running `flutterfire configure` to automatically register your Flutter app with your Firebase project and generate the `firebase_options.dart` configuration file. This command handles platform-specific setup for Android, iOS, and web in a single step. The generated file contains all the API keys and project identifiers Firebase needs.

## Key Points
- Run `flutterfire configure` from within your Flutter project root directory
- The CLI prompts you to select your Firebase project and target platforms
- A `firebase_options.dart` file is auto-generated in the `lib/` directory
- This file exports a `DefaultFirebaseOptions` object used to initialize Firebase in `main.dart`
- Re-run `flutterfire configure` whenever you add a new platform or update your Firebase project

## Code Example
```dart
// firebase_options.dart (auto-generated — do not edit manually)
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart' show defaultTargetPlatform, kIsWeb, TargetPlatform;

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) return web;
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      default:
        throw UnsupportedError('DefaultFirebaseOptions not configured for this platform.');
    }
  }

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'YOUR_ANDROID_API_KEY',
    appId: 'YOUR_APP_ID',
    messagingSenderId: 'YOUR_SENDER_ID',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_BUCKET.appspot.com',
  );
  // ... other platforms
}
```

## Notes
The `firebase_options.dart` file should be committed to version control but treated as sensitive — avoid sharing API keys publicly. The FlutterFire CLI also modifies `android/build.gradle`, `android/app/build.gradle`, and `ios/Runner/GoogleService-Info.plist` automatically. You do not need to manually download `google-services.json` when using this CLI approach.

## Summary
Running `flutterfire configure` is the recommended way to connect a Flutter app to Firebase, generating all necessary platform configuration files automatically.
