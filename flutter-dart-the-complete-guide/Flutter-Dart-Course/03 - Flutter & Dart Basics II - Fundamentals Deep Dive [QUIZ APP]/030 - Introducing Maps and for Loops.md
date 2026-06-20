# Introducing Maps and `for` Loops

## Overview

This lecture introduces two important Dart features:

1. `Map`
2. `for` loops

In the Quiz App, the results screen needs to combine two pieces of data:

* The original questions from `questions.dart`
* The answers selected by the user

To display a useful result summary, we need to build a new data structure that connects each question with:

* Its index
* The question text
* The correct answer
* The user’s chosen answer

A `Map` is useful for grouping this kind of key-value data, and a `for` loop is useful for generating one summary item per question.

---

## Goal

The goal is to generate summary data for the results screen.

Each summary item should contain:

```text id="46j047"
question index
question text
correct answer
user answer
```

This summary data will later be used to render the results UI.

---

## Key Points

* A `Map` stores key-value pairs.
* Map syntax uses curly braces.
* A colon separates each key from its value.
* Dart maps are generic types.
* `Map<String, Object>` means the keys are strings and the values can be different object types.
* A `for` loop runs a block of code multiple times.
* A traditional `for` loop is useful when you need index access.
* The loop variable is commonly named `i`.
* `i++` increases the loop variable by one after each iteration.
* A list can contain maps, such as `List<Map<String, Object>>`.

---

## Why We Need Summary Data

The results screen receives the selected answers.

```dart id="08leju"
final List<String> chosenAnswers;
```

But selected answers alone are not enough.

To build a proper results screen, we also need the related questions and correct answers.

For each question, we want data like this:

```dart id="jpsdij"
{
  'question_index': 0,
  'question': 'What are the main building blocks of Flutter UIs?',
  'correct_answer': 'Widgets',
  'user_answer': 'Components',
}
```

This kind of structure is a `Map`.

---

## What Is a Map?

A `Map` is a data structure that stores key-value pairs.

Example:

```dart id="oszrt1"
final user = {
  'name': 'Max',
  'age': 30,
};
```

In this map:

```text id="d57i0q"
'name' → 'Max'
'age'  → 30
```

The keys are:

```dart id="zl2xsz"
'name'
'age'
```

The values are:

```dart id="8pj68e"
'Max'
30
```

---

## Map Syntax

A map uses curly braces:

```dart id="no8lyt"
{
  key: value,
}
```

Example:

```dart id="ulgcvp"
final scores = {
  'Alice': 8,
  'Bob': 6,
  'Charlie': 9,
};
```

Here, each name is mapped to a score.

---

## Accessing Values in a Map

You can access values by using square brackets with the key.

```dart id="v4fdrm"
print(scores['Alice']);
```

This prints:

```text id="jpg4tf"
8
```

If the key does not exist, Dart returns `null`.

```dart id="b0ckz8"
print(scores['Unknown']);
```

This returns:

```dart id="he97v5"
null
```

---

## Typing a Map

Maps can use generic types.

```dart id="9wjkp5"
Map<String, int>
```

This means:

```text id="f9r5zw"
String keys
int values
```

Example:

```dart id="gwov9c"
final Map<String, int> scores = {
  'Alice': 8,
  'Bob': 6,
};
```

---

## Using `Object` as the Value Type

For quiz summary data, the values are not all the same type.

Example:

```dart id="31w5zt"
{
  'question_index': 0,
  'question': 'What are the main building blocks of Flutter UIs?',
  'correct_answer': 'Widgets',
  'user_answer': 'Components',
}
```

Here:

* `question_index` is an `int`
* `question` is a `String`
* `correct_answer` is a `String`
* `user_answer` is a `String`

Because the values can have different types, we can use `Object`.

```dart id="togsoz"
Map<String, Object>
```

This means:

```text id="5wa6c9"
String keys
Object values
```

Since all Dart values are objects, `Object` is flexible enough for mixed value types.

---

## A List of Maps

The full summary should contain one map per question.

Therefore, the return type is:

```dart id="3d3lzp"
List<Map<String, Object>>
```

This means:

```text id="a0vud3"
A list that contains maps.
Each map has String keys and Object values.
```

Example:

```dart id="gwokle"
[
  {
    'question_index': 0,
    'question': 'Question 1',
    'correct_answer': 'Answer A',
    'user_answer': 'Answer B',
  },
  {
    'question_index': 1,
    'question': 'Question 2',
    'correct_answer': 'Answer C',
    'user_answer': 'Answer C',
  },
]
```

---

## Creating `getSummaryData()`

Inside `ResultsScreen`, create a method called `getSummaryData`.

```dart id="b9pu41"
List<Map<String, Object>> getSummaryData() {
  final List<Map<String, Object>> summary = [];

  return summary;
}
```

This method returns a list of maps.

At first, the list is empty.

Next, we need to populate it with data.

---

## Why Use a `for` Loop?

To create one summary map for every question, we need to repeat the same logic multiple times.

A `for` loop allows us to run code repeatedly.

For this case, we need the index, because we must access:

```dart id="gqoav1"
questions[i]
```

and:

```dart id="m5fnzj"
chosenAnswers[i]
```

Therefore, a traditional index-based `for` loop is useful.

---

## Basic `for` Loop Syntax

```dart id="y3zoxs"
for (var i = 0; i < list.length; i++) {
  // Code to repeat
}
```

A traditional `for` loop has three parts:

```dart id="0p53iv"
var i = 0;
```

This creates the loop variable.

```dart id="jjzgh6"
i < list.length;
```

This condition controls how long the loop runs.

```dart id="7x9xuq"
i++;
```

This updates the loop variable after every iteration.

---

## Understanding `i++`

The syntax:

```dart id="6gmd8l"
i++;
```

means:

```dart id="tl6kbs"
i = i + 1;
```

It increases `i` by one after every loop iteration.

Example:

```text id="tfsoqu"
First iteration:  i = 0
Second iteration: i = 1
Third iteration:  i = 2
```

---

## Why the Loop Starts at `0`

Dart lists are zero-based.

That means the first item has index `0`.

```dart id="op3k9y"
questions[0]
```

So the loop starts at `0`.

```dart id="2s6136"
for (var i = 0; i < chosenAnswers.length; i++) {
  // ...
}
```

The loop runs as long as `i` is smaller than the number of chosen answers.

---

## Building the Summary List

Inside the loop, we add a map to the summary list.

```dart id="64mbjd"
summary.add({
  'question_index': i,
  'question': questions[i].text,
  'correct_answer': questions[i].answers[0],
  'user_answer': chosenAnswers[i],
});
```

Each map contains data for one question.

---

## Importing the Questions Data

The results screen needs access to the original questions.

Import the questions file:

```dart id="xxfcjx"
import 'package:adv_basics/data/questions.dart';
```

This allows `ResultsScreen` to access:

```dart id="j8rpcd"
questions
```

---

## Complete `getSummaryData()` Method

```dart id="w0gfn0"
List<Map<String, Object>> getSummaryData() {
  final List<Map<String, Object>> summary = [];

  for (var i = 0; i < chosenAnswers.length; i++) {
    summary.add({
      'question_index': i,
      'question': questions[i].text,
      'correct_answer': questions[i].answers[0],
      'user_answer': chosenAnswers[i],
    });
  }

  return summary;
}
```

---

## Complete `ResultsScreen` Example

```dart id="gz3gv3"
import 'package:flutter/material.dart';

import 'package:adv_basics/data/questions.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({
    super.key,
    required this.chosenAnswers,
  });

  final List<String> chosenAnswers;

  List<Map<String, Object>> getSummaryData() {
    final List<Map<String, Object>> summary = [];

    for (var i = 0; i < chosenAnswers.length; i++) {
      summary.add({
        'question_index': i,
        'question': questions[i].text,
        'correct_answer': questions[i].answers[0],
        'user_answer': chosenAnswers[i],
      });
    }

    return summary;
  }

  @override
  Widget build(BuildContext context) {
    final summaryData = getSummaryData();

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
            Text(
              summaryData.toString(),
            ),
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

At this stage, `summaryData.toString()` is only a temporary way to confirm that the data exists.

Later, the summary data will be displayed in a proper UI.

---

## Accessing Correct Answers

The correct answer is stored as the first answer in each question’s answers list.

```dart id="fs1n9r"
questions[i].answers[0]
```

This is why it was important not to shuffle the original answers list.

The app only shuffles a copy of the answers for display.

The original list still keeps the correct answer at index `0`.

---

## Accessing User Answers

The user’s chosen answer is stored in `chosenAnswers`.

```dart id="dlhoqh"
chosenAnswers[i]
```

Because one answer is added for each question, the index can be used to match the selected answer with the correct question.

---

## Traditional `for` Loop vs `for-in` Loop

Dart supports multiple ways to loop over lists.

### Traditional `for` Loop

Use this when you need the index.

```dart id="5jlc3n"
for (var i = 0; i < questions.length; i++) {
  print(questions[i].text);
}
```

This is useful here because we need to access both:

```dart id="ynwbdp"
questions[i]
```

and:

```dart id="b2re96"
chosenAnswers[i]
```

---

### `for-in` Loop

Use this when you only need the item.

```dart id="zml9sg"
for (final question in questions) {
  print(question.text);
}
```

This is simpler, but it does not directly give you the index.

---

## Alternative: Creating a Custom Class

Using a `Map` is flexible, but another clean approach would be to create a custom class.

Example:

```dart id="w2a7de"
class QuestionSummary {
  const QuestionSummary({
    required this.questionIndex,
    required this.question,
    required this.correctAnswer,
    required this.userAnswer,
  });

  final int questionIndex;
  final String question;
  final String correctAnswer;
  final String userAnswer;
}
```

Then the summary data could be typed more strictly.

However, this lecture uses `Map` to introduce Dart’s map data structure.

---

## Important Notes

Inside a map, key-value pairs use a colon.

```dart id="6ph71i"
'question': questions[i].text
```

This is different from assigning a variable, which uses an equals sign.

```dart id="ov5j66"
final question = questions[i].text;
```

A map literal uses curly braces in a place where a value is expected.

```dart id="9ppyo5"
{
  'key': 'value',
}
```

A function body or loop body also uses curly braces, but for a different purpose.

```dart id="y92ym5"
for (var i = 0; i < chosenAnswers.length; i++) {
  // loop body
}
```

---

## Summary

This lecture introduced Dart `Map` values and `for` loops.

A `Map` stores key-value pairs, making it useful for grouping related summary data.

A `for` loop allows the app to iterate over the chosen answers and generate one summary map per question.

The `getSummaryData()` method combines the original questions with the user’s selected answers, preparing the data needed for the results screen UI.
