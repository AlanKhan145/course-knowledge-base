# Debugging Apps and Using Debug Mode

## Overview

Understanding error messages is an essential debugging skill, but it is not the only tool available to developers.

This lecture introduces how to run a Flutter app with debugging enabled and how to use breakpoints, variable inspection, the watch window, and step-by-step execution to investigate bugs at runtime.

The lesson focuses on the second bug in the quiz app: after restarting the quiz and going through the questions again, the app throws a list index error and the entire screen is affected.

## The Problem

After fixing the first error, the quiz works correctly the first time. However, if the quiz is restarted and completed again, a new error appears.

The error message indicates that the app is trying to access index `6` in a list that only has valid indexes from `0` to `5`.

This means the app is trying to access a list item that does not exist.

In the Debug Console, the stack trace points to the `build` method of the `QuestionsScreenState` class. This suggests that the error is related to the question screen trying to display a question using an invalid index.

## Understanding the Error

The app has six questions.

That means the valid indexes are:

```text
0, 1, 2, 3, 4, 5
```

If the app tries to access index `6`, Flutter throws a runtime error because there is no seventh item in the list.

The error is likely caused by this kind of logic:

```dart
questions[currentQuestionIndex]
```

If `currentQuestionIndex` becomes `6`, this line will fail because the last valid index is `5`.

## Running the App with Debugging

To investigate the issue more deeply, the app can be started with debugging enabled.

In VS Code, you can stop the running app and then use:

```text
Run > Start Debugging
```

Or open `main.dart` and click the **Debug** option.

This starts the app in a debugging session, which unlocks extra tools for inspecting the app while it runs.

Debugging mode can make the app slower, so it is not always the best default mode for normal testing. However, it is extremely useful when tracking down bugs.

## What Debug Mode Allows You to Do

When the app is running with debugging enabled, you can:

* Add breakpoints to pause execution
* Inspect variable values at runtime
* Hover over variables to see their current values
* Add variables to the Watch window
* Step through code line by line
* Inspect the call stack
* See exactly which code is running at a specific moment

These tools help you confirm what your code is actually doing instead of guessing.

## Using Breakpoints

A breakpoint pauses the app when execution reaches a specific line of code.

To add a breakpoint in VS Code:

1. Open the relevant Dart file
2. Move your mouse to the left side of the line number
3. Click the red dot area
4. A red dot appears, indicating that a breakpoint has been added

When the app reaches that line, execution pauses automatically.

At that point, you can inspect the current values of variables and properties.

## Inspecting Variables

When the app pauses at a breakpoint, you can hover over variables to see their current values.

For example, hovering over `currentQuestionIndex` shows the current question index being used by the app.

You can also inspect the `questions` list and confirm that it contains six items.

This is useful because it lets you compare:

```text
currentQuestionIndex = 5
questions.length = 6
```

Index `5` is valid because the list contains six items.

But if the value becomes:

```text
currentQuestionIndex = 6
questions.length = 6
```

Then the app will crash because index `6` does not exist.

## Using the Watch Window

Instead of hovering over a variable every time, you can add it to the Watch window.

To do this, right-click a variable or property and choose an option such as:

```text
Add to Watch
```

This keeps the variable visible in the debugger panel and updates its value whenever execution pauses again.

In this lecture, `currentQuestionIndex` is added to the Watch window so its value can be tracked while answering questions.

## First Investigation

After restarting the quiz, the debugger shows that `currentQuestionIndex` is reset to `0`.

This means the question index itself is not immediately the problem.

However, after answering more questions and reaching the end of the quiz again, the debugger shows that `currentQuestionIndex` eventually becomes `6`.

Since there are only six questions, this explains why the app crashes.

But this only explains what happens. It does not yet explain why it happens.

## Finding the Deeper Cause

The next step is to inspect the logic that decides when the app should leave the question screen and move to the result screen.

This logic is inside the `quiz.dart` file.

The app should move to the result screen once the number of selected answers equals the number of questions.

The relevant logic is similar to this:

```dart
if (selectedAnswers.length == questions.length) {
  setState(() {
    activeScreen = 'results-screen';
  });
}
```

This condition should become true after all questions have been answered.

However, while debugging, the `selectedAnswers` list contains far more than six answers. For example, it contains 11 or 12 answers, even though the app only has six questions.

That means the condition is not met:

```text
selectedAnswers.length = 12
questions.length = 6
```

Since `12 == 6` is false, the app never moves to the result screen.

As a result, it stays on the question screen too long, and `currentQuestionIndex` eventually becomes too high.

## The Actual Bug

The real problem is that the `selectedAnswers` list is not reset when the quiz restarts.

The app goes back to the question screen, but the old answers are still stored in the list.

Because of that, the next quiz attempt adds more answers to the existing list instead of starting fresh.

This breaks the condition that checks whether all questions have been answered.

## The Fix

The `restartQuiz` method should reset the selected answers list.

Before the fix, the method may only switch back to the questions screen:

```dart
void restartQuiz() {
  setState(() {
    activeScreen = 'questions-screen';
  });
}
```

The fixed version should also clear `selectedAnswers`:

```dart
void restartQuiz() {
  setState(() {
    selectedAnswers = [];
    activeScreen = 'questions-screen';
  });
}
```

Now, every time the quiz restarts, the app clears the previous answers and starts with a fresh empty list.

## Why This Fix Works

After resetting `selectedAnswers`, the quiz starts again with:

```text
selectedAnswers.length = 0
```

As the user answers questions, the list grows normally:

```text
1, 2, 3, 4, 5, 6
```

When the list length reaches `6`, it matches the number of questions, so the app correctly switches to the result screen.

The question screen no longer stays active too long, and `currentQuestionIndex` no longer reaches an invalid value.

## Step-Through Debugging

The debugger also allows you to execute code step by step.

Useful controls include:

* **Continue**: resumes normal execution until the next breakpoint
* **Step Over**: runs the current line and moves to the next line
* **Step Into**: enters a function call
* **Step Out**: exits the current function and returns to the caller

In this lecture, step-by-step execution is used to confirm that the `if` condition is not entered because `selectedAnswers.length` is already larger than `questions.length`.

This confirms that the app never navigates away from the questions screen.

## Key Points

* Debugging mode allows you to inspect your Flutter app while it is running
* Breakpoints pause execution at specific lines of code
* Hovering over variables shows their current runtime values
* The Watch window helps track important values over time
* Step-through execution lets you move through code one statement at a time
* A list index error happens when code tries to access an item that does not exist
* In this app, `currentQuestionIndex` became `6`, but the last valid index was `5`
* The root cause was that `selectedAnswers` was not reset when restarting the quiz
* Resetting `selectedAnswers` fixed the navigation logic and removed the error

## Debugging Workflow Used in This Lecture

The debugging process followed these steps:

1. Reproduce the error by restarting and completing the quiz again
2. Read the error message in the Debug Console
3. Identify that the error is related to an invalid list index
4. Start the app with debugging enabled
5. Add a breakpoint in the question screen
6. Inspect `currentQuestionIndex`
7. Confirm that the index eventually becomes too high
8. Add breakpoints in `quiz.dart`
9. Inspect `selectedAnswers`
10. Discover that old answers were not cleared
11. Fix `restartQuiz` by resetting `selectedAnswers`
12. Run the app again and confirm that the error is gone

## Notes

Debugging tools are useful because they show the real state of your app while it is running.

Without the debugger, you might guess that the problem is caused by `currentQuestionIndex`. But the debugger reveals that the deeper issue is actually the `selectedAnswers` list not being cleared.

This is why debugging is so powerful: it helps you move from guessing to observing.

## Summary

This lecture demonstrates how to use Flutter debugging tools to investigate a runtime bug. By running the app with debugging enabled, adding breakpoints, inspecting variables, and stepping through the code, the root cause of the error was found. The app crashed because `selectedAnswers` was not reset when restarting the quiz, preventing the app from navigating to the result screen. Resetting `selectedAnswers` inside `restartQuiz` fixed the problem.
