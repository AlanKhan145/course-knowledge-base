# How Flutter Apps Start

## Overview

This lecture explains how a Flutter app starts running.

Every Dart and Flutter application begins with a special function called `main()`. Unlike normal custom functions, `main()` does not need to be called manually. Dart automatically executes it when the app starts.

Inside `main()`, Flutter apps usually call `runApp()`. This function tells Flutter what should be displayed on the screen. The widget passed into `runApp()` becomes the root widget of the application.

## Learning Goals

By the end of this lecture, students will understand:

* Why `main()` is special in Dart
* Why developers do not call `main()` manually
* How Dart automatically starts the app
* What `runApp()` does in a Flutter app
* Why `runApp()` needs an argument
* What a root widget is
* How Flutter begins rendering UI on the screen

## Key Points

* Every Dart app starts with the `main()` function.
* In a Flutter project, `main()` is usually placed inside `lib/main.dart`.
* Dart automatically executes `main()` when the app starts.
* Developers should not manually call `main()`.
* Inside `main()`, Flutter apps usually call `runApp()`.
* `runApp()` starts the Flutter UI system.
* `runApp()` requires one argument.
* The argument passed to `runApp()` must be a widget.
* That widget becomes the root of the Flutter widget tree.
* Flutter uses the root widget to decide what should appear on the screen.

## The Special Role Of `main()`

In Dart, functions usually only run when they are called.

For example:

```dart id="6m3frp"
void sayHello() {
  print('Hello!');
}
```

This function is only defined. It will not run unless it is called:

```dart id="hw65vv"
sayHello();
```

However, `main()` is different.

```dart id="1pp9ve"
void main() {
  print('App started!');
}
```

The `main()` function is the entry point of a Dart app. This means Dart automatically looks for this function and executes it when the program starts.

Because of that, developers should not manually call `main()` like this:

```dart id="7du31r"
main();
```

Dart already handles that automatically.

## Flutter App Startup Flow

A Flutter app starts in this order:

```text id="v0nn9z"
Dart starts the program
        ↓
Dart automatically calls main()
        ↓
main() calls runApp()
        ↓
runApp() receives a widget
        ↓
Flutter creates the root widget tree
        ↓
Flutter renders the UI on the screen
```

## The Role Of `runApp()`

The `runApp()` function is provided by Flutter.

Its job is to start the Flutter framework and tell Flutter which widget should be displayed first.

A basic Flutter app starts like this:

```dart id="3a62xt"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

In this code:

* `main()` is executed automatically by Dart.
* `runApp()` is called inside `main()`.
* `MaterialApp` is passed into `runApp()`.
* `MaterialApp` becomes the root widget of the app.
* `Text` displays visible text on the screen.

## Why `runApp()` Needs An Argument

If you write this:

```dart id="qfvty1"
void main() {
  runApp();
}
```

Flutter shows an error because `runApp()` expects one positional argument.

That argument tells Flutter what to show on the screen.

The correct version must pass a widget:

```dart id="lpjd47"
void main() {
  runApp(
    const Text('Hello Flutter!'),
  );
}
```

However, in most real Flutter apps, you usually wrap your UI with `MaterialApp`:

```dart id="7unbh6"
void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

## What Is An Argument?

An argument is a value passed into a function when calling it.

Example:

```dart id="9iwv23"
print('Hello!');
```

Here, `'Hello!'` is an argument passed into the `print()` function.

Similarly:

```dart id="ei0xlx"
runApp(const MaterialApp());
```

Here, `const MaterialApp()` is an argument passed into the `runApp()` function.

## Root Widget

The widget passed into `runApp()` becomes the root widget of the app.

The root widget is the top-level widget from which the rest of the UI grows.

Example:

```dart id="5hb01g"
runApp(
  const MaterialApp(
    home: Text('App Started!'),
  ),
);
```

In this example, `MaterialApp` is the root widget.

Flutter starts with this widget and then builds everything inside it.

## Corrected Code Example

```dart id="oxb1a4"
import 'package:flutter/material.dart';

// Step 1: Dart automatically calls main()
void main() {
  // Step 2: runApp() starts the Flutter app
  runApp(const MyApp());
}

// Step 3: MyApp is the root widget
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Step 4: Flutter builds the visible UI
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('App Started!'),
        ),
      ),
    );
  }
}
```

## Code Explanation

The `import` statement gives access to Flutter’s Material Design widgets.

The `main()` function is the entry point of the app and is called automatically by Dart.

Inside `main()`, `runApp()` is called with `const MyApp()` as its argument.

`MyApp` becomes the root widget of the app.

Flutter then calls the `build()` method of `MyApp` to know what UI should be displayed.

The returned `MaterialApp` contains a `Scaffold`, which contains a centered `Text` widget.

## Common Beginner Mistakes

### Calling `main()` Manually

Incorrect:

```dart id="w86fnq"
main();
```

Correct:

```dart id="pqn72b"
void main() {
  runApp(const MyApp());
}
```

### Calling `runApp()` Without An Argument

Incorrect:

```dart id="7q65nh"
void main() {
  runApp();
}
```

Correct:

```dart id="fimceg"
void main() {
  runApp(const MyApp());
}
```

### Forgetting The Flutter Import

Incorrect:

```dart id="m6gfk6"
void main() {
  runApp(const MyApp());
}
```

Correct:

```dart id="nlp5ai"
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}
```

## Notes

The `main()` function is automatically executed by Dart after the code has been parsed, compiled, and started on the target device.

The `runApp()` function is the bridge between Dart code and Flutter’s UI system. It tells Flutter which widget should be placed at the root of the app.

Everything visible in a Flutter app starts from the widget passed to `runApp()`.

## Summary

A Flutter app starts when Dart automatically executes the `main()` function. Inside `main()`, the app calls `runApp()` and passes in a widget. That widget becomes the root of the Flutter widget tree, and Flutter uses it to build and render the user interface on the screen.
