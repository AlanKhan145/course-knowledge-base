# Challenge Solution 1 of 2: Creating a Widget

## Overview

This lecture explains the first part of the challenge solution: creating a custom widget for the Quiz App starting screen.

The goal is to begin from an empty `main.dart` file, set up the basic Flutter app structure, and create a separate `StartScreen` widget in its own file. This gives the app a clean structure and prepares it for more advanced UI work in the next step.

## Key Points

* A Flutter app starts with the `main()` function.
* The `main()` function is automatically detected and executed by Dart.
* Flutter apps are launched by calling the `runApp()` function.
* `runApp()` receives the root widget of the application.
* `MaterialApp` is commonly used as the root widget for Flutter apps.
* `Scaffold` is used to create the basic screen structure.
* The `body` argument of `Scaffold` receives the widget that should be displayed on the screen.
* Custom widgets should usually be placed in separate files.
* A custom widget can be created by defining a class.
* Widget classes must extend either `StatelessWidget` or `StatefulWidget`.
* For the starting screen, `StatelessWidget` is enough because no changing data is needed yet.
* The `build()` method must return a `Widget`.
* The `const` keyword should be used wherever possible for performance optimization.
* Dart files must explicitly import other files before using code from them.

## Step 1: Start With an Empty `main.dart`

After creating a new Flutter project, open the `main.dart` file inside the `lib` folder and remove all existing code.

This allows the app to be built from scratch and helps reinforce the basics learned in the previous module.

## Step 2: Import Flutter Material

To use Flutter widgets such as `runApp`, `MaterialApp`, and `Scaffold`, import the Material package:

```dart
import 'package:flutter/material.dart';
```

The `material.dart` file is the main import file for most Flutter apps using Material Design components.

## Step 3: Add the `main()` Function

Every Flutter app needs a `main()` function. This function is automatically executed when the app starts.

```dart
void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: StartScreen(),
      ),
    ),
  );
}
```

The `runApp()` function tells Flutter which widget should be drawn on the screen first.

## Step 4: Use `MaterialApp`

`MaterialApp` is one of the most important widgets in Flutter. It wraps the overall app and provides important setup and configuration behind the scenes.

For now, the most important argument is `home`, which defines the main widget displayed inside the app.

```dart
const MaterialApp(
  home: Scaffold(
    body: StartScreen(),
  ),
)
```

## Step 5: Use `Scaffold`

`Scaffold` creates the basic visual structure of a screen.

It can be used to configure screen-level elements such as:

* Background color
* App bar
* Body content
* Floating action button
* Navigation elements

In this lecture, `Scaffold` is used as a wrapper around the app’s screen content.

```dart
Scaffold(
  body: StartScreen(),
)
```

The `body` argument receives the widget that should be displayed on the screen.

## Step 6: Create a Separate Widget File

Inside the `lib` folder, create a new file:

```text
start_screen.dart
```

This follows the Dart file naming convention:

* Use lowercase letters.
* Separate multiple words with underscores.
* Example: `start_screen.dart`

Creating separate files for custom widgets keeps the project clean and easier to maintain.

## Step 7: Create the `StartScreen` Widget

Inside `start_screen.dart`, create a new custom widget class:

```dart
import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Start Screen');
  }
}
```

## Code Explanation

### `class StartScreen`

```dart
class StartScreen extends StatelessWidget
```

This creates a new custom widget called `StartScreen`.

The class name starts with an uppercase letter, following Dart naming conventions for classes.

### `extends StatelessWidget`

```dart
extends StatelessWidget
```

This means `StartScreen` is a stateless widget.

A `StatelessWidget` is used when the widget does not manage changing internal data.

At this stage, the starting screen does not need state, so `StatelessWidget` is the correct choice.

### Constructor

```dart
const StartScreen({super.key});
```

This adds a constructor for the widget.

The `super.key` syntax forwards the `key` argument to the parent `StatelessWidget` class.

Adding `const` allows Flutter and Dart to optimize the widget when its data does not change.

### `build()` Method

```dart
@override
Widget build(BuildContext context) {
  return const Text('Start Screen');
}
```

Every `StatelessWidget` must implement a `build()` method.

The `build()` method returns the widget tree that should be rendered on the screen.

For now, it returns a simple `Text` widget as a placeholder.

## Step 8: Import the Custom Widget in `main.dart`

To use `StartScreen` inside `main.dart`, import the file where it is defined:

```dart
import 'package:flutter/material.dart';
import 'package:advanced_basics/start_screen.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: StartScreen(),
      ),
    ),
  );
}
```

> Replace `advanced_basics` with your actual Flutter project name.

Dart does not automatically connect files. If you want to use a class from another file, you must import that file explicitly.

## Full Code Example

### `main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:advanced_basics/start_screen.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: StartScreen(),
      ),
    ),
  );
}
```

### `start_screen.dart`

```dart
import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Start Screen');
  }
}
```

## Formatting Tip

Add commas after closing parentheses in widget trees.

This allows the Dart formatter to format the code more clearly.

Example:

```dart
runApp(
  const MaterialApp(
    home: Scaffold(
      body: StartScreen(),
    ),
  ),
);
```

This makes nested widget trees easier to read and understand.

## Result

At this stage, the app displays a simple text output:

```text
Start Screen
```

The text is not centered yet and the screen is not styled, but the basic widget structure is working correctly.

This confirms that:

* The Flutter app starts correctly.
* `MaterialApp` is set up.
* `Scaffold` is used as the screen wrapper.
* The custom `StartScreen` widget is successfully connected.
* The app can render content from a separate widget file.

## Notes

This lecture focuses on setting up the foundation of the Quiz App UI. The screen is not complete yet, but the basic widget structure is now in place.

Separating the `StartScreen` widget into its own file is an important habit because larger Flutter apps quickly become difficult to manage if all widgets are kept inside `main.dart`.

The next part of the solution will continue improving this starting screen by adding layout, styling, and the actual UI elements.

## Summary

This lecture demonstrates how to create the first custom widget for the Quiz App. Starting from an empty `main.dart` file, the app is set up with `runApp`, `MaterialApp`, and `Scaffold`. A separate `StartScreen` widget is then created in its own file and connected to the app through the `body` argument of `Scaffold`.

This creates a clean foundation for building the full starting screen in the next part of the challenge solution.
