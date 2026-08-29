# From Dart To Machine Code

## Overview

This lecture explains what happens to the Dart code inside `main.dart` when a Flutter app is run on an emulator, simulator, or real device.

The Dart code written by the developer is not simply copied to the device and executed directly. Instead, Dart and Flutter tools first read, analyze, parse, compile, and package the code into a form that the target platform can understand.

This process is one of the reasons Flutter apps can run efficiently across different platforms.

## Learning Goals

By the end of this lecture, students will understand:

* Why Dart code cannot be executed directly by Android or iOS
* What it means for Dart code to be parsed
* What compilation means in a Flutter project
* How Dart code becomes machine code
* Why Flutter apps can run on different target platforms
* The difference between development and production execution modes

## Key Points

* Dart is the programming language used to write Flutter apps.
* Devices such as Android phones and iPhones do not directly understand Dart source code.
* When a Flutter app is run or built, Dart reads and analyzes the code from top to bottom.
* This reading and analyzing process is called parsing.
* After parsing, the code is compiled into code that the target platform can understand.
* The compiled code is packaged into an optimized app bundle.
* The target device runs the compiled output, not the raw Dart source code.
* During development, Dart can use JIT compilation to support fast iteration and hot reload.
* For production builds, Dart uses AOT compilation to generate optimized native machine code.

## How Dart Code Becomes Machine Code

When you write Flutter code, you write it in Dart. However, Android, iOS, Windows, macOS, Linux, and web platforms do not directly execute Dart files in the same way a code editor displays them.

Instead, Flutter follows a build process.

First, Dart parses the source code. This means the Dart tools read the code from top to bottom and analyze its structure.

Next, the code is compiled. Compilation means translating the Dart code into another format that can be understood by the target platform.

Finally, Flutter packages the compiled code together with the required assets and platform-specific files into an app bundle. This final bundle is what gets executed on the device.

## Development Mode: JIT Compilation

During development, Dart commonly uses Just-In-Time compilation, also known as JIT.

JIT compilation allows Dart code to be compiled while the app is running. This makes development faster because changes can be applied quickly without rebuilding the entire app from scratch every time.

This is what makes Flutter features like hot reload possible.

Hot reload allows developers to update the app UI and logic quickly while keeping the app running.

## Production Mode: AOT Compilation

For production builds, Dart uses Ahead-Of-Time compilation, also known as AOT.

AOT compilation happens before the app is shipped to users. Dart code is compiled into optimized native machine code for the target platform.

This helps Flutter apps start faster and run more efficiently on end-user devices.

## Code Example

```dart id="zncmgx"
void main() {
  print('Hello from Dart!');
}
```

This Dart code looks simple, but it is processed differently depending on how the app is run.

```bash
flutter run
```

In development mode, Flutter uses JIT compilation so the app can support fast iteration and hot reload.

```bash
flutter build apk
```

For Android release builds, Flutter uses AOT compilation to generate optimized native code.

```bash
flutter build ios
```

For iOS release builds, Flutter also uses AOT compilation to generate optimized code for Apple devices.

## Compilation Flow

```text
Dart source code
        ↓
Parsed and analyzed by Dart tools
        ↓
Compiled into target-platform code
        ↓
Packaged into an optimized app bundle
        ↓
Executed on the target device
```

## Notes

The code inside `main.dart` may look confusing at first, especially before learning Dart and Flutter syntax in detail. However, the important idea in this lecture is not yet the meaning of every line of code.

The main idea is understanding that the Dart code written by the developer goes through a transformation process before it runs on a real device.

Flutter developers write Dart code, but the device runs compiled output that is suitable for the target platform.

## Why This Matters

Understanding this process helps explain two major strengths of Flutter.

First, Flutter provides a fast development experience because JIT compilation enables hot reload.

Second, Flutter provides strong runtime performance because release builds are compiled ahead of time into optimized native machine code.

This combination gives Flutter both developer productivity and production performance.

## Summary

Dart source code is not directly executed by Android, iOS, or other target platforms. Instead, Dart and Flutter tools parse, compile, package, and optimize the code into a format that the target device can run. During development, Dart uses JIT compilation for fast iteration and hot reload. In production, Dart uses AOT compilation to create optimized native machine code.
