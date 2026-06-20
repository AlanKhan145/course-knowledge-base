# Positional and Named Arguments

## Overview

This lecture explains how arguments are passed to functions and constructors in Dart. Dart supports two main types of arguments: **positional arguments** and **named arguments**.

Understanding the difference is important because Flutter widgets, such as `MaterialApp`, `Text`, `Center`, and many others, rely heavily on named arguments to configure what should be displayed on the screen.

---

## 1. Positional Arguments

A **positional argument** is matched to a function parameter based on its position.

The first value passed to the function is assigned to the first parameter, the second value is assigned to the second parameter, and so on.

### Example

```dart
void greet(String firstName, String lastName) {
  print('$firstName $lastName');
}

greet('John', 'Doe');
```

In this example:

```dart
greet('John', 'Doe');
```

means:

```dart
firstName = 'John'
lastName = 'Doe'
```

The order matters. If the values are swapped, the result will change.

```dart
greet('Doe', 'John'); // Doe John
```

---

## 2. Positional Arguments in Flutter

Some Flutter functions and widgets use positional arguments.

For example:

```dart
runApp(
  MaterialApp(),
);
```

The `runApp()` function takes a widget as its input value. In this case, the first argument passed to `runApp()` is the widget that Flutter should run.

Since `runApp()` expects one main argument, the widget passed inside the parentheses is matched by position.

---

## 3. Why `MaterialApp()` Needs More Information

Writing only this:

```dart
runApp(
  MaterialApp(),
);
```

does not provide enough information to Flutter.

`MaterialApp()` creates the basic structure of the app, but it still needs to know **what should be displayed on the screen**.

To define the main UI of the app, we pass more information to `MaterialApp`.

For example:

```dart
runApp(
  MaterialApp(
    home: Text('Hello Flutter'),
  ),
);
```

Here, `home` tells `MaterialApp` which widget should be shown inside the app.

---

## 4. Named Arguments

A **named argument** is passed by using the parameter name followed by a colon.

Instead of relying on position, the argument is identified by its name.

### Example

```dart
void createUser({required String name, int age = 18}) {
  print('$name is $age years old');
}

createUser(name: 'Alice', age: 25);
createUser(age: 30, name: 'Bob');
```

Both calls are valid because named arguments do not depend on order.

```dart
createUser(name: 'Alice', age: 25);
createUser(age: 30, name: 'Bob');
```

The parameter names make the function call easier to read.

---

## 5. Defining Named Parameters in Dart

When defining a function with named parameters, the parameters are wrapped in curly braces `{}`.

```dart
void createUser({required String name, int age = 18}) {
  print('$name is $age years old');
}
```

In this example:

```dart
{required String name, int age = 18}
```

means the function uses named parameters.

The `required` keyword means that the caller must provide that argument.

```dart
createUser(name: 'Alice');
```

This works because `name` is required, while `age` has a default value of `18`.

---

## 6. Named Arguments in Flutter Widgets

Flutter widget constructors often use named arguments because widgets can have many configuration options.

For example:

```dart
MaterialApp(
  home: Text('Hello Flutter'),
);
```

Here, `home` is a named argument.

It tells `MaterialApp` which widget should be displayed as the main screen of the app.

---

## 7. The `home` Argument in `MaterialApp`

The `home` argument is one of the most important arguments of `MaterialApp`.

It defines the main widget that should be displayed inside the app UI.

Example:

```dart
runApp(
  MaterialApp(
    home: Text('Hello Flutter'),
  ),
);
```

In this code:

```dart
MaterialApp(
  home: Text('Hello Flutter'),
)
```

means:

* `MaterialApp` creates the app structure.
* `home` defines the main screen.
* `Text('Hello Flutter')` displays text on the screen.

---

## 8. The `Text` Widget

The `Text` widget is used to display text in Flutter.

Example:

```dart
Text('Hello Flutter')
```

Here, `'Hello Flutter'` is a positional argument because it is passed directly without a name.

The text string is the main value that the `Text` widget needs.

---

## 9. Combining Positional and Named Arguments

Flutter widgets can use both positional and named arguments.

Example:

```dart
Text(
  'Hello Flutter',
  style: TextStyle(
    fontSize: 20,
    color: Colors.blue,
  ),
  textAlign: TextAlign.center,
)
```

In this example:

```dart
'Hello Flutter'
```

is a positional argument.

These are named arguments:

```dart
style: TextStyle(...)
textAlign: TextAlign.center
```

The positional argument defines the text content, while the named arguments configure how the text looks and behaves.

---

## 10. Full Flutter Example

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      home: Text(
        'Hello Flutter',
        style: TextStyle(
          fontSize: 24,
          color: Colors.blue,
        ),
        textAlign: TextAlign.center,
      ),
    ),
  );
}
```

### Explanation

```dart
runApp(...)
```

starts the Flutter app.

```dart
MaterialApp(...)
```

creates the main app structure.

```dart
home: Text(...)
```

defines what should be displayed on the screen.

```dart
Text('Hello Flutter')
```

displays the text.

```dart
style: TextStyle(...)
```

changes the appearance of the text.

```dart
textAlign: TextAlign.center
```

aligns the text to the center.

---

## Key Points

* Positional arguments are matched by order.
* Named arguments are matched by name.
* Positional arguments are useful when a function only needs a few values.
* Named arguments are useful when a function or constructor has many options.
* Flutter widgets use named arguments heavily because widgets often have many configuration settings.
* `MaterialApp` uses named arguments such as `home`.
* The `home` argument defines the main widget shown on the screen.
* The `Text` widget uses a positional argument for the text content.
* Named arguments make Flutter code more readable and self-documenting.

---

## Summary

Dart supports both positional and named arguments.

A positional argument is passed based on order, while a named argument is passed using the parameter name.

Flutter uses named arguments extensively because widget constructors usually have many optional configuration values. For example, `MaterialApp` uses the named argument `home` to define what should be displayed inside the app UI.

Understanding positional and named arguments helps you read and write Flutter code more clearly.
