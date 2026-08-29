# Filtering and Analyzing Lists

## Overview

This lecture explains how to filter and analyze lists in Dart.

In the quiz app, we need to calculate how many questions the user answered correctly. To do that, we compare the user’s selected answers with the correct answers stored in the summary data.

Dart provides useful collection methods such as `where()` and properties such as `length`, which make this kind of list analysis simple and readable.

## Key Points

* `where()` filters a list based on a condition.
* `where()` does not modify the original list.
* `where()` returns an `Iterable`.
* Each item is kept if the callback function returns `true`.
* Each item is removed from the filtered result if the callback returns `false`.
* `.length` can be used to count how many items passed the filter.
* The `==` operator checks whether two values are equal.
* A single `=` assigns a value.
* A double `==` compares two values.
* Dynamic strings cannot be marked as `const`.

## The Goal

On the results screen, we want to display a sentence like this:

```txt id="9yjxzf"
You answered X out of Y questions correctly!
```

Instead of hardcoding `X` and `Y`, we need to calculate them dynamically.

We need two values:

```dart id="i8h11g"
final numTotalQuestions = questions.length;
final numCorrectQuestions = ...
```

`numTotalQuestions` is the total number of quiz questions.

`numCorrectQuestions` is the number of questions answered correctly by the user.

## Getting the Total Number of Questions

The total number of questions can be found by using the `length` property on the `questions` list:

```dart id="wqyud9"
final numTotalQuestions = questions.length;
```

This works because all quiz questions are stored in the `questions` list.

## Reusing the Summary Data

The results screen already has a function called `getSummaryData()`.

This function creates and returns the summary data for the quiz.

Instead of calling this function multiple times inside the `build` method, it is better to call it once and store the result in a variable:

```dart id="p9ynw8"
final summaryData = getSummaryData();
```

Then we can reuse `summaryData` wherever we need it.

This keeps the code cleaner and avoids unnecessary repeated function calls.

## Summary Data Structure

Each item in `summaryData` is a map.

Each map contains data for one question:

```dart id="3h0nii"
{
  'question_index': 0,
  'question': 'What are the main building blocks of Flutter UIs?',
  'correct_answer': 'Widgets',
  'user_answer': 'Components',
}
```

To check whether a question was answered correctly, we compare:

```dart id="63csf3"
data['user_answer']
```

with:

```dart id="ijytu5"
data['correct_answer']
```

If both values are equal, the answer is correct.

## Using `where()` to Filter Correct Answers

The `where()` method filters a list.

It takes a function as an argument.

That function runs for every item in the list.

```dart id="4gzggl"
summaryData.where((data) {
  return data['user_answer'] == data['correct_answer'];
});
```

For every map in `summaryData`, this condition is checked:

```dart id="uud83w"
data['user_answer'] == data['correct_answer']
```

If the condition returns `true`, the item is kept.

If the condition returns `false`, the item is removed from the filtered result.

## Counting Correct Answers

The `where()` method returns an `Iterable`.

To count how many items are in that filtered result, use `.length`:

```dart id="wr7gmo"
final numCorrectQuestions = summaryData.where((data) {
  return data['user_answer'] == data['correct_answer'];
}).length;
```

This gives us the number of correctly answered questions.

## Understanding the Comparison

This line compares the user’s answer with the correct answer:

```dart id="xbqg4o"
data['user_answer'] == data['correct_answer']
```

The double equal sign `==` is used for comparison.

This means:

```txt id="96d2gk"
Are these two values equal?
```

Do not use a single equal sign here:

```dart id="6lp7oq"
data['user_answer'] = data['correct_answer'];
```

That would try to assign a new value, which is not what we want.

## Full Example in `results_screen.dart`

```dart id="oxuqb5"
@override
Widget build(BuildContext context) {
  final summaryData = getSummaryData();

  final numTotalQuestions = questions.length;

  final numCorrectQuestions = summaryData.where((data) {
    return data['user_answer'] == data['correct_answer'];
  }).length;

  return SizedBox(
    width: double.infinity,
    child: Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!',
          ),
          const SizedBox(height: 30),
          QuestionsSummary(summaryData),
        ],
      ),
    ),
  );
}
```

## Using Dynamic Values in a String

Dart allows values to be inserted into a string with string interpolation.

Use the dollar sign syntax:

```dart id="6ixjox"
'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!'
```

This inserts the values of the variables into the string.

For example, if:

```dart id="g6fvsv"
numCorrectQuestions = 4;
numTotalQuestions = 6;
```

The final string becomes:

```txt id="xf58a7"
You answered 4 out of 6 questions correctly!
```

## Removing `const`

Before using dynamic values, the `Text` widget may have been marked as `const`.

For example:

```dart id="we8d1p"
const Text('You answered X out of Y questions correctly!')
```

But once the string contains variables, it is no longer constant.

So `const` must be removed:

```dart id="cx1089"
Text(
  'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!',
)
```

## `where()` vs `map()`

The `where()` method and the `map()` method are both used with lists, but they do different things.

### `map()`

`map()` transforms every item into something else.

```dart id="8uylq6"
final numbers = [1, 2, 3];

final doubled = numbers.map((number) {
  return number * 2;
}).toList();

print(doubled); // [2, 4, 6]
```

### `where()`

`where()` filters items based on a condition.

```dart id="lm8uz6"
final numbers = [1, 2, 3, 4];

final evenNumbers = numbers.where((number) {
  return number % 2 == 0;
}).toList();

print(evenNumbers); // [2, 4]
```

In this lecture, `where()` is used because we want to keep only the correctly answered questions.

## Getting Wrong Answers

You can also use `where()` to get only the wrong answers:

```dart id="hxs7bo"
final wrongAnswers = summaryData.where((data) {
  return data['user_answer'] != data['correct_answer'];
}).toList();
```

The `!=` operator means “not equal”.

This would keep all questions where the user’s answer is different from the correct answer.

## Notes

The `where()` method is useful when you want to filter a list without manually writing a `for` loop.

It is also non-destructive, which means it does not change the original list.

Instead, it creates a filtered result based on the original data.

In this quiz app, `where()` helps calculate the score by filtering the summary data and keeping only the correctly answered questions.

## Summary

This lecture shows how to use Dart’s `where()` method and `length` property to analyze quiz results.

The total number of questions is calculated with:

```dart id="utjd0w"
questions.length
```

The number of correctly answered questions is calculated with:

```dart id="pb5vrk"
summaryData.where((data) {
  return data['user_answer'] == data['correct_answer'];
}).length;
```

These values are then inserted into a dynamic string:

```dart id="libyj9"
'You answered $numCorrectQuestions out of $numTotalQuestions questions correctly!'
```

With this, the results screen can now display meaningful score statistics for the user.
