# Mutating Values in Memory

## Overview

This lecture explains how Dart handles mutable values in memory, especially lists.

In the Quiz App, the correct answer is always stored as the first item in the answers list. However, when displaying answers to the user, we do not want the correct answer to always appear first. Therefore, the answers should be shuffled before they are displayed.

To do this correctly, we need to understand an important difference:

* Some methods create a new value.
* Some methods mutate the existing value in memory.

The `map()` method does not change the original list.
The `shuffle()` method does change the original list.

Because of that, we must copy the answers list before shuffling it.

---

## Goal

The goal is to shuffle the answer options before displaying them while keeping the original answers list unchanged.

This is important because the app still needs to know which answer is correct later.

By convention, the correct answer is stored at index `0`.

```dart id="mfdq0j"
answers[0]
```

If we shuffle the original list directly, we lose that guarantee.

---

## Key Points

* `map()` transforms list values without changing the original list.
* `shuffle()` changes the original list in place.
* To shuffle safely, first create a copy of the list.
* `List.of(existingList)` creates a new list based on an existing list.
* `final` prevents variable reassignment.
* `final` does not prevent mutating the object stored in the variable.
* A `final List` cannot be reassigned, but its contents can still be changed.
* `const` creates truly immutable compile-time values.
* Understanding mutation helps prevent bugs when managing Flutter state.

---

## `map()` Does Not Mutate the Original List

The `map()` method creates a transformed sequence of values.

Example:

```dart id="kt7ipc"
final numbers = [1, 2, 3];

final doubledNumbers = numbers.map((number) {
  return number * 2;
});
```

The original list is still:

```dart id="y47s0k"
[1, 2, 3]
```

`map()` does not modify the original list.

It creates a new transformed result.

---

## `shuffle()` Mutates the Original List

The `shuffle()` method changes the order of items in the list on which it is called.

Example:

```dart id="7ohfxh"
final answers = [
  'Widgets',
  'Components',
  'Blocks',
  'Functions',
];

answers.shuffle();
```

After calling `shuffle()`, the original `answers` list has changed.

The order might become:

```dart id="j5ggbd"
[
  'Functions',
  'Widgets',
  'Blocks',
  'Components',
]
```

This is a problem if the first answer must remain the correct answer.

---

## Why We Should Not Shuffle the Original Answers List

In the Quiz App, the first answer is always the correct answer.

Example:

```dart id="95xe30"
[
  'Widgets',
  'Components',
  'Blocks',
  'Functions',
]
```

The correct answer is:

```dart id="w3cx09"
'Widgets'
```

because it is stored at index `0`.

If we call:

```dart id="u8bk83"
answers.shuffle();
```

then `'Widgets'` may no longer be at index `0`.

That makes it harder to determine the correct answer later when building the results screen.

---

## Creating a Copy with `List.of()`

To avoid changing the original list, we first create a copy.

```dart id="2g4pbq"
final shuffledList = List.of(answers);
```

`List.of()` creates a new list based on an existing list.

Now we can shuffle the copied list instead of the original list.

```dart id="vb554i"
shuffledList.shuffle();
```

The original `answers` list remains unchanged.

---

## Adding `getShuffledAnswers()`

We can add a method to the `QuizQuestion` model class.

```dart id="vnpgba"
class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final shuffledList = List.of(answers);
    shuffledList.shuffle();
    return shuffledList;
  }
}
```

This method:

1. Copies the original answers list.
2. Shuffles the copied list.
3. Returns the shuffled copy.

The original list stays unchanged.

---

## Why This Code Is Needed

You might think this could work:

```dart id="b548yd"
return List.of(answers).shuffle();
```

But this does not work as expected because `shuffle()` does not return the shuffled list.

The `shuffle()` method changes the list in place and returns nothing.

Therefore, we need to store the copied list first.

```dart id="c6i16n"
final shuffledList = List.of(answers);
shuffledList.shuffle();
return shuffledList;
```

---

## Understanding In-Place Mutation

The line:

```dart id="q2u9zs"
shuffledList.shuffle();
```

does not create a new list.

Instead, it changes the existing list object in memory.

This is called mutating the value in place.

Before shuffle:

```dart id="ht1aa3"
[
  'Widgets',
  'Components',
  'Blocks',
  'Functions',
]
```

After shuffle:

```dart id="5ekne3"
[
  'Functions',
  'Widgets',
  'Blocks',
  'Components',
]
```

The same list object still exists, but its internal order changed.

---

## `final` and Mutation

This line creates a `final` variable:

```dart id="sp2x02"
final shuffledList = List.of(answers);
```

Because it is `final`, you cannot reassign it.

This is not allowed:

```dart id="xsrhpl"
shuffledList = ['New', 'List'];
```

However, you can still mutate the list object.

This is allowed:

```dart id="zaqhco"
shuffledList.shuffle();
```

This is also allowed:

```dart id="eo4bgg"
shuffledList.add('Another answer');
```

Why?

Because `final` protects the variable from being reassigned.
It does not make the object itself immutable.

---

## Reassignment vs Mutation

### Reassignment

Reassignment means making a variable point to a new value.

```dart id="yz25x1"
var name = 'Alice';

name = 'Bob';
```

Here, the variable `name` is reassigned.

---

### Mutation

Mutation means changing the existing object in memory.

```dart id="kx4oh5"
final numbers = [1, 2, 3];

numbers.add(4);
```

The variable `numbers` still points to the same list.

But the list contents changed.

---

## `var`, `final`, and `const`

| Keyword | Meaning                                                                 |
| ------- | ----------------------------------------------------------------------- |
| `var`   | The variable can be reassigned                                          |
| `final` | The variable cannot be reassigned                                       |
| `const` | The value is a compile-time constant and deeply immutable in normal use |

---

## Example with `var`

```dart id="ab0vjc"
var currentQuestionIndex = 0;

currentQuestionIndex = 1;
```

This is allowed because `var` variables can be reassigned.

---

## Example with `final`

```dart id="7364vl"
final numbers = [1, 2, 3];

numbers.add(4);
```

This is allowed because the list object is being mutated.

But this is not allowed:

```dart id="ra6mqt"
numbers = [5, 6, 7];
```

A `final` variable cannot be reassigned.

---

## Example with `const`

```dart id="pnneqa"
const numbers = [1, 2, 3];
```

This creates a compile-time constant list.

You cannot mutate it.

```dart id="akvhuu"
numbers.add(4); // Error
```

Use `const` when the value should be truly fixed.

---

## Using Shuffled Answers in the Questions Screen

After adding `getShuffledAnswers()`, we can use it in `questions_screen.dart`.

Instead of this:

```dart id="q3xq8q"
...currentQuestion.answers.map(
  (answer) => AnswerButton(
    answerText: answer,
    onTap: () {},
  ),
),
```

we use this:

```dart id="w1896m"
...currentQuestion.getShuffledAnswers().map(
  (answer) => AnswerButton(
    answerText: answer,
    onTap: () {},
  ),
),
```

Now the displayed answers are shuffled.

The original answer list remains unchanged.

---

## Full Example

### `quiz_question.dart`

```dart id="mks4qx"
class QuizQuestion {
  const QuizQuestion(this.text, this.answers);

  final String text;
  final List<String> answers;

  List<String> getShuffledAnswers() {
    final shuffledList = List.of(answers);
    shuffledList.shuffle();
    return shuffledList;
  }
}
```

---

### `questions_screen.dart`

```dart id="sd2b47"
@override
Widget build(BuildContext context) {
  final currentQuestion = questions[0];

  return SizedBox(
    width: double.infinity,
    child: Container(
      margin: const EdgeInsets.all(40),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            currentQuestion.text,
            style: const TextStyle(
              color: Colors.white,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 30),
          ...currentQuestion.getShuffledAnswers().map(
            (answer) => AnswerButton(
              answerText: answer,
              onTap: () {},
            ),
          ),
        ],
      ),
    ),
  );
}
```

---

## Method Chaining

This code uses method chaining:

```dart id="a4wd28"
currentQuestion.getShuffledAnswers().map(...)
```

Method chaining means calling a method on the result of another method.

Step by step:

```dart id="s4ibbn"
currentQuestion.getShuffledAnswers()
```

returns a shuffled list.

Then:

```dart id="lwfjn7"
.map(...)
```

is called on that shuffled list.

This is common in Dart and Flutter.

---

## Important Note About `setState`

In Flutter, changing data does not automatically rebuild the UI.

If a mutation should update something visible on the screen, it should usually happen inside `setState()`.

Example:

```dart id="44i3q7"
setState(() {
  currentQuestionIndex++;
});
```

However, mutating data that is not directly used to rebuild the current UI may not need to be inside `setState()`.

For example, storing selected answers for later use can be done separately if the UI does not need to update immediately because of that change.

---

## Example: Mutating a List in State

```dart id="gryv3n"
class _QuestionsScreenState extends State<QuestionsScreen> {
  var currentQuestionIndex = 0;

  final List<String> selectedAnswers = [];

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    setState(() {
      currentQuestionIndex++;
    });
  }
}
```

Here:

```dart id="p6psw1"
selectedAnswers.add(answer);
```

mutates the existing list.

And:

```dart id="m79nql"
currentQuestionIndex++;
```

changes the current question index, which affects the UI, so it is placed inside `setState()`.

---

## Notes

The `shuffle()` method is useful, but it mutates the list on which it is called.

To avoid changing important original data, create a copy first with `List.of()`.

The `final` keyword prevents reassignment, but it does not make mutable objects immutable.

This distinction is important when working with lists, maps, and other objects in Flutter state.

In more complex apps, be careful when calling shuffle logic inside `build()`, because `build()` can run multiple times. If the answer order must remain stable during a question, compute and store the shuffled answers once per question.

---

## Summary

This lecture explained the difference between mutating a value and reassigning a variable.

`shuffle()` mutates a list in memory, while `map()` creates a transformed result without changing the original list.

To safely shuffle quiz answers, we create a copy of the original answers list using `List.of()`, shuffle that copy, and return it from `getShuffledAnswers()`.

Understanding mutation, reassignment, `final`, and `const` is essential for managing state correctly in Flutter apps.
