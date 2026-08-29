# Rendering Content Conditionally

## Overview

This lecture explains how to render different widgets based on application state. This is called **conditional rendering**.

In the Quiz App, conditional rendering is needed because the app should first display the `StartScreen`, and after the start button is pressed, it should display the `QuestionsScreen`.

Instead of using navigation immediately, the app can switch between widgets by storing the active screen in state and updating it with `setState()`.

## Key Points

* Conditional rendering means showing different UI content depending on a condition.
* Flutter UIs are controlled by code, so changing the widget returned by `build()` changes what appears on the screen.
* Widgets can be stored in variables because widgets are Dart objects.
* A variable can hold the currently active screen widget.
* `setState()` tells Flutter that state has changed.
* When `setState()` is called, Flutter re-executes the `build()` method.
* Flutter compares the new widget tree with the previous widget tree and updates the UI.
* The variable type may need to be declared as `Widget` instead of using `var`.
* Conditional rendering can be done with:

  * Widget variables
  * `if` statements
  * Ternary expressions
* This approach is useful for simple screen switching before introducing more advanced navigation.

## Why Conditional Rendering Is Needed

The app currently displays the `StartScreen`.

When the user taps the start button, the app should replace the `StartScreen` with the `QuestionsScreen`.

Conceptually, the app needs to switch from this:

```dart id="ah59yq"
child: const StartScreen()
```

To this:

```dart id="k8lcvn"
child: const QuestionsScreen()
```

Since the user interface is created with code, changing the widget in code changes what is shown on the screen.

## Storing a Widget in a Variable

Widgets are objects in Dart, so they can be stored inside variables.

```dart id="30bmkv"
Widget activeScreen = const StartScreen();
```

This variable stores the widget that should currently be displayed.

Later, the value can be changed to another widget:

```dart id="73vo9b"
activeScreen = const QuestionsScreen();
```

## Why Use `Widget` Instead of `var`?

If you write:

```dart id="l2mfcp"
var activeScreen = const StartScreen();
```

Dart infers the type as `StartScreen`.

That means the variable can only store values of type `StartScreen`.

If you later try to assign a `QuestionsScreen`, Dart will show an error because `QuestionsScreen` is a different type.

To fix this, use the more general `Widget` type:

```dart id="b6vxj9"
Widget activeScreen = const StartScreen();
```

Both `StartScreen` and `QuestionsScreen` are widgets, so this variable can store either one.

## Using `setState()` to Switch Screens

To update the screen, create a method that changes the value of `activeScreen`.

```dart id="snhlyu"
void switchScreen() {
  setState(() {
    activeScreen = const QuestionsScreen();
  });
}
```

The `setState()` function tells Flutter that the state has changed and that the UI should be rebuilt.

## What Happens When `setState()` Runs?

When `setState()` is called:

1. The state variable is updated.
2. Flutter re-executes the `build()` method.
3. The new widget tree is created.
4. Flutter compares the new widget tree with the previous one.
5. Flutter updates the rendered UI where needed.

This is why changing `activeScreen` inside `setState()` updates what appears on the screen.

## Using the Active Screen Variable

Once the active screen is stored in a variable, use that variable as the child of the `Container`.

```dart id="9uwqjw"
child: activeScreen,
```

Now the displayed screen depends on the current value stored in `activeScreen`.

## Example: Widget Variable Approach

```dart id="tcb9ni"
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
  Widget activeScreen = const StartScreen();

  void switchScreen() {
    setState(() {
      activeScreen = const QuestionsScreen();
    });
  }

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
          child: activeScreen,
        ),
      ),
    );
  }
}
```

> Replace `advanced_basics` with your actual Flutter project name.

## Alternative: Using a String State Variable

Another common approach is to store the current screen as a string value.

```dart id="aohbw9"
var activeScreen = 'start-screen';
```

Then, inside the `build()` method, decide which widget should be displayed.

```dart id="dkzwnx"
Widget screenWidget = StartScreen(switchScreen);

if (activeScreen == 'questions-screen') {
  screenWidget = const QuestionsScreen();
}
```

This approach is often more flexible because the state value describes which screen is active, rather than directly storing the widget itself.

## Example: Conditional Rendering with `if`

```dart id="dyn68c"
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

## Alternative: Using a Ternary Expression

For simple conditions, a ternary expression can be used.

```dart id="691txz"
final screenWidget = activeScreen == 'start-screen'
    ? StartScreen(switchScreen)
    : const QuestionsScreen();
```

A ternary expression is concise, but it can become harder to read when the condition becomes more complex.

## Ternary Expression Structure

```dart id="g0rcn2"
condition ? widgetIfTrue : widgetIfFalse
```

Example:

```dart id="6whjjo"
activeScreen == 'start-screen'
    ? StartScreen(switchScreen)
    : const QuestionsScreen()
```

This means:

* If `activeScreen` is equal to `'start-screen'`, show `StartScreen`.
* Otherwise, show `QuestionsScreen`.

## Notes

Conditional rendering is a core Flutter concept because the UI is rebuilt based on the current state.

For simple apps, switching between widgets with an `if` statement or ternary expression is enough. For larger apps with many screens, Flutter’s navigation system should be used instead.

At this stage, the `switchScreen()` method exists, but it still needs to be connected to the button in `StartScreen`. That will be handled by lifting state up.

## Summary

This lecture introduces conditional rendering in Flutter. By storing the active screen in a state variable and updating it with `setState()`, the app can dynamically switch between the `StartScreen` and the `QuestionsScreen`.

This pattern shows how Flutter rebuilds the UI when state changes and how different widgets can be displayed based on conditions inside the `build()` method.
