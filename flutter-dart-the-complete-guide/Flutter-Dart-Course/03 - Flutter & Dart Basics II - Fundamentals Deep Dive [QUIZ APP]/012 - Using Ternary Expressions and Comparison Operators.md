# Using Ternary Expressions and Comparison Operators

## Overview

This lecture introduces Dart’s ternary expression syntax and comparison operators. These tools are useful for writing concise conditional logic, especially inside Flutter widget trees.

In Flutter, you often need to render different widgets depending on the current state. One way to do this is by storing the active widget directly in a variable. Another approach is to store a simple identifier, such as a string, and then use a ternary expression inside the `build()` method to decide which widget should be displayed.

This approach can reduce code and may remove the need for extra lifecycle methods such as `initState()`.

---

## Key Points

* A ternary expression checks a condition and returns one of two values.
* Ternary syntax:

```dart id="3i16pn"
condition ? valueIfTrue : valueIfFalse
```

* The condition must produce a Boolean value: `true` or `false`.
* The `==` operator compares two values for equality.
* A single equals sign `=` assigns a value.
* A double equals sign `==` compares values.
* Ternary expressions are useful inside widget trees because they return a value.
* For complex conditions, use variables or normal `if` statements instead of deeply nested ternaries.

---

## Comparison Operators

Dart supports common comparison operators:

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `<`      | Less than                |
| `>`      | Greater than             |
| `<=`     | Less than or equal to    |
| `>=`     | Greater than or equal to |

Example:

```dart id="yy2ftw"
activeScreen == 'start-screen'
```

This expression checks whether `activeScreen` is equal to `'start-screen'`.

If it is equal, the expression returns `true`.

If it is not equal, the expression returns `false`.

---

## Why Use a Ternary Expression?

Previously, we could store the currently active screen as a widget:

```dart id="4lsder"
Widget? activeScreen;
```

However, this may require `initState()` if the initial widget needs access to methods from the `State` class.

A simpler alternative is to store an identifier instead:

```dart id="gqgl66"
var activeScreen = 'start-screen';
```

Then, inside the `build()` method, we can decide which widget to render based on that identifier.

---

## Code Example

```dart id="gpsv2k"
class _QuizState extends State<Quiz> {
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      activeScreen = 'questions-screen';
    });
  }

  @override
  Widget build(BuildContext context) {
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
          child: activeScreen == 'start-screen'
              ? StartScreen(onStartQuiz: switchScreen)
              : const QuestionsScreen(),
        ),
      ),
    );
  }
}
```

---

## How the Ternary Expression Works

The ternary expression in the example is:

```dart id="hwgdac"
activeScreen == 'start-screen'
    ? StartScreen(onStartQuiz: switchScreen)
    : const QuestionsScreen()
```

It can be read like this:

```text id="xbb3e8"
If activeScreen is equal to 'start-screen',
show StartScreen.

Otherwise,
show QuestionsScreen.
```

The first part is the condition:

```dart id="o7uyvi"
activeScreen == 'start-screen'
```

The value after the question mark is used when the condition is `true`:

```dart id="ev3kmg"
StartScreen(onStartQuiz: switchScreen)
```

The value after the colon is used when the condition is `false`:

```dart id="3awfz3"
const QuestionsScreen()
```

---

## `=` vs `==`

It is important to understand the difference between `=` and `==`.

### Assignment Operator

A single equals sign assigns a value:

```dart id="m13nn6"
activeScreen = 'questions-screen';
```

This changes the value stored in `activeScreen`.

### Equality Operator

A double equals sign compares two values:

```dart id="xjve2p"
activeScreen == 'start-screen'
```

This checks whether the two values are equal and returns either `true` or `false`.

---

## Boolean Values

Comparison expressions return Boolean values.

A Boolean value can only be:

```dart id="djrfgf"
true
```

or:

```dart id="11u79n"
false
```

Boolean values are commonly used to decide whether certain code should run or which value should be selected.

Example:

```dart id="sclk0o"
final isStartScreen = activeScreen == 'start-screen';
```

Here, `isStartScreen` will be `true` if `activeScreen` contains `'start-screen'`.

Otherwise, it will be `false`.

---

## Another Example

Ternary expressions can also be used to set widget styles conditionally.

```dart id="rdjh31"
class AnswerButton extends StatelessWidget {
  const AnswerButton({
    super.key,
    required this.answerText,
    required this.isCorrect,
  });

  final String answerText;
  final bool isCorrect;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        backgroundColor: isCorrect ? Colors.green : Colors.red,
        foregroundColor: Colors.white,
        padding: const EdgeInsets.symmetric(
          vertical: 10,
          horizontal: 40,
        ),
      ),
      child: Text(
        answerText,
        textAlign: answerText.length > 40
            ? TextAlign.center
            : TextAlign.left,
      ),
    );
  }
}
```

In this example:

```dart id="yb87nn"
isCorrect ? Colors.green : Colors.red
```

means:

```text id="n9k080"
If isCorrect is true, use green.
Otherwise, use red.
```

---

## Notes

Ternary expressions are expressions, not statements. This means they produce a value and can be used anywhere a value is expected.

This makes them especially useful inside Flutter widget constructors.

For example:

```dart id="mb9dee"
child: activeScreen == 'start-screen'
    ? StartScreen(onStartQuiz: switchScreen)
    : const QuestionsScreen(),
```

However, ternary expressions should only be used for simple conditions. If the logic becomes too complex, it is better to extract it into a local variable or use a normal `if` statement before returning the widget.

Avoid deeply nested ternary expressions because they make code harder to read and maintain.

---

## Summary

Ternary expressions and comparison operators allow you to write concise conditional logic in Dart.

In Flutter, ternary expressions are especially useful because widget trees require values, not normal `if-else` statements.

By storing a screen identifier such as `'start-screen'` or `'questions-screen'`, you can use a ternary expression inside the `build()` method to decide which screen should be rendered.

This approach can make the code shorter, easier to manage, and may remove the need for extra initialization logic such as `initState()`.
