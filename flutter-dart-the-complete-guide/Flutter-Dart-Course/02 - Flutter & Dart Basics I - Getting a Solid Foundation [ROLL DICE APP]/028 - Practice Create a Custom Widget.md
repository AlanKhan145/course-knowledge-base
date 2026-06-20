# Practice: Create a Custom Widget

## Overview

This lecture is a hands-on practice exercise for creating a custom Flutter widget.

The goal is to extract the styled `Text` widget from the `GradientContainer` and move it into its own custom widget called `StyledText`.

This practice reinforces the full custom widget workflow:

1. Create a new Dart file.
2. Define a custom widget class.
3. Extend `StatelessWidget`.
4. Add a `const` constructor with `super.key`.
5. Override the `build()` method.
6. Return the widget UI.
7. Import and use the custom widget in another file.

---

## 1. Practice Goal

We currently have a styled `Text` widget inside `GradientContainer`.

Example:

```dart
const Text(
  'Hello World!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
)
```

The goal is to move this text into a separate custom widget.

We can name the new custom widget:

```dart
StyledText
```

The file name should be:

```text
styled_text.dart
```

---

## 2. Why Extract the Text Widget?

Extracting the styled text into its own widget makes the code cleaner and more reusable.

Instead of writing the full `Text` configuration inside `GradientContainer`, we can write:

```dart
const StyledText()
```

This makes the widget tree easier to read.

Before:

```dart
Center(
  child: Text(
    'Hello World!',
    style: TextStyle(
      color: Colors.white,
      fontSize: 28,
    ),
  ),
)
```

After:

```dart
Center(
  child: StyledText(),
)
```

---

## 3. Step 1: Create a New File

Inside the `lib` folder, create a new file:

```text
lib/styled_text.dart
```

The file name uses Dart naming conventions:

* lowercase letters
* words separated by underscores
* `.dart` extension

Good:

```text
styled_text.dart
```

Bad:

```text
StyledText.dart
styledText.dart
styled-text.dart
```

---

## 4. Step 2: Import Flutter Material

Because this file uses Flutter widgets, add this import:

```dart
import 'package:flutter/material.dart';
```

This gives the file access to:

```text
StatelessWidget
Widget
BuildContext
Text
TextStyle
Colors
```

---

## 5. Step 3: Define the Custom Widget Class

Create a class called `StyledText`.

```dart
class StyledText extends StatelessWidget {
  
}
```

This class extends `StatelessWidget`, which means it is a custom Flutter widget without internal changing state.

---

## 6. Step 4: Add a `const` Constructor

Add a constructor with `super.key`.

```dart
const StyledText({super.key});
```

The full class now looks like this:

```dart
class StyledText extends StatelessWidget {
  const StyledText({super.key});
}
```

This constructor:

* accepts the `key` argument
* forwards the key to `StatelessWidget`
* allows the widget to be used with `const`

---

## 7. Step 5: Override the `build()` Method

A `StatelessWidget` must implement the `build()` method.

```dart
@override
Widget build(BuildContext context) {
  return const Text(
    'Hello World!',
    style: TextStyle(
      color: Colors.white,
      fontSize: 28,
    ),
  );
}
```

The `build()` method returns the widget tree represented by this custom widget.

---

## 8. File: `lib/styled_text.dart`

```dart
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello World!',
      style: TextStyle(
        color: Colors.white,
        fontSize: 28,
      ),
    );
  }
}
```

This file now defines the custom `StyledText` widget.

---

## 9. Why Add `const` Before `Text`?

Inside the `build()` method, the returned `Text` widget can be marked as `const`.

```dart
return const Text(
  'Hello World!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 28,
  ),
);
```

This is a separate optimization from the `const` constructor.

The constructor:

```dart
const StyledText({super.key});
```

allows `StyledText` itself to be used with `const`.

The returned widget:

```dart
const Text(...)
```

allows the internal `Text` widget to be optimized too.

These are related, but they are not the same thing.

---

## 10. Step 6: Use `StyledText` in `GradientContainer`

Now go back to `gradient_container.dart`.

Instead of using the full `Text` widget directly, use:

```dart
const StyledText()
```

Example:

```dart
child: const Center(
  child: StyledText(),
),
```

However, this will only work after importing the `styled_text.dart` file.

---

## 11. Step 7: Import `styled_text.dart`

In `gradient_container.dart`, import the new file.

If using a package import:

```dart
import 'package:basics/styled_text.dart';
```

Replace `basics` with your own project name.

For example, your project name might be:

```text
first_app
```

Then the import would be:

```dart
import 'package:first_app/styled_text.dart';
```

If both files are in the same folder, you can also use a relative import:

```dart
import 'styled_text.dart';
```

---

## 12. File: `lib/gradient_container.dart`

```dart
import 'package:flutter/material.dart';

import 'styled_text.dart';

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
        child: StyledText(),
      ),
    );
  }
}
```

Now `GradientContainer` uses the custom `StyledText` widget.

---

## 13. File: `lib/main.dart`

```dart
import 'package:flutter/material.dart';

import 'gradient_container.dart';

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

The app now uses `GradientContainer`, and `GradientContainer` uses `StyledText`.

---

## 14. Final Project Structure

```text
lib/
├── main.dart
├── gradient_container.dart
└── styled_text.dart
```

Each file has a clear responsibility.

```text
main.dart                → app entry point
gradient_container.dart  → gradient background widget
styled_text.dart         → styled text widget
```

---

## 15. Widget Tree After Refactoring

The widget structure looks like this:

```text
MaterialApp
└── Scaffold
    └── GradientContainer
        └── Container
            └── Center
                └── StyledText
                    └── Text
```

This is cleaner because the details are split into smaller custom widgets.

---

## 16. Complete Code

### `lib/main.dart`

```dart
import 'package:flutter/material.dart';

import 'gradient_container.dart';

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

---

### `lib/gradient_container.dart`

```dart
import 'package:flutter/material.dart';

import 'styled_text.dart';

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
        child: StyledText(),
      ),
    );
  }
}
```

---

### `lib/styled_text.dart`

```dart
import 'package:flutter/material.dart';

class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello World!',
      style: TextStyle(
        color: Colors.white,
        fontSize: 28,
      ),
    );
  }
}
```

---

## 17. Common Mistakes

### Forgetting to import Flutter Material

Incorrect:

```dart
class StyledText extends StatelessWidget {
  
}
```

If there is no import, Dart does not know what `StatelessWidget` is.

Correct:

```dart
import 'package:flutter/material.dart';
```

---

### Forgetting `@override`

Incorrect:

```dart
Widget build(BuildContext context) {
  return const Text('Hello');
}
```

Correct:

```dart
@override
Widget build(BuildContext context) {
  return const Text('Hello');
}
```

---

### Forgetting the Constructor

Incorrect:

```dart
class StyledText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Text('Hello');
  }
}
```

Better:

```dart
class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Hello');
  }
}
```

---

### Forgetting to Import `styled_text.dart`

If `GradientContainer` uses `StyledText`, it must import the file.

Correct:

```dart
import 'styled_text.dart';
```

or:

```dart
import 'package:your_project_name/styled_text.dart';
```

---

### Incorrect File Name

Incorrect:

```text
StyledText.dart
styledText.dart
styled-text.dart
```

Correct:

```text
styled_text.dart
```

---

## 18. Practice Extension

After creating `StyledText`, try changing:

* The text content
* The font size
* The color
* The font weight
* The letter spacing
* The gradient colors
* The alignment

Example:

```dart
return const Text(
  'Roll the Dice!',
  style: TextStyle(
    color: Colors.white,
    fontSize: 32,
    fontWeight: FontWeight.bold,
    letterSpacing: 1.5,
  ),
);
```

This helps build confidence with custom widgets and widget configuration.

---

## Key Points

* Custom widgets are created by defining classes.
* A custom stateless widget extends `StatelessWidget`.
* Add a `const` constructor with `super.key`.
* Override the `build()` method.
* Return the widget tree from `build()`.
* Move custom widgets into separate files.
* Import files before using classes from them.
* Use `snake_case` for Dart file names.
* Custom widgets improve readability and reusability.

---

## Summary

This practice focused on creating a custom `StyledText` widget.

The styled `Text` widget was extracted from `GradientContainer` and moved into its own file, `styled_text.dart`.

The final custom widget follows the standard Flutter pattern:

```dart
class StyledText extends StatelessWidget {
  const StyledText({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text(...);
  }
}
```

By completing this exercise, you practice the core Flutter workflow for building reusable custom widgets.
