# Using a First Widget and Passing Values to Functions

## Overview

This lecture shows how to use the first Flutter widget in code and how values are passed into functions or widgets.

The first important widget introduced here is `MaterialApp`. It is a built-in Flutter widget that is commonly used as the starting point of almost every Flutter application.

The lecture also explains that widgets are created in code by writing the widget name followed by parentheses, similar to calling a function. Values can then be passed into those parentheses to configure the widget.

## Learning Goals

By the end of this lecture, students will understand:

* How to use a Flutter widget in code
* Why `MaterialApp` is commonly passed to `runApp()`
* How Flutter widgets are created
* How values are passed into functions
* How values are passed into widget constructors
* Why `MaterialApp` alone does not display meaningful UI
* How widget nesting creates a widget tree

## Key Points

* Flutter provides many built-in widgets.
* The Flutter Widget Catalog is a useful reference for discovering available widgets.
* Beginners should not try to memorize all widgets.
* Most Flutter apps are built with a smaller set of commonly used core widgets.
* `MaterialApp` is one of the most important Flutter widgets.
* `MaterialApp` is usually passed to `runApp()`.
* Widgets are created by calling their constructors.
* Constructor calls look similar to function calls.
* Values passed into functions or constructors are called arguments.
* A widget can be passed as an argument to another widget.
* Nesting widgets creates a widget tree.

## Finding Flutter Widgets

Flutter provides many built-in widgets for building user interfaces.

Examples include widgets for:

* Displaying text
* Showing images
* Creating buttons
* Handling user input
* Arranging layouts
* Styling screens
* Building navigation structures

The official Flutter Widget Catalog can be used as a reference to explore available widgets.

However, beginners should not try to memorize every widget. Flutter development is best learned by building apps step by step. Over time, the most important widgets will become familiar naturally.

## Using The `MaterialApp` Widget

A common starting point for Flutter apps is the `MaterialApp` widget.

Example:

```dart id="wg1qzl"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(),
  );
}
```

Here, `MaterialApp` is passed as an argument to `runApp()`.

This means Flutter starts the app using `MaterialApp` as the root widget.

## Why `MaterialApp` Is Important

`MaterialApp` is a core Flutter widget.

It performs important behind-the-scenes setup work for the app, including support for:

* Material Design styling
* App navigation
* Themes
* Text direction
* Localization-related configuration
* Basic app-level structure

Most Flutter apps use `MaterialApp` near the top of the widget tree.

However, `MaterialApp` alone does not display meaningful content on the screen. To show something, another widget must be provided inside it.

## Creating A Widget

A widget is created by writing the widget name followed by parentheses.

Example:

```dart id="75xv8a"
MaterialApp()
```

This looks similar to calling a function.

Technically, this is a constructor call. A constructor is used to create an object from a class.

For now, the most important idea is simple:

```text id="s0q2b8"
WidgetName()
```

means:

```text id="kgt0xq"
Create this widget.
```

## Passing A Widget To `runApp()`

The `runApp()` function needs one argument.

That argument must be a widget.

Example:

```dart id="8op9o4"
void main() {
  runApp(
    const MaterialApp(),
  );
}
```

In this example:

* `runApp()` is the function being called.
* `const MaterialApp()` is the argument passed into `runApp()`.
* `MaterialApp` becomes the root widget of the app.

## Passing Values To Widgets

Widgets can receive values through arguments.

For example:

```dart id="cqz87k"
const Text('Hello Flutter!')
```

Here, the string `'Hello Flutter!'` is passed into the `Text` widget.

This tells the `Text` widget which text should be displayed.

## Positional Arguments

Some arguments are positional.

That means the position of the value matters.

Example:

```dart id="6rt1qj"
const Text('Hello Flutter!')
```

The string is passed directly into `Text`.

This is a positional argument.

## Named Arguments

Many Flutter widgets use named arguments.

Named arguments include a name followed by a colon.

Example:

```dart id="cl3h14"
const MaterialApp(
  home: Text('Hello Flutter!'),
)
```

Here, `home` is a named argument.

It tells `MaterialApp` which widget should be used as the main screen.

Another example:

```dart id="hcr8zs"
const Center(
  child: Text('Hello Flutter!'),
)
```

Here, `child` is a named argument.

It tells `Center` which widget should be placed in the center.

## Widget Nesting

Widgets are often passed as arguments to other widgets.

Example:

```dart id="j6d9fz"
const MaterialApp(
  home: Center(
    child: Text('Hello Flutter!'),
  ),
)
```

In this example:

* `MaterialApp` contains `Center`
* `Center` contains `Text`
* `Text` displays the actual text

This nesting creates a widget tree.

## Widget Tree Example

```text id="x48gmf"
MaterialApp
└── Center
    └── Text
```

This tree describes the structure of the user interface.

Flutter reads this widget tree and uses it to build what appears on the screen.

## Complete Code Example

```dart id="dimawr"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Roll the Dice!'),
        ),
      ),
    ),
  );
}
```

## Code Explanation

The `import` statement gives access to Flutter’s Material Design widgets.

The `main()` function is the entry point of the app.

Inside `main()`, `runApp()` starts the Flutter application.

`MaterialApp` is passed as an argument to `runApp()`.

The `home` argument tells `MaterialApp` what should be shown as the main screen.

`Scaffold` provides a basic screen structure.

`Center` places its child widget in the center of the screen.

`Text` displays the text `Roll the Dice!`.

## Another Example With Styling

```dart id="oq5q3m"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text(
            'Roll the Dice!',
            style: TextStyle(fontSize: 28),
          ),
        ),
      ),
    ),
  );
}
```

In this example:

* `'Roll the Dice!'` is a positional argument passed to `Text`.
* `style` is a named argument.
* `TextStyle(fontSize: 28)` is another object passed as a value.
* `fontSize: 28` configures the size of the text.

## Function Arguments vs Widget Constructor Arguments

Function call example:

```dart id="s9ra3c"
print('Hello!');
```

Widget constructor example:

```dart id="0f1fyn"
const Text('Hello!');
```

Both use parentheses and arguments.

The difference is:

* `print()` executes a function.
* `Text()` creates a widget object.

This difference will become clearer later when learning about classes and constructors.

## Common Beginner Mistakes

### Calling `runApp()` Without A Widget

Incorrect:

```dart id="hdgwit"
void main() {
  runApp();
}
```

Correct:

```dart id="2rpttw"
void main() {
  runApp(
    const MaterialApp(),
  );
}
```

### Creating `MaterialApp` But Not Passing UI Content

This is valid code, but it does not show meaningful content:

```dart id="7cfhkd"
void main() {
  runApp(
    const MaterialApp(),
  );
}
```

A better version provides a `home` widget:

```dart id="ul9ynz"
void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello Flutter!'),
    ),
  );
}
```

### Forgetting To Nest Widgets Properly

Incorrect structure can make the UI hard to understand.

Better structure:

```dart id="g1ywak"
const MaterialApp(
  home: Scaffold(
    body: Center(
      child: Text('Hello Flutter!'),
    ),
  ),
)
```

## Notes

Flutter widgets are configured by passing values into their constructors. These values can be simple data, such as strings or numbers, or they can be other widgets.

This is one of the most important ideas in Flutter. A user interface is created by nesting widgets inside each other and passing them as arguments.

The `MaterialApp` widget is typically used near the top of the widget tree because it sets up many important app-level features.

## Summary

Widgets are created by calling their constructors, and they are configured by passing values as arguments. `MaterialApp` is commonly passed to `runApp()` as the root widget of a Flutter app. By passing widgets into other widgets, developers create a nested widget tree that describes the app’s user interface.
