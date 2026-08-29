# Understanding Widgets

## Overview

This lecture introduces widgets, the core building blocks of every Flutter user interface.

In Flutter, user interfaces are not created with a visual drag-and-drop editor. Instead, they are created in code by combining and nesting widgets.

The lecture also explains why `runApp()` needs an argument: Flutter must be told what user interface should be displayed on the screen. That user interface is provided as a widget or a widget tree.

## Learning Goals

By the end of this lecture, students will understand:

* What function arguments are
* The difference between parameters and arguments
* Why `runApp()` needs an input value
* What widgets are in Flutter
* Why Flutter UIs are built with widgets
* What a widget tree is
* How widgets can be nested inside each other
* The difference between built-in widgets and custom widgets

## Key Points

* Functions can require input values.
* Input values are called parameters when defining a function.
* Input values are called arguments when calling a function.
* `runApp()` requires one argument.
* The argument passed to `runApp()` must be a widget.
* Widgets are the basic building blocks of Flutter user interfaces.
* Flutter UIs are built by combining and nesting widgets.
* A nested structure of widgets forms a widget tree.
* Flutter provides many built-in widgets.
* Developers can also create custom widgets.

## Parameters And Arguments

Functions can be defined to receive input values.

When a function is defined, these input values are called parameters.

Example:

```dart id="t2reue"
void greet(String name) {
  print('Hello, $name!');
}
```

In this example, `name` is a parameter.

When the function is called, the actual value passed into it is called an argument.

```dart id="5wlwbd"
greet('Flutter Developer');
```

In this example, `'Flutter Developer'` is an argument.

Technically:

* Parameter = the input variable in the function definition
* Argument = the actual value passed when calling the function

In many beginner courses, these two terms are sometimes used interchangeably.

## Why `runApp()` Needs An Argument

The `runApp()` function starts the Flutter application.

However, Flutter needs to know what should be displayed on the screen.

This is why calling `runApp()` without an argument is invalid:

```dart id="0pmc4b"
void main() {
  runApp();
}
```

Flutter will show an error because `runApp()` expects one argument.

That argument should be a widget:

```dart id="ntis17"
void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

The widget passed into `runApp()` tells Flutter what user interface should be shown.

## What Is A Widget?

A widget is a building block of a Flutter user interface.

In Flutter, almost everything visible on the screen is created with widgets, such as:

* Text
* Buttons
* Images
* Icons
* Input fields
* Layouts
* Screens
* App bars
* Containers

Widgets describe what the user interface should look like.

For example, the `Text` widget displays text:

```dart id="p2n4xq"
const Text('Hello Flutter!');
```

The `Center` widget centers another widget:

```dart id="fwzc15"
const Center(
  child: Text('Hello Flutter!'),
)
```

The `MaterialApp` widget provides the basic structure for a Material Design Flutter app:

```dart id="dvifb6"
const MaterialApp(
  home: Text('Hello Flutter!'),
)
```

## Widgets Are Combined Together

Flutter apps are built by combining widgets.

A single widget is usually not enough to build a complete user interface. Instead, developers nest widgets inside other widgets.

Example:

```dart id="t4i3jy"
const MaterialApp(
  home: Center(
    child: Text('Hello Flutter!'),
  ),
)
```

In this example:

* `MaterialApp` is the top-level widget.
* `Center` is placed inside `MaterialApp`.
* `Text` is placed inside `Center`.

This creates a simple user interface where the text is displayed in the center of the screen.

## Widget Tree

Because widgets are nested inside each other, Flutter apps form a widget tree.

Example:

```text id="qjba7p"
MaterialApp
└── Center
    └── Text
```

A more realistic app may look like this:

```text id="xbitfr"
MaterialApp
└── Scaffold
    ├── AppBar
    │   └── Text
    └── Body
        └── Center
            └── Text
```

The widget at the top is called the root widget.

The widgets inside it are child widgets.

## Root Widget

The widget passed to `runApp()` becomes the root widget of the entire Flutter application.

Example:

```dart id="d3abgy"
void main() {
  runApp(
    const MaterialApp(
      home: Center(
        child: Text('Hello Flutter!'),
      ),
    ),
  );
}
```

Here, `MaterialApp` is the root widget because it is passed directly to `runApp()`.

Flutter starts building the UI from this widget downward.

## Built-In Widgets

Flutter provides many built-in widgets that developers can use immediately.

Examples include:

```dart id="3t58ym"
Text
Center
Column
Row
Container
Image
Icon
ElevatedButton
Scaffold
AppBar
MaterialApp
```

These widgets help developers build common user interface elements quickly.

## Custom Widgets

In addition to built-in widgets, developers can create their own widgets.

Custom widgets are useful when:

* A UI part is reused multiple times
* A file becomes too large
* The app needs better organization
* A complex UI should be split into smaller parts

Example:

```dart id="dob772"
class WelcomeMessage extends StatelessWidget {
  const WelcomeMessage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Welcome to Flutter!');
  }
}
```

This creates a custom widget called `WelcomeMessage`.

It can then be used inside another widget:

```dart id="83b4i9"
const Center(
  child: WelcomeMessage(),
)
```

## StatelessWidget And StatefulWidget

Flutter has two major categories of widgets:

### StatelessWidget

A `StatelessWidget` does not manage changing data internally.

Its output depends only on the information given to it.

Example:

```dart id="ttd8hn"
class WelcomeMessage extends StatelessWidget {
  const WelcomeMessage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Welcome to Flutter!');
  }
}
```

### StatefulWidget

A `StatefulWidget` can manage data that changes over time.

It is used when the UI must update because of user interaction or changing values.

Examples include:

* A counter that increases when a button is pressed
* A dice image that changes when the dice is rolled
* A form field that reacts to user input

Stateful widgets will become important later in the Roll Dice app.

## Code Example

```dart id="ed5fof"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Hello Flutter!'),
        ),
      ),
    ),
  );
}
```

## Code Explanation

The `main()` function starts the Dart program.

Inside `main()`, `runApp()` starts the Flutter application.

The argument passed to `runApp()` is a widget.

`MaterialApp` is the root widget of this app.

`Scaffold` provides a basic screen structure.

`Center` places its child widget in the center of the screen.

`Text` displays visible text.

Together, these widgets form a small widget tree.

## Notes

Flutter user interfaces are built entirely with widgets. Instead of drawing UI manually or using a visual editor, developers describe the interface by writing Dart code and composing widgets.

At first, widget names such as `MaterialApp`, `Scaffold`, `Center`, and `Text` may look unfamiliar. Over time, they become easier to understand because Flutter development is mostly about learning how to combine widgets correctly.

The most important concept in this lecture is that Flutter apps are built by nesting widgets into a widget tree.

## Summary

Widgets are the fundamental building blocks of Flutter apps. The `runApp()` function needs a widget as an argument because Flutter must know what to display on the screen. By combining and nesting widgets, developers create a widget tree that describes the entire user interface of the app.
