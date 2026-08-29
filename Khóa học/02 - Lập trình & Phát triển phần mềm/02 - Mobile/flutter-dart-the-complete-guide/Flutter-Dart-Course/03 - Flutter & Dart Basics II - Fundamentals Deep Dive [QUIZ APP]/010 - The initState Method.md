# The `initState` Method

## Overview

This lecture introduces the `initState()` method, which is part of the lifecycle of a `StatefulWidget`.

The method is used for one-time initialization logic that should run when the state object is created. In the Quiz App, `initState()` is needed because the initial screen depends on the `switchScreen` method, and that method cannot safely be referenced during direct variable initialization.

## Key Points

* `initState()` is a lifecycle method provided by Flutter’s `State` class.
* It runs once when the `State` object is created.
* It runs before the first `build()` method call.
* It is useful for one-time initialization logic.
* You can reference class methods and properties inside `initState()`.
* Always call `super.initState()` inside the method.
* You do not need to call `setState()` inside `initState()` for initial setup.
* If a variable is initialized later inside `initState()`, it may need to be nullable.
* `initState()` helps avoid initialization errors when a field depends on an instance method.

## The Problem

In the previous implementation, the active screen was initialized like this:

```dart id="ac8q0m"
Widget activeScreen = StartScreen(switchScreen);
```

This causes an error because `switchScreen` is being referenced while the class object is still being created.

At that point, the method may not be safely available yet.

The solution is to initialize `activeScreen` inside `initState()` instead.

## Why Direct Initialization Does Not Work

This does not work:

```dart id="n6l99m"
Widget activeScreen = StartScreen(switchScreen);
```

The problem is that `activeScreen` is initialized during object creation.

The `switchScreen` method also belongs to the same object, so referencing it during field initialization happens too early.

To fix this, initialization must be delayed until after the state object has been created.

That is exactly what `initState()` is for.

## What Is `initState()`?

`initState()` is a method that Flutter automatically calls once when a state object is created.

It runs before the first `build()` call.

```dart id="ggrnd1"
@override
void initState() {
  super.initState();

  // One-time initialization logic here
}
```

## Why Call `super.initState()`?

```dart id="lcp1gs"
super.initState();
```

This calls the original `initState()` method from Flutter’s parent `State` class.

It allows Flutter to perform its own internal setup.

You should keep this call whenever you override `initState()`.

## Initializing the Active Screen

Because `activeScreen` is assigned inside `initState()`, it starts without a value.

Therefore, it should be declared as nullable:

```dart id="60kiu1"
Widget? activeScreen;
```

The question mark means the variable can temporarily be `null`.

Then, inside `initState()`, assign the starting screen:

```dart id="wddbej"
@override
void initState() {
  super.initState();
  activeScreen = StartScreen(switchScreen);
}
```

Now `switchScreen` can be referenced safely because the state object has already been created.

## No `setState()` Needed in `initState()`

You should not call `setState()` here:

```dart id="5z4sca"
@override
void initState() {
  super.initState();

  setState(() {
    activeScreen = StartScreen(switchScreen);
  });
}
```

This is unnecessary because `initState()` runs before the first `build()` call.

The UI has not been built yet, so there is no need to trigger another rebuild.

Correct version:

```dart id="czgwr0"
@override
void initState() {
  super.initState();
  activeScreen = StartScreen(switchScreen);
}
```

## Complete Example

```dart id="gl5q9w"
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
  Widget? activeScreen;

  @override
  void initState() {
    super.initState();
    activeScreen = StartScreen(switchScreen);
  }

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

## What Happens Step by Step?

1. Flutter creates the `_QuizState` object.
2. `activeScreen` is initially `null`.
3. Flutter calls `initState()`.
4. Inside `initState()`, `activeScreen` is set to `StartScreen(switchScreen)`.
5. Flutter calls `build()`.
6. The `StartScreen` is displayed.
7. When the button is pressed, `switchScreen()` runs.
8. `setState()` updates `activeScreen` to `QuestionsScreen`.
9. Flutter rebuilds the UI.
10. The `QuestionsScreen` is displayed.

## Example Result

Before pressing the button:

```text id="fmz1zm"
StartScreen is shown.
```

After pressing the button:

```text id="gw6g0e"
QuestionsScreen is shown.
```

This proves that the state was successfully lifted up and updated.

## When Should You Use `initState()`?

Use `initState()` for logic that should run only once when the widget is first created.

Common use cases include:

* Initializing state based on widget properties
* Setting up controllers
* Starting animations
* Preparing initial values
* Registering listeners
* Loading initial data
* Running setup logic before the first UI render

## When Not to Use `initState()`

Do not use `initState()` for values that can be assigned directly.

For example, this does not need `initState()`:

```dart id="hwdenv"
var currentQuestionIndex = 0;
```

This can be initialized directly because it does not depend on any method, widget property, or special setup logic.

## Another Example

```dart id="5m4gix"
class _QuestionsScreenState extends State<QuestionsScreen> {
  List<String> shuffledAnswers = [];
  int currentQuestionIndex = 0;

  @override
  void initState() {
    super.initState();

    shuffledAnswers = List.of(
      questions[currentQuestionIndex].answers,
    );

    shuffledAnswers.shuffle();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(questions[currentQuestionIndex].text),
        // Answer buttons will be added here
      ],
    );
  }
}
```

In this example, `initState()` is used to prepare a shuffled list of answers once when the screen is created.

## Notes

`initState()` is an important part of the Flutter widget lifecycle.

It is called once before the first `build()` execution, which makes it the right place for setup logic that should not run again every time the UI rebuilds.

However, keep initialization logic simple. If you need to perform asynchronous work, it is often better to use a `Future`, `FutureBuilder`, or another appropriate state-management approach.

## Summary

The `initState()` method provides a safe place for one-time initialization logic in a `StatefulWidget`.

In the Quiz App, it solves the problem of initializing `activeScreen` with `StartScreen(switchScreen)`, because `switchScreen` cannot be referenced safely during field initialization.

By assigning the initial screen inside `initState()`, the app can correctly show the start screen first and then switch to the questions screen when the button is pressed.
