# Adding Your Own Native Code

## Overview
This lecture introduces the concept of writing custom native platform code (Android Kotlin/Java or iOS Swift/Objective-C) and exposing it to Flutter via Platform Channels when no suitable package exists. Platform Channels provide a bidirectional message-passing bridge between Dart and the native side using a string-identified channel name and method calls. This is an advanced topic that empowers developers to unlock any native API not yet covered by existing Flutter packages.

## Key Points
- `MethodChannel` in Dart sends named method calls to the native side and receives results as futures
- On Android, the channel is registered in `MainActivity.kt` using `MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL)`
- On iOS, the channel is registered in `AppDelegate.swift` using `FlutterMethodChannel`
- Data passed between Dart and native code must be of supported types: primitives, lists, and maps (no custom objects)

## Code Example
```dart
// Dart side - calling native code via MethodChannel
import 'package:flutter/services.dart';

class NativeBridge {
  static const platform = MethodChannel('com.example.myapp/native');

  static Future<String> getNativePlatformVersion() async {
    try {
      final String version = await platform.invokeMethod('getPlatformVersion');
      return version;
    } on PlatformException catch (e) {
      return 'Failed to get version: ${e.message}';
    }
  }
}

// Android side (MainActivity.kt)
// private val CHANNEL = "com.example.myapp/native"
// MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL)
//   .setMethodCallHandler { call, result ->
//     if (call.method == "getPlatformVersion") {
//       result.success("Android ${android.os.Build.VERSION.RELEASE}")
//     } else {
//       result.notImplemented()
//     }
//   }
```

## Notes
Platform Channels use asynchronous message passing under the hood, so all `invokeMethod` calls return a `Future` that must be awaited. Always wrap platform channel calls in a `try/catch` for `PlatformException` to handle cases where the native method is not implemented or throws an error. The channel name is just a string — by convention it uses a reverse-domain format (`com.example.app/feature`) to avoid naming collisions when multiple channels are in use.

## Summary
Platform Channels bridge Dart and native Android/iOS code via named message channels, enabling Flutter apps to access any native device API beyond what existing packages provide.
