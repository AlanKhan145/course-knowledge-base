# Onwards to Custom Widgets: Why Do You Need Them?

## Overview

This lecture explains why custom widgets are important in Flutter.

As your Flutter UI grows, your widget tree becomes larger and harder to read. If you keep writing all UI code inside one `build()` method, the code can become difficult to maintain.

Custom widgets help solve this problem by splitting a large widget tree into smaller, named, reusable pieces.

This makes your code easier to read, easier to maintain, and easier to reuse across different parts of your app.

---

## 1. The Current State of the App

At this point, the application is slowly taking shape.

We now have:

* A `MaterialApp`
* A `Scaffold`
* A `Container`
* A gradient background
* A centered `Text` widget
* Styled text

The UI looks much better than it did at the beginning.

However, the code has also grown.

Example:

```dart id="v8z5x0"
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        body: Container(
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
        ),
      ),
    ),
  );
}
```

This code is still manageable, but it is becoming more complex.

As real apps grow, this problem becomes much bigger.

---

## 2. The Problem with Large Widget Trees

Flutter UIs are built by nesting widgets inside other widgets.

This creates a widget tree.

Example:

```text id="x6gr3i"
MaterialApp
└── Scaffold
    └── Container
        ├── BoxDecoration
        │   └── LinearGradient
        │       └── List<Color>
        └── Center
            └── Text
                └── TextStyle
```

This structure is useful, but the code can become hard to read when the tree grows too large.

Large widget trees can cause problems such as:

* Hard-to-read code
* Hard-to-maintain code
* Too much logic in one `build()` method
* Difficult debugging
* Difficult reuse
* More scrolling
* Less clear structure

---

## 3. Why Custom Widgets Are Needed

Custom widgets allow you to break a large widget tree into smaller parts.

Instead of keeping everything inside one `build()` method, you can extract part of the UI into its own widget.

For example, this part:

```dart id="ypgt32"
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
  child: const Center(
    child: Text(
      'Hello World!',
      style: TextStyle(
        color: Colors.white,
        fontSize: 28,
      ),
    ),
  ),
)
```

could be extracted into a separate custom widget.

This would make the main app code shorter and cleaner.

---

## 4. Custom Widgets Improve Readability

A custom widget gives a part of the UI a meaningful name.

Instead of reading a large nested widget tree, you can read something like:

```dart id="5c5jqv"
GradientContainer()
```

This immediately tells you what that part of the UI represents.

Compare this:

```dart id="sdjkrd"
Scaffold(
  body: Container(
    decoration: BoxDecoration(...),
    child: Center(...),
  ),
)
```

with this:

```dart id="c7uitf"
Scaffold(
  body: GradientContainer(),
)
```

The second version is easier to understand.

The implementation details are hidden inside the custom widget.

---

## 5. Custom Widgets Improve Maintainability

When UI code is split into smaller widgets, it becomes easier to update.

For example, if you want to change the gradient background, you can update the custom widget instead of searching through a large `build()` method.

This is especially useful in larger apps with many screens.

A custom widget keeps related UI code in one place.

---

## 6. Custom Widgets Improve Reusability

Another major benefit of custom widgets is reusability.

For example, if you create a custom gradient container, you can reuse it in multiple places.

Example:

```dart id="qxzftm"
GradientContainer()
```

You could use it on:

* The home screen
* A profile screen
* A settings screen
* A game screen
* A loading screen

Even if the current demo app only uses it once, larger apps often reuse UI pieces across multiple screens.

---

## 7. Custom Widgets Help Organize Code

Custom widgets allow you to organize your app into smaller building blocks.

Example:

```text id="utg42j"
MyApp
GradientContainer
DiceRoller
ScoreCard
PlayerAvatar
RollButton
```

Each widget has its own responsibility.

This makes the app easier to understand.

Instead of one giant widget tree, you get many small and focused widgets.

---

## 8. Custom Widgets Are Like UI Functions

You can think of a custom widget as a reusable UI building block.

It is similar to a function that returns part of the UI.

For example:

```dart id="g1bryx"
GradientContainer()
```

could return a widget tree with a gradient background.

```dart id="oq2vzt"
DiceRoller()
```

could return the dice image and roll button.

```dart id="6jebx8"
ScoreCard()
```

could return a styled score display.

This makes your UI code easier to reason about.

---

## 9. There Is No Single Correct Way

When extracting custom widgets, there is not always one right or wrong answer.

You can decide which part of the UI should become its own widget.

Good candidates for extraction include:

* Large widget subtrees
* Repeated UI patterns
* UI sections with a clear purpose
* Parts that may be reused later
* Parts that make the main `build()` method too long

The goal is to improve readability and maintainability.

---

## 10. Example: Extracting the Gradient Container

In this demo app, it makes sense to extract the `Container` with the gradient background into its own custom widget.

Current structure:

```text id="yzl2p9"
Scaffold
└── Container
    ├── Gradient background
    └── Center
        └── Text
```

After extraction:

```text id="hmejxs"
Scaffold
└── GradientContainer
    └── Center
        └── Text
```

Now the `Scaffold` code becomes simpler.

---

## 11. Before Extracting a Custom Widget

```dart id="rvwrl1"
Scaffold(
  body: Container(
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
  ),
)
```

This code works, but it contains many details directly inside the `Scaffold`.

---

## 12. After Extracting a Custom Widget

```dart id="j2w6pu"
Scaffold(
  body: GradientContainer(),
)
```

This is much easier to read.

The gradient logic is moved into a separate widget called `GradientContainer`.

---

## 13. What Is Needed to Create a Custom Widget?

To create a custom widget, you need to define a Dart class.

Dart uses the `class` keyword to create classes.

Example:

```dart id="c99451"
class GradientContainer {
  
}
```

A class is a blueprint for creating objects.

Since Flutter widgets are objects, custom widgets are created by defining classes.

In Flutter, custom widgets usually extend either:

```dart id="fbh4lk"
StatelessWidget
```

or:

```dart id="1upryl"
StatefulWidget
```

The next step is to learn how these custom widget classes work.

---

## 14. Why This Leads to Classes

Earlier, we learned that Flutter widgets are objects.

Objects are created from classes.

Therefore, if we want to create our own widget, we need to create our own class.

For example:

```dart id="mwn627"
class GradientContainer extends StatelessWidget {
  
}
```

This defines a new custom widget class.

The details of how this works will be covered in the next lecture.

---

## 15. Good Custom Widget Names

A custom widget should have a clear and meaningful name.

Good examples:

```text id="b0abqk"
GradientContainer
DiceRoller
ScoreCard
PlayerAvatar
RollButton
MainMenu
ProfileHeader
```

Bad examples:

```text id="gbd1vg"
MyWidget
Thing
Box1
WidgetTest
CustomStuff
```

A good name helps you understand what the widget is responsible for.

---

## 16. When Should You Extract a Custom Widget?

You should consider extracting a custom widget when:

* The `build()` method becomes too long
* The widget tree becomes hard to read
* A part of the UI has a clear purpose
* A UI section is reused in multiple places
* You want to test a UI piece separately
* You want to make the code easier to maintain

A common rule of thumb:

```text id="1q5q8t"
If a build() method becomes longer than about 50-80 lines, consider extracting widgets.
```

This is not a strict rule, but it is a useful guideline.

---

## 17. Benefits of Custom Widgets

Custom widgets provide several benefits.

### Readability

They reduce the size of large widget trees.

### Reusability

They can be used in multiple places.

### Maintainability

They keep related UI code together.

### Testability

They make it easier to test individual UI parts.

### Collaboration

Different developers can work on different widgets.

### Clear Structure

They make the app architecture easier to understand.

---

## Key Points

* Flutter UIs can quickly become large widget trees.
* Large `build()` methods are harder to read and maintain.
* Custom widgets split UI code into smaller building blocks.
* Custom widgets give parts of the UI meaningful names.
* Custom widgets can be reused across multiple screens.
* There is no single correct way to split a widget tree.
* Extracting widgets improves readability and maintainability.
* Custom widgets are created by defining Dart classes.
* The `class` keyword is used to define a custom widget.
* Custom widgets usually extend `StatelessWidget` or `StatefulWidget`.

---

## Summary

As Flutter apps grow, widget trees become larger and more complex.

Writing everything inside one `build()` method can make the code hard to read, hard to maintain, and difficult to reuse.

Custom widgets solve this problem by breaking the UI into smaller, named, reusable building blocks.

In this app, a good next step is to extract the gradient `Container` into its own custom widget. This improves readability and prepares the app for better structure as it grows.

To create a custom widget, we need to define a Dart class, which will be introduced in the next lecture.
