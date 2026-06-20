# Accepting and Passing Functions as Values

## Overview

This lecture explains how to pass functions as values in Dart and Flutter. This is an important concept because it allows a child widget to trigger behavior that is defined in a parent widget.

In the Quiz App, the `StartScreen` contains the button, but the state that controls which screen is displayed lives inside the `Quiz` widget. Therefore, the `StartScreen` needs access to a function from the `Quiz` widget so it can trigger the screen change when the button is pressed.

This pattern is part of the concept called **lifting state up**.

## Key Points

* Functions in Dart are values.
* Functions can be stored in variables.
* Functions can be passed as arguments to other functions or constructors.
* A parent widget can pass a function down to a child widget.
* A child widget can call that function when something happens, such as a button press.
* Passing a function reference means using the function name without parentheses.
* Adding parentheses calls the function immediately.
* Function type syntax can describe what kind of function is expected.
* `void Function()` means a function that:

  * Takes no arguments
  * Returns nothing
* This callback pattern allows child widgets to trigger parent state changes.

## The Problem

The app has two important widgets:

* `StartScreen`
* `QuestionsScreen`

The `StartScreen` contains the `Start Quiz` button.

However, the state that decides which screen is currently displayed is stored in the parent `Quiz` widget.

This means:

* The button is inside the child widget.
* The state-changing logic is inside the parent widget.

To connect them, the parent widget must pass a function down to the child widget.

## What Is Lifting State Up?

**Lifting state up** means moving shared state to the closest common parent widget.

In this app, both `StartScreen` and `QuestionsScreen` are controlled by the `Quiz` widget.

Therefore, the active screen state should be managed inside `Quiz`.

```dart id="1evb8c"
class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }
}
```

The `Quiz` widget owns the state and also owns the function that updates the state.

## Passing a Function Reference

To pass the `switchScreen` function to `StartScreen`, use the function name without parentheses.

```dart id="6czbr3"
StartScreen(switchScreen)
```

This passes a reference to the function.

Do not write this:

```dart id="pfi66v"
StartScreen(switchScreen())
```

That would execute the function immediately while the widget is being built, which is not what we want.

## Function Reference vs Function Call

| Syntax           | Meaning                        |
| ---------------- | ------------------------------ |
| `switchScreen`   | Passes the function itself     |
| `switchScreen()` | Calls the function immediately |

For button callbacks, you usually pass the function reference.

```dart id="oj5cgq"
onPressed: switchScreen
```

## Accepting a Function in a Widget

The `StartScreen` widget must be updated so it can accept a function.

```dart id="964lwa"
class StartScreen extends StatelessWidget {
  const StartScreen(this.startQuiz, {super.key});

  final void Function() startQuiz;

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: startQuiz,
      child: const Text('Start Quiz'),
    );
  }
}
```

## Understanding `void Function()`

```dart id="9rv0h8"
final void Function() startQuiz;
```

This means `startQuiz` stores a function.

The function:

* Takes no parameters
* Returns no value

This matches the `switchScreen` method:

```dart id="fo27rn"
void switchScreen() {
  setState(() {
    activeScreen = 'questions-screen';
  });
}
```

## Constructor Shortcut

This constructor accepts the function and stores it in the `startQuiz` field:

```dart id="jkw2fp"
const StartScreen(this.startQuiz, {super.key});
```

This is a Dart shortcut.

It receives the value passed into the constructor and automatically assigns it to the class field with the same name.

## Connecting the Button

The button can now use the passed function.

```dart id="txpqfa"
OutlinedButton.icon(
  onPressed: startQuiz,
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

When the button is pressed, Flutter executes the function stored in `startQuiz`.

That function is actually the `switchScreen` function from the parent `Quiz` widget.

## Alternative: Anonymous Function

You can also wrap the callback inside an anonymous function.

```dart id="ap0mzt"
OutlinedButton.icon(
  onPressed: () {
    startQuiz();
  },
  style: OutlinedButton.styleFrom(
    foregroundColor: Colors.white,
  ),
  icon: const Icon(Icons.arrow_right_alt),
  label: const Text('Start Quiz'),
)
```

Both versions work.

However, this version is shorter:

```dart id="ib5wr4"
onPressed: startQuiz
```

Use the direct reference when you do not need to pass extra arguments or run additional logic.

## Parent Widget Example

The parent widget owns the state and passes the `switchScreen` function to `StartScreen`.

```dart id="yfpwh7"
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

## Child Widget Example

The child widget accepts the function and connects it to the button.

```dart id="xjv0g1"
import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  const StartScreen(this.startQuiz, {super.key});

  final void Function() startQuiz;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 300,
            color: const Color.fromARGB(150, 255, 255, 255),
          ),
          const SizedBox(height: 80),
          const Text(
            'Learn Flutter the fun way!',
            style: TextStyle(
              color: Colors.white,
              fontSize: 24,
            ),
          ),
          const SizedBox(height: 30),
          OutlinedButton.icon(
            onPressed: startQuiz,
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.white,
            ),
            icon: const Icon(Icons.arrow_right_alt),
            label: const Text('Start Quiz'),
          ),
        ],
      ),
    );
  }
}
```

## Complete `quiz.dart` Example

```dart id="hlhrth"
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

> Replace `advanced_basics` with your actual Flutter project name.

## Common Mistake

Do not call the function while passing it.

Wrong:

```dart id="avtgzu"
StartScreen(switchScreen())
```

Correct:

```dart id="qrhvyr"
StartScreen(switchScreen)
```

Wrong:

```dart id="suv59i"
onPressed: startQuiz()
```

Correct:

```dart id="cx0j22"
onPressed: startQuiz
```

The parentheses should only be used when you want to execute the function immediately.

## Notes

This pattern is very common in Flutter.

A parent widget often manages state, while a child widget displays UI and reacts to user input. To allow the child widget to trigger a state change, the parent passes a callback function down to the child.

This keeps data flow clear:

```text id="dcmshl"
Parent owns state
Parent passes callback to child
Child calls callback
Parent updates state
Flutter rebuilds UI
```

This is a key part of Flutter’s unidirectional data flow.

## Summary

This lecture explains how to pass functions as values in Dart and Flutter. The `Quiz` widget owns the state and defines the `switchScreen` function. This function is passed down to the `StartScreen` widget, where it is connected to the start button.

When the button is pressed, the child widget calls the parent’s function, the state changes, and Flutter rebuilds the UI to show the `QuestionsScreen`.

This callback-based communication pattern is fundamental for building interactive Flutter apps.
