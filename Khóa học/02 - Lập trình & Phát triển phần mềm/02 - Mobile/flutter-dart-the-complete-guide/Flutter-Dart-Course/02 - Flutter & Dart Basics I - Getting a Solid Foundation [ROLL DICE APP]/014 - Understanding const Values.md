# Understanding `const` Values

## Overview

This lecture explains the `const` keyword in Dart and how it is used in Flutter.

In Dart, `const` is used to create **compile-time constants**. A compile-time constant is a value that is known before the app runs.

In Flutter, using `const` where possible is a best practice because it helps Dart and Flutter optimize performance by reusing objects instead of creating new ones unnecessarily.

---

## 1. The First Basic UI

In the previous lecture, we created a very simple Flutter UI by combining widgets.

Example:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Text('Hello World!'),
    ),
  );
}
```

This app displays text on the screen.

The UI is very basic and not very useful yet, but it is an important first step. It shows how Flutter apps are built by combining widgets such as `MaterialApp` and `Text`.

---

## 2. Blue Squiggly Lines in VS Code

After writing this code, you may notice blue squiggly lines under some parts of the code in Visual Studio Code.

Blue squiggly lines usually do **not** mean there is an error.

Instead, they mean that the code can be improved.

The Dart analyzer may suggest a better or more optimized version of your code.

For example, it may suggest:

```text
Use 'const' with the constructor to improve performance.
```

This means Dart recommends adding the `const` keyword in front of a widget constructor.

---

## 3. What Is `const`?

`const` is a keyword built into the Dart language.

It is used to mark a value as constant.

A constant value does not change while the program is running.

Example:

```dart
const double pi = 3.14159;
```

Here, `pi` is a constant value.

Its value is known before the program runs and cannot be changed later.

---

## 4. `const` with Flutter Widgets

In Flutter, widgets are objects.

When your app runs, these widget objects are stored in memory.

If you use the same widget configuration multiple times, Dart can reuse the existing constant object instead of creating a new one.

Example:

```dart
const Text('Hello World!')
```

This tells Dart that the `Text` widget is constant.

If the same constant widget is used again, Dart can reuse it.

This can make the app more memory efficient and improve performance.

---

## 5. Adding `const` to the First App

Original code:

```dart
void main() {
  runApp(
    MaterialApp(
      home: Text('Hello World!'),
    ),
  );
}
```

Improved code:

```dart
void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello World!'),
    ),
  );
}
```

By adding `const` before `MaterialApp`, we tell Dart that this widget configuration is constant.

Because `Text('Hello World!')` is inside a constant context, Dart also treats it as constant.

---

## 6. Why `const Text` May Be Redundant

You might try to write this:

```dart
void main() {
  runApp(
    const MaterialApp(
      home: const Text('Hello World!'),
    ),
  );
}
```

However, Dart may show another hint saying that the second `const` is unnecessary.

That is because `Text('Hello World!')` is already inside a `const MaterialApp`.

So this is enough:

```dart
void main() {
  runApp(
    const MaterialApp(
      home: Text('Hello World!'),
    ),
  );
}
```

The outer `const` creates a constant context for the widgets inside it.

---

## 7. `const` Improves Performance

Using `const` helps Dart and Flutter optimize your application.

Without `const`, Dart may create a new object each time the code runs.

With `const`, Dart can reuse the same object if the value is exactly the same.

This helps reduce unnecessary object creation.

In a small app, the difference is not very noticeable. However, in a larger Flutter app with many widgets, using `const` can help improve memory usage and performance.

---

## 8. `const` Is a Best Practice

You do not need to memorize every place where `const` should be used.

The Dart analyzer and your code editor will help you.

If `const` can be added, VS Code may show a blue squiggly line and suggest it.

If `const` is unnecessary, the editor may also suggest removing it.

So the best practice is simple:

Use `const` whenever the Dart analyzer suggests it.

---

## 9. `const` Constructor

A class can have a `const` constructor.

Example:

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Text('Hello Flutter'),
    );
  }
}
```

Here:

```dart
const MyApp({super.key});
```

defines a constant constructor.

This allows `MyApp` to be created as a constant object.

```dart
runApp(const MyApp());
```

---

## 10. Full Flutter Example

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('Hello Flutter'),
        ),
      ),
    );
  }
}
```

In this example:

```dart
runApp(const MyApp());
```

creates a constant `MyApp` widget.

```dart
const MyApp({super.key});
```

defines a constant constructor.

```dart
return const MaterialApp(...)
```

marks the widget tree as constant where possible.

---

## 11. `const` Values

The `const` keyword can also be used with normal Dart values.

Example:

```dart
const double pi = 3.14159;
```

Example with a list:

```dart
const List<String> diceImages = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
];
```

Because this list is marked as `const`, it cannot be changed later.

This would not be allowed:

```dart
diceImages.add('dice-4.png'); // error
```

---

## 12. `const` vs Normal Values

Normal value:

```dart
double pi = 3.14159;
```

This value can be changed later:

```dart
pi = 3.14;
```

Constant value:

```dart
const double pi = 3.14159;
```

This value cannot be changed later.

```dart
pi = 3.14; // error
```

---

## 13. Important Notes About `const`

A value can only be marked as `const` if Dart can know its value at compile time.

This is valid:

```dart
const String message = 'Hello';
```

This is not valid:

```dart
String getMessage() {
  return 'Hello';
}

const String message = getMessage(); // error
```

The function `getMessage()` runs at runtime, so Dart cannot use it as a compile-time constant.

---

## Key Points

* `const` is a Dart keyword.
* `const` creates compile-time constants.
* A compile-time constant is known before the app runs.
* Flutter widgets can be marked as `const`.
* `const` helps Dart reuse objects instead of creating duplicate objects.
* This improves memory efficiency and performance.
* The Dart analyzer suggests where `const` can be added.
* If `const` is unnecessary, the analyzer can also suggest removing it.
* Use `const` whenever possible in Flutter code.

---

## Summary

The `const` keyword helps Dart and Flutter run applications more efficiently.

When a widget or value is marked as `const`, Dart knows that it will not change. This allows Dart to reuse the same object instead of creating new objects repeatedly.

In Flutter, using `const` is a best practice, especially in widget trees. You do not need to memorize every possible place to use it because the Dart analyzer and your editor will guide you.

Whenever your editor suggests adding `const`, you should usually add it.
