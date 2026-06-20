# Repetition and Exercise: Adding a Stateful Widget

## Overview

This lecture introduces a repetition exercise focused on creating `StatefulWidget`s. The goal is to prepare the Quiz App for screen switching, so that pressing the start button can eventually replace the start screen with a questions screen.

Before implementing the actual screen-switching logic, two new widgets are created:

1. `Quiz`
2. `QuestionsScreen`

Both widgets are created as stateful widgets because they will later need to manage changing data.

## Key Points

* A `StatefulWidget` is used when a widget needs to manage changing data.
* A stateful widget always consists of two classes:

  * The widget class
  * The associated `State` class
* The widget class extends `StatefulWidget`.
* The state class extends `State<WidgetName>`.
* The `createState()` method connects the widget class to its state class.
* The `build()` method is placed inside the state class.
* A leading underscore, such as `_QuizState`, makes a class private to its file.
* The `Quiz` widget will become the main widget that manages the quiz.
* The `QuestionsScreen` widget will later display the quiz questions.
* The `main.dart` file should use the custom `Quiz` widget inside `runApp()`.

## Why Add a Stateful Widget?

The app currently shows the start screen. The next goal is to make the start button work.

When the button is pressed, the app should stop showing the `StartScreen` and instead show a questions screen.

To do that, the app needs a way to manage which screen is currently active. This is exactly the kind of situation where a `StatefulWidget` is useful.

## New Files

Create two new files inside the `lib` folder:

```text id="m3u823"
quiz.dart
questions_screen.dart
```

## File 1: `quiz.dart`

The `Quiz` widget will contain the `MaterialApp` and manage the overall quiz UI.

```dart id="5101d0"
import 'package:flutter/material.dart';

import 'package:advanced_basics/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 78, 13, 151),
                Color.fromARGB(255, 107, 15, 168),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: StartScreen(() {}),
        ),
      ),
    );
  }
}
```

> Replace `advanced_basics` with your actual project name.

## Code Explanation

### The Widget Class

```dart id="s5lbe4"
class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}
```

The `Quiz` class extends `StatefulWidget`.

It does not contain the UI directly. Instead, it creates and connects to a separate state class through the `createState()` method.

### The State Class

```dart id="40j9jr"
class _QuizState extends State<Quiz> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}
```

The `_QuizState` class contains the `build()` method.

This class is where changing data and UI logic will be managed later.

### Why Use an Underscore?

```dart id="bz5xfp"
class _QuizState extends State<Quiz>
```

The leading underscore makes `_QuizState` private to the file.

This is a common Flutter convention because the state class is only meant to be used by its related widget class.

## File 2: `questions_screen.dart`

The `QuestionsScreen` widget will later display the quiz questions.

For now, it only returns a simple text widget as placeholder content.

```dart id="v9885c"
import 'package:flutter/material.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}

class _QuestionsScreenState extends State<QuestionsScreen> {
  @override
  Widget build(BuildContext context) {
    return const Text('Questions Screen');
  }
}
```

## Code Explanation

### The Widget Class

```dart id="g4fb59"
class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionsScreenState();
  }
}
```

This creates the `QuestionsScreen` as a stateful widget.

### The State Class

```dart id="z50rfc"
class _QuestionsScreenState extends State<QuestionsScreen> {
  @override
  Widget build(BuildContext context) {
    return const Text('Questions Screen');
  }
}
```

The state class contains the `build()` method and returns temporary placeholder content.

This will be replaced later with the real question UI.

## Updating `main.dart`

After creating the `Quiz` widget, update `main.dart` so that it uses `Quiz` as the root widget.

```dart id="a3ts8c"
import 'package:flutter/material.dart';

import 'package:advanced_basics/quiz.dart';

void main() {
  runApp(const Quiz());
}
```

Now `main.dart` is much cleaner.

Instead of containing the full app UI directly, it simply starts the app by rendering the custom `Quiz` widget.

## Why Move `MaterialApp` Into `Quiz`?

Previously, `MaterialApp` was inside `main.dart`.

Now, it is moved into the `Quiz` widget because the `Quiz` widget will later manage which screen is shown.

This makes the app structure cleaner and prepares it for conditional rendering.

## Preview: Switching Screens with State

Later, the `Quiz` widget can store the currently active screen in a state variable.

Example:

```dart id="hj75xv"
class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(switchScreen);

    if (activeScreen == 'questions-screen') {
      screenWidget = const QuestionsScreen();
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 78, 13, 151),
                Color.fromARGB(255, 107, 15, 168),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: screenWidget,
        ),
      ),
    );
  }
}
```

This pattern allows the UI to change when the button is pressed.

## Using `setState`

`setState()` tells Flutter that some state data has changed and the UI should be rebuilt.

```dart id="xd61ar"
void switchScreen() {
  setState(() {
    activeScreen = 'questions-screen';
  });
}
```

Inside `setState()`, only update the state value.

Avoid doing heavy work inside `setState()`.

## Final Stateful Screen-Switching Example

```dart id="4dnqmk"
import 'package:flutter/material.dart';

import 'package:advanced_basics/start_screen.dart';
import 'package:advanced_basics/questions_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(switchScreen);

    if (activeScreen == 'questions-screen') {
      screenWidget = const QuestionsScreen();
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 78, 13, 151),
                Color.fromARGB(255, 107, 15, 168),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          child: screenWidget,
        ),
      ),
    );
  }
}
```

## Notes

A `StatefulWidget` is needed when a widget must react to changing data.

In this case, the app needs to know whether it should display the start screen or the questions screen. That information will be stored as state inside the `Quiz` widget.

The widget class itself remains mostly simple. The actual changing data and the `build()` method live inside the state class.

## Summary

This lecture prepares the Quiz App for dynamic screen changes by introducing stateful widgets. Two new widgets are created: `Quiz` and `QuestionsScreen`.

The `Quiz` widget becomes the main app widget and will later manage which screen is displayed. The `QuestionsScreen` widget is added as a placeholder for the future quiz question UI.

This exercise reinforces the structure of `StatefulWidget`, the role of the `State` class, and the importance of `setState()` for updating the UI when data changes.
