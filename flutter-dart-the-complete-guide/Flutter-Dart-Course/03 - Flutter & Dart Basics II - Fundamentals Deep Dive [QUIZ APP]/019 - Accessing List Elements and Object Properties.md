# Accessing List Elements and Object Properties

## Overview

This lecture explains how to access data from Dart lists and Dart objects.

In the Quiz App, we already created a list of quiz questions in `questions.dart`. Each question is represented by a `QuizQuestion` object that contains a question text and a list of possible answers.

Now the goal is to use that data inside the `QuestionsScreen` widget so that the real question text and answer options are displayed on the screen.

To do that, we need two important Dart concepts:

1. Accessing list elements with index notation.
2. Accessing object properties with dot notation.

---

## Goal

The goal is to replace placeholder text such as:

```dart id="5eqhh9"
'The question'
```

and:

```dart id="giv2kk"
'Answer 1'
```

with real data from the `questions` list.

---

## Key Points

* Dart lists are zero-based.
* The first item in a list has index `0`.
* List elements are accessed with square bracket notation.
* Object properties are accessed with dot notation.
* Accessing an invalid list index causes a runtime error.
* `list.length` returns the number of items in a list.
* `list.first` accesses the first item.
* `list.last` accesses the last item.
* Dynamic values cannot usually be marked as `const`.

---

## Importing the Questions Data

Before using the questions list, we need to import it into the questions screen file.

```dart id="gp9rl1"
import 'package:adv_basics/data/questions.dart';
```

After adding this import, the `questions` list can be used inside `questions_screen.dart`.

---

## Accessing List Elements

Dart lists store multiple values in order.

Example:

```dart id="z57mbb"
final hobbies = [
  'Cooking',
  'Reading',
];
```

To access an item from the list, use square bracket notation:

```dart id="9cqt13"
hobbies[0];
```

This accesses the first item:

```dart id="28d849"
'Cooking'
```

To access the second item:

```dart id="sqsuaa"
hobbies[1];
```

This gives:

```dart id="4snk3v"
'Reading'
```

---

## Zero-Based Indexing

Dart lists use zero-based indexing.

This means:

| Index | Item        |
| ----- | ----------- |
| `0`   | First item  |
| `1`   | Second item |
| `2`   | Third item  |
| `3`   | Fourth item |

For example:

```dart id="6zxrju"
final colors = [
  'Red',
  'Green',
  'Blue',
];
```

Accessing items:

```dart id="p7bhwt"
colors[0]; // Red
colors[1]; // Green
colors[2]; // Blue
```

---

## Invalid Indexes

If you try to access an index that does not exist, Dart throws an error.

Example:

```dart id="xrq0ha"
final hobbies = [
  'Cooking',
  'Reading',
];

print(hobbies[2]);
```

This causes an error because the list only has two items.

The valid indices are:

```text id="ysxfd9"
0 and 1
```

Index `2` does not exist.

---

## Accessing the First Question

The `questions` list contains multiple `QuizQuestion` objects.

To access the first question, use index `0`.

```dart id="kzjpow"
final currentQuestion = questions[0];
```

This stores the first question object in a variable called `currentQuestion`.

Because we do not plan to reassign this variable inside the `build()` method, we use `final`.

---

## Accessing Object Properties

Each item in the `questions` list is a `QuizQuestion` object.

The `QuizQuestion` class has properties such as:

```dart id="tzgwaz"
text
```

and:

```dart id="7zze4b"
answers
```

To access properties on an object, use dot notation.

```dart id="cdpq7h"
currentQuestion.text
```

This accesses the question text.

```dart id="e328qb"
currentQuestion.answers
```

This accesses the list of answers.

---

## Example

```dart id="fpk2od"
final currentQuestion = questions[0];

print(currentQuestion.text);
print(currentQuestion.answers);
```

This reads data from the first question object.

---

## Accessing Answers

The `answers` property is also a list.

Therefore, we can use square bracket notation again.

```dart id="6dtnbs"
currentQuestion.answers[0]
```

This accesses the first answer.

```dart id="2t46gm"
currentQuestion.answers[1]
```

This accesses the second answer.

```dart id="m1nn34"
currentQuestion.answers[2]
```

This accesses the third answer.

```dart id="9yc1pc"
currentQuestion.answers[3]
```

This accesses the fourth answer.

---

## Displaying the Question Text

Instead of hardcoding the question text:

```dart id="lm5mqk"
const Text('The question')
```

we can use the real question text:

```dart id="w1ior0"
Text(
  currentQuestion.text,
  style: const TextStyle(
    color: Colors.white,
  ),
)
```

The `Text` widget itself cannot be `const` anymore because `currentQuestion.text` is dynamic.

However, the `TextStyle` can still be `const`.

---

## Displaying the Answers

Instead of hardcoding the answer text:

```dart id="7ozgpa"
AnswerButton(
  answerText: 'Answer 1',
  onTap: () {},
)
```

we can use the actual answers from the current question.

```dart id="ebc9he"
AnswerButton(
  answerText: currentQuestion.answers[0],
  onTap: () {},
)
```

For multiple answers:

```dart id="3bf5mt"
AnswerButton(
  answerText: currentQuestion.answers[0],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[1],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[2],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[3],
  onTap: () {},
),
```

---

## Code Example

```dart id="m1cll1"
import 'package:flutter/material.dart';

import 'package:adv_basics/data/questions.dart';
import 'package:adv_basics/widgets/answer_button.dart';

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
    final currentQuestion = questions[0];

    return SizedBox(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            currentQuestion.text,
            style: const TextStyle(
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          AnswerButton(
            answerText: currentQuestion.answers[0],
            onTap: () {},
          ),
          AnswerButton(
            answerText: currentQuestion.answers[1],
            onTap: () {},
          ),
          AnswerButton(
            answerText: currentQuestion.answers[2],
            onTap: () {},
          ),
          AnswerButton(
            answerText: currentQuestion.answers[3],
            onTap: () {},
          ),
        ],
      ),
    );
  }
}
```

---

## Using `list.length`

The `length` property returns the number of items in a list.

```dart id="y59982"
print(questions.length);
```

If the list has six questions, this prints:

```text id="k6a1cn"
6
```

This is useful when checking whether an index is valid.

```dart id="jsju53"
if (currentQuestionIndex < questions.length) {
  final currentQuestion = questions[currentQuestionIndex];
}
```

---

## Using `first` and `last`

Dart lists also provide convenient getters.

```dart id="s187wv"
questions.first
```

This returns the first question.

```dart id="ynem1b"
questions.last
```

This returns the last question.

You can also access properties directly:

```dart id="l22cqk"
print(questions.first.text);
print(questions.last.text);
```

---

## Safe Access Pattern

When working with a dynamic index, always make sure the index exists before accessing the list.

```dart id="4k4v4e"
if (currentQuestionIndex < questions.length) {
  final question = questions[currentQuestionIndex];
  print(question.text);
}
```

This prevents out-of-bounds errors.

---

## Important Problem with the Current Approach

The current solution works, but it is not ideal.

We manually create one `AnswerButton` for each answer:

```dart id="197x76"
AnswerButton(
  answerText: currentQuestion.answers[0],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[1],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[2],
  onTap: () {},
),
AnswerButton(
  answerText: currentQuestion.answers[3],
  onTap: () {},
),
```

This creates code duplication.

It also assumes that every question has exactly four answers.

That can become a problem if:

* A question has more than four answers.
* A question has fewer than four answers.
* The answer list changes in the future.

A better solution is to generate the answer buttons dynamically from the answers list.

That will be handled in the next step.

---

## Notes

List indices in Dart start at `0`.

A list with four items has valid indices:

```text id="ylydt0"
0, 1, 2, 3
```

The last valid index is always:

```dart id="wh523p"
list.length - 1
```

Object properties are accessed with dot notation.

```dart id="1mnvd9"
currentQuestion.text
currentQuestion.answers
```

List elements are accessed with square bracket notation.

```dart id="ep6b25"
questions[0]
currentQuestion.answers[0]
```

Both concepts are used together when working with data models in Flutter apps.

---

## Summary

This lecture explained how to access list elements and object properties in Dart.

List elements are accessed with square bracket notation, such as `questions[0]`.

Object properties are accessed with dot notation, such as `currentQuestion.text`.

In the Quiz App, these concepts allow us to display the real question text and answer options from the `questions` data list.

The current implementation works, but it still contains duplicated answer button code. The next improvement is to generate answer buttons dynamically from the answers list.
