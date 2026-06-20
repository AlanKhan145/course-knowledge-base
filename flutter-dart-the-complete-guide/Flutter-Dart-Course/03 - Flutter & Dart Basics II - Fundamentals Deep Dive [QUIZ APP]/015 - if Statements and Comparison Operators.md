# `if` Statements and Comparison Operators

## Overview

This lecture reinforces how `if` statements and comparison operators work together in Dart.

When using an `if` statement or a ternary expression, Dart needs a Boolean value: either `true` or `false`.

In real applications, you usually do not hardcode `true` or `false`. Instead, you create Boolean results by comparing values.

In the Quiz App, comparison operators are useful for checking whether an answer is correct, whether there are more questions left, and whether the quiz has ended.

---

## Key Points

* `if` statements require a Boolean condition.
* Ternary expressions also require a Boolean condition.
* Comparison operators produce Boolean values.
* The equality operator `==` checks whether two values are equal.
* The assignment operator `=` assigns a value to a variable.
* These two operators must not be confused.
* Dart supports comparison operators such as `==`, `!=`, `<`, `>`, `<=`, and `>=`.
* Logical operators such as `&&`, `||`, and `!` can be used to combine or invert conditions.

---

## Boolean Conditions

An `if` statement needs a condition that evaluates to `true` or `false`.

```dart id="vzr36b"
if (true) {
  // Do something
}
```

A ternary expression also needs a Boolean condition.

```dart id="kymfkj"
true ? 'this' : 'that';
```

However, hardcoding `true` or `false` is usually not useful.

Instead, Boolean values are typically produced by comparing values.

---

## Comparing Values

Example:

```dart id="0i8a5r"
if (randomNumber == 5) {
  print('The number is 5');
}
```

The expression:

```dart id="4at9h5"
randomNumber == 5
```

checks whether `randomNumber` is equal to `5`.

If it is equal, the result is `true`.

If it is not equal, the result is `false`.

---

## Assignment Operator vs Equality Operator

### Assignment Operator: `=`

A single equals sign assigns a value.

```dart id="o30c42"
var userName = 'Max';
```

This stores the value `'Max'` in the variable `userName`.

---

### Equality Operator: `==`

A double equals sign compares two values.

```dart id="qbcz4k"
if (userName == 'Max') {
  print('Hello Max!');
}
```

This checks whether `userName` is equal to `'Max'`.

---

## Comparison Operators

Dart supports several comparison operators.

| Operator | Meaning                  | Example             |
| -------- | ------------------------ | ------------------- |
| `==`     | Equal to                 | `randomNumber == 5` |
| `!=`     | Not equal to             | `randomNumber != 5` |
| `>`      | Greater than             | `randomNumber > 5`  |
| `>=`     | Greater than or equal to | `randomNumber >= 5` |
| `<`      | Less than                | `randomNumber < 5`  |
| `<=`     | Less than or equal to    | `randomNumber <= 5` |

Each comparison returns a Boolean value.

---

## Examples

### Equal To

```dart id="510s6h"
if (randomNumber == 5) {
  print('The number is exactly 5');
}
```

---

### Not Equal To

```dart id="gzwaiq"
if (randomNumber != 5) {
  print('The number is not 5');
}
```

---

### Greater Than

```dart id="a0bnub"
if (randomNumber > 5) {
  print('The number is greater than 5');
}
```

---

### Greater Than or Equal To

```dart id="rqff52"
if (randomNumber >= 5) {
  print('The number is 5 or greater');
}
```

---

### Less Than

```dart id="42jqn5"
if (randomNumber < 5) {
  print('The number is less than 5');
}
```

---

### Less Than or Equal To

```dart id="44rf8t"
if (randomNumber <= 5) {
  print('The number is 5 or less');
}
```

---

## Logical Operators

Logical operators allow you to combine or modify Boolean conditions.

| Operator | Meaning | Description                  |    |                                     |
| -------- | ------- | ---------------------------- | -- | ----------------------------------- |
| `&&`     | And     | Both conditions must be true |    |                                     |
| `        |         | `                            | Or | At least one condition must be true |
| `!`      | Not     | Inverts a Boolean value      |    |                                     |

---

### `&&` Operator

```dart id="y0w1dq"
if (score > 0 && currentQuestionIndex == questions.length) {
  print('The quiz is finished and the user scored points.');
}
```

This condition is true only if both conditions are true.

---

### `||` Operator

```dart id="3y44k1"
if (score == 0 || quizComplete) {
  print('Show feedback to the user.');
}
```

This condition is true if at least one condition is true.

---

### `!` Operator

```dart id="x1lrz0"
if (!quizComplete) {
  print('The quiz is still running.');
}
```

The `!` operator inverts the Boolean value.

If `quizComplete` is `false`, then `!quizComplete` is `true`.

---

## Using Comparison Operators in the Quiz App

In the Quiz App, comparison operators help determine whether the selected answer is correct.

```dart id="7g98fv"
void chooseAnswer(String answer) {
  final correctAnswer = questions[currentQuestionIndex].answers[0];

  if (answer == correctAnswer) {
    userAnswers.add(answer);
    print('Correct answer!');
  } else {
    userAnswers.add(answer);
    print('Wrong answer.');
  }
}
```

The condition:

```dart id="jut7u8"
answer == correctAnswer
```

checks whether the selected answer matches the correct answer.

---

## Checking Whether the Quiz Is Finished

Lists in Dart are zero-based.

This means the first item has index `0`.

If a list has 5 items, the last valid index is `4`.

That is why we use:

```dart id="jrebu3"
questions.length - 1
```

to get the last valid question index.

Example:

```dart id="j7i7my"
if (currentQuestionIndex < questions.length - 1) {
  setState(() {
    currentQuestionIndex++;
  });
} else {
  setState(() {
    quizComplete = true;
  });
}
```

This means:

```text id="5f4my3"
If there are more questions left,
move to the next question.

Otherwise,
mark the quiz as complete.
```

---

## Complete Code Example

```dart id="73v552"
void chooseAnswer(String answer) {
  final correctAnswer = questions[currentQuestionIndex].answers[0];

  if (answer == correctAnswer) {
    userAnswers.add(answer);
    print('Correct answer!');
  } else {
    userAnswers.add(answer);
    print('Wrong answer.');
  }

  if (currentQuestionIndex < questions.length - 1) {
    setState(() {
      currentQuestionIndex++;
    });
  } else {
    setState(() {
      quizComplete = true;
    });
  }

  if (userAnswers.length == questions.length && quizComplete) {
    print('All questions have been answered.');
  }
}
```

---

## String Comparison in Dart

In Dart, comparing strings with `==` works as expected.

```dart id="k6k2lu"
final name = 'Max';

if (name == 'Max') {
  print('Hello Max!');
}
```

Dart checks whether the string values are equal.

This is different from some languages, such as Java, where `==` checks whether two object references are the same.

---

## Best Practice

Build conditions step by step.

Instead of writing a complex condition immediately, start with a simple comparison.

```dart id="srxmmy"
if (answer == correctAnswer) {
  print('Correct!');
}
```

Then add more logic only when needed.

```dart id="u65jhu"
if (answer == correctAnswer && !quizComplete) {
  print('Correct answer during active quiz!');
}
```

This makes the code easier to test and debug.

---

## Summary

`if` statements and comparison operators are essential for writing decision-making logic in Dart.

Comparison operators create Boolean values, and `if` statements use those Boolean values to decide which code should run.

In the Quiz App, these concepts are used to check correct answers, move between questions, and determine when the quiz is complete.

Understanding these operators helps you build clear, reliable, and dynamic Flutter app logic.
