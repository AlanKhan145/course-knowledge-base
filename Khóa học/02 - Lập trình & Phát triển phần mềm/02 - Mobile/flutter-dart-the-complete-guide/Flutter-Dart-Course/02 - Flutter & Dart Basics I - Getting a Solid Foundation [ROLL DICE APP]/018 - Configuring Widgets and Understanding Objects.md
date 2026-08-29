# Configuring Widgets and Understanding Objects

## Overview

This lecture explains how Flutter widgets can be configured by passing values and objects to their constructor arguments.

In Flutter, every widget is an object. Many values used to configure widgets are also objects, such as `Color`, `TextStyle`, `EdgeInsets`, `BoxDecoration`, and `LinearGradient`.

Understanding objects is important because Flutter UIs are built by combining many objects together. Some objects are widgets, while others are configuration objects that change how widgets look or behave.

---

## 1. Returning to the App

So far, we have built a very simple Flutter app.

```dart id="1vy55j"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    ),
  );
}
```

This app works, but it still looks very plain.

The screen has a white background, and the text is simple.

To make the UI look better, we can configure widgets by passing more values to their arguments.

---

## 2. Widgets Have Configuration Arguments

Most Flutter widgets accept arguments that configure how they look or behave.

For example, `Scaffold` has a `body` argument:

```dart id="tqur91"
Scaffold(
  body: Center(
    child: Text('Hello World!'),
  ),
)
```

The `body` argument defines the main content of the screen.

But `Scaffold` has many other arguments too.

One important argument is:

```dart id="tapfsn"
backgroundColor
```

This argument controls the background color of the screen.

---

## 3. Setting the Background Color

You can set the background color of a `Scaffold` like this:

```dart id="zgun9y"
Scaffold(
  backgroundColor: Colors.deepPurple,
  body: Center(
    child: Text('Hello World!'),
  ),
)
```

Now the screen background becomes purple.

Full example:

```dart id="o9yl1w"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.deepPurple,
        body: Center(
          child: Text('Hello World!'),
        ),
      ),
    ),
  );
}
```

This already looks better than the default white background.

---

## 4. Understanding the `backgroundColor` Type

The `backgroundColor` argument expects a value of type `Color?`.

You may see something like this when hovering over the argument:

```dart id="f3o7dj"
Color? backgroundColor
```

This means the value can be either:

* a `Color`
* or `null`

The question mark `?` means the value is nullable.

In simple terms:

```dart id="y5m0ce"
Color?
```

means:

```text id="4y4u5p"
Color or nothing
```

If `backgroundColor` is `null`, it is similar to not setting a background color manually.

---

## 5. The `Color` Type

`Color` is a type provided by Flutter.

It represents a color value.

Example:

```dart id="0ya2jf"
Color.fromARGB(255, 98, 0, 238)
```

This creates a color using four values:

```text id="qlhk8s"
A = Alpha / transparency
R = Red
G = Green
B = Blue
```

Example:

```dart id="8m1bff"
const Color.fromARGB(255, 98, 0, 238)
```

This creates a purple-like color.

---

## 6. Using the `Colors` Class

Instead of creating custom colors manually, Flutter also provides many predefined colors through `Colors`.

Example:

```dart id="oqgier"
Colors.deepPurple
```

Other examples:

```dart id="8bktkz"
Colors.red
Colors.blue
Colors.green
Colors.orange
Colors.black
Colors.white
```

The `Colors` class gives you quick access to common predefined colors.

This is often easier when you are just getting started.

---

## 7. `Colors.deepPurple` Is a Color Object

When you write:

```dart id="2gws6s"
Colors.deepPurple
```

you are getting a `Color` object.

That `Color` object is then passed to the `backgroundColor` argument.

```dart id="frmg0n"
Scaffold(
  backgroundColor: Colors.deepPurple,
)
```

The `Scaffold` widget uses that `Color` object to paint the background.

---

## 8. What Is an Object?

In Dart, an object is a value stored in memory.

Objects are created from classes.

A class is like a blueprint.

An object is an actual value created from that blueprint.

For example:

```dart id="bs8bjo"
Text('Hello World!')
```

creates a `Text` object.

```dart id="7fj9mt"
Scaffold(...)
```

creates a `Scaffold` object.

```dart id="7bmpoj"
Colors.deepPurple
```

gives us a `Color` object.

So in Flutter, widgets are objects, and configuration values are often objects too.

---

## 9. Widgets Are Objects

All Flutter widgets are objects.

Examples:

```dart id="8edsqg"
MaterialApp()
Scaffold()
Center()
Text('Hello World!')
```

Each of these creates a widget object.

These objects work together to build the final user interface.

Example widget tree:

```text id="j3kbwa"
MaterialApp object
└── Scaffold object
    └── Center object
        └── Text object
```

Each widget object has a specific role.

---

## 10. Configuration Objects

Not all objects in Flutter are widgets.

Some objects are used to configure widgets.

Examples:

```dart id="ojkstk"
Color
TextStyle
EdgeInsets
BoxDecoration
LinearGradient
```

These are configuration objects.

They do not directly represent UI elements by themselves. Instead, they describe how a widget should look or behave.

---

## 11. Example: `TextStyle` Object

The `Text` widget can be styled with a `TextStyle` object.

Example:

```dart id="4nutd3"
Text(
  'Hello Flutter',
  style: TextStyle(
    fontSize: 32,
    fontWeight: FontWeight.bold,
    color: Colors.deepPurple,
  ),
)
```

Here:

```dart id="0s5chq"
TextStyle(...)
```

creates a configuration object.

That object is passed to the `style` argument of the `Text` widget.

The `Text` widget then uses that style information to display the text differently.

---

## 12. Full Example: Styled Text

```dart id="qvxe3n"
import 'package:flutter/material.dart';

class StyledTextDemo extends StatelessWidget {
  const StyledTextDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello Flutter',
      style: TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.bold,
        color: Colors.deepPurple,
        letterSpacing: 2.0,
      ),
      textAlign: TextAlign.center,
    );
  }
}
```

In this example:

```dart id="fpvar0"
Text
```

is the widget object.

```dart id="lfzc36"
TextStyle
```

is a configuration object.

```dart id="6sez1k"
Colors.deepPurple
```

is a color object.

```dart id="jx931p"
TextAlign.center
```

is used to configure text alignment.

---

## 13. Example: Padding with `EdgeInsets`

The `Padding` widget adds space around its child.

It uses an `EdgeInsets` object to define how much space should be added.

Example:

```dart id="ttzt3k"
Padding(
  padding: EdgeInsets.symmetric(
    horizontal: 16,
    vertical: 8,
  ),
  child: Text('Padded text'),
)
```

Here:

```dart id="wzhk5b"
Padding
```

is a widget.

```dart id="vnzqvs"
EdgeInsets.symmetric(...)
```

is a configuration object.

```dart id="hlu1j9"
Text
```

is the child widget.

---

## 14. Objects Can Be Nested

Flutter often uses nested objects.

Example:

```dart id="y92lt6"
Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [
        Colors.deepPurple,
        Colors.purpleAccent,
      ],
    ),
  ),
)
```

In this example:

```text id="qd5fv0"
Container
└── BoxDecoration
    └── LinearGradient
        └── List<Color>
            ├── Colors.deepPurple
            └── Colors.purpleAccent
```

The widget and configuration objects work together.

`Container` uses `BoxDecoration`.

`BoxDecoration` uses `LinearGradient`.

`LinearGradient` uses a list of `Color` objects.

---

## 15. Using a Gradient Background

Instead of using a single background color, we can use a gradient.

Example:

```dart id="pmymsw"
Container(
  decoration: const BoxDecoration(
    gradient: LinearGradient(
      colors: [
        Color.fromARGB(255, 26, 2, 80),
        Color.fromARGB(255, 45, 7, 98),
      ],
      begin: Alignment.topLeft,
      end: Alignment.bottomRight,
    ),
  ),
  child: Center(
    child: Text('Hello World!'),
  ),
)
```

This uses several configuration objects:

```text id="pvhkem"
BoxDecoration
LinearGradient
Color
Alignment
```

Together, they create a styled background.

---

## 16. Constructor Calls Create Objects

Objects are usually created by calling constructors.

Example:

```dart id="xixnub"
Text('Hello World!')
```

This calls the `Text` constructor and creates a `Text` object.

Example:

```dart id="95fua5"
TextStyle(fontSize: 32)
```

This calls the `TextStyle` constructor and creates a `TextStyle` object.

Example:

```dart id="mk7i7r"
EdgeInsets.symmetric(horizontal: 16)
```

This calls a named constructor and creates an `EdgeInsets` object.

---

## 17. Dot Syntax

Sometimes you access predefined values or named constructors using a dot.

Example:

```dart id="rsj5vl"
Colors.deepPurple
```

This accesses a predefined color.

Example:

```dart id="gft0qo"
Color.fromARGB(255, 26, 2, 80)
```

This calls a named constructor of the `Color` class.

Example:

```dart id="s5xwz9"
Alignment.topLeft
```

This accesses a predefined alignment value.

The dot `.` is used to access something that belongs to a class or object.

---

## 18. Null Values

Some widget arguments accept nullable values.

Example:

```dart id="8k7gpu"
Color? backgroundColor
```

The `?` means this value can be `null`.

`null` means no value.

If you do not provide a background color, Flutter can use a default value instead.

Example:

```dart id="p8x2x0"
Scaffold(
  body: Text('Hello'),
)
```

Here, `backgroundColor` is not set.

This is similar to leaving it as `null`.

---

## 19. Complete Example

```dart id="k7bhif"
import 'package:flutter/material.dart';

class StyledScreen extends StatelessWidget {
  const StyledScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: Colors.deepPurple,
      body: Center(
        child: Text(
          'Hello Flutter',
          style: TextStyle(
            fontSize: 32,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}
```

This example combines:

```text id="41o5vx"
Scaffold widget
Center widget
Text widget
Color object
TextStyle object
FontWeight value
TextAlign value
```

All these objects work together to build the final UI.

---

## 20. Why Objects Matter in Flutter

Flutter apps are built from many objects working together.

Some objects are widgets:

```text id="i5f9oh"
MaterialApp
Scaffold
Center
Text
Container
Padding
```

Some objects configure widgets:

```text id="fno5cg"
Color
TextStyle
EdgeInsets
BoxDecoration
LinearGradient
Alignment
```

When building Flutter apps, you constantly create objects and pass them to other objects.

That is the foundation of Flutter UI development.

---

## Key Points

* Dart values are objects.
* Flutter widgets are objects.
* Objects are created from classes.
* Constructors create objects.
* Widgets can be configured by passing objects as arguments.
* `Scaffold` can be configured with `backgroundColor`.
* `backgroundColor` expects a `Color?` value.
* `Color?` means a `Color` object or `null`.
* `Colors.deepPurple` is a predefined `Color` object.
* `TextStyle` is a configuration object for text styling.
* `EdgeInsets` is a configuration object for spacing.
* Flutter UIs are built from many widget and configuration objects working together.

---

## Summary

Flutter widgets are objects, and many values used to configure widgets are objects too.

For example, a `Scaffold` widget can receive a `Color` object through its `backgroundColor` argument. A `Text` widget can receive a `TextStyle` object through its `style` argument.

This object-based structure is central to Flutter. Widgets, colors, styles, spacing, decorations, and alignments are all represented as objects that work together to create the final user interface.

Understanding objects helps you understand how Flutter widgets are configured and how complex UIs are built.
