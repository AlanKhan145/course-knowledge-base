# Passing Data to the Results Screen

## Overview

This lecture explains how to pass the selected answers from the `Quiz` widget to the `ResultsScreen`.

The app already stores all selected answers in the parent widget state. Once the user answers all questions, the app switches to the results screen. Now the results screen needs access to the selected answers so it can display meaningful result data.

To pass data into a widget, we use constructor parameters.

---

## Goal

The goal is to pass the collected `selectedAnswers` list to the `ResultsScreen`.

This allows the results screen to later show:

* How many questions were answered.
* Which answers the user selected.
* Which answers were correct.
* A full question summary.

---

## Key Points

* Data is passed into widgets through constructor arguments.
* The `ResultsScreen` should receive the selected answers as input.
* The selected answers are stored in the parent `Quiz` widget.
* The results screen needs a `chosenAnswers` property.
* Named parameters make widget constructors easier to read.
* `required` ensures that a value must be provided.
* A widget cannot be `const` if it receives dynamic data.
* Data flows down from parent widgets to child widgets.

---

## Why Pass Data to the Results Screen?

The selected answers are stored in `_QuizState`.

```dart id="l5xc5n"
List<String> selectedAnswers = [];
```

When the quiz is complete, the app shows the results screen.

However, the results screen needs the selected answers in order to calculate and display results.

Therefore, the data must be passed from `Quiz` to `ResultsScreen`.

```text id="h0xqd2"
Quiz State
  selectedAnswers
        ↓
ResultsScreen
  chosenAnswers
```

---

## Adding a Property to `ResultsScreen`

Inside `ResultsScreen`, add a property for the chosen answers.

```dart id="oeqa02"
final List<String> chosenAnswers;
```

This property stores the list of answers selected by the user.

---

## Updating the Constructor

To receive the answers from outside the widget, update the constructor.

```dart id="sx5eeb"
const ResultsScreen({
  super.key,
  required this.chosenAnswers,
});
```

Because `chosenAnswers` is required, every time `ResultsScreen` is created, a value must be passed.

---

## Updated `ResultsScreen`

```dart id="0umb6s"
import 'package:flutter/material.dart';

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
            Text(
              'You selected ${chosenAnswers.length} answers.',
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

At this stage, the screen only displays a simple placeholder using `chosenAnswers.length`.

Later, this data will be used to calculate the actual score.

---

## Passing `selectedAnswers` to `ResultsScreen`

In `quiz.dart`, update the part where the results screen is created.

Before:

```dart id="jkuqcz"
if (activeScreen == 'results-screen') {
  screenWidget = const ResultsScreen();
}
```

After:

```dart id="a8lzj2"
if (activeScreen == 'results-screen') {
  screenWidget = ResultsScreen(
    chosenAnswers: selectedAnswers,
  );
}
```

The `selectedAnswers` list from `_QuizState` is passed to the `chosenAnswers` parameter of `ResultsScreen`.

---

## Why `const` Must Be Removed

This no longer works:

```dart id="1kw0v6"
screenWidget = const ResultsScreen(
  chosenAnswers: selectedAnswers,
);
```

`selectedAnswers` is dynamic state data.

It changes while the app runs.

Therefore, the `ResultsScreen` widget cannot be created with `const`.

Correct:

```dart id="ip3to2"
screenWidget = ResultsScreen(
  chosenAnswers: selectedAnswers,
);
```

---

## Updating the Quiz Completion Logic

The selected answer should be added before checking whether the quiz is complete.

```dart id="woeiiu"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (selectedAnswers.length == questions.length) {
    setState(() {
      activeScreen = 'results-screen';
    });
  }
}
```

This ensures the final answer is included before the results screen is shown.

---

## Important: Do Not Reset Answers Too Early

When switching to the results screen, do not clear `selectedAnswers`.

This would be a problem:

```dart id="cfqczl"
setState(() {
  selectedAnswers = [];
  activeScreen = 'results-screen';
});
```

If the list is cleared before opening the results screen, the results screen receives no answers.

Instead, keep the selected answers until the user restarts the quiz.

```dart id="2ab97k"
setState(() {
  activeScreen = 'results-screen';
});
```

---

## Full Example in `quiz.dart`

```dart id="xsmhd8"
import 'package:flutter/material.dart';

import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/questions_screen.dart';
import 'package:adv_basics/results_screen.dart';
import 'package:adv_basics/start_screen.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  List<String> selectedAnswers = [];

  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    if (selectedAnswers.length == questions.length) {
      setState(() {
        activeScreen = 'results-screen';
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

    if (activeScreen == 'results-screen') {
      screenWidget = ResultsScreen(
        chosenAnswers: selectedAnswers,
      );
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

---

## Adding Restart Support

Later, the results screen should also restart the quiz.

To do that, define a restart function in `_QuizState`.

```dart id="92wvk1"
void restartQuiz() {
  setState(() {
    selectedAnswers = [];
    activeScreen = 'questions-screen';
  });
}
```

Then update `ResultsScreen` to receive this function.

```dart id="snfqr8"
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

And pass it from `Quiz`.

```dart id="owl6ca"
if (activeScreen == 'results-screen') {
  screenWidget = ResultsScreen(
    chosenAnswers: selectedAnswers,
    onRestart: restartQuiz,
  );
}
```

---

## Reassigning vs Clearing the List

This approach creates a new empty list:

```dart id="u1hg6r"
selectedAnswers = [];
```

This approach clears the existing list:

```dart id="msvujj"
selectedAnswers.clear();
```

Both can work depending on the design.

In this app, reassigning to a new list is clear and simple because `selectedAnswers` is declared as a mutable variable:

```dart id="krjzwg"
List<String> selectedAnswers = [];
```

If it were declared as `final`, reassignment would not be allowed.

---

## Data Flow Summary

The data flow looks like this:

```text id="vnduxs"
AnswerButton tapped
        ↓
QuestionsScreen receives selected answer
        ↓
QuestionsScreen calls onSelectAnswer
        ↓
Quiz.chooseAnswer(answer)
        ↓
selectedAnswers.add(answer)
        ↓
Quiz switches to ResultsScreen
        ↓
ResultsScreen receives chosenAnswers
```

---

## Why Named Parameters Are Useful

This constructor call is clear:

```dart id="nnnupz"
ResultsScreen(
  chosenAnswers: selectedAnswers,
)
```

The argument name makes the code easier to understand.

For widgets that receive multiple values, named parameters are usually more readable than positional parameters.

---

## Notes

The parent widget manages both the active screen and the selected answers.

The results screen only receives data and displays it.

This keeps the app structure clean:

* `Quiz` manages state.
* `QuestionsScreen` collects user input.
* `ResultsScreen` displays results.

The completion check must happen after adding the answer so the last answer is included before switching screens.

---

## Summary

This lecture showed how to pass selected answer data to the results screen.

The `ResultsScreen` widget receives a `chosenAnswers` list through a required constructor parameter.

In `quiz.dart`, the `selectedAnswers` state list is passed into `ResultsScreen` when the active screen becomes `results-screen`.

This completes the basic data flow from the questions screen to the results screen and prepares the app for calculating and displaying the user’s final score.
