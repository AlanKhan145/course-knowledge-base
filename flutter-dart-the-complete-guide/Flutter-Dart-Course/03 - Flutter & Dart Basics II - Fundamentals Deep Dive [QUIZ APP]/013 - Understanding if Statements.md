# Understanding `if` Statements

## Overview

This lecture explains how to use `if` statements in Dart and how they differ from ternary expressions.

Ternary expressions are useful when you want to produce a value directly inside a widget tree. However, they can sometimes make widget code harder to read. An alternative approach is to use an `if` statement inside the `build()` method to decide which widget should be rendered.

This pattern is especially useful when conditional logic becomes more complex or when you want to keep the widget tree cleaner and easier to understand.

---

## Key Points

* `if` statements allow you to execute code only when a condition is true.
* The condition inside an `if` statement must evaluate to a `bool`.
* `if` statements are statements, not expressions.
* Unlike ternary expressions, normal `if` statements cannot be used directly as widget argument values.
* `if` statements are better for more complex branching logic.
* Ternary expressions are better for short inline conditional values.
* Dart supports `else if` and `else` for handling multiple branches.
* Curly braces are recommended for clarity, even for single-line `if` statements.

---

## Basic `if` Statement Syntax

```dart id="y8iy6f"
if (condition) {
  // Code runs if condition is true
}
```

Example:

```dart id="wajhhr"
if (activeScreen == 'questions-screen') {
  screenWidget = const QuestionsScreen();
}
```

This means:

```text id="cb1yyg"
If activeScreen is equal to 'questions-screen',
then assign QuestionsScreen to screenWidget.
```

---

## Full `if`, `else if`, and `else` Syntax

```dart id="uozdkt"
if (condition) {
  // Runs if the first condition is true
} else if (anotherCondition) {
  // Runs if the second condition is true
} else {
  // Runs if none of the conditions are true
}
```

Example:

```dart id="in4a6d"
if (score >= 80) {
  print('Great job!');
} else if (score >= 50) {
  print('Good effort!');
} else {
  print('Keep practicing!');
}
```

---

## Using `if` Statements in Flutter Widget Logic

Instead of writing a ternary expression directly inside the widget tree, you can create a local variable inside the `build()` method.

This variable stores the widget that should be displayed.

```dart id="1vaf06"
@override
Widget build(BuildContext context) {
  Widget screenWidget = StartScreen(
    onStartQuiz: switchScreen,
  );

  if (activeScreen == 'questions-screen') {
    screenWidget = const QuestionsScreen();
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

In this example, `screenWidget` is first set to `StartScreen`.

Then, if `activeScreen` is equal to `'questions-screen'`, the value of `screenWidget` is overwritten with `QuestionsScreen`.

Finally, `screenWidget` is passed to the `child` argument.

---

## Complete Code Example

```dart id="f2xxpi"
class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(
      onStartQuiz: switchScreen,
    );

    if (activeScreen == 'questions-screen') {
      screenWidget = const QuestionsScreen();
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Colors.deepPurple,
                Colors.purpleAccent,
              ],
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

## Why Explicitly Use the `Widget` Type?

In the example, the variable is written like this:

```dart id="2y2zyf"
Widget screenWidget = StartScreen(
  onStartQuiz: switchScreen,
);
```

The type is explicitly set to `Widget`.

This is important because `screenWidget` may later store a different widget type, such as `QuestionsScreen`.

Without the explicit `Widget` type, Dart may infer the variable type too narrowly as `StartScreen`, which could cause an error when assigning `QuestionsScreen` later.

---

## Ternary Expression Version

The same logic can also be written with a ternary expression:

```dart id="rxrzbg"
child: activeScreen == 'start-screen'
    ? StartScreen(onStartQuiz: switchScreen)
    : const QuestionsScreen(),
```

This version is shorter, but it places the condition directly inside the widget tree.

That can be fine for simple logic, but it may become harder to read when the widget tree grows.

---

## `if` Statement Version

The `if` statement version separates the logic from the widget tree:

```dart id="fe3y0n"
Widget screenWidget = StartScreen(
  onStartQuiz: switchScreen,
);

if (activeScreen == 'questions-screen') {
  screenWidget = const QuestionsScreen();
}
```

Then the widget tree stays cleaner:

```dart id="fqlfd6"
child: screenWidget,
```

This can make the code easier to read and maintain.

---

## Logical Operators

Dart also supports logical operators for combining conditions.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | And     |   |    |
| `        |         | ` | Or |
| `!`      | Not     |   |    |

Example:

```dart id="yjzw06"
if (score > 0 && currentQuestionIndex == questions.length) {
  print('You finished with a score of $score');
}
```

This condition is true only if both conditions are true:

```text id="0sglvi"
score > 0
AND
currentQuestionIndex == questions.length
```

---

## Example: Quiz Logic

```dart id="gqtpi7"
void answerQuestion(String selectedAnswer) {
  final correctAnswer = questions[currentQuestionIndex].answers[0];

  if (selectedAnswer == correctAnswer) {
    score++;
    print('Correct!');
  } else if (currentQuestionIndex < questions.length - 1) {
    setState(() {
      currentQuestionIndex++;
    });
  } else {
    setState(() {
      quizCompleted = true;
    });
  }
}
```

This code checks:

1. Whether the selected answer is correct.
2. Whether there are more questions left.
3. Whether the quiz is complete.

---

## Important Notes

Dart `if` statements are similar to those in languages like Java, JavaScript, and C-style languages.

However, Dart does not allow truthy or falsy non-Boolean values in conditions.

For example, this is not allowed in Dart:

```dart id="sfd0xp"
// Invalid in Dart
if (username) {
  print('Username exists');
}
```

Instead, the condition must explicitly produce a `bool`:

```dart id="d9f7ro"
if (username.isNotEmpty) {
  print('Username exists');
}
```

---

## When to Use `if` Statements

Use `if` statements when:

* The logic has multiple steps.
* You need more than two branches.
* You want to execute blocks of code conditionally.
* The widget tree becomes hard to read with ternary expressions.
* You need clearer, more maintainable control flow.

---

## When to Use Ternary Expressions

Use ternary expressions when:

* You only need to choose between two values.
* The condition is simple.
* The result is used directly as a widget argument.
* The expression remains readable.

Example:

```dart id="4mfgxd"
backgroundColor: isCorrect ? Colors.green : Colors.red,
```

---

## Summary

`if` statements are a fundamental control flow feature in Dart.

They allow you to execute code conditionally based on Boolean conditions. In Flutter, they are often used inside the `build()` method to prepare values before returning the widget tree.

Compared to ternary expressions, `if` statements are more readable for complex logic. Ternary expressions are shorter and useful for simple inline values.

Both approaches are important, and Flutter developers should understand when to use each one.
