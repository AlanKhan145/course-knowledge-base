# Understanding Error Messages

## Overview

This lecture explains how to read and understand error messages in Flutter. Error messages are one of the most useful tools for finding and fixing bugs because they often tell you what went wrong, where it happened, and which part of your code is involved.

In this lesson, the first bug in the starting project is investigated. The app throws an error after going through all quiz questions and reaching the result screen. By carefully reading the error message and the stack trace, the root cause of the bug can be identified and fixed.

## Why Error Messages Matter

When a Flutter app throws an error during development, Flutter displays an error message directly on the screen. This is usually shown as a red error screen or an error widget.

This development error screen can already provide useful hints about the problem. For example, in this project, the visible error message suggests that the issue is related to type casting.

This is important because the app only performs type casting in a specific place: inside the summary item widget. That gives us a strong clue about where to start investigating.

## Development vs Production Behavior

The detailed error screen is only shown during development.

If the app is built for production and distributed through an app store, users will not see the same developer-focused error message. In production, the app may simply crash or fail silently depending on the situation.

During development, however, Flutter intentionally shows detailed error information so that developers can diagnose and fix problems faster.

## Using the Debug Console

The error shown inside the app is sometimes enough to understand the problem, but not always.

For more complete error details, you should open the Debug Console in your editor.

In Visual Studio Code, you can open the panel by using:

```text
View > Appearance > Panel
```

Or by using the panel shortcut shown in the editor.

Once the panel is open, go to the **Debug Console** tab. This is where Flutter prints more detailed information about the error.

## What the Debug Console Shows

The Debug Console can show:

* The full error message
* The exception type
* The widget related to the error
* A stack trace
* Links to the file and line number where the error occurred
* Highlighted stack trace entries that point to relevant code

In this example, the Debug Console shows that the error is related to the `SummaryItem` widget. It also provides a clickable link to the relevant file and line of code.

Clicking the link takes you directly to the `questions_summary` widget where the `SummaryItem` is used, and then more specifically to the line inside the `SummaryItem` build method that caused the error.

## Reading the Stack Trace

A stack trace is a long list of method calls that were involved when the error occurred.

At first, stack traces can look overwhelming because they contain many internal Flutter framework calls. Most of those internal calls are not the part you need to fix.

When reading a stack trace, focus on:

* Lines that refer to your own project files
* Paths that include `lib/`
* Highlighted stack trace entries
* The first relevant line that points to your code
* The method or widget mentioned near the top of the error output

In this case, the useful stack trace entry points to the `build` method of the `SummaryItem` widget.

That line becomes the best starting point for debugging.

## The Actual Error

The error message indicates that the app is trying to cast a value to `int`, but the actual value is a `String`.

The problematic code is trying to tell Dart that a value from a map is an integer:

```dart
final questionIndex = itemData['question'] as int;
```

However, the value stored under the `question` key is actually a string.

That means Dart cannot treat it as an integer at runtime, so the app crashes.

## Finding the Root Cause

To understand why this happens, we need to look at where the map is created.

The map is constructed in the result screen. There, we can inspect which values are stored for each key.

The problem is that the wrong key is being accessed.

The `question` key stores the question text, which is a `String`.

The `question_index` key stores the question index, which is an `int`.

So this code is wrong:

```dart
final questionIndex = itemData['question'] as int;
```

Because `itemData['question']` returns a string.

The correct code should use the `question_index` key instead:

```dart
final questionIndex = itemData['question_index'] as int;
```

## Why Dart Did Not Catch This Earlier

The map uses `Object` as its value type because it needs to store different kinds of values.

For example, the map may contain:

* An integer question index
* A string question text
* A string selected answer
* A string correct answer

Because the map value type is `Object`, Dart only knows that each value can be some kind of object. It does not know the exact type of each individual key.

Therefore, Dart does not show an error in the IDE when the wrong key is accessed.

The error only happens at runtime when the app actually tries to cast a `String` to an `int`.

## Code Example

```dart
// Wrong: the 'question' key stores a String
final questionIndex = itemData['question'] as int;
```

```dart
// Correct: the 'question_index' key stores an int
final questionIndex = itemData['question_index'] as int;
```

## Fixing the Bug

To fix the bug, replace the wrong map key:

```dart
itemData['question']
```

With the correct key:

```dart
itemData['question_index']
```

After applying the fix and reloading the app, the quiz can be completed again, and the result screen appears without the previous error.

The Debug Console also no longer shows the same error message.

## Debugging Process Used in This Lecture

The debugging process followed these steps:

1. Run the app and reproduce the error
2. Read the error message shown on the screen
3. Identify that the issue is related to type casting
4. Open the Debug Console for more detailed output
5. Scroll through the console output and find the stack trace
6. Look for highlighted lines or project files in the stack trace
7. Open the file and line number mentioned by Flutter
8. Inspect the suspicious line of code
9. Compare the expected type with the actual value
10. Find the incorrect map key
11. Replace it with the correct key
12. Reload the app and confirm that the error is gone

## Key Points

* Flutter error messages are valuable debugging tools
* The red error screen is only shown during development
* The Debug Console provides more detailed error information
* Stack traces contain many internal Flutter calls that can often be ignored
* Focus on lines that reference your own project files
* Highlighted stack trace entries are often good starting points
* Type casting errors happen when a value is treated as the wrong type
* Maps with `Object` values can hide type mistakes until runtime
* Error messages should be treated as starting points for investigation

## Notes

Error messages do not always give you the complete solution, but they usually point you in the right direction.

In this example, the error message did not directly say “use `question_index` instead of `question`.” However, it did reveal that the app was trying to cast a string to an integer. That clue led directly to the problematic line of code.

Good debugging means carefully combining the error message, the stack trace, and your understanding of the app’s code.

## Summary

This lecture demonstrates how to use Flutter error messages and the Debug Console to investigate a runtime bug. The app crashed because a map value stored under the `question` key was being cast to `int`, even though it was actually a `String`. By reading the error message, inspecting the stack trace, and checking the related code, the bug was found and fixed by using the correct `question_index` key.
