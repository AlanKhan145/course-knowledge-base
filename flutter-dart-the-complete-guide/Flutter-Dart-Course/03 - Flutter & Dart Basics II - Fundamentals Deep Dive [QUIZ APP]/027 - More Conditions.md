# More Conditions

## Overview

This lecture expands on conditional logic in Dart and applies it to the Quiz App.

At this point, the app stores selected answers, but it still needs to stop showing questions once all questions have been answered. Without this check, the app will continue increasing the question index and eventually try to access a question that does not exist.

To prevent that error, we can compare the number of selected answers with the number of available questions. When both numbers are equal, the quiz is complete.

---

## Goal

The goal is to detect when the user has answered all questions.

When all questions are answered, the app should stop showing the questions screen.

For now, the app will temporarily return to the start screen. Later, this logic will be used to show the results screen.

---

## Key Points

* Conditions help control app flow.
* `list.length` returns the number of items in a list.
* You can compare two list lengths to check whether all items have been processed.
* `list.isEmpty` checks whether a list has no items.
* `list.isNotEmpty` checks whether a list has at least one item.
* `&&` means all conditions must be true.
* `||` means at least one condition must be true.
* `!` negates a Boolean value.
* `return` can be used to exit a function early.
* State should be reset if the quiz can be restarted.

---

## The Problem

The app stores selected answers in a list.

```dart id="hh3m8b"
selectedAnswers.add(answer);
```

One answer is added for every question.

Initially, the list is empty.

```dart id="n72kk4"
[]
```

After the first question:

```dart id="6732aq"
['Widgets']
```

After the second question:

```dart id="z6iih1"
['Widgets', 'By combining widgets in code']
```

Eventually, the number of selected answers becomes equal to the number of questions.

At that point, the quiz should stop.

---

## Importing the Questions List

To compare the number of selected answers with the number of questions, the `Quiz` widget must know about the `questions` list.

In `quiz.dart`, import the questions file:

```dart id="z78z91"
import 'package:adv_basics/data/questions.dart';
```

Now the `questions` list is available in `quiz.dart`.

---

## Checking If All Questions Were Answered

Inside the `chooseAnswer` method, compare:

```dart id="020w1u"
selectedAnswers.length
```

with:

```dart id="ksdtkw"
questions.length
```

Example:

```dart id="w5r85w"
if (selectedAnswers.length == questions.length) {
  // All questions have been answered
}
```

If both values are equal, the user has answered every question.

---

## Updating the Active Screen

For now, when the quiz is complete, we return to the start screen.

```dart id="8sxqps"
if (selectedAnswers.length == questions.length) {
  setState(() {
    activeScreen = 'start-screen';
  });
}
```

This prevents the app from trying to load another question that does not exist.

---

## Temporary Code Example

```dart id="m6edsy"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      activeScreen = 'start-screen';
    });
  }
}
```

This works the first time the quiz is completed.

However, there is still a problem.

---

## The Restart Problem

If the user starts the quiz again, the app may crash.

Why?

Because `selectedAnswers` still contains the answers from the previous quiz attempt.

For example, if the quiz has six questions, after one full run:

```dart id="sgwz2b"
selectedAnswers.length == 6
```

If the user starts again and answers one more question:

```dart id="n4xg25"
selectedAnswers.length == 7
```

Now this condition will not be true anymore:

```dart id="csg247"
selectedAnswers.length == questions.length
```

because:

```text id="hu7rph"
7 != 6
```

So the app will not switch screens at the right time.

---

## Resetting the Selected Answers

To fix this, reset the selected answers when the quiz ends.

One way is to reassign the list to an empty list.

```dart id="gx17p7"
selectedAnswers = [];
```

To allow reassignment, the variable cannot be `final`.

Instead of:

```dart id="eoa4l6"
final List<String> selectedAnswers = [];
```

use:

```dart id="1b87nh"
List<String> selectedAnswers = [];
```

Now the list can be reassigned.

---

## Updated Code Example

```dart id="r6x2o0"
List<String> selectedAnswers = [];

void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      selectedAnswers = [];
      activeScreen = 'start-screen';
    });
  }
}
```

This allows the quiz to restart without immediately causing an error.

---

## Alternative: Keeping `final`

Another option is to keep the list as `final` and clear its contents instead of reassigning it.

```dart id="g98ez6"
final List<String> selectedAnswers = [];

void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      selectedAnswers.clear();
      activeScreen = 'start-screen';
    });
  }
}
```

This works because `clear()` mutates the existing list object instead of assigning a new list.

Both approaches can work.

The course approach uses reassignment, so `final` is removed.

---

## Full Example in `quiz.dart`

```dart id="57bam6"
import 'package:flutter/material.dart';

import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/questions_screen.dart';
import 'package:adv_basics/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  List<String> selectedAnswers = [];

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    if (selectedAnswers.length == questions.length) {
      setState(() {
        selectedAnswers = [];
        activeScreen = 'start-screen';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(
      onStartQuiz: switchScreen,
    );

    if (activeScreen == 'questions-screen') {
      screenWidget = QuestionsScreen(
        onSelectAnswer: chooseAnswer,
      );
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          child: screenWidget,
        ),
      ),
    );
  }
}
```

---

## Why This Prevents the Error

The questions screen uses the current question index to access the questions list.

```dart id="94omrj"
questions[currentQuestionIndex]
```

If the index becomes too large, the app throws an error.

By switching away from the questions screen when all questions are answered, the app avoids trying to access a non-existing question.

---

## `isEmpty` and `isNotEmpty`

Dart provides convenient properties for checking whether a list is empty.

Instead of writing:

```dart id="x767yi"
if (selectedAnswers.length == 0) {
  print('No answers selected');
}
```

you can write:

```dart id="0zjsqk"
if (selectedAnswers.isEmpty) {
  print('No answers selected');
}
```

To check whether the list has at least one item:

```dart id="tcn02i"
if (selectedAnswers.isNotEmpty) {
  print('At least one answer selected');
}
```

This is more readable and more idiomatic Dart.

---

## Combining Conditions with `&&`

The `&&` operator means both conditions must be true.

```dart id="nhshqg"
if (selectedAnswers.isNotEmpty && selectedAnswers.length < questions.length) {
  print('Quiz is in progress');
}
```

This condition is true only if:

```text id="vkmhvj"
selectedAnswers is not empty
AND
selectedAnswers.length is less than questions.length
```

---

## Combining Conditions with `||`

The `||` operator means at least one condition must be true.

```dart id="6dypjw"
if (selectedAnswers.isEmpty || activeScreen == 'start-screen') {
  print('Quiz has not started yet');
}
```

This condition is true if either condition is true.

---

## Negating Conditions with `!`

The `!` operator inverts a Boolean value.

```dart id="tv33m5"
final quizComplete = selectedAnswers.length == questions.length;

if (!quizComplete) {
  print('Quiz is not complete yet');
}
```

If `quizComplete` is `false`, then `!quizComplete` is `true`.

---

## Short-Circuit Evaluation

Dart uses short-circuit evaluation.

For `&&`, Dart stops checking as soon as one condition is false.

```dart id="4mzy6m"
if (selectedAnswers.isNotEmpty && selectedAnswers[0] == 'Widgets') {
  print('The first selected answer was Widgets');
}
```

This is safe because `selectedAnswers[0]` is only checked if the list is not empty.

For `||`, Dart stops checking as soon as one condition is true.

```dart id="aw2uaw"
if (selectedAnswers.isEmpty || selectedAnswers[0] == 'Widgets') {
  print('No answers yet or first answer is Widgets');
}
```

---

## Checking List Membership with `contains`

The `contains()` method checks whether a list includes a specific value.

```dart id="1nx3rj"
if (selectedAnswers.contains('Widgets')) {
  print('The user selected Widgets at least once');
}
```

This can be useful when checking whether a certain answer was selected.

---

## Early Return

A `return` statement can exit a function early.

This is useful when a condition is complete and no more code should run.

```dart id="gma27f"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      activeScreen = 'start-screen';
    });

    return;
  }

  print('Quiz is still running');
}
```

In a `void` function, `return;` exits the function without returning a value.

---

## Future Version: Showing the Results Screen

Returning to the start screen is only temporary.

Later, when the results screen exists, the logic will look more like this:

```dart id="i9d7a4"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      activeScreen = 'results-screen';
    });
  }
}
```

At that point, the selected answers should not be cleared immediately, because the results screen needs them.

---

## Notes

Using `selectedAnswers.length == questions.length` is a simple way to check if the quiz is complete.

This works because exactly one answer is added for every question.

When the quiz is restarted, any old selected answers must be cleared or reset.

Otherwise, the app may have more selected answers than questions, and the completion condition will no longer work correctly.

---

## Summary

This lecture introduced additional conditional logic for handling quiz completion.

By comparing `selectedAnswers.length` with `questions.length`, the app can detect when all questions have been answered.

When the quiz is complete, the app temporarily returns to the start screen instead of trying to load another question and causing an error.

The lecture also reinforced useful Dart condition tools such as `isEmpty`, `isNotEmpty`, `&&`, `||`, `!`, `contains()`, and early `return`.
