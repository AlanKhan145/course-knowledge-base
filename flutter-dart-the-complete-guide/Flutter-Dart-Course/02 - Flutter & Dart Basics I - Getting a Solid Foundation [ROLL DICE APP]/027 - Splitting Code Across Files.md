# Splitting Code Across Files

## Overview

This lecture explains how to split Dart and Flutter code across multiple files.

As a Flutter project grows, keeping all code inside `main.dart` becomes hard to read and maintain. A common best practice is to move custom widgets and larger pieces of code into separate files.

This keeps each file smaller, easier to understand, and easier to work with.

---

## 1. Why Split Code Across Files?

At first, writing everything in `main.dart` is fine.

However, as the app grows, `main.dart` can become too long.

Example problems:

* Too many classes in one file
* Large widget trees
* Hard-to-read code
* Harder navigation
* Difficult collaboration
* Harder maintenance

Splitting code into separate files helps keep the project organized.

---

## 2. One Main Class Per File

A common Dart and Flutter convention is to keep one main class per file.

For example:

```text id="ew1jop"
GradientContainer class → gradient_container.dart
DiceRoller class        → dice_roller.dart
ScoreCard class         → score_card.dart
```

This makes it easy to find the code you are looking for.

---

## 3. File Naming Convention

Dart file names should use `snake_case`.

That means:

* All lowercase letters
* Words separated by underscores `_`

Good file names:

```text id="03d9vl"
gradient_container.dart
dice_roller.dart
score_card.dart
player_avatar.dart
```

Bad file names:

```text id="m0btt0"
GradientContainer.dart
gradient-container.dart
gradientContainer.dart
```

Technically, some styles may still work in certain situations, but the recommended Dart convention is `snake_case`.

---

## 4. Moving a Custom Widget to a Separate File

Suppose we have a custom widget called `GradientContainer`.

Instead of keeping it inside `main.dart`, we can move it into a new file.

Create a new file inside the `lib` folder:

```text id="9z3cpv"
lib/gradient_container.dart
```

Then move the `GradientContainer` class into that file.

---

## 5. File: `lib/gradient_container.dart`

```dart id="50gjnu"
import 'package:flutter/material.dart';

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

This file now contains the `GradientContainer` widget.

---

## 6. Why Import `material.dart` Again?

After moving the widget into a separate file, you may see errors.

This happens because the new file does not automatically know about Flutter widgets such as:

```text id="sj255x"
StatelessWidget
BuildContext
Widget
Container
BoxDecoration
LinearGradient
Color
Center
Text
TextStyle
```

The import in `main.dart` only applies to `main.dart`.

Every Dart file must import the packages it uses.

So in `gradient_container.dart`, we need:

```dart id="8jskoy"
import 'package:flutter/material.dart';
```

This gives the file access to Flutter's Material widgets and classes.

---

## 7. Dart Files Are Not Connected Automatically

Dart does not automatically scan and connect all files in your project.

If a class is defined in a different file, you must explicitly import that file.

After moving `GradientContainer` into `gradient_container.dart`, `main.dart` no longer knows what `GradientContainer` is.

To fix this, import the file in `main.dart`.

---

## 8. Importing Your Own File

There are two common ways to import project files.

### Option 1: Relative Import

```dart id="u06c67"
import 'gradient_container.dart';
```

This works when the file is in the same folder as `main.dart`.

Example:

```text id="pe7f15"
lib/
├── main.dart
└── gradient_container.dart
```

---

### Option 2: Package Import

```dart id="xsf2dw"
import 'package:your_project_name/gradient_container.dart';
```

Example:

```dart id="85e7r0"
import 'package:basics/gradient_container.dart';
```

The project name is the name defined in your Flutter project's `pubspec.yaml`.

For example, if your project name is `basics`, then the import is:

```dart id="an16jh"
import 'package:basics/gradient_container.dart';
```

---

## 9. File: `lib/main.dart`

```dart id="gab9s0"
import 'package:flutter/material.dart';
import 'package:basics/gradient_container.dart';

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

Now `main.dart` can use the `GradientContainer` class again.

---

## 10. Complete Project Structure

After splitting the code, the project structure may look like this:

```text id="xuthhw"
lib/
├── main.dart
└── gradient_container.dart
```

For larger projects, you may create folders:

```text id="skwbt5"
lib/
├── main.dart
├── widgets/
│   └── gradient_container.dart
└── screens/
    └── home_screen.dart
```

This makes the project easier to navigate as it grows.

---

## 11. Example with a `widgets` Folder

If the file is inside `lib/widgets/`, the package import becomes:

```dart id="cmo0z5"
import 'package:basics/widgets/gradient_container.dart';
```

The file structure:

```text id="by27uq"
lib/
├── main.dart
└── widgets/
    └── gradient_container.dart
```

Then `main.dart` can use:

```dart id="sn7o9k"
const GradientContainer()
```

as long as the file is imported.

---

## 12. Using VS Code Suggestions

When typing an import, VS Code can help with autocomplete.

You can press:

```text id="do3ign"
Ctrl + Space
```

to open suggestions.

The editor may suggest:

* Your project name
* Available folders
* Available Dart files
* Missing imports

This makes importing files easier.

---

## 13. Why This Improves Maintainability

Splitting code into files helps because each file stays focused.

For example:

```text id="dshbpi"
main.dart                 → app entry point
gradient_container.dart   → gradient background widget
dice_roller.dart          → dice rolling UI
home_screen.dart          → home screen layout
```

Each file has a clear responsibility.

This makes the project easier to read and maintain.

---

## 14. Collaboration Benefits

Splitting code across files also helps when multiple developers work on the same project.

For example:

```text id="f3jxj9"
Developer A works on dice_roller.dart
Developer B works on home_screen.dart
Developer C works on score_card.dart
```

This reduces conflicts and makes teamwork easier.

---

## 15. Before Splitting Code

Everything is inside `main.dart`:

```text id="iv7ynx"
lib/
└── main.dart
```

This is okay for very small apps.

But as the app grows, `main.dart` becomes too large.

---

## 16. After Splitting Code

The code is organized into multiple files:

```text id="5ts9pi"
lib/
├── main.dart
├── gradient_container.dart
└── dice_roller.dart
```

Now each file is easier to understand.

---

## 17. Important Rule

Every Dart file must import what it uses.

If a file uses Flutter widgets, add:

```dart id="sw41np"
import 'package:flutter/material.dart';
```

If a file uses a custom class from another file, import that file:

```dart id="gsn1rf"
import 'package:your_project_name/gradient_container.dart';
```

or:

```dart id="u1pt51"
import 'gradient_container.dart';
```

---

## 18. Common Flutter Folder Structure

A common Flutter folder structure looks like this:

```text id="yu7y9w"
lib/
├── main.dart
├── screens/
│   ├── home_screen.dart
│   └── settings_screen.dart
├── widgets/
│   ├── gradient_container.dart
│   ├── dice_roller.dart
│   └── score_card.dart
└── models/
    └── dice.dart
```

Typical folder purposes:

```text id="yg4pb7"
screens/ → full app screens or pages
widgets/ → reusable UI components
models/  → data classes
services/ → API, storage, or business logic
```

---

## 19. Code Example: `dice_roller.dart`

```dart id="kji5um"
// File: lib/dice_roller.dart

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
        TextButton(
          onPressed: () {},
          child: const Text('Roll Dice'),
        ),
      ],
    );
  }
}
```

---

## 20. Code Example: `main.dart`

```dart id="jv1wj1"
// File: lib/main.dart

import 'package:flutter/material.dart';
import 'package:basics/dice_roller.dart';

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
          child: DiceRoller(),
        ),
      ),
    );
  }
}
```

---

## Key Points

* Large Flutter projects should be split across multiple files.
* Keeping everything in `main.dart` makes code hard to maintain.
* Dart files should use `snake_case` names.
* Common convention: one main class per file.
* Every file must import the packages or files it uses.
* `import 'package:flutter/material.dart';` is needed in files that use Flutter Material widgets.
* Dart does not automatically connect files.
* Use imports to connect files manually.
* You can use relative imports or package imports.
* Splitting files improves readability, maintainability, and collaboration.

---

## Summary

Splitting Flutter code across multiple files is an important best practice.

Instead of keeping every widget class inside `main.dart`, you can move custom widgets into their own files, such as `gradient_container.dart` or `dice_roller.dart`.

Each file must import the packages and project files it needs. For Flutter widgets, add:

```dart id="8zn74f"
import 'package:flutter/material.dart';
```

To use a custom widget from another file, import that file in `main.dart`.

This keeps your Flutter project clean, organized, and easier to maintain as it grows.
