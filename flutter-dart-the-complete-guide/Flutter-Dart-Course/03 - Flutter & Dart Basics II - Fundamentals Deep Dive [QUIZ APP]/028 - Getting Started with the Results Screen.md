# Getting Started with the Results Screen

## Overview

This lecture begins building the results screen for the Quiz App.

So far, the app has:

1. A start screen.
2. A questions screen.
3. A way to move through questions.
4. A way to store selected answers.

Now the app needs a results screen that appears after all questions have been answered.

The results screen should eventually show:

* How many questions were answered correctly.
* A summary of all questions.
* The user’s selected answers.
* The correct answers.
* A button to restart the quiz.

In this lecture, we first create the basic structure of the `ResultsScreen` widget and connect it to the app flow.

---

## Goal

The goal is to show a new screen after the user finishes all quiz questions.

At this stage, the results screen will contain placeholder content.

Later, it will display the actual result summary.

---

## Key Points

* The results screen is created as a new widget.
* It is stored in a new file called `results_screen.dart`.
* The results screen can be a `StatelessWidget`.
* The layout uses a `Column` because multiple widgets are stacked vertically.
* The same layout pattern from the questions screen can be reused.
* The `Quiz` widget decides when to show the results screen.
* The results screen should appear when all questions are answered.

---

## Creating the Results Screen File

Create a new file:

```text id="pzxu58"
lib/results_screen.dart
```

This file will contain the new `ResultsScreen` widget.

---

## Creating the Widget

The results screen does not need to manage internal state at this point.

Therefore, it can be a `StatelessWidget`.

```dart id="7tybay"
import 'package:flutter/material.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Text('Results Screen');
  }
}
```

This is the basic starting point.

---

## Building the Results Screen Layout

The results screen should display multiple elements vertically.

That means a `Column` is a good choice.

The screen should contain:

1. A result summary text.
2. Some spacing.
3. A placeholder for the question summary list.
4. More spacing.
5. A restart button.

---

## Basic Results Screen Structure

```dart id="jv3r2f"
import 'package:flutter/material.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'You answered X out of Y questions correctly!',
            ),
            const SizedBox(height: 30),
            const Text('List of answers and questions'),
            const SizedBox(height: 30),
            TextButton(
              onPressed: () {},
              child: const Text('Restart Quiz!'),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## Why Use `SizedBox`

The `SizedBox` is used to make the results screen take up the full available width.

```dart id="o2vq92"
SizedBox(
  width: double.infinity,
  child: ...
)
```

The value:

```dart id="6vjlsh"
double.infinity
```

means the widget should be as wide as possible.

---

## Why Use `Container`

The `Container` adds margin around the content.

```dart id="o44gv5"
Container(
  margin: const EdgeInsets.all(40),
  child: ...
)
```

This prevents the content from touching the screen edges.

---

## Why Use `Column`

The results screen contains widgets stacked vertically.

```text id="n2xoif"
Summary text
Spacing
Question summary list
Spacing
Restart button
```

A `Column` is the correct layout widget for this.

```dart id="rhqbjw"
Column(
  mainAxisAlignment: MainAxisAlignment.center,
  children: [
    // widgets
  ],
)
```

---

## Centering the Content

To center the content vertically, use:

```dart id="ez2okv"
mainAxisAlignment: MainAxisAlignment.center,
```

This places the results content in the middle of the screen.

---

## Adding Placeholder Text

For now, the result summary is hardcoded.

```dart id="if6zmb"
const Text(
  'You answered X out of Y questions correctly!',
)
```

Later, `X` and `Y` will be replaced with real values.

---

## Adding a Placeholder for the Summary List

The final results screen should show a scrollable list of all questions and answers.

For now, we add placeholder text.

```dart id="ukbtwv"
const Text('List of answers and questions')
```

This will later be replaced with a proper question summary widget.

---

## Adding the Restart Button

A restart button is added at the bottom.

```dart id="yynlaf"
TextButton(
  onPressed: () {},
  child: const Text('Restart Quiz!'),
)
```

For now, `onPressed` uses an empty function.

Later, this button will restart the quiz.

---

## Important `const` Note

The entire `children` list cannot be marked as `const` because `TextButton` has a dynamic `onPressed` function.

This is not allowed:

```dart id="oyw54j"
children: const [
  Text('You answered X out of Y questions correctly!'),
  TextButton(
    onPressed: () {},
    child: Text('Restart Quiz!'),
  ),
]
```

Instead, add `const` only to widgets that can be constant.

```dart id="59m3zk"
children: [
  const Text(
    'You answered X out of Y questions correctly!',
  ),
  const SizedBox(height: 30),
  const Text('List of answers and questions'),
  const SizedBox(height: 30),
  TextButton(
    onPressed: () {},
    child: const Text('Restart Quiz!'),
  ),
]
```

---

## Connecting the Results Screen

After creating `ResultsScreen`, import it in `quiz.dart`.

```dart id="azql4c"
import 'package:adv_basics/results_screen.dart';
```

Then update the logic that controls which screen is displayed.

---

## Updating the Active Screen

Previously, when all questions were answered, the app returned to the start screen.

```dart id="vp20k9"
activeScreen = 'start-screen';
```

Now, it should switch to the results screen.

```dart id="22sirf"
activeScreen = 'results-screen';
```

Example:

```dart id="9vapqj"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      activeScreen = 'results-screen';
    });
  }
}
```

---

## Displaying the Results Screen in `build`

Inside the `build()` method of `_QuizState`, check whether the active screen is the results screen.

```dart id="mnf6yj"
if (activeScreen == 'results-screen') {
  screenWidget = const ResultsScreen();
}
```

Full example:

```dart id="yko2uy"
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

  if (activeScreen == 'results-screen') {
    screenWidget = const ResultsScreen();
  }

  return MaterialApp(
    home: Scaffold(
      body: Container(
        child: screenWidget,
      ),
    ),
  );
}
```

Now, after the last question is answered, the app shows the results screen instead of crashing.

---

## More Complete Version with Selected Answers

Eventually, the results screen needs access to the selected answers.

That means the `ResultsScreen` should receive them through its constructor.

```dart id="ce3qtb"
class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
  });

  final List<String> chosenAnswers;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'You answered X out of Y questions correctly!',
            ),
            const SizedBox(height: 30),
            const Text('List of answers and questions'),
            const SizedBox(height: 30),
            TextButton(
              onPressed: () {},
              child: const Text('Restart Quiz!'),
            ),
          ],
        ),
      ),
    );
  }
}
```

Then pass the answers from `Quiz`.

```dart id="tv5nhf"
if (activeScreen == 'results-screen') {
  screenWidget = ResultsScreen(
    chosenAnswers: selectedAnswers,
  );
}
```

---

## Adding Restart Support

Later, the results screen should also receive a restart function.

```dart id="1gfso9"
class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
    required this.onRestart,
  });

  final List<String> chosenAnswers;
  final void Function() onRestart;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onRestart,
      child: const Text('Restart Quiz!'),
    );
  }
}
```

The parent `Quiz` widget can provide the restart function.

```dart id="s73ep4"
void restartQuiz() {
  setState(() {
    selectedAnswers = [];
    activeScreen = 'questions-screen';
  });
}
```

Then pass it to `ResultsScreen`.

```dart id="yt1qgd"
ResultsScreen(
  chosenAnswers: selectedAnswers,
  onRestart: restartQuiz,
)
```

---

## Calculating the Score

The results screen will eventually calculate how many answers were correct.

A safe way is to compare each chosen answer with the correct answer at the same index.

```dart id="7lqmbt"
final numTotalQuestions = questions.length;

var numCorrectQuestions = 0;

for (var i = 0; i < chosenAnswers.length; i++) {
  if (chosenAnswers[i] == questions[i].answers[0]) {
    numCorrectQuestions++;
  }
}
```

Then display the result:

```dart id="p7p4cn"
Text(
  'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!',
)
```

This will be expanded further when building the full summary list.

---

## Important Note About Resetting Answers

When switching to the results screen, do not clear `selectedAnswers` immediately.

The results screen needs that data.

This would be a problem:

```dart id="gle2rh"
setState(() {
  selectedAnswers = [];
  activeScreen = 'results-screen';
});
```

The results screen would receive an empty list.

Instead, keep the answers until the user restarts the quiz.

```dart id="hdqa30"
setState(() {
  activeScreen = 'results-screen';
});
```

Reset the answers only when restarting.

---

## Temporary vs Final Results Screen

At this stage, the results screen is only a placeholder.

It currently shows:

```text id="nhm6j9"
You answered X out of Y questions correctly!
List of answers and questions
Restart Quiz!
```

Later, this will become:

```text id="04g3tc"
You answered 4 out of 6 questions correctly!

Question summary:
1. Question text
   Your answer
   Correct answer

Restart Quiz!
```

---

## Notes

The results screen can be a `StatelessWidget` because it only displays data passed to it.

It does not need to manage changing internal state.

The parent `Quiz` widget is responsible for:

* Managing the active screen.
* Storing selected answers.
* Passing answers to the results screen.
* Restarting the quiz.

The results screen is responsible for:

* Displaying the result summary.
* Showing the question summary list.
* Providing a restart button.

---

## Summary

This lecture introduced the basic results screen.

A new `ResultsScreen` widget was created in `results_screen.dart`.

The screen uses a `SizedBox`, `Container`, and `Column` to create a centered layout with margin.

The `Quiz` widget was updated so that once all questions are answered, the app switches to the results screen.

For now, the results screen displays placeholder content. In the next steps, it will receive the selected answers, calculate the score, display the question summary, and support restarting the quiz.
