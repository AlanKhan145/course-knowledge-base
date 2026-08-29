# Combining Columns and Rows

## Overview

This lecture explains how to combine `Column` and `Row` widgets to build more complex Flutter layouts.

In the quiz app, the results screen needs to display a summary of all questions. Each summary item should show the question number, the question text, the user’s selected answer, and the correct answer.

To achieve this layout, we combine an overall `Column` with multiple `Row` widgets. Inside each `Row`, we can also place another `Column` to stack text vertically.

This is a common Flutter layout pattern.

## Key Points

* `Column` displays widgets vertically.
* `Row` displays widgets horizontally.
* A `Row` can contain a `Column`.
* A `Column` can contain multiple `Row` widgets.
* Nesting `Column` and `Row` widgets allows you to build complex layouts.
* The quiz results summary uses:

  * one main `Column`,
  * one `Row` per question,
  * one nested `Column` inside each row for the question and answers.
* Map values must still be accessed with keys and type-cast to the correct type.
* If the layout overflows, Flutter shows a visual warning during development.

## Building the Summary Layout

The `QuestionsSummary` widget receives a list of maps.

Each map contains the data for one question:

```dart
{
  'question_index': 0,
  'question': 'What are the main building blocks of Flutter UIs?',
  'correct_answer': 'Widgets',
  'user_answer': 'Components',
}
```

The goal is to transform each map into a row of widgets.

Each row should contain:

1. the question number,
2. the question text,
3. the user’s answer,
4. the correct answer.

## Creating Rows Inside a Column

The main layout starts with a `Column`.

Inside the `Column`, each summary item becomes one `Row`:

```dart
Column(
  children: summaryData.map((data) {
    return Row(
      children: [
        Text(((data['question_index'] as int) + 1).toString()),
      ],
    );
  }).toList(),
)
```

Here, `summaryData.map()` transforms each map into a `Row` widget.

Because `map()` returns an `Iterable`, we call `.toList()` at the end.

## Adding a Nested Column

Next to the question number, we want to display multiple text widgets vertically.

For that, we add a `Column` inside the `Row`.

```dart
Row(
  children: [
    Text(((data['question_index'] as int) + 1).toString()),
    Column(
      children: [
        Text(data['question'] as String),
        const SizedBox(height: 5),
        Text(data['user_answer'] as String),
        Text(data['correct_answer'] as String),
      ],
    ),
  ],
)
```

This creates a horizontal row with two parts:

* the question number on the left,
* the question and answers stacked vertically on the right.

## Why Use a Column Inside a Row?

A `Row` arranges widgets horizontally.

A `Column` arranges widgets vertically.

So when you want something like this:

```txt
1   Question text
    User answer
    Correct answer
```

you need a `Row` for the horizontal layout, and a nested `Column` for the vertical text layout.

The structure looks like this:

```txt
Column
 ├── Row
 │    ├── Question number
 │    └── Column
 │         ├── Question
 │         ├── User answer
 │         └── Correct answer
 │
 ├── Row
 │    ├── Question number
 │    └── Column
 │         ├── Question
 │         ├── User answer
 │         └── Correct answer
```

## Accessing the Question Text

To display the question, access the `question` key:

```dart
Text(data['question'] as String),
```

Because the map is typed as `Map<String, Object>`, Dart does not know that this value is a `String`.

Therefore, we must cast it:

```dart
data['question'] as String
```

## Accessing the User Answer

The user’s selected answer is stored under the `user_answer` key:

```dart
Text(data['user_answer'] as String),
```

Again, type casting is needed because Dart only knows that the value is an `Object`.

## Accessing the Correct Answer

The correct answer is stored under the `correct_answer` key:

```dart
Text(data['correct_answer'] as String),
```

This displays the correct answer below the user’s answer.

## Full `QuestionsSummary` Example

```dart
import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: summaryData.map((data) {
        return Row(
          children: [
            Text(((data['question_index'] as int) + 1).toString()),
            Column(
              children: [
                Text(data['question'] as String),
                const SizedBox(height: 5),
                Text(data['user_answer'] as String),
                Text(data['correct_answer'] as String),
              ],
            ),
          ],
        );
      }).toList(),
    );
  }
}
```

## Using `QuestionsSummary` in the Results Screen

After creating the `QuestionsSummary` widget, it can be used inside the `ResultsScreen`.

First, import the file:

```dart
import 'package:quiz_app/questions_summary.dart';
```

Then replace the placeholder text widget with `QuestionsSummary`:

```dart
QuestionsSummary(getSummaryData()),
```

It is important to call the function:

```dart
getSummaryData()
```

Do not pass the function itself:

```dart
getSummaryData
```

The `QuestionsSummary` widget expects a list of maps, not a function.

So this is correct:

```dart
QuestionsSummary(getSummaryData()),
```

This is incorrect:

```dart
QuestionsSummary(getSummaryData),
```

## Important Bug Fix

At this point, the results screen may still show no summary data.

This can happen if the selected answers are reset too early.

For example, in `quiz.dart`, there may be code like this:

```dart
selectedAnswers = [];
```

If this line runs before the results screen is shown, the app passes an empty list of selected answers to the results screen.

As a result, there is no summary data to display.

For now, this reset should be removed when navigating to the results screen.

The selected answers should only be cleared later when the user restarts the quiz.

## Development Overflow Warning

After displaying the summary list, the layout may look ugly or broken.

Flutter may also show a warning that some widgets are going outside the screen boundaries.

This is normal during development.

It means the layout works logically, but it still needs formatting and styling.

The current structure is correct:

* one overall `Column`,
* multiple `Row` widgets,
* one row per question,
* a question number on the left,
* a nested `Column` with the question and answers on the right.

The styling and layout issues will be fixed next.

## Notes

Combining `Column` and `Row` widgets is one of the most important layout techniques in Flutter.

A simple rule is:

* use `Column` when widgets should be stacked vertically,
* use `Row` when widgets should be placed horizontally,
* nest them when you need a more complex layout.

However, deeply nested layout code can become hard to read. When that happens, it is a good idea to split the UI into smaller custom widgets.

## Summary

This lecture shows how to combine `Column` and `Row` widgets to build the quiz results summary layout.

The main `Column` displays all summary rows vertically. Each `Row` displays the question number and a nested `Column` side by side. The nested `Column` displays the question, the user’s answer, and the correct answer vertically.

This layout works, but it still needs styling and overflow fixes, which will be handled next.
