# Accessing Map Values and Using Type Casting

## Overview

This lecture explains how to access values stored inside a Dart `Map` and how to use type casting when Dart cannot automatically know the exact type of a value.

In the quiz app, the summary data is stored as a list of maps. Each map contains information about one question, such as the question index, the question text, the correct answer, and the user’s selected answer.

Because the map stores different kinds of values, its type is written as `Map<String, Object>`. This means Dart only knows that each value is some kind of object, but it does not know the exact type of each value. Therefore, when reading values from the map, type casting is sometimes required.

## Key Points

* Map values are accessed using square brackets.

* For lists, square brackets use an index.

* For maps, square brackets use a key.

* Example:

  ```dart
  data['question_index']
  ```

* If a map is typed as `Map<String, Object>`, Dart only knows that the value is an `Object`.

* Dart does not automatically remember which specific key stores which specific value type.

* The `as` keyword is used for type casting.

* Type casting tells Dart the actual type of a value.

* A number must be converted to a string before it can be displayed in a `Text` widget.

* The `map()` method transforms one list into another kind of collection.

* The `map()` method returns an `Iterable`, so `.toList()` is needed when a `List<Widget>` is required.

## Creating the `QuestionsSummary` Widget

Instead of putting all the summary UI directly inside the `ResultsScreen`, it is better to split the UI into a separate widget.

This keeps the widget tree smaller, cleaner, and easier to manage.

Create a new file:

```txt
questions_summary.dart
```

Inside this file, create a `QuestionsSummary` widget:

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
          ],
        );
      }).toList(),
    );
  }
}
```

## Why Use a Separate Widget?

The results screen needs to display multiple pieces of information:

* the question number,
* whether the answer was correct,
* the question text,
* the user’s answer,
* the correct answer.

Putting all of this directly inside `ResultsScreen` would make the widget tree large and difficult to read.

Creating a separate `QuestionsSummary` widget makes the code more organized and reusable.

## Accepting Summary Data

The `QuestionsSummary` widget needs to receive the summary data from the `ResultsScreen`.

The data is a list of maps:

```dart
final List<Map<String, Object>> summaryData;
```

Each map represents one question summary.

Example structure:

```dart
{
  'question_index': 0,
  'question': 'What are the main building blocks of Flutter UIs?',
  'correct_answer': 'Widgets',
  'user_answer': 'Components',
}
```

The keys are strings, and the values can be different types.

For example:

* `question_index` is an `int`,
* `question` is a `String`,
* `correct_answer` is a `String`,
* `user_answer` is a `String`.

That is why the map uses this type:

```dart
Map<String, Object>
```

## Mapping Summary Data to Widgets

The `Column` widget expects a list of widgets for its `children` argument.

However, `summaryData` is a list of maps, not a list of widgets.

So we need to transform each map into a widget.

This can be done with the `map()` method:

```dart
children: summaryData.map((data) {
  return Row(
    children: [
      Text(((data['question_index'] as int) + 1).toString()),
    ],
  );
}).toList(),
```

The `map()` method takes each item from the original list and transforms it into something else.

In this case:

```dart
Map<String, Object>
```

is transformed into:

```dart
Row
```

So every map in `summaryData` becomes one `Row` widget.

## Important Note About `map()`

The `map()` method has nothing to do with the `Map` data type.

They just share the same name.

The `map()` method means:

> Transform each item into another item.

For example:

```dart
final numbers = [1, 2, 3];

final doubledNumbers = numbers.map((number) {
  return number * 2;
}).toList();

print(doubledNumbers); // [2, 4, 6]
```

## Why `.toList()` Is Needed

The `map()` method does not return a `List`.

It returns an `Iterable`.

An `Iterable` is similar to a list, but it is not exactly the same.

The `children` argument of `Column` requires a `List<Widget>`, so we must convert the result of `map()` into a list:

```dart
.toList()
```

Full example:

```dart
children: summaryData.map((data) {
  return Row(
    children: [
      Text(((data['question_index'] as int) + 1).toString()),
    ],
  );
}).toList(),
```

## Using the `Row` Widget

The `Row` widget is the horizontal version of the `Column` widget.

A `Column` displays widgets vertically:

```dart
Column(
  children: [
    Text('One'),
    Text('Two'),
  ],
)
```

A `Row` displays widgets horizontally:

```dart
Row(
  children: [
    Text('One'),
    Text('Two'),
  ],
)
```

In the quiz summary screen, each row represents one question summary.

## Accessing Map Values

To access a value in a map, use square brackets with the key:

```dart
data['question_index']
```

This accesses the value stored under the `question_index` key.

For lists, square brackets use an index:

```dart
myList[0]
```

For maps, square brackets use a key:

```dart
myMap['some_key']
```

In this lecture, the available keys are:

```dart
'question_index'
'question'
'correct_answer'
'user_answer'
```

## Why Type Casting Is Needed

The map is typed as:

```dart
Map<String, Object>
```

This means Dart only knows that every value is an `Object`.

Dart does not know that:

```dart
data['question_index']
```

is specifically an `int`.

Therefore, this causes a problem:

```dart
data['question_index'] + 1
```

Dart cannot add `1` to an `Object`, because it does not know that the value is a number.

## Using the `as` Keyword

To fix this, use the `as` keyword to cast the value to an `int`:

```dart
data['question_index'] as int
```

This tells Dart:

> I know this value is an integer.

Now Dart allows mathematical operations:

```dart
(data['question_index'] as int) + 1
```

## Why Add `1`?

List indexes start at `0`.

So the first question has the index:

```dart
0
```

But users expect question numbers to start at `1`.

That is why we add `1`:

```dart
(data['question_index'] as int) + 1
```

This converts:

```txt
0 → 1
1 → 2
2 → 3
```

## Converting the Number to a String

The `Text` widget requires a `String`.

However, this expression returns an `int`:

```dart
(data['question_index'] as int) + 1
```

So we must convert the number to a string:

```dart
((data['question_index'] as int) + 1).toString()
```

Then it can be passed to `Text`:

```dart
Text(((data['question_index'] as int) + 1).toString()),
```

## Understanding the Parentheses

The final expression uses multiple parentheses:

```dart
Text(((data['question_index'] as int) + 1).toString()),
```

Step by step:

```dart
data['question_index']
```

gets the value from the map.

```dart
data['question_index'] as int
```

casts the value to an integer.

```dart
(data['question_index'] as int) + 1
```

adds `1` to the index.

```dart
((data['question_index'] as int) + 1).toString()
```

converts the final number to a string.

## Accessing Other Map Values

Other values can be accessed in the same way.

For example:

```dart
final question = data['question'] as String;
final correctAnswer = data['correct_answer'] as String;
final userAnswer = data['user_answer'] as String;
```

These values are cast to `String` because they are text values.

## Safe Type Checking

Type casting with `as` assumes that the value has the correct type.

If the value has the wrong type at runtime, Dart will throw an error.

A safer approach is to check the type first:

```dart
final value = data['question_index'];

if (value is int) {
  final questionNumber = value + 1;
  print(questionNumber);
}
```

When using `is`, Dart automatically promotes the value to the checked type inside the `if` block.

## Full Example

```dart
import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: summaryData.map((data) {
        final questionIndex = data['question_index'] as int;
        final question = data['question'] as String;
        final correctAnswer = data['correct_answer'] as String;
        final userAnswer = data['user_answer'] as String;

        return Row(
          children: [
            Text((questionIndex + 1).toString()),
            Column(
              children: [
                Text(question),
                Text('Your answer: $userAnswer'),
                Text('Correct answer: $correctAnswer'),
              ],
            ),
          ],
        );
      }).toList(),
    );
  }
}
```

## Notes

Using `Map<String, Object>` is useful when storing mixed data in a simple structure.

However, it also means Dart cannot know the exact type of each value. Because of that, type casting is required when retrieving values.

For larger or more complex apps, a dedicated model class is often a better solution because it gives every field a clear type.

Example:

```dart
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

This avoids repeated type casting and makes the code safer.

## Summary

This lecture shows how to access values from a Dart map and how to use type casting when working with mixed-value maps.

The main correction is that values retrieved from a `Map<String, Object>` are treated as `Object`, so Dart does not automatically know their exact type.

To use the question index as a number, it must be cast to `int`:

```dart
data['question_index'] as int
```

Then it can be increased by `1`, converted to a string, and displayed in a `Text` widget:

```dart
Text(((data['question_index'] as int) + 1).toString()),
```

This is an important technique when working with maps that store different kinds of values.
