# Building Custom Widgets

## Overview

This lecture explains how to build a custom Flutter widget.

A custom widget is created by defining a new Dart class that extends a Flutter widget base class such as `StatelessWidget` or `StatefulWidget`.

In this lecture, we focus on `StatelessWidget`, which is used for widgets that do not manage changing data internally.

Creating custom widgets helps split large widget trees into smaller, reusable, and readable parts.

---

## 1. Why Build Custom Widgets?

As the app grows, the widget tree becomes larger.

Example:

```dart id="734dj5"
MaterialApp(
  home: Scaffold(
    body: Container(
      decoration: BoxDecoration(...),
      child: Center(
        child: Text(...),
      ),
    ),
  ),
)
```

This works, but if everything stays inside one `build()` method, the code can become hard to read.

Custom widgets help by moving part of the widget tree into a separate class.

Instead of writing the full `Container` tree inside the main app, we can create:

```dart id="6f6wkv"
GradientContainer()
```

This makes the main widget tree cleaner.

---

## 2. What Is a Custom Widget?

A custom widget is a widget that you define yourself.

Built-in widgets include:

```dart id="dvuewr"
Text
Container
Scaffold
Center
Column
```

A custom widget is something you create, such as:

```dart id="u8avpt"
GradientContainer
DiceRoller
ScoreCard
PlayerAvatar
```

Once created, a custom widget can be used like any other Flutter widget.

---

## 3. Custom Widgets Are Classes

Since Flutter widgets are objects, and objects are created from classes, custom widgets are also created by defining classes.

Example:

```dart id="jg0a8g"
class GradientContainer extends StatelessWidget {
  
}
```

Here:

```dart id="sjmpq9"
GradientContainer
```

is the name of the custom widget class.

```dart id="px0twy"
extends StatelessWidget
```

means this class inherits from `StatelessWidget`.

Because it extends `StatelessWidget`, Flutter can use it as a widget.

---

## 4. `StatelessWidget`

A `StatelessWidget` is a widget that does not manage internal changing state.

It is used when the widget can be described completely by its input values and configuration.

Example use cases:

* Static text
* Static layout
* Reusable UI sections
* Styled containers
* Icons
* Labels
* Simple buttons without internal state

For this example, a gradient container can be a `StatelessWidget`.

---

## 5. Basic Custom Widget Structure

A custom `StatelessWidget` usually follows this structure:

```dart id="p4eyho"
class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return SomeWidget();
  }
}
```

The important parts are:

```dart id="wbl74j"
extends StatelessWidget
```

```dart id="q6asnp"
const MyWidget({super.key});
```

```dart id="n80pmk"
@override
Widget build(BuildContext context)
```

---

## 6. The `build()` Method

Every `StatelessWidget` must implement the `build()` method.

Example:

```dart id="eazg5g"
@override
Widget build(BuildContext context) {
  return Text('Hello World!');
}
```

The `build()` method returns the widget tree that this custom widget represents.

In other words:

```text id="6vr7j2"
The build() method describes what should appear on the screen.
```

---

## 7. The `@override` Annotation

The `@override` annotation tells Dart that this method overrides a method from the parent class.

Example:

```dart id="cxyycz"
@override
Widget build(BuildContext context) {
  return Text('Hello');
}
```

The `build()` method already exists in `StatelessWidget`.

By writing our own `build()` method, we provide the actual UI for our custom widget.

---

## 8. The `BuildContext` Parameter

The `build()` method receives a parameter called `context`.

Example:

```dart id="q2pbmd"
Widget build(BuildContext context)
```

`BuildContext` provides information about where this widget is located in the widget tree.

You will use `context` more in later Flutter topics, such as:

* Themes
* Navigation
* Media queries
* Inherited widgets
* State management

For now, it is enough to know that `build()` requires this parameter.

---

## 9. Creating a `GradientContainer` Widget

We can extract the gradient `Container` into a custom widget.

```dart id="4rbm0s"
class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
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
      child: const Center(
        child: Text(
          'Hello World!',
          style: TextStyle(
            color: Colors.white,
            fontSize: 28,
          ),
        ),
      ),
    );
  }
}
```

Now the gradient container is separated into its own widget class.

---

## 10. Using the Custom Widget

After creating the custom widget, we can use it in the main app.

```dart id="q8d29q"
void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(),
      ),
    ),
  );
}
```

This is much cleaner than keeping the entire `Container` configuration inside `MaterialApp`.

---

## 11. Full Example

```dart id="ckfl8m"
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(),
      ),
    ),
  );
}

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
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
      child: const Center(
        child: Text(
          'Hello World!',
          style: TextStyle(
            color: Colors.white,
            fontSize: 28,
          ),
        ),
      ),
    );
  }
}
```

---

## 12. Why Add a Constructor?

When creating a public widget class, the Dart analyzer may show a hint:

```text id="gbiq8q"
Constructors for public widgets should have a named key parameter.
```

This means your widget should define a constructor that accepts a `key`.

Example:

```dart id="0r20j0"
const GradientContainer({super.key});
```

This is the recommended modern syntax.

---

## 13. What Is `key`?

A `key` is a special value used by Flutter to identify widgets in the widget tree.

Keys become important when Flutter needs to compare, update, move, or preserve widgets.

You do not need to use keys manually all the time, but custom public widgets should accept a `key` and pass it to the parent widget class.

That is why we write:

```dart id="ogszuh"
const GradientContainer({super.key});
```

---

## 14. What Is `super.key`?

The `super` keyword refers to the parent class.

In this case, the parent class is:

```dart id="94k1m0"
StatelessWidget
```

When we write:

```dart id="vd3na1"
const GradientContainer({super.key});
```

we are doing two things:

1. Accepting a named parameter called `key`
2. Passing that `key` to the parent class constructor

This is a shorter modern Dart syntax.

---

## 15. Older Verbose Syntax

Before the shortcut syntax, you might write this:

```dart id="y5tbhj"
const GradientContainer({Key? key}) : super(key: key);
```

This means:

```text id="sxp2ds"
Accept a key in GradientContainer.
Forward that key to StatelessWidget.
```

The modern shortcut is:

```dart id="skpirv"
const GradientContainer({super.key});
```

Both approaches forward the key to the parent class.

The shortcut is cleaner.

---

## 16. Why Add `const` to the Constructor?

The analyzer may also suggest turning the constructor into a `const` constructor.

Example:

```dart id="j4yiz0"
const GradientContainer({super.key});
```

Adding `const` allows this widget to be created as a compile-time constant when possible.

Example:

```dart id="xiy8s1"
const GradientContainer()
```

This can help Flutter and Dart optimize memory usage and performance.

---

## 17. `const` Constructor Unlocks `const` Usage

If your custom widget constructor is not marked as `const`, you cannot use it like this:

```dart id="el43dn"
const GradientContainer()
```

To allow that, the constructor must be marked as `const`.

Correct:

```dart id="nr4cpu"
class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

Now this is possible:

```dart id="9d6pzh"
const GradientContainer()
```

---

## 18. Comments in Dart

The lecture also briefly shows comments.

A single-line comment starts with two forward slashes:

```dart id="cfdw5j"
// This is a comment
```

Comments are ignored by Dart.

They are used to explain code to humans.

Example:

```dart id="6xejtz"
// This widget creates a gradient background.
class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});
}
```

---

## 19. Custom Widget Example: `DiceRoller`

A custom widget can also represent part of a dice app UI.

```dart id="lp9yip"
import 'package:flutter/material.dart';

class DiceRoller extends StatelessWidget {
  const DiceRoller({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset(
          'assets/images/dice-2.png',
          width: 200,
        ),
        const SizedBox(height: 20),
        TextButton(
          onPressed: () {},
          style: TextButton.styleFrom(
            foregroundColor: Colors.white,
            textStyle: const TextStyle(fontSize: 28),
          ),
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

This widget contains:

* A dice image
* Spacing
* A roll button

It can now be reused anywhere in the app.

---

## 20. Using `DiceRoller`

```dart id="klm7gi"
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: DiceRoller(),
        ),
      ),
    );
  }
}
```

The main app is now easier to read.

Instead of seeing all the details, we see:

```dart id="uz8nv7"
DiceRoller()
```

This gives the UI section a clear name.

---

## 21. Custom Widget Pattern

Creating a custom widget follows this pattern:

```dart id="vwm098"
class WidgetName extends StatelessWidget {
  const WidgetName({super.key});

  @override
  Widget build(BuildContext context) {
    return SomeWidget();
  }
}
```

Steps:

1. Create a class.
2. Extend `StatelessWidget`.
3. Add a `const` constructor.
4. Accept and forward `super.key`.
5. Override the `build()` method.
6. Return the widget tree.

---

## 22. Why This Matters

Custom widgets allow you to:

* Reduce large widget trees
* Improve readability
* Improve maintainability
* Reuse UI pieces
* Give UI sections meaningful names
* Make the code easier to test
* Organize apps into smaller components

This is one of the most important Flutter development patterns.

---

## Key Points

* Custom widgets are created with Dart classes.
* A stateless custom widget extends `StatelessWidget`.
* Every `StatelessWidget` must implement `build()`.
* The `build()` method returns a widget.
* `@override` marks a method that overrides a parent class method.
* `BuildContext` describes the widget's position in the widget tree.
* Public widget classes should accept a `key`.
* `super.key` forwards the key to the parent class.
* A `const` constructor allows the widget to be used with `const`.
* Custom widgets make code cleaner, reusable, and easier to maintain.

---

## Summary

Custom widgets are created by defining classes that extend `StatelessWidget` or `StatefulWidget`.

For a basic custom widget, you define a class, add a `const` constructor with `super.key`, override the `build()` method, and return the widget tree.

The constructor:

```dart id="3vd3ay"
const GradientContainer({super.key});
```

is important because it accepts and forwards the widget key and allows the widget to be used as a constant.

Once created, custom widgets can be used just like built-in Flutter widgets, making your app structure cleaner, more readable, and easier to maintain.
