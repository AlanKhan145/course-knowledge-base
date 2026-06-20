# Managing the Questions Index as State

## Overview

This lecture explains how to manage the current question index as state in a Flutter `StatefulWidget`.

In the Quiz App, the displayed question depends on the value of `currentQuestionIndex`. When the user selects an answer, the app should move to the next question. To make that happen, the question index must change over time.

Because the UI should update when the index changes, this value must be managed as state and updated inside `setState()`.

---

## Goal

The goal is to make the app move from one question to the next when the user taps an answer button.

To do that, we need to:

1. Store the current question index in a state variable.
2. Use that index to access the current question.
3. Increment the index when an answer is selected.
4. Call `setState()` so Flutter rebuilds the screen.
5. Use the updated index to display the next question.

---

## Key Points

* `currentQuestionIndex` stores which question is currently shown.
* The first question has index `0`.
* The current question is accessed with `questions[currentQuestionIndex]`.
* Updating the index changes which question should be displayed.
* `setState()` tells Flutter to rebuild the widget.
* Incrementing a number can be done with `+ 1`, `+= 1`, or `++`.
* If the index becomes too large, Dart will throw an index-out-of-range error.
* Bounds checking is needed before moving past the last question.

---

## Creating the State Variable

Inside the `State` class, create a variable for the current question index.

```dart id="k1qd7m"
class _QuestionsScreenState extends State<QuestionsScreen> {
  var currentQuestionIndex = 0;

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];

    // UI code...
  }
}
```

The initial value is `0` because Dart lists are zero-based.

That means:

```text id="eqijpm"
questions[0] = first question
questions[1] = second question
questions[2] = third question
```

---

## Using the Index to Access the Current Question

Instead of hardcoding the first question:

```dart id="ycw7d1"
final currentQuestion = questions[0];
```

we use the state variable:

```dart id="josjbv"
final currentQuestion = questions[currentQuestionIndex];
```

Now the question changes when `currentQuestionIndex` changes.

---

## Incrementing the Index

To move to the next question, we need to increase the index by one.

One way is:

```dart id="730rm5"
currentQuestionIndex = currentQuestionIndex + 1;
```

This means:

1. Read the current value.
2. Add `1`.
3. Store the new value back into the variable.

---

## Shorter Increment Syntax

Dart also supports shorter syntax.

### Using `+=`

```dart id="p55an2"
currentQuestionIndex += 1;
```

This means the same as:

```dart id="3m2xd3"
currentQuestionIndex = currentQuestionIndex + 1;
```

---

### Using `++`

If you only want to add `1`, you can use:

```dart id="l3u9w0"
currentQuestionIndex++;
```

This increases the value by one.

---

## Decrementing Values

Dart also supports similar syntax for subtracting values.

```dart id="mqj0oh"
currentQuestionIndex -= 1;
```

This subtracts `1`.

You can also write:

```dart id="umw894"
currentQuestionIndex--;
```

This also subtracts `1`.

---

## Creating the Answer Method

When the user taps an answer, we want to move to the next question.

Create a method inside the state class:

```dart id="b25ceq"
void answerQuestion() {
  setState(() {
    currentQuestionIndex++;
  });
}
```

The call to `setState()` is important.

It tells Flutter:

```text id="dmpvyo"
Some state changed.
Please run build() again.
```

After `build()` runs again, Flutter uses the updated question index and displays the next question.

---

## Why `setState()` Is Needed

Changing the variable alone is not enough.

This updates the value:

```dart id="pouzn8"
currentQuestionIndex++;
```

But Flutter does not automatically know that the UI should rebuild.

That is why we wrap the state update in `setState()`:

```dart id="5ymbl8"
setState(() {
  currentQuestionIndex++;
});
```

This triggers a rebuild.

---

## Passing the Method to the Button

The `AnswerButton` expects a function through its `onTap` argument.

Instead of passing an empty anonymous function:

```dart id="y5avt7"
onTap: () {},
```

we pass a pointer to the `answerQuestion` method:

```dart id="m6fs9m"
onTap: answerQuestion,
```

Notice that there are no parentheses.

Correct:

```dart id="iqcjuf"
onTap: answerQuestion,
```

Incorrect for this situation:

```dart id="nze5kz"
onTap: answerQuestion(),
```

Writing parentheses would execute the function immediately during build, instead of waiting for the button tap.

---

## Basic Code Example

```dart id="5m8ahu"
class _QuestionsScreenState extends State<QuestionsScreen> {
  var currentQuestionIndex = 0;

  void answerQuestion() {
    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];

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
                onTap: answerQuestion,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

---

## Extended Version: Storing Selected Answers

Later, the app also needs to remember which answers the user selected.

For that, we can store selected answers in a list.

```dart id="k21gt2"
class _QuestionsScreenState extends State<QuestionsScreen> {
  var currentQuestionIndex = 0;
  final List<String> selectedAnswers = [];

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);

    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];

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
                fontSize: 24,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 30),
            ...currentQuestion.getShuffledAnswers().map(
              (answer) => AnswerButton(
                answerText: answer,
                onTap: () {
                  chooseAnswer(answer);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```

In this version:

```dart id="zlmviu"
selectedAnswers.add(answer);
```

stores the selected answer.

Then:

```dart id="fpmtqs"
setState(() {
  currentQuestionIndex++;
});
```

moves to the next question and rebuilds the screen.

---

## Why Only Store the Index?

Instead of storing the whole current question object as state, we only store the index.

```dart id="0fwnbo"
var currentQuestionIndex = 0;
```

Then we derive the current question from the list:

```dart id="17s0oh"
final currentQuestion = questions[currentQuestionIndex];
```

This keeps the state minimal.

The app only needs to remember which question number is currently active.

---

## Important Problem: Index Out of Range

At this stage, there is still a problem.

Every time an answer is selected, the index increases.

Eventually, the index may become larger than the number of available questions.

For example, if there are six questions, valid indices are:

```text id="nndqmu"
0, 1, 2, 3, 4, 5
```

If `currentQuestionIndex` becomes `6`, this will fail:

```dart id="ur0krz"
questions[currentQuestionIndex]
```

because `questions[6]` does not exist.

This causes an index-out-of-range error.

---

## Bounds Checking

To avoid this error, we can check whether there are more questions before incrementing.

```dart id="hnm95c"
void chooseAnswer(String answer) {
  selectedAnswers.add(answer);

  if (currentQuestionIndex < questions.length - 1) {
    setState(() {
      currentQuestionIndex++;
    });
  } else {
    // The quiz is finished.
  }
}
```

This logic will be important when switching to the results screen.

---

## About Shuffled Answers

The current code calls:

```dart id="9vm4mx"
currentQuestion.getShuffledAnswers()
```

inside the `build()` method.

That means the answers can be shuffled again every time the widget rebuilds.

For this stage of the app, that is acceptable.

However, in a more advanced implementation, you may want to shuffle the answers once per question and store them, so the order does not change during unrelated rebuilds.

---

## Notes

`currentQuestionIndex` is state because it changes over time and affects the UI.

Calling `setState()` causes Flutter to rerun the `build()` method.

The new value of `currentQuestionIndex` is then used to access a different question from the `questions` list.

Passing `answerQuestion` without parentheses gives the button a function reference.

Using parentheses would execute the function immediately, which is not what we want.

---

## Summary

This lecture showed how to manage the current question index as state.

The index starts at `0`, which displays the first question.

When an answer button is tapped, the index is incremented inside `setState()`. Flutter then rebuilds the widget and displays the next question.

This pattern is common in Flutter apps that use paginated, step-based, or question-based interfaces.

The next important step is to prevent the index from going out of range and switch to the results screen when the quiz is complete.
